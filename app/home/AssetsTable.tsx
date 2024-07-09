import React from "react";
import Image from "next/image";
import { Asset } from "./types";

export default function AssetsTable({ data }: { data: Asset[] | undefined }) {
  return (
    <section className="flex justify-center mt-10">
      <table className="w-3/4 bg-black border border-[#464646] rounded-lg">
        <thead className="border-b border-[#4F4F4F]">
          <tr>
            <th className="p-4 text-left text-white">ASSETS</th>
            <th className="p-4 text-left text-white">LAST TRADE</th>
            <th className="p-4 text-left text-white">24H %</th>
            <th className="p-4 text-left text-white">24H CHANGE</th>
            <th className="p-4 text-left"></th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) && data.map((d) => (
            <tr key={d?._id} className="bg-black">
              <td className="p-4 text-left flex items-center">
                <Image width={150} height={150} className="w-5 h-5 mr-2" src="/cryptocurrency-color_btc.png" alt="BTC" />
                <span className="text-white">
                  <span className="text-gray-400">{d?.title}</span>
                </span>
              </td>
              <td className="p-4 text-white">${d?.lastTrade}</td>
              <td className="p-4 text-red-500">{d?.twentyFourChangePercent}%</td>
              <td className="p-4 text-red-500">${(d?.lastTrade * (d?.twentyFourChangePercent / 100)).toFixed(3)}</td>
              <td className="p-4">
                <button className="px-2 py-1 bg-green-400 text-black rounded">Trade</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
