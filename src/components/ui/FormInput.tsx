type FormInputProps = {
  type: string;
  placeholder: string;
  value?: string;
  name?: string;
  id?: string;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
};

export default function FormInput({
  type,
  placeholder,
  value,
  name,
  id,
  disabled,
  onChange,
  className,
}: FormInputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      id={id}
      disabled={disabled}
      onChange={onChange}
      className={`px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 ${
        className ?? ''
      }`}
    />
  );
}
