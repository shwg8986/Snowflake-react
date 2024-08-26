import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import "chartjs-adapter-date-fns"; // 追加

const TemperatureChart = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>データがありません</div>;
  }

  // 生のデータをコンソールに出力
  console.log("生データ:", data);

  // タイムスタンプをISO 8601形式に変換
  const parsedData = data.map((d) => ({
    ...d,
    TIMESTAMP: new Date(d.TIMESTAMP.replace(" ", "T")), // " "を"T"に置き換えてISO形式に変換
  }));

  // データを昇順にソート（最も古いタイムスタンプから新しいタイムスタンプへ）
  const sortedData = parsedData.sort((a, b) => new Date(a.TIMESTAMP) - new Date(b.TIMESTAMP));

  /*
  DEVICE_IDごとにデータをグループ化
  ・acc（アキュムレータ）: これまでの累積された結果を保持するオブジェクト。初期値として空のオブジェクト {} が指定されている。
  ・current（現在の要素）: sortedData配列の現在処理中の要素。
  */
  const groupedData = sortedData.reduce((acc, current) => {
    const { DEVICE_ID } = current; // currentオブジェクトからDEVICE_IDを抽出
    if (!acc[DEVICE_ID]) {
      // accオブジェクトにDEVICE_IDのキーが存在しない場合
      acc[DEVICE_ID] = []; // 新しい配列を作成して、そのキーに割り当てる
    }
    acc[DEVICE_ID].push(current); // DEVICE_IDのキーの配列にcurrentを追加
    return acc; // 更新されたaccを返す
  }, {});

  // デバイスごとの色を定義
  const deviceColors = {
    device_1: "rgba(75, 192, 192, 1)",
    device_2: "rgba(255, 99, 132, 1)",
    device_3: "rgba(54, 162, 235, 1)",
    device_4: "rgba(255, 206, 86, 1)",
    device_5: "rgba(153, 102, 255, 1)",
    device_6: "rgba(255, 159, 64, 1)",
    device_7: "rgba(199, 199, 199, 1)",
    device_8: "rgba(83, 102, 255, 1)",
    device_9: "rgba(99, 255, 132, 1)",
    device_10: "rgba(235, 64, 52, 1)",
    // 追加のデバイスがある場合はさらに下に追加
  };

  // デバイスごとにデータセットを作成
  const datasets = Object.keys(groupedData).map((deviceId) => {
    const color = deviceColors[deviceId] || "rgba(0, 0, 0, 1)"; // デバイスごとの色を使用、ない場合は黒をデフォルトに
    return {
      label: deviceId,
      data: groupedData[deviceId].map((d) => ({ x: d.TIMESTAMP, y: d.TEMPERATURE })), // オブジェクト形式で{x, y}を渡す
      // fill: true,
      backgroundColor: color.replace(", 1)", ", 0.2)"), // 透明度を追加
      borderColor: color,
    };
  });

  const chartData = {
    datasets: datasets,
  };

  // 最も古いタイムスタンプと最新のタイムスタンプを取得
  const minTimestamp = new Date(sortedData[0].TIMESTAMP);
  const maxTimestamp = new Date(sortedData[sortedData.length - 1].TIMESTAMP);

  /// 温度の最小値と最大値を取得してy軸の範囲を設定
  const minTemperature = Math.min(...sortedData.map((d) => d.TEMPERATURE));
  const maxTemperature = Math.max(...sortedData.map((d) => d.TEMPERATURE));

  const options = {
    responsive: true,
    maintainAspectRatio: false, // グラフのアスペクト比を固定しない
    scales: {
      x: {
        type: "time",
        time: {
          unit: "hour", // データポイントを時間単位で表示
          tooltipFormat: "MM/dd/yyyy, HH:mm", // ツールチップに表示するフォーマット
          displayFormats: {
            hour: "MM/dd HH:mm", // 横軸に表示するフォーマット
          },
        },
        title: {
          display: true,
          text: "日時", // y軸のタイトル
        },
        min: minTimestamp, // 横軸の最小値
        max: maxTimestamp, // 横軸の最大値
      },
      y: {
        min: minTemperature - 1, // 温度の最小値を少し下げて余裕を持たせる
        max: maxTemperature + 1, // 温度の最大値を少し上げて余裕を持たせる
        title: {
          display: true,
          text: "温度 (°C)", // y軸のタイトル
        },
      },
    },
  };

  return (
    <div style={{ overflowX: "auto", width: "100%" }}>
      <div style={{ minWidth: "600px", height: "500px" }}>
        {/* 固定幅を設定して、スクロール可能に */}
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default TemperatureChart;
