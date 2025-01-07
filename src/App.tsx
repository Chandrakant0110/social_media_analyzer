import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout";
import MemberPage from "./MemberPage";
import HomePage from "./HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/members" element={<MemberPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
