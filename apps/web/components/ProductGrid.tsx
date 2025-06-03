import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  colors: string[];
}

export default async function ProductGrid() {
  // Create 9 products for the 3x3 grid
  const products: Product[] = Array.from({ length: 9 }, (_, index) => ({
    id: index + 1,
    name: `Black T-Shirt ${index + 1}`,
    price: `$${(19.99 + index * 2).toFixed(2)}`,
    image: "/black-tshirt.png",
    colors: ["#000000", "#FF0000", "#0000FF", "#FFFFFF"],
  }));

  return (
    <div className="w-full mt-4 md:mt-6 mb-4 md:mb-8 flex justify-center">
      <div className="w-full max-w-2xl lg:max-w-4xl px-2 sm:px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-1 h-[280px] md:h-[320px] lg:h-[360px]"
            >
              <div className="relative w-full h-[65%] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-1.5 md:p-2 bg-white rounded-full shadow-lg hover:scale-110 transition-transform duration-200 cursor-pointer">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-2.5 md:p-3 lg:p-4">
                <div className="flex gap-2 mb-3">
                  {product.colors.map((color, idx) => (
                    <button
                      key={idx}
                      className="w-5 h-5 rounded-full border-2 border-gray-200 hover:border-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 cursor-pointer"
                      style={{ backgroundColor: color }}
                      aria-label={`Select ${color} color variant`}
                    />
                  ))}
                </div>
                <h3 className="text-xs md:text-sm font-semibold text-gray-800 mb-1 truncate group-hover:text-purple-600 transition-colors duration-200">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <p className="text-sm md:text-base font-bold text-gray-900">{product.price}</p>
                  <button 
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 hover:border-gray-300 cursor-pointer"
                    aria-label="Save product"
                  >
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                    <span className="text-xs font-medium text-gray-600">Save</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
