type LinkCardProps = {
  href: string;
  title: string;
  description: string;
  isExternal?: boolean;
};

const baseClassName = 'w-full px-6 py-4 border rounded-lg transition-colors text-left';

const internalClassName =
  'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700';

const externalClassName =
  'bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900';

function ExternalIcon() {
  return (
    <svg
      className="w-4 h-4 text-blue-600 dark:text-blue-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}

export default function LinkCard({ href, title, description, isExternal = false }: LinkCardProps) {
  const className = baseClassName + ' ' + (isExternal ? externalClassName : internalClassName);

  return (
    <a
      href={href}
      {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
      className={className}
    >
      <h2 className="text-lg font-semibold mb-1 flex items-center gap-2">
        {title}
        {isExternal && <ExternalIcon />}
      </h2>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </a>
  );
}
