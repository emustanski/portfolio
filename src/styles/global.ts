import { css } from '@emotion/react';
import { colors } from './colors';

export const global = css`
  * {
    color: ${colors.white};
    box-sizing: border-box;

    &:before,
    &:after {
      box-sizing: inherit;
    }
  }
  html,
  body {
    padding: 0;
    margin: 0;
  }
  body {
    overflow-y: scroll;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    line-height: 1.5;
    margin: 0 0 1rem;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
  }
  p {
    margin: 0 0 2rem;
    line-height: 1.65;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, textarea {
    color: ${colors.white};
    font-family: inherit;
    font-weight: 300;
    font-size: 1rem;
    line-height: 1.65;
  }
`;
