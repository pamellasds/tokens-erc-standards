const { expect } = require("chai");

describe('CharToken', function () {
  describe('transfer', function() {
    it('transfer tokens, reduces supply and wallet balances', async function(){
  
      [owner, signer2] = await ethers.getSigners();
      const CharToken = await ethers.getContractFactory('CharToken', owner);
      let charToken = await  CharToken.deploy();

      let ownerBalance;
      let signer2Balance
      let totalSupply;
  
      totalSupply = await charToken.totalSupply();
      ownerBalance = await charToken.balanceOf(owner.address);
     
      expect(totalSupply).to.equal(ethers.parseEther('5'));
      expect(ownerBalance).to.equal(ethers.parseEther('5'));
  
      await charToken.connect(owner).transfer(
        signer2.address,
        ethers.parseEther('2.5')
      )
  
      totalSupply = await charToken.totalSupply();
      ownerBalance = await charToken.balanceOf(owner.address);
      signer2Balance = await charToken.balanceOf(signer2.address);

      expect(totalSupply).to.equal(ethers.parseEther(String(5 - (2.5 * 0.50))));
      expect(ownerBalance).to.equal(ethers.parseEther('2.5'));
      expect(signer2Balance).to.equal(ethers.parseEther('1.25'));
    })
  })
})


