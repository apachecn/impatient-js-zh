export function updateProperty(obj, key, value) {
  return { ...obj, [key]: value };
}