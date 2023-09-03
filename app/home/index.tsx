"use client";
import type { GetServerSideProps, NextPage } from 'next'
import { Dialog, Switch } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/20/solid'
import {
  BellIcon,
  CreditCardIcon,
  CubeIcon,
  FingerPrintIcon,
  UserCircleIcon,
  UsersIcon,
  ClipboardIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import { CursorArrowRaysIcon, EnvelopeOpenIcon } from '@heroicons/react/24/outline'
import Price  from '../components/price'
import { useEffect, useState } from 'react'


const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Invoices', href: '#' },
  { name: 'Clients', href: '#' },
  { name: 'Expenses', href: '#' },
]
const secondaryNavigation = [
  { name: 'General', href: '#', icon: UserCircleIcon, current: true },
  { name: 'Security', href: '#', icon: FingerPrintIcon, current: false },
  { name: 'Notifications', href: '#', icon: BellIcon, current: false },
  { name: 'Plan', href: '#', icon: CubeIcon, current: false },
  { name: 'Billing', href: '#', icon: CreditCardIcon, current: false },
  { name: 'Team members', href: '#', icon: UsersIcon, current: false },
]

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

function APIKeys() {
  const keys = [
    {id: 1, address: "0xFD5803565fa93cbF6658F1FDf2547f1ed0fD9B27", apiKey: "afndi39502mn"}
  ]

  return (
    <div className=''>
      <h2 className="text-base font-semibold leading-7 text-gray-900">API Keys</h2>
      <p className="mt-1 text-sm leading-6 text-gray-500">Authorize account access</p>

      <dl className="my-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
        {keys.map((item) => {
          return (
            <div className="pt-6 sm:flex" key={item.id}>
              <dt className="font-medium text-gray-900 sm:flex-none sm:pr-6">
                <div className="flex bg-gray-50 border rounded-md hover:bg-gray-100 cursor-pointer">
                  <div className='py-1 mt-0.5 border-r pr-1.5'>
                    <ClipboardIcon className="h-5 w-5 text-gray-400 ml-2" aria-hidden="true" />
                  </div>
                  <span className="font-semibold text-gray-800 px-3 py-1">
                    {item.apiKey}
                  </span>
                </div>
              </dt>
              <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                <div className="text-gray-900 text-base mt-1">{item.address}</div>
                <Switch.Group as="div" className="flex pt-0">
                  <dd className="flex flex-auto items-center justify-end">
                    <Switch
                      checked={true}
                      className={classNames(
                        'bg-green-600',
                        'flex w-8 cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={classNames(
                          'translate-x-3.5',
                          'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                        )}
                      />
                    </Switch>
                  </dd>
                </Switch.Group>
              </dd>
            </div>
          )
        })}
      </dl>

      <div className="flex border-t border-gray-100 pt-6">
        <button type="button" className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
          <span aria-hidden="true">+</span> Generate another key
        </button>
      </div>
    </div>
  )
}

function Stats(props: any) {
  const [price, setPrice] = useState<any>({ethusd: 0, daiusd: 0, btcusd: 0})
  const stats = [
    { id: "ethusd", name: 'ETH/USD', icon: UsersIcon, image: 'https://i.imgur.com/JefoRcL.png' },
    { id: "daiusd", name: 'DAI/USD', icon: CursorArrowRaysIcon, image: 'https://i.imgur.com/iPbMg0z.png' },
    { id: "btcusd", name: 'BTC/USD', icon: EnvelopeOpenIcon, image: 'https://i.imgur.com/Qs7PA9W.png'},
  ]

  useEffect(() => {
    if (props.data) {
      setPrice({
        ...price,
        ...props.data
      })
    }
  }, [props.data])

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
                  {Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price[item.id])}
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

export default function Pragma(props: any) {

  return (
    <div className='bg-white'>
      <header className="absolute inset-x-0 top-0 z-50 flex h-16 border-b border-gray-900/10">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex flex-1 items-center gap-x-6">
            <button type="button" className="-m-3 p-3 md:hidden">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-5 w-5 text-gray-900" aria-hidden="true" />
            </button>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
          </div>
          <nav className="hidden md:flex md:gap-x-11 md:text-sm md:font-semibold md:leading-6 md:text-gray-700">
            {navigation.map((item, itemIdx) => (
              <a key={itemIdx} href={item.href}>
                {item.name}
              </a>
            ))}
          </nav>
          <div className="flex flex-1 items-center justify-end gap-x-8">
            <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
              <span className="sr-only">View notifications</span>
              <BellIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your profile</span>
              <img
                className="h-8 w-8 rounded-full bg-gray-800"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </a>
          </div>
        </div>
        <Dialog as="div" className="lg:hidden" onClose={() => console.log(42)} open={false}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-white px-4 pb-6 sm:max-w-sm sm:px-6 sm:ring-1 sm:ring-gray-900/10">
            <div className="-ml-0.5 flex h-16 items-center gap-x-6">
              <button type="button" className="-m-2.5 p-2.5 text-gray-700">
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
              <div className="-ml-0.5">
                <a href="#" className="-m-1.5 block p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="mt-2 space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="mx-auto max-w-7xl pt-16 lg:flex lg:gap-x-16 lg:px-8">
        <aside className="flex overflow-x-auto border-b border-gray-900/5 py-4 lg:block lg:w-64 lg:flex-none lg:border-0 lg:py-20">
          <nav className="flex-none px-4 sm:px-6 lg:px-0">
            <ul role="list" className="flex gap-x-3 gap-y-1 whitespace-nowrap lg:flex-col">
              {secondaryNavigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-50 text-indigo-600'
                        : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                      'group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm leading-6 font-semibold'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                        'h-6 w-6 shrink-0'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20">

          <Stats data={props.feed} />

          <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">

            <APIKeys />

          </div>
        </main>
      </div>
    </div>
  )
}