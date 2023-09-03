"use client";
import SyntaxHighlighter from 'react-syntax-highlighter';
import {  Switch } from '@headlessui/react'
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
import Price  from '../../components/price'
import { useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const navigation = [
  { name: 'Kronicle', href: '#' },
]
const secondaryNavigation = [
  { name: 'General', href: '/home', icon: UserCircleIcon, current: false },
  { name: 'Notifications', href: '#', icon: BellIcon, current: false },
  { name: 'Plan', href: '/plans', icon: CubeIcon, current: true },
  { name: 'Billing', href: '/billing', icon: CreditCardIcon, current: false },
]

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}


export default function Pragma(props: any) {
    const pricing = {
        tiers: [
          {
            title: 'Hacker',
            price: 4.69,
            frequency: '/month',
            description: 'The essentials to provide your best work for clients.',
            features: ['3 Oracles', 'Unlimited Calls', 'REST API Access', '48-hour support response time'],
            cta: 'Monthly billing',
            mostPopular: false,
          },
          {
            title: 'Startup',
            price: 9.99,
            frequency: '/month',
            description: 'A plan that scales with your rapidly growing business.',
            features: ['5 Oracles', 'Unlimited Calls', 'REST API Access', '24-hour support response time'],
            cta: 'Monthly billing',
            mostPopular: true,
          },
        ],
      }
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
        
        <section className="relative" aria-labelledby="pricing-heading">
          <h2 id="pricing-heading" className="sr-only">
            Pricing
          </h2>

          {/* Tiers */}
          <div className="mx-auto max-w-2xl space-y-12 px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:space-y-0 lg:px-8">
            {pricing.tiers.map((tier) => (
              <div
                key={tier.title}
                className="relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{tier.title}</h3>
                  {tier.mostPopular ? (
                    <p className="absolute top-0 -translate-y-1/2 transform rounded-full bg-rose-500 px-4 py-1.5 text-sm font-semibold text-white">
                      Most popular
                    </p>
                  ) : null}
                  <p className="mt-4 flex items-baseline text-gray-900">
                    <span className="text-5xl font-bold tracking-tight">${tier.price}</span>
                    <span className="ml-1 text-xl font-semibold">{tier.frequency}</span>
                  </p>
                  <p className="mt-6 text-gray-500">{tier.description}</p>

                  {/* Feature list */}
                  <ul role="list" className="mt-6 space-y-6">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex">
                        <ClipboardIcon className="h-6 w-6 flex-shrink-0 text-rose-500" aria-hidden="true" />
                        <span className="ml-3 text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#"
                  className={classNames(
                    tier.mostPopular
                      ? 'bg-rose-500 text-white hover:bg-rose-600'
                      : 'bg-rose-50 text-rose-700 hover:bg-rose-100',
                    'mt-8 block w-full rounded-md border border-transparent py-3 px-6 text-center font-medium'
                  )}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </section>


        </main>
      </div>
    </div>
  )
}