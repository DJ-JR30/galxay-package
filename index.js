// Created & Organized by:
// DevDex aka DJ JR30

// ------------ urlVaild --------------- //
const validUrl = require('./urlVaild/index.js');
module.exports = {
    validUrl
}

// ----------- Name Generator ---------- //

const { FirstName, LastName } = require('./NameGenerator/index.js');

// ------------ Wordlists -------------- //

const { KamaPos } = require('./Wordlist/KamasutraPos.js');

// ------------  NSFW Coin ------------- //

const { Heads, Tails, Combine } = require('./Package/imageFlipConfig.json');

// ----------- Get DiscordJs ----------- //

const Discord = require('Discord.js');

// ---------- Get PackageInfo ---------- //

const { PackageName, PackageCreator, PackageUUID, PackageVersion } = require('./Package/config.json');

// ----------- Get PowerTools ---------- //
const PowerTools = require('./PowerToolsrc/index.js');
module.exports = {
    PowerTools
}

// ----------- Get EmailVaild ---------- //

const validator = require('./email-validator');
module.exports = {
    validator
}

// -------- Package Information -------- //

function PackageInfo() {
  const InfoPackage = `Package Name: ${PackageName} \nPackage Creator: ${PackageCreator} \nPackage UUID: ${PackageUUID} \nPackage Version: ${PackageVersion}`
    
  return InfoPackage;
}

module.exports.PackageInfo = PackageInfo;

// --------- NSFW Heads / Tails -------- //

function HeadOrTailsNSFW() {
  let step1 = 100 - 1;
  let step2 = Math.random() * step1;
  let setResult = Math.floor(step2) + 1;
  
  if(setResult >= 50 ) {
    // Tails
    var result = `${Tails}`;
  }else{
    // Head
    var result = `${Heads}`;
  }
  
  return result;
}

module.exports.HeadOrTailsNSFW = HeadOrTailsNSFW;

// ------------ KamasutraPos ----------- //

function KamasutraPos() {
  var Result = KamaPos();
  
  return Result;
}

module.exports.KamasutraPos = KamasutraPos;

// ------------ Package Help ----------- //

function PackageHelp() {
  var PackageHelps = new Discord.MessageEmbed()
  .setTitle('Package Help')
  .setDescription('This embed is hard coded in the package, ')
}

module.exports.PackageHelp = PackageHelp;

// --------------- END ----------------- //