interface BeliefCardProps {
  title: string;
  description: string;
}

/**
 * BeliefCard molecule - displays a core belief/value.
 * Used in About page to show philosophy and principles.
 * @param title - Belief title (e.g., "Ship > Perfect")
 * @param description - Explanation of the belief
 */
export default function BeliefCard({ title, description }: BeliefCardProps) {
  return (
    <div className="p-5 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
      <h4 className="text-base font-semibold text-gray-900 mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
