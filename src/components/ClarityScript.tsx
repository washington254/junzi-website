import Script from 'next/script';

export const ClarityScript = () => {
  return (
    <>
      {/* Microsoft Clarity - основной скрипт */}
      <Script 
        id="microsoft-clarity" 
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "pmsr9sz2vg");
          `
        }}
      />
      
      {/* Дополнительный скрипт для отслеживания навигации */}
      <Script 
        id="clarity-navigation-tracking"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // Отслеживание навигации для SPA
            if (typeof window !== 'undefined' && window.clarity) {
              // Отслеживаем изменения маршрута
              let currentPath = window.location.pathname;
              
              const observer = new MutationObserver(() => {
                if (window.location.pathname !== currentPath) {
                  currentPath = window.location.pathname;
                  if (window.clarity) {
                    window.clarity("set", "page_view", currentPath);
                  }
                }
              });
              
              observer.observe(document.body, {
                childList: true,
                subtree: true
              });
            }
          `
        }}
      />
    </>
  );
}; 