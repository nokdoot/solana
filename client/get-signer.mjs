import fs from "fs";
import { Keypair } from "@solana/web3.js";

export const getSigner = () => {
    const keypairJson = JSON.parse(fs.readFileSync("/home/nokdoot/.config/solana/id.json", "utf8"));
    return Keypair.fromSecretKey(Buffer.from(keypairJson, 64));
}