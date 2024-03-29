import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import  ContactList  from 'components/ContactList/ContactList';
import  Filter  from 'components/Filter/Filter';
import { Section } from 'components/Section/Section';
import { useAuth } from 'hooks/useAuth';
import { customStylesFonContacts } from 'styles/fonStyle';
const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#cff9ff',
    },
    secondary: {
      main: '#d4bff9',
    },
  },
});


 
const Contacts = () => {
  const { user } = useAuth();
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        component="main"
        style={customStylesFonContacts }
        sx={{
          // height: '100vh',
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
          sm={12}
          md={12}
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
              my: 8,
              mx: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Grid container spacing={2}>
            
              <Section title="Members"> 
              {user.status === 'admin' &&      
                <Filter />
                }
                <ContactList />
              </Section>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={false} sm={12} md={12} />
      </Grid>
    </ThemeProvider>
  );
};

export default Contacts;
