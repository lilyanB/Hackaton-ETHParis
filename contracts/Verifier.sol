// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@sismo-core/sismo-connect-solidity/contracts/libs/SismoLib.sol";

// This is a sample contract that shows how to use the SismoConnect library
contract Verifier is SismoConnect {
    event ResponseVerified(SismoConnectVerifiedResult result);
    address public owner = 0x607Ec1a7F093801b40DaE21131dDAdB8ce991106;
    address public voting;
    address public whitelist;

    constructor()
        SismoConnect(
            buildConfig({
                // replace with your appId from the Sismo factory https://factory.sismo.io/
                // should match the appId used to generate the response in your frontend
                appId: 0xedae8cc49b4f32e436691771aadd5393,
                // For development purposes insert when using proofs that contains impersonation
                // Never use this in production
                isImpersonationMode: false
            })
        )
    {}

    modifier onlyOwner() {
        require(msg.sender == owner, "Only scVote can call this function.");
        _;
    }

    function setVoting(address _voting) public onlyOwner {
        voting = _voting;
    }

    function setWhitelist(address _whitelist) public onlyOwner {
        whitelist = _whitelist;
    }

    function verifySismoConnectResponse(bytes memory response) public {
        // build the auth and claim requests that should match the response
        AuthRequest[] memory auths = new AuthRequest[](1);
        auths[0] = buildAuth({authType: AuthType.VAULT});

        ClaimRequest[] memory claims = new ClaimRequest[](1);
        // ENS DAO Voters
        claims[0] = buildClaim({groupId: 0x9b72562239c38dbc6fe8a0ff443019bf});

        // verify the response regarding our original request
        SismoConnectVerifiedResult memory result = verify({
            responseBytes: response,
            auths: auths,
            claims: claims,
            signature: buildSignature({message: abi.encode("0x00")})
            // We use 0x00 as vote, we want to modify this value with the vote of the user
        });

        emit ResponseVerified(result);
    }
}
