function OneOnOneDiscussions() {
  return (
    <div className="container px-4 lg:px-8 mx-auto max-w-screen-xl text-gray-700 ">
      <div className="mt-24 flex flex-col-reverse md:flex-row items-center md:space-x-10">
        <div data-aos="fade-right" className="md:w-7/12">
          <img className="md:w-11/12" src="img/discussion.png" />
        </div>
        <div data-aos="fade-left" className="md:w-5/12 md:transform md:-translate-y-6">
          <h1 className="font-semibold text-darken text-3xl lg:pr-64">One-on-One <span className="text-yellow-500">Discussions</span></h1>
          <p className="text-gray-500 my-5 lg:pr-24">Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.</p>
        </div>
      </div>
    </div>
  )
}

export default OneOnOneDiscussions