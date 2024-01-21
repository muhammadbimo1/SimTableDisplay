export default function Home() {
  return (
    <div style={{ backgroundImage: `url('/begobg.svg')` }} className="font-sans bg-cover py-10 px-24 h-screen">
    <div className="py-10 px-24">
        <h2 className="text-white">Time Results</h2>
        <h4 className="text-gray-300">Current as of 2022/04/01 01:00 (JST)</h4>
        <table className="w-full border-collapse my-12 text-sm bg-gray-200 text-left">
            <thead>
                <tr>
                    <th className="px-4 py-2 text-center border-t-2 border-red-600 bg-gray-800 text-white">Rank</th>
                    <th className="px-4 py-2 text-center border-t-2 border-red-600 bg-gray-800 text-white">Driver</th>
                    <th className="px-4 py-2 text-center border-t-2 border-red-600 bg-gray-800 text-white">Time</th>
                    <th className="px-4 py-2 text-center border-t-2 border-red-600 bg-gray-800 text-white">Car Type</th>
                    <th className="px-4 py-2 text-center border-t-2 border-red-600 bg-gray-800 text-white">Laps</th>
                    <th className="px-4 py-2 text-center border-t-2 border-red-600 bg-gray-800 text-white">Gap</th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-gray-600 text-white">
                    <td className="px-4 py-2 text-center border-b border-gray-300">1</td>
                    <td className="px-4 py-2 text-center border-b border-gray-300">9SK</td>
                    <td className="px-4 py-2 text-center border-b border-gray-300">2'50"964</td>
                    <td className="px-4 py-2 text-center border-b border-gray-300">NSX</td>
                    <td className="px-4 py-2 text-center border-b border-gray-300">7</td>
                    <td className="px-4 py-2 text-center border-b border-gray-300">Taken</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
  );
}
