const HDWalletProvider = require('@truffle/hdwallet-provider');
var mnemonic="r";
var infuraApiKey="r";
var quicknode="https://purple-wispy-isle.ethereum-sepolia.discover.quiknode.pro/your-key/"
const provider = new HDWalletProvider(mnemonic, quicknode);
const owner = "";
// const owner = "0×5a829dEE8832D971d230f77A55Ba3d0714aB2ac9";
const Web3=require("web3");
const web3 = new Web3(provider);
const config = require('./config');
const contractVoting = new web3.eth.Contract(config.voting_ABI, config.VotingAddress);
var cron = require ('node-cron');
const sessionStorage = require('node-sessionstorage');
const account = sessionStorage.getItem('address');

const CreatenewProposal = async (_name:any, _description: any, delay: any, duree: any,_choices:any) => {
    try {
        const ID = await returnNumber();
        let proposal: any;
        try{
            proposal = await contractVoting.methods.
            newProposal(_name, _description, Number (delay), Number (duree),_choices)
            .send({ from: account })
        }catch(error){
            console.error("erreur : ",error)
        }
        const getend = await getProposalbyID(ID);
        const timestamp = getend?.end;
        const dateeffective=new Date(timestamp*1000);
        const cronExpression = `${dateeffective.getMinutes()} ${dateeffective.getHours()} ${dateeffective.getDate()} ${dateeffective.getMonth() + 1} *`;

        cron.schedule (cronExpression, async() => {await closeProposal(ID)});
        return proposal;
    }
    catch (error:any) {
        console.log(error.message);
    return error
    }
}    
const vote = async (_IDProposal: any, choices: any) => {
    try {
        const vote = await contractVoting.methods
        .vote(Number (_IDProposal), choices)
        .send({ from: account });
    return vote
    } catch (error) {
        console.log(error)
    return error
    }
}
const closeProposal = async (_IDProposal: any) => {
    try {
        const close = await contractVoting.methods
        .closeProposal(_IDProposal)
        .send({ from: owner })
        return close
    } catch (error) {
        console.log(error)
        return error
    }
}

const returnNumber = async () => { 
    try{
        const number = await contractVoting.methods
        .returnNumber()
        .call({ from: owner })
        return number
    } catch (error) {
        console.log(error)
        return error
    }
}

const getProposalbyID = async (id: any) => {
    try {
        const proposition = await contractVoting.methods.getProposalbyID(id).call({ from: owner })
    return {
        //PP: proposition, 
        id: proposition[0].id, 
        name: proposition[0]. name,
        description: proposition[0].description, 
        choices: proposition[0]. choices,
        votes: proposition[0].votes,
        executee: proposition[0].executee, 
        begin: proposition[0].begin,
        end: proposition[0].end, 
        state: proposition[0].state,
    } 
    }catch(error) {
        console.log(error)
    }
}    



export {
    CreatenewProposal,
    vote,
}
    