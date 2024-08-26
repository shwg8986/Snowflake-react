// server.js
const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const snowflakeClient = require("./snowflakeClient");

const app = express();
app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // フロントエンドのオリジンを指定
    methods: ["GET", "POST"], // 許可するHTTPメソッド
  },
});

app.get("/", (_req, res) => {
  res.send("バックエンドサーバーヘルスチェック");
});

// const query = `
//   SELECT * FROM temperature_readings
//   ORDER BY timestamp DESC
//   LIMIT 10
// `;
const query = `
  SELECT * FROM temperature_readings
  ORDER BY timestamp DESC
`;

io.on("connection", (socket) => {
  console.log("クライエントに接続しました。");

  const fetchData = () => {
    snowflakeClient.execute({
      sqlText: query,
      complete: (err, _stmt, rows) => {
        // rows: クエリの実行結果として返された行データの配列。
        if (err) {
          console.error("クエリの実行に失敗しました。: " + err.message);
        } else {
          socket.emit("FromAPI", rows);
          // エラーが発生しなかった場合、rows（クエリの実行結果として得られたデータ）をクライアントに送信。
        }
      },
    });
  };
  fetchData();
  setInterval(fetchData, 30000); // 30秒ごとにデータを更新

  socket.on("disconnect", () => {
    console.log("クライアントとの接続が切れました。");
  });
});

server.listen(4001, () => {
  console.log("バックエンドサーバーが4001ポートで立ち上がりました。");
});
