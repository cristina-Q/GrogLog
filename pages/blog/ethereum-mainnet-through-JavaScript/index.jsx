import BlogPost from '../../../components/BlogPost';
import styles from '../../../styles/Post.module.css';

export const meta = {
  title: 'Run JavaScript Console inside Geth Ethereum node',
  description: 'Ethereum through JavaScript',
  startread: `A way to talk to the ethereum mainnet through JavaScript is having up and running the ethereum node.
  There are several node/client to choose from but this article goes further with Geth.[...]`,
  date: 'Jan 15, 2021',
  readTime: 4,
  imgsrc: '/img/jseth.png',
  imgalt: 'Ethereum through JavaScript',
  imgtitle: 'Ethereum through JavaScript',
};

  export default ({ children }) => {
    return (
      <BlogPost meta={meta}>{children}
        <h1 className={styles.h1style}>Ethereum through JavaScript</h1>

        <p className={styles.aligntext}>
          A way to talk with ethereum mainnet through JavaScript is to having up and running the ethereum node.
          There are several node/client to choose from but this article goes further with Geth.
        </p>

        <p className={styles.aligntext}>
        If you don't have yet an eth node up and running you are invited to visit another part of this blog where the process of <a className={styles.links} href="https://groglog.net/blog/get-the-geth-ethereum-client-node" target="_blank" rel="noopener noreferrer"> how to get the Geth </a> is described for a Windows mashine but you may adapt for other operating systems. Remember that you can always refer to the <a className={styles.links} href="https://geth.ethereum.org/docs/install-and-build/installing-geth" target="_blank" rel="noopener noreferrer">official docs</a> for more information about installing Geth.
        </p>
        <br></br>
        <p>That being said...let's fire up the Geth!</p>
        <p>Open your command line interface and type:<br></br>
        <pre>
          <code className={styles.code}>geth --syncmode "light"</code>
        </pre> or your syncmode of choice between the 3 modes that we already discussed <a className={styles.links} href="https://groglog.net/blog/get-the-geth-ethereum-client-node#syncmodes" target="_blank" rel="noopener noreferrer"> here.</a></p>

        <p>If you type just "geth" it will start to download in the 'fast mode' which is also the default mode.
          To stop this sync mode ('fast') and go with 'light' or 'full' version just stop syncing with ctrl+c (recommended).<br></br>
          Open once again the cmd and type <code className={styles.code}>geth --syncmode "light"</code> or <code className={styles.code}>geth --syncmode "full"</code> (do not forget the 'full' mode takes more that 5TB)</p>
        <p>Geth will make different folders for different syncmodes where the chaindata will be downloaded and updated. You cand find them "C:\Users\your-username\ AppData\Local\Ethereum\geth". </p>

        <img width={"369"} src="/img/chaindata.png" title="chaindata" alt="chaindata"/>
        <br></br>
        <p>Finally running your geth command and start downloading the blocks.
          Now make sure you are up to date with the ethereum main network until you can do anything.</p>
        <p>
          For that compare your last block number with the last of the mainnet which you can see here: <a className={styles.links} href="https://ethstats.net/" target="_blank" rel="noopener noreferrer">ethstats.net.</a>
           When the two indicate the same number, it is good to go.
        </p>
        <img width={"100%"} src="/img/blockno.png" title="block-number" alt="block-number"/>
        <img width={"100%"} src="/img/lastblock.png" title="lastblock" alt="lastblock"/>

        <p>
          After the sync just open another cmd window and type the <code className={styles.code}>geth attach</code> command that shoud do nothing. That is because you'll nedd to provide de IPC path(inter-process communication to allow the processes to manage shared data).
        </p>
        <p>
          This path is povide to you by Geth node in the first lines when it starts as you can see in the picture below:
        </p>
        <img width={"100%"} src="/img/ipc.png" title="ipc" alt="ipc"/>

        <p>
          Now we can run JavaScript Console with the command:
        </p>
        <pre>
          <code className={styles.code}>geth attach //./pipe/geth.ipc</code>
        </pre>

        <img width={"100%"} src="/img/JSconsole.png" title="JSconsole" alt="JSconsole"/>

        <p>
          And that is it! It works!
        </p>
        <p>
          YAY!!! 😎🎉🎉✨✨
        </p>






      </BlogPost>
  );
};

