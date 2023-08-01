import { EAS, SchemaEncoder } from "@ethereum-attestation-service/eas-sdk";
const { ethers } = require("ethers");
require("dotenv").config();

const { PRIVATE_KEY } = process.env;

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const EASContractAddress = "0x0a7E2Ff54e76B8E6659aedc9103FB21c038050D0";
    const eas = new EAS(EASContractAddress);
    const provider = new ethers.getDefaultProvider("sepolia");
    console.log("provider", provider);
    const signer = new ethers.Wallet(PRIVATE_KEY, provider);
    eas.connect(signer);
    const schemaEncoder = new SchemaEncoder(
      "uint256 proposalID, string IDSismo"
    );
    const encodedData = schemaEncoder.encodeData([
      { name: "proposalID", value: req.body.proposalId, type: "uint256" },
      { name: "IDSismo", value: req.body.sismoId, type: "string" },
    ]);
    const schemaUID =
      "0x45b9082da8e3ac5be774e9738e91a4dc82de5ec7caaef0713b304b314f97a553";
    eas.connect(signer);
    const tx = await eas.attest({
      schema: schemaUID,
      data: {
        recipient: req.body.sismoId,
        expirationTime: 0,
        revocable: true,
        data: encodedData,
      },
    });
    const newAttestationUID = await tx.wait();
    console.log("New attestation UID:", newAttestationUID);

    res.status(200).json(newAttestationUID);
  } else if (req.method === "GET") {
    res.status(200).json("sdkeas");
  } else {
    res.status(200).json(req.body);
  }
}
