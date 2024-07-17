import { Box, Typography, List, ListItem } from "@mui/material";

const SkillsWrapper = ({ skills, title }) => {
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{ mt: 4, mb: 2, fontWeight: "bold", color: "#fff" }}
      >
        {title}
      </Typography>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          color: "#fff",
        }}
      >
        {skills.map(({ name, icon }) => (
          <ListItem key={name} sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {icon}
              <Typography variant="h6" sx={{ ml: 3 }}>
                {name}
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
export default SkillsWrapper;
