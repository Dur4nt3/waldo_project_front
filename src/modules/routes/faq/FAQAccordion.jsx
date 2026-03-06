import { Accordion } from '@mantine/core';

import './stylesheets/FAQAccordion.css';

export default function FAQAccordion({ faqs }) {
    return (
        <Accordion
            radius={0}
            variant='separated'
            classNames={{
                root: 'faq-accordion',
                item: 'faq-accordion-item',
                control: 'faq-accordion-control',
                panel: 'faq-accordion-panel',
                content: 'faq-accordion-content'
            }}
            chevron={<i className='faq-accordion-chevron'>+</i>}
        >
            {faqs.map((faq) => (
                <Accordion.Item key={faq.question} value={faq.question}>
                    <Accordion.Control>{faq.question}</Accordion.Control>
                    <Accordion.Panel>{faq.answer}</Accordion.Panel>
                </Accordion.Item>
            ))}
        </Accordion>
    );
}
