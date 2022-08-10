var api = 'https://192.241.157.165:48006';
var donationAddress = "";
var blockTargetInterval = 50; // enter the block interval in seconds
var coinUnits = 10000;  // enter in the amount of atomic units in 1 coin, eg. 100 shells = 1 trtl
var totalSupply =  10000000000000000; // enter the total supply in atomic units
var symbol = 'JTA'; // enter the coin's ticker
var refreshDelay = 30000;

// pools stats by MainCoins
var networkStat = {
 "JTA": [
	[""]
 ]
};

var networkStat2 = {
    "JTA": [
	["https://webbtcm.semipool.com","https://webbtcm.semipool.com/api"]
 ]
};
