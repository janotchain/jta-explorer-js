var api = 'https://explorer.bitcoinmono.io/daemon-api';
var donationAddress = "";
var blockTargetInterval = 50; // enter the block interval in seconds
var coinUnits = 10000;  // enter in the amount of atomic units in 1 coin, eg. 100 shells = 1 trtl
var totalSupply =  10000000000000000; // enter the total supply in atomic units
var symbol = 'BTCMZ'; // enter the coin's ticker
var refreshDelay = 30000;

// pools stats by MainCoins
var networkStat = {
 "BTCMZ": [
	[""]
 ]
};

var networkStat2 = {
    "BTCMZ": [
	["https://webbtcm.semipool.com","https://webbtcm.semipool.com/api"]
 ]
};
