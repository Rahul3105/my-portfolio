import styled from "styled-components";
import {GiHamburgerMenu} from 'react-icons/gi';
import IconButton from '@mui/material/IconButton';
import { black1, white2 } from '../utils/color';
const Topbar = ({ toggleSidebar }) => {
    return <StyledTopbar >
        <div className="logo">
            <p>{"< RAHUL />"}</p>
        </div>
        <div className="hamburger" onClick={toggleSidebar}>
            <IconButton>
                <GiHamburgerMenu/>
            </IconButton>
        </div>
    </StyledTopbar>
}
export default Topbar;
const StyledTopbar = styled.div`
    border-bottom:1px solid gainsboro;
    display:flex;
    background-color:${white2};
    justify-content:space-between;
    align-items:center;
    height:60px;
    padding:0 40px;
    position:sticky;
    top:0;
    z-index:1;
    & > .logo {
        font-weight:700;
        font-size:20px;
        color:${black1};
        font-family: 'Quintessential', cursive;
    }
    & > .logo:hover {
        cursor:pointer;
    }
    & > .hamburger {
        cursor:pointer;
        color:${black1};
    }
`;