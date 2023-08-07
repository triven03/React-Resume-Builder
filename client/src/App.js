import React, { useState, useEffect, useRef, Fragment } from 'react';
import './styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { AuthProvider,Auth } from './components/Authentication/useAuth';
import Header from './components/Landing-page/Header/Header';
import Hero from './components/Landing-page/Hero/Hero';
import About from './components/Landing-page/About/About';
import Features from '././components/Landing-page/Features/Features';
import Templates from './components/Landing-page/Templates/Templates';
import Review from './components/Landing-page/Review/Review';
import Contact from './components/Landing-page/Contact/Contact';
import Footer from './components/Landing-page/Footer/Footer';
import Login from './components/Authentication/Login';
import jsonData from './data.json';
import { useReactToPrint } from 'react-to-print';
import Form from './components/Form';
import Resume1 from './components/Resume1';
import Resume2 from './components/Resume2';
import Resume3 from './components/Resume3';
import Resume4 from './components/Resume4';
import { Link } from 'react-router-dom';

// import { useAuth} from "./components/Authentication/useAuth"

const App = () => {

  let auth = Auth();


  //  console.log(auth.user);
   

  const [data, setData] = useState();
  const [preset, setPreset] = useState([
    { primary: '#009688', background: '#ebf5f4', skills: '#e5f4f3' },
    { primary: '#2196f3', background: '#e8f4fe', skills: '#e2f2ff' },
    { primary: '#263238', background: '#f0f0f0', skills: '#e0e0e0' },
    { primary: '#3f51b5', background: '#ebedf7', skills: '#e1e3f8' },
  ]);

  const [color, setColor] = useState({
    primary: '#009688',
    background: '#e5f4f3',
    skills: '#e5f4f3',
  });

  useEffect(() => {
    const rd = JSON.parse(localStorage.getItem('rdata'));
    if (rd) {
       setData(rd);
    }
    else{
      setData(jsonData)
    }
  }, []);

  const componentRef = useRef();

  // console.log(componentRef.current.props.data);

  const Print = useReactToPrint({
    content: () => componentRef.current,

  });


  async function handlePrint() {
    await auth.saveUdata(data);
  
    Print();
  }

   function handleLogin(e) {

    setData(data);
    localStorage.setItem('rdata', JSON.stringify(data));
    // auth = Auth();
    let alink= document.createElement("a");
    alink.href="/login";
    alink.click();

    // console.log(data);
  }


  
  


  return (
    <div className='mainContent'>
      <AuthProvider>
        <Router>
          <Switch>

            <Route exact path="/">
              <Header />
              <Hero />
              <About />


              {/* <Features />
              <Templates />
              <Contact /> */}
              <Footer />
            </Route>

            <Route path='/login'>
              <Login />
              <Footer />
            </Route>

            <Route path='/Templates'>
            <Header />              
              <Templates />
              <Footer />
            </Route>

            <Route path='/Features'>
            <Header />              
            <Features />
              
              <Footer />
            </Route>

            {/* <Route path='/Blog'>
            <Header />              
            <Review />  
              <Footer />
            </Route> */}

            <Route path='/ContactUs'>
            <Header />              
            <Contact />
              <Footer />
            </Route>


            <Route path='/resume-builder1'>
              {data !== undefined && (
                <Fragment>
                  <div className='left'>
                    <Form data={data} setData={setData} user={auth.user} preset={preset} setColor={setColor} />
                  </div>

                  <div className='right'>
                    <Resume1 ref={componentRef} data={data} color={color} />
                  </div>
                  
                {auth.user ?
                   <button className='printBtn' onClick={handlePrint}>
                   Download / Print
                 </button>
                 :

                <button type="button" className="printBtn" onClick={handleLogin} >Login</button>
                 
                }

                </Fragment>
              )}
            </Route>
            <Route path='/resume-builder2'>
              {data !== undefined && (
                <Fragment>
                  <div className='left'>
                    <Form data={data} setData={setData} user={auth.user} preset={preset} setColor={setColor} />
                  </div>

                  <div className='right'>
                    <Resume3 ref={componentRef} data={data} color={color} />
                  </div>
                  
                {auth.user ?
                   <button className='printBtn' onClick={handlePrint}>
                   Download / Print
                 </button>
                 :

                <button type="button" className="printBtn" onClick={handleLogin} >Login</button>
                 
                }

                </Fragment>
              )}
            </Route>
            <Route path='/resume-builder3'>
              {data !== undefined && (
                <Fragment>
                  <div className='left'>
                    <Form data={data} setData={setData} user={auth.user} preset={preset} setColor={setColor} />
                  </div>

                  <div className='right'>
                    <Resume2 ref={componentRef} data={data} color={color} />
                  </div>
                  
                {auth.user ?
                   <button className='printBtn' onClick={handlePrint}>
                   Download / Print
                 </button>
                 :

                <button type="button" className="printBtn" onClick={handleLogin} >Login</button>
                 
                }

                </Fragment>
              )}
            </Route>
            <Route path='/resume-builder4'>
              {data !== undefined && (
                <Fragment>
                  <div className='left'>
                    <Form data={data} setData={setData} user={auth.user} preset={preset} setColor={setColor} />
                  </div>

                  <div className='right'>
                    <Resume4 ref={componentRef} data={data} color={color} />
                  </div>
                  
                {auth.user ?
                   <button className='printBtn' onClick={handlePrint}>
                   Download / Print
                 </button>
                 :

                <button type="button" className="printBtn" onClick={handleLogin} >Login</button>
                 
                }

                </Fragment>
              )}
            </Route>

            {/* <Route path='/resume-builderU'>
              {data !== undefined && (
                <Fragment>
                  <div className='left'>
                    <Form data={data} setData={setData} preset={preset} setColor={setColor} />
                  </div>

                  <div className='right'>
                    <Resume ref={componentRef} data={data} color={color} />
                  </div>

                  <button className='printBtn' onClick={handlePrint}>
                    Download / Print
                  </button>
                </Fragment>
              )}
            </Route> */}

          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
};

export default App;

