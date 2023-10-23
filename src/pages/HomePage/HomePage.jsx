import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { Section } from 'components/Section/Section';
import { customStylesFonHome } from 'styles/fonStyle';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Advertising } from 'components/Advertising/Advertising';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#3f47cc',
    },
    secondary: {
      main: '#dee2ff',
    },
  },
});

const Home = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        component="main"
        style={customStylesFonHome }
        sx={{
          height: '100vh',
          backgroundRepeat: 'no-repeat',
          backgroundColor: t =>
            t.palette.mode === 'light'
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <CssBaseline />
        <Grid item xs={false} sm={6} md={7} />
        <Grid
          item
          xs={12}
          sm={6}
          md={5}
          component={Paper}
          elevation={24}
          square
          sx={{
            height: '100vh',
            background: '#ffffffb0',
            backdropFilter: 'blur(7.5px)',
          }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Grid container spacing={2}>
              <Section title=" Реестр ДОВІРА.КОМ">
                <Advertising
                  text="Добро пожаловать на главную страницу Реестра членов ТОВ «ДОВІРА.КОМ» на нашей платформе! Этот   ресурс предоставляет возможность сохранять и управлять данными о пользователях, а также их финансовыми балансами."
                />
              </Section>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Home;

// This code imports several components and modules from the Material UI library. 
// It then defines a default theme for the application and creates a Home component that includes 
// a Material UI Grid and Paper component.The Grid component is used to structure the main layout 
// of the page, with the background image and other styling settings defined as properties.
// The Paper component is used to display a white panel on the right side of the page.Inside this panel,
// there is a box with some text and a Section component with a Advertising component as its child.Finally, 
// the Home component is exported as the default export of this file.