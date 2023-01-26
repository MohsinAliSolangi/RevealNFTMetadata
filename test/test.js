const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("PreReveal", function () {

  let preReveal;
  it("this is smart contract deployment ", async function(){
    [per1,per2,per3] = await ethers.getSigners();
  
    const PreReveal = await hre.ethers.getContractFactory("PreReveal");
    preReveal = await PreReveal.deploy("https://gateway.pinata.cloud/ipfs/QmVQEUtcaaNyLxLFQtXFxWekoXmwG18Gy8Vdk668bUMmTA/");
    await preReveal.deployed();
  
    console.log(
      `preReveal addresss is  ${preReveal.address} `
    );
  })

  it("IN this we Call minting Function ", async function(){
    await preReveal.safeMint(per1.address);
  });

  it("get Token Uri Before Reveal", async function(){
    const uri = await preReveal.tokenURI("1");
    console.log("this is uri ", uri);
  })

  it("IN this we Call minting Function ", async function(){
    await preReveal.safeMint(per1.address);
    await preReveal.safeMint(per1.address);
  });
  
  it("get Token Uri after Reveal & its change ", async function(){
   const uri = await preReveal.tokenURI("1");
   console.log("this is uri ", uri);
  })
  


      


 
});
