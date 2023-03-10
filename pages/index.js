import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Staking Dapp</title>
        <meta name="description" content="Staking dapp for " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <div className="max-w-lg p-8 mx-auto my-10 bg-white shadow rounded-xl shadow-slate-300">
            <h1 className="text-4xl font-medium text-black">RBTR Staking Dapp</h1>

            <div className="my-5">
              <div className="flex items-center justify-center w-full py-3 my-3 space-x-2 text-center transition duration-150 border rounded-lg border-slate-200 text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow">
                {/* {web3Provider == null ? (
                  //run if null,
                  <button
                    className="py-2 px-2 font-medium text-white bg-[#7245FA] rounded transition duration-300"
                    onClick={connectWallet}
                  >
                    Connect Wallet
                  </button>
                ) : (
                  <div>
                    <p>
                      {web3Provider.provider.selectedAddress.slice(0, 6)}...
                      {web3Provider.provider.selectedAddress.slice(
                        web3Provider.provider.selectedAddress.length - 4,
                        web3Provider.provider.selectedAddress.length
                      )}
                    </p>
                  </div>
                )} */}
                Connect Wallet
              </div>
            </div>
            <div action="" className="my-10">
              <div className="flex flex-col space-y-5">
                <label htmlFor="number">
                  <p className="pb-2 font-medium text-slate-700">
                    Total Arbritage Token Staked <span id="balance"></span>
                  </p>
                  <p className="pb-2 font-medium text-slate-700">
                    Available Arbritage Token To Stake
                  </p>
                  <input
                    // id="number"
                    // name="number"
                    // type="number"
                    // value={amount}
                    // onChange={handleAmount}
                    className="w-full px-3 py-3 border rounded-lg border-slate-200 focus:outline-none focus:border-slate-500 bg-white hover:shadow"
                    placeholder="Enter amount to stake"
                  />
                  <button
                    // onClick={approve}
                    className="py-2 px-2 font-medium text-white bg-[#7245FA] rounded transition duration-300"
                  >
                    {/* {stakeTnx ? "stake" : "approve"} */}
                    Stake
                  </button>
                </label>
                <p className="pb-2 font-medium text-slate-700" id="status" style={{ color: "green" }}></p>
                <label htmlFor="number">
                  <p className="pb-2 font-medium text-slate-700">
                    Withdraw Token
                  </p>
                  <input
                    // id="numberWithdraw"
                    // name="number"
                    // type="number"
                    className="w-full px-3 py-3 border rounded-lg border-slate-200 focus:outline-none focus:border-slate-500 bg-white hover:shadow"
                    placeholder="Amount"
                  />
                  <button className="py-2 px-2 font-medium text-white bg-[#7245FA] rounded transition duration-300" 
                  // onClick={withdraw}
                  >
                    Withdraw
                  </button>
                </label>
                <p id="withdrawStatus" style={{ color: "green" }}></p>
                <button className="inline-flex items-center justify-center w-full py-3 space-x-2 font-medium text-white bg-indigo-600 border-indigo-500 rounded-lg hover:bg-indigo-500 hover:shadow">
                  <span>Claim All</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
