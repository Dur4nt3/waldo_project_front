export default function canFitPips(count) {
    return window.innerWidth / (count * 100) > 1;
}