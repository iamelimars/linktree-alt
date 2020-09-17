import React from "react";
import styled from "styled-components";
import { client } from "../prismic-config";
import Prismic from "prismic-javascript";
import Profile from "../components/Profile";
import Links from "../components/Links";

const Home = ({ homepage, links }) => {
  return (
    <Container>
      <Wrapper>
        <Profile profile={homepage[0]} />
        <Links links={links} />
      </Wrapper>
    </Container>
  );
};

export const getServerSideProps = async () => {
  const homepage = await client.query(
    Prismic.Predicates.at("document.type", "homepage")
  );
  const links = await client.query(
    Prismic.Predicates.at("document.type", "link")
  );

  return { props: { homepage: homepage.results, links: links.results } };
};

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: url("/bg.png");

  @media (max-width: 450px) {
    background: url("/bgmobile.png");
  }
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: auto;
  background: linear-gradient(
    180deg,
    rgba(239, 239, 239, 0.44) 0%,
    #efefef 80%
  );
  backdrop-filter: blur(70px);
`;

export default Home;
