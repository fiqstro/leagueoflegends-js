const fetch = require('node-fetch')

class DataDragon {
  
  constructor(options = {}) {
    this.version = options.version || "11.1.1";  
    this.lang = options.lang || "en_US";
  }  
  
  
  static getVersions() {
    return new Promise(resolve => {
    fetch(`https://ddragon.leagueoflegends.com/api/versions.json`)
    .then(res => res.json())
    .then(resolve)
    })           
  }
  
  
  findChampion(champion) {  
    return new Promise(resolve => {
  const search = champion.toProperCase();
  fetch(`http://ddragon.leagueoflegends.com/cdn/${this.version}/data/en_US/champion/${search}.json`)
  .then(res => res.json())
  .then(resolve)
    })
  }
  
  async findItem(name) {
    if(!name) throw new SyntaxError("No item name specified.")
    let res = await fetch(`http://ddragon.leagueoflegends.com/cdn/${this.version}/data/en_US/item.json`)
    let json = await res.json();
    let filteredResult = Object.values(json.data).filter(m => m.name === name.toProperCase());
    if(!filteredResult || !filteredResult.length) throw new Error("Item not found.")
    return filteredResult[0];
  }
  
  async findSpell(name) {
    if(!name) throw new SyntaxError("No spell name specified.")
    let res = await fetch(`http://ddragon.leagueoflegends.com/cdn/${this.version}/data/en_US/summoner.json`)
    let json = await res.json();
    let filteredResult = Object.values(json.data).filter(m => m.name === name.toProperCase());
    if(!filteredResult || !filteredResult.length) throw new Error("Spell not found.");
    return filteredResult[0];
  }
  
  async fetchAllItems() {  
     let res = await fetch(`http://ddragon.leagueoflegends.com/cdn/${this.version}/data/en_US/item.json`)
     let json = await res.json();
     let result = Object.values(json.data);
    
     return result;
  };
  
  async fetchAllSpells() {
    
    let res = await fetch(`http://ddragon.leagueoflegends.com/cdn/${this.version}/data/en_US/summoner.json`);
    let json = await res.json();
    let result = Object.values(json.data);
    
    return result; 
    
  }
  
  
}

String.prototype.toProperCase = function(opt_lowerCaseTheRest) {
  return (opt_lowerCaseTheRest ? this.toLowerCase() : this)
    .replace(/(^|[\s\xA0])[^\s\xA0]/g, function(s){ return s.toUpperCase(); });
};


module.exports = DataDragon;