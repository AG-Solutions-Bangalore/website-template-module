function Assessments() {
  return (
    <div className="container px-4 lg:px-8 mx-auto max-w-screen-xl text-gray-700 ">
      <div className="mt-20 flex flex-col-reverse md:flex-row items-center md:space-x-10">
        <div data-aos="fade-right" className="md:w-6/12">
          <img className="md:w-11/12" src="img/true-false.png" />
        </div>
        <div data-aos="fade-left" className="md:w-6/12 md:transform md:-translate-y-20">
          <h1 className="font-semibold text-darken text-3xl lg:pr-64">Assessments, <span className="text-yellow-500">Quizzes</span>, Tests</h1>
          <p className="text-gray-500 my-5 lg:pr-52">Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the online gradebook.</p>
        </div>
      </div>
    </div>
  )
}

export default Assessments