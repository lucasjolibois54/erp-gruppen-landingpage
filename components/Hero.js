

function Hero() {
  return (
    <div>
      <h1 className="text-lg xxsm:text-base xsm:text-xl basesm:text-2xl mdsm:text-3xl basemd:text-4xl baselg:text-5xl basemd:px-24 sbasesm:px-20 smdsm:px-20 mdsm:px-10 baselg:px-4 ssm:px-10 px-4 xsbasesm:px-16 text-center max-w-4xl mx-auto font-semibold text-center mt-28">Vi sikrer at virksomheder får <span className="text-green-hl">professionel</span> hjælp til at få flyttet deres produktion op på en <span className="text-green-hl">moderne</span> fremtidssikret IT platform.</h1>
      <div className="flex space-x-4 basemd:space-x-6 baselg:space-x-10 justify-center mt-8 mdsm:mt-16 basemd:mt-20">
          <img className="xxsm:h-28 xsm:h-36 mdsm:h-44 basemd:h-60 baselg:h-96 w-auto" src={'https://res.cloudinary.com/ds8p0huok/image/upload/v1643884934/samples/austin-distel-wD1LRb9OeEo-unsplash_3_jnrrdn.png'} alt="mockup" />
          <img className="xxsm:h-28 xsm:h-36 mdsm:h-44 mdsm:h-44 basemd:h-60 baselg:h-96 w-auto mt-6 lgbasemd:mt-10 base2lg:mt-20" src={'https://res.cloudinary.com/ds8p0huok/image/upload/v1643884934/samples/image_26_wm8c3a.png'} alt="mockup" />
          <img className="xxsm:h-28 xsm:h-36 mdsm:h-44 mdsm:h-44 basemd:h-60 baselg:h-96 w-auto" src={'https://res.cloudinary.com/ds8p0huok/image/upload/v1643884934/samples/image_27_po9vvq.png'} alt="mockup" />
      </div>

<div className="mt-48 mb-48">

  {/* <div className="flex bg-card-1-color w-2/6 mx-auto">
    <div className="w-4/6">
      <h3>
        nam
      </h3>
    </div>
    <div>
    <img className="max-w-4xl" src={'https://res.cloudinary.com/ds8p0huok/image/upload/v1643900038/samples/Group_14_qvnvky.png'} alt="mockup" />
    </div>
  </div> */}

  <div className="p-20">
  <div className="bg-white rounded-lg shadow-2xl md:flex  max-w-4xl mx-auto">
  <div className="p-6">
      <h2 className="font-bold text-xl md:text-3xl mb-2 text-orange-700">the coconut nu</h2>
      <p className="text-orange-700">
        is not a nut
      </p>
    </div>
    <img src="https://res.cloudinary.com/ds8p0huok/image/upload/v1643900038/samples/Group_14_qvnvky.png" alt="Laptop on Desk" class="md:w-3/6 rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
   </div></div>

</div>
    </div>
  ) 
  
}

export default Hero