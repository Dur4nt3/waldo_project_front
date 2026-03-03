export default function zoomImage(event, panzoomRef) {
    if (!panzoomRef.current) {
        return;
    }

    if (event.deltaY < 0) {
        panzoomRef.current.zoomIn();
    } else if (event.deltaY > 0) {
        panzoomRef.current.zoomOut();
    }
}
