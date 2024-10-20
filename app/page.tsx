import { Banana, Rocket, ShieldCheck, Coins } from "lucide-react"
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-400 to-orange-500">
      <header className="container mx-auto py-6">
        <nav className="flex justify-between items-center">
          <Image 
            src="/images/chimp.png" 
            alt="Chimp Coin Logo" 
            width={100} 
            height={100}
          />
          <h1 className="text-4xl font-bold text-white">🐵 Chimp Coin</h1>
          <div className="space-x-4">
            <button className="px-4 py-2 bg-white bg-opacity-20 text-white rounded hover:bg-opacity-30 transition">About</button>
            <button className="px-4 py-2 bg-white bg-opacity-20 text-white rounded hover:bg-opacity-30 transition">Tokenomics</button>
            <button className="px-4 py-2 bg-white bg-opacity-20 text-white rounded hover:bg-opacity-30 transition">Community</button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto py-12">
        <section className="text-center mb-16">
          <h2 className="text-6xl font-extrabold text-white mb-4">Welcome to the Jungle of Gains!</h2>
          <p className="text-xl text-white mb-8">Swing into the future of finance with Chimp Coin 🍌</p>
          <a href="https://ape.express/explore/0xbb951d594f67fb9ae73e7faebc5f8e1b62e2ef3f" target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold rounded-lg transition">
              Buy Chimp Coin
            </button>
          </a>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { icon: <Banana className="h-12 w-12 text-yellow-300" />, title: "Ape-pealing Returns" },
            { icon: <Rocket className="h-12 w-12 text-blue-500" />, title: "To the Treetops!" },
            { icon: <ShieldCheck className="h-12 w-12 text-green-500" />, title: "Jungle-Secure" },
            { icon: <Coins className="h-12 w-12 text-yellow-500" />, title: "Banana Economics" },
          ].map((feature, index) => (
            <div key={index} className="bg-white bg-opacity-90 rounded-lg p-6">
              <div className="flex flex-col items-center mb-4">
                {feature.icon}
                <h3 className="mt-2 text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-center">Experience the wild side of crypto with our unique features!</p>
            </div>
          ))}
        </section>

        <section className="text-center mb-16">
          <h3 className="text-4xl font-bold text-white mb-8">Tokenomics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Total Supply", value: "774,217,349", unit: "CHIMP" },
              { title: "Burn Rate", value: "2%", unit: "Per Transaction" },
              { title: "Reward Pool", value: "5%", unit: "For HODLers" },
            ].map((item, index) => (
              <div key={index} className="bg-white bg-opacity-90 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4">{item.title}</h4>
                <p className="text-4xl font-bold">{item.value}</p>
                <p>{item.unit}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h3 className="text-4xl font-bold text-white mb-8">Join the Chimp Troop!</h3>
          <p className="text-xl text-white mb-8">Don't monkey around! Be part of the wildest community in crypto.</p>
          <div className="flex justify-center space-x-4">
            <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition">
              Twitter
            </button>
            <button className="px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded transition">
              Discord
            </button>
            <button className="px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded transition">
              Telegram
            </button>
          </div>
        </section>
      </main>

      <footer className="container mx-auto py-6 text-center text-white">
        <p>© 2024 Chimp Coin. All rights reserved. 🍌</p>
      </footer>
    </div>
  )
}
