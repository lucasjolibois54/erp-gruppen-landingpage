import { AnimateSharedLayout, motion } from "framer-motion";
import { useState } from "react";

function Case() {
  return (
    <div>
      <div className="2xl:container 2xl:mx-auto">
        <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">

          <div className="bg-card-bg-1 dark:bg-gray-800 p-8 mt-20">
            <div>
              <h2 className="text-4xl leading-tight font-medium text-green-hl dark:text-white">
                Metal fencing
              </h2>
              <p className="text-xl font-semibold text-green-hl dark:text-white mt-2">Hello</p>
            </div>
            <div className="flex justify-center items-center mt-28 md:mt-1">
              <img
                src="https://i.ibb.co/238nZzf/pexels-andrea-piacquadio-3757055-removebg-preview-1-1.png"
                alt="A beautiful two seater sofa"
                role="img"
              />
            </div>
          </div>

          <div className="grid mb-10 grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 lg:gap-8 mt-4 md:mt-6 lg:mt-8">
            <div className="bg-card-bg-2 dark:bg-gray-800 p-8">
              <div>
              <h2 className="text-4xl leading-tight font-medium text-green-hl dark:text-white">
                Gates and wickets
              </h2>
              <p className="text-xl font-semibold text-green-hl dark:text-white mt-2">Hello</p>
              </div>
              <div className="flex justify-center items-center mt-28 md:mt-1">
                <img
                  src="https://i.ibb.co/238nZzf/pexels-andrea-piacquadio-3757055-removebg-preview-1-1.png"
                  alt="A beautiful two seater sofa"
                  role="img"
                />
              </div>
            </div>
            <div className="bg-card-bg-3 dark:bg-gray-800 p-8">
              <div>
              <h2 className="text-4xl leading-tight font-medium text-green-hl dark:text-white">
                Fastenings and clamps.
              </h2>
              <p className="text-xl font-semibold text-green-hl dark:text-white mt-2">Hello</p>
              </div>
              <div className="flex justify-center items-center mt-28 md:mt-1">
                <img
                  src="https://i.ibb.co/238nZzf/pexels-andrea-piacquadio-3757055-removebg-preview-1-1.png"
                  alt="A beautiful two seater sofa"
                  role="img"
                />
              </div>
            </div>
          </div>
          <div className="bg-card-bg-4 dark:bg-gray-800 p-8">
            <div>
            <h2 className="text-4xl leading-tight font-medium text-green-hl dark:text-white">
                Additional security
              </h2>
              <p className="text-xl font-semibold text-green-hl dark:text-white mt-2">Hello</p>
            </div>
            <div className="flex justify-center items-center mt-28 md:mt-1">
              <img
                src="https://i.ibb.co/238nZzf/pexels-andrea-piacquadio-3757055-removebg-preview-1-1.png"
                alt="A beautiful two seater sofa"
                role="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Case;
