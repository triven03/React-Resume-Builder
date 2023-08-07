import React from "react";
import shortid from "shortid";

const Temp3 = ({ data, color }) => {
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
  let toolss = "";
  data.tools.map((s) => {
    toolss += s + ", ";
  });
  

  return (
   
<div style={{border:"1px solid #4b6982",backgroundColor:"#f7eebb"}}>
<div className='row m-0'>
    <div className='col col-sm-3 d-flex align-items-center pt-5' style={{backgroundColor:"#583131", flexDirection:"column", minHeight:"150vh"}}>
        <div className=" media me-5" >
            <img className="rounded align-self-center  " src={ data.contact.photoUrl} alt='profile-pic'
                style={{maxHeight:'180px',minHeight:"160px", width:'140px', background:'grey',padding:0}}/>
        </div>
        <div className=" mt-3 font-weight-bold " style={{fontFamily:"Serif",}}>
            <div className='' style={{color:"white",fontSize:"30px"}}>{ data.contact.name }</div>
            <h5 className='pt-2 'style={{color:"#adccc7", fontSize:"20px"}}>{data.experience[data.experience.length - 1].position}</h5>
        </div>
        <div className=" ">
            <div className='p-5 ms-4' style={{fontSize:"18px",display:"inline-block"}}>
                <div className="col-sm-5 px-2 mb-2 " style={{backgroundColor:'white', color:"black"}}>Email:</div>
                <div style={{color:'#f7f7f7'}}>{data.contact.email}</div>
                <div className="col-sm-5 px-2 mb-2 mt-2" style={{backgroundColor:'white', color:"black"}}>Contact:</div>
                <div style={{color:'#f7f7f7'}}>{data.contact.phone}</div>
                <div className="col-sm-5 px-2 mb-2 mt-2 " style={{backgroundColor:'white', color:"black"}}>Address:</div>
                <div style={{color:'#f7f7f7'}}>{data.contact.location}
                </div>

                <div className="item d-flex">
                <i
                  className="fab fa-linkedin icon"
                  style={{
                    color: "rgb(33, 150, 243)",
                    width: "25px",
                    margin: "4px 0",
                  }}
                ></i>
                <p className="text" style={{color:'#f7f7f7'}}>{data.contact.linkedin}</p>
              </div>
              <div className="item d-flex">
                <i
                  className="fab fa-github icon"
                  style={{
                    color: "rgb(33, 150, 243)",
                    width: "25px",
                    margin: "4px 0",
                  }}
                ></i>
                <p className="text" style={{color:'#f7f7f7'}}>{data.contact.github}</p>
              </div>
              <div className="col-sm-5 px-2 mb-2 mt-2" style={{backgroundColor:'white', color:"black"}}>Tools:</div>
                <div style={{color:'#f7f7f7'}}>{toolss}</div>
              <div className="col-sm-5 px-2 mb-2 mt-2" style={{backgroundColor:'white', color:"black"}}>Interests:</div>
                    <div style={{color:'#f7f7f7'}}>
                       {data.interests.map((skill)=>{
                                return(
                                        <div key={shortid.generate()}><li>{skill}</li></div>
                                    )
                                })
                            }
                    </div>
              <div className="col-sm-5 px-2 mb-2 mt-2" style={{backgroundColor:'white', color:"black"}}>Languages:</div>
                    <div style={{color:'#f7f7f7'}}>
                       {data.languages.map((l)=>{

                                return(
                                        <div key={shortid.generate()}><li>{l.language} {l.level} <i
                                        className="far fa-star icon"
                                        style={{
                                          color: "rgb(33, 150, 243)",
                                          width: "25px",
                                          margin: "4px 0",
                                        }}
                                      ></i></li></div>
                                    )
                                })
                            }
                    </div>
              <div className="col-sm-5 px-2 mb-2 mt-2" style={{backgroundColor:'white', color:"black"}}>Activities:</div>
                    <div style={{color:'#f7f7f7'}}>
                       {data.activities.map((a)=>{

                                return(
                                        <div key={shortid.generate()}><li>{a.title}</li></div>
                                    )
                                })
                            }
                    </div>
                    

            </div>
            
        </div>
                  
     </div>
    <div className='col col-sm-9'>
        <div>
            <div className="text-justify mt-4">{data.objective}</div>
            <hr style={{height:"5px",backgroundColor:"#4b6982"}}/> 
        </div>
        <div className="" style={{fontFamily:"Serif",}}>
            <div className="">
            <div className=" text-left bg-light mb-4 " style={{ color: `${color.primary}` }}> <h3><b>Professional Experience</b> </h3></div>
            <div className=" text-left " style={{fontSize:"18px"}}>
                {data.experience.map((item)=>{
                    return(
                            <div key={shortid.generate()}>
                                
                                <div className='mt-2'><b style={{ color: `${color.primary}` }}>{item.position}</b></div>
                                
                                <div className='mt-2 mb-3'>
                                    <div>Worked in {item.company} From {item.year} .</div>
                                    <div>{item.description}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="w-100 mt-4"> </div>
            <hr style={{height:"5px",backgroundColor:"#4b6982"}}/>
            <div className="bg-light text-left" style={{ color: `${color.primary}` }}><h3><b>Education</b></h3></div>
            <div className=" text-left" >
                <div style={{fontSize:"18px"}}>
                    {data.education.map((item)=>{
                        return(
                          <div key={shortid.generate()}>
                              <b style={{ color: `${color.primary}` }}> {item.course}</b>
                              <div> from {item.institution}</div>
                              <div> University: {item.university}</div>
                              <div>Percentage: {" " + item.percentage}</div>
                              <p>Duration: {" " + item.year}</p>
                         </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="w-100 mt-4"> </div>
            <hr style={{height:"5px",backgroundColor:"#4b6982"}}/>
            <div className="bg-light text-left " >
                <h3 style={{ color: `${color.primary}` }}><b>Key Skills</b></h3>
            </div>
            <div className=" text-left mb-4" style={{fontSize:"18px"}}>
                                <div key={shortid.generate()}>{skills}</div>
                    
            </div>
            <div className="w-100 mt-4"> </div>
            <hr style={{height:"5px",backgroundColor:"#4b6982"}}/>
            <div className="bg-light text-left" style={{ color: `${color.primary}` }}><h3><b>Projects</b></h3></div>
            <div className=" text-left" >
                <div style={{fontSize:"18px"}}>
                    {data.projects.map((item)=>{
                        return(
                          <div key={shortid.generate()}>
                              <b style={{ color: `${color.primary}` }}> {item.title}</b>
                              <div> from {item.description}</div>
                              
                         </div>
                            )
                        })
                    }
                </div>
            </div>
            </div>
        </div>
    </div>
   
</div>

</div>
  );
};

export default Temp3;
