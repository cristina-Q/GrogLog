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

        <div className="footer-post">
          <Link href={'/blog' + link}>
            <a>Read more →</a>
          </Link>
        </div>
      </article>

      <style jsx>
        {`
          .footer-post {
            display: block;
            margin-top: 20px;
          }
          .footer-post a {
            padding: 9px;
            color: #fff;
            background-color: #000;
          }
        `}
      </style>
    </div>
  );
};
