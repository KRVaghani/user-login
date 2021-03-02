import React, { useState, useEffect  } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const [firstName, setFirstName] = useState ('');
  const [lastName, setLastName] = useState ('');
  const [password, setPassword] = useState('');
  const [user,setUser] = useState('');

  const classes = useStyles();  
  

  useEffect(() => {
    // Update the document title using the browser API
    // let fn = firstName.substring(0,2);
    // let ln = lastName.substring(lastName.length - 2)
    // let full = fn.concat(ln);
    // let val = Math.floor(1000 + Math.random() * 9000);
    // let pwd = full.concat(val);
    // alert(pwd);
    
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="user"
                label="Username"
                name="user"
                autoComplete="user"
                value={user}
                onChange={e => setUser(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="cpassword"
                label="Confirm Password"
                id="password"
                autoComplete="confirm-password"
                value={password}
                

              />
            </Grid>
            
          </Grid>
          <Button
            id = 'btn'
            type="Button"
            fullWidth
            variant="contained"
            color="default"
            className={classes.submit}
            onClick={() => setPassword(firstName.substring(0,2) + lastName.substring(lastName.length - 2) + Math.floor(1000 + Math.random() * 9000))}
            disabled={!firstName || !lastName || !user}
          >
            Generate Password
          </Button>
          
          <Button
            id='btn'
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={!firstName || !lastName || !user}
          >
            Sign Up
          </Button>
          
        </form>
      </div>
   
    </Container>
  );
}
