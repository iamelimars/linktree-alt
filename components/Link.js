import React from "react";
import styled from "styled-components";

const Link = ({ link }) => {
  console.log(link);
  const { title, color, description, logo, thumbnail, url, textcolor } = link;

  return (
    <Container textcolor={textcolor && textcolor} color={color && color}>
      <a href={url.url}>
        {thumbnail.url && <Thumbnail src={thumbnail.url} alt="" />}
        <TextWrapper>
          <Logo color={color && color}>
            <img src={logo.url} alt="" />
          </Logo>
          <div>
            <h3>{title[0].text}</h3>
            <h5>{description[0].text}</h5>
          </div>
        </TextWrapper>
      </a>
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  max-width: 400px;
  margin: 1rem 0;

  a {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-decoration: none;

    h3 {
      color: ${({ textcolor }) => textcolor};
      margin-left: 1.5rem;
      font-weight: 300;
    }

    h5 {
      color: #808080;
      font-weight: 300;
      font-size: 0.7rem;
      margin-left: 1.5rem;
    }
  }
`;

const Thumbnail = styled.img`
  width: 90%;
`;

const Logo = styled.div`
  background: ${({ color }) => color};
  width: 60px;
  height: 60px;
  margin-left: -50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  position: absolute;

  img {
    width: 1.8rem;
  }
`;

const TextWrapper = styled.div`
  margin-top: -5px;
  background: #fff;
  min-height: 80px;
  padding: 1rem;
  width: 90%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0px 27px 16px -25px rgba(0, 0, 0, 0.25);
`;

export default Link;
