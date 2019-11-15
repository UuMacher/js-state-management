import React from 'react';
import styled from '@emotion/styled';

const Blockquote = styled.blockquote`
  border-left: 0.5em solid #f39;
  font-style: italic;
  padding: 0.5em 0 0.5em 2em;

  & > p {
    margin-top: 0;
  }
`;

const Link = styled.a`
  color: #b585e0;
  font-style: normal;
`;

export const Quote = ({ author, url, children }) => {
  return (
    <Blockquote cite={url}>
      <p>"{children}"</p>
      <em>{author}</em> – <Link href={url}>{url}</Link>
    </Blockquote>
  );
};
