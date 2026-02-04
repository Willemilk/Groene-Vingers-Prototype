interface EmptyStateProps {
  icon?: string;
  title: string;
  description?: string;
}

export default function EmptyState({ icon = '👋', title, description }: EmptyStateProps) {
  return (
    <div className="text-center text-white/60 mt-20">
      <p className="text-4xl mb-4">{icon}</p>
      <p className="text-lg mb-2">{title}</p>
      {description && <p className="text-sm">{description}</p>}
    </div>
  );
}
