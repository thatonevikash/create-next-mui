"use client";

import { useQuery } from "@tanstack/react-query";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

// ---------------------------------------------------------------

async function fetchUser() {
  const res = await fetch("https://api.github.com/users/tanstack");
  return res.json();
}

export function ProfileView() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
  });

  if (isLoading) return <Box>Loading...</Box>;
  if (error)
    return (
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        An error occurred: {error.message}
      </Typography>
    );

  return (
    <Box>
      <Container maxWidth="md">
        <Stack sx={{ mt: 5, gap: 2 }}>
          <Typography variant="h1">{data.name}</Typography>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            {data.bio}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
