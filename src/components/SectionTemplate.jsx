import styled from "styled-components";
import { white1, black1 } from "../utils/color";
const SectionTemplate = ({ id, title, children }) => {
  return (
    <StyledSectionTemplate id={id}>
      <div className="title">
        <h2>{title}</h2>
      </div>
      <div className="content">{children}</div>
    </StyledSectionTemplate>
  );
};
export default SectionTemplate;
const StyledSectionTemplate = styled.div`
  min-height: 100vh;
  padding: 0 40px;
  padding-top: 80px;
  background-color: ${white1};
  color: ${black1};
  & > .title {
    width: 100%;
    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 40px;
    position: relative;

    h2:before {
      content: "";
      position: absolute;
      left: 50%;
      transform: translate(-50%);
      bottom: -10px;
      width: 50px;
      height: 2px;
      background-color: ${black1};
    }
  }
  & > .content {
    display: flex;
    justify-content: space-between;
  }
`;
