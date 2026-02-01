type FormInputProps = {
  type: string;
  placeholder: string;
};

export default function FormInput({ type, placeholder }: FormInputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800"
    />
  );
}
