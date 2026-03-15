import FAQ from './classes/FAQ';

const FAQs = [
    new FAQ(
        'How do I play?',
        'Simply pan and zoom the image until you find a specific character (outlined by the marker menu), once you have found the character, click its respective marker and click on the character. Submit your answer when ready.'
    ),
    new FAQ(
        'Can I resize the image?',
        'You can pan and zoom the image as you see fit by dragging/scrolling (mobile is supported).'
    ),
    new FAQ(
        'I accidentally moved the image off-screen how can I get it back?',
        'Simply click the "Reset View" button.'
    ),
    new FAQ(
        'Do hints impact your score?',
        'No, use them as you see fit, they only describe how a certain character looks.'
    ),
    new FAQ(
        'Why are markers not placing where I am clicking?',
        'The marker placing algorithm calculates where in the image itself did you click rather than where on the screen. When you reset the view, it will be placed accurately.'
    ),
    new FAQ(
        'I accidentally placed a marker on the wrong location, can I change it?',
        'Of course, simple click the delete (trash) icon in the marker menu for the relevant marker.'
    ),
    new FAQ(
        'How close does the marker need to be for the answer to be correct?',
        'Technically speaking, the calculation is from the top left to the bottom right of the character. If the center of your marker is anywhere within that range, the answer should be correct.'
    ),
    new FAQ(
        'I messed up before finishing the game, can I reset?',
        'Yes, simply use the "Reset Game" button in the bottom of the page (you will have to re-enter you name).'
    ),
    new FAQ(
        'Can I attempt multiple tries?',
        'There is nothing preventing you from doing that, but it is not encouraged to do so. Unrealistic scores will be removed.'
    ),
    new FAQ(
        'How does the score work?',
        'The score is simply the total time it took you to finish all levels (in seconds).'
    ),
    new FAQ(
        'What is that number in parentheses near my score?',
        'It is the amount of levels you completed.'
    ),
    new FAQ(
        'I accidentally exited the tab, can I resume playing?',
        'Your session is kept within your localStorage, as long as the token persists, you can resume playing.'
    ),
];

export default FAQs;
