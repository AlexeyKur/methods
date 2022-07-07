const arr = [
  'Bowerman',
  'Swordsman',
  'Magician',
  'Daemon',
  'Undead',
  'Zombie',
];

export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;

    if (this.name.length < 2) {
      throw new Error('min 2 simbol');
    }
    if (name.length > 10) {
      throw new Error('max 10 simbol!');
    }

    if (!arr.includes(type)) {
      throw new Error('Выбранный тип не существует');
    }
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.health = 100;
      this.attack += (this.attack * 20) / 100;
      this.defence += (this.defence * 20) / 100;
    } else if (this.health <= 0) {
      throw new Error('Нельзя повысить левел умершего');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}