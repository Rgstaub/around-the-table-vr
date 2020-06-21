import { Container, Typography } from '@material-ui/core';
import styled from 'styled-components';

const Section = styled.section`
  height: 100vh;
  background-image: linear-gradient(black, #222222);
`;

const StyledContainer = styled(Container)``;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: space-between;
  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

const TextContent = styled.div`
  padding: 10px;
  @media (min-width: 769px) {
    max-width: 48%;
  }
`;

const StyledImage = styled.img`
  @media (min-width: 769px) {
    max-width: 48%;
  }
`;

const H2 = styled(Typography)`
  font-size: 32px !important;
`;

export default function ImageAndTextSection({ alignment, children }) {
  console.log({ alignment });
  return (
    <Section>
      <StyledContainer>
        <FlexWrapper>
          <StyledImage src="/images/chess.gif" />
          <TextContent>
            <H2 variant="h2">Single Player &amp; Mulitplayer</H2>
            <Typography variant="body2">
              Sometimes, it's fun to play alone but if we're being honest,
              there's really no board games without other people. But I'll let
              you decide, so we'll have both options. ATT will have an AI-driven
              singleplayer, as well as multiplayer allowing you to create
              parties, host/join servers, and will also include a state of the
              art Annoyance Prevention System (APS) allowing you to
              mute/ghost/vote-kick players who are not so board game inclined.
            </Typography>
          </TextContent>
        </FlexWrapper>
      </StyledContainer>
    </Section>
  );
}
