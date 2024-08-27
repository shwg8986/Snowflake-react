-- iotデバイスの温度を疑似的に作成するスクリプト
-- Snowflakeウェブインターフェース上で使用することを想定

CREATE DATABASE iot_data;
USE DATABASE iot_data;

CREATE TABLE IF NOT EXISTS temperature_readings (
    id INTEGER AUTOINCREMENT,
    device_id STRING,
    timestamp TIMESTAMP,
    temperature FLOAT,
    PRIMARY KEY (id)
);

INSERT INTO temperature_readings (device_id, timestamp, temperature) VALUES
    ('device_1', CURRENT_TIMESTAMP, 22.5),
    ('device_2', CURRENT_TIMESTAMP, 19.3),
    ('device_1', TIMESTAMPADD(hour, -1, CURRENT_TIMESTAMP), 21.8),
    ('device_2', TIMESTAMPADD(hour, -1, CURRENT_TIMESTAMP), 20.1),
    ('device_3', TIMESTAMPADD(hour, -1, CURRENT_TIMESTAMP), 28.1),
    ('device_1', TIMESTAMPADD(hour, -2, CURRENT_TIMESTAMP), 22.0),
    ('device_2', TIMESTAMPADD(hour, -2, CURRENT_TIMESTAMP), 19.9),
    ('device_1', TIMESTAMPADD(hour, -3, CURRENT_TIMESTAMP), 21.7),
    ('device_2', TIMESTAMPADD(hour, -3, CURRENT_TIMESTAMP), 20.2),
    ('device_1', TIMESTAMPADD(hour, -4, CURRENT_TIMESTAMP), 22.2),
    ('device_2', TIMESTAMPADD(hour, -4, CURRENT_TIMESTAMP), 19.5),
    ('device_1', TIMESTAMPADD(hour, -5, CURRENT_TIMESTAMP), 21.6),
    ('device_2', TIMESTAMPADD(hour, -5, CURRENT_TIMESTAMP), 20.4),
    ('device_3', TIMESTAMPADD(hour, -5, CURRENT_TIMESTAMP), 22.6),
    ('device_1', TIMESTAMPADD(hour, -6, CURRENT_TIMESTAMP), 22.1),
    ('device_2', TIMESTAMPADD(hour, -6, CURRENT_TIMESTAMP), 19.7),
    ('device_1', TIMESTAMPADD(hour, -7, CURRENT_TIMESTAMP), 21.9),
    ('device_2', TIMESTAMPADD(hour, -7, CURRENT_TIMESTAMP), 20.0),
    ('device_1', TIMESTAMPADD(hour, -8, CURRENT_TIMESTAMP), 22.4),
    ('device_2', TIMESTAMPADD(hour, -8, CURRENT_TIMESTAMP), 19.8),
    ('device_1', TIMESTAMPADD(hour, -9, CURRENT_TIMESTAMP), 21.5),
    ('device_2', TIMESTAMPADD(hour, -9, CURRENT_TIMESTAMP), 20.3),
    ('device_1', TIMESTAMPADD(hour, -10, CURRENT_TIMESTAMP), 22.3),
    ('device_2', TIMESTAMPADD(hour, -10, CURRENT_TIMESTAMP), 19.6),
    ('device_3', TIMESTAMPADD(hour, -10, CURRENT_TIMESTAMP), 14.6),
    ('device_1', TIMESTAMPADD(hour, -11, CURRENT_TIMESTAMP), 21.4),
    ('device_2', TIMESTAMPADD(hour, -11, CURRENT_TIMESTAMP), 20.1),
    ('device_1', TIMESTAMPADD(hour, -12, CURRENT_TIMESTAMP), 22.0),
    ('device_2', TIMESTAMPADD(hour, -12, CURRENT_TIMESTAMP), 19.9),
    ('device_1', TIMESTAMPADD(hour, -13, CURRENT_TIMESTAMP), 21.7),
    ('device_2', TIMESTAMPADD(hour, -13, CURRENT_TIMESTAMP), 20.2),
    ('device_1', TIMESTAMPADD(hour, -14, CURRENT_TIMESTAMP), 22.2),
    ('device_2', TIMESTAMPADD(hour, -14, CURRENT_TIMESTAMP), 19.5),
    ('device_1', TIMESTAMPADD(hour, -15, CURRENT_TIMESTAMP), 21.6),
    ('device_2', TIMESTAMPADD(hour, -15, CURRENT_TIMESTAMP), 20.4),
    ('device_3', TIMESTAMPADD(hour, -15, CURRENT_TIMESTAMP), 26.4),
    ('device_1', TIMESTAMPADD(hour, -16, CURRENT_TIMESTAMP), 22.1),
    ('device_2', TIMESTAMPADD(hour, -16, CURRENT_TIMESTAMP), 19.7),
    ('device_1', TIMESTAMPADD(hour, -17, CURRENT_TIMESTAMP), 21.9),
    ('device_2', TIMESTAMPADD(hour, -17, CURRENT_TIMESTAMP), 20.0),
    ('device_1', TIMESTAMPADD(hour, -18, CURRENT_TIMESTAMP), 22.4),
    ('device_2', TIMESTAMPADD(hour, -18, CURRENT_TIMESTAMP), 19.8),
    ('device_1', TIMESTAMPADD(hour, -19, CURRENT_TIMESTAMP), 21.5),
    ('device_2', TIMESTAMPADD(hour, -19, CURRENT_TIMESTAMP), 20.3),
    ('device_1', TIMESTAMPADD(hour, -20, CURRENT_TIMESTAMP), 22.3),
    ('device_2', TIMESTAMPADD(hour, -20, CURRENT_TIMESTAMP), 19.6),
    ('device_3', TIMESTAMPADD(hour, -20, CURRENT_TIMESTAMP), 29.6),
    ('device_1', TIMESTAMPADD(hour, -21, CURRENT_TIMESTAMP), 21.4),
    ('device_2', TIMESTAMPADD(hour, -21, CURRENT_TIMESTAMP), 20.1),
    ('device_1', TIMESTAMPADD(hour, -22, CURRENT_TIMESTAMP), 22.0),
    ('device_2', TIMESTAMPADD(hour, -22, CURRENT_TIMESTAMP), 19.9),
    ('device_1', TIMESTAMPADD(hour, -23, CURRENT_TIMESTAMP), 21.7),
    ('device_2', TIMESTAMPADD(hour, -23, CURRENT_TIMESTAMP), 20.2),
    ('device_3', TIMESTAMPADD(hour, -23, CURRENT_TIMESTAMP), 26.2);

-- 削除する時に使う
-- Drop database iot_data;

