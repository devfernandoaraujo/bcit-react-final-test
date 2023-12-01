 import { Routes, Route, Outlet, Link } from "react-router-dom";
 import HomePage from "./pages/Home";
 import NoMatchPage from "./pages/NoMatch";
 import AboutPage from "./pages/About";
 import Layout from "./layout/Layout";
  

function App() { 
  return (
    <div>  
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="dashboard" element={<HomePage />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatchPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App
