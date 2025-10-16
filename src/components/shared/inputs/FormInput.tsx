interface FormInputProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  autoComplete?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  autoComplete = "on",
}) => {
  return (
    <div>
      <label className="flex items-center text-xs sm:text-sm font-medium text-black mb-1">
        {label}
      </label>
      <input
        type={type}
        className="w-full p-2 sm:p-2.5 border text-xs sm:text-sm text-black rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white"
        placeholder={placeholder}
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        name={label.toLowerCase().replace(/\s+/g, '-')}
      />
    </div>
  );
}; 