import React from "react";

import { Alert } from '@mantine/core';
import { AlertCircle } from 'tabler-icons-react';

// Modify these fields to change the outage message
const statusmsg = [
    {
        title: "Cluster Outage: This is for users of the MOC clusters!",
        description: "As a reminder these clusters (Smaug, Infra, Curator) will be unavailable from Monday, May 23, 2022 at 6PM through Thursday, May 26, 2022 at 12PM. Due to a scheduled power outage.",
    }
];
const DisplayNotifcation = () => {
    // Make this false to turn off notification
    const showAlert = true;

    return (
        <>
            {showAlert ?
                <Alert
                    icon={<AlertCircle size={28} />}
                    title={statusmsg[0].title}
                    color="red"
                    radius="none"
                    variant="filled"
                    styles={{
                        filled: { backgroundColor: '#e31c23' },
                        wrapper: { backgroundColor: '#e31c23' },
                    }}
                >
                    {statusmsg[0].description}
                </Alert>
                : null
            }
        </>
    )
}

export default DisplayNotifcation;
