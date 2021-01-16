import BlogPost from '../../../components/BlogPost';
import styles from '../../../styles/Post.module.css';

export const meta = {
  title: 'Get the Geth - Ethereum client node',
  description: 'Install and run Geth on Windows 10',
  startread: `To run or not to run an Ethereum client/node and more than that on a W10 PC comes down to a personal choice and we will not get into the rabbit hole and start to: "why or why not to.." Before to start let's have a bit of a context in regard to this option. [...]`,
  date: 'Dec 21, 2020',
  readTime: 4,
  imgsrc: '/img/ethereum.png',
  imgalt: 'get ethereum node',
  imgtitle: 'geth ethereum node',
};

  export default ({ children }) => {
    return (
      <BlogPost meta={meta}>{children}
        <h1 className={styles.h1style}>Geth on Windows 10</h1>

        <p className={styles.aligntext}>
          This very first post of GrogLog blog will be focused solely in: "how to install Geth on a Windows 10 Machine." More from Geth with real examples in the next post.
        </p>

        <p className={styles.aligntext}>
          <a className={styles.links} href="https://www.litcharts.com/blog/shakespeare/hamletssoliloquy/" target="_blank" rel="noopener noreferrer" >To run or not to run </a> an Ethereum client/node and more than that on a W10 PC comes down to a personal choice and we will not get into the rabbit hole and start to: "why or why not to.." Before to start let's have a bit of a context in regard to this option.
        </p>

        <p className={styles.aligntext}>
          According to <a className={styles.links} href="https://etherscan.io/nodetracker" target="_blank" rel="noopener noreferrer">Etherscan</a> at the moment of posting, Geth client is a way to go for 72% of all Ethereum Node operators. Windows on the other hand count for only 3.8% of all ETH nodes. In the same time on this <a className={styles.links} href="https://en.wikipedia.org/wiki/Earth#/media/File:The_Earth_seen_from_Apollo_17.jpg" target="_blank" rel="noopener noreferrer">rock</a>, W10 has a market share of <a className={styles.links} href="https://www.w3schools.com/browsers/browsers_os.asp" target="_blank" rel="noopener noreferrer">64.2%.</a>
        </p>

        <img width={"70%"} src="/img/GoEthereum.png" title="Go Ethereum" alt="Go Ethereum"/>

        <p className={styles.aligntext}>
          <b><em>Go Ethereum (Geth)</em></b> is one of the three original implementations (along with C++ and Python) of the Ethereum protocol and one of the five available now.
        </p>

        <p>
          🧾 Read about all 5 implementations of Ethereum clients/nodes and what each has to offer on <a className={styles.links} href="https://ethereum.org/en/developers/docs/nodes-and-clients/#clients"  target="_blank" rel="noopener noreferrer">Ethereum</a> official website.
        </p>

        <img width={"70%"} src="/img/ethereum_clients.png" title="Ethereum clients/nodes" alt="Ethereum clients/nodes"/>

        <h2 className={styles.h2style}>Installing Geth 🔧</h2>


        <p className={styles.aligntext}>
          We cannot emphasize enough how crucial is to use <em>ONLY the official sources</em> and the <em>most recent version of a software</em> when comes to cryptocurrency. The internet is full of cases in which people not cautious enough lost all their crypto due to the fact that they had used outdated (with known vulnerabilities) or faked software.
        </p>

        <p className={styles.aligntext}>
          Download the latest stable release of Go Ethereum (Geth) from the page bellow: Go to "Downloads" section  of the site.
        </p>

        <img width={"100%"} src="/img/download_geth_1.png" title="Download Geth 1" alt="Download Geth 1"/>

        <img width={"100%"} src="/img/download_geth_2.png" title="Download Geth 2" alt="Download Geth 2"/>

        <p className={styles.aligntext}>
          Official subdomain of Geth can be found at: <a className={styles.links} href="https://geth.ethereum.org/" target="_blank" rel="noopener noreferrer">https://geth.ethereum.org/</a>.
        </p>

          <p>
            For those who want to see, fork, and maybe contribute, the open source Github repository of Go-Ethereum is on this page: <a className={styles.links} href="https://github.com/ethereum/go-ethereum" target="_blank" rel="noopener noreferrer">https://github.com/ethereum/go-ethereum</a>.
          </p>

        <p className={styles.aligntext}>
          Once the file has been downloaded, just run it (double LMB or RMB followed by Open) since it's a .exe file.
        </p>

        <img width={"100%"} src="/img/geth_exe.png" title="Geth.exe" alt="Geth.exe"/>

        <p className={styles.aligntext}>
          The installation is pretty straight forward.
        </p>
        <p>
          Development tools are not selected by default. For an enhanced experience with Geth, it's a must to have it but is not a requirement.
        </p>

        <img width={"60%"} src="/img/development_tools.png" title="Development tools" alt="Development tools"/>

        <p className={styles.aligntext}>
          Before starting Geth, let's have a look at where in the PC blockchain data and Keystore files are to be found. The path is: "C:\Users\Bob\ AppData\Local\Ethereum", where "Bob" is your user in Windows 10.
        </p>
        <p>
          By default, the AppData folder is hidden in Windows and will not be visible in Explorer. To make it show up we have to instruct Windows Explorer first.
        </p>

        <img width={"100%"} src="/img/app_data.jpg" title="AppDAta" alt="AppDAta"></img>

        <h2 className={styles.h2style}>Starting Geth</h2>

        <h3>Sync modes</h3>

        <p className={styles.aligntext}>You can start Geth in one of three different sync modes using the --syncmode "mode" argument that determines what sort of node it is in the network.
        </p>

        <p className={styles.aligntext}>
          These are:
        </p>

        <ul>
          <li>Full: Downloads all blocks (including headers, transactions, and receipts) and generates the state of the blockchain incrementally by executing every block.
          </li>

          <li>Fast (Default): Downloads all blocks (including headers, transactions and receipts) verifies all headers, and downloads the state and verifies it against the headers.
          </li>

          <li>Light: Downloads all block headers, block data, and verifies some randomly.
          </li>
        </ul>

        <p className={styles.aligntext}>To start Geth in <b>Default</b> mode (will need <b>over 300 GB</b> to sync with Ethereum network), in cmd must be entered the command:
        </p>

        <ul>
          <li>geth</li>
        </ul>

        <img width={"90%"} src="/img/geth_running.png" title="Geth running" alt="Geth running"></img>

        <p className={styles.aligntext}>
          Be aware that starting the node in Full mode will download well <b>over 5TB</b> (yes with a "T") of data to get in sync.
        </p>

        <p>
        <span style={{background: "yellow"}}> The Light mode will need less than 1GB</span>.
        </p>

        <p>
          Either way one of these commands will get the job done:
        </p>

        <ul>
          <li>geth --syncmode "full"</li>
          <li>geth --syncmode "light"</li>
        </ul>
      </BlogPost>
  );
};

