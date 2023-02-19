import {Keypair} from "@solana/web3.js";

const ownerKeypair = Keypair.generate();
const secretKey = Uint8Array.from(ownerKeypair.secretKey)
const keypairFromSecretKey = Keypair.fromSecretKey(secretKey);



console.log(keypairFromSecretKey.publicKey.toString());