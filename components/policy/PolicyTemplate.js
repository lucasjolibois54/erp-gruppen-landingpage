//Components
import Fade from 'react-reveal/Fade'

function PolicyTemplate(props) {
  return (
    <div key={props.id} className=" max-w-6xl mx-auto mb-20">
      <div className="group relative mt-20">
        <div className="md:flex">
          <div className="w-full min-h-80 aspect-w-1 p-5 aspect-h-1 overflow-hidden lg:h-full lg:aspect-none">
            <div className="flex">
              <h3 className="text-5xl flex font-semibold">
                <Fade top>{props.name}</Fade>
              </h3>
            </div>
            <span
              className="text-gray-300 w-96 mt-5 text-4xl font-regular flex"
              aria-hidden="true"
            >
              <Fade bottom>{props.title}</Fade>
            </span>
            <h2 className='mt-10 font-normal'>Hello</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PolicyTemplate
