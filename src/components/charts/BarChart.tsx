import { EChart } from "./EChart";

export function BarChart({
  categories,
  data,
  color = "#3b82f6",
  height,
  horizontal = false,
}: {
  categories: string[];
  data: number[];
  color?: string;
  height?: number;
  horizontal?: boolean;
}) {
  const catAxis = {
    type: "category" as const,
    data: categories,
    axisLine: { lineStyle: { color: "#9ca3af" } },
    axisLabel: { color: "#9ca3af", fontSize: 11 },
  };
  const valAxis = {
    type: "value" as const,
    splitLine: { lineStyle: { color: "rgba(148,163,184,0.15)" } },
    axisLabel: { color: "#9ca3af", fontSize: 11 },
  };
  return (
    <EChart
      height={height}
      option={{
        grid: { left: 8, right: 8, top: 20, bottom: 28, containLabel: true },
        tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
        xAxis: horizontal ? valAxis : catAxis,
        yAxis: horizontal ? catAxis : valAxis,
        series: [
          {
            type: "bar",
            data,
            barMaxWidth: 28,
            itemStyle: { color, borderRadius: horizontal ? [0, 6, 6, 0] : [6, 6, 0, 0] },
          },
        ],
      }}
    />
  );
}
