

const caseOne = [
  {
    id: 1,
    name: "Case Page",
    href: "case",
    imageSrc:
      "https://www.apple.com/v/home/aj/images/heroes/iphone-13-pro/hero_iphone_13pro__dhnsegysa42u_small_2x.jpg",
    imageAlt: "caseOne",
    price: "caseOne",
    color: "caseOne",
  },
];

function Case() {
  return (
    <div>
      {caseOne.map((product) => (
          <div key={product.id} className="group relative">
            <div className="w-full min-h-80 aspect-w-1 aspect-h-1 overflow-hidden group-hover:opacity-75 lg:h-full lg:aspect-none">
              <h3 className="text-5xl font-semibold p-5 absolute">
                <span aria-hidden="true" className="absolute inset-0" />
                {product.name}
              </h3>
            </div>
          </div>
      ))}
    </div>
  );
}

export default Case;
