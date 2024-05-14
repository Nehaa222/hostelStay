import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useAuth, login } from "../providers/authProvider";
import { Link } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize navigate hook

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const resp = await fetch("https://hostelstay.onrender.com/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "",
          username: email,
          password: password,
          scope: "",
          client_id: "",
          client_secret: "",
        }),
      });

      if (!resp.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await resp.json();
      login(data.access_token);
      navigate("/hostel-list"); // Navigate to homepage after successful login
    } catch (error) {
      setError("Invalid credentials");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Username"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          {error && (
            <Typography variant="body2" color="error" align="center">
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link
                to="/pagenotfound"
                variant="body2"
                className="text-[15px] hover:text-blue-800 hover:underline"
              >
                Forgot password?
              </Link>
            </Grid>
            <Grid item className="flex gap-[4px] text-[15px]">
              <p>Don't have an account?</p>
              <Link
                to="/signup"
                variant="body2"
                className="hover:text-blue-800 hover:underline"
              >
                Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* <Copyright sx={{ mt: 4, mb: 2 }} /> */}
    </Container>
  );
}

export default SignIn;
