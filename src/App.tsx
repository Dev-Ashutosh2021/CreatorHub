import { useMemo, useState } from "react";
import { ContentCard } from "./components/ContentCard";
import { CreatorProfile } from "./components/CreatorProfile";
import { DetailModal } from "./components/DetailModal";
import { Filters } from "./components/Filters";
import { contentItems, creator } from "./data/content";
import type { ContentItem } from "./types";

const allCategory = "All";

function App() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(allCategory);
  const [sort, setSort] = useState("featured");
  const [isDark, setIsDark] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ContentItem | null>(null);

  const categories = useMemo(
    () => [allCategory, ...Array.from(new Set(contentItems.map((item) => item.category)))],
    []
  );

  const visibleItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const filtered = contentItems.filter((item) => {
      const matchesCategory = category === allCategory || item.category === category;
      const searchableText = [
        item.title,
        item.description,
        item.category,
        item.level,
        ...item.tags
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && searchableText.includes(normalizedQuery);
    });

    return [...filtered].sort((a, b) => {
      if (sort === "low-high") {
        return a.price - b.price;
      }

      if (sort === "high-low") {
        return b.price - a.price;
      }

      return a.id - b.id;
    });
  }, [category, query, sort]);

  return (
    <main className={isDark ? "app app--dark" : "app"}>
      <div className="topbar">
        <a className="brand" href="#content">
          CreatorHub
        </a>
        <button className="button button--compact" onClick={() => setIsDark((value) => !value)}>
          {isDark ? "Light mode" : "Dark mode"}
        </button>
      </div>

      <CreatorProfile creator={creator} />

      <section className="content-section" id="content">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Creator library</p>
            <h2>Browse premium content</h2>
          </div>
          <span>{visibleItems.length} result{visibleItems.length === 1 ? "" : "s"}</span>
        </div>

        <Filters
          categories={categories}
          category={category}
          query={query}
          sort={sort}
          onCategoryChange={setCategory}
          onQueryChange={setQuery}
          onSortChange={setSort}
        />

        {visibleItems.length > 0 ? (
          <div className="content-grid">
            {visibleItems.map((item) => (
              <ContentCard key={item.id} item={item} onViewDetails={setSelectedItem} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3>No content found</h3>
            <p>Try a different search term or switch the category filter.</p>
          </div>
        )}
      </section>

      <DetailModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </main>
  );
}

export default App;
