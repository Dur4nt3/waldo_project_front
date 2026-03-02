import Panzoom from '@panzoom/panzoom';
import { useRef } from 'react';
import usePanzoom from '../../utilities/hooks/usePanzoom';

import './stylesheets/PlayAreaCont.css';

export default function PlayAreaCont({ image }) {
    const panzoomRef = useRef();
    const imageRef = useRef();

    usePanzoom(image, imageRef, panzoomRef);

    return (
        <div className='play-area-cont'>
            <div className='image-canvas'>
                <img
                    src={image}
                    alt='Find the character within this image'
                    ref={imageRef}
                    onWheel={(event) => {
                        // Prevent page scrolling
                        // event.preventDefault();

                        if (!panzoomRef.current) {
                            return;
                        }

                        if (event.deltaY < 0) {
                            panzoomRef.current.zoomIn();
                        } else if (event.deltaY > 0) {
                            panzoomRef.current.zoomOut();
                        }
                    }}
                />
            </div>

            <div className='canvas-options'>
                <button
                    className='reset-image-alignment-button'
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
