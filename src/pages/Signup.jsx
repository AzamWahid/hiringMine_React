import React from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Divider,
  Stack,
  IconButton,
  InputAdornment
} from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import GoogleIcon from '@mui/icons-material/Google';

export default function Signup() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 5 }}>
      <Container maxWidth="sm">
        {/* Logo */}


        {/* Title */}
        <Typography variant="h5" align="center" gutterBottom>
          LET’S GET STARTED
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" mb={3}>
          Create an account to get recommended jobs that match your resume and apply to multiple jobs in seconds!
        </Typography>

        {/* Form */}
        <Box component="form">
          <Stack spacing={2}>
            <TextField fullWidth placeholder="User Name" size="small" />
            <TextField fullWidth placeholder="First Name" size="small" />
            <TextField fullWidth placeholder="Last Name" size="small" />
            <TextField fullWidth placeholder="Enter Email Address" size="small" />
            <TextField
              fullWidth
              placeholder="Enter Password"
              type="password"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end">
                      <VisibilityOffIcon />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <TextField
              fullWidth
              placeholder="Confirm Password"
              type="password"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end">
                      <VisibilityOffIcon />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </Stack>

          {/* Agreement */}
          <Typography variant="body2" color="text.secondary" mt={2}>
            By clicking Agree & Join, you agree to the Hiring Mine User Agreement, Privacy Policy, and Cookie Policy.
          </Typography>

          {/* Submit Button */}
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Agree & Join
          </Button>

          {/* Divider */}
          <Divider sx={{ my: 3 }}>or</Divider>

          {/* Google Sign In */}
          <Button
            fullWidth
            variant="outlined"
            startIcon={<GoogleIcon />}
          >
            Sign in with Google
          </Button>
        </Box>

        {/* Footer */}
        <Typography variant="body2" align="center" mt={4}>
          Already on Hiring Mine?{' '}
          <a href="/login" style={{ color: '#6851ff', textDecoration: 'none' }}>Login</a>
        </Typography>
      </Container>
    </Box>
  );
}
