import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import { type } from "os";

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}
interface ChartProps {
  coinId: string;
  isDark: boolean;
}
function Chart({ coinId, isDark }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 10000,
    }
  );
  const date = Date.now();
  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <>
          <ApexChart
            type="line"
            series={[
              {
                name: "Price",
                data: data?.map((price) => price.close),
              },
            ]}
            options={{
              theme: {
                mode: isDark ? "dark" : "light",
              },
              chart: {
                height: 300,
                width: 500,
                toolbar: {
                  show: false,
                },
                background: "transparent",
              },
              grid: { show: false },
              stroke: {
                curve: "smooth",
                width: 4,
              },
              yaxis: {
                show: true,
              },
              xaxis: {
                axisBorder: { show: false },
                axisTicks: { show: false },
                labels: { show: false },
                type: "datetime",
                categories: data?.map((price) => price.time_close),
              },
              fill: {
                type: "gradient",
                gradient: { gradientToColors: ["#0be881"], stops: [0, 100] },
              },
              colors: ["#0fbcf9"],
              tooltip: {
                y: {
                  formatter: (value) => `$${value.toFixed(2)}`,
                },
              },
            }}
          />
          <ApexChart
            type="candlestick"
            series={[
              {
                data: [
                  {
                    x: Date.now() - 60 * 60 * 24 * 6,
                    y: [6629.81, 6650.5, 6623.04, 6633.33],
                  },
                  {
                    x: Date.now() - 60 * 60 * 24 * 5,
                    y: [6629.833, 6650.5, 6623.04, 6633.33],
                  },
                  {
                    x: Date.now() - 60 * 60 * 24 * 4,
                    y: [6629.81, 6650.5, 6623.04, 6633.33],
                  },
                  {
                    x: Date.now() - 60 * 60 * 24 * 3,
                    y: [6629.81, 6650.5, 6623.04, 6633.33],
                  },
                  {
                    x: Date.now() - 60 * 60 * 24 * 2,
                    y: [6629.81, 6650.5, 6623.04, 6633.33],
                  },
                  {
                    x: Date.now() - 60 * 60 * 24 * 1,
                    y: [6629.81, 6650.5, 6623.04, 6633.33],
                  },
                  {
                    x: Date.now(),
                    y: [6629.81, 6650.5, 6623.04, 6633.33],
                  },
                ],
              },
            ]}
            options={{
              chart: {
                type: "candlestick",
              },
              xaxis: {
                type: "datetime",
              },
              yaxis: {
                show: true,
              },
            }}
          />
          <span>Hi</span>
        </>
      )}
    </div>
  );
}

export default Chart;
