type FormButtonProps = {
  children: React.ReactNode;
};

export default function FormButton({ children }: FormButtonProps) {
  return (
    <button
      type="button"
      className="mt-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
    >
      {children}
    </button>
  );
}
