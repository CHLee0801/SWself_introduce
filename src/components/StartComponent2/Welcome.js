import {react} from 'react'
import font from '../font.css'
const css={
    bg:{
        position:'relative',
        display:'grid',
        gridTemplateColumns:'1fr 1fr'
    },
    first_frame:{
        marginLeft:'10%',
        marginTop:'9%',
    },
    second_frame:{
        marginLeft:'28%',
        marginTop:'16%',
        marginRight:'8%'
    },
    title:{
        fontSize: '4vw',   
    },
    subtitle:{
        marginTop: '3%',
    },
    sentence:{
        fontSize:'1.2vw',
        fontFamily:'Roboto'
    },
    name:{
        marginBottom:'-10%',
        fontSize: '1.8vw',
        fontWeight:'400',
    }
}
const Welcome=()=>
{
    return (
        <div style={css.bg}>
            <div style={css.first_frame}>
                <div style={css.name}>
                    소마 27조
                </div>
                <div style={{...css.title, marginTop:'13%'}}>
                    반갑습니다!
                </div>
                <div style={css.title}>
                    미니프로젝트 27조입니다!
                </div>
            </div>
            <div style={css.second_frame}>
                <div style={css.subtitle}>
                <div style={css.sentence}>
                     
                </div>
                </div>
                <div style={css.subtitle}>
                    <div style={css.sentence}>저희 팀은 권노현, 김동성, 이준혁, 이종복, 이창호 이렇게 5명으로 이루어진 팀입니다!</div>
                    <div style={css.sentence}>누구보다 개발에 열심이고 비록 프론트 웹개발에 대한 많은 경험은 부족하지만 간단한 메인페이지와 각자 자기소개 페이지로 프로젝트를 구성하였습니다.</div>
                    <div style={css.sentence}>소프트웨어 마에스트로 연수기간동안 많은 성장과 배움을 통해 자랑스러운 소마인으로 거듭나겠습니다! </div>
                </div>
            </div>
        </div>
    )
}
export default Welcome