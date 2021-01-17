import Link from 'next/link';
import { HeadPost } from './HeadPost';

export const Post = ({ post }) => {
  const {
    link,
    module: { meta },
  } = post;

  return (
    <div>
      <article>
        <HeadPost meta={meta} />

        <p>{meta.startread}</p>
        <div className="footer-post">
          <Link href={'/blog' + link}>
            <a>Read more →</a>
          </Link>
        </div>
        <img src={meta.imgsrc} alt={meta.imgalt} title={meta.imgtitle}></img>
      </article>

      <style jsx>
        {`
          .footer-post {
            display: block;
            margin: 20px 0;
          }
          .footer-post a {
            padding: 9px;
            color: #fff;
            background-color: #000;
          }

          article {
            margin-bottom: 80px;
          }
        `}
      </style>
    </div>
  );
};
