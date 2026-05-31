"use client";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { RouterLink } from "@/lib/router-link";

// ---------------------------------------------------------------

export function HomeView() {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack spacing={3} sx={{ alignItems: "center", textAlign: "center" }}>
          <Typography variant="h2" component="h1">
            Workspace Scaffolded Successfully!
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Next.js App Router + Modular MUI Theming System + Perfectionist
            Linting Rules are locked and loaded.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" color="primary" size="large">
              Explore Theme Configuration
            </Button>
            <Button
              size="large"
              color="secondary"
              variant="outlined"
              LinkComponent={RouterLink}
              href="/"
            >
              Read Documentation
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}
