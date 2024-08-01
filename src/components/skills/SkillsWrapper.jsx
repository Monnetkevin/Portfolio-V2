import { Box, Typography, List, ListItem } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const SkillsWrapper = ({ skills, title }) => {
  const theme = useTheme();

  return (
    <Box component="div" sx={{ m: { md: "2rem" } }}>
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
        {skills.map((skill, index) => (
          <ListItem key={index} sx={{ display: "flex" }}>
            <Box component="div" sx={{ display: "flex", alignItems: "center" }}>
              <img src={skill.svg} alt={skill.name} width="40" height="35" />
            </Box>
            <Typography variant="h6" sx={{ ml: 3 }}>
              {skill.name}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
export default SkillsWrapper;
