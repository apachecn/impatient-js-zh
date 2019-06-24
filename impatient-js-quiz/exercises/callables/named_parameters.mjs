export function handleNamedParameters(params) {
    params = params || {};
    var x = params.x || 0;
    var y = params.y || 0;
    var color = params.color || 'black';
    return [x, y, color];
}
