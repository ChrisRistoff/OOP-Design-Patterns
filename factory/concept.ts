interface IKeyboards{
  name: string;
  price: number;
}

class Keyboards implements IKeyboards {
  constructor(public name: string, public price: number) {}
}

class ConcreteKeyboard extends Keyboards {
  constructor() {
    super('', 100);
  }
}

class LG extends ConcreteKeyboard {
  constructor() {
    super();
    this.name = 'LG';
    this.price = 100;
  }
}

class Ducky extends ConcreteKeyboard {
  constructor() {
    super();
    this.name = 'Samsung';
    this.price = 200;
  }
}

class Razer extends ConcreteKeyboard {
  constructor () {
    super();
    this.name = 'Razer';
    this.price = 150;
  }
}

class CreateKeyboard {
  public static create(name: string): Keyboards {
    switch (name) {
      case 'LG':
        return new LG();
      case 'Samsung':
        return new Ducky();
      case 'Razer':
        return new Razer();
      default:
        throw new Error('Invalid Keyboard');
    }
  }
}

const lg = CreateKeyboard.create('LG');
console.log(lg);

const samsung = CreateKeyboard.create('Samsung');
console.log(samsung);
