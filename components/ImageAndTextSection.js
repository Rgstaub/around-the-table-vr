import { Container, Typography } from '@material-ui/core';
import styled from 'styled-components';

const Section = styled.section`
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

const StyledContainer = styled(Container)``;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
  @media (min-width: 769px) {
    justify-content: space-between;
    padding: 120px 0;
    height: auto;
    ${({ alignment }) => {
      if (alignment === 'right') {
        return 'flex-direction: row-reverse;';
      }
      return 'flex-direction: row;';
    }}
  }
`;

const TextContent = styled.div`
  padding: 10px;
  order: 1;
  margin-bottom: 20px;
  @media (min-width: 769px) {
    width: 48%;
    order: 2;
    margin-bottom: 0;
  }
`;

const StyledVideo = styled.video`
  width: 100%;
  order: 2;
  transition: box-shadow 0.5s;
  ${({ color }) => {
    return `
      box-shadow: 0px 3px 15px ${color};
      &:hover {
        box-shadow: 0px 3px 20px ${color};
      }
    `;
  }}

  @media (min-width: 769px) {
    order: 1;
    width: 48%;
  }
`;

const H3 = styled(Typography)`
  font-size: 32px !important;
  font-weight: 200 !important;
  margin-bottom: 20px !important;
  text-align: center;
  ${({ color }) => `text-shadow: 0px 0px 5px ${color};`}
  @media (min-width: 769px) {
    text-align: left;
  }
`;

export default function ImageAndTextSection({ alignment, body, heading, src }) {
  const color = alignment === 'right' ? 'yellow' : 'cyan';
  return (
    <Section alignment={alignment}>
      <StyledContainer>
        <FlexWrapper alignment={alignment}>
          <StyledVideo
            autoPlay
            playsInline
            muted
            loop
            src={src}
            color={color}
            type="video/mp4"
          />
          <TextContent alignment={alignment}>
            <H3 variant="h3" color={color}>
              {heading}
            </H3>
            <Typography variant="body2">{body}</Typography>
          </TextContent>
        </FlexWrapper>
      </StyledContainer>
    </Section>
  );
}
