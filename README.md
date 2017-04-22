# Automatische Messwerte Übermittlung

## Hintergrund
Mit diesem Script können einfach Messwerte an die EnergieBlockchain der StromDAO übermittelt werden. Hierzu ist in der simpleClient.js ein privater Schlüssel zu hinterlegen.

## Nutzung (Standalone)
npm start MESSWERT [privateKey]

```
npm start 1337
```

```
npm start 1338 0xb8135fcc02d9b7ecb1263ccfe546b22ee9cc1ea97ae60fab9f9853c77c73fe67
```

## Nutzung (Module)

```javascript
var client = require("stromdao-smartmeterreading");
client.sendReading(reading,privateKey);
```

## Ausgabe für SmartMeter 0x4Cd9Cf35C70C568543a6a583E6e713ea5BF14Acd
```
EnergyBlockchain Transaktion { nonce: 12,
  gasPrice: BigNumber { _bn: <BN: 0> },
  gasLimit: BigNumber { _bn: <BN: 16e360> },
  to: '0x1E6c8aD97c3Eb1dC8b5b4FCE6cEE993938404Ac5',
  value: BigNumber { _bn: <BN: 0> },
  data: '0x01ebc88e0000000000000000000000000000000000000000000000000000000000000539',
  v: 41,
  r: '0xce2798e0d7bb0bb4a38ffa81ae86ba715bd61fe8a5cc283a4a71ca672b385bf3',
  s: '0x30a447b4f2130443327f3a1c10d56c0754ee00f15b9c45eb55fa5352f6319c66',
  chainId: 3,
  from: '0x4Cd9Cf35C70C568543a6a583E6e713ea5BF14Acd',
  hash: '0x628e5ba5fe9eccd48e6ea827aa31158ea54defadcf826c9095845f0b11283225' }
```

## Hinweis
Die in Github / NPMJS veröffentlichte Version des Clients soll zur illustration dienen. Für den Einsatz in einem Produktivsystem muss der Reader (Smart-Contract) der Gateway-Administration (GWALink) angegeben werden.

Zur Kontrolle der gesendeten Messwerte kann die DAPP unter http://app.stromdao.de:8081/dapps/reading-demo/ verwendet werden.

## Contributing
- https://stromdao.de/
- https://gitter.im/stromdao/Lobby