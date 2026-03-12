import { useDisclosure } from '@mantine/hooks';

import BackgroundDecor from './BackgroundDecor';
import BackgroundCornerBrackets from './BackgroundCornerBrackets';

import StartGameModal from './StartGameModal';
import HomepageHeader from './HomepageHeader';
import HomepageMain from './HomepageMain';
import HomepageActions from './HomepageActions';

export default function Root() {
    const [opened, { open, close }] = useDisclosure(false);

    const submissionErrors = null

    return (
        <>
            <StartGameModal
                opened={opened}
                close={close}
                nameErrors={submissionErrors?.nameErrors}
            />
            <BackgroundDecor />
            <BackgroundCornerBrackets />
            <HomepageMain>
                <HomepageHeader />
                <HomepageActions openModal={open} />
            </HomepageMain>
        </>
    );
}
