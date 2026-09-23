import ReactECharts from "echarts-for-react";
import type { EChartsOption } from "echarts";
import { useTheme } from "@/context/ThemeContext";

export function EChart({
  option,
  height = 300,
  className,
}: {
  option: EChartsOption;
  height?: number | string;
  className?: string;
}) {
  const { theme } = useTheme();
  return (
    <ReactECharts
      option={option}
      theme={theme === "dark" ? "dark" : undefined}
      style={{ height, width: "100%" }}
      className={className}
      opts={{ renderer: "svg" }}
      notMerge
    />
  );
}
