import "./App.css";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import TemperatureChart from "./components/TemperatureChart";

const ENDPOINT = "http://localhost:4001";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const socket = io(ENDPOINT);
    socket.on("FromAPI", (data) => {
      setData(data);
    });
    return () => socket.disconnect();
  }, []);

  return (
    <div className='App'>
      <h1>IoT機器の温度一覧</h1>
      <TemperatureChart data={data} />
    </div>
  );
}

export default App;
