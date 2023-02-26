import web3, { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));

const publicKey = new PublicKey("AC5P18trPwQRdfVqGFJc9DWJUASFDYD1ynDZ8wjiawaH")
const accountInfo = await connection.getAccountInfo(publicKey);

console.log(accountInfo.executable);