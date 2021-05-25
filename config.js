require('dotenv').config();
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  infuraKey: process.env.MY_RINKEBY_PROJECT_ID,
  mnemonic: process.env.MY_METAMASK_SEED,
  metaMaskAcct1: process.env.MY_META_MASK_ACCT,
};