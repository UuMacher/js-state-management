import React from 'react';
import styled from '@emotion/styled';

const H1 = styled.h1`
  background: linear-gradient(to right, #b585e0 0%, #f39 70%, #f39 100%);
  border-bottom: 2px solid #ecaf20;
  padding-bottom: 0.2em;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Title = props => <H1 {...props}></H1>;
