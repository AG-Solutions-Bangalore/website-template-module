function Integrations() {
  return (
    <div className="container px-4 lg:px-8 mx-auto max-w-screen-xl text-gray-700 ">
      <div className="mt-24 flex flex-col md:flex-row items-start md:space-x-10">
        <div data-aos="zoom-in-right" className="md:w-6/12">
          <img className="md:w-8/12 mx-auto" src="img/integrations.png" />
        </div>
        <div data-aos="zoom-in-left" className="md:w-6/12">
          <div className="flex items-center space-x-20 mb-5">
            <span className="border border-gray-300 w-14 absolute"></span>
            <h1 className="text-gray-400 tracking-widest text-sm">INTEGRATIONS</h1>
          </div>
          <h1 className="font-semibold text-darken text-2xl lg:pr-40">200+ educational tools and platform <span className="text-yellow-500">integrations</span></h1>
          <p className="text-gray-500 my-5 lg:pr-20">Schoology has every tool your classroom needs and comes pre-integrated with more than 200+ tools, student information systems (SIS), and education platforms.</p>
          <button className="px-5 py-3 border border-yellow-500 text-yellow-500 font-medium my-4 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out rounded-full">See All Integrations</button>
        </div>
      </div>
    </div>
  )
}

export default Integrations