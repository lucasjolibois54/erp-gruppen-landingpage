function AboutHero() {
    return (
        <div>
            {/* <div>
                <h1 className="text-center max-w-7xl font-semibold mx-auto pt-40 xxsm:text-3xl ssm:text-4xl mt-56">We’re built for software teams</h1>
                <p className="text-center max-w-5xl mx-auto max-w-3xl pt-10 xxsm:text-md ssm:text-xl p-10 mb-56">Our mission is to ensure teams can do their best work, no matter their size or budget. We focus on the details of everything we do.</p>
            </div> */}

            <div>
                <div className="max-w-7xl mx-auto">
                    <h2 className="font-semibold text-7xl pt-28 leading-regular">
                        Lær mere at kende <br/>om os og hvem vi er <br/> som virksomhed
                    </h2>
                    <p className="w-96 mt-5 text-text-gray">
                    Our mission is to ensure teams can do their best work, no matter their size or budget. We focus on the details of everything we do. 
                    </p>

                    <img
                        className="xxsm:h-auto xsm:h-auto mdsm:h-auto mdsm:h-auto basemd:h-auto baselg:h-auto w-auto my-auto mt-20"
                        src={
                            "https://res.cloudinary.com/ds8p0huok/image/upload/v1644396526/samples/image_43_1_szyzxv.png"
                        }
                        alt="mockup"
                    /></div><div>
                </div>
            </div>
        </div>
    )

}

export default AboutHero