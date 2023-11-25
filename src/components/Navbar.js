import React, { useState, Fragment } from "react"
import { Dialog, Menu, Transition } from "@headlessui/react"
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline"
import { Logo } from "./common/Icon"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const navigation = [
  {
    name: "About Us",
    children: [
      { name: "What We do", href: "#" },
      { name: "Business Benefits", href: "#" },
      { name: "Our Supporters", href: "#" },
      { name: "Our Adopters", href: "#" },
      { name: "Support Us", href: "#" },
    ],
  },
  { name: "Latest Releases", href: "#" },
  { name: "Marketplace", href: "#" },
  {
    name: "Projects",
    children: [
      { name: "Eclipse Temurin", href: "#" },
      { name: "Eclipse AQAvit", href: "#" },
      { name: "Eclipse Mission Control", href: "#" },
    ],
  },
  {
    name: "Resources",
    children: [
      { name: "Status", href: "https://status.adoptium.net" },
      { name: "Release Notes", href: "#" },
      { name: "Installation Guide", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Resource Directory", href: "#" },
      { name: "FAQs", href: "#" },
      { name: "Brand & Promotion", href: "#" },
    ],
  },
  {
    name: "Community",
    children: [
      { name: "Our Community", href: "#" },
      { name: "Support", href: "#" },
      { name: "News & Updates", href: "#" },
      { name: "Events", href: "#" },
    ],
  },
]

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="absolute max-w-[1288px] w-full mx-auto px-3 inset-x-0 top-0 z-50">
      <nav
        className="flex items-center gap-5 justify-between py-6"
        aria-label="Global"
      >
        <a href="/" className="-m-1.5 p-1.5">
          <Logo />
        </a>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-6 xl:gap-x-12">
          {navigation.map(item =>
            item.children ? (
              <Menu
                as="div"
                key={item.name}
                className="relative inline-block text-left"
              >
                <div>
                  <Menu.Button className="inline-flex w-full gap-2 justify-center rounded-md text-sm font-semibold text-white-900 hover:bg-white-50">
                    {item.name}
                    <ChevronDownIcon
                      className="-mr-1 h-5 w-5"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items
                    className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-blue shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    style={{ minWidth: "max-content" }}
                  >
                    <div className="py-1">
                      {item.children.map(child => (
                        <Menu.Item key={child.name}>
                          {({ active }) => (
                            <a
                              href={child.href}
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-pink-900"
                                  : "text-white-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              {child.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-white-900"
              >
                {item.name}
              </a>
            )
          )}
        </div>
        <button className="rounded-[88px] hidden sm:block bg-transparent gradient-border border-2  border-pink-500/0 text-white text-sm font-semibold py-2 px-4">
          Contact Us
        </button>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-purple px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Eclipse Adoptium</span>
              <img
                className="h-8 w-auto"
                src="https://raw.githubusercontent.com/adoptium/adoptium.net/main/src/images/adoptium-logo-dark.svg"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white-500/10">
              <div className="space-y-2 py-6">
                {navigation.map(item => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white-900 hover:bg-white-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="bg-transparent border-2 border-pink-500/0 text-white font-bold py-2 px-4 rounded-2xl gradient-border"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

export default Navbar
