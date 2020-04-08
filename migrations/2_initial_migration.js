const YCAdminRole = artifacts.require("YCAdminRole");
const YallaCleanToken = artifacts.require("YallaCleanToken");
const OrgRegistry = artifacts.require("OrgRegistry");

module.exports = async (deployer, network, accouts) => {
    const orgOwner = accouts[0];
    const rate = 100;
    const name = "YallaClean";
    const symbol = "YCT";
    const decimals = 18;
    const matrials = [{
        code: 505,
        itemName: "Organic",
        unitName: 'garm',
         unitMaltiplier : 2,
         price : 20,
    }, {
        code: 506,
        itemName: "plastic",
        unitName: 'garm',
         unitMaltiplier : 2,
         price : 20,
    }, {
        code: 505,
        itemName: "Plastic",
        unitName: 'garm',
         unitMaltiplier : 2,
         price : 20,
    }]
    // const code = 507;
    // const itemName = "Glass";
    // const unitName = 'garm';
    const unitMaltiplier = 2;
    const price = 20;

    console.log(accouts, 'accouts');

    const admin = await deployer.deploy(YCAdminRole);
    const token = await deployer.deploy(YallaCleanToken, name, symbol, decimals);
    const orgReg = await deployer.deploy(OrgRegistry, orgOwner, YCAdminRole.address, YallaCleanToken.address, rate);
    const regInstace = await OrgRegistry.deployed();
    const userFactory = await regInstace.userFactory();
    console.log(userFactory, 'userFactory ');
    const tx1 = await regInstace.manageTrashType(matrials[0].code, matrials[0].itemName, matrials[0].unitName, matrials[0].unitMaltiplier,matrials[0]. price, {
        from: orgOwner
    })
    const tx2 = await regInstace.manageTrashType(matrials[1].code, matrials[1].itemName, matrials[1].unitName, matrials[1].unitMaltiplier,matrials[1]. price, {
        from: orgOwner
    })
    const tx = await regInstace.manageTrashType(matrials[2].code, matrials[2].itemName, matrials[2].unitName, matrials[2].unitMaltiplier,matrials[2]. price, {
        from: orgOwner
    })
    console.log(tx, 'tx ');

};