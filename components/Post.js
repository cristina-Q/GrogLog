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

        <Link href={'/blog' + link}>
          <a>Read more →</a>
        </Link>
      </article>

      <style jsx>
        {`
          a {
            margin-top: 50px;
            padding: 7px;
            color: #fff;
            background-color: #000;
          }
        `}
      </style>
    </div>
  );
};
