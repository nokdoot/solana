import { createMint, getMinimumBalanceForRentExemptMint } from "@solana/spl-token";
import { getConnection } from './get-connection.mjs';
import { getSigner } from './get-signer.mjs';

const connection = getConnection();
const payer = getSigner();

const tokenMint = await createMint(
    connection,
    payer,
    payer.publicKey,
    null,
    9
);

console.log(tokenMint);