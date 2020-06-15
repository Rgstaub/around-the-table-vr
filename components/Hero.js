import { Button, Container, Typography } from '@material-ui/core';
import Link from 'next/link';
import styled from 'styled-components';

const HeroVideo = styled.video`
  position: absolute;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
`;

const StyledContainer = styled(Container)`
  position: absolute;
  left: 0;
  top: 0;
`;

const Section = styled.section`
  position: relative;
`;

export default function Hero() {
  return (
    <section>
      <HeroVideo
        autoPlay
        muted
        loop
        id="chessPiecesVideo"
        src="/videos/Chess_Pieces_Playing.mp4"
        type="video/mp4"
      />
      <StyledContainer>
        <Typography variant="h1">Around the Table VR</Typography>
      </StyledContainer>
    </section>
  );
}
