import { EChart } from "./EChart";

export function HeatmapChart({
  data,
  height = 260,
}: {
  data: [number, number, number][];
  height?: number;
}) {
  const weeks = Array.from(new Set(data.map((d) => d[0]))).length;
  return (
    <EChart
      height={height}
      option={{
        tooltip: { position: "top" },
        grid: { left: 40, right: 8, top: 10, bottom: 20 },
        xAxis: {
          type: "category",
          data: Array.from({ length: weeks }, (_, i) => `W${i + 1}`),
          splitArea: { show: true },
          axisLabel: { color: "#9ca3af", fontSize: 10, interval: 1 },
        },
        yAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri"],
          splitArea: { show: true },
          axisLabel: { color: "#9ca3af", fontSize: 11 },
        },
        visualMap: {
          min: 0,
          max: 100,
          show: false,
          inRange: { color: ["#eef2ff", "#818cf8", "#4f46e5"] },
        },
        series: [
          {
            type: "heatmap",
            data,
            itemStyle: { borderRadius: 3, borderColor: "transparent", borderWidth: 2 },
          },
        ],
      }}
    />
  );
}
