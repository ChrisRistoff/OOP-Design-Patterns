import { stats } from "../../factory/use_case/stats_type";

export interface Headset {
  getStats(): stats;
}

// Concrete Products
export class LgHeadset123 implements Headset {
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

export class LgHeadset456 implements Headset {
  getStats(){
    return {
      id: 2,
      brand: 'LG',
      model: 'LG-456',
      price: 150,
      microphone: true,
      noise_cancelling: true,
      wireless: true,
      bluetooth: true,
      battery_life: 15
    };
  }
}

export class SamsungHeadset123 implements Headset {
  getStats() {
    return {
      id: 3,
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

export class SamsungHeadset456 implements Headset {
  getStats(){
    return {
      id: 4,
      brand: 'Samsung',
      model: 'Samsung-456',
      price: 200,
      microphone: true,
      noise_cancelling: true,
      wireless: true,
      bluetooth: true,
      battery_life: 20
    };
  }
}
