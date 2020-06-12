import Typography from '@material-ui/core/Typography';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Typography variant="h1">Around the Table</Typography>
      <Link href="/about">about</Link>
    </main>
  );
}
