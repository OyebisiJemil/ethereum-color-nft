// get the contract to deploy
const Color = artifacts.require('Color');

module.exports = function(deployer){
    deployer.deploy(Color);
}