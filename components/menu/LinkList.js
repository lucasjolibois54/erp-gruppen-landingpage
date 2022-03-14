import { Menu } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function LinkList(props) {
  return (
    <div key={props.id}>
    <Menu as="div" className="relative inline-block text-left mt-2">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md px-4 py-2 bg-white text-sm font-regular text-black ">
          {props.name}
        </Menu.Button>
      </div>
    </Menu>
    </div>
  )
}

export default LinkList
