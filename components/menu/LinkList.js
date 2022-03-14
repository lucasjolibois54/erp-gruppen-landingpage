import { Menu } from '@headlessui/react'
import Link from 'next/link'

function LinkList(props) {
  return (
    <div key={props.id}>
      <Link key={props.id} href={props.href}>
        <Menu as="div" className="relative inline-block text-left mt-2">
          <div>
            <Menu.Button className="inline-flex justify-center w-full rounded-md px-4 py-2 bg-white text-sm font-regular text-black ">
              {props.name}
            </Menu.Button>
          </div>
        </Menu>
      </Link>
    </div>
  )
}

export default LinkList
