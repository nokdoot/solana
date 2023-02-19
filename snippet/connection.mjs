import web3, {clusterApiUrl, Connection} from "@solana/web3.js";

// const connection = new web3.Connection("http://127.0.0.1:8899");
const connection = new Connection(clusterApiUrl('devnet'));