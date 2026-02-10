export default function SectionTitle({
  title,
  description,
}: {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  titleComponent?: React.ReactNode;
}) {
  const titleElement =
    typeof title === "string" ? (
      <h3 className="animate-fade-in text-foreground text-2xl font-bold tracking-tight sm:text-3xl">
        {title}
      </h3>
    ) : (
      title
    );
  const descriptionElement =
    typeof description === "string" ? (
      <p className="animate-fade-in text-muted-foreground mt-2 text-sm leading-relaxed" style={{ animationDelay: '0.1s' }}>
        {description}
      </p>
    ) : (
      description
    );

  return (
    <div className="mx-auto mb-4 max-w-2xl text-center">
      {titleElement}
      {descriptionElement}
    </div>
  );
}
