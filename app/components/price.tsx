"use client";

export default function Stats(props: any) {
  const stats = [
    { id: "ethusd", name: 'ETH/USD', image: 'https://i.imgur.com/JefoRcL.png' },
    { id: "daiusd", name: 'DAI/USD', image: 'https://i.imgur.com/iPbMg0z.png' },
    { id: "btcusd", name: 'BTC/USD', image: 'https://i.imgur.com/Qs7PA9W.png'},
  ]
  
  return (
    <div className='mt-4 mb-12'>
      <h3 className="text-base font-semibold leading-6 text-gray-900">Live feed</h3>

      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((item) => {
          return (
            <div
              key={item.id}
              className="relative border border-gray-200 overflow-hidden rounded-lg bg-white px-4 pb-0 pt-5 shadow-sm sm:px-6 sm:pt-6 cursor-pointer hover:border-green-400 hover:bg-green-50"
            >
              <dt>
                <div className="absolute rounded-full p-0 mt-0.5">
                  <img src={item.image} className="h-12 w-12 rounded-full text-white" aria-hidden="true" />
                </div>
                <p className="ml-16 truncate text-sm font-medium text-gray-500">{item.name}</p>
              </dt>
              <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                <p className="text-2xl font-semibold text-gray-900">
                  {Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format((props.price||{})[item.id]||0)}
                  </p>
               
                <div className="hidden absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                  <div className="text-sm">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      View all<span className="sr-only"> {item.name} stats</span>
                    </a>
                  </div>
                </div>
              </dd>
            </div>
          )
        })}
      </dl>

      <h3 className="text-base font-semibold leading-6 text-gray-900 mt-12">REST API</h3>
      <div className="flex border border-gray-200 rounded-lg mt-3 mb-6">
        <pre className='bg-gray-200 px-5 w-full rounded-lg'>
          <code className='text-sm text-black font-base'>
            {`
const apiKey = "afndi39502mn";

const response = await fetch("/api/ethusd?key="+apiKey);
const result = await response.json();

console.log('Price:', result.price);
      `}
          </code>
        </pre>
      </div>

      <h3 className="text-base font-semibold leading-6 text-gray-900 mt-12">Ethers.js</h3>
      <div className="flex border border-gray-200 rounded-lg mt-3 mb-6">
        <pre className='bg-gray-200 px-5 w-full rounded-lg'>
          <code className='text-sm text-black font-base'>
            {`
import { ethers } from 'ethers';
const contractAddress = '0xFD5803565fa93cbF6658F1FDf2547f1ed0fD9B27';
const contractABI = [...];

const apiKey = "afndi39502mn";
const from = "0x705A9ccEEdeab1DCa662fccF72cC5000B80572D8";

const result = await contract.readWithAge("ethusd", apiKey, {from});

console.log('Price:', result.value.toString());
console.log('Age:', result.age.toString());
      `}
          </code>
        </pre>
      </div>
    </div>
  )
}