export default class Character {
    constructor(name, type) {
      if (name && typeof (name) === 'string' && name.length > 2 && name.length < 10) {
        this.name = name;
      } else {
        throw new Error('Имя не соответствует критериям');
      }
  
      const typeList = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
      const declaredType = typeList.find((element) => element === type);
      if (type && typeof (type) === 'string' && declaredType) {
        this.type = type;
      } else {
        throw new Error('Неизвестный тип');
      }
  
      this.health = 100;
      this.level = 1;
  
      this.attack = null;
      this.defence = null;
    }

  }