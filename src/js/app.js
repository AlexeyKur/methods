const stats = {
  Bowman: {
    attack: 25,
    defense: 25,
  },
  Swordsman: {
    attack: 40,
    defense: 10,
  },
  Magician: {
    attack: 10,
    defense: 40,
  },
  Undead: {
    attack: 25,
    defense: 25,
  },
  Zombie: {
    attack: 40,
    defense: 10,
  },
  Daemon: {
    attack: 10,
    defense: 40,
  },
};

export default function Character(name, type) {
  if (typeof name !== 'string') {
    throw new Error('Значение должно быть строкой');
  }
  if (name.length < 2) {
    throw new Error('min 2 simbol');
  }
  if (name.length > 10) {
    throw new Error('max 10 simbol!');
  }

  const arr = [];

  for (const key in stats) {
    if (Object.prototype.hasOwnProperty.call(stats, key)) {
      arr.push(key);
    }
  }

  if (!arr.includes(type)) {
    throw new Error('Выбранный тип не существует');
  }

  this.name = name;
  this.type = type;
  this.health = 100;
  this.level = 1;
  this.attack = stats[type].attack;
  this.defence = stats[type].defense;
}