import styled from "styled-components";
import SectionTemplate from "./SectionTemplate";
const About = () => {
  return (
    <SectionTemplate id={"about"} title={"About me"}>
      <StyledAbout>
        <div className="textCont">
          <p>
            Hi My name is Rahul Rajput. A Full Stack Web Developer, Passionate
            about Information Technology. Excited to make the virtual world
            beautiful, efficient, and tempting. Proactive and fast learner,
            having excellent communication and teamwork skills. Eager to make a
            contribution to the industry using my Skillset, Toolset, and
            Mindset.
            <br />
            <br />
            <br />I have been passionate about new technologies since childhood.
            I always wanted to be in tech industry, but due to lack of guidance
            I chose Mechanical Engineering. Masai school gave me that second
            chance to fulfil my dreams. At masai I learnt MERN Stack, Data
            Structure and Algorithm along with Soft Skills.
          </p>
        </div>
        <div className="imgCont">
          <img src="/dev_svg.svg" alt="" />
        </div>
      </StyledAbout>
    </SectionTemplate>
  );
};

const StyledAbout = styled.div`
  display:flex;
  justify-content:space-between;
  & > .textCont {
    width: 55%;
  }
  & > .imgCont {
    width: 40%;
    img {
      width: 100%;
    }
  }
`;
export default About;
