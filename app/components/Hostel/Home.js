import React, { useEffect, useState } from "react";
// import { Button, Row, Container, Col, Form } from "react-bootstrap";
import axios from "axios";
import HostelCards from "./HostelCards";

function Home() {
  const [school, setSchool] = useState("default");
  const [price, setPrice] = useState("default");
  const [HostelData, setHostelData] = useState();

  useEffect(() => {
    const FetchData = async () => {
      try {
        const hostelsData = await axios({
          method: "get",
          url: "http://localhost:4000/api/hostel",
        }).then(async (response) => {
          setHostelData(response.data.data);
        });
      } catch (error) {
        console.log(error);
      }
    };
    FetchData();
  }, []);

  console.log(HostelData);

  const search = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="container pb-5 mb-3">
        <div id="perfect">
          <h1 className="text-center  mb-5 place">
            Find Your <span className="place font-weight-bolder">Perfect Place.</span>
          </h1>
          <form id="search" onSubmit={search}>
            <div className="form-row align-items-center">
              <div className="col-12">
                <div className="input-group">
                  <div className="input-group-prepend ">
                    <span className="input-group-text bg-white">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </span>
                  </div>
                  <select onChange={(e) => setSchool(e.target.value)} value={school} className="custom-select school offset-12" id=" inlineFormCustomSelectPref" required>
                    <option value="default">Search for a university hostel....</option>
                    <option value="accrapolly">Accra Technical University </option>
                    <option value="upsa">University of Professional Studies, Accra (UPSA)</option>
                    <option value="legon">University of Ghana</option>
                    <option value="central">Central University </option>
                    <option value="gtuc">Ghana Technology University College</option>
                  </select>
                  {/* <!-- <input type="text" id="school" aria-label="search" placeholder="Search for a university hostel...." className="form-control text-center"> --> */}
                  <select onChange={(e) => setPrice(e.target.value)} value={price} className="custom-select budget offset-12" id="inlineFormCustomSelectPref" required>
                    <option value="default">Budget Range</option>
                    <option value="299">100 - 300</option>
                    <option value="300">300 - 600</option>
                    <option value="600">600 - </option>
                  </select>
                  <button type="submit" className="btn btn-primary pl-5 pr-5  ">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <HostelCards />
    </>
  );
}

export default Home;
