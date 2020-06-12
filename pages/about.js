import Typography from '@material-ui/core/Typography';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main>
        <Typography variant="h1">About Us</Typography>
        <Link href="/">home</Link>
      </main>
    </>
  );
}
