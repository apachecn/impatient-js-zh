export function createDict() {
  return Object.create(null);
}

export function setValue(dict, key, value) {
  dict[key] = value;
}

export function getValue(dict, key) {
  return dict[key];
}

export function hasKey(dict, key) {
  return key in dict;
}

export function getKeys(dict) {
  return Object.keys(dict);
}