import { Keypair } from "@solana/web3.js";

export const createAccount = () => {
    return Keypair.generate();
}