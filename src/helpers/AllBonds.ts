import { StableBond, LPBond, NetworkID, CustomBond, BondType } from "src/lib/Bond";
import { addresses } from "src/constants";

import { ReactComponent as DaiImg } from "src/assets/tokens/DAI.svg";
import { ReactComponent as HecDaiimg } from "src/assets/tokens/HEC-DAI.svg";
import { ReactComponent as HocusDaiimg } from "src/assets/tokens/HOCUS-DAI.svg";
import { ReactComponent as PAPAMimimg } from "src/assets/tokens/PAPA-MIM.svg";
import { ReactComponent as wAVAXImg } from "src/assets/tokens/wAVAX.svg";
import { ReactComponent as UsdcImg } from "src/assets/tokens/USDC.svg";
import { ReactComponent as MimImg } from "src/assets/tokens/MIM.svg";
import { ReactComponent as UsdtImg } from "src/assets/tokens/USDT.svg";
import { ReactComponent as HecUsdcImg } from "src/assets/tokens/HEC-USDC.svg";

import { abi as BondHecDaiContract } from "src/abi/bonds/HecDaiContract.json";
import { abi as HecUsdcContract } from "src/abi/bonds/HecUsdcContract.json";

import { abi as DaiBondContract } from "src/abi/bonds/DaiContract.json";
import { abi as UsdtBondContract } from "src/abi/bonds/Usdt.json";
import { abi as MimBondContract } from "src/abi/bonds/MimContract.json";
import { abi as ReserveHecDaiContract } from "src/abi/reserves/HecDai.json";
import { abi as ReserveHecUsdcContract } from "src/abi/reserves/HecUsdc.json";

import { abi as EthBondContract } from "src/abi/bonds/FtmContract.json";

import { abi as ierc20Abi } from "src/abi/IERC20.json";

// TODO(zx): Further modularize by splitting up reserveAssets into vendor token definitions
//   and include that in the definition of a bond
export const dai = new StableBond({
  name: "dai",
  displayName: "DAI",
  bondToken: "DAI",
  bondIconSvg: DaiImg,
  bondContractABI: DaiBondContract,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0xd379f598eD15648f1FE9A09f606934B2e8181Eb1",
      reserveAddress: "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0xDea5668E815dAF058e3ecB30F645b04ad26374Cf",
      reserveAddress: "0xB2180448f8945C8Cc8AE9809E67D6bd27d8B2f2C",
    },
  },
});

export const mim = new StableBond({
  name: "mim",
  displayName: "MIM",
  bondToken: "MIM",
  bondIconSvg: MimImg,
  bondContractABI: DaiBondContract,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x6f6613ee5F438A7C56686f28077326Dfa8f76dFC",
      reserveAddress: "0x130966628846bfd36ff31a822705796e8cb8c18d",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0xDea5668E815dAF058e3ecB30F645b04ad26374Cf",
      reserveAddress: "0xB2180448f8945C8Cc8AE9809E67D6bd27d8B2f2C",
    },
  },
});

// export const usdt = new StableBond({
//   name: "usdt",
//   displayName: "USDT",
//   bondToken: "USDT",
//   decimals: 6,
//   bondIconSvg: UsdtImg,
//   bondContractABI: DaiBondContract,
//   networkAddrs: {
//     [NetworkID.Mainnet]: {
//       bondAddress: "0x3e185190f044B3c887b65c11657B0d5433560618",
//       reserveAddress: "0xc7198437980c041c805a1edcba50c1ce5db95118"
//     },
//     [NetworkID.Testnet]: {
//       bondAddress: "",
//       reserveAddress: "",
//     },
//   },
// });
// export const avax = new CustomBond({
//   name: "avax",
//   displayName: "wAVAX",
//   lpUrl: "",
//   bondType: BondType.StableAsset,
//   bondToken: "WAVAX",
//   bondIconSvg: wAVAXImg,
//   bondContractABI: EthBondContract,
//   reserveContract: ierc20Abi, // The Standard ierc20Abi since they're normal tokens
//   networkAddrs: {
//     [NetworkID.Mainnet]: {
//       bondAddress: "0x63933d4e91C84baE6577744fd75c4f4f2C44d901",
//       reserveAddress: "0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7",
//     },
//     [NetworkID.Testnet]: {
//       bondAddress: "0xca7b90f8158A4FAA606952c023596EE6d322bcf0",
//       reserveAddress: "0xc778417e063141139fce010982780140aa0cd5ab",
//     },
//   },
//   customTreasuryBalanceFunc: async function (this: CustomBond, networkID, provider) {
//     const ethBondContract = this.getContractForBond(networkID, provider);
//     let ethPrice = await ethBondContract.assetPrice();
//     ethPrice = ethPrice / Math.pow(10, 8);
//     const token = this.getContractForReserve(networkID, provider);
//     let avaxAmount = await token.balanceOf(addresses[networkID].TREASURY_ADDRESS);
//     avaxAmount = avaxAmount / Math.pow(10, 18);
//     return avaxAmount * ethPrice;
//   },
// });

export const hocus_dai = new LPBond({
  name: "hocus_dai_lp",
  displayName: "HOCUS-DAI LP",
  bondToken: "DAI",
  bondIconSvg: HocusDaiimg,
  bondContractABI: BondHecDaiContract,
  reserveContract: ReserveHecDaiContract,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x215181024f9406644412e9160F4422CDd15cBEA5",
      reserveAddress: "0xda135847d2eaa5805cccf2da9c1d541e99a60d5c",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0xcF449dA417cC36009a1C6FbA78918c31594B9377",
      reserveAddress: "0x8D5a22Fb6A1840da602E56D1a260E56770e0bCE2",
    },
  },
  lpUrl:
    "https://traderjoexyz.com/#/pool/0x74572964d285E2f82940ccE11f1D55a1d168818f/0xbA7dEebBFC5fA1100Fb055a87773e1E99Cd3507a",
});

export const hocus_mim = new LPBond({
  name: "hocus_mim_lp",
  displayName: "HOCUS-MIM LP",
  bondToken: "MIM",
  bondIconSvg: PAPAMimimg,
  bondContractABI: BondHecDaiContract,
  reserveContract: ReserveHecDaiContract,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x10BEb3286258C9F601928B8314f27a91fe83ed4d",
      reserveAddress: "0xc6fe703ef2dfc165bec01080dadc8d70f75fe395",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0xcF449dA417cC36009a1C6FbA78918c31594B9377",
      reserveAddress: "0x8D5a22Fb6A1840da602E56D1a260E56770e0bCE2",
    },
  },
  lpUrl:
    "https://traderjoexyz.com/#/pool/0x74572964d285E2f82940ccE11f1D55a1d168818f/0x130966628846BFd36ff31a822705796e8cb8C18D",
});
// HOW TO ADD A NEW BOND:
// Is it a stableCoin bond? use `new StableBond`
// Is it an LP Bond? use `new LPBond`
// Add new bonds to this array!!
export const allBonds = [dai, mim, hocus_dai, hocus_mim];
export const allBondsMap = allBonds.reduce((prevVal, bond) => {
  return { ...prevVal, [bond.name]: bond };
}, {});

// Debug Log
// console.log(allBondsMap);
export default allBonds;
