import {
  LineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
  AreaChart,
  Area,
} from "recharts";

export const Chart = () => {
  const data = [
    { name: "0", value: 0 },
    { name: "Tour 1", value: 25 },
    { name: "Tour 2", value: 65 },
    { name: "Tour 3", value: 32 },
    { name: "Tour 4", value: 10 },
    { name: "Tour 5", value: 98 },
  ];
  return (
    <ResponsiveContainer minWidth={200} minHeight={200}>
      <AreaChart
        data={data}
        margin={{ top: 20, right: 5, left: -30, bottom: 0 }}
        strokeWidth={2}
        minWidth={200}
        minHeight={200}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="16.67%"
              stopColor="rgba(237, 255, 29)"
              stopOpacity={0.51}
            />
            <stop
              offset="99.99%"
              stopColor="rgba(255, 255, 255)"
              stopOpacity={0}
            />
            <stop
              offset="100%"
              stopColor="rgba(255, 255, 255)"
              stopOpacity={0}
            />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="value"
          stroke="#EDFF1D"
          fillOpacity={1}
          fill="url(#colorUv)"
          dot={{ stroke: "#FFFFFF" }}
        />
        <CartesianGrid strokeOpacity={0} />
        <XAxis dataKey="name" />
        <YAxis dataKey="value" domain={[0, 100]} tickCount={12} />
        <Tooltip />
      </AreaChart>
    </ResponsiveContainer>
  );
};
