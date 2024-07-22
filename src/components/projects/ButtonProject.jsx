import { Button } from "@mui/material";

export const ButtonProject = ({ children, ...props }) => {
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

export const ButtonProject2 = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      variant="outlined"
      sx={{
        mr: "1rem",
        color: "#000",
        borderColor: "#000",
        "&:hover": { borderColor: "#005C53", color: "#005C53" },
      }}
    >
      {children}
    </Button>
  );
};
