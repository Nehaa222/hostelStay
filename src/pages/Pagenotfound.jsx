import React from "react";
import Alert from "@mui/material/Alert";

const Pagenotfound = () => {
  return (
    <div className="h-[100vh] w-[100%] flex justify-center items-center">
      <Alert severity="error">
        This is an error Alert. The route defined is not available.
      </Alert>
    </div>
  );
};

export default Pagenotfound;
