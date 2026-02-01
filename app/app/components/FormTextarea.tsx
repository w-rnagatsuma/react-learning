type FormTextareaProps = {
  placeholder: string;
};

export default function FormTextarea({ placeholder }: FormTextareaProps) {
  return (
    <textarea
      placeholder={placeholder}
      className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 min-h-[140px]"
    />
  );
}
