// File: LoginPage.jsx

import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Divider,
  InputAdornment,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #f0f2f5, #e0e0e0)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
      }}
    >
      <Container maxWidth="xs">
        <Box
          sx={{
            backgroundColor: '#fff',
            borderRadius: 2,
            boxShadow: 3,
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Typography variant="h5" fontWeight="bold" textAlign="center">
            WELCOME BACK!
          </Typography>
          <Typography variant="body2" textAlign="center" color="text.secondary">
            Better jobs are waiting. Sign in and find your next move.
          </Typography>

          <TextField
            fullWidth
            label="Email Address"
            variant="outlined"
            size="small"
            type="email"
          />
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            size="small"
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword((prev) => !prev)}
                    edge="end"
                    size="small"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 1 }}
            onClick={() => alert('Logged in!')}
          >
            Login
          </Button>

          <Typography
            variant="body2"
            textAlign="center"
            sx={{ mt: 1, cursor: 'pointer' }}
          >
            Forgot Password?
          </Typography>

          <Divider sx={{ my: 2 }}>or</Divider>

          <Button
            variant="outlined"
            fullWidth
            startIcon={
              <img
                src="https://www.google.com/favicon.ico"
                alt="Google"
                width={20}
              />
            }
          >
            Sign in with Google
          </Button>

          <Typography variant="body2" textAlign="center" sx={{ mt: 2 }}>
            Don&apos;t have an account?{' '}
            <a href="/signup" style={{ color: '#6851FF', textDecoration: 'none' }}>
              Join Now
            </a>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
