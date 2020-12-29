import Link from 'next/link';

export default function Header() {
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <Link href="/">
            <a className="logo">ಠ_ಠ&nbsp;&nbsp;Grog&nbsp;Log</a>
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
          height: 300px;
          background: url('/img/drinks300.png') no-repeat center center;
          padding-top: 30px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          font-size: 1rem;
        }

        nav a {
          font-family: 'Exo 2';
          font-weight: 500;
          font-style: normal;
          font-size: 25px;
          text-decoration: none;
          padding: 13px;
          margin-left: 7px;
          color: #fff;
          background-color: #000;
        }
        nav a:hover {
          color: #fff;
          background-color: #000;
        }
      `}</style>
    </>
  );
}
