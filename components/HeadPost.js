export const HeadPost = ({ meta, isBlogPost }) => (
  <div>
    <h1 className={isBlogPost ? 'great-title' : null}>{meta.title}</h1>

    <div className="details">
      {isBlogPost ? null : <h2>{meta.description}</h2>}
      <span>{meta.date}</span>
      <span role="img" aria-label="one coffee">
        ☕ {meta.readTime + ' min read'}
      </span>
      <p>{meta.startread}</p>
    </div>
    <img src={meta.imgsrc} alt={meta.imgalt} title={meta.imgtitle} width="100%"></img>

    <style jsx>
      {`
        h1 {
          font-size: 2rem;
          font-weight: 700;
          letter-spacing: 0.88px;
          color: #333333;
        }
        .great-title {
          font-size: 2rem;
        }
        .details span {
          color: #333333;
          margin-right: 1rem;
        }
        .details {
          margin-bottom: 1rem;
        }
      `}
    </style>
  </div>
);
