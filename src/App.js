import React,{Component} from "react"
import StartComponent from "./components/StartComponent2/StartComponent"
import {BrowserRouter, Route, Router} from 'react-router-dom'
import MainComponent from "./components/MainComponent/MainComponent"
import Changho from "./components/MainComponent/Changho"
import Dongsung from "./components/MainComponent/Dongsung"
import Joongbok from "./components/MainComponent/Joongbok"
import Junhyeok from "./components/MainComponent/Junhyeok"
import Nohyun from "./components/MainComponent/Nohyun"
const App=()=>
{

    return(
      <div>
        <BrowserRouter basename="/SWself_introduce">
          <Route path="/" render={(props) => <StartComponent></StartComponent>}/>
          <Route path="/nohyun" render={(props) => <Nohyun></Nohyun>}/>
          <Route path="/junhyeok" render={(props) => <Junhyeok></Junhyeok>}/>
          <Route path="/changho" render={(props) => <Changho></Changho>}/>
          <Route path="/dongsung" render={(props) => <Dongsung></Dongsung>}/>
          <Route path="/joongbok" render={(props) => <Joongbok></Joongbok>}/>
        </BrowserRouter>
      </div>
    )
  
}
export default App