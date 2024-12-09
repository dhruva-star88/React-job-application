import {Route, 
    createBrowserRouter, 
    createRoutesFromElements, 
    RouterProvider} from 'react-router-dom'
import React from 'react'
import Homepage from './pages/Homepage'
import MainLayout from './Layouts/MainLayout'
import Jobspage from './pages/Jobspage'
import NotFoundPage from './pages/NotFoundPage'
import Jobpage,{jobLoader} from './pages/Jobpage'
import AddJobPage from './pages/AddJobPage'
import EditJobPage from './pages/EditJobPage'



const App = () => {
  // Add Job
  const addJob = async(newJob) => {
    const res = await fetch ('/api/jobs', {
      method:"POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    });
    return
  }
// Delete job
const deleteJob = async (id) => {
  const res = await fetch (`/api/jobs/${id}`, {
    method:"DELETE",
  });
  return;
}

// update job
const updatedJob = async (job) => {
  const res = await fetch (`/api/jobs/${job.id}`, {
    method:"PUT",
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(job)
  });
  return
}
  
  const router = createBrowserRouter(
      createRoutesFromElements(
      <Route path = '/' element = {<MainLayout />}> 
      <Route index element = {<Homepage />} />
      <Route path = '/jobs' element = {<Jobspage />} />
      <Route path = '/add-job' element = {<AddJobPage addJobSubmit = {addJob}/>} />
      <Route path = '/edit-job/:id' element = {<EditJobPage updateJobSubmit={updatedJob}/>} loader = {jobLoader} />
      <Route path = '/jobs/:id' element = {<Jobpage deleteJob={deleteJob} />} loader = {jobLoader} />
      <Route path = '*' element = {<NotFoundPage/>} />
      </Route>
      )
  
    ) 
  return <RouterProvider router = {router} />
}

export default App