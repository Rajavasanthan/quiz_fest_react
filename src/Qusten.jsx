
import React from 'react'
import { Link } from 'react-router-dom'

export default function Qusten() {
  return (
 <>
 <div className='d-flex'> <img src="src/assets/Q.png" alt="" style={{ height: "100px", width: "100px" }} />
 <p className='fw-bold fs-1 p-2'>Quiz Fest</p></div> 
 <div>
    <div class="  d-flex justify-content-center align-items-center  ">
 <p className='fs-3'>3/10</p></div>
 <div class="fs-1 d-flex justify-content-center align-items-center p-5"> 
 <h1>
 Who invented pythagoras theorem
 </h1></div>
 <div className='d-flex justify-content-center align-items-center '>
 <div>
 <div class="form-check">
  <input class="form-check-input fs-3" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
  <label class="form-check-label fs-3" for="flexRadioDefault1">
  Newton 
  </label>
</div>
<div class="form-check">
  <input class="form-check-input fs-3" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
  <label class="form-check-label fs-3" for="flexRadioDefault1">
  Pythagoras
  </label>
</div>
<div class="form-check">
  <input class="form-check-input fs-3" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
  <label class="form-check-label fs-3" for="flexRadioDefault1">
  Einsten 
  </label>
</div>
<div class="form-check">
  <input class="form-check-input fs-3" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
  <label class="form-check-label fs-3" for="flexRadioDefault1">
  Modi 
  </label>
  </div>
  <div class="  d-flex justify-content-center align-items-center p-5  ">
<p className='fs-3'><button type="button" class="btn btn-primary fs-3">
<Link className="nav-link" to={"/final"}>
    Finish
    </Link>
    </button>
    <div class="d-flex justify-content-end p-5">
        <div className='p-4'>
    <button type="button" class="btn btn-primary fs-4">Next</button></div>
    <div className='p-4'>
    <button type="button" class="btn btn-primary fs-4 ">Previous </button></div>
    </div>
</p></div>
</div>
</div>
 </div>
 </>
  )
}
