import type { ContentItem } from "../types";

type DetailModalProps = {
  item: ContentItem | null;
  onClose: () => void;
};

export function DetailModal({ item, onClose }: DetailModalProps) {
  if (!item) {
    return null;
  }

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="detail-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="icon-button modal__close" aria-label="Close details" onClick={onClose}>
          X
        </button>
        <img className="modal__preview" src={item.previewImage} alt="" />
        <div className="modal__content">
          <div className="modal__heading">
            <div>
              <p className="eyebrow">{item.category} / {item.level}</p>
              <h2 id="detail-title">{item.title}</h2>
            </div>
            <strong>${item.price}</strong>
          </div>
          <p>{item.fullDescription}</p>
          <div className="tag-list" aria-label="Content tags">
            {item.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div className="preview-box">
            <span>Preview</span>
            <p>Includes a sample lesson, resource overview, and the first implementation checklist.</p>
          </div>
          <button className="button button--primary">Enroll / Buy / Access</button>
        </div>
      </section>
    </div>
  );
}
