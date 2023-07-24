import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export default function Navbar() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        mb: 1,
      }}
    >
      <AppBar
        position="static"
        sx={{ bgcolor: "success.main", color: "success.contrastText" }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            LISTS
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
