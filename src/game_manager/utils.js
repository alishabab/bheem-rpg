  
export const SpawnerType = {
  MONSTER: 'MONSTER',
  CHEST: 'CHEST',
};

export function randomNumber(min, max) {
  return Math.floor(Math.random() * max) + min;
}

export function getTiledProperty(obj, propertyName) {
  for (let i = 0; i < obj.properties.length; i += 1) {
    const property = obj.properties[i];
    if (property.name === propertyName) {
      return property.value;
    }
  }
}