import styled from "styled-components";
import {black2} from '../utils/color'
const Button = ({children}) => {
    return <StyledButton>
        {children}
    </StyledButton>
}
const StyledButton = styled.div`
    background-color:${black2};
    padding:10px 20px;
    display:flex;
    align-items:center;

    color:white;
    cursor:pointer;
    letter-spacing:1px;
`;
export default Button;