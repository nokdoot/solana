import fs from "fs";
import {Keypair} from "@solana/web3.js";

const keypairJson = JSON.parse(fs.readFileSync("/home/nokdoot/.config/solana/id.json", "utf8"));
const keypair = Keypair.fromSecretKey(Buffer.from(keypairJson, 64));
console.log(keypair);