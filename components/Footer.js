function Footer() {
  return (
    <div>
      <div className="bg-gray-100 pt-5 m-10 ml-10 mr-10 mx-auto">
        <div className=" px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-3 sm:grid-cols-2 mx-auto max-w-6xl">

          <div className="p-5">
            <div className="text-sm uppercase text-black font-bold">ERPGruppen</div>
            <a className="my-3 block" href="/#">Essen 9 <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">6000 Kolding <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">CVR 30 82 49 46</a>
            <div className="flex"><a className="my-3 block pr-4" href="/#"><img className=""
              src={
                " https://res.cloudinary.com/dckwf6med/image/upload/v1647947332/erp/Vector_hrsdpc.svg"
              } alt="Banner" />   <span className="text-teal-600 text-xs p-1"></span></a>

              <a className="my-3 block" href="/#"><img className=""
                src={
                  " https://res.cloudinary.com/dckwf6med/image/upload/v1647947332/erp/Vector-1_bm1dl1.svg"
                } alt="Banner" />   <span className="text-teal-600 text-xs p-1"></span></a></div>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-black font-bold">ERPGruppen</div>
            <a className="my-3 block" href="/#">Hjem <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">Produkter <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">Webinar <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">Om os <span className="text-teal-600 text-xs p-1"></span></a> <a className="my-3 block" href="/#">Kontakt <span className="text-teal-600 text-xs p-1"></span></a>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-black font-bold">Support</div>
            <a className="my-3 block" href="/#">ERP Supporten <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">mail@erpgruppen.dk <span className="text-teal-600 text-xs p-1"></span></a> <a className="my-3 block" href="/#">+45 78 79 40 40 <span className="text-teal-600 text-xs p-1"></span></a>
          </div>
        </div>
        
        <div className="bg-gray-100 w-full" ><div className="float-right bg-gray-100">
          <p classNameName=" bg-gray-100 w-full inline-block text-right p-3 mb-5">© 2008-2022 ERPGruppen A/S</p></div>
      </div>
      </div>
    </div>

  );
}

export default Footer;
