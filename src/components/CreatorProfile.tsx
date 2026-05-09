import type { Creator } from "../types";

type CreatorProfileProps = {
  creator: Creator;
};

export function CreatorProfile({ creator }: CreatorProfileProps) {
  return (
    <section className="hero" aria-label="Creator profile">
      <img className="hero__image" src={creator.bannerImage} alt="" />
      <div className="hero__shade" />
      <div className="hero__content">
        <div className="profile">
          <img
            className="profile__avatar"
            src={creator.profileImage}
            alt={`${creator.name} profile`}
          />
          <div className="profile__copy">
            <p className="eyebrow">{creator.role}</p>
            <h1>{creator.name}</h1>
            <p>{creator.bio}</p>
            <div className="profile__meta">
              <span>{creator.location}</span>
              <span>{creator.socials.length} social channels</span>
            </div>
          </div>
        </div>
        <nav className="socials" aria-label="Creator social links">
          {creator.socials.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
              {social.label}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
