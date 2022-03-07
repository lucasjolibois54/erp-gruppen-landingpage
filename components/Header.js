import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
// Styled Components
import Image from 'next/image'
import ERPLogo from '/public/erp.svg'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Header = ({ setToggleMenu, toggleMenu }) => {
  return (
    <motion.div
      className="w-full relative mb-52 top-20 z-150"
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -72, opacity: 0 }}
      transition={{
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      }}
    >
      <motion.div className="grow m-auto px-5 relative max-w-7xl h-full">
        <motion.div className="relative flex items-center justify-between h-0">
          <div className="text-lg flex no-underline font-bold text-black">
            <Link href="/">
              <Image width={250} src={ERPLogo} />
            </Link>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex justify-center w-full rounded-md border px-4 py-2 bg-white text-sm font-medium text-black ">
                  Business Central
                  <ChevronDownIcon
                    className="-mr-1 ml-2 h-5 w-5"
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
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm',
                          )}
                        >
                          1
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm',
                          )}
                        >
                          2
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm',
                          )}
                        >
                          3
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
          <motion.div className="" onClick={() => setToggleMenu(!toggleMenu)}>
            <button className="origin-center b-none p-5 outline-none">
              <span className="w-9 h-1 block bg-black m-2" />
              <span className="w-9 h-1 block bg-black m-2" />
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Header
