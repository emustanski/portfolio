import { StyledBackgroundOverlay, StyledVideo } from './Background.styled';

const Background = () => (
  <>
    <StyledBackgroundOverlay />
    <StyledVideo autoPlay muted loop>
      <source src="/videos/bg.mp4" type="video/mp4" />
    </StyledVideo>
  </>
);

export default Background;
