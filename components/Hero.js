import { Button, Container, Typography, SvgIcon } from '@material-ui/core';
import Link from 'next/link';
import styled from 'styled-components';

const HeroVideo = styled.video`
  position: absolute;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  @media (max-width: 768px) {
    margin-right: -100%;
  }
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
  contain: content;
  height: 100vh;
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

const ButtonGroup = styled.div`
  a {
    width: 100%;
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

function DiscordIcon() {
  return (
    <SvgIcon>
      <path d="m3.58 21.196h14.259l-.681-2.205 1.629 1.398 1.493 1.338 2.72 2.273v-21.525c-.068-1.338-1.22-2.475-2.648-2.475l-16.767.003c-1.427 0-2.585 1.139-2.585 2.477v16.24c0 1.411 1.156 2.476 2.58 2.476zm10.548-15.513-.033.012.012-.012zm-7.631 1.269c1.833-1.334 3.532-1.27 3.532-1.27l.137.135c-2.243.535-3.26 1.537-3.26 1.537s.272-.133.747-.336c3.021-1.188 6.32-1.102 9.374.402 0 0-1.019-.937-3.124-1.537l.186-.183c.291.001 1.831.055 3.479 1.26 0 0 1.844 3.15 1.844 7.02-.061-.074-1.144 1.666-3.931 1.726 0 0-.472-.534-.808-1 1.63-.468 2.24-1.404 2.24-1.404-.535.337-1.023.537-1.419.737-.609.268-1.219.4-1.828.535-2.884.468-4.503-.315-6.033-.936l-.523-.266s.609.936 2.174 1.404c-.411.469-.818 1.002-.818 1.002-2.786-.066-3.802-1.806-3.802-1.806 0-3.876 1.833-7.02 1.833-7.02z" />
      <path d="m14.308 12.771c.711 0 1.29-.6 1.29-1.34 0-.735-.576-1.335-1.29-1.335v.003c-.708 0-1.288.598-1.29 1.338 0 .734.579 1.334 1.29 1.334z" />
      <path d="m9.69 12.771c.711 0 1.29-.6 1.29-1.34 0-.735-.575-1.335-1.286-1.335l-.004.003c-.711 0-1.29.598-1.29 1.338 0 .734.579 1.334 1.29 1.334z" />
    </SvgIcon>
  );
}

// TODO - This SVG ain't working. Fix it!
function PatreonIcon() {
  <SvgIcon>
    <path d="m0 1.25v21.5c0 .414.336.75.75.75h3.955c.414 0 .75-.336.75-.75v-21.5c0-.414-.336-.75-.75-.75h-3.955c-.414 0-.75.336-.75.75zm1.5.75h2.455v20h-2.455z" />
    <path d="m15.172.5c-4.882 0-8.854 3.957-8.854 8.82 0 4.852 3.972 8.799 8.854 8.799 4.868 0 8.828-3.948 8.828-8.799 0-4.863-3.96-8.82-8.828-8.82zm0 16.119c-4.055 0-7.354-3.274-7.354-7.299 0-4.036 3.299-7.32 7.354-7.32 4.041 0 7.328 3.284 7.328 7.32 0 4.024-3.287 7.299-7.328 7.299z" />
  </SvgIcon>;
}

export default function Hero() {
  return (
    <Header>
      <HeroVideo
        autoPlay
        muted
        loop
        id="chessPiecesVideo"
        src="/videos/Dominoes_W_Hand_1.mp4"
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
              startIcon={DiscordIcon()}
            >
              Discord
            </CyanButton>
            <YellowButton
              variant="contained"
              color="secondary"
              href="https://www.patreon.com/AroundTheTableVR?fan_landing=true"
              startIcon={PatreonIcon()}
            >
              Patreon
            </YellowButton>
          </ButtonGroup>
        </FlexWrapper>
      </StyledContainer>
    </Header>
  );
}
