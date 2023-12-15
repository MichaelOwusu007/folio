
import Home from "./pages/HomePage";
import Blog from "./pages/BlogPage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
