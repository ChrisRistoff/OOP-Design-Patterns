// Define abstract product interfaces
interface AbstractProductA {
  functionA(): string;
}

interface AbstractProductB {
  functionB(): string;
}

// Concrete Products implement abstract products
class ConcreteProductA1 implements AbstractProductA {
  functionA(): string {
    return 'The result of the product A1.';
  }
}

class ConcreteProductA2 implements AbstractProductA {
  functionA(): string {
    return 'The result of the product A2.';
  }
}

class ConcreteProductB1 implements AbstractProductB {
  functionB(): string {
    return 'The result of the product B1.';
  }
}

class ConcreteProductB2 implements AbstractProductB {
  functionB(): string {
    return 'The result of the product B2.';
  }
}

// Define abstract factory interface
interface AbstractFactory {
  createProductA(): AbstractProductA;
  createProductB(): AbstractProductB;
}

// Concrete Factories implement abstract factory and create concrete products
class ConcreteFactory1 implements AbstractFactory {
  createProductA(): AbstractProductA {
    return new ConcreteProductA1();
  }

  createProductB(): AbstractProductB {
    return new ConcreteProductB1();
  }
}

class ConcreteFactory2 implements AbstractFactory {
  createProductA(): AbstractProductA {
    return new ConcreteProductA2();
  }

  createProductB(): AbstractProductB {
    return new ConcreteProductB2();
  }
}

// Client code works with factories and products only through abstract types
function clientCode(factory: AbstractFactory) {
  const productA = factory.createProductA();
  const productB = factory.createProductB();

  console.log(productA.functionA());
  console.log(productB.functionB());
}

// Example usage
const factory1 = new ConcreteFactory1();
clientCode(factory1);

const factory2 = new ConcreteFactory2();
clientCode(factory2);
