import React, { useState } from "react";

const useNotify = () => {
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("success");
  const handleClose = (event, reason) => {
    setOpen(false);
  };
  const changeSeverity = (text) => {
    setSeverity(text);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return { open, severity, handleClose, changeSeverity, handleOpen };
};

export default useNotify;
