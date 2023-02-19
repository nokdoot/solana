import {clusterApiUrl, Connection} from "@solana/web3.js";

async function getBalanceUsingWeb3(address) {
    const connection = new Connection(clusterApiUrl('devnet'));
    return connection.getBalance(address);
}