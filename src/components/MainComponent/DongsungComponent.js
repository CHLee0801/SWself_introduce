import LeaveButton from "./LeaveButton";
import Image from "./Image";
import store from "../../index";
import { connect, useSelector } from "react-redux";
import {
  addTochatdata_input,
  addTochatdata_output,
  addVideo,
  setImageNum,
} from "../../redux_src/chat_rdx";

const mapStateToProps = (state) => ({
  chat: state.chat,
  video: state.video,
  image: state.image,
});

const mapDispatchToProps = {
  addTochatdata_input,
  addTochatdata_output,
  addVideo,
  setImageNum,
};
const DongsungComponent = () => {
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
        <div style={css.head}>저는 광운대에서 수학과 전자공학을</div>
        <div style={css.head}>복수전공한 김동성입니다!</div>
        <div style={css.text}>저의 관심사는 Backend, AI입니다!</div>
        <div style={css.text}>
          학부 졸업생으로 올해 초 개발자가 되기로 결심하고 소마에 지원했습니다.
        </div>
        <div style={css.text}>
          소마에서는 상품성 있는 서비스를 만드는 것에 집중하고 싶고, 이를
          바탕으로 창업까지 생각하고있습니다.
        </div>
        <div style={css.text}>
          많은 개발자 분들과 알아가고 싶고, 앞으로도 인연을 이어나가고 싶습니다.
          잘 부탁드립니다!
        </div>
      </div>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(DongsungComponent);
