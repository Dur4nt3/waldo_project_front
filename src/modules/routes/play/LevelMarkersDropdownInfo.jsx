function MarkerState({ placingMarker, markers, currentMarkerId }) {
    if (placingMarker === currentMarkerId) {
        return <p className='currently-placing-marker'>PLACING</p>;
    }

    if (markers[currentMarkerId] !== null) {
        return <p className='marker-placed'>PLACED</p>;
    }

    return <p className='marker-not-placed'>NOT PLACED</p>;
}

export default function LevelMarkerDropdownInfo({
    characters,
    markerId,
    markers,
    placingMarker,
}) {
    return (
        <>
            <div className='character-name'>{characters[markerId].name}</div>
            <div className='marker-state'>
                <MarkerState
                    markers={markers}
                    placingMarker={placingMarker}
                    currentMarkerId={markerId}
                />
            </div>
        </>
    );
}
