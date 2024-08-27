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

<br>

![スクリーンショット 2024-08-27 9 48 57](https://github.com/user-attachments/assets/e7315a3d-e728-4346-8f47-03224c853609)

<br>

＜次にやりたいこと＞

- snowflakeのデータベースに対して定期的に新規データを自動追加する
