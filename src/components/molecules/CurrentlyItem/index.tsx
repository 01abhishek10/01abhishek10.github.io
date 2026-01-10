interface CurrentlyItemProps {
  label: string;
  value: string;
}

/**
 * CurrentlyItem molecule - displays a "currently doing" item.
 * Shows what the person is currently focused on.
 * @param label - Category (e.g., "Building", "Learning")
 * @param value - Current focus in that category
 */
export default function CurrentlyItem({ label, value }: CurrentlyItemProps) {
  return (
    <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-200 transition-colors">
      <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide min-w-[80px]">
        {label}
      </span>
      <span className="text-gray-700">{value}</span>
    </div>
  );
}
