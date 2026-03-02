export default function LevelMarkerDropdownCont({
    children,
    characterName,
    markerId,
    placingMarker,
    setPlacingMarker,
    setOpened,
}) {
    function handleClick() {
        if (placingMarker !== markerId) {
            setPlacingMarker(markerId);
            return setOpened(false);
        }
        setPlacingMarker(null);
        return setOpened(false);
    }

    return (
        <div
            role='button'
            aria-label={`select ${characterName} marker`}
            tabIndex={0}
            className='character-marker-cont'
            onClick={handleClick}
            onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    handleClick();
                }
            }}
        >
            {children}
        </div>
    );
}
