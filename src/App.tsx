import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { BackgroundElements } from "./components/BackgroundElements";
import { CustomCursor } from "./components/CustomCursor";
import MainLayout from "./MainLayout";
import MemberPage from "./pages/MemberPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <BackgroundElements />
        <CustomCursor />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/members" element={<MemberPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
