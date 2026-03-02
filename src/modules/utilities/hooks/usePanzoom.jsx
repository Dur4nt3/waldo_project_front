import Panzoom from '@panzoom/panzoom';

import { useEffect } from 'react';

export default function usePanzoom(imageSrc, imageRef, panzoomRef) {
    useEffect(() => {
        if (!imageRef.current) {
            return;
        }

        // eslint-disable-next-line new-cap
        panzoomRef.current = Panzoom(imageRef.current, {
            minScale: 1,
            maxScale: 15
        });

        return () => panzoomRef.current?.destroy();
    }, [imageRef, panzoomRef]);

    // Ensure image alignment is reset
    // when receiving a new image src
    useEffect(() => {
        panzoomRef.current?.reset();
    }, [imageSrc, panzoomRef]);
}
