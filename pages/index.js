import { Button, Container, Typography } from '@material-ui/core';
import Link from 'next/link';
import styled from 'styled-components';
import Hero from '../components/Hero';

const PageStyles = styled.div`
  ${({ theme }) => `
    background-color: ${theme.bgColor};
    color: ${theme.textColor};
  `}
  min-height: 100vh;
  contain: content;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default function Home() {
  return (
    <PageStyles>
      <Hero />
    </PageStyles>
  );
}
