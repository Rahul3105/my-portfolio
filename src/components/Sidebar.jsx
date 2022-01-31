// #333
import styled from 'styled-components'
const Sidebar = ({isSidebarOpen}) => {
    return (
        <StyledSidebar isSidebarOpen = {isSidebarOpen}>
            <ul>
                <li><a href="#"> HOME</a></li>
                <li><a href="#"> ABOUT</a></li>
                <li><a href="#"> SKILLS</a></li>
                <li><a href="#"> PROJECT</a></li>
                <li><a href="#"> CONTACT</a></li>
            </ul>
        </StyledSidebar>
    )
}
const StyledSidebar = styled.div`
    position:fixed;
    width: ${({isSidebarOpen}) => isSidebarOpen ? "300px" : "0px"};
    height:100%;
    border-right:1px solid gainsboro;
    display:flex;
    overflow: hidden;
    transition:width 0.5s;
    justify-content:center;
    align-items:center;
    & ul {
        width: 100%;
        padding: 0px 40px;
        li {
            list-style:none;
            margin:20px 0;
            a {
                text-decoration:none;
                letter-spacing:2px;
                font-weight:600;
                opacity:0.5;
                color:#333;
            }
            a:hover {
                opacity:1;
            }
        }
    }

`
export default Sidebar