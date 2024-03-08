import Headset from './headset';

export class LgHeadset extends Headset {
  constructor() {
    super(1, 'LG', 'LG', 100, true, true, true, true, 10);
  }
}

export class SamsungHeadset extends Headset {
  constructor() {
    super(2, 'Samsung', 'Samsung', 200, true, true, true, true, 20);
  }
}

export class RazerHeadset extends Headset {
  constructor() {
    super(3, 'Razer', 'Razer', 150, true, true, true, true, 15);
  }
}
