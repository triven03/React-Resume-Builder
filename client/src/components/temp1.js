import React from "react";
import shortid from "shortid";

const Temp1 = ({ data, color }) => {
  const check = (item) => {
    if (item && item.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  let skills = "";
  data.skills.map((s) => {
    skills += s + ", ";
  });

  return (
    <div
      className="mb-5 p-4 w-100 p-3"
      style={{ border: "5px solid #00adb5", backgroundColor: "biege" }}
    >
      <div>
        <div
          className="row m-0 d-flex align-items-center"
          style={{ height: "200px" }}
        >
          <div className="col-sm-2 text-center media">
            <img
              className="rounded align-self-center mx-auto "
              src={data.contact.photoUrl}
              alt="profile-pic"
              style={{
                maxHeight: "180px",
                minHeight: "160px",
                width: "140px",
                background: "grey",
                padding: 0,
              }}
            />
          </div>
          <div
            className="col-sm-6    text-left font-weight-bold "
            style={{ fontFamily: "Serif" }}
          >
            <div
              className=" d-flex justify-content-center"
              style={{ color: `${color.primary}`, fontSize: "40px" }}
            >
              {data.contact.name}
            </div>
            <h5 className=" d-flex justify-content-center">
              {data.experience[data.experience.length - 1].position}
            </h5>
            <div className="row m-0 d-flex align-items-center">
              <div className="col-6">
                <div className="item d-flex justify-content-center pt-2">
                  <p
                    className="material-icons icon"
                    style={{ color: `${color.primary}` }}
                  >
                    phone
                  </p>
                  <p className="text">{data.contact.phone}</p>
                </div>
              </div>
              <div className="col-6">
                <div className="item d-flex justify-content-center pt-2">
                  <p
                    className="material-icons icon"
                    style={{ color: `${color.primary}`, margin: "2px 3px" }}
                  >
                    email
                  </p>
                  <p className="text">{data.contact.email}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4  contact">
            <div
              className=" p-3"
              style={{
                fontSize: "18px",
                float: "left",
                display: "inline-block",
              }}
            >
              <div className="item d-flex">
                <p
                  className="material-icons icon"
                  style={{ color: `${color.primary}` }}
                >
                  location_on
                </p>
                <p className="text">{data.contact.location}</p>
              </div>

              <div className="item d-flex">
                <i
                  className="fab fa-linkedin icon"
                  style={{
                    color: `${color.primary}`,
                    width: "25px",
                    margin: "4px 0",
                  }}
                ></i>
                <p className="text">{data.contact.linkedin}</p>
              </div>
              <div className="item d-flex">
                <i
                  className="fab fa-github icon"
                  style={{
                    color: `${color.primary}`,
                    width: "25px",
                    margin: "4px 0",
                  }}
                ></i>
                <p className="text">{data.contact.github}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr
        style={{
          height: "5px",
          backgroundColor: "#00adb5",
          color: `${color.primary}`,
        }}
      />
      <div
        className="col-sm-3 text-left  "
        style={{ color: `${color.primary}`, fontFamily: "Serif" }}
      >
        {" "}
        <h4>Objective</h4>
      </div>
      <div className="text-justify mx-4">{data.objective}</div>
      <hr style={{ height: "5px", backgroundColor: "#00adb5" }} />

      <div className="container" style={{ fontFamily: "Serif" }}>
        <div className="row">
            <div
              className="col-sm-3 text-left  "
              style={{ color: `${color.primary}` }}
            >
              {" "}
              <h4> Professional Experience</h4>
            </div>
            <div className="col-sm-9  text-left " style={{ fontSize: "18px" }}>
              {data.experience.map((item) => {
                return (
                  <div key={shortid.generate()}>
                    <div className="mt-2" style={{ color: `${color.primary}` }}>
                      <b>{item.position}</b>
                    </div>
                    <div className="mt-2">
                      Worked in {item.company} From {item.year} .
                    </div>
                    <div>{item.description}</div>
                  </div>
                );
              })}
            </div>
        </div>
          <hr style={{ height: "5px", backgroundColor: "#00adb5" }} />
          <div className="row">
          
          <div
            className="col-sm-3 text-left"
            style={{ color: `${color.primary}` }}
          >
       
            <h4>Education</h4>
          </div>
          <div className="col-sm-9 text-left">
            <div style={{ fontSize: "18px" }}>
              {data.education.map((item) => {
                return (
                  <div key={shortid.generate()}>
                    <b style={{ color: `${color.primary}` }}> {item.course}</b>
                    <div> from {item.institution}</div>
                    <div> University: {item.university}</div>
                    <div>Percentage: {" " + item.percentage}</div>
                    <p>Duration: {" " + item.year}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-100 mt-4"> </div>
          </div>
          <hr style={{ height: "5px", backgroundColor: "#00adb5" }} />
          
          <div className="row">
          <div className="col-sm-3 text-left ">
            <h4 style={{ color: `${color.primary}` }}>Key Skills</h4>
          </div>
          <div className="col-sm-9 text-left" style={{ fontSize: "18px" }}>
            <div key={shortid.generate()}>
              <span>{skills}</span>
            </div>
          </div>
        </div>
        <hr style={{ height: "5px", backgroundColor: "#00adb5" }} />
        <div className="row">
            <div
              className="col-sm-3 text-left  "
              style={{ color: `${color.primary}` }}
            >
              {" "}
              <h4> Projects</h4>
            </div>
            <div className="col-sm-9  text-left " style={{ fontSize: "18px" }}>
              {data.projects.map((item) => {
                return (
                  <div key={shortid.generate()}>
                    <div className="mt-2" style={{ color: `${color.primary}` }}>
                      <b>{item.title}</b>
                    </div>
                    <div>{item.description}</div>
                  </div>
                );
              })}
            </div>
        </div>
          <hr style={{ height: "5px", backgroundColor: "#00adb5" }} />

         
      </div>
    </div>
  );
};

export default Temp1;
