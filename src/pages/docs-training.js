import * as React from "react";
import '../pages/style.css';
// Component imports
import { Nav } from "../components/homepage/Navbar";
import { Footer } from "../components/homepage/Footer";
import { DocTrainingContent } from "../components/nav-tabs/DocTraining";

const DocsTrainingPage = () => {
    return (
        <main>
            <Nav />
            <DocTrainingContent />
            <Footer />
        </main>
    )
}

export default DocsTrainingPage;
