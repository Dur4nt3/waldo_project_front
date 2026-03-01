import BackgroundDecor from './BackgroundDecor';
import BackgroundCornerBrackets from './BackgroundCornerBrackets';

import HomepageHeader from './HomepageHeader';
import HomepageMain from './HomepageMain';
import HomepageActions from './HomepageActions';

export default function Root() {
    return (
        <>
            <BackgroundDecor />
            <BackgroundCornerBrackets />
            <HomepageMain>
                <HomepageHeader />
                <HomepageActions />
            </HomepageMain>
        </>
    );
}
