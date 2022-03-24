import Link from 'next/link'
import Image from 'next/image'

const a = [
  {
    id: 1,
    name: 'Privacy Policy',
    image: 'https://res.cloudinary.com/dbqqgbkds/image/upload/v1648048108/erpgruppen/lessor_sf1z7o.svg',
    alt: 'image',
  },
  {
    id: 2,
    name: 'Privacy Policy',
    image: '',
    alt: 'image',
  },
  {
    id: 3,
    name: 'Privacy Policy',
    image: 'https://res.cloudinary.com/dbqqgbkds/image/upload/v1648048108/erpgruppen/taskletfactory_w6nqbl.svg',
    alt: 'image',
  },
  {
    id: 4,
    name: 'Privacy Policy',
    image: '',
    alt: 'image',
  },
  {
    id: 5,
    name: 'Privacy Policy',
    image: 'https://res.cloudinary.com/dbqqgbkds/image/upload/v1648048109/erpgruppen/continia_qvtkvz.svg',
    alt: 'image',
  },
  {
    id: 6,
    name: 'Privacy Policy',
    image: 'https://res.cloudinary.com/dbqqgbkds/image/upload/v1648048108/erpgruppen/office365_t0hj5m.svg',
    alt: 'image',
  },
]

const b = [
  {
    id: 1,
    name: 'Privacy Policy',
    image: '',
    alt: 'image',
  },
  {
    id: 2,
    name: 'Privacy Policy',
    image: 'https://res.cloudinary.com/dbqqgbkds/image/upload/v1648048108/erpgruppen/danlon_pfung3.svg',
    alt: 'image',
  },
  {
    id: 3,
    name: 'Privacy Policy',
    image: '',
    alt: 'image',
  },
  {
    id: 4,
    name: 'Privacy Policy',
    image: 'https://res.cloudinary.com/dbqqgbkds/image/upload/v1648048108/erpgruppen/lessor_sf1z7o.svg',
    alt: 'image',
  },
  {
    id: 5,
    name: 'Privacy Policy',
    image: '',
    alt: 'image',
  },
  {
    id: 6,
    name: 'Privacy Policy',
    image: 'https://res.cloudinary.com/dbqqgbkds/image/upload/v1648048108/erpgruppen/taskletfactory_w6nqbl.svg',
    alt: 'image',
  },
]

const n = 2;

function Hero() {
  return (
    <div>
      <div className="my-auto mx-auto xxsm:mt-6 lgbasemd:mt-20 max-w-6xl">
        <div className="">
          <div className="absolute baselg:block xxsm:hidden">
            <video autoPlay muted loop className="-z-40 border-t-16 border-l-16 border-gray-100 relative object-none object-right-bottom float-right w-1/2 h-screen big:h-fit rounded-l-xl">
              <source
                src="https://res.cloudinary.com/dckwf6med/video/upload/v1646318247/erp/C0047_zrfbbe.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="flex text-7xl baselg:text-black xxsm:text-4xl xxsm:ml-10 xxsm:max-w-xs xxsm:pr-9 xsm:text-5xl sbasesm:max-w-sm sbasesm:text-6xl sbasesm:mr-20 baselg:text-7xl baselg:mr-20 baselg:max-w-md base2lg:text-7xl base2lg:max-w-3xl font-bold">
            
              <h2 className="leading-snug">
                Konsulenter <br /> i gulvhøjde <br />
                <span className="text-blue-500">IT i skyen.</span>
              </h2>
            
          </div>
          <div className="text-xl xxsm:ml-10 max-w-md xxsm:pr-8 xxsm:text-sm mt-5">
            <p className='leading-loose text-gray-500'>
              
                Når du laver et samarbejde med ERPgruppen, nøjes vi ikke med at implementere dit nye forretningssystem – vi sørger også for den nødvendige træning og support, hele vejen indtil du er kommet sikkert i mål.
              
            </p>
          </div>
          <Link href="/kontakt">
          <a>
            
              <button className="bg-blue-500 mt-8 xxsm:ml-10 text-white rounded-xl ourservice:px-10 ourservice:py-4 xxsm:px-4 xxsm:py-2 xsm:px-6 xsm:py-3 hover:bg-blue-700  transition duration-500 ease-in-out transform ">
                Få en quote <span className="ml-6 xxsm:ml-2">➜</span>
              </button>
            
          </a>
          </Link>
        <Link href="/om-os">
          <a>
          
            <button className="xsm:ml-10 baselg:text-black xxsm:ml-3 underline transition duration-500 ease-in-out transform">
              Læs mere!
            </button>
          
          </a>
        </Link>
        </div>
        
          <div className="2xl:pt-16">
            <div className="mt-20 rounded-xl overflow-x-hidden p-10 bg-white">
              <div className="slider">
                <div className="slide-track">
                  <div className="slide flex">
                    {[...Array(n)].map(() => {
                      return (
                        a.map((props) => {
                          return (
                            <div key={props.id}>
                              <img
                              src={props.image}
                              alt={props.imageAlt}
                              height="100" width="250"
                            />
                            </div>
                          )
                        })
                      )
                    })}
                  </div>
                </div>
                <div className="slide-track-2">
                  <div className="slide flex">
                  {[...Array(n)].map(() => {
                      return (
                        b.map((props) => {
                          return (
                            <img className="" key={props.id} src={props.image} height="100" width="250" alt="" />
                          )
                        })
                      )
                    })}
                  </div>
                </div>
              </div>              
            </div>
          </div>
        
      </div>
    </div>
  )
}

export default Hero
