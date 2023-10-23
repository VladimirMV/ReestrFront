import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import  {ContactForm}  from 'components/ContactForm/ContactForm';
import  ContactList  from 'components/ContactList/ContactList';
import  Filter  from 'components/Filter/Filter';
import { Section } from 'components/Section/Section';
import { AddMembers } from 'components/AddMembers/AddMembers';
import { customStylesFonContacts } from 'styles/fonStyle';
const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#d7eef1',
    },
    secondary: {
      main: '#d4bff9',
    },
  },
});


 
const Contacts = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        component="main"
        style={customStylesFonContacts }
        sx={{
          backgroundRepeat: 'no-repeat',
          backgroundColor: t =>
            t.palette.mode === 'light'
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <CssBaseline />

        <Grid
          item
          xs={12}
          sm={9}
          md={10}
          component={Paper}
          elevation={24}
          square
          sx={{
            height: '100%',
            background: '#f1f1f1',
            backdropFilter: 'blur(7.5px)',
          }}
        >
          <Box
            sx={{
              my: 10,
              mx: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Grid container spacing={6}>
              <Section title="Members">
                {/* <ContactForm /> */}
                {/* <Title title="Members" /> */}

                <Filter />
                <ContactList />
                {/* <AddMembers /> */}
              </Section>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={false} sm={8} md={9} />
      </Grid>
    </ThemeProvider>
  );
};

export default Contacts;
