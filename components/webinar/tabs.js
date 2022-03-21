import Fade from 'react-reveal/Fade'

import { Tab } from '@headlessui/react'

function Tabs() {
  return (
    <div>
    <div className="pt-20">
        <div className="my-auto mx-auto xxsm:mt-6 lgbasemd:mt-0 max-w-7xl">
<div className='text-center'>

    <Tab.Group
      onChange={(index) => {
        console.log('Changed selected tab to:', index)
      }}
    >
      <Tab.List>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>Content 1</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>

    </div></div></div></div>
  )
}

export default Tabs