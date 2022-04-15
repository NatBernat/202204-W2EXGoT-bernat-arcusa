// eslint-disable-next-line max-classes-per-file
class Character {
  characterName;
  family;
  age;
  alive = true;
  serie = "Game of Thrones";

  constructor(characterName, family, age) {
    this.characterName = characterName;
    this.family = family;
    this.age = age;
  }

  comunication(sentence) {
    return sentence;
  }
}

class King extends Character {
  reignYears;
  sentence = "Váis a morir todos.";

  constructor(characterName, family, age, reignYears, sentence) {
    super();
    this.reignYears = reignYears;
    this.sentence = sentence;
  }
}
class Fighter {
  weapon;
  skill;
  sentence = "Primero pego y luego pregunto";

  constructor(characterName, family, age, weapon, skill, sentence) {
    super();
    this.weapon = weapon;
    this.skill = skill;
    this.sentence = sentence;
  }
}

class Advisor {
  advisedCharacter;
  sentence = "No sé por qué, pero creo que voy a morir pronto";
}

class Squire {
  squiredCharacter = [].Fighter;
  assKissingLevel;
  sentence = "Soy un loser";
}

let joffrey = new Character();
console.log(joffrey);
joffrey = new King();
console.log(joffrey);
