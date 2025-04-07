import { css } from "@emotion/react";
import { breakpoints } from "./breakpoints";

export const typography = {
  headingOne: css`
    font-size: 1.75rem;
    line-height: 1.4;
    letter-spacing: 0.5rem;
    
    @media screen and (min-width: ${breakpoints.md}) {
      font-size: 2.25rem;
      line-height: 1.3;
    }
  `,
  headingTwo: css`
    font-size: 1.25rem;
    line-height: 1.5;
    letter-spacing: 0.5rem;
    
    @media screen and (min-width: ${breakpoints.md}) {
      font-size: 1.5rem;
      line-height: 1.4;
    }
  `,
  headingThree: css`
    font-size: 1.1rem;
    line-height: 1.5;
    letter-spacing: 0.2rem;
    
    @media screen and (min-width: ${breakpoints.md}) {
      font-size: 1.35rem;
      line-height: 1.4;
      letter-spacing: 0.25rem;
    }
  `,
  headingFour: css`
    font-size: 1.05rem;
    line-height: 1.5;
    letter-spacing: 0.2rem;

    @media screen and (min-width: ${breakpoints.md}) {
      font-size: 1.15rem;
      line-height: 1.4;
      letter-spacing: 0.25rem;
    }
  `
}