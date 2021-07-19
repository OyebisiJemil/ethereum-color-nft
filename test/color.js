
const Color = artifacts.require("Color");
require('chai')
  .use(require('chai-as-promised'))
  .should()

contract("Color", function (accounts) {
  let contract;

  describe('deployment', async () => {

    before(async () =>{
      contract = await Color.deployed();
    })
    
    it('deploys successfully', async () => {
      const address = contract.address;

      assert.notEqual(address, '');
      assert.notEqual(address, 0x0);
      assert.notEqual(address, undefined);
      assert.notEqual(address, null);
    })

    it('has a name', async () => {
      const name = await contract.name();

      assert.equal(name, 'Color');
    })

    it('has a symbol', async () =>{
      const symbol = await contract.symbol();

      assert.equal(symbol, 'COLOR');
    })

    describe('minting', async () => {
      it('creates a new token', async () => {
        const result = await contract.mint('#EC058E');

        const event = result.logs[0].args;                                                                                                                                             e.log(event);
        assert.equal(event.to, accounts[0]);
        assert.equal(event.from, "0x0000000000000000000000000000000000000000");
        assert.equal(event.tokenId.length, 1);


        // //Failure: can't mint a color that is already minted
        await contract.mint('#EC058E').should.be.rejected;
      })
    })
  })
});
