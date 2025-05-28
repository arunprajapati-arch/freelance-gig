import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

export default function ProductGrid() {
  // Create 9 products for the 3x3 grid
  const products: Product[] = Array.from({ length: 9 }, (_, index) => ({
    id: index + 1,
    name: `Black T-Shirt ${index + 1}`,
    price: `$${(19.99 + index * 2).toFixed(2)}`,
    image: "/black-tshirt.png",
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
                  <button className="p-1.5 md:p-2 bg-white rounded-full shadow-lg hover:scale-110 transition-transform duration-200">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-2.5 md:p-3 lg:p-4">
                <h3 className="text-xs md:text-sm font-semibold text-gray-800 mb-1 truncate group-hover:text-purple-600 transition-colors duration-200">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <p className="text-sm md:text-base font-bold text-gray-900">{product.price}</p>
                  <div className="flex items-center gap-0.5">
                    <svg className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <span className="text-[10px] md:text-xs text-gray-600">4.5</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
