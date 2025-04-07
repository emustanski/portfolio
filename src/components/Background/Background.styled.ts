import styled from '@emotion/styled';

export const StyledBackgroundOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;

  &:before,
  &:after {
    display: block;
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &:before {
    transition-delay: 0.75s;
    transition: background-color 2.5s ease-in-out;
    background-image: linear-gradient(
        to top,
        rgba(19, 21, 25, 0.5),
        rgba(19, 21, 25, 0.5)
      ),
      url(/images/overlay.png);
    background-size: auto, 256px 256px;
    background-position: center, center;
    background-repeat: no-repeat, repeat;
    z-index: 2;
  }

  &:after {
    transition: transform 325ms ease-in-out, filter 325ms ease-in-out;
    transform: scale(1.125);
    z-index: 1;
  }
`;
export const StyledVideo = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
`;
