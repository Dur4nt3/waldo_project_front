import BackgroundDecor from '../root/BackgroundDecor';
import PageHeaderGeneric from '../root/PageHeaderGeneric';
import FAQMain from './FAQMain';
import RulesHeading from '../rules/RulesHeading';
import FAQAccordion from './FAQAccordion';

import FAQs from '../../utilities/FAQs';

export default function FAQ() {
    return (
        <>
            <BackgroundDecor />
            <PageHeaderGeneric />
            <FAQMain>
                <RulesHeading headingText1='FAQ' />
                <FAQAccordion faqs={FAQs} />
            </FAQMain>
        </>
    );
}
