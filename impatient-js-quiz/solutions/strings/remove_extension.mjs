export function removeExtension(str) {
    const dotIndex = str.lastIndexOf('.');
    if (dotIndex < 0) return str;
    return str.slice(0, dotIndex);
}