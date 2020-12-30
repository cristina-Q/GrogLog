import { HeadPost } from './HeadPost';

//receives the post to show
//receives the post meta object
//render a single article

export default function BlogPost({ children, meta }) {
  return (
    <>
      <HeadPost meta={meta} isBlogPost />
      <article>{children}</article>

      <style jsx>
        {`
          article {
            line-height: 1.7;
          }

          article #custom {
            color: pink;
          }
        `}
      </style>
    </>
  );
}
