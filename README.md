leagueoflegends-js
=========
A wrapper for the Riot League Of Legends API.




**Installation**
```js
npm i leagueoflegends-js
```
Methods (API)
========

**Construct**
```js
const lol = require('leagueoflegends-js');
const api = new lol.API({
  apikey: "yOuR-aPi-kEy",
  reigon: "euw1"
});

// apikey is required.
// reigon sets to na1 as default

```
**findSummoner(name)**
```js
api.findSummoner("fiqstro").then(summoner => {
  console.log(summoner)
})
```

Methods (DataDragon)
==========

**Construct DataDragon**
```js
const lol = require('leagueoflegends-js');
const datadragon = new lol.DataDragon("11.1.1") // The default version is 11.1.1
```

**findChampion()**
```js
const lol = require('leagueoflegends-js');
const datadragon = new lol.DataDragon();

datadragon.findChampion("Akali").then(champion => {
  console.log(champion.name);
  // Akali
})
```

**findItem()** 
```js
const lol = require('leagueoflegends-js');
const datadragon = new lol.DataDragon();

datadragon.findItem("Zeal").then(item => {
  console.log(item.name)
  // Zeal
}) 
```

**findSpell()**
```js
const lol = require('leagueoflegends-js');
const datadragon = new lol.DataDragon();

datadragon.findItem("Flash").then(spell => {
console.log(spell.name) 
// Flash
})
```

**fetchAllItems()**
```js
const lol = require('leagueoflegends-js');
const datadragon = new lol.DataDragon();

datadragon.fetchAllItems().then(items => {
  console.log(items);
  // [ ... ]
})
```

**fetchAllSpells()**
```js
const lol = require('leagueoflegends-js');
const datadragon = new lol.DataDragon();

datadragon.fetchAllItems().then(spells => {
  console.log(spells)
  // [ ... ]
})
```




