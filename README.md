# Ethereum Smart Contract, Tokens, and Dapp 

**PROJECT: Decentralized Star Notary Service Project** - This is a star notary DApp complete with a smart contract and deployed to the public testnet, Rinkeby.

### Token Particulars (ERC-721):

**Token Name** - Starburst

**Token Symbol** - STR

### Particular Package Versions Used

**Truffle Version**

For this project, the following truffle version was used:

```bash

Truffle v5.3.7 (core: 5.3.7)
Solidity - 0.5.16 (solc-js)
Node v16.0.0
Web3.js v1.3.6
```

**OpenZeppelin v2.3.0** - for writing smart contract for this particular project.

**Metamask: 9.5.4** - for connecting to Rinkeby testnet.

### Dependencies

**Other mandatory packages**:

```bash
# install packages
npm install --save  openzeppelin-solidity@2.3
npm install --save  truffle-hdwallet-provider@1.0.17
npm install webpack-dev-server -g
npm install web3
```

### Running the application
1. Clean the frontend 
```bash
cd app
# Remove the node_modules  
# remove packages
rm -rf node_modules
# clean cache
npm cache clean
rm package-lock.json
# initialize npm (you can accept defaults)
npm init
# install all modules listed as dependencies in package.json
npm install
```


2. Start Truffle by running
```bash
# For starting the development console
truffle develop
# truffle console

# For compiling the contract, inside the development console, run:
compile

# For migrating the contract to the locally running Ethereum network, inside the development console
migrate --reset

# For running unit tests the contract, inside the development console, run:
test
```

3. Frontend - Once you are ready to start your frontend, run the following from the app folder:
```bash
cd app
npm run dev
```

---

### Important
When you will add a new Rinkeyby Test Network in your Metamask client, you will have to provide:

| Network Name | New RPC URL | Chain ID |
|---|---|---|
|Private Network 1|`http://127.0.0.1:9545/`|1337 |

The chain ID above can be fetched by:
```bash
cd app
node index.js
```