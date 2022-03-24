//Components
import Modal from '../modals/Modal'

function Info(props) {
  return (
    <div key={props.id} className=" max-w-6xl mx-auto mb-20">
      <div className="group relative mt-20">
        <div className="md:flex">
          <div className="w-full min-h-80 aspect-w-1 p-5 aspect-h-1 overflow-hidden lg:h-full lg:aspect-none">
            <div className="flex">
              <h3 className="text-5xl flex font-semibold">
                {props.name}
              </h3>
              <Modal />
            </div>
            <span
              className="text-gray-300 w-96 mt-5 text-4xl font-regular flex"
              aria-hidden="true"
            >
              {props.title}
            </span>
          </div>
          <div className="w-full min-h-80 aspect-w-1 aspect-h-1 overflow-hidden lg:h-full lg:aspect-none flex">
            <h3 className="font-regular m-5 text-lg">
             
                {props.textBox1}
              
            </h3>
          </div>
        </div>
       
          <img
            className="w-full h-1/3 object-center object-cover lg:w-full lg:h-1/4 mt-20"
            src={props.imageSrc}
            alt={props.imageAlt}
          />
        
        <div className="w-full aspect-w-1 aspect-h-1 overflow-hidden lg:h-full lg:aspect-none">
        <div className="mt-20 mx-12 text-2xl font-semi-bold">
        {props.textBox4}
        </div>
        <div className="mt-10 mx-12">
        <h3 className="mt-8 font-regular text-lg gri">
             {props.textBox5}
            </h3>
        
           
          <img
            className="w-full h-1/3 object-center object-cover lg:w-12/12 lg:h-1/4 mt-20"
            src={props.imageSrc1}
            alt={props.imageAlt}
          />
        </div>
          <div className="mt-20 mx-12">
           
              <h3 className="md:text-5xl xxsm:text-2xl flex font-semibold">
                Nye implementeringer
              </h3>
            
            <h3 className="mt-8 font-regular text-lg gri">
             {props.textBox3}
            </h3>
            <h3 className="mt-8 font-regular text-lg gri">
             {props.textBox6}
            </h3>
            <h3 className="mt-8 font-regular text-lg gri">
             {props.textBox7}
            </h3>
           
              <h3 className="md:text-5xl xxsm:text-2xl flex font-semibold mt-20">
             {props.heading}
              </h3>
            
            <h3 className="mt-8 font-regular text-lg gri">
             {props.textBox2}
            </h3>
            <h3 className="mt-8 font-regular text-lg gri">
             {props.textBox10}
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Info
