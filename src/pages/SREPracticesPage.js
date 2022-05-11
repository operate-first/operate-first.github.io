import { Container, Text, Title } from '@mantine/core';
import React from 'react';

export function SREPracticesContent() {
    return (
        <Container>
            <Title order={2} my="md">SRE Practices</Title>
            <Text>
                Beginning in January 2022 the Op1st community is releasing early (and often) a growing set of course materials for learning SRE methods and practices. These courses will be tied into the running community cloud, providing a look behind the veil of operations.
            </Text>
            <Text>
                Our plans for these courses is extensive and will be laid out on these pages. In the meantime, DIY learners are encouraged to begin looking around at how project operations are run, as a view into how the training courses are going to look.
            </Text>
            <Text>
                Additional Resources
            </Text>
            <Text>
                [SRE pages in the Op1st Community Handbook](https://www.operate-first.cloud/community-handbook/operations-intro.md) used by the Op1st Operations SIG.
            </Text>
            <Text>
                The [Op1st video playlists](https://www.youtube.com/channel/UCe87bwqlGoBQs2RvMQZ5_sg/playlists) cover various aspects of how the community cloud works, and other aspects of the community.
            </Text>
            <Text>
                Video demonstration of bringing up a new service ([direct link to demonstration](https://www.youtube.com/watch?v=yJcT2z06kb0&t=379s)).
            </Text>
            <Text>
                Source: https://www.operate-first.cloud/sre-learners/
            </Text>
        </Container>
    )
}
