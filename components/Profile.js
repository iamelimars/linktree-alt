import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Profile = ({ profile }) => {
  const { bio, links, location, name, profile_img } = profile.data;

  return (
    <Container>
      <Fade cascade duration={3000}>
        <ProfileImg src={profile_img.url} alt="" />
        <Name>{name[0].text}</Name>
        <Location>{location[0].text}</Location>
        <Bio>{bio[0].text}</Bio>
        <Links>
          {links &&
            links.map((item) => (
              <Link key={item.link.url} href={item.link.url}>
                <img src={item.link_img.url} alt="" />
              </Link>
            ))}
        </Links>
      </Fade>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ProfileImg = styled.img`
  width: 150px;
  margin-top: 4rem;
`;

const Name = styled.h1`
  font-weight: bold;
  font-size: 28px;
  margin: 1rem 0 0.5rem 0;
  color: #363636;
`;

const Location = styled.h4`
  font-weight: 300;
  font-size: 13px;
  color: #737373;
  margin: 0.5rem 0;
`;

const Bio = styled.h3`
  font-weight: 300;
  color: #737373;
  margin-bottom: 1rem;
`;

const Links = styled.div`
  display: flex;
`;

const Link = styled.a`
  background: #fff;
  width: 3rem;
  height: 3rem;
  margin: 0.5rem 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4rem;
  img {
    width: 1.5rem;
  }
`;

export default Profile;
