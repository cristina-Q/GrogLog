import Link from 'next/link';

export default function Header() {
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <h1>Grog Log</h1>
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
          background: #5f658b;
          width: 100%;
        }
        .nav-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1rem;
        }

        h1 {
          margin-left: 8rem;
        }
        nav a {
          font-size: 23px;
          margin-right: 8rem;
          text-decoration: none;
        }
        nav a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}
