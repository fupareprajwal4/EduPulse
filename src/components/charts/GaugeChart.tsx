import { EChart } from "./EChart";

export function GaugeChart({
  value,
  label,
  height = 220,
  color = "#10b981",
}: {
  value: number;
  label: string;
  height?: number;
  color?: string;
}) {
  return (
    <EChart
      height={height}
      option={{
        series: [
          {
            type: "gauge",
            startAngle: 200,
            endAngle: -20,
            min: 0,
            max: 100,
            progress: { show: true, width: 12, itemStyle: { color } },
            axisLine: { lineStyle: { width: 12, color: [[1, "rgba(148,163,184,0.15)"]] } },
            axisTick: { show: false },
            splitLine: { show: false },
            axisLabel: { show: false },
            pointer: { show: false },
            detail: {
              valueAnimation: true,
              fontSize: 26,
              fontWeight: 700,
              offsetCenter: [0, "-10%"],
              formatter: "{value}%",
              color: "inherit",
            },
            title: { offsetCenter: [0, "35%"], fontSize: 12, color: "#9ca3af" },
            data: [{ value, name: label }],
          },
        ],
      }}
    />
  );
}
