import Link from 'next/link'
import Fade from 'react-reveal/Fade'

function Hero() {
  return (
    <div>
      <div className="absolute top-0 -z-50 baselg:visible xxsm:invisible w-auto min-w-full max-h-full">
        <video autoPlay muted loop className="w-auto min-w-full max-h-full">
          <source
            src="https://res.cloudinary.com/aeeux/video/upload/v1646385704/ERP%20Produktion/erp_yu5gmp.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className=" my-auto mx-auto xxsm:mt-6 lgbasemd:mt-20 max-w-6xl">
        <div className="">
          <div className="flex">
            <Fade>
              <h2 className="text-8xl baselg:text-white xxsm:text-4xl xxsm:ml-10 xxsm:max-w-xs xxsm:pr-9 xsm:text-5xl sbasesm:max-w-sm sbasesm:text-6xl sbasesm:mr-20 baselg:text-7xl baselg:mr-20 baselg:max-w-md base2lg:text-8xl base2lg:max-w-3xl font-bold">
                Konsulenter i gulvhøjde <br />{' '}
                <span className="text-blue-500 leading-snug">IT i skyen.</span>
              </h2>
            </Fade>
          </div>
          <p className="text-xl baselg:text-white xxsm:ml-10 max-w-md xxsm:pr-8 xxsm:text-sm xxsm:mt-8 xsm:mt-8 basemd:mt-2 1xl:mt-12">
            <Fade>
              ERP Produktion hjalp os med at strømline vores flow, og skabe en
              20% tidsbesparelse i virksomheden.
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
            <button className="xsm:ml-10 baselg:text-white xxsm:ml-3 underline transition duration-500 ease-in-out transform hover:scale-110">
              Læs mere!
            </button>
          </Fade>
        </Link>
        <Fade bottom>
          <div className="mt-20 1xl:mt-60 rounded-xl xl:p-7 xl:pb-10 big:mt-96 mb-0 overflow-x-hidden w-full">
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
