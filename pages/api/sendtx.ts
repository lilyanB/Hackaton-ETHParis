import { createWalletClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { sepolia } from "viem/chains";
import abi from "../../artifacts/contracts/Verifier.sol/Verifier.json";
require("dotenv").config();

const { PRIVATE_KEY } = process.env;
export default async function handler(req: any, res: any) {
  if (!PRIVATE_KEY || PRIVATE_KEY.trim() === "") {
    res
      .status(500)
      .json({ error: "PRIVATE_KEY is missing or empty in the environment." });
    return;
  }

  if (req.method === "POST") {
    const account = privateKeyToAccount(`0x${PRIVATE_KEY}`);

    // Instance wallet
    const client = createWalletClient({
      account,
      chain: sepolia,
      transport: http(),
    });

    try {
      const tx = await client.writeContract({
        address: "0xADF03889B7931DAE45Ef82b27b76812C8BFaFbE6",
        abi: abi.abi,
        functionName: "verifySismoConnectResponse",
        args: [req.body.Bytes],
        gas: 6_000_000n,
      });

      console.log("tx", tx);

      res.status(200).json({ sismoId: req.body.sismoId });
    } catch (error) {
      res.status(500).json({ error: "Error sending transaction." });
    }
  } else {
    res.status(200).json({ name: "I need POST request" });
  }
}
