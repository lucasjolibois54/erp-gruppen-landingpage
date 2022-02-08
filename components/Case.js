import { AnimateSharedLayout, motion } from "framer-motion";
import { useState } from "react";

function Case() {
  return (
    <div>
      <div className="2xl:container 2xl:mx-auto">
        <div className="bg-card-bg-5 dark:bg-gray-800 mt-20">
          <div className="p-32">
            <h2 className="z-100 text-7xl leading-tight font-medium text-green-hl dark:text-white">
              Junckers industrier
            </h2>
            <p className="text-xl text-gray-400 dark:text-white mt-2 px-5">
              > ERP Produktion hjalp os med at strømline vores flow, <br />og skabe en 20% tidsbesparelse i virksomheden.
            </p>
          </div>
          <div className="flex justify-center w-52">
            <img
              src="https://res.cloudinary.com/aeeux/image/upload/v1644324349/ERP%20Produktion/pngegg_uv8ecp.png"
              alt="A beautiful two seater sofa"
              role="img"
            />
          </div>
        </div>

        <div className="grid mb-10 grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 lg:gap-8 mt-4 md:mt-6 lg:mt-8">
          <div className="bg-card-bg-2 dark:bg-gray-800 mt-20">
            <div className="p-32">
              <h2 className="z-100 text-7xl leading-tight font-medium text-green-hl dark:text-white">
                Telenor
              </h2>
              <p className="text-xl text-gray-400 dark:text-white mt-2 px-5">
              > ERP Produktion hjalp os med at strømline vores flow, <br />og skabe en 20% tidsbesparelse i virksomheden.
            </p>
            </div>
            <div className="flex justify-center items-center">
              <img
                src="https://www.pngall.com/wp-content/uploads/11/iPhone-13-PNG-Cutout.png"
                alt="A beautiful two seater sofa"
                role="img"
              />
            </div>
          </div>
          <div className="bg-card-bg-3 dark:bg-gray-800 mt-20">
            <div className="p-32">
              <h2 className="z-100 text-7xl leading-tight font-medium text-green-hl dark:text-white">
                Danæg
              </h2>
              <p className="text-xl text-gray-400 dark:text-white mt-2 px-5">
              > ERP Produktion hjalp os med at strømline vores flow, <br />og skabe en 20% tidsbesparelse i virksomheden.
            </p>
            </div>
            <div className="flex justify-center items-center">
              <img
                src="https://www.pngall.com/wp-content/uploads/11/iPhone-13-PNG-Cutout.png"
                alt="A beautiful two seater sofa"
                role="img"
              />
            </div>
          </div>
        </div>
        <div className="bg-card-bg-4 dark:bg-gray-800 mt-20">
          <div className="p-32">
            <h2 className="z-100 text-7xl leading-tight font-medium text-green-hl dark:text-white">
              HBO Nordic
            </h2>
            <p className="text-xl text-gray-400 dark:text-white mt-2 px-5">
              > ERP Produktion hjalp os med at strømline vores flow, <br />og skabe en 20% tidsbesparelse i virksomheden.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img
              src="https://www.pngall.com/wp-content/uploads/11/iPhone-13-PNG-Cutout.png"
              alt="A beautiful two seater sofa"
              role="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Case;
