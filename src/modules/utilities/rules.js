import Rule from './classes/Rule';

const rules = [
    new Rule(
        'Find all hidden characters',
        'Each level contains a set number of hidden characters. You must place a marker on every character to complete the level'
    ),
    new Rule(
        'Place your markers carefully',
        'Markers must be placed within a set radius of the character to count as correct.'
    ),
    new Rule(
        'Time is tracked',
        'Your completion time is recorded from the moment the level loads. Faster times rank higher on the leaderboard.'
    ),
];

export default rules;
