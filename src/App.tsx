import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { useHealth } from "@/hooks/useHealth";
import { FormProvider } from "@/contexts/FormContext";
import { ErrorBoundary } from "@/components/common/ErrorBoundary";
import { Loading } from "@/components/common/Loading";
import { useRouter } from "next/router";

// Pages
import NotFound from "@/app/NotFound";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function AppContent() {
  const { isLoading } = useHealth();
  const router = useRouter();

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loading size="lg" />
      </div>
    );
  }

  return <NotFound />;
}

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <TooltipProvider>
            <FormProvider>
              <Toaster />
              <AppContent />
            </FormProvider>
          </TooltipProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
