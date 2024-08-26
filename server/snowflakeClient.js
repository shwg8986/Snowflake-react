// 環境変数の読み込み
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: path.resolve(__dirname, "./.env") });

// snowflake接続のための設定
const snowflake = require("snowflake-sdk");
const connection = snowflake.createConnection({
  account: process.env.SNOWFLAKE_ACCOUNT,
  username: process.env.SNOWFLAKE_USERNAME,
  password: process.env.SNOWFLAKE_PASSWORD,
  warehouse: process.env.SNOWFLAKE_WAREHOUSE,
  database: process.env.SNOWFLAKE_DATABASE,
  schema: process.env.SNOWFLAKE_SCHEMA,
});
// snowflake.configure({ logLevel: "DEBUG" }); // 詳細なログを取得したい場合に使う

// snowflakeへ接続
connection.connect((err, conn) => {
  if (err) {
    console.error("snowflakeへの接続に失敗しました。: " + err.message);
  } else {
    console.log("snowflakeへの接続に成功しました。");
  }
});

module.exports = connection;
