import React from "react";
import Avatar from "../../images/avatar.jpg";
import { BiFile } from "react-icons/bi";

function New() {
  return (
    <>
      <div className="container text-center">
        <div className="row">
          {/* Column 1 */}
          <div className="col-4">
            <div className="card" style={{ width: "13rem", height: "20rem" }}>
              <img src={Avatar} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Diane Cooper</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  diane.cooper@example.com
                </h6>
                <p className="card-text">
                  15 <span>Past </span> | 02 <span>Upcoming</span>
                </p>
                <a href="/btn" className="btn btn-light">
                  Send Message
                </a>
              </div>
            </div>
          </div>
{/* Column 2 */}
          <div className="col-8" style={{ width: "28rem" }}>
            <div className="card" style={{ width: "55rem", height: "10rem" }}>
              <div className="card-body">
                <div className="container">
                  <div className="row row-cols-4">
                    <div className="col text-left">
                      <label for="name">Gender</label>
                      <input id="name" type="text" />
                    </div>
                    <div className="col">
                      <label for="name">Birthday</label>
                      <input id="name" type="date" />
                    </div>
                    <div className="col">
                      <label for="name">Phone Number</label>
                      <input id="name" type="phone" />
                    </div>
                    <div className="col">
                      <label for="name">Registered Date</label>
                      <input id="name" type="date" />
                    </div>
                  </div>
                </div>
{/* 2nd Row */}
                <div className="container text-center">
                  <div className="row row-cols-4">
                    <div className="col">
                      <label for="name">Street Address</label>
                      <input id="name" type="text" />
                    </div>
                    <div className="col">
                      <label for="name">Your City</label>
                      <input id="name" type="text" />
                    </div>
                    <div className="col">
                      <label for="name">Zip Code</label>
                      <input id="name" type="number" />
                    </div>
                    <div className="col">
                      <label for="name">Member Status</label>
                      <input id="name" type="text" />
                    </div>
                    {/*  */}
                  </div>
                </div>
              </div>

{/*  */}
<br/>
<br/>
<br/>
<br/>
  <div class="card">
  <div class="card-body">
  
  <table className="table w-auto table-hover">
             <thead>
                <tr>
                    {/* <th scope="col">#</th> */}
                    <th scope="col"> <button type="button" className="btn btn-outline-light active">Upcoming Appointments</button></th>
                   <th scope="col"><button type="button" className="btn btn-outline-light active">Past Appointments</button></th>
                  <th scope="col"><button type="button" className="btn btn-outline-light active">Medical Records</button></th>
      
                </tr>
             </thead>
          <thead>
    <th scope="col"><button type="button" className="btn btn-outline-light active">Root Canal Treatment</button></th>
   &nbsp;&nbsp;<th scope="col"><button type="button" className="btn btn-outline-light active">Show Previous Treatment</button></th>
    </thead>
  
  <tbody>
    <tr>
      <th scope="row"> 26 Nov'2019<p>09:00-10:00</p></th>
      <td>Treatment <span><td>Open Access</td></span></td>
      <td> Dentist<br/><span>Dr.Adam .H</span></td>
      <td>Nurse Jesicamila</td>
      <td><BiFile/>Note</td>
    </tr>
    <tr>
      <th scope="row">12 Nov' 2019<p>09:00-10:00</p></th>
      <td>Treatment <p>Root Canal</p></td>
      <td>Dentist<br/><span>Dr.Adam .H</span></td>
      <td>Nurse Jesicamila</td>
      <td><BiFile/>Note</td>
    </tr>
 
  </tbody>
</table>
{/*  */}
  </div>
</div>

            </div>
{/*  */}
          </div>
        </div>
      </div>

      <br />

      <div className="container text-center">
        <div className="row">
          <div class="col-12" style={{ width: "15rem" }}>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item" aria-current="page">
                  File
                </li>
                <li className="breadcrumb-item" aria-current="page">
                  Documents
                </li>
              </ol>
            </nav>
            <ul className="list-group">
              <li className="list-group-item">
                <BiFile />
                Check Up Results.pdf
              </li>
              <li className="list-group-item">
                <BiFile />
                Check Up Results.pdf
              </li>
              <li className="list-group-item">
                <BiFile />
                Medical Prescription.pdf
              </li>
              <li className="list-group-item">
                <BiFile />
                Medical Prescription.pdf
              </li>
            </ul>
          </div>
        </div>
{/*  */}

</div>


    </>
  );
}

export default New;
