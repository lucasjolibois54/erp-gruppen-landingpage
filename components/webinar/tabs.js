import Fade from 'react-reveal/Fade'

import { Tab } from '@headlessui/react'

function Tabs() {
    return (
        <div>
            <div className="pt-20">
                <div className="my-auto mx-auto xxsm:mt-6 lgbasemd:mt-0 max-w-7xl">

                    <Tab.Group
                        onChange={(index) => {
                            console.log('Changed selected tab to:', index)
                        }}
                    >
                        <Tab.List>
                            <div className='text-center space-x-5'>
                                <Tab><div className='max-w-xs border-2 pr-8 pl-8 pt-4 pb-4 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all ease-in-out'><h2 className='text-left text-2xl font-bold text-gray-two'>Business central</h2> <p className='text-left text-sm text-gray-two'>Find et BC webinar og få indblik <br />i økonomi og forretningsstyring</p></div></Tab>
                                <Tab><div className='max-w-xs border-2 pr-8 pl-8 pt-4 pb-4 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all ease-in-out'><h2 className='text-left text-2xl font-bold text-gray-two'>Sales (CRM)</h2> <p className='text-left text-sm text-gray-two'>Find et sales webinar of få indblik i økonomistyring</p></div></Tab>
                                <Tab><div className='max-w-xs border-2 pr-8 pl-8 pt-4 pb-4 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all ease-in-out'><h2 className='text-left text-2xl font-bold text-gray-two'>D365 Ejendom</h2> <p className='text-left text-sm text-gray-two'>Find et D365 ejendom webinar og få indblik i ejendomsadministration</p></div></Tab>
                            </div>
                        </Tab.List>
                        <Tab.Panels>
                            <Tab.Panel> <div className='text-center'>Content 1</div></Tab.Panel>
                            <Tab.Panel> <div className='text-center'>Content 2</div></Tab.Panel>
                            <Tab.Panel> <div className='text-center'>Content 3</div></Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>

                </div></div></div>
    )
}

export default Tabs