import styled from "styled-components"
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { SiGeeksforgeeks, SiLeetcode } from 'react-icons/si';
import { FiDownload } from 'react-icons/fi';
import Button from './Button'
import {white1, black1, black2} from '../utils/color'
const Home = () => {
    return <StyledHome id="home">
        <div className="myImg">
            <img src="/rahul.png" alt="" />
        </div>
        <h3 className="myName">RAHUL RAJPUT</h3>
        <p className="myProf">I'm a Full Stack Developer</p>
        <Button><FiDownload/>Download Resume</Button>
        <ul className="socialMedia">
            <li><a href=""><AiFillGithub/></a></li>
            <li><a href=""><AiFillLinkedin/></a></li>
            <li><a href=""><SiGeeksforgeeks /></a></li>
            <li><a href=""><SiLeetcode/></a></li>
        </ul>
    </StyledHome>

}
export default Home;
const StyledHome = styled.div`
    height:calc(100vh - 60px);    
    background-color:${white1};
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    & > .myImg {
        width:300px;
        height:310px;
        border-radius: 50%;
        overflow: hidden;
        img {
            width:100%;
        }
    }
    & >.myName {
        font-weight: bold;
        font-size:22px;
        letter-spacing:2px;
        margin:10px 0;
        text-transform:uppercase;
        color:${black1};
    }
    & > .myProf {
        color:#777;
        margin-bottom:10px;
    }
    & > .socialMedia {
        display:flex;
        cursor:pointer;
        margin-top:60px;
        li {
            list-style: none;
            width:40px;
            height:40px;
            margin-right:10px;
            display:flex;
            justify-content:center;
            align-items:center; 
            background-color: rgba(0,0,0,0.05);
            transition: 0.5s;
            a {
                text-decoration: none;
                /* color:${black1}; */
                color:rgb(108,99,255);
                font-size: 22px;
            }
        }
        li:hover{
            background-color: ${black2};
            a {
                
                color: gainsboro;
            }
        }      
    }
`;