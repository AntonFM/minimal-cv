import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import PropTypes from 'prop-types';

const StyledMain = styled.main`
  color: white;
  margin-top: 3em;
  margin-left: 3em;
  margin-right: 3em;
`;

const StyledArticle = styled.article`
  margin-top: 2em;
  margin-bottom: 4em;
`;

const StyledDivHeading = styled.div`
  font-size: 4.5em;
  font-weight: 500;
  width: 50%;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const StyledDivSubHeading = styled.div`
  font-size: 2.5em;
  font-weight: 500;
  color: #ff8c00;
`;

const StyledPee = styled.p`
  font-size: 2.5em;
  font-weight: 100;
  margin: 0;
  margin-left: 1em;
  margin-top: 0.75em;
`;

const StyledButton = styled.button``;

const Body = () => {
  const [accordionClicked, setAccordionClicked] = useState(false);
  const handler = () => {
    setAccordionClicked(!accordionClicked);
  };

  return (
    <StyledMain>
      <StyledArticle>
        <StyledDivHeading onClick={handler}>Pied Piper</StyledDivHeading>
        {accordionClicked && (
          <React.Fragment>
            <StyledDivSubHeading>November 2018 - Present</StyledDivSubHeading>

            <StyledPee>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              at imperdiet ligula. Duis non nibh ultricies, tempor mauris at,
              finibus dui. Sed sit amet venenatis nisi. Ut volutpat lobortis
              nulla vitae tincidunt. Ut interdum ullamcorper magna, at aliquet
              ante luctus non. Maecenas pulvinar vel leo eu lobortis. Nullam
              eget ligula ipsum.
            </StyledPee>
          </React.Fragment>
        )}
      </StyledArticle>
      <StyledArticle>
        <StyledDivHeading onClick={handler}>Aviato</StyledDivHeading>
        {accordionClicked && (
          <>
            <StyledDivSubHeading>{'title'}</StyledDivSubHeading>
            <StyledPee>{'text'}</StyledPee>
          </>
        )}
      </StyledArticle>
      <StyledArticle>
        <StyledDivHeading onClick={handler}>Hooli</StyledDivHeading>
        {accordionClicked && (
          <React.Fragment>
            <StyledDivSubHeading>May 2015 - Mars 2017</StyledDivSubHeading>
            <StyledPee>
              Quisque ornare sodales metus id dapibus. Quisque sodales aliquet
              lacus non cursus. In at massa vitae purus congue aliquam. Mauris
              tempor accumsan fermentum. Aenean volutpat porta libero nec
              fermentum. Ut finibus nunc id erat venenatis, quis iaculis erat
              tincidunt. Nullam vitae mauris varius, eleifend risus sed, rhoncus
              felis. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos.
            </StyledPee>
          </React.Fragment>
        )}
      </StyledArticle>
    </StyledMain>
  );
};

export default Body;
