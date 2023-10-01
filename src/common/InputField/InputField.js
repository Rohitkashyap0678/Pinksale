import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const InputField = ({ placeholder }) => {
  return (
    <Box
      sx={{
        maxWidth: "100%",
      }}
    >
      <TextField placeholder={placeholder} size="small" fullWidth id="fullWidth" />
    </Box>
  );
};

export default InputField;
