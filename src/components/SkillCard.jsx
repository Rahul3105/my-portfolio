import styled from 'styled-components';
const SkillCard = ({ logo, title }) => {
    return <StyledSkillCard>
        {logo}
        <p>{title}</p>
    </StyledSkillCard>    
}
const StyledSkillCard = styled.div`
    width:110px;
    height:110px;
    margin:25px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    font-weight:500;
    font-size: 18px;
    border-radius:10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    & svg {
        font-size: 35px;
        margin-bottom:12px;
        color:rgb(108,99,255);
    }
`;
export {SkillCard}