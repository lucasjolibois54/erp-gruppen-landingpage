function PolicyTemplate(props) {
  return (
    <div key={props.id} className=" max-w-6xl mx-auto mb-20">
      <div className="group relative mt-20">
        <div className="md:flex">
          <div className="w-full min-h-80 aspect-w-1 p-5 aspect-h-1 overflow-hidden lg:h-full lg:aspect-none">
            <div className="flex">
              <h3 className="text-5xl flex font-semibold">
                {props.name}
              </h3>
            </div>
            <span
              className="text-gray-300 w-96 mt-5 text-4xl font-regular flex"
              aria-hidden="true"
            >
                {props.title}
            </span>
            <h2 className='mt-10 text-xl font-medium'>{props.heading1}</h2>
            <p className='mt-5 text-gray-700 font-normal leading-loose'>{props.p1}</p>
            <h2 className='mt-10 text-xl font-medium'>{props.heading2}</h2>
            <p className='mt-5 text-gray-700 font-normal leading-loose'>{props.p2}</p>
            <h2 className='mt-10 text-xl font-medium'>{props.heading3}</h2>
            <p className='mt-5 text-gray-700 font-normal leading-loose'>{props.p3}</p>
            <h2 className='mt-10 text-xl font-medium'>{props.heading4}</h2>
            <p className='mt-5 text-gray-700 font-normal leading-loose'>{props.p4}</p>
            <h2 className='mt-10 text-xl font-medium'>{props.heading5}</h2>
            <p className='mt-5 text-gray-700 font-normal leading-loose'>{props.p5}</p>
            <h2 className='mt-10 text-xl font-medium'>{props.heading6}</h2>
            <p className='mt-5 text-gray-700 font-normal leading-loose'>{props.p6}</p>
            <h2 className='mt-10 text-xl font-medium'>{props.heading7}</h2>
            <p className='mt-5 text-gray-700 font-normal leading-loose'>{props.p7}</p>
            <h2 className='mt-10 text-xl font-medium'>{props.heading8}</h2>
            <p className='mt-5 text-gray-700 font-normal leading-loose'>{props.p8}</p>
            <h2 className='mt-10 text-xl font-medium'>{props.heading9}</h2>
            <p className='mt-5 text-gray-700 font-normal leading-loose'>{props.p9}</p>
            <h2 className='mt-10 text-xl font-medium'>{props.heading10}</h2>
            <p className='mt-5 text-gray-700 font-normal leading-loose'>{props.p10}</p>
            <h2 className='mt-10 text-xl font-medium'>{props.heading11}</h2>
            <p className='mt-5 text-gray-700 font-normal leading-loose'>{props.p11}</p>
            <h2 className='mt-10 text-xl font-medium'>{props.heading12}</h2>
            <p className='mt-5 text-gray-700 font-normal leading-loose'>{props.p12}</p>
            <h2 className='mt-10 text-xl font-medium'>{props.heading13}</h2>
            <p className='mt-5 text-gray-700 font-normal leading-loose'>{props.p13}</p>
            <h2 className='mt-10 text-xl font-medium'>{props.heading14}</h2>
            <p className='mt-5 text-gray-700 font-normal leading-loose'>{props.p14}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PolicyTemplate
