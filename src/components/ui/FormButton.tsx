type FormButtonProps = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
};

export default function FormButton({
  children,
  type = 'button',
  onClick,
  disabled,
  className,
}: FormButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`mt-2 px-6 py-3 rounded-lg transition-colors ${
        disabled
          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
          : 'bg-blue-600 text-white hover:bg-blue-700'
      } ${className ?? ''}`}
    >
      {children}
    </button>
  );
}
