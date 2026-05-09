import type { ContentItem } from "../types";

type ContentCardProps = {
  item: ContentItem;
  onViewDetails: (item: ContentItem) => void;
};

export function ContentCard({ item, onViewDetails }: ContentCardProps) {
  return (
    <article className="content-card">
      <img className="content-card__image" src={item.thumbnail} alt="" />
      <div className="content-card__body">
        <div className="content-card__topline">
          <span>{item.category}</span>
          <strong>${item.price}</strong>
        </div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <button className="button button--ghost" onClick={() => onViewDetails(item)}>
          View Details
        </button>
      </div>
    </article>
  );
}
