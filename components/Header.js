import Link from 'next/link';

export default function Header() {
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <Link href="/">
            <h1>
              <a>ಠ_ಠ&nbsp;&nbsp;Grog&nbsp;Log</a>
            </h1>
          </Link>

          <div>
            <Link href="/">
              <a>Blog</a>
            </Link>
            <Link href="/">
              <a>About</a>
            </Link>
          </div>
        </div>
      </nav>

      <style jsx>{`
        nav {
          width: 100%;
        }

        .nav-wrapper {
          padding-top: 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1rem;
        }

        .nav-wrapper h1 {
          font-family: 'Exo 2';
          font-weight: normal;
          font-style: normal;
          margin-left: 8rem;
          letter-spacing: 1px;
          cursor: pointer;
        }
        nav a {
          font-family: 'Exo 2';
          font-weight: 500;
          font-style: normal;
          font-size: 25px;
          margin-right: 8rem;
          text-decoration: none;
          padding: 7px;
        }
        nav a:hover {
          color: #fff;
          background-color: #000;
        }
      `}</style>
    </>
  );
}
