import React from 'react';
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
  return (
    <StyledMain>
      <StyledArticle>
        <StyledDivHeading>Pied Piper</StyledDivHeading>

        <StyledDivSubHeading>November 2018 - Present</StyledDivSubHeading>
        <StyledPee>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
          imperdiet ligula. Duis non nibh ultricies, tempor mauris at, finibus
          dui. Sed sit amet venenatis nisi. Ut volutpat lobortis nulla vitae
          tincidunt. Ut interdum ullamcorper magna, at aliquet ante luctus non.
          Maecenas pulvinar vel leo eu lobortis. Nullam eget ligula ipsum.
        </StyledPee>
      </StyledArticle>
      <StyledArticle>
        <StyledDivHeading>Aviato</StyledDivHeading>
        <StyledDivSubHeading>April 2017 - October 2018</StyledDivSubHeading>
        <StyledPee>
          Etiam et turpis id eros mollis faucibus eget nec justo. Vivamus
          interdum leo sapien, sit amet euismod augue porta vitae. Praesent
          vitae ligula pretium, gravida felis ac, rhoncus orci. Sed et elit eget
          lectus vulputate venenatis. Quisque gravida lorem quis risus commodo
          maximus. Aliquam erat volutpat. In a lobortis tellus, eu efficitur
          libero.
        </StyledPee>
      </StyledArticle>
      <StyledArticle>
        <StyledDivHeading>Hooli</StyledDivHeading>
        <StyledDivSubHeading>May 2015 - Mars 2017</StyledDivSubHeading>
        <StyledPee>
          Quisque ornare sodales metus id dapibus. Quisque sodales aliquet lacus
          non cursus. In at massa vitae purus congue aliquam. Mauris tempor
          accumsan fermentum. Aenean volutpat porta libero nec fermentum. Ut
          finibus nunc id erat venenatis, quis iaculis erat tincidunt. Nullam
          vitae mauris varius, eleifend risus sed, rhoncus felis. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos.
        </StyledPee>
      </StyledArticle>
    </StyledMain>
  );
};

export default Body;
