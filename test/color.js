const Color = artifacts.require("Color");

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
      })
    })
    
  })
});
