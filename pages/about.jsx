import { Container, Typography } from '@material-ui/core';
import Link from 'next/link';

export default function Home() {
  return (
    <Container>
      <Typography variant="h3">About Us</Typography>
      <Link href="/">home</Link>
    </Container>
  );
}
