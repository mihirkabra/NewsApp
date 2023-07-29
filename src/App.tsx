import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const apiKey = process.env.REACT_APP_NOT_SECRET_CODE;

  const [progress, setProgress] = useState(0);

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Routes>
          <Route
            
            path="/"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                pageSize={9}
                country="in"
                category="general"
              />
            }
          />
          <Route  path="/about" element={<About />} />
          {/* <Route  path="/:country/:category" element={<News apiKey={apiKey} setProgress={setProgress}  />}/> */}
          {/* <Route  path={`${country}/${category}`} element={<News apiKey={apiKey} setProgress={setProgress}  key={key++} pageSize={9} country="in"/>} /> */}
          <Route
            
            path="/general"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="general"
                pageSize={9}
                country="in"
                category="general"
              />
            }
          />
          <Route
            
            path="/business"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="business"
                pageSize={9}
                country="in"
                category="business"
              />
            }
          />
          <Route
            
            path="/entertainment"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="entertainment"
                pageSize={9}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            
            path="/science"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="science"
                pageSize={9}
                country="in"
                category="science"
              />
            }
          />
          <Route
            
            path="/technology"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="technology"
                pageSize={9}
                country="in"
                category="technology"
              />
            }
          />
          <Route
            
            path="/sports"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="sports"
                pageSize={9}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            
            path="/health"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="health"
                pageSize={9}
                country="in"
                category="health"
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
