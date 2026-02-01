type FormTextareaProps = {
  placeholder: string;
  value?: string;
  name?: string;
  id?: string;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  className?: string;
};

export default function FormTextarea({
  placeholder,
  value,
  name,
  id,
  disabled,
  onChange,
  className,
}: FormTextareaProps) {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      name={name}
      id={id}
      disabled={disabled}
      onChange={onChange}
      className={`px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 min-h-[140px] ${
        className ?? ""
      }`}
    />
  );
}
