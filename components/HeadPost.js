export const HeadPost = ({ meta, isBlogPost }) => (
  <>
    <h1 className={isBlogPost ? 'great-title' : null}>{meta.title}</h1>
    <div className="details">
      {isBlogPost ? null : <h2>{meta.description}</h2>}
      <span>{meta.date}</span>
      <span role="img" aria-label="one coffee">
        ☕ {meta.readTime + ' min read'}
      </span>
    </div>
    <style jsx>
      {`
        h1 {
          font-size: 3rem;
          font-weight: 700;
          letter-spacing: 0.88px;
          color: #c0b3f9;
        }
        .great-title {
          font-size: 2rem;
        }
        .details span {
          color: #bdbdbd;
          margin-right: 1rem;
        }
        .details {
          margin-bottom: 1rem;
        }
      `}
    </style>
  </>
);
