import React from 'react';
import styled from '@emotion/styled';

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 1em;
  width: 100%;
`

export const Footnotes = ({children}) => {
    return <Footer>{children}</Footer>;
}