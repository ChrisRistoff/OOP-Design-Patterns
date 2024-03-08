import { HeadsetAbstractFactory } from "./headset_factory";

const headsetAbstractFactory = new HeadsetAbstractFactory();

const lgFactory = headsetAbstractFactory.getHeadsetFactory('LG');
const lgHeadset123 = lgFactory?.getHeadset('LG-123');
const lgHeadset456 = lgFactory?.getHeadset('LG-456');
console.log(lgHeadset123!.getStats());
console.log(lgHeadset456!.getStats());

const samsungFactory = headsetAbstractFactory.getHeadsetFactory('Samsung');
const samsungHeadset123 = samsungFactory?.getHeadset('Samsung-123');
const samsungHeadset456 = samsungFactory?.getHeadset('Samsung-456');
console.log(samsungHeadset123!.getStats());
console.log(samsungHeadset456!.getStats());
