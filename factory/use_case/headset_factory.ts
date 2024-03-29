import { LgHeadset, SamsungHeadset, RazerHeadset } from './headsets';

export default class HeadsetFactory {
  public getHeadset(headset: string) {
    try {
      switch (headset) {
        case 'LG':
          return new LgHeadset();
        case 'Samsung':
          return new SamsungHeadset();
        case 'Razer':
          return new RazerHeadset();
        default:
          throw new Error;
      }
    } catch (error) {
      console.error('Invalid headset');
    }
  }
}
