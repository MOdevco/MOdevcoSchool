import {
  createStyles,
  Image,
  Container,
  Title,
  Text,
  Button,
  SimpleGrid,
  rem,
} from '@mantine/core';
import { notFound} from '../assets'
import { Link } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: rem(80),
    paddingBottom: rem(80),
  },

  title: {
    fontWeight: 900,
    fontSize: rem(34),
    marginBottom: theme.spacing.md,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(32),
    },
  },

  control: {
    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },

  mobileImage: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  desktopImage: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },
}));

const PageNotFound = () => {
  const { classes } = useStyles();

  return (
    <Box bg={'#0A1624'} w={'100%'} >

    <Container style={{minHeight: '100vh' , flexWrap: 'wrap-reverse'}} pt={{base: '300px' , xl: '400px'}} className={classes.root}>
      <SimpleGrid spacing={80} cols={2}  breakpoints={[{ maxWidth: 'sm', cols: 1, spacing: 40 }]}>
        <Image className={classes.mobileImage} />
        <div>
          <Title className={classes.title}>Nimadir noto‘g‘ri...</Title>
          <Text color="dimmed" size="lg">
          Siz ochmoqchi bo'lgan sahifa mavjud emas. Siz manzilni yoki manzilni noto'g'ri kiritgan bo'lishingiz mumkin
          sahifa boshqa URL manziliga ko'chirildi. Agar buni xato deb hisoblasangiz, qo'llab-quvvatlash xizmatiga murojaat qiling.
          </Text>
          <Button variant="outline" size="md" mt="xl" className={classes.control}>
            <Link to="/"><ArrowForwardIcon mr={'5px'} /> Bosh sahifaga qayting</Link>
            
          </Button>
        </div>
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>

          <Image src={notFound}  />
        </Box>
      </SimpleGrid>
    </Container>
    </Box>
  );
}


export default PageNotFound
