
import { connect,useSelector } from 'react-redux'
import { addTochatdata_input, addTochatdata_output,addVideo,setImageNum } from "../../redux_src/chat_rdx";
import axios from 'axios';
import store from '../..';
const mapStateToProps = state => ({
    chat: state.chat,
    video: state.video,
    image: state.image
  });
  
const mapDispatchToProps = {
    addTochatdata_input,
    addTochatdata_output,
    addVideo,
    setImageNum,
  };

const css = {
  image:{
    position:'absolute',
    height:'100vh',
    width:'100vw'
  },
}
  
const MainComponent=()=>
{
       return(
         <div style={
           {
             display:'grid',
             gridTemplateColumns: '75vw 25vw', 
             position:'absolute',
           }
         }>
           <img style = {css.image} src={require('../../image/background_2.jpg').default}></img>
         </div>
       )
          
}

export default connect(mapStateToProps,mapDispatchToProps)(MainComponent)