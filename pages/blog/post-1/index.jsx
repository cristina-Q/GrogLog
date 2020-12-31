import BlogPost from '../../../components/BlogPost';
import styles from '../../../styles/Post.module.css';

export const meta = {
  title: 'Get the Geth - Ethereum client node',
  description: 'Install and run Geth on Windows 10',
  date: 'Dec 21, 2020',
  readTime: 4,
  imgsrc: '/img/ethereum.png',
  imgalt: 'get ethereum node',
  imgtitle: 'geth ethereum node',
};

  export default ({ children }) => {
    return (
      <BlogPost meta={meta}>{children}
        <h1 className={styles.macmac}>Geth on Windows 10 (part 1)</h1>
        <p>
          This very first post of GrogLog blog will be focused solely in: "how to install Geth on a Windows 10 Machine." More from Geth with real examples in the next post.
        </p>
        <p>
          <a href="https://www.litcharts.com/blog/shakespeare/hamletssoliloquy/" target="_blank" rel="noopener noreferrer" >To run or not to run </a> an Ethereum client/node and more than that on a W10 PC comes down to a personal choice and we will not get into the rabbit hole and start to: "why or why not to.." Before to start let's have a bit of a context in regard to this option.
        </p>
        <p>According to <a href="https://etherscan.io/nodetracker" target="_blank" rel="noopener noreferrer">Etherscan</a> at the moment of posting, Geth client is a way to go for 72% of all Ethereum Node operators. Windows on the other hand count for only 3.8% of all ETH nodes. In the same time on this <a href="https://en.wikipedia.org/wiki/Earth#/media/File:The_Earth_seen_from_Apollo_17.jpg" target="_blank" rel="noopener noreferrer">rock</a>, W10 has a market share of <a href="https://www.w3schools.com/browsers/browsers_os.asp" target="_blank" rel="noopener noreferrer">64.2%.</a>
        </p>
        <img src="./img/ganditorul.jpg" alt="The thinker"/>
        <p>
          Go Ethereum (Geth) is one of the three original implementations (along with C++ and Python) of the Ethereum protocol and one of the five available now. Read about all 5 implementations of Ethereum clients/nodes and what each has to offer on <a href="https://ethereum.org/en/developers/docs/nodes-and-clients/#clients"  target="_blank" rel="noopener noreferrer">Ethereum</a> official website.
        </p>
        <img src="./img/ethereum_clients.PNG" alt="Ethereum clients/nodes"/>

        <h2>Installing Geth</h2>
        <p>
          We cannot emphasize enough how crucial is to use ONLY the official sources and the most recent version of a software when comes to cryptocurrency. The internet is full of cases in which people not cautious enough lost all their crypto due to the fact that they had used outdated (with known vulnerabilities) or faked software.
        </p>
        <p>
          Download the latest stable release of Go Ethereum (Geth) from the page bellow: Go to "Downloads" section  of the site.
        </p>
        <img src="./img/download_geth_1.PNG" alt="Download Geth 1"/>
        <img src="./img/download_geth_2.PNG" alt="Download Geth 2"/>
        <p>Official subdomain of Geth can be found at: <a href="https://geth.ethereum.org/" target="_blank" rel="noopener noreferrer">https://geth.ethereum.org/</a>. For those who want to see, fork, and maybe contribute, the open source Github repository of Go-Ethereum is on this page: <a href="https://github.com/ethereum/go-ethereum" target="_blank" rel="noopener noreferrer">https://github.com/ethereum/go-ethereum</a>
        </p>
        <p>
          Once the file has been downloaded, just run it (double LMB or RMB followed by Open) since it's a .exe file.
        </p>
        <img src="./img/geth_exe.PNG" alt="Geth .exe"/>
        <p>
          The installation is pretty straight forward. Development tools are not selected by default. For an enhanced experience with Geth, it's a must to have it but is not a requirement.
        </p>
        <img src="./img/development_tools.PNG" alt="Development tools"/>
        <p>
          Before starting Geth, let's have a look at where in the PC blockchain data and Keystore files are to be found. The path is: "C:\Users\Bob\AppData\Local\Ethereum", where "Bob" is your user in Windows 10. By default, the AppData folder is hidden in Windows and will not be visible in Explorer. To make it show up we have to instruct Windows Explorer first.
        </p>
        <img src="./img/app_data.jpg" alt="AppDAta"></img>
        <h2>Starting Geth</h2>
        <h3>Sync modes</h3>
        <p>You can start Geth in one of three different sync modes using the --syncmode "mode" argument that determines what sort of node it is in the network.
        </p>
        <p>
          These are:
        </p>
        <ul>
          <li>Full: Downloads all blocks (including headers, transactions, and receipts) and generates the state of the blockchain incrementally by executing every block.</li>
          <li>Fast (Default): Downloads all blocks (including headers, transactions and receipts), verifies all headers, and downloads the state and verifies it against the headers.</li>
          <li>Light: Downloads all block headers, block data, and verifies some randomly.</li>
        </ul>
        <p>To start Geth in Default mode (will need over 300 GB to sync with Ethereum network), in cmd must be entered the command:
          <ul>
            <li>geth</li>
          </ul>
        </p>
        <img src="./img/geth_running.PNG" alt="Geth running"></img>
        <p>
          Be aware that starting the node in Full mode will download well over 5TB (yes with a "T") of data to get in sync. The Light mode will need less than 1GB. Either way one of these commands will get the job done:
        </p>
        <ul>
          <li>geth --syncmode "full"</li>
          <li>geth --syncmode "light"</li>
        </ul>
      </BlogPost>
  );
};

