interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <h2
        className={`${light ? 'text-white' : 'text-brand-dark'} mb-4`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-body-lg max-w-2xl ${
            align === 'center' ? 'mx-auto' : ''
          } ${light ? 'text-brand-muted' : 'text-brand-muted-dark'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
