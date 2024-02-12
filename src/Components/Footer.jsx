import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div>
    <div style={{backgroundColor:'#90ee90'}} className='row mt-5 text-light'>
    <div className="col-lg-1"></div>

      <div className="col-lg-3  ">
        <h3 className='d-flex align-items-center' style={{height:'60px'}}> <i class="fa-brands fa-stack-overflow fa-bounce"></i>Project Fair</h3>
        <p style={{textAlign:'justify'}}>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
        <p>Code licenced MIT,docs CC BY 3.0.</p>
      
      </div>
      <div className="links col-lg-2 mb-2">
        <div className='d-flex flex-column '>
          <h3>Links</h3>
          <Link  style={{textDecoration:'none',color:'white'}} to={'/'}> Home</Link>
          <Link style={{textDecoration:'none',color:'white'}} to={'/login'}>Login</Link>
          <Link style={{textDecoration:'none',color:'white'}} to={'/register'}>Register</Link>
        </div>
      </div>
      <div className="guide col-lg-2 text-light mb-2">
        <div className='d-flex flex-column'>
          <h3>Guides</h3>
          <a style={{textDecoration:'none',color:'white'}} href="https://react.dev/" target='_blank'>React</a>
          <a style={{textDecoration:'none',color:'white'}} href="https://react-bootstrap.netlify.app/" target='_blank'>React Bootstrap</a>
          <a style={{textDecoration:'none',color:'white'}} href="https://www.npmjs.com/package/react-router-dom" target='_blank'>React routing</a>
        </div>
      </div>
      
      <div className="contact col-lg-3 ">
        <h3>Contact Us</h3>
        <div className="d-flex">
            <input placeholder='Enter Your Email' type="text" className='form-control'/>
            <button className='btn btn-info ms-2'><i class="fa-solid fa-arrow-right"></i></button>
        </div>
        <div className="icons d-flex justify-content-between mt-3">
            <i style={{height:'45px'}} class="fa-solid fa-envelope fa-2x"></i>
            <i style={{height:'45px'}} class="fa-brands fa-twitter fa-2x"></i>
            <i style={{height:'45px'}} class="fa-brands fa-github fa-2x"></i>
            <i style={{height:'45px'}} class="fa-brands fa-facebook fa-2x"></i>
            <i style={{height:'45px'}} class="fa-brands fa-instagram fa-2x"></i>
            <i style={{height:'45px'}} class="fa-brands fa-linkedin fa-2x"></i>
        </div>
      </div>
      <div className="col-lg-1"></div>
      <p className='text-center mt-4'>Copyright &copy; 2023 Project Fair.Built with React.</p>

    </div>

  </div>
  )
}

export default Footer