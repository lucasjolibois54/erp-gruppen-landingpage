import Link from 'next/link'
import Fade from 'react-reveal/Fade'

function Hero() {
  return (
    <div>
      <div className="my-auto mx-auto xxsm:mt-6 lgbasemd:mt-20 max-w-6xl">
        <div className="">
          <div className="absolute baselg:visible xxsm:invisible">
            <video autoPlay muted loop className="-z-40 border-t-16 border-l-16 border-gray-100 relative object-none object-right-bottom float-right w-1/2 h-screen rounded-l-xl">
              <source
                src="https://res.cloudinary.com/dckwf6med/video/upload/v1646318247/erp/C0047_zrfbbe.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="flex text-7xl baselg:text-black xxsm:text-4xl xxsm:ml-10 xxsm:max-w-xs xxsm:pr-9 xsm:text-5xl sbasesm:max-w-sm sbasesm:text-6xl sbasesm:mr-20 baselg:text-7xl baselg:mr-20 baselg:max-w-md base2lg:text-7xl base2lg:max-w-3xl font-bold">
            <Fade>
              <h2 className="leading-snug">
                Konsulenter <br /> i gulvhøjde <br />
                <span className="text-blue-500">IT i skyen.</span>
              </h2>
            </Fade>
          </div>
          <div className="text-xl xxsm:ml-10 max-w-md xxsm:pr-8 xxsm:text-sm mt-5">
          <p className='leading-loose text-gray-500'>
            <Fade>
              Når du laver et samarbejde med ERPgruppen, nøjes vi ikke med at implementere dit nye forretningssystem – vi sørger også for den nødvendige træning og support, hele vejen indtil du er kommet sikkert i mål.
            </Fade>
          </p>
          </div>
          <a href="#footer">
            <Fade>
              <button className="bg-blue-500 mt-8 xxsm:ml-10 text-white rounded-xl ourservice:px-10 ourservice:py-4 xxsm:px-4 xxsm:py-2 xxsm:px-4 xsm:px-6 xsm:py-3 hover:bg-blue-600  transition duration-500 ease-in-out transform hover:scale-110">
                Få en quote <span className="ml-6 xxsm:ml-2">➜</span>
              </button>
            </Fade>
          </a>
        <Link href="/about">
          <Fade>
            <button className="xsm:ml-10 baselg:text-black xxsm:ml-3 underline transition duration-500 ease-in-out transform hover:scale-110">
              Læs mere!
            </button>
          </Fade>
        </Link>
        </div>
        <Fade bottom>
          <div className="mt-20 rounded-xl overflow-x-hidden p-10 bg-white">
            <div className="slider">
              <div className="slide-track">
                <div className="slide flex">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
                </div>
              </div>
            </div>
            <div className="slider">
              <div className="slide-track-2">
                <div className="slide flex">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Hero
