import React from 'react'
import Image from 'next/image';

export default function Swap() {
  return (
        <section className="flex justify-center mt-10">
        <div className="w-3/4 border border-[#464646] rounded-lg bg-black p-8">
            <div className="flex justify-between items-center">
                <span className="text-white font-roboto text-xl font-semibold">SWAP TOKENS</span>
                <Image width={30} height={30} src="/lets-icons_setting-alt-fill.png" alt="Settings"/>
            </div>
            <div className="flex justify-between gap-2 mt-4">
                <div className="flex bg-[#1E1E1E] p-6 w-1/2 justify-between">
                    <div className="flex flex-col">
                        <span className="text-white text-5xl font-semibold">0.00</span>
                        <span className="text-[#8D8D8D] text-base">$0.00</span>
                    </div>
                    <div className="flex flex-col items-end">
                        <Image width={130} height={160} src="/Frame 30.png" alt="Token"/>
                        <span className="text-[#8D8D8D] text-sm">Balance: <span className="text-[#3DD598]">24,240</span></span>
                    </div>
                </div>
                <div className="relative flex bg-[#1E1E1E] p-6 w-1/2 justify-between">
                    <div className="flex flex-col">
                        <span className="text-white text-5xl font-semibold">0.00</span>
                        <span className="text-[#8D8D8D] text-base">$0.00</span>
                    </div>
                    <div className="flex flex-col items-end">
                        <Image width={130} height={160} src="/Frame 30.png" alt="Token"/>
                        <span className="text-[#8D8D8D] text-sm">Balance: <span className="text-[#3DD598]">24,240</span></span>
                    </div>
                    <Image width={200} height={200} className="absolute left-[-9px] transform -translate-x-1/2 bg-black rounded-lg w-9 h-9 mt-5"
                        src="/Frame 36.png" alt="Swap"/>
                </div>
            </div>
            <div className="flex justify-center mt-4">
                <button className="bg-[#5E239D] w-64 h-12 text-white rounded-lg">SWAP TOKENS</button>
            </div>
            <div className="flex justify-between items-center mt-4">
                <div className="flex flex-col">
                    <span className="text-white text-sm">1 BTC = 32.4039 ETH</span>
                    <span className="text-[#0085FF] text-sm">Free exchange</span>
                </div>
                <span className="text-[#8D8D8D] text-sm">Updates in 4s</span>
            </div>
        </div>
    </section>
  )
}
