const SmartContract = artifacts.require("SmartContract");

module.exports = function (deployer) {
  deployer.deploy(SmartContract,"Name","Symbol","https://nftmetdata.s3.eu-central-1.amazonaws.com/","https://nftmetdata.s3.eu-central-1.amazonaws.com/");
};
