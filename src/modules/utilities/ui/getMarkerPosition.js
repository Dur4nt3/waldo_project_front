/* eslint-disable @stylistic/no-mixed-operators */
export default function getMarkerPosition(
    event,
    containerRef,
    imageRef,
    panzoomRef
) {
    const container = containerRef.current;
    const { x: panX, y: panY } = panzoomRef.current.getPan();
    const scale = panzoomRef.current.getScale();

    const containerRect = container.getBoundingClientRect();

    const relX = event.clientX - containerRect.left;
    const relY = event.clientY - containerRect.top;

    const containerCenterX = containerRect.width / 2;
    const containerCenterY = containerRect.height / 2;

    const naturalX =
        (relX - containerCenterX) / scale + containerCenterX - panX;
    const naturalY =
        (relY - containerCenterY) / scale + containerCenterY - panY;

    return {
        pctX: naturalX / containerRect.width,
        pctY: naturalY / containerRect.height,
    };
}
