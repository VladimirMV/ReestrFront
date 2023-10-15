import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import  {ContactForm}  from 'components/ContactForm/ContactForm';
import  ContactList  from 'components/ContactList/ContactList';
import  Filter  from 'components/Filter/Filter';
import { Section } from 'components/Section/Section';
import { Title } from 'components/Title/Title';
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
          md={9}
          component={Paper}
          elevation={24}
          square
          sx={{
            height: '100%',
            background: '#d7eef1',
            backdropFilter: 'blur(7.5px)',
          }}
        >
          <Box
            sx={{
              my: 8,
              mx: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Grid container spacing={4}>
              <Section title="Registry">
                <ContactForm />
                <Title title="Members" />
                <Filter />
                <ContactList />
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
// This code imports several components from the Material - UI library, as well as
// custom components from the 'components/' folder.A defaultTheme is created using the 
// createTheme function from Material - UI, which sets the primary and secondary colors for the app.

// The Contacts component defines a layout for the app, which includes a background image 
// and a main section containing a form for adding contacts, a list of contacts, and a filter for the list.

// The code returns the layout defined with Material - UI components, wrapped in the defaultTheme. 
// The exported Contacts component can then be used elsewhere in the app.