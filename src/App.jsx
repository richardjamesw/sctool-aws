import "@aws-amplify/ui-react/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutPage from "./views/LayoutPage";
import LandingPage from "./views/landing/LandingPage";
import AccountPage from "./views/account/AccountPage";
import NoPage from "./views/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<LandingPage />}/>
          <Route exact path="account" element={<AccountPage />} />
          <Route exact path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
