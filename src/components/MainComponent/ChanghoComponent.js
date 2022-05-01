import LeaveButton from './LeaveButton'
import Image from './Image'
import store from '../../index'
import { connect,useSelector } from 'react-redux'
import { addTochatdata_input, addTochatdata_output, addVideo,setImageNum} from "../../redux_src/chat_rdx";

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
const ChanghoComponent=()=>
{
    const css=
        {
        bg:
        {
            height:'100vh',
            width:'100wh',
        },
        link:{
            textDecoration:'none'
        },
        sidebg:
        {
            height:'100vh',
            width:'35vw',
            background:'rgba(255,255,255,0.2)',
            position:'absolute',
            right:'0',
            paddingTop:'10vh'
        },
        head:
        {
            fontSize:'25px',
            paddingBottom:'3vh'
        },
        text:
        {
            paddingTop:'3vh'
        },
        list:{
            paddingTop:'2vh',
            fontSize:'13px'
        }
        }
        return(
    <div style={css.bg}>
        <a href='https://chlee0801.github.io/SWself_introduce/' style={css.link}>
            <LeaveButton></LeaveButton>
        </a> 
        <Image type = {store.getState()['image']}></Image>
        <div style={css.sidebg}>
            <div style={css.head}>
                안녕하세요!
            </div>
            <div style = {css.head}>
                저는 고려대학교 컴퓨터학과 소속
            </div>
            <div style={css.head}>
                이창호입니다!
            </div>
            <div style={css.text}>
                저의 가장 큰 관심사는 AI Researching과 AI Modeling입니다!
            </div>
            <div style={css.text}>
                특히 Large Language Modeling에 관심이 있고 최근에는 Continual Learning 기법에 관한 연구 및 논문 작업을 진행하였습니다.
            </div>
            <div style={css.text}>
                Kaist LKLab (NLP Reserach Lab)에서 학부생 인턴으로 근무 중에 있고, 아래와 같은 Industry Experience가 있습니다!
            </div>
            <div style={css.list}>
                - LG AI Research (2021.10 ~ 2022.2) as a Second Author of NLP Research Project
            </div>
            <div style={css.list}>
                - Naver AI Lab (2022.2 ~ present) as a Second Author of NLP Research Project
            </div>
            <div style={css.text}>
                저는 소마라는 기회를 통해 Chatbot API(Business to Business)사업과 QA Model(Business to Customer) 사업을 진행해보고 싶습니다!
            </div>
            <div style={css.text}>
                많은 열정을 가진 분들과 네트워킹을 해서 서로 발전하는 방향으로 나아가고 싶고 많은 연수생분들, 멘토분들 잘 부탁드리겠습니다!
            </div>
        </div>
    </div>
        )
}
export default connect(mapStateToProps,mapDispatchToProps)(ChanghoComponent)