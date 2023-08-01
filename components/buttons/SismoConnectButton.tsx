import { useEffect, useState } from "react";
import {
  SismoConnectButton,
  AuthType,
  SismoConnectResponse,
} from "@sismo-core/sismo-connect-react";
import { encodeAbiParameters } from "viem";

type SismoConnectComponentProps = {
  idSelected: string;
};

export const SismoConnectComponent = ({
  idSelected,
}: SismoConnectComponentProps) => {
  const [responseBytes, setResponseBytes] = useState<string | null>(null);
  const [response, setResponse] = useState<SismoConnectResponse | null>(null);
  const [finished, setFinished] = useState<boolean>(false);
  const appId = "0xedae8cc49b4f32e436691771aadd5393";

  const verifyAndAttest = async (proof: any, Bytes: any) => {
    try {
      setFinished(true);
      const verifierData = {
        proof: proof,
        Bytes: Bytes,
      };
      const verifierOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(verifierData),
      };
      const verifierResponse = await fetch("api/verifier", verifierOptions);
      const verifier = await verifierResponse.json();

      const sendtxData = {
        Bytes: Bytes,
        sismoId: verifier.vaultId,
      };
      const sendtxOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sendtxData),
      };
      const sendtxResponse = await fetch("api/sendtx", sendtxOptions);
      const sendtx = await sendtxResponse.json();

      const sdkeasData = {
        proposalId: "1",
        sismoId: sendtx.sismoId,
      };
      const sdkeasOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sdkeasData),
      };
      const newAttestationUID = await fetch("api/sdkeas", sdkeasOptions);
      console.log(await newAttestationUID.json());
    } catch (error) {
      console.error("Error sending verifier data:", error);
    }
  };

  useEffect(() => {
    if (response !== null && responseBytes !== null && !finished) {
      verifyAndAttest(response, responseBytes);
    }
  }, [responseBytes, response, finished]);

  return (
    <SismoConnectButton
      config={{
        appId: appId,
      }}
      auths={[{ authType: AuthType.VAULT }]}
      claims={[{ groupId: "0x9b72562239c38dbc6fe8a0ff443019bf" }]}
      signature={{
        message: encodeAbiParameters(
          [{ type: "string", name: "blabla" }],
          ["0x00" as `0x${string}`]
          // We use 0x00 as vote, we want to modify this value with the vote of the user
        ),
      }}
      onResponse={(response: SismoConnectResponse) => {
        setResponse(response);
      }}
      onResponseBytes={(responseBytes: string) => {
        setResponseBytes(responseBytes);
      }}
    />
  );
};
