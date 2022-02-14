import Topbar from './Topbar';
import styled from "styled-components";
import Home from './Home';
import About from './About';
import Skills from './Skills';
import MyTimeline from './MyTimeline'
const Main = ({ toggleSidebar, isSidebarOpen }) => {
    return <StyledMain isSidebarOpen={ isSidebarOpen }>
        <Topbar toggleSidebar={ toggleSidebar}></Topbar>
        <Home /> 
        <About />
        <MyTimeline/>
        <Skills />
    </StyledMain>

}
const StyledMain = styled.div`
    width:${({isSidebarOpen}) =>  isSidebarOpen ? "calc(100% - 300px)" : "100%"};
    position: absolute;
    left:${({isSidebarOpen}) =>  isSidebarOpen ? "300px" : "0px"};
    min-height:100vh;
    transition: width 0.5s, left 0.5s;

`
export default Main;