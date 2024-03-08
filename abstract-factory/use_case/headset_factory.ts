import { LgHeadsetFactory, SamsungHeadsetFactory } from "./headset";
import { Headset } from "./headsets";

export interface HeadsetFactory {
  getHeadset(type: string): Headset | null;
}

// abstract factory
export class HeadsetAbstractFactory {
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
