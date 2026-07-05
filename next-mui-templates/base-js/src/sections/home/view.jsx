"use client";

import Image from "next/image";

import Box from "node_modules/@mui/material/Box";
import Link from "node_modules/@mui/material/Link";
import Paper from "node_modules/@mui/material/Paper";
import Stack from "node_modules/@mui/material/Stack";
import Button from "node_modules/@mui/material/Button";
import SvgIcon from "node_modules/@mui/material/SvgIcon";
import Container from "node_modules/@mui/material/Container";
import Typography from "node_modules/@mui/material/Typography";
import { alpha as hexAlpha } from "node_modules/@mui/material/styles";

import { RouterLink } from "@/lib/router-link";

// ---------------------------------------------------------------

export function HomeView() {
  return (
    <Box>
      <Container maxWidth="md">
        <Stack
          sx={{
            minHeight: "100vh",
            alignItems: "center",
            justifyContent: "center",
          }}
          spacing={8}
        >
          <Stack direction="row" sx={{ alignItems: "center" }} spacing={8}>
            <Box>
              <Image
                width={180}
                height={180}
                alt="nextjs"
                src="/next.svg"
                loading="eager"
              />
            </Box>

            <Box>
              <SvgIcon
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                sx={{ width: 80, height: 80 }}
                className="lucide lucide-plus-icon lucide-plus"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </SvgIcon>
            </Box>

            <Box>
              <Image
                width={150}
                height={150}
                alt="nextjs"
                src="/mui.svg"
                loading="eager"
              />
            </Box>
          </Stack>

          <Stack spacing={4} sx={{ alignItems: "center" }}>
            <Stack direction="row" spacing={2}>
              <Button
                variant="outlined"
                LinkComponent={RouterLink}
                href="https://github.com/thatonevikash/create-next-mui/"
                target="_blank"
                sx={(theme) => ({
                  px: 1.5,
                  borderRadius: 4,
                  border: `1px solid ${theme.palette.divider}`,
                })}
              >
                <SvgIcon
                  fill="none"
                  viewBox="0 0 200 200"
                  sx={{ width: 44, height: 44 }}
                >
                  <path
                    fill="white"
                    d="M100 20C55.82 20 20 55.82 20 100C20 137.487 45.8133 168.853 80.6133 177.533C80.24 176.453 80 175.2 80 173.647V159.973C76.7533 159.973 71.3133 159.973 69.9467 159.973C64.4733 159.973 59.6067 157.62 57.2467 153.247C54.6267 148.387 54.1733 140.953 47.68 136.407C45.7533 134.893 47.22 133.167 49.44 133.4C53.54 134.56 56.94 137.373 60.14 141.547C63.3267 145.727 64.8267 146.673 70.78 146.673C73.6667 146.673 77.9867 146.507 82.0533 145.867C84.24 140.313 88.02 135.2 92.64 132.787C66 130.047 53.2867 116.793 53.2867 98.8C53.2867 91.0534 56.5867 83.56 62.1933 77.2467C60.3533 70.98 58.04 58.2 62.9 53.3333C74.8867 53.3333 82.1333 61.1067 83.8733 63.2067C89.8467 61.16 96.4067 60 103.3 60C110.207 60 116.793 61.16 122.78 63.22C124.5 61.1334 131.753 53.3333 143.767 53.3333C148.647 58.2067 146.307 71.04 144.447 77.2934C150.02 83.5934 153.3 91.0667 153.3 98.8C153.3 116.78 140.607 130.027 114.007 132.78C121.327 136.6 126.667 147.333 126.667 155.42V173.647C126.667 174.34 126.513 174.84 126.433 175.433C157.607 164.507 180 134.907 180 100C180 55.82 144.18 20 100 20Z"
                  />
                </SvgIcon>
              </Button>
              <Paper variant="outlined" sx={{ px: 4, py: 2, borderRadius: 4 }}>
                <Typography
                  variant="h5"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.2,
                  }}
                >
                  <Box component="span" sx={{ color: "text.secondary" }}>
                    npx
                  </Box>

                  <Box component="span">create-next-mui</Box>

                  <Box
                    sx={(theme) => ({
                      p: 1,
                      ml: 1,
                      borderRadius: 2,
                      cursor: "pointer",
                      bgcolor: hexAlpha(theme.palette.grey["800"], 0.2),
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    })}
                  >
                    <SvgIcon
                      strokeWidth="2"
                      stroke="#dadada"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      sx={{ fill: "transparent" }}
                      className="lucide lucide-copy-icon lucide-copy"
                    >
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                    </SvgIcon>
                  </Box>
                </Typography>
              </Paper>
            </Stack>

            <Typography variant="caption" sx={{ color: "text.disabled" }}>
              The fastest way to scaffold&nbsp;
              <Link
                component={RouterLink}
                href="https://nextjs.org/"
                target="_blank"
              >
                Nextjs
              </Link>
              &nbsp;+&nbsp;
              <Link
                component={RouterLink}
                href="https://mui.com/"
                target="_blank"
              >
                MUI
              </Link>
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
