import { useEffect, useState } from "react";
import { GlobalNavbar } from "@/Advitya26Components/Navbar";
import ParallaxBackground from "@/Advitya26Components/ParallaxBackground";
import CardMainSection from "@/Advitya26Components/CardAnimation/CardMainSection";
import AboutCard from "@/Advitya26Components/AboutCard";
import ChoosePathCard from "@/Advitya26Components/ChoosePathCard";
import Test from "@/Advitya26Components/Test";

import "@/Advitya26Components/AdvityaMain.css";

function Advitya() {
    // State to control navbar logo visibility - starts hidden, shows when rings fade
    const [showNavbarLogo, setShowNavbarLogo] = useState(false);

    useEffect(() => {
        const root = document.documentElement;
        root.classList.add("advitya-page");

        return () => {
            root.classList.remove("advitya-page");
        };
    }, []);

    return (
        <>
            <div className="fixed top-0 left-0 w-full h-[10vh] z-50">
                <GlobalNavbar showLogo={showNavbarLogo} />
            </div>
            <ParallaxBackground onRingsFadeStart={() => setShowNavbarLogo(true)} />

            <div className="relative z-10" style={{ marginTop: "-100vh" }}>
                {/* Space paralax background */}
                <div style={{ height: "100vh" }} />
                <CardMainSection
                    bgColor="transparent"
                    cardSize="2xl"
                    direction="horizontal"
                >
                    <AboutCard />
                    <ChoosePathCard />
                </CardMainSection>

                <section className="relative w-full bg-white">
                    <Test />
                </section>
            </div>
        </>
    );
}

export default Advitya;
