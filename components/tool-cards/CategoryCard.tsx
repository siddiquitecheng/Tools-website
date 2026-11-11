import type { CSSProperties } from "react";
import Link from "next/link";

import { categoryMeta, getCategoryCount, type Category } from "@/lib/tools";
import { getCategoryColor } from "@/lib/category-colors";
import { getCategoryIcon } from "@/components/tool-cards/categoryIcon";

interface CategoryCardProps {
  category: Category;
  count?: number;
}

export function CategoryCard({ category, count }: CategoryCardProps) {
  const meta = categoryMeta[category];
  const toolCount = count ?? getCategoryCount(category);
  const Icon = getCategoryIcon(category);
  const color = getCategoryColor(category);

  return (
    <Link
      href={`/category/${category}`}
      className="category-card group scroll-reveal"
      style={{ "--cat-accent": color } as CSSProperties}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className="category-card-icon"
          style={{ backgroundColor: `${color}1a`, color: color }}
        >
          <Icon className="h-6 w-6" />
        </span>
        <span className="rounded-full bg-[var(--surface-sunk)] px-2 py-1 text-xs text-[var(--ink-soft)]">
          {toolCount} tools
        </span>
      </div>
      <h3 className="mt-4 text-base font-semibold text-[var(--ink)]">
        {meta.name}
      </h3>
      <p className="mt-1.5 text-sm leading-6 text-[var(--ink-soft)]">
        {meta.description}
      </p>
    </Link>
  );
}
