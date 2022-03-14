//Components
import Modal from '../modals/Modal'
import Fade from 'react-reveal/Fade'

function Info(props) {
  return (
    <div key={props.id} className=" max-w-6xl mx-auto mb-20">
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
        <div className="mt-20 mx-12 text-2xl font-semi-bold">
        {props.textBox4}
        </div>
        <div className="mt-10 mx-12">
        <h3 className="mt-8 font-regular text-lg gri">
              <Fade bottom>{props.textBox5}</Fade>
            </h3>
        
            <Fade>
          <img
            className="w-full h-1/3 object-center object-cover lg:w-12/12 lg:h-1/4 mt-20"
            src={props.imageSrc1}
            alt={props.imageAlt}
          />
        </Fade></div>
          <div className="mt-20 mx-12">
            <Fade>
              <h3 className="text-5xl flex font-semibold">
                Nye implementeringer
              </h3>
            </Fade>
            <h3 className="mt-8 font-regular text-lg gri">
              <Fade bottom>{props.textBox3}</Fade>
            </h3>
            <h3 className="mt-8 font-regular text-lg gri">
              <Fade bottom>{props.textBox6}</Fade>
            </h3>
            <h3 className="mt-8 font-regular text-lg gri">
              <Fade bottom>{props.textBox7}</Fade>
            </h3>
            <Fade>
              <h3 className="text-5xl flex font-semibold mt-20">
              <Fade bottom>{props.heading}</Fade>
              </h3>
            </Fade>
            <h3 className="mt-8 font-regular text-lg gri">
              <Fade bottom>{props.textBox2}</Fade>
            </h3>
            <h3 className="mt-8 font-regular text-lg gri">
              <Fade bottom>{props.textBox10}</Fade>
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Info
