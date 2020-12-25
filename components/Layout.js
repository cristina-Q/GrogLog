import Head from 'next/head';
import Header from './Header';

export default function Layout({ children, pageTitle, description }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{pageTitle}</title>
      </Head>
      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          font-family: 'Ubuntu';
          font-weight: 300;
          font-style: normal;
          background: #1e1e1e;
          color: #fff;
          font-size: 1rem;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: 'Ubuntu';
          font-weight: bold;
          font-style: normal;
        }
        a {
          color: #fff;
        }
        .content {
          max-width: 1000px;
          margin: 2rem auto;
          padding: 1rem 1rem;
        }
      `}</style>
      <main>
        <Header />
        <div className="content">{children}</div>
      </main>
    </>
  );
}
