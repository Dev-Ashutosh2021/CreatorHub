type FiltersProps = {
  categories: string[];
  category: string;
  query: string;
  sort: string;
  onCategoryChange: (category: string) => void;
  onQueryChange: (query: string) => void;
  onSortChange: (sort: string) => void;
};

export function Filters({
  categories,
  category,
  query,
  sort,
  onCategoryChange,
  onQueryChange,
  onSortChange
}: FiltersProps) {
  return (
    <section className="filters" aria-label="Browse controls">
      <label>
        <span>Search</span>
        <input
          type="search"
          placeholder="Search content, tags, category..."
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
        />
      </label>
      <label>
        <span>Category</span>
        <select value={category} onChange={(event) => onCategoryChange(event.target.value)}>
          {categories.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label>
        <span>Sort</span>
        <select value={sort} onChange={(event) => onSortChange(event.target.value)}>
          <option value="featured">Featured</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
        </select>
      </label>
    </section>
  );
}
