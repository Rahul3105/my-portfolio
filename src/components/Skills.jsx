import styled from "styled-components";
import SectionTemplate from "./SectionTemplate";
import { DiJavascript1,DiReact,DiNodejsSmall,DiMongodb ,DiMysql} from 'react-icons/di';
import { SkillCard } from './SkillCard';
import {AiFillHtml5} from 'react-icons/ai'
import { IoLogoCss3 } from 'react-icons/io';
import {SiRedux,SiTypescript,SiNextdotjs,SiExpress,SiMaterialui,SiCypress} from 'react-icons/si'
const Skills = () => {
  return (
    <SectionTemplate id={"skills"} title={"Skills"}>
      <SkillCard logo={<DiJavascript1 />} title={"Javascript"} />
      <SkillCard logo={<AiFillHtml5 />} title={"HTML5"} />
      <SkillCard logo={<IoLogoCss3 />} title={"CSS3"} />
      <SkillCard logo={<DiReact />} title={"React"} />
      <SkillCard logo={<SiRedux/> } title={"Redux"}/>
      <SkillCard logo={<SiTypescript />} title={"Typescript"} />
      <SkillCard logo={<SiNextdotjs />} title={"Next js"} />
      <SkillCard logo={<DiNodejsSmall />} title={"Node js"} />
      <SkillCard logo={<SiExpress />} title={"Express js"} />
      <SkillCard logo={<DiMongodb />} title={"Mongo DB"} />
      <SkillCard logo={<SiMaterialui />} title={"Material UI"} />
      <SkillCard logo={<SiCypress />} title={"Cypress"} />
      <SkillCard logo={<DiMysql />} title={"My SQL"} />
   
    </SectionTemplate>
  );
};


export default Skills;
