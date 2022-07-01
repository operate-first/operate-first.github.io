import * as React from "react";
import '../pages/style.css';
// Component imports
import { Button, Center } from '@mantine/core';

import { CommunityContent } from "../components/nav-tabs/CommunityPage";
import { Layout } from "../components/Layout";

const CommunityPage = () => {

    return (
        <main>
            <Layout>
                <CommunityContent />
                <Center pb={40}>
                    <a href="https://www.operate-first.cloud/community/README.html">
                        <Button color="dark">Open community cloud</Button>
                    </a>
                </Center>
            </Layout>
        </main>
    )
}

export default CommunityPage;
