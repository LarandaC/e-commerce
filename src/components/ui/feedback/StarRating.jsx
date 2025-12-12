import { Star, StarHalf } from "lucide-react";

export const StarRating = ({
  rating = 0,
  maxRating = 5,
  size = "md",
  showCount = true,
  reviewCount = 0,
  interactive = false,
  onChange,
}) => {
  const sizes = {
    sm: 14,
    md: 18,
    lg: 24,
  };

  const iconSize = sizes[size];

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`full-${i}`}
          size={iconSize}
          className="fill-warning text-warning transition-transform hover:scale-110"
        />
      );
    }

    // Half star
    if (hasHalfStar && fullStars < maxRating) {
      stars.push(
        <StarHalf
          key="half"
          size={iconSize}
          className="fill-warning text-warning"
        />
      );
    }

    // Empty stars
    const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star
          key={`empty-${i}`}
          size={iconSize}
          className="text-border hover:text-warning transition-colors"
        />
      );
    }

    return stars;
  };

  return (
    <div className="inline-flex items-center gap-2">
      <div className="flex items-center gap-0.5">{renderStars()}</div>
      {showCount && reviewCount > 0 && (
        <span className="text-xs text-muted">({reviewCount})</span>
      )}
    </div>
  );
};
