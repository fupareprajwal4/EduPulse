import { EChart } from "./EChart";

export function DonutChart({
  data,
  height = 260,
}: {
  data: { name: string; value: number; color: string }[];
  height?: number;
}) {
  return (
    <EChart
      height={height}
      option={{
        tooltip: { trigger: "item" },
        legend: { bottom: 0, textStyle: { color: "#9ca3af", fontSize: 11 } },
        series: [
          {
            type: "pie",
            radius: ["58%", "82%"],
            avoidLabelOverlap: true,
            itemStyle: { borderRadius: 8, borderColor: "transparent", borderWidth: 4 },
            label: { show: false },
            data: data.map((d) => ({ value: d.value, name: d.name, itemStyle: { color: d.color } })),
          },
        ],
      }}
    />
  );
}
