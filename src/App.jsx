import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar";
import Tech from "./pages/Tech";
import Home from "./pages/Home";
import WebDTeam from "./pages/WebDTeam";
import SplashScreen from "./Components/SplashScreen/SplashScreen";

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
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
