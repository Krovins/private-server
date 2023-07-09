import weapons from '../items/weapons.json';
import items from '../items/items.json';

function getUpgrades(age: number, isAdmin: boolean): number[] {
  return items.map((_item, index) => index).filter(item => items[item].age == age || isAdmin);
}

function getWeaponUpgrades(age: number, isAdmin: boolean) {
  return weapons.map((_item, index) => index).filter(item => weapons[item].age === age || isAdmin);
}

export { getUpgrades, getWeaponUpgrades };