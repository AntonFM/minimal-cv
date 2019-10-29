import React from 'react';
import styled, { css } from 'styled-components';
import Img from '../imgs/toni.jpg';
import PropTypes from 'prop-types';

const StyledHeader = styled.div`
  background: #282c34;
  height: 24em;
  border-bottom: 3px solid #ff8c00;

  @media (max-width: 767px) {
    height: 35em;
  }
`;

const StyledHeading = styled.div`
  color: #09d3ac;
  font-size: 3rem;
  font-weight: bold;
`;

const StyledImg = styled.img`
  height: 18em;
  border-radius: 50%;
  margin-right: 1em;
  @media (max-width: 767px) {
    display: none;
  }
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
  flex-wrap: wrap;
`;

const StyledDesc = styled.div`
  font-size: 3.5em;
  margin-top: 0.5em;
  margin-left: 0.5em;
  margin-bottom: 0.5em;
  color: white;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledLeftHead>
        <StyledHeading>Anton Freyr Magnússon</StyledHeading>
        <StyledDesc>
          A Family Man with passion for Coding, Cooking and Gaming.
        </StyledDesc>
      </StyledLeftHead>
      <StyledRightHead>
        <StyledImg src={Img}></StyledImg>
      </StyledRightHead>
    </StyledHeader>
  );
};

export default Header;
