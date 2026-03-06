import BackgroundDecor from '../root/BackgroundDecor';
import PageHeaderGeneric from '../root/PageHeaderGeneric';
import RulesMain from './RulesMain';
import RulesHeading from './RulesHeading';
import RulesContainer from './RulesContainer';

import rules from '../../utilities/rules';

export default function Rules() {
    return (
        <>
            <BackgroundDecor />
            <PageHeaderGeneric />
            <RulesMain>
                <RulesHeading headingText1='The' headingText2='Rules' />
                <RulesContainer rules={rules} />
            </RulesMain>
        </>
    );
}
