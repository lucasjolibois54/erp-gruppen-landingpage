import Link from 'next/link'

function Footer() {
  return (
    <div>
      <div className="bg-gray-100 pt-5 m-10 ml-10 mr-10 mx-auto">
        <div className=" px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-3 sm:grid-cols-2 mx-auto max-w-6xl">
          <div className="p-5">
            <div className="text-sm uppercase text-black font-bold">ERPGruppen</div>
            <a href="https://www.google.com/maps/place/Essen+9,+6000+Kolding/@55.4625063,9.4837698,17z/data=!3m1!4b1!4m5!3m4!1s0x464ca1c1f91cf95f:0x15e08cfeae6f4ece!8m2!3d55.4625033!4d9.4859585" className="my-3 block" >Essen 9 <span className="text-teal-600 text-xs p-1"></span></a>
            <a href="https://www.google.com/maps/place/Essen+9,+6000+Kolding/@55.4625063,9.4837698,17z/data=!3m1!4b1!4m5!3m4!1s0x464ca1c1f91cf95f:0x15e08cfeae6f4ece!8m2!3d55.4625033!4d9.4859585" className="my-3 block" >6000 Kolding <span className="text-teal-600 text-xs p-1"></span></a>
            <a className="my-3 block" >CVR 30 82 49 46</a>
            <div className="flex">
              <Link href="https://www.facebook.com/ERPgruppen">
              <div>
              <a className="my-3 block pr-3" >
              <img className=""
              src={
                " https://res.cloudinary.com/dckwf6med/image/upload/v1648038073/erp/facebook_zpmzto.svg"
              } alt="Banner" /> <span className="text-teal-600 text-xs p-1"></span></a> 
              </div>
              </Link>
              <Link href="https://www.linkedin.com/company/erpgruppen-a-s/?originalSubdomain=dk">
              <div>
              <a className="my-3 block pr-3" >
                <img className=""
                src={
                  " https://res.cloudinary.com/dckwf6med/image/upload/v1648038442/erp/linkedin_uchkyv.svg"
                } alt="Banner" /><span className="text-teal-600 text-xs p-1"></span></a> </div></Link>
                  <Link href="https://www.youtube.com/channel/UCAc4QgHWRWE6rNAFDENl76w">
              <div>
              <a className="my-3 block" >
                <img className=""
                src={
                  " https://res.cloudinary.com/dckwf6med/image/upload/v1648038381/erp/youtube_1_etb2h7.svg"
                } alt="Banner" /><span className="text-teal-600 text-xs p-1"></span></a> </div></Link></div> 
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-black font-bold">ERPGruppen</div>
            <Link href="/">
            <a className="my-3 block" >Hjem <span className="text-teal-600 text-xs p-1"></span></a>
            </Link>
            <Link Link href="/produkter">
            <a className="my-3 block" >Produkter <span className="text-teal-600 text-xs p-1"></span></a>
            </Link>
            <Link Link href="/webinar">
            <a className="my-3 block" >Webinar <span className="text-teal-600 text-xs p-1"></span></a>
            </Link>
            <Link Link href="/om-os">
            <a className="my-3 block" >Om os <span className="text-teal-600 text-xs p-1"></span></a> 
            </Link>
            <Link Link href="/kontakt">
            <a className="my-3 block" >Kontakt <span className="text-teal-600 text-xs p-1"></span></a>
            </Link>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-black font-bold">Support</div>
            <a className="my-3 block" >ERP Supporten <span className="text-teal-600 text-xs p-1"></span></a><a href="mailto:mail@erpgruppen.dk" className="my-3 block" >mail@erpgruppen.dk <span className="text-teal-600 text-xs p-1"></span></a> <a href="tel:004578794040" className="my-3 block" >+45 78 79 40 40 <span className="text-teal-600 text-xs p-1"></span></a>
            <div className="text-sm uppercase text-black font-bold">Betingelser & Politik</div>
            <Link Link href="/kontakt">
            <a className="my-3 block" >Betingelser<span className="text-teal-600 text-xs p-1"></span></a>
            </Link>
            <Link Link href="/kontakt">
            <a className="my-3 block" >Politik<span className="text-teal-600 text-xs p-1"></span></a>
            </Link>
          </div>
        </div>

        <div className="bg-gray-100 w-full" ><div className="float-right bg-gray-100 w-full text-right pr-10 pb-5 mb-6">
          <p className=" bg-gray-100 w-full inline-block text-right p-3 mb-5">© 2008-2022 ERPGruppen A/S</p></div>
        </div>
      </div>
    </div>

  );
}

export default Footer;
