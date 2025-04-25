import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import TermsAndConditions from "./pages/Legal/TermsAndConditions";
import PrivacyPolicy from "./pages/Legal/PrivacyPolicy";
import GreatMinds from "./pages/Products/GreatMinds";
import RequestEstimation from "./pages/RequestEstimation";
import NotFound from "./pages/Error/NotFound";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="products/greatminds" element={<GreatMinds />} />
            <Route path="request-estimation" element={<RequestEstimation />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
