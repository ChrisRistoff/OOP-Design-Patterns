import { HeadsetFactory } from "../../abstract-factory/use_case/headset_factory";
import { Headset } from "../../abstract-factory/use_case/headsets";
import { LgHeadset123, LgHeadset456, SamsungHeadset123, SamsungHeadset456 } from "./headsets";

// Concrete Factories
export class LgHeadsetFactory implements HeadsetFactory {
  getHeadset(type: string): Headset | null {
    switch (type) {
      case 'LG-123':
        return new LgHeadset123();
      case 'LG-456':
        return new LgHeadset456();
      default:
    return null;
    }
  }
}

export class SamsungHeadsetFactory implements HeadsetFactory {
  getHeadset(type: string): Headset | null {
    switch (type) {
      case 'Samsung-123':
        return new SamsungHeadset123();
      case 'Samsung-456':
        return new SamsungHeadset456();
      default:
        return null;
    }
  }
}
