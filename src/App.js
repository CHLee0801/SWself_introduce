import React,{Component} from "react"
import StartComponent from "./components/StartComponent2/StartComponent"
import {Route} from 'react-router-dom'
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
        <Route path="/" render={(props) => <StartComponent></StartComponent>} exact/>
        <Route path="/nohyun" render={(props) => <Nohyun></Nohyun>} exact/>
        <Route path="/junhyeok" render={(props) => <Junhyeok></Junhyeok>} exact/>
        <Route path="/changho" render={(props) => <Changho></Changho>} exact/>
        <Route path="/dongsung" render={(props) => <Dongsung></Dongsung>} exact/>
        <Route path="/joongbok" render={(props) => <Joongbok></Joongbok>} exact/>
      </div>
    )
  
}
export default App