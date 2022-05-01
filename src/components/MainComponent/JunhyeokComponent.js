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
const JunhyeokComponent=()=>
{
    const css = {
        bg: {
          height: "100vh",
          width: "100wh",
        },
        link: {
          textDecoration: "none",
        },
        sidebg: {
          height: "100vh",
          width: "35vw",
          background: "rgba(255,255,255,0.2)",
          position: "absolute",
          right: "0",
          paddingTop: "10vh",
        },
        head: {
          fontSize: "25px",
          paddingBottom: "3vh",
        },
        text: {
          paddingTop: "3vh",
        },
    };
    return (
        <div style={css.bg}>
          <a href="http://localhost:3000" style={css.link}>
            <LeaveButton></LeaveButton>
          </a>
          <Image type={store.getState()["image"]}></Image>
          <div style={css.sidebg}>
            <div style={css.head}>안녕하세요!</div>
            <div style={css.head}>꾸준히 성장하는 개발자 이준혁입니다.</div>
            <div style={css.text}>
              소마에 오기 전에는 게임 개발을 집중적으로 하였습니다.
            </div>
            <div style={css.text}>
              이제는 앱 개발이라는 도전을 할 예정입니다.
            </div>
            <div style={css.text}>
                많은 분들과 친해지고 싶고 많이 배워가고 싶습니다.
                다들 만나서 반갑고 잘 부탁드립니다.
            </div>
          </div>
        </div>
      )
}
export default connect(mapStateToProps,mapDispatchToProps)(JunhyeokComponent)