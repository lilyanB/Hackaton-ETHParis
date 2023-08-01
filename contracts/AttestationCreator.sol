// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.10;
// import { IEAS, AttestationRequest,Attestation,AttestationRequestData } from "@ethereum-attestation-service/eas-contracts/contracts/IEAS.sol";
// import { ISchemaResolver } from "@ethereum-attestation-service/eas-contracts/contracts/resolver/ISchemaResolver.sol";

// contract AttestationCreator {
//     // Adresse du contrat SchemaRegistry déployé
//     address public schemaAddress;
//     AttestationRequest public attestationRequest;

//     constructor(address _schemaAddress) {
//         schemaAddress = _schemaAddress;
       
//     }

//     function createAttestation(bytes32 uid,
//         address recipient,
//         uint64 expirationTime,
//         bool revocable,
//         bytes32 refUID,
//         bytes memory data,
//         uint256 value) external returns (bytes32) {
//         // Obtenir l'instance du contrat SchemaRegistry

//         // Créer l'instance du contrat EAS (Ethereum Attestation Service)
//         IEAS eas = IEAS(schemaAddress);

//         AttestationRequest memory request = AttestationRequest({
//             schema: uid,
//             data: AttestationRequestData({
//                 recipient: recipient,
//                 expirationTime: expirationTime,
//                 revocable: revocable,
//                 refUID: refUID,
//                 data: data,
//                 value: value
//             })
//         });

//         // Appeler la fonction pour créer l'attestation
//         bytes32 attestationUID = eas.attest(request);

//         return attestationUID;
//     }
//     // Fonction pour créer une attestation
//     function GetAttestation(bytes32 uid) external view returns (Attestation memory) {
//         // Obtenir l'instance du contrat SchemaRegistry

//         // Créer l'instance du contrat EAS (Ethereum Attestation Service)
//         IEAS eas = IEAS(schemaAddress);

//         return eas.getAttestation(uid);
//     }
// }