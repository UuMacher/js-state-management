import React from 'react';
import styled from '@emotion/styled';

const Frame = styled.iframe`
    background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjMiIGhlaWdodD0iMzQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMTkuOTE5aDkuODdMNC4xMiAzNCAyMyAxMy45NjFoLTkuOTE1TDE4Ljc4OSAweiIgZmlsbD0iIzEzODlGRCIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9zdmc+');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 46px 86px;
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
