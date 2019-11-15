import React from 'react';
import styled from '@emotion/styled';

const Frame = styled.iframe`
  background-image: url('data:image/gif;base64,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');
  background-repeat: no-repeat;
  background-position: center center;
  border: 0;
  height: 80%;
  width: 80%;
`;

const Link = styled.a`
  color: #b585e0;
  font-size: 0.8em;
  margin: 0.5em;
`;

export const Stackblitz = ({ id }) => {
  const url = `https://${id}.stackblitz.io`;
  const embedUrl = `https://stackblitz.com/edit/${id}?ctl=0&embed=1&view=preview`;
  return (
    <>
      <Frame src={embedUrl}></Frame>
      <Link href={url}>{url}</Link>
    </>
  );
};
