import HeadsetFactory from './headset_factory';

const headsetFactory = new HeadsetFactory();
const lgHeadset = headsetFactory.getHeadset('LG');
console.log(lgHeadset.getStats());

const samsungHeadset = headsetFactory.getHeadset('Samsung');
console.log(samsungHeadset.getStats());

const razerHeadset = headsetFactory.getHeadset('Razer');
console.log(razerHeadset.getStats());
