import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

export default function ChartVelocity({ data }) {
  return (
    <LineChart width={300} height={200} data={data}>
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="velocity" stroke="#a855f7" />
    </LineChart>
  );
}
