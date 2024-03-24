import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import DescriptionPage from "./Components/DescriptionPage";
const App = () => {
  const [cardDesc, setCardDesc] = useState([]);

  return (
    <Routes>
      <Route path="/" element={<Home setCardDesc={setCardDesc} />} />
      <Route path="/desc" element={<DescriptionPage cardDesc={cardDesc} />} />
    </Routes>
  );
};

export default App;