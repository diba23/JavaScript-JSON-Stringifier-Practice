const obj1 = {
  senderName: 'george',
  senderAddress: 'Elm Court, Arden Street, Stratford-upon-Avon, Warwickshire, United Kingdom CV37 6PA',
  recipientName: 'alexander',
  recipientAddress: 'Townside, Immingham, North Lincolnshire, United Kingdom',
  senderPhonenumber: 234846937,
  recipientPhonenumber: 76475893,
  weight: 25,
  trackingNumber: 5637483678336483684348647323984n,
  shippingCost: 125,
}
const obj2 = {
  senderName: 'james',
  senderAddress: 'Saint Lukes Road North, Torquay, Torbay, United Kingdom',
  recipientName: 'elizabeth',
  recipientAddress: 'Payman Club offers the best services in Douglas Arms Hotel, in Castle Douglas, an excellent base for exploring Southern Scotland',
  senderPhonenumber: 7465937456,
  recipientPhonenumber: 87564839,
  weight: 5,
  trackingNumber: 5637483678336483684348647323984n,
  shippingCost: 75,
}
const obj3 = {
  senderName: 'olivia',
  senderAddress: 'The Stromness Hotel, The Pierhead, Stromness, Scotland, United Kingdom',
  recipientName: 'emma',
  recipientAddress: 'the Knighton Hotel Broad Street, Knighton, Powys',
  senderPhonenumber: 234846937,
  recipientPhonenumber: 76475893,
  weight: 3,
  trackingNumber: 5637483678336483684348647323984n,
  shippingCost: 60,
}

function stringifyJson (input) {
  return JSON.stringify(input, (_, v) => typeof v === 'bigint' ? `${v}n` : v).replace(/"(-?\d+)n"/g, (_, a) => a);
}

console.log('obj3: ', stringifyJson(obj3));
//--------------------------q2---------------------------------
const newobj1 = {
  sender: {
    senderName: 'george',
    senderAddress: 'Elm Court, Arden Street, Stratford-upon-Avon, Warwickshire, United Kingdom CV37 6PA',
    senderPhonenumber: 234846937,
  },
  recipient: {
    recipientName: 'alexander',
    recipientAddress: 'Townside, Immingham, North Lincolnshire, United Kingdom',
    recipientPhonenumber: 76475893,
  },
  weight: 25,
  trackingNumber: 5637483678336483684348647323984n,
  shippingCost: 125,
}
const newobj2 = {
  sender: {
    senderName: 'james',
    senderAddress: 'Saint Lukes Road North, Torquay, Torbay, United Kingdom',
    senderPhonenumber: 7465937456,
  },
  recipient: {
    recipientName: 'elizabeth',
    recipientAddress: 'Payman Club offers the best services in Douglas Arms Hotel, in Castle Douglas, an excellent base for exploring Southern Scotland',
    recipientPhonenumber: 87564839,
  },
  weight: 5,
  trackingNumber: 5637483678336483684348647323984n,
  shippingCost: 75,
}
const newobj3 = {
  sender: {
    senderName: 'olivia',
    senderAddress: 'The Stromness Hotel, The Pierhead, Stromness, Scotland, United Kingdom',
    senderPhonenumber: 234846937,
  },
  recipient: {
    recipientName: 'emma',
    recipientAddress: 'the Knighton Hotel Broad Street, Knighton, Powys',
    recipientPhonenumber: 76475893,
  },
  weight: 3,
  trackingNumber: 5637483678336483684348647323984n,
  shippingCost: 60,
}

console.log('newobj3: ', stringifyJson(newobj3));
//---------------------------q3----------------------------------
const overWriteNewobj1 = {
  sender: {
    senderName: 'george',
    senderAddress: 'Elm Court, Arden Street, Stratford-upon-Avon, Warwickshire, United Kingdom CV37 6PA',
    senderPhonenumber: 234846937,
  },
  recipient: {
    recipientName: 'alexander',
    recipientAddress: {
      city: 'Knighton',
      country: 'United Kingdom',
      postal_code: 573849394,
      region:'North Lincolnshire',
      main_street: 'Immingham',
      sub_street: 'Townside',
      alley: 'Townside2',
    },
    recipientPhonenumber: 76475893,
  },
  weight: 25,
  trackingNumber: 5637483678336483684348647323984n,
  shippingCost: 125,
}
console.log('overWriteNewobj1: ', stringifyJson(overWriteNewobj1));
//-------------------------------q4-----------------------------------
const post = require("./data.json");
const findIran = post.data.filter((i) => i.recipient.recipientAddress.country.toLowerCase() === 'iran')
const postalCodes = findIran.map((j) => j.recipient.recipientAddress.postal_code);
console.log(postalCodes);
//-------------------------q5------------------------------------
const lightWeights = (arr, limit) => {
  const less = arr.filter((i) => i.weight <= limit);
  return less;
}
console.log(lightWeights(post.data,40));
//------------------------------------------q6--------------------
const sameName = (arr) => {
  return arr.filter((i) => i.sender.senderName.toLowerCase() === i.recipient.recipientName.toLowerCase());
}
console.log(sameName(post.data));
//---------------------------q9--------------------------
const input = [
  {sender: "s", receiver: "r", tel: 8844},
  {sender: "s 2", receiver: "2 2", tel: 8822}
];
let newMap = new Map();
function toMakeMap (array) {
    let i = -1;
    for (const item of array) {
        newMap.set(i+=1, item);
    }
};
toMakeMap(input)
console.log(newMap);
//------------------------------------q10---------------------------------
function set (...inputs) {
  const mySet1 = new Set();
  for (const a of inputs) {
    mySet1.add(a);
  }
  return mySet1;
}
console.log(set(1, -1, 2, 5, -1, 2));
//----------------------------------------------q7-----------------
class posts {
  data;
  constructor(data) {
    this.data = data;
  }
  addressString () {
    const marketingAddress = this.data.recipient.recipientAddress.country + " "
    + this.data.recipient.recipientAddress.city + " "
    + this.data.recipient.recipientAddress.region + " "
    + this.data.recipient.recipientAddress.main_street + " "
    + this.data.recipient.recipientAddress.sub_street + " "
    + this.data.recipient.recipientAddress.alley + " ";
    this.data.recipient.recipientAddress = marketingAddress;
    return this.data;
  }
}
let onePost = new posts(post.data[1]);
onePost.addressString();
console.log(onePost.data);