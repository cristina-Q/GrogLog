import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children, pageTitle, description }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <meta property="og:image" content="/img/blog-preview.png"></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <title>{pageTitle}</title>
      </Head>

      <main>
        <Header />
        <div className="content">{children}</div>
        <Footer />
      </main>

      <style global jsx>{`
        html,
        body {
          margin: 0;
          padding: 0;
          font-family: 'Exo 2';
          font-weight: normal;
          font-style: normal;
          background: #f0f0f0;
          color: #000;
          font-size: 1.2rem;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: 'Exo 2';
          font-weight: normal;
          font-style: normal;
        }

        .content {
          max-width: 1000px;
          margin: 2rem auto;
          padding: 1rem 1rem;
        }
      `}</style>
    </>
  );
}
