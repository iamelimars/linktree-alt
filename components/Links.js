import React from "react";
import Link from "./Link";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Links = ({ links }) => {
  return (
    <Fade delay={500} duration={3000}>
      <Container>
        {links && links.map((link) => <Link key={link.id} link={link.data} />)}
      </Container>
    </Fade>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 2rem;
`;

export default Links;
