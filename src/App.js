
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = ()=> {

 const[progress, setProgress] = useState(0)
//  apikey= "54e266f93c04463baf69e966ad1c3b00"

  
    return (
      
      <div>
        <Router>
        <Navbar/>

        <LoadingBar
        height = {3}
        color='#f11946'
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        
        <Routes>
          <Route exact path="/general" element = {<News setProgress={ setProgress}   key="general" pageSize={6} category="general" country = "in"/>}></Route>
          <Route exact path="/" element = {<News setProgress={ setProgress}   key="general" pageSize={6} category="general" country = "in"/>}></Route>
          <Route exact path="/business" element = {<News setProgress={ setProgress}   key="business" pageSize={6} category="business" country = "in"/>}></Route>
          <Route exact path="/entertainment" element = {<News setProgress={ setProgress}   key="entertainment" pageSize={6} category="entertainment" country = "in"/>}></Route>
          <Route exact path="/health" element = {<News setProgress={ setProgress}   key="health" pageSize={6} category="health" country = "in"/>}></Route>
          <Route exact path="/science" element = {<News setProgress={ setProgress}   key="science" pageSize={6} category="science" country = "in"/>}></Route>
          <Route exact path="/technology" element = {<News setProgress={ setProgress}   key="technology" pageSize={6} category="technology" country = "in"/>}></Route>
          <Route exact path="/sports" element = {<News setProgress={ setProgress}   key="sports" pageSize={6} category="sports" country = "in"/>}></Route>
         
        </Routes>
        </Router>
      </div>
      
    )
  
}
export default App
