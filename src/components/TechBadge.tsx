interface TechBadgeProps {
  icon: string;
  name: string;
}

function TechBadge({ icon, name }: TechBadgeProps) {
  return (
    <div
      className="
    group
    flex items-center gap-2
    rounded-full
    border border-zinc-800
    px-4 py-2
    transition-all duration-150
    hover:border-[#ff5277]
    hover:bg-[#ff5277]/5
    hover:text-[#ff5277]
  "
    >
      <img
        src={icon}
        alt={name}
        className="h-5 w-5 object-contain transition-transform group-hover:scale-110"
      />

      <span>{name}</span>
    </div>
  );
}

export default TechBadge;
