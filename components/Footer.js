export default function Footer() {
  return (
    <>
      <footer>
        <p>This blog is build with Next.js.</p>
        <p> Automate build process and continuous deployment are done on Netlify. </p>

        <p>2021@GrogLog. All rights Reverved. ಠ_ಠ</p>
      </footer>

      <style jsx>{`
        footer {
          background: #000;
          padding: 10px 15px;
        }

        footer p {
          font-family: 'Exo 2';
          font-weight: 500;
          font-style: normal;
          font-size: 1rem;
          margin-left: 7px;
          color: #767676;
        }

        footer p:last-child() {
          text-align: center;
        }
      `}</style>
    </>
  );
}
