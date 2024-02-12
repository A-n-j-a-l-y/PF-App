import React, { useState , useEffect} from 'react'
import landingImg from '../assets/Images/Landing Image.png'
import { Link, useNavigate } from 'react-router-dom'
import ProjectCard from '../Components/ProjectCard'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getHomeProjectAPI } from '../Services/allAPIs';


function Home() {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [allProjects,setAllprojects] = useState([])
  console.log(allProjects);

  const getHomeProject = async ()=>{
    const result = await getHomeProjectAPI()
    if(result.status===200){
      setAllprojects(result.data)
    }else{
      console.log(result);
    }
  }
  useEffect(()=>{
    getHomeProject()
    if(sessionStorage.getItem("token")){
      setIsLoggedIn(true)
    }else{
      setIsLoggedIn(false)
    }
  },[])

  const handleProjectPage =()=>{
    if(sessionStorage.getItem("token")){
      navigate('/projects')
    }else{
      toast.warning("please login to explore our projects!!!!!!!!")
    }
  }
  return (
    <>
      {/* Landing Part */}
      <div style={{ width: '100%', height: '100vh', backgroundColor: '#90ee90' }} className='rounded'>

        <div style={{ height: '100%' }} className='container'>
          <div style={{ height: '100%' }} className="row align-items-center">
            <div className='col-lg-5'>
              <h1 style={{ fontSize: '80px' }} className='fw-bolder text-light'><i style={{ height: '82px' }} className="fa-solid fa-paperclip"></i>Project Fair</h1>
              <p className='text-dark'> One stop Destination for all Software Development Projects. Where user can add and manage. quos, cum laboriosam voluptates expedita assumenda consequuntur nihil!</p>
              { isLoggedIn?<Link className="btn btn-warning mt-3" to={'/dashboard'}>Manage your Projects <i className="fa-solid fa-arrow-right ms-2"></i></Link>:<Link className="btn btn-warning mt-3" to={'/login'}>Starts to Explore <i className="fa-solid fa-arrow-right ms-2"></i></Link> }
            </div>
            <div className='col-lg-2'></div>
            <div className='col-lg-4'>
              <img style={{height:'350px',width:'350px'}} className='image-fluid rounded-circle' src={landingImg} alt="No Image" />
            </div>
          </div>

        </div>

      </div>
      {/* all projects */}
      <div className="projects mt-5">
      <h1 className="text-center mb-5">Explore Our Projects</h1>
      <marquee>
        <div className="d-flex justify-content-between">
          {allProjects.length>0? allProjects.map((project,index)=>(<div key={index} className="me-5">
           <ProjectCard project={project}/>
          </div>)):null}

        </div>
      </marquee>
      <div className="text-center">
        <button onClick={handleProjectPage} className='btn btn-link'>View More Projects</button>
      </div>
      </div>
      <ToastContainer autoClose={3000} theme='colored'/>
    </>
  )
}

export default Home