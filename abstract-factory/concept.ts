type stats = {
  id: number,
  brand: string,
  model: string,
  price: number,
  microphone: boolean,
  noise_cancelling: boolean,
  wireless: boolean,
  bluetooth: boolean,
  battery_life: number
};

interface HeadsetFactory {
    getHeadset(type: string): Headset | null;
}

// Concrete Factories
class LgHeadsetFactory implements HeadsetFactory {
    getHeadset(type: string): Headset | null {
        switch (type) {
            case 'LG':
                return new LgHeadset();
            default:
                return null;
        }
    }
}

class SamsungHeadsetFactory implements HeadsetFactory {
    getHeadset(type: string): Headset | null {
        switch (type) {
            case 'Samsung':
                return new SamsungHeadset();
            default:
                return null;
        }
    }
}

interface Headset {
    getStats(): stats;
}

// Concrete Products
class LgHeadset implements Headset {
    getStats(){
        return {
            id: 1,
            brand: 'LG',
            model: 'LG-123',
            price: 100,
            microphone: true,
            noise_cancelling: true,
            wireless: true,
            bluetooth: true,
            battery_life: 10
        };
    }
}

class SamsungHeadset implements Headset {
    getStats() {
        return {
            id: 2,
            brand: 'Samsung',
            model: 'Samsung-123',
            price: 150,
            microphone: true,
            noise_cancelling: true,
            wireless: true,
            bluetooth: true,
            battery_life: 15
        };
    }
}

// abstract factory
class HeadsetAbstractFactory {
    getHeadsetFactory(type: string): HeadsetFactory | null {
        switch (type) {
            case 'LG':
                return new LgHeadsetFactory();
            case 'Samsung':
                return new SamsungHeadsetFactory();
            default:
                return null;
        }
    }
}

const headsetAbstractFactory = new HeadsetAbstractFactory();

const lgFactory = headsetAbstractFactory.getHeadsetFactory('LG');
const lgHeadset = lgFactory?.getHeadset('LG');
console.log(lgHeadset!.getStats());

const samsungFactory = headsetAbstractFactory.getHeadsetFactory('Samsung');
const samsungHeadset = samsungFactory?.getHeadset('Samsung');
console.log(samsungHeadset!.getStats());
