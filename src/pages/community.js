import * as React from "react";
import '../pages/style.css';
// Component imports
import { Nav } from "../components/homepage/Navbar";
import { Footer } from "../components/homepage/Footer";
import { Button, Center } from '@mantine/core';

import { CommunityContent } from "../components/nav-tabs/CommunityPage";

const CommunityPage = () => {

    return (
        <main>
            <Nav />
            <CommunityContent />
            <Center py='md'>
                <a href="https://www.operate-first.cloud/community/README.html">
                    <Button color="dark">Open community cloud</Button>
                </a>
            </Center>
            <Footer />
        </main>
    )
}

export default CommunityPage;
