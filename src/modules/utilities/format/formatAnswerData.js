import AnswerEntry from '../classes/AnswerEntry';

export default function formatAnswerData(formData) {
    const stringEntries = Object.fromEntries(formData);

    const answerArray = [];
    for (const entry of Object.keys(stringEntries)) {
        const currentValue = stringEntries[entry];
        if (currentValue) {
            answerArray.push(
                new AnswerEntry(
                    Number(entry),
                    JSON.parse(currentValue).pctX,
                    JSON.parse(currentValue).pctY
                )
            );
        } else {
            answerArray.push(new AnswerEntry(Number(entry), '', ''));
        }
    }

    return answerArray;
}
