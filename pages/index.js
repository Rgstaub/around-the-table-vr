import { Button, Container, Typography } from '@material-ui/core';
import Link from 'next/link';
import styled from 'styled-components';

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
      <Container>
        <Typography variant="h3">Homepage</Typography>
        <Link href="/about">
          <Button variant="contained" color="primary">
            <a>About</a>
          </Button>
        </Link>
        <Typography variant="body1" paragraph>
          Lucas ipsum dolor sit amet iktotchi jade quee utapau letaki lars
          kaleesh mon bardan derlin. Naboo rakata thul dor hutta chistori. Huk
          elom tython darpa teneniel nahdar boz winter. Ti doldur lama lars
          gizka dexter. Ben qui-gon anakin tatooine owen moor antemeridian
          boltrunians. Vima-da-boda ree-yees hutt twi'lek. Greeata ranat kohl
          salacious boz. Carondian utai dodonna abregado rahm illum aurra. Ooryl
          di illum darth whiphid. Tono alderaan bren gonk. Dak dooku tharen
          thrawn. Fisto derlin boz tono.
        </Typography>
        <Typography variant="body1" paragraph>
          Moore greedo calamari breha plo kurtzen veknoid mandalorians. Psadan
          tib voxyn felth sabé calamari caedus. Fel nassau nelvaanian
          antemeridian. Zannah vuffi ysanne codru-ji seerdon. Falleen lytton
          thrawn haako nagai lars polis. Sesswenna yané squib lannik rendar
          colton mandell. Chewbacca winter omwati subterrel raymus anx raynar.
          Klaatu binks wyl askajian alderaan. Hissa halla moff lars. Tarpals
          haako jarael koon luuke jerjerrod boba elomin. Greeata endocott gorith
          iktotchi chistori vos thrawn gorax boba.
        </Typography>
        <Typography variant="body1" paragraph>
          Ev-9d9 drach'nam malastare daala. Barriss zhell calrissian wedge kir
          skywalker var borsk. Skirata kamino cerea organa hapan arkanian
          sesswenna. Saffa kamino anthos amedda skywalker. Shistavanen zam lars
          jagged billaba tharen ima-gun elom kir. Vivenda nadd veers jinn vel
          darth gorog sidious. Zekk felth yoda antilles mara maarek kasan.
          Anakin veers lepi raymus binks latter. Dorvalla quadrinaros antilles
          bothawui bel lars crynyd. Ti dressellian k-3po sulorine dodonna
          evazan. Lannik fett boz greedo moor kael gand.
        </Typography>
        <Typography variant="body1" paragraph>
          Borvo ansuroer kushiban tarpals er'kit coruscant t'landa haruun
          jarael. Gonk -1b darth darth antilles kor-uj. Qrygg gev chewbacca
          tahiri jade desann iridonian rattatak jubnuk. Cade auril djo ponda
          darth. Max hutt droid omwati plagueis antilles stele lars. Mayagil
          tiin oswaft calamari. Nelvaanian opress sesswenna vedder luminara.
          Mace senesca boba qu salacious carondian calrissian. Omwati sebulba
          mon nikto. Huk nosaurian wedge k-3po bossk wharl. Pavan rugor bren
          durge nar rishi elom. Gonk allana atrivis zam skywalker gev evazan
          cody.
        </Typography>
        <Typography variant="body1" paragraph>
          Jawa darklighter jax yaka togorian. Karrde gilad zuckuss thisspiasian
          stele. Organa boss tharen c'baoth whaladon wicket kyle psadan. Carlist
          dooku chistori mimbanite. Hutt anzati isard sly elomin mod piell vader
          piett. Dressellian darth bib mon ralter mygeeto bardan dak. Kasan omas
          rishii wyl askajian cody vilim dormé. Doldur firrerreo joh doldur rex
          darpa jamillia er'kit. Dorvalla aqualish squib leia jinn maximilian.
          Moddell needa rieekan -1b sabé kir cad. Shadda mon seerdon paaerduag
          jettster chadra-fan moff hoth jabba.
        </Typography>
      </Container>
    </PageStyles>
  );
}
