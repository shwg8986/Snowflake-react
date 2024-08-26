# SNOWFLAKE の練習
### 疑似データ（仮想IoT機器の温度データ）を用いた可視化
#### snowflake → Express（バックエンド）→ React（フロントエンド）へ表示

＜実行手順＞

1. snowflake のワークシートで snowflake.sql の中身をコピーして実行

<br>

2. /server ディレクトリに以下の内容を含む.env ファイルの作成

```
SNOWFLAKE_ACCOUNT=<組織-アカウント名>
SNOWFLAKE_USERNAME=<snowflakeウェブインタフェースにログインする時に用いるユーザーネーム>
SNOWFLAKE_PASSWORD=<snowflakeウェブインタフェースにログインする時に用いるパスワード>
SNOWFLAKE_WAREHOUSE=<snowflakeウェブインタフェース上で自由に作成したウェアハウスの名前>
SNOWFLAKE_DATABASE=<データベースの名前。snowflake.sqlの中身をそのまま使うならiot_data>
SNOWFLAKE_SCHEMA=<スキーマの名前。デフォルトならpublic>
```

3. /server ディレクトリで以下を実行

```
node server.js
```

<br>

4. ルートで以下を実行


```
npm run start
```

<img width="1254" alt="スクリーンショット 2024-08-26 21 15 15" src="https://github.com/user-attachments/assets/d50d9233-54f8-4cd1-ab36-975816267fc8">

＜次にやりたいこと＞

- snowflakeのデータベースに対して定期的に新規データを自動追加する
