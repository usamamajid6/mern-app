import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "./hooks";
import { fetchPosts } from "./store/FetchPosts";
import "bootstrap/dist/css/bootstrap.min.css";
import { Typography } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Search from "./pages/Search";

function App() {
  const posts = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div className="text-center mt-5">
      <Typography variant="h3" gutterBottom>
        Cars Database
      </Typography>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="add" element={<Add />} />
          <Route path="search" element={<Search />} />
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
