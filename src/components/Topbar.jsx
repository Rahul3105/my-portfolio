import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
const Topbar = ({ toggleSidebar }) => {
    return <StyledTopbar>
        <div className="logo">
            <p>{"< RAHUL />"}</p>
        </div>
        <div className="hamburger" onClick={toggleSidebar}>
            <IconButton>
                <MenuIcon/>
            </IconButton>
        </div>
    </StyledTopbar>
}
export default Topbar;
const StyledTopbar = styled.div`
    border-bottom:1px solid gainsboro;
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:60px;
    padding:0 40px;
    position:sticky;
    & > .logo {
        font-weight:bold;
        font-size:20px;
    }
    & > .logo:hover {
        cursor:pointer;
    }
    & > .hamburger {
        cursor:pointer;
    }
`;