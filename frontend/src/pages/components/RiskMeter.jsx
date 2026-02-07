export default function RiskMeter({ score }) {
  return (
    <div className="mt-4">
      <p className="text-xs text-gray-400">Risk Level</p>
      <div className="w-full h-2 bg-gray-800 rounded">
        <div
          className="h-2 rounded bg-gradient-to-r from-green-400 via-yellow-400 to-red-500"
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}
