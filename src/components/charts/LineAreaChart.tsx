import { EChart } from "./EChart";

export function LineAreaChart({
  categories,
  data,
  color = "#6366f1",
  name = "Series",
  height,
}: {
  categories: string[];
  data: number[];
  color?: string;
  name?: string;
  height?: number;
}) {
  return (
    <EChart
      height={height}
      option={{
        grid: { left: 8, right: 8, top: 20, bottom: 28, containLabel: true },
        tooltip: { trigger: "axis" },
        xAxis: {
          type: "category",
          data: categories,
          boundaryGap: false,
          axisLine: { lineStyle: { color: "#9ca3af" } },
          axisLabel: { color: "#9ca3af", fontSize: 11 },
        },
        yAxis: {
          type: "value",
          splitLine: { lineStyle: { color: "rgba(148,163,184,0.15)" } },
          axisLabel: { color: "#9ca3af", fontSize: 11 },
        },
        series: [
          {
            name,
            type: "line",
            data,
            smooth: true,
            symbol: "circle",
            symbolSize: 6,
            lineStyle: { width: 2.5, color },
            itemStyle: { color },
            areaStyle: {
              color: {
                type: "linear",
                x: 0, y: 0, x2: 0, y2: 1,
                colorStops: [
                  { offset: 0, color: `${color}33` },
                  { offset: 1, color: `${color}00` },
                ],
              },
            },
          },
        ],
      }}
    />
  );
}
