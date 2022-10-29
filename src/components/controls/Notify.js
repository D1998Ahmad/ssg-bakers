import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";

const Notify = ({ open, severity, handleClose }) => {
  return (
    <Snackbar open={open} autoHideDuration={4000} onClose={(evt)=>handleClose(evt)}>
      <Alert onClose={(evt)=>handleClose(evt)} severity={severity} sx={{ width: "100%" }}>
        Thank you for your valuable feedback
      </Alert>
    </Snackbar>
  );
};

export default Notify;
