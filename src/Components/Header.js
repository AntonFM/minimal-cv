import React from 'react';
import styled, { css } from 'styled-components';
import Img from '../imgs/toni.jpg';
import { SocialIcon } from 'react-social-icons';
import PropTypes from 'prop-types';

const StyledHeader = styled.div`
  background: #282c34;
  height: 20em;
  border-bottom: 3px solid #ff8c00;
`;

const StyledHeading = styled.div`
  color: #09d3ac;
  font-size: 3rem;
  font-weight: bold;
`;

const StyledImg = styled.img`
  height: 18em;
  border-radius: 50%;
`;

const StyledLeftHead = styled.div`
  float: left;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 3em;
`;

const StyledRightHead = styled.div`
  float: right;
  height: 100%;
  display: flex;
  align-items: center;
`;

const StyledDesc = styled.div`
  font-size: 3.5em;
  margin-top: 0.5em;
  margin-left: 0.5em;
  color: white;
`;

const StyledSocial = styled.div`
  float: left;
  margin-top: 10em;
  margin-right: 5em;
  padding-right: 2px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledLeftHead>
        <StyledHeading>Anton Freyr Magnússon</StyledHeading>
        <StyledDesc>Passion for Masturbation</StyledDesc>
      </StyledLeftHead>
      <StyledRightHead>
        <StyledSocial>
          <SocialIcon
            url="https://www.facebook.com/Magnusson92"
            bgColor="#ff8c00"
          />
          <SocialIcon
            url="https://www.instagram.com/toninn12/"
            bgColor="#ff8c00"
          />
          <SocialIcon url="https://github.com/AntonFM" bgColor="#ff8c00" />
          <SocialIcon
            url="toninn12.afm@gmail.com"
            network="mailto"
            bgColor="#ff8c00"
          />
        </StyledSocial>
        <StyledImg src={Img}></StyledImg>
      </StyledRightHead>
    </StyledHeader>
  );
};

export default Header;
