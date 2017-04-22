/**
 * Der SimpleClient zeigt, wie Messwerte an den StromDAO Energy Blockchain gesendet werden können.
 * Verwendung:
 *    node simpleClient.js Zählerstand 
 * 
 * Beispiel:
 *    node simpleClient.js 1337
 */


var privateKey="0x1471693ac4ae1646256c6a96edf2d808ad2dc6b75df69aa2709c4140e16bc7c4"; // <= Ein privater Schlüssel 0x1471693ac4ae1646256c6a96edf2d808ad2dc6b75df69aa2709c4140e16bc7c4 für 0x4Cd9Cf35C70C568543a6a583E6e713ea5BF14Acd


/*********************************************************************/
/*  Hier keine weiteren Einstellungen notwendig                      */
/*********************************************************************/

if(process.argv.length>3) {
    privateKey=process.argv[3];
}
if(process.argv.length<3) {
    console.log("Usage:","node simpleClient.js METERREADING [privateKey]");
    process.exit(1);
}

var client = require("./client.js");
client.sendReading(process.argv[2],privateKey);