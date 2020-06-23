import { Button, Container, Typography } from '@material-ui/core';
import Link from 'next/link';
import styled from 'styled-components';
import Hero from '../components/Hero';
import ImageAndTextSection from '../components/ImageAndTextSection';
import Footer from '../components/Footer';
import Content from '../utils/Content';
import patrons from '../utils/patrons';

const PageStyles = styled.div`
  ${({ theme }) => `
    background-color: ${theme.bgColor};
    color: ${theme.textColor};
  `}
  min-height: 100vh;
  contain: content;

  a:not(.show-link-styles) {
    color: inherit;
    text-decoration: none;
  }

  p {
    font-weight: 300;
    line-height: 2;
    text-align: justify;
  }
`;

const OtherStuff = styled.section`
  height: 100vh;
  ${({ alignment }) => {
    if (alignment === 'right') {
      return 'background-image: linear-gradient(#222222, #111111);';
    }
    return 'background-image: linear-gradient(#111111, #222222);';
  }}
  @media (min-width: 769px) {
    height: auto;
  }
`;

const H2 = styled(Typography)`
  font-size: 32px !important;
  text-align: center;
  ${({ color, mb }) => `
    text-shadow: 0px 0px 5px ${color};
    margin-bottom: ${mb || '20px'} !important;
  `}
  @media (min-width: 769px) {
    text-align: center;
  }
`;

const NarrowContainer = styled(Container)`
  height: 100vh;
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 769px) {
    max-width: 50% !important;
    height: auto;
    padding: 120px 0;
  }
`;

const OtherParagraph = styled(Typography)`
  margin-bottom: 30px !important;
`;

const Li = styled(Typography)`
  list-style-type: none;
  width: 50%;
`;

const Ul = styled.ul`
  display: flex;
  flex-flow: row wrap;
  text-align: center;
  padding-inline-start: 0;
`;

export default function Home() {
  console.log({ Content });
  return (
    <PageStyles>
      <Hero />
      <ImageAndTextSection
        heading={Content.multiplayer.heading}
        body={Content.multiplayer.body}
        image={Content.multiplayer.img}
      />
      <ImageAndTextSection
        alignment="right"
        heading={Content.community.heading}
        body={Content.community.body}
        image={Content.community.img}
      />
      <ImageAndTextSection
        heading={Content.physics.heading}
        body={Content.physics.body}
        image={Content.physics.img}
      />
      <OtherStuff alignment="right">
        <NarrowContainer>
          <H2 color="yellow" variant="h2">
            Modding, More Games, and Platforms
          </H2>
          <OtherParagraph variant="body2">
            Once the core game is developed, the community will have a visual
            scripting platform (with LOTS of tutorials) to create mods and
            import them to flourish the board game genre with their own
            creations, they'll also be able to publish it to a community market
            place to buy/sell mods or give them away for free.
          </OtherParagraph>

          <OtherParagraph variant="body2">
            Uno, BS, Catan, Jenga, Monopoly, Warhammer, D&D, etc the inclusions
            are going to be endless! As the game progresses in development, I
            will be increasing the repository of games to include different
            genres.
          </OtherParagraph>

          <OtherParagraph variant="body2">
            I would like ATT to be truly universal, and have cross-platform
            support (SteamVR, Oculus, etc) to accommodate all VR board game
            lovers! Currently, all in-game footage is from the Oculus Quest.
          </OtherParagraph>
        </NarrowContainer>
      </OtherStuff>
      <OtherStuff>
        <NarrowContainer>
          <H2 color="cyan">How do I get involded?</H2>
          <OtherParagraph variant="body2">
            Join the{' '}
            <a className="show-link-styles" href="https://discord.gg/C7PpsEk">
              Discord
            </a>
            , please! I'd love to hear your ideas and implement them into Around
            The Table VR, and as mentioned above, to make ATT truly
            cross-platform we'll need tons of testers with different headsets
            and platforms.
          </OtherParagraph>
          <OtherParagraph variant="body2">
            In addition to this, I humbly ask you to{' '}
            <a
              className="show-link-styles"
              href="https://www.patreon.com/AroundTheTableVR?fan_landing=true"
            >
              become a Patron
            </a>{' '}
            and support ATT. With all the lofty goals I've listed above in
            trying to make this game a reality for you all, and as a developer
            working out of my one-bedroom, a small monthly pledge would go a
            long way for me!
          </OtherParagraph>
        </NarrowContainer>
      </OtherStuff>
      <OtherStuff alignment="right">
        <NarrowContainer>
          <H2 color="yellow" variant="h2">
            Thank you to our generous patrons:
          </H2>
          <Ul>
            {patrons.map((patron, i) => (
              <Li variant="body1" component="li" key={i}>
                {patron}
              </Li>
            ))}
          </Ul>
        </NarrowContainer>
      </OtherStuff>
    </PageStyles>
  );
}
