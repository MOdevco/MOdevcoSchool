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
          <Title className={classes.title}>Something is not right...</Title>
          <Text color="dimmed" size="lg">
            Page you are trying to open does not exist. You may have mistyped the address, or the
            page has been moved to another URL. If you think this is an error contact support.
          </Text>
          <Button variant="outline" size="md" mt="xl" className={classes.control}>
            <Link to="/">Get back to home page</Link>
            
          </Button>
        </div>
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
          <Image src={notFound} width={'100%'} className={''} />
        </Box>
      </SimpleGrid>
    </Container>
    </Box>
  );
}


export default PageNotFound
