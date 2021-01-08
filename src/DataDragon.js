const fetch = require('node-fetch')

class DataDragon {
  
    /**
    * DataDragon class
    * @param {object} options options for DataDragon.
    * @param {string} [options.version="11.1.1"] version
    * @param {string} [options.lang="en_US"] language 
    */
  
  constructor(options = {}) {
    /**
    * Versions for Data Dragon
    * @type {string}
    */
    this.version = options.version || "11.1.1";  
    
    /**
    * Language
    * @type {string} 
    */
    this.lang = options.lang || "en_US";
  }  
  
  /**
  * Gets all availible versions
  * @returns {Promise<array>}
  * @static
  */
  static getVersions() {
    return new Promise(resolve => {
    fetch(`https://ddragon.leagueoflegends.com/api/versions.json`)
    .then(res => res.json())
    .then(resolve)
    })           
  }
  
  /**
  * Finds a champion
  * @param {string} champion champion name
  * @returns {Promise<object>} 
  */
  
  
  findChampion(champion) {  
    return new Promise(resolve => {
  const search = champion.toProperCase();
  fetch(`http://ddragon.leagueoflegends.com/cdn/${this.version}/data/en_US/champion/${search}.json`)
  .then(res => res.json())
  .then(resolve)
    })
  }
  
  /**
  * Finds an item
  * @param {string} item item name
  * @returns {Promise<object>} 
  */
  
  async findItem(name) {
    if(!name) throw new SyntaxError("No item name specified.")
    let res = await fetch(`http://ddragon.leagueoflegends.com/cdn/${this.version}/data/en_US/item.json`)
    let json = await res.json();
    let filteredResult = Object.values(json.data).filter(m => m.name === name.toProperCase());
    if(!filteredResult || !filteredResult.length) throw new Error("Item not found.")
    return filteredResult[0];
  }
  
  /**
  * Finds a spell
  * @param {string} spell spell name
  * @returns {Promise<object>} 
  */
  
  async findSpell(name) {
    if(!name) throw new SyntaxError("No spell name specified.")
    let res = await fetch(`http://ddragon.leagueoflegends.com/cdn/${this.version}/data/en_US/summoner.json`)
    let json = await res.json();
    let filteredResult = Object.values(json.data).filter(m => m.name === name.toProperCase());
    if(!filteredResult || !filteredResult.length) throw new Error("Spell not found.");
    return filteredResult[0];
  }
  
  /**
  * Fetches all of the items
  * @returns {Promise<object>} 
  */
  
  async fetchAllItems() {  
     let res = await fetch(`http://ddragon.leagueoflegends.com/cdn/${this.version}/data/en_US/item.json`)
     let json = await res.json();
     let result = Object.values(json.data);
    
     return result;
  };
  
   /*
  * Fetches all spells
  * @returns {Promise<object>} 
  */
  
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