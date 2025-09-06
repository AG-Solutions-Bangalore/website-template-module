function LatestNews() {
  return (
    <div className="container px-4 lg:px-8 mx-auto max-w-screen-xl text-gray-700 ">
      <div data-aos="zoom-in" className="mt-16 text-center">
        <h1 className="text-darken text-2xl font-semibold">Latest News and Resources</h1>
        <p className="text-gray-500 my-5">See the developments that have occurred to Skillines in the world</p>
      </div>
      <div data-aos="zoom-in-up" className="my-14 flex flex-col lg:flex-row lg:space-x-20">
        <div className="lg:w-6/12">
          <img className="w-full mb-6" src="img/laptop-news.png" />
          <span className="bg-yellow-300 text-darken font-semibold px-4 py-px text-sm rounded-full">NEWS</span>
          <h1 className="text-gray-800 font-semibold my-3 text-xl">Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h1>
          <p className="text-gray-500 mb-3">Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
          <a href="" className="underline">Read more</a>
        </div>
        <div className="lg:w-7/12 flex flex-col justify-between mt-12 space-y-5 lg:space-y-0 lg:mt-0">
          <div className="flex space-x-5">
            <div className="w-4/12">
              <div className="relative">
                <img className="rounded-xl w-full" src="img/children-laptop.png" />
                <span className="absolute bottom-2 right-2 bg-yellow-300 text-darken font-semibold px-4 py-px text-sm rounded-full hidden sm:block">PRESS RELEASE</span>
              </div>
            </div>
            <div className="w-8/12">
              <h1 className="text-gray-800 text-sm sm:text-lg font-semibold">Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand</h1>
              <p className="text-gray-500 my-2 sm:my-4 text-xs sm:text-md">Class Technologies Inc., the company that created Class,...</p>
            </div>
          </div>
          <div className="flex space-x-5">
            <div className="w-4/12">
              <div className="relative">
                <img className="rounded-xl w-full" src="img/girl-laptop.png" />
                <span className="absolute bottom-2 right-2 bg-yellow-300 text-darken font-semibold px-4 py-px text-sm rounded-full hidden sm:block">NEWS</span>
              </div>
            </div>
            <div className="w-8/12">
              <h1 className="text-gray-800 text-sm sm:text-lg font-semibold">Zoom's earliest investors are betting millions on a better Zoom for schools</h1>
              <p className="text-gray-500 my-2 sm:my-4 text-xs sm:text-md">Zoom was never created to be a consumer product. Nonetheless, the...</p>
            </div>
          </div>
          <div className="flex space-x-5">
            <div className="w-4/12">
              <div className="relative">
                <img className="rounded-xl w-full" src="img/cat-laptop.png" />
                <span className="absolute bottom-2 right-2 bg-yellow-300 text-darken font-semibold px-4 py-px text-sm rounded-full hidden sm:block">NEWS</span>
              </div>
            </div>
            <div className="w-8/12">
              <h1 className="text-gray-800 text-sm sm:text-lg font-semibold">Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms</h1>
              <p className="text-gray-500 my-2 sm:my-4 text-xs sm:text-md">This year, investors have reaped big financial returns from betting on Zoom...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestNews