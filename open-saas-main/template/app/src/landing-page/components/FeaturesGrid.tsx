import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "../../client/components/ui/card";
import { cn } from "../../client/utils";
import { Feature } from "./Features";
import SectionTitle from "./SectionTitle";

export interface GridFeature extends Omit<Feature, "icon"> {
  icon?: React.ReactNode;
  emoji?: string;
  direction?: "col" | "row" | "col-reverse" | "row-reverse";
  align?: "center" | "left";
  size: "small" | "medium" | "large";
  fullWidthIcon?: boolean;
}

interface FeaturesGridProps {
  features: GridFeature[];
  className?: string;
}

const FeaturesGrid = ({ features, className = "" }: FeaturesGridProps) => {
  return (
    <div
      className="mx-auto my-6 flex max-w-7xl flex-col gap-3"
      id="features"
    >
      <SectionTitle
        title="Features"
        description="These are some of the features of the product."
      />
      <div
        className={cn(
          "mx-4 grid auto-rows-[minmax(140px,auto)] grid-cols-2 gap-3 md:mx-6 md:grid-cols-4 lg:mx-8 lg:grid-cols-6",
          className,
        )}
      >
        {features.map((feature, index) => (
          <FeaturesGridItem
            key={feature.name + feature.description}
            {...feature}
            animationDelay={index * 100}
          />
        ))}
      </div>
    </div>
  );
};

function FeaturesGridItem({
  name,
  description,
  icon,
  emoji,
  href,
  direction = "col",
  align = "center",
  size = "medium",
  fullWidthIcon = true,
  animationDelay = 0,
}: GridFeature & { animationDelay?: number }) {
  const gridFeatureSizeToClasses: Record<GridFeature["size"], string> = {
    small: "col-span-1",
    medium: "col-span-2 md:col-span-2 lg:col-span-2",
    large: "col-span-2 md:col-span-2 lg:col-span-2 row-span-2",
  };

  const directionToClass: Record<
    NonNullable<GridFeature["direction"]>,
    string
  > = {
    col: "flex-col",
    row: "flex-row",
    "row-reverse": "flex-row-reverse",
    "col-reverse": "flex-col-reverse",
  };

  const gridFeatureCard = (
    <Card
      className={cn(
        "animate-fade-in h-full min-h-[140px] cursor-pointer transition-all duration-300 hover:shadow-card-hover hover:scale-[1.02]",
        gridFeatureSizeToClasses[size],
      )}
      variant="bento"
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <CardContent className="flex h-full flex-col items-center justify-center p-3">
        {fullWidthIcon && (icon || emoji) ? (
          <div className="mb-2 flex w-full items-center justify-center">
            {icon ? (
              icon
            ) : emoji ? (
              <span className="text-3xl transition-transform duration-300 hover:scale-110">{emoji}</span>
            ) : null}
          </div>
        ) : (
          <div
            className={cn(
              "flex items-center gap-2",
              directionToClass[direction],
              align === "center"
                ? "items-center justify-center"
                : "justify-start",
            )}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-50 transition-all duration-300 hover:bg-primary-100 dark:bg-primary-950 dark:hover:bg-primary-900">
              {icon ? (
                icon
              ) : emoji ? (
                <span className="text-xl transition-transform duration-300 hover:scale-110">{emoji}</span>
              ) : null}
            </div>
            <CardTitle
              className={cn(align === "center" ? "text-center" : "text-left")}
            >
              {name}
            </CardTitle>
          </div>
        )}
        {fullWidthIcon && (icon || emoji) && (
          <CardTitle className="mb-1 text-center">{name}</CardTitle>
        )}
        <CardDescription
          className={cn(
            "text-xs leading-relaxed",
            fullWidthIcon || direction === "col" || align === "center"
              ? "text-center"
              : "text-left",
          )}
        >
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(gridFeatureSizeToClasses[size], "animate-fade-in")}
        style={{ animationDelay: `${animationDelay}ms` }}
      >
        {gridFeatureCard}
      </a>
    );
  }

  return gridFeatureCard;
}

export default FeaturesGrid;
