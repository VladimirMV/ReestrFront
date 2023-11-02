import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/auth-operations';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { customStylesFonRegistration } from 'styles/fonStyle';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#608B38',
    },
  },
});

export default function Register() {
  const dispatch = useDispatch();
  const location = useLocation();
  const onSignUp = location.pathname === '/register';
  const [empty, setEmpty] = useState({ name: false, email: false });
  const [passwordValid, setPasswordValid] = useState({ password: false });
  const navigation = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const user = {
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
    };

    if (user.name === '') {
      setEmpty(prev => ({ ...prev, name: true }));
      return;
    }
    if (user.email === '') {
      setEmpty(prev => ({ ...prev, email: true }));
      return;
    }

    if (user.password.length < 7 && user.password === '') {
      setPasswordValid(prev => ({ ...prev, password: true }));
      return;
    }
    dispatch(registerUser(user));
    navigation ('/');
    const confirmationMessage =  'На ваш E-mail  отправлено письмо для  подтверждения адреса почты';
    window.confirm(confirmationMessage);
    window.location.reload();
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        component="main"
        style={customStylesFonRegistration }
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
            <Avatar sx={{ m: 1, bgcolor: 'primary.main', boxShadow: 3 }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography
              component="h1"
              variant="h5"
              sx={{
                color: '#fff',
                textShadow: '-1px -1px 1px #ffffff31, 1px 1px 1px #00000031',
              }}
            >
              SignUp
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    autoComplete="given-name"
                    name="name"
                    autoFocus
                    error={empty.name}
                    sx={{ boxShadow: 3 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    error={empty.email}
                    sx={{ boxShadow: 3 }}
                    helperText={
                      'Example of valid email address: qwerty1@example.com'
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    sx={{ boxShadow: 3 }}
                    //inputProps={{ minLength: 7 }}
                    error={passwordValid.length < 7}
                    onChange={e => setPasswordValid(e.target.value)}
                    helperText={'Password should contains at least 7 symbols'}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive  marketing promotions and updates via email."
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, boxShadow: 3 }}
                  >
                    Sign Up
                  </Button>
                </Grid>
              </Grid>

              <Grid container justifyContent="flex-end">
                <Grid item>
                  {onSignUp && (
                    <Link to={`/login`} variant="body2">
                      Already have an account? Sign in
                    </Link>
                  )}
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
// This code imports several elements from the Material - UI library, including
// Avatar, Button, TextField, FormControlLabel, Checkbox, Paper, Grid, Box, LockOutlinedIcon, Typography,
// createTheme, ThemeProvider, Link, useLocation, useDispatch, and useState.

// It defines a functional component named "Register" that handles user registration and includes a form
// with fields for name, email, and password.It also includes a checkbox for opting into email promotions 
// and updates, as well as a link to the login page.

// When the user submits the form, the component checks to ensure that the name and email fields are not empty,
// and that the password field contains at least seven characters.If any of these criteria are not met, the component 
// sets error states and prevents the form from being submitted.

// If the form is submitted successfully, the component triggers a Redux action to register the user using the provided information.

// Finally, the component renders a Material-UI Grid, Paper, Avatar, and other elements to create a standardized user interface for 
//the registration form.The appearance of the elements is defined using inline CSS styling.