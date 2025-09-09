import dotenv from "dotenv";
dotenv.config();

export const BINANCE_WS_URL = process.env.BINANCE_WS_URL || "wss://fstream.binance.com/stream";
export const DATABASE_URL = process.env.DATABASE_URL ;
