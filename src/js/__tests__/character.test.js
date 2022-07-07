import Character from '../Character';
import Bowerman from '../Bowerman';
import Daemon from '../Daemon';
import Magician from '../Magician';
import Swordsman from '../Swordsman';
import Undead from '../Undead';
import Zombie from '../Zombie';

test('check name < 2', () => {
  expect(() => {
    new Character('a', 'Daemon');
  }).toThrow('min 2 simbol');
});

test('check name > 10', () => {
  expect(() => {
    new Character('abcdefghijk', 'Daemon');
  }).toThrow('max 10 simbol!');
});

test('check type error', () => {
  expect(() => {
    new Character('Alex', 'Daemo');
  }).toThrow('Выбранный тип не существует');
});

test('check name', () => {
  const person = new Character('Alex', 'Daemon');
  expect(person.name).toBe('Alex');
});

test('check type', () => {
  const person = new Character('Alex', 'Daemon');
  expect(person.type).toBe('Daemon');
});

test('check health', () => {
  const person = new Character('Alex', 'Daemon');
  expect(person.health).toBe(100);
});

test('check level', () => {
  const person = new Character('Alex', 'Daemon');
  expect(person.level).toBe(1);
});

test('check attack Bowerman', () => {
  const person = new Bowerman('Alex', 'Bowerman');
  expect(person.attack).toBe(25);
});

test('check defence Bowerman', () => {
  const person = new Bowerman('Alex', 'Bowerman');
  expect(person.defence).toBe(25);
});

test('check attack Daemon', () => {
  const person = new Daemon('Alex', 'Daemon');
  expect(person.attack).toBe(10);
});

test('check defence Daemon', () => {
  const person = new Daemon('Alex', 'Daemon');
  expect(person.defence).toBe(40);
});

test('check attack Magician', () => {
  const person = new Magician('Alex', 'Magician');
  expect(person.attack).toBe(10);
});

test('check defence Magician', () => {
  const person = new Magician('Alex', 'Magician');
  expect(person.defence).toBe(40);
});

test('check attack Swordsman', () => {
  const person = new Swordsman('Alex', 'Swordsman');
  expect(person.attack).toBe(40);
});

test('check defence Swordsman', () => {
  const person = new Swordsman('Alex', 'Swordsman');
  expect(person.defence).toBe(10);
});

test('check attack Undead', () => {
  const person = new Undead('Alex', 'Undead');
  expect(person.attack).toBe(25);
});

test('check defence Undead', () => {
  const person = new Undead('Alex', 'Undead');
  expect(person.defence).toBe(25);
});

test('check attack Zombie', () => {
  const person = new Zombie('Alex', 'Zombie');
  expect(person.attack).toBe(40);
});

test('check defence Zombie', () => {
  const person = new Zombie('Alex', 'Zombie');
  expect(person.defence).toBe(10);
});

test('check levelUp level', () => {
  const person = new Zombie('Alex', 'Zombie');
  person.levelUp();
  expect(person.level).toBe(2);
});

test('check levelUp health', () => {
  const person = new Swordsman('Alex', 'Swordsman');
  person.levelUp();
  expect(person.health).toBe(100);
});

test('check levelUp attack', () => {
  const person = new Daemon('Alex', 'Daemon');
  person.levelUp();
  expect(person.attack).toBe(12);
});

test('check levelUp defence', () => {
  const person = new Magician('Alex', 'Magician');
  person.levelUp();
  expect(person.defence).toBe(48);
});

test('check levelUp health < 0', () => {
  expect(() => {
    const person = new Daemon('Alex', 'Daemon');
    person.health = 0;
    person.levelUp();
  }).toThrow('Нельзя повысить левел умершего');
}); 

test('check damage', () => {
  const person = new Daemon('Alex', 'Daemon');
  person.damage(40);
  expect(person.health).toBe(76);
});