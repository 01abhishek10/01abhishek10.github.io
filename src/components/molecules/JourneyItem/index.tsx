interface JourneyItemProps {
  year: string;
  title: string;
  description: string;
  isLast?: boolean;
}

/**
 * JourneyItem molecule - timeline item showing a milestone.
 * Used in About page to display career/learning journey.
 * @param year - Year of milestone
 * @param title - Milestone title
 * @param description - Brief description
 * @param isLast - Whether this is the last item (hides connector line)
 */
export default function JourneyItem({ year, title, description, isLast = false }: JourneyItemProps) {
  return (
    <div className="relative pl-8 pb-8 group">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[11px] top-6 w-0.5 h-full bg-gray-200 group-hover:bg-blue-200 transition-colors" />
      )}

      {/* Timeline dot */}
      <div className="absolute left-0 top-1 w-6 h-6 bg-white border-2 border-gray-300 rounded-full group-hover:border-blue-500 group-hover:bg-blue-50 transition-colors flex items-center justify-center">
        <div className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-blue-500 transition-colors" />
      </div>

      {/* Content */}
      <div className="pt-0.5">
        <span className="text-sm font-mono text-blue-600 font-medium">{year}</span>
        <h4 className="text-lg font-semibold text-gray-900 mt-1">{title}</h4>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
      </div>
    </div>
  );
}
