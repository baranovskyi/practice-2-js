
export default function boundingRect(coordsList) {
        
if (coordsList !== undefined && coordsList.length > 0) {
    let y = [],
        x = []
    coordsList.forEach(element => {
        y.push(element.y)
        x.push(element.x)
    });
    return {
        top: Math.max(...y),
        right: Math.max(...x),
        bottom: Math.min(...y),
        left: Math.min(...x)
    }
}
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
}
