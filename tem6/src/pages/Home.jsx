import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import TrustedBy from '../components/TrustedBy'
import AllInOne from '../components/AllInOne'
import WhatIsSkilline from '../components/WhatIsSkilline'
import EverythingYouCanDo from '../components/EverythingYouCanDo'
import UserInterface from '../components/UserInterface'
import ToolsForTeachers from '../components/ToolsForTeachers'
import Assessments from '../components/Assessments'
import ClassManagement from '../components/ClassManagement'
import OneOnOneDiscussions from '../components/OneOnOneDiscussions'
import SeeMoreFeatures from '../components/SeeMoreFeatures'
import Integrations from '../components/Integrations'
import Testimonial from '../components/Testimonial'
import LatestNews from '../components/LatestNews'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TrustedBy />
      <AllInOne />
      <WhatIsSkilline />
      <EverythingYouCanDo />
      <UserInterface />
      <ToolsForTeachers />
      <Assessments />
      <ClassManagement />
      <OneOnOneDiscussions />
      <SeeMoreFeatures />
      <Integrations />
      <Testimonial />
      <LatestNews />
      <Footer />
    </div>
  )
}

export default Home