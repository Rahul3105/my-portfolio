import styled from "styled-components";
import SectionTemplate from "./SectionTemplate";
const About = () => {
  return (
    <SectionTemplate id={"about"} title={"About me"}>
      <StyledTextCont>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut delectus,
          consequuntur minima nemo alias porro odit nostrum, unde, maxime iusto
          magni eligendi molestiae perspiciatis obcaecati tempore ea? Expedita
          similique maiores provident! Optio magni necessitatibus, <br /> <br />
          officiis aliquam et in possimus corrupti autem ut molestias cumque
          eaque ipsam pariatur eligendi iste quia?
        </p>
      </StyledTextCont>
      <div className="imgCont">
        <img src="/rahul.png" alt="" />
      </div>
    </SectionTemplate>
  );
};

const StyledTextCont = styled.div`
  width: 55%;
  & + .imgCont {
    width: 30%;
    img {
      width: 100%;
    }
  }
`;
export default About;
