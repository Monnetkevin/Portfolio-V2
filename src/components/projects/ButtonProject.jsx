import { Button } from "@mui/material";

const ButtonProject = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      variant="outlined"
      sx={{
        mb: 1,
        color: "#fff",
        borderColor: "#fff",
        "&:hover": { borderColor: "#DBF227", color: "#DBF227" },
      }}
    >
      {children}
    </Button>
  );
};
export default ButtonProject;
