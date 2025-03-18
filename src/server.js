// Signal Server
// ws://localhost:8000
// Dependencies: ws (npm install ws)

const PORT = 8000;
const WebSocket = require("ws");
const wss = new WebSocket.Server({port: PORT});

wss.on("connection", (ws, req) => {
  ws.on("message", (data) => {
    console.log(`[SERVER] Received from ${req.socket.remoteAddress}: ${data}`);
    // Broadcast to other clients
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        // Check data type
        client.send(data.toString());
      }
    });
  });
});
