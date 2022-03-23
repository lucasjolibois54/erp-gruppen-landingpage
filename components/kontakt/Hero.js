import { motion } from 'framer-motion'

function Hero() {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center -mt-20">
                <div className='h-full w-full'>
                    <div className=" baselg:block xxsm:hidden">
                        <img className="-z-40 relative object-none object-fit w-11/12 h-screen overflow-y-hidden"
                            src="https://res.cloudinary.com/dckwf6med/image/upload/v1647868568/erp/Group_134_jsbupk.webp" />
                    </div>
                </div>
                <div className="w-full p-12 mt-24">
                    <motion.div
                        initial={{ x: 0 }}
                        whileHover={{
                            x: 10,
                            transition: {
                                duration: 0.4,
                                ease: [0.6, 0.05, -0.01, 0.9],
                            },
                        }}
                        className=" flex relative flex align-center items-center"
                    >
                        <h1 className="text-lg md:text-4xl lg:text-3xl xl:text-5xl 2xl:text-6xl font-normal">
                        → Lad os opgradere din virksomhed 
                            <span className="text-blue-500"> sammen!</span>
                        </h1>
                    </motion.div>
                    <form className="mt-12 2xl:mr-20">
                        <div className=" md:flex justify-between gap-3">
                            <span className="w-1/2">
                                <label htmlFor="firstname" className="block text-xs font-medium text-gray-600 uppercase">Fornavn</label>
                                <input id="firstname" type="text" name="firstname" placeholder="Dit Navn" autoComplete="given-name" className="block w-full p-3 mt-2 text-gray-700 border-2 border-gray-200 rounded-lg appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                            </span>
                            <span className="w-1/2">
                                <label htmlFor="lastname" className="block text-xs font-medium text-gray-600 uppercase">Efternavn</label>
                                <input id="lastname" type="text" name="lastname" placeholder="Dit Efternavn" autoComplete="family-name" className="block w-full p-3 mt-2 text-gray-700 border-2 border-gray-200 rounded-lg appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                            </span>
                        </div>
                        <label htmlFor="email" className="block mt-8 text-xs font-medium text-gray-600 uppercase">E-mail</label>
                        <input id="email" type="email" name="email" placeholder="eksempel@virksomhed.dk" autoComplete="email" className="block w-full p-3 mt-2 text-gray-700 border-2 border-gray-200 rounded-lg appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                        <label htmlFor="textarea" className="block mt-8 text-xs font-medium text-gray-600 uppercase">Hvordan kan vi hjælpe dig?</label>
                        <textarea id="textarea" type="text" name="textarea" placeholder="Fortæl os en smule om dit projekt..." autoComplete="comment" className="block w-full p-5 mt-2 text-gray-700 border-2 border-gray-200 rounded-lg appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                        <button type="submit" className="rounded-md w-full py-3 mt-8 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
                            Send Besked
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default Hero