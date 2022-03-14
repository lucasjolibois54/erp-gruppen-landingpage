import React from 'react'
//Components
import Modal from '../modals/Modal'
import Fade from 'react-reveal/Fade'

function Info(props) {
  return (
    <div key={props.id} className="grid max-w-6xl mx-auto">
      <div className="group relative mt-20">
        <div className="md:flex">
          <div className="w-full min-h-80 aspect-w-1 p-5 aspect-h-1 overflow-hidden lg:h-full lg:aspect-none">
            <div className="flex">
              <h3 className="text-5xl flex font-semibold">
                <Fade top>{props.name}</Fade>
              </h3>
              <Modal />
            </div>
            <span
              className="text-gray-300 w-96 mt-5 text-4xl font-regular flex"
              aria-hidden="true"
            >
              <Fade bottom>{props.title}</Fade>
            </span>
          </div>
          <div className="w-full min-h-80 aspect-w-1 aspect-h-1 overflow-hidden lg:h-full lg:aspect-none flex">
            <h3 className="font-regular m-5 text-lg">
              <Fade bottom cascade>
                {props.textBox1}
              </Fade>
            </h3>
          </div>
        </div>
        <Fade>
          <img
            className="w-full h-1/3 object-center object-cover lg:w-full lg:h-1/4 mt-20"
            src={props.imageSrc}
            alt={props.imageAlt}
          />
        </Fade>
        <div className="w-full aspect-w-1 aspect-h-1 overflow-hidden lg:h-full lg:aspect-none">
        <div className="mt-20 mx-12">
        {props.textBox4}
        </div>
          <div className="mx-auto justify-center lg:grid-cols-2 grid">
            <h3 className="m-8 font-bold text-md bg-blue-50 rounded-xl p-8">
              Strategi
              <span className="flex font-medium text-sm mt-3 leading-tight">
                Cabolas forretningsstrategi blev fremtidssikret med op til 17x
                mere sandsynlighed.
              </span>
            </h3>
            <h3 className="m-8 font-bold text-md bg-red-50 rounded-xl p-8">
              User Experience
              <span className="flex font-medium text-sm mt-3 leading-tight">
                Hello
              </span>
            </h3>
            <h3 className="m-8 font-bold text-md bg-green-50 rounded-xl p-8">
              Produktion
              <span className="flex font-medium text-sm mt-3 leading-tight">
                Hello
              </span>
            </h3>
            <h3 className="m-8 font-bold text-md bg-purple-50 rounded-xl p-8">
              Platforme
              <span className="flex font-medium text-sm mt-3 leading-tight">
                Dynamics 365 Business Central
              </span>
            </h3>
          </div>
          <div className="mt-20 mx-12">
            <Fade>
              <h3 className="text-5xl flex font-semibold">
                Nye implementeringer
              </h3>
            </Fade>
            <h3 className="mt-8 font-regular text-lg gri">
              <Fade bottom>{props.textBox2}</Fade>
            </h3>
            <h3 className="mt-8 font-regular text-lg gri">
              <Fade bottom>{props.textBox1}</Fade>
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Info