import * as React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const CheckBox = ({ label }) => {
  const [checked, setChecked] = React.useState([true, false]);

  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const children = (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <FormControlLabel
        label={label}
        className="!text-sm !ml-[2px] md:!ml-0 !font-normal"
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
    </Box>
  );

  return <Box>{children}</Box>;
};
export default CheckBox;
