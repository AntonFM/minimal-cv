import React from 'react';
import styled, { css } from 'styled-components';
import { SocialIcon } from 'react-social-icons';
import PropTypes from 'prop-types';

const StyledFooterWrap = styled.div`
  height: 60px;
  border-top: 3px solid #ff8c00;
`;

const StyledFooterDesc = styled.div`
  float: left;
  font-size: 3.5em;
  color: #ff8c00;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 1em;
`;

const StyledSocial = styled.div`
  float: right;
  margin-top: 2em;
  margin-bottom: 2em;
  margin-right: 1em;
  padding-right: 2px;
`;

const StyledColorChange = styled.em`
  color: #09d3ac;
`;

const Footer = () => {
  return (
    <StyledFooterWrap>
      <StyledFooterDesc>
        Made with React by{' '}
        <StyledColorChange>Anton Freyr Magnússon</StyledColorChange>
      </StyledFooterDesc>
      <StyledSocial>
        <SocialIcon
          url="https://www.facebook.com/Magnusson92"
          bgColor="#ff8c00"
          fgColor="white"
        />
        <SocialIcon
          url="https://www.instagram.com/toninn12/"
          bgColor="#ff8c00"
          fgColor="white"
        />
        <SocialIcon
          url="https://github.com/AntonFM"
          bgColor="#ff8c00"
          fgColor="white"
        />
        <SocialIcon
          url="toninn12.afm@gmail.com"
          network="mailto"
          bgColor="#ff8c00"
          fgColor="white"
        />
      </StyledSocial>
    </StyledFooterWrap>
  );
};

export default Footer;
