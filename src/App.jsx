import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar";
import Tech from "./pages/Tech";
import Home from "./pages/Home";
import WebDTeam from "./pages/WebDTeam";
import AllEvents from "./pages/AllEventsPage";
import SplashScreen from "./Components/SplashScreen/SplashScreen";
import Footer from "./Components/Footer/Footer";

function App() {
    const [showSplash, setShowSplash] = useState(true);

    if (showSplash) {
        return <SplashScreen onFinish={() => setShowSplash(false)} />;
    }

    return (
        <>
            <NavBar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tech" element={<Tech />} />
                    <Route path="/teams/tech/webDTeam" element={<WebDTeam />} />
                    <Route path="/allEvents" element={<AllEvents />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;
