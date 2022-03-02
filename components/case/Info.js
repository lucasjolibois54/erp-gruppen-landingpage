import React from 'react';
 
function Info (props){
  return (
    <div className="grid max-w-7xl mx-auto">
      <div key={props.id} className="group relative mt-20">
        <div className="md:flex">
          <div className="w-full min-h-80 aspect-w-1 p-5 aspect-h-1 overflow-hidden lg:h-full lg:aspect-none">
            <h3 className="text-5xl flex font-semibold">
              {props.name}
            </h3>
            <span
              aria-hidden="true"
              className="text-gray-300 w-96 mt-5 text-4xl font-regular flex"
            >
              {props.title}
            </span>
          </div>
          <div className="w-full min-h-80 aspect-w-1 aspect-h-1 overflow-hidden lg:h-full lg:aspect-none flex">
            <h3 className="font-regular m-5 text-lg">{props.textBox1}</h3>
          </div>
        </div>
        <img
          className="w-full h-1/3 object-center object-cover lg:w-full lg:h-1/4 mt-20"
          src={props.imageSrc}
          alt={props.imageAlt}
        />
        <div className="w-full aspect-w-1 aspect-h-1 overflow-hidden lg:h-full lg:aspect-none">
          <div className="flex mx-auto justify-center">
            <h3 className="m-12 text-md">
              Strategy
              <span className="flex text-sm m-3">Hello</span>
              <span className="flex text-sm m-3">Hello</span>
            </h3>
            <h3 className="m-12 text-md">
              User Experience
              <span className="flex text-sm m-3">Hello</span>
              <span className="flex text-sm m-3">Hello</span>
            </h3>
            <h3 className="m-12 text-md">
              propsion
              <span className="flex text-sm m-3">Hello</span>
              <span className="flex text-sm m-3">Hello</span>
            </h3>
            <h3 className="m-12 text-md">
              Platforms
              <span className="flex text-sm m-3">Hello</span>
              <span className="flex text-sm m-3">Hello</span>
            </h3>
          </div>
          <div className="mt-20 mx-12">
            <h3 className="text-5xl flex font-semibold">
              Nye implementeringer
            </h3>
            <h3 className="mt-8 font-regular text-lg gri">
              {props.textBox2}
              <span className="mt-5 flex">{props.textBox3}</span>
            </h3>
          </div>
          <div className="mt-20 1xl:mt-60 justify-center mx-12">
            <div className="flex invisible h-0 lgbasemd:h-auto lgbasemd:visible">
              <img
                className="h-16 w-auto pl-6"
                src={
                  "https://res.cloudinary.com/ds8p0huok/image/upload/v1645175524/Ellipse_92_wpnmfl.png"
                }
                alt="mockup"
              />
              <div className="flex flex-col items-center justify-center pl-2">
                <h2 className="font-bold">Niels pedersen</h2>
                <p>CEO, Cabola ApS</p>
              </div>
            </div>
            <div className="p-10 w-2/3 items-center justify-center invisible h-0 lgbasemd:h-auto lgbasemd:visible lgbasemd:space-x-6 smbaselg:space-x-16 aboutlg:space-x-20 baselg:space-x-28 base2lg:space-x-36">
              <blockquote className="pt-1 pl-1">
                &gt;{props.textBox3}
              </blockquote>
            </div>
          </div>
        </div>
      </div>
  </div>

  )
}
export default Info;