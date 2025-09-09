import WebSocket from "ws";
import { BINANCE_WS_URL } from "../../config/config.js";

const ws = new WebSocket(BINANCE_WS_URL);

ws.onopen = (event: any) => {
    try {
        console.log("WebSocket connection opened");
        ws.send(
            JSON.stringify({
                method: "SUBSCRIBE",
                params: ["btcusdt@aggTrade", "ethusdt@aggTrade", "solusdt@aggTrade", "bnbusdt@aggTrade", "xrpusdt@aggTrade"],
                id: 1,
            })
        );
    } catch (error) {
        console.error("WebSocket send error:", error);
    }
};

ws.onmessage = (event: any) => {
    try {
        const message = JSON.parse(event.data);
        console.log(message);
    } catch (error) {
        console.error("WebSocket message error:", error);
    }
};

ws.onclose = (event: any) => {
    console.log("WebSocket connection closed:", event.code, event.reason);
};

ws.onerror = (error: any) => {
    console.error("WebSocket error:", error);
};
