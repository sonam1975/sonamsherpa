import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Header from "../style/Header.jsx";
import Print from "../style/Print.jsx";
const A = styled.a`
  color: white;
`;
const Ulist = styled.div`
  display: inline;
`;
const ListItem = styled.li`
  color: white;
`;
const ProjectName = styled.h2`
  color: white;
`;
const TopBar = () => {
  return (
    <div>
      <Header>Sonam Sherpa </Header>
      <A href="https://github.com/sonam1975" target="_blank">
        Github
      </A>
      <br></br>
      <A href="https://www.linkedin.com/in/sonam-sherpa1/" target="_blank">
        LinkedIn
      </A>

      <br></br>
      <A>✉️ sonam1975@hotmail.com </A>
      <br></br>
      <A
        href="https://portfolio9841.s3.us-east-2.amazonaws.com/myresume.pdf
"
        target="_blank"
      >
        My Resume
      </A>
      <br></br>
      <Header>#Projects</Header>
      <ProjectName>1. MyPad</ProjectName>
      <Print>
        Built an image carousel module with React for improved UI/UX. Created
        RESTful APIs using Express server to support CRUD operations.
        Implemented Express proxy server and deployed microservices using AWS.
      </Print>
      <br></br>
      <Ulist>
        <ListItem>Javascript</ListItem>
        <ListItem>React</ListItem>
        <ListItem>NodeJS</ListItem>
        <ListItem>MongoDB</ListItem>
        <ListItem>Webpack</ListItem>
        <ListItem>AWS(s3 + EC2)</ListItem>
      </Ulist>
      <ProjectName>2. SoundStorm</ProjectName>
      <Print>
        Built a Post Comments module using React for a cloud based music library
        and optimized MySQL queries with indexing to achieve read and write in
        less than 1ms for 20M songs.
      </Print>
      <br></br>
      <Ulist>
        <ListItem>Javascript</ListItem>
        <ListItem>React</ListItem>
        <ListItem>NodeJS</ListItem>
        <ListItem>MySQL</ListItem>
        <ListItem>Webpack</ListItem>
        <ListItem>AWS(s3 + EC2)</ListItem>
        <ListItem>Nginx</ListItem>
      </Ulist>
      <ProjectName>2. Talk to Hora</ProjectName>
      <Print>
        Implemented Web Speech API in React to convert voice queries to text and
        vice-versa, and used Google’s Dialogflow API to create web based Virtual
        Assistance.
      </Print>
      <br></br>
      <Ulist>
        <ListItem>Javascript</ListItem>
        <ListItem>Google Web Speech</ListItem>
        <ListItem>React</ListItem>
        <ListItem>NodeJS</ListItem>
        <ListItem>MySQL</ListItem>
        <ListItem>Webpack</ListItem>
        <ListItem>AWS(s3 + EC2)</ListItem>
      </Ulist>
    </div>
  );
};

export default TopBar;
