const fetch = require("node-fetch");
module.exports = class API {
  
  constructor(options = {}) {
    
    /*
    * API class
    * @param {object} options - options for api.
    * @param {string} options.apikey - the API key. (Required)
    * @param {string} [options.reigon="na1"] - the reigon (optional)
    */
    
    if(!options.apikey) throw new Error("No API key entered.")
    
    /*
    * API key
    * @type {string}
    */
    this.apikey = options.apikey;
    
    /*
    * Reigon
    * @type {string}
    */
    this.reigon = options.reigon || "na1"
  }
  
  /*
  * Finds a summoner
  * @param {string} gameName In-game name
  * @returns {Promise<object>} 
  */
  
  async findSummoner(gameName) {
  let res = await fetch(`https://${this.reigon}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${gameName}?api_key=${this.apikey}`)
  let json = await res.json();
  return json;
  }
  
  /*
  * Gets a summoner's champion mastery.
  * @param {number} championId champion's id
  * @param {string} encryptedSummonerId
  * @returns {Promise<object>} 
  */
  
  async getChampionMastery(championId, encryptedSummonerId) {
    let res = await fetch(`https://${this.reigon}.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${championId}/by-champion/${encryptedSummonerId}?api_key=${this.apikey}`)
    let json = await res.json();
    return json;
  }
  
  
  
  
}