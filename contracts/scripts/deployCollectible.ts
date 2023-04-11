import { ethers } from "hardhat";
const GOVERNOR = "0x7a7F53c8BF3eadB035791b3A12221fED1017e23A";

async function main() {
  console.log('deploying TestToken contract')
  const ERC1155 = await ethers.getContractFactory("TestERC1155");
  const erc1155 = await ERC1155.deploy(GOVERNOR);
  await erc1155.deployed();

  console.log(`erc1155 contract is deployed to ${erc1155.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
