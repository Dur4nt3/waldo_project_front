import hintSvg from '../../../assets/media/icons/hint.svg';
import deleteSvg from '../../../assets/media/icons/delete.svg';

export default function LevelMarkersDropdownActions({
    characters,
    markerId,
    addMarkerPosition,
}) {
    return (
        <div className='marker-actions'>
            <button className='character-hint'>
                <img src={hintSvg} alt='a hint about the character' />
            </button>

            <button
                className='remove-marker'
                onClick={(event) => {
                    event.stopPropagation();
                    return addMarkerPosition(markerId, null);
                }}
            >
                <img
                    src={deleteSvg}
                    // eslint-disable-next-line @stylistic/max-len
                    alt={`remove ${characters[markerId]}'s marking from the image`}
                />
            </button>
        </div>
    );
}
