import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Home = () => {
  let navigate = useNavigate();

  return (
    <div>
      <div className="mt-2">
        <Button
          className="w-25"
          variant="outlined"
          onClick={() => {
            navigate("/add");
          }}
        >
          Add Car
        </Button>
      </div>
      <div className="mt-2">
        <Button
          className="w-25"
          variant="outlined"
          onClick={() => {
            navigate("/search");
          }}
        >
          Search Car
        </Button>
      </div>
    </div>
  );
};

export default Home;
