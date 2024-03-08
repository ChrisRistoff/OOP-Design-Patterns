import { stats } from './stats_type';

interface IHeadset {
  id: number,
  brand: string,
  model: string,
  price: number,
  microphone: boolean,
  noise_cancelling: boolean,
  wireless: boolean,
  bluetooth: boolean,
  battery_life: number,
  getStats(): stats;
}

export default class Headset implements IHeadset {
  constructor(
    public id: number,
    public brand: string,
    public model: string,
    public price: number,
    public microphone: boolean,
    public noise_cancelling: boolean,
    public wireless: boolean,
    public bluetooth: boolean,
    public battery_life: number
  ) {}

  getStats(): stats {
    return {
      id: this.id,
      brand: this.brand,
      model: this.model,
      price: this.price,
      microphone: this.microphone,
      noise_cancelling: this.noise_cancelling,
      wireless: this.wireless,
      bluetooth: this.bluetooth,
      battery_life: this.battery_life
    };
  }
}
