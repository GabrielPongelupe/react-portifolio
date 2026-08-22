import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";

const StarRating = ({ rating, className = "" }) => {
  const clamped = Math.max(0, Math.min(5, rating));
  const full = Math.floor(clamped);
  const half = clamped - full >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center gap-0.5 text-amber-400">
        {Array.from({ length: full }).map((_, i) => (
          <IoStar key={`full-${i}`} />
        ))}
        {half === 1 && <IoStarHalf />}
        {Array.from({ length: empty }).map((_, i) => (
          <IoStarOutline key={`empty-${i}`} className="text-neutral-300" />
        ))}
      </div>
      <span className="text-xs font-semibold text-neutral-500">{clamped.toFixed(1)}</span>
    </div>
  );
};

export default StarRating;
