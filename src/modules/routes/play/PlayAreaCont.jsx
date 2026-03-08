import { useRef } from 'react';
import usePanzoom from '../../utilities/hooks/usePanzoom';

import zoomImage from '../../utilities/ui/zoomImage';
import getMarkerPosition from '../../utilities/ui/getMarkerPosition';

import './stylesheets/PlayAreaCont.css';

export default function PlayAreaCont({
    image,
    placingMarker,
    setPlacingMarker,
    characters,
    markers,
    addMarkerPosition,
    markerSize,
}) {
    const panzoomRef = useRef();
    const imageRef = useRef();
    const canvasRef = useRef();

    usePanzoom(image, imageRef, panzoomRef);

    return (
        <div className='play-area-cont'>
            <div className='image-canvas' ref={canvasRef}>
                <img
                    src={image}
                    alt='Find the character within this image'
                    ref={imageRef}
                    onWheel={(event) => zoomImage(event, panzoomRef)}
                    onClick={(event) => {
                        if (!placingMarker) {
                            return;
                        }

                        const markerPosition = getMarkerPosition(
                            event,
                            canvasRef,
                            imageRef,
                            panzoomRef
                        );

                        setPlacingMarker(null);
                        addMarkerPosition(placingMarker, markerPosition);
                    }}
                />

                {Object.keys(markers).map((markerId) => {
                    if (markers[markerId] === null) {
                        return;
                    }

                    return (
                        <div
                            className='marker'
                            key={markerId}
                            style={{
                                left: `${markers[markerId].pctX * 100}%`,
                                top: `${markers[markerId].pctY * 100}%`,
                                width: `${markerSize}px`,
                                height: `${markerSize}px`,
                            }}
                        >
                            <span className="character-name">{characters[markerId].name}</span>
                        </div>
                    );
                })}
            </div>

            <div className='canvas-options'>
                <button
                    className='reset-image-alignment-button clear-button-design'
                    onClick={() => {
                        if (!panzoomRef.current) {
                            return;
                        }

                        panzoomRef.current.reset();
                    }}
                >
                    Reset View
                </button>
            </div>
        </div>
    );
}
