import { EChart } from "./EChart";

export function RadarSkillChart({
  data,
  height = 320,
}: {
  data: { name: string; value: number }[];
  height?: number;
}) {
  return (
    <EChart
      height={height}
      option={{
        tooltip: {},
        radar: {
          indicator: data.map((d) => ({ name: d.name, max: 100 })),
          radius: "68%",
          splitLine: { lineStyle: { color: "rgba(148,163,184,0.25)" } },
          splitArea: { areaStyle: { color: ["transparent"] } },
          axisName: { color: "#9ca3af", fontSize: 11 },
        },
        series: [
          {
            type: "radar",
            data: [
              {
                value: data.map((d) => d.value),
                name: "Skill Level",
                areaStyle: { color: "rgba(99,102,241,0.25)" },
                lineStyle: { color: "#6366f1", width: 2 },
                itemStyle: { color: "#6366f1" },
              },
            ],
          },
        ],
      }}
    />
  );
}
