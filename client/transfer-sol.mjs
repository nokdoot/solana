import fs from "fs";
import { Keypair, Transaction, LAMPORTS_PER_SOL, SystemProgram, sendAndConfirmTransaction, Connection, clusterApiUrl } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));
const keypairJson = JSON.parse(fs.readFileSync("/home/nokdoot/.config/solana/id.json", "utf8"));
const keypair = Keypair.fromSecretKey(Buffer.from(keypairJson, 64));
const amount = 0.1;

const transaction = new Transaction();
const sendSolInstruction = SystemProgram.transfer({
    fromPubkey: keypair.publicKey,
    toPubkey: "GwDvtpXSUr3JNpNrHuTsW3S8yXArMDG3EQNJL7pJR81y",
    lamports: LAMPORTS_PER_SOL * amount
});

transaction.add(sendSolInstruction);


const signature = await sendAndConfirmTransaction(
    connection,
    transaction,
    [keypair]
);

console.log(signature);