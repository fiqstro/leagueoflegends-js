const fetch = require("node-fetch");
module.exports = class API {
  
  constructor(options = {}) {
    if(!options.apikey) throw new Error("No API key entered.")
    this.apikey = options.apikey;
    this.reigon = options.reigon || "na1"
  }
  
  async findSummoner(gameName) {
  let res = await fetch(`https://${this.reigon}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${gameName}?api_key=${this.apikey}`)
  let json = await res.json();
  return json;
  }
  
  async getChampionMastery(championId, encryptedSummonerId) {
    let res = await fetch(`https://${this.reigon}.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${championId}/by-champion/${encryptedSummonerId}?api_key=${this.apikey}`)
    let json = await res.json();
    return json;
  }
  
  
  
  
}