import { Box, Typography, List, ListItem } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const SkillsWrapper = ({ skills, title }) => {
  const theme = useTheme();

  return (
    <Box>
      <Typography
        variant="h3"
        sx={{
          mt: 4,
          mb: 2,
          fontWeight: "bold",
          color: theme.palette.text.primary,
        }}
      >
        {title}
      </Typography>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          color: theme.palette.text.primary,
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
