import attr from './attr.js';
import setAttr from './setAttr.js';
import setData from './setData.js';
import dataMap from './.internal/_dataMap.js';

export default el => {
  if (dataMap.has(el)) return dataMap.get(el);
  setData(JSON.parse(attr('fxd-data', el)), el);
  setAttr(['fxd-data', 'IN_WEAK_MAP'], el);
  return dataMap.get(el);
};