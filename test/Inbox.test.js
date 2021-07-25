const assert = require('assert');
// const ganache = require('ganache-cli');
const Web3 = require('web3');
// ? Using ganache-cli
// const web3 = new Web3(ganache.provider());

// ? Using ganache GUI
const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));

// import abi & bytecode
const {interface, bytecode} = require('../compile');

let accounts;
let inbox;

beforeEach(async () => {
    // get a list of all accounts
    accounts = await web3.eth.getAccounts();

    // use one of those accounts to deploy the contract
    inbox = await new web3.eth.Contract(interface)
            .deploy({ data: bytecode, arguments: ['Hi there!']})
            .send({from: accounts[0], gas: '1000000'});
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        console.log(inbox);
    });
});

// ? Example tests using MOCHA
// ? Don't forget to add the "test": "mocha" under package.json scripts
// class Car {
//     park() {
//         return 'stopped';
//     }

//     drive() {
//         return 'vroom';
//     }
// }

// let car;
// beforeEach(() => {
//     car = new Car();
// })

// describe('Car', () => {
//     it('can park', () => {
//          const car = new Car();
//         assert.strictEqual(car.park(), 'stopped');
//     });

//     it('can drive', () => {
         // const car = new Car();
//         assert.strictEqual(car.drive(), 'vroom');
//     })
// })