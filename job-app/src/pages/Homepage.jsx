import React from 'react'
import Hero from '../components/Hero'
import HomeCard from '../components/HomeCard'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'

const Homepage = () => {
  return (
    <>
    <Hero title='Become a React Dev' subtitle = 'Find the React job that fits your skills and needs'/>
    <HomeCard />
    <JobListings isHome = {true} />
    <ViewAllJobs />
    </>
  )
}

export default Homepage

