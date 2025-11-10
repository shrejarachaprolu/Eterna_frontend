export default function TokenTableSkeleton() {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-800">
      <table className="min-w-full divide-y divide-gray-800">
        <tbody>
          {Array.from({ length: 10 }).map((_, i) => (
            <tr key={i} className="animate-pulse">
              <td className="px-6 py-4">
                <div className="h-4 w-32 bg-gray-700 rounded"></div>
              </td>
              <td className="px-6 py-4 text-right">
                <div className="h-4 w-20 bg-gray-700 rounded ml-auto"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
