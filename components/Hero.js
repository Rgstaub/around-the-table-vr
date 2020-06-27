import { Button, Container, Typography, SvgIcon } from '@material-ui/core';
import Link from 'next/link';
import styled from 'styled-components';

const HeroVideo = styled.video`
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  // left: 0;
  min-height: 100vh;
  min-width: 100vh;
  // max-width: 100vw;
  @media (max-width: 768px) {
    margin-right: -100%;
  }
  // min-height: 100%;
  // min-width: 100%;
  // height: auto !important;
  // width: auto !important;
`;

const StyledContainer = styled(Container)`
  position: relative;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  height: 100vh;
`;

const Header = styled.header`
  // contain: content;
  height: 100vh;
  overflow: hidden !important;
  max-width: 100vw;
`;

// May the gods of CSS forgive me...
// TODO ?? figure out how to use Material-ui style override solution
// https://material-ui.com/styles/basics/#material-ui-styles
const H1 = styled(Typography)`
  font-family: halfomania !important;
  text-shadow: 0px 0px 20px yellow;
  color: #fdffdd; // random light-yellow from color picker

  line-height: 0.7 !important;
  font-size: 14vw !important;
  @media (min-width: 769px) {
    font-size: 10vw !important;
  }
`;

const SocialLinks = styled.div`
  margin-top: 20px;
  > a:not(:last-child) {
    margin-right: 20px;
    i:hover {
    }
  }
  a > i {
    transition: text-shadow 0.3s;
    &:hover {
      text-shadow: 0px 0px 10px cyan;
    }
  }
`;

const ButtonGroup = styled.div`
  > a {
    width: 100%;
    transition: box-shadow 0.5s;
    :first-child {
      margin-bottom: 20px;
    }

    @media (min-width: 769px) {
      width: initial;
      :first-child {
        margin-right: 40px;
        margin-bottom: 0;
      }
    }
  }
`;

const CyanButton = styled(Button)`
  :hover {
    box-shadow: 0px 5px 20px cyan !important;
  }
`;

const YellowButton = styled(Button)`
  :hover {
    box-shadow: 0px 5px 20px yellow !important;
  }
`;

export default function Hero() {
  return (
    <Header>
      <HeroVideo
        autoPlay
        playsInline
        muted
        loop
        id="chessPiecesVideo"
        src="/videos/Dominoes_Compressed.mp4"
        type="video/mp4"
      />
      <StyledContainer>
        <FlexWrapper>
          <img
            src="/images/ATT_Logo_Transparent.png"
            width="150"
            height="150"
          />
          <H1 variant="h1">
            <div>AROUND THE TABLE</div>
            <div>VR</div>
          </H1>
          <ButtonGroup>
            <CyanButton
              variant="contained"
              color="primary"
              href="https://discord.gg/C7PpsEk"
              startIcon={<i class="fab fa-discord"></i>}
            >
              Discord
            </CyanButton>
            <YellowButton
              variant="contained"
              color="secondary"
              href="https://www.patreon.com/AroundTheTableVR?fan_landing=true"
              startIcon={<i class="fab fa-patreon"></i>}
            >
              Patreon
            </YellowButton>
            <SocialLinks>
              <a href="#" target="_blank">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" target="_blank">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com/table_vr" target="_blank">
                <i class="fab fa-twitter"></i>
              </a>
              <a
                href="https://trello.com/b/59bT8BFN/around-the-table-phase-2"
                target="_blank"
              >
                <i class="fab fa-trello"></i>
              </a>
              <a href="https://www.reddit.com/user/abe17124" target="_blank">
                <i class="fab fa-reddit-alien"></i>
              </a>
            </SocialLinks>
          </ButtonGroup>
        </FlexWrapper>
      </StyledContainer>
    </Header>
  );
}
