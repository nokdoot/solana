import {clusterApiUrl, Connection} from "@solana/web3.js";

let connection;


/**
 * 
 * @param { 'processed' | 'confirmed' | 'finalized' | 'recent' | 'single' | 'singleGossip' | 'root' | 'max' } commitment 
 * @returns 
 */
export const getConnection = (commitment = 'confirmed') => {
    // const connection = new web3.Connection("http://127.0.0.1:8899");
    
    if (!connection) connection = new Connection(clusterApiUrl('devnet'), 'finalized');
    return connection
}