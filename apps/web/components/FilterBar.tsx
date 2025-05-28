export default function FilterBar() {
    return (
        <div className="w-full h-12 sm:h-14 md:h-16 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-between gap-4 px-4 sm:px-6 md:px-8">
            <div className="flex items-center gap-3">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800">Filter</h1>
            </div>
            <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                    Price
                </button>
                <button className="px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                    Size
                </button>
                <button className="px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 hidden sm:block">
                    Color
                </button>
            </div>
        </div>
    );
}