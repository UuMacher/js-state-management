import React from 'react';
import styled from '@emotion/styled';

const StyledFigure = styled.figure`
  display: block;
`;

const Image = styled.img`
  height: auto;
  max-height: 80vh;
  object-fit: contain;
  width: 100%;
`;

const Figcaption = styled.figcaption`
  font-size: 0.75em;
`;

export const Figure = ({ src, alt, children }) => {
  return (
    <StyledFigure>
      <Image src={src} alt={alt}></Image>
      <Figcaption>{children}</Figcaption>
    </StyledFigure>
  );
};
