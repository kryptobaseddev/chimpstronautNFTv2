//"use strict";

var abi = [{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"MAX_CHIMPS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"numCHIMPS","type":"uint256"}],"name":"adoptCHIMP","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_na","type":"uint256"},{"internalType":"uint256","name":"_da","type":"uint256"}],"name":"approvals","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"numCHIMPSToBurn","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"calculatePrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"hasSaleStarted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pauseSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"numCHIMPS","type":"uint256"}],"name":"reserveGiveaway","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"numCHIMPSToAdd","type":"uint256"}],"name":"setNewMaxCHIMPS","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_p1","type":"uint256"},{"internalType":"uint256","name":"_p2","type":"uint256"},{"internalType":"uint256","name":"_p3","type":"uint256"},{"internalType":"uint256","name":"_p4","type":"uint256"},{"internalType":"uint256","name":"_p5","type":"uint256"}],"name":"setadjprice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_markP","type":"uint256"},{"internalType":"uint256","name":"_krhT","type":"uint256"},{"internalType":"uint256","name":"_abct","type":"uint256"},{"internalType":"uint256","name":"_extrt","type":"uint256"}],"name":"setdivisor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_gso","type":"uint256"}],"name":"setgas","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_marK","type":"address"},{"internalType":"address","name":"_krhB","type":"address"},{"internalType":"address","name":"_abcN","type":"address"},{"internalType":"address","name":"_extS","type":"address"}],"name":"setrre","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"tokensOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawAll","outputs":[],"stateMutability":"payable","type":"function"}];
var contractAddress = '0xE39b4607595D6D0DCD5f060868D06540d6Afb6B4';

var tokenabi = [{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"MAX_CHIMPS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"numCHIMPS","type":"uint256"}],"name":"adoptCHIMP","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_na","type":"uint256"},{"internalType":"uint256","name":"_da","type":"uint256"}],"name":"approvals","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"numCHIMPSToBurn","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"calculatePrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"hasSaleStarted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pauseSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"numCHIMPS","type":"uint256"}],"name":"reserveGiveaway","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"numCHIMPSToAdd","type":"uint256"}],"name":"setNewMaxCHIMPS","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_p1","type":"uint256"},{"internalType":"uint256","name":"_p2","type":"uint256"},{"internalType":"uint256","name":"_p3","type":"uint256"},{"internalType":"uint256","name":"_p4","type":"uint256"},{"internalType":"uint256","name":"_p5","type":"uint256"}],"name":"setadjprice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_markP","type":"uint256"},{"internalType":"uint256","name":"_krhT","type":"uint256"},{"internalType":"uint256","name":"_abct","type":"uint256"},{"internalType":"uint256","name":"_extrt","type":"uint256"}],"name":"setdivisor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_gso","type":"uint256"}],"name":"setgas","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_marK","type":"address"},{"internalType":"address","name":"_krhB","type":"address"},{"internalType":"address","name":"_abcN","type":"address"},{"internalType":"address","name":"_extS","type":"address"}],"name":"setrre","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"tokensOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawAll","outputs":[],"stateMutability":"payable","type":"function"}];
var tokenContractAddress = '0xE39b4607595D6D0DCD5f060868D06540d6Afb6B4';

var BUSDabi = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DELEGATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint32","name":"","type":"uint32"}],"name":"checkpoints","outputs":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint256","name":"votes","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegator","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getCurrentVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPriorVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];
var BUSDContractAddress = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56';

var web3;
var contract;
var jsonBaseAddress = "https://gateway.pinata.cloud/ipfs/QmZC3J3FT5pcjt73Z3Tg1T6sLpWN9kMCiHeq4gPA158cpi/"
const MAINNET = "56";
const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const evmChains = window.evmChains;
//var userAddress = "x";
var web3Modal;
var provider;
var chainId;
var myVar;
var bnbprice = 0;
var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
    var status = xhr.status;
    if (status === 200) {
        callback(null, xhr.response);
    } else {
        callback(status, xhr.response);
    }
    };
    xhr.send();
};

$('#search').change(function() {
    checkval();
});

$('#search').focus(function() {
    checkval();
});

$('#search').blur(function() {
    checkval();
});

window.addEventListener('load', async () => {
    document.querySelector("#wallet-connect").addEventListener("click", onConnect);
});

window.addEventListener('load', async () => {
    document.querySelector("#wallet-mint").addEventListener("click", init2);
});


$(document).ready(function() {
    init();
    //getNFTsOfUser();
    if (typeof $.cookie('address') !== 'undefined' && web3.utils.isAddress($.cookie('address'))) {
        $("#search").val($.cookie('address'));
        userdetails($.cookie('address'));
        myVar = setInterval(function(){
            userdetails($.cookie('address'));
        }, 1000000);

    }
});

function checkval(){
	var address = $("#search").val().trim();
	if (web3.utils.isAddress(address)) {
	    $.cookie("address", address, {
	        path: '/'
	    });
	    userdetails(address);
	    clearInterval(myVar);
	    myVar = setInterval(function(){
	        userdetails(address);
	    }, 500000);


	}
}

async function init() {
     web3 = new Web3('https://bsc-dataseed.binance.org/');
     contract = new web3.eth.Contract(abi, contractAddress);

     var maxtokens = await contract.methods.MAX_CHIMPS().call();
	   //var dividendfinal = dividend > 0 ? (dividend / 10 ** 18).toFixed(4) : '0.00';
	   $("#maxtokens").html(maxtokens);
	   var mintedtokens = await contract.methods.totalSupply().call();
     //var reflectionsfinal = reflections > 0 ? (reflections / 10 ** 9).toFixed(4) : '0.00';
     $("#mintedtokens").html(mintedtokens);

     var mintprice = await contract.methods.calculatePrice().call();
     var mintpricefinal = mintprice > 0 ? (mintprice / 10 ** 18).toFixed(2) : '0.00';
     $("#mintpricefinal").html(mintpricefinal);

		console.log("WalletConnectProvider is", WalletConnectProvider);

    console.log("window.ethereum is", window.ethereum);

		if (location.protocol !== 'https:') {
        // https://ethereum.stackexchange.com/a/62217/620
        //const alert = document.querySelector("#alert-error-https");
        //alert.style.display = "block";
        //document.querySelector("#btn-connect").setAttribute("disabled", "disabled")
        //return;
    }

    const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider,
            options: {
                rpc: {
                    56: 'https://bsc-dataseed.binance.org/'
                },
                chainId: 56,
                network: 'mainnet',
            }
        }
    };
    web3Modal = new Web3Modal({
        cacheProvider: true,
        providerOptions,
        disableInjectedProvider: false
    });

    console.log("Web3Modal instance is", web3Modal);
    //getNFTsOfUser(userAddress);
}

async function onConnect() {
    console.log("Opening a dialog", web3Modal);
    try {
        provider = await web3Modal.connect();
    } catch (e) {
        console.log("Could not get a wallet connection", e);
        return;
    }
    provider.on("accountsChanged", (accounts) => {
        init2();
        //getNFTsOfUser();
    });
    provider.on("chainChanged", (chainId) => {
        init2();
    });
    provider.on("networkChanged", (networkId) => {
        init2();
    });
    //await init2();
    //getNFTsOfUser(userAddress);
}

async function userdetails(userAddress) {
    var tokenContract = new web3.eth.Contract(tokenabi, tokenContractAddress);
	  var balance = await tokenContract.methods.balanceOf(userAddress).call();
    //var balance = balanceInfo > 0 ? (balanceInfo / 10 ** 9).toFixed(4) : '0.00';
    $("#balance").html(balance);

    var string = userAddress;

    var BUSDContract = new web3.eth.Contract(BUSDabi, BUSDContractAddress);
    var BUSDBalance = await BUSDContract.methods.balanceOf(userAddress).call();
    var userBUSDBalance = (BUSDBalance / 10 ** 18).toFixed(6);
    string += " | BUSD In Your Wallet: " + userBUSDBalance;

    $('#distext').html(string);
    getNFTsOfUser(userAddress);

    // var dividend = await contract.methods.getMyRewardsOwed(userAddress).call();
	 //var dividendfinal = dividend > 0 ? (dividend / 10 ** 18).toFixed(4) : '0.00';
	 //$("#processing").html(dividendfinal+ ' BUSD');

    // var shares = await contract.methods.getMyTotalRewards(userAddress).call();
    // var sharesfinal = shares > 0 ? (shares / 10 ** 18).toFixed(4) : '0.00';
	// $("#bnbpaid").html(sharesfinal+ ' BUSD');

	 //  var cbshares = await contract.methods.mytotalReflections(userAddress).call();
	 //  var cbsharesfinal = cbshares > 0 ? (cbshares / 10 ** 9).toFixed(4) : '0.00';
   //$("#cheemsbonkpaid").html(cbsharesfinal+ ' CHEBONK');

}

async function getNFTsOfUser(userAddress){
    // DELETE ALREADY SHOWING NFTs
    const myNode = document.getElementById("placetoshownfts");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }
    var string = userAddress;

    var contract = new web3.eth.Contract(abi, contractAddress)
    contract.methods.balanceOf(userAddress).call((err, result) => {
        if(!err) {
            numerOfTokensUserHas = result;
            arrayOfTokensUserHas = []
            for (let i = 0; i < result; i++) {
                contract.methods.tokenOfOwnerByIndex(userAddress, i).call((err, result) => {
                    arrayOfTokensUserHas.push(result);
                    console.log(jsonBaseAddress + result)
                    getJSON(jsonBaseAddress + result,
                        function(err, data) {
                        if (err !== null) {
                            console.log("Something Went Wrong");
                        } else {
                            var theURL = data.image;
                            var img = document.createElement('img');
                            var tokenNumber = document.createElement('h2');
                            var lineBreak = document.createElement('br');
                            img.src = theURL;
                            img.class = "nftimages"
                            img.style="width: 100%;max-width: 250px;height: auto;display: block;margin-left: auto;margin-right: auto;border-radius: 15px;box-shadow: 0px 5px 12px 0px #010710d9;"
                            tokenNumber.style="font-size: max(2vw, 30px);text-align: center;"
                            tokenNumber.innerHTML = data.name
                            document.getElementById('placetoshownfts').appendChild(tokenNumber);
                            document.getElementById('placetoshownfts').appendChild(img);
                            document.getElementById('placetoshownfts').appendChild(lineBreak);
                        }
                    });
                })
            }
        }
        else
            document.getElementById("numberoftokens").innerHTML = err;
    })
}

async function init2() {
    const web3 = new Web3(provider);
    contract = new web3.eth.Contract(abi, contractAddress);
    web3.eth.getAccounts(function(err, accounts) {
        if (err != null) {
            swal({
                title: "Error Found",
                text: err,
                type: "error",
                showCancelButton: false,
                confirmButtonClass: "btn-danger",
                confirmButtonText: "Ok",
                closeOnConfirm: false
            });
        } else if (accounts.length === 0) {
            swal({
                title: "Error Found",
                text: 'Your Wallet is Locked. Please Unlock It To Use DAPP',
                type: "error",
                showCancelButton: false,
                confirmButtonClass: "btn-danger",
                confirmButtonText: "Ok",
                closeOnConfirm: false
            });
        } else if (web3.currentProvider.chainId != 0x38) {
            swal({
                title: "Error Found",
                text: 'Make Sure You Are Using The Binance Smart Chain Mainnet Network',
                type: "error",
                showCancelButton: false,
                confirmButtonClass: "btn-danger",
                confirmButtonText: "Ok",
                closeOnConfirm: false
            });
        } else {
            var userAddress = accounts[0];
            $.cookie("address", userAddress, {
                path: '/'
            });
            $("#search").val(userAddress);

            clearInterval(myVar);
            myVar = setInterval(function(){
                 userdetails(userAddress);
            }, 5000000);
            var contract = new web3.eth.Contract(abi, contractAddress);
            let contractFunctionData = contract.methods.adoptCHIMP(1).encodeABI();
            var price = 0;

            contract.methods.calculatePrice().call((err, result) => {
                                  if(!err) {
                                      price = result
                                      console.log(result)
                                      web3.eth.sendTransaction({
                                          from: accounts[0],
                                          to: '0xE39b4607595D6D0DCD5f060868D06540d6Afb6B4',
                                          value: price,
                                          data: contractFunctionData
                                      }, function(err, result) {
                                      if(!err) {
                                          console.log(result)
                                        //   document.getElementById("mintprocess").innerHTML = "SUCCESSFULLY MINTED AN NFT";
                                        //   theTransactionHash = result;
                                        //   var url = 'https://bscscan.com/tx/' + theTransactionHash;
                                        //   document.getElementById("mintednftlink").innerHTML = "VIEW TRANSACTION";
                                        //   document.getElementById("mintednftlink").href = url;
                                      }
                                  })
                              }
                              else
                                  document.getElementById("mintprocess").innerHTML = "ERROR CALCULATING PRICE";
                              });
              getNFTsOfUser(userAddress);
        }
    });
}


$(document).ready(function() {
    $('body').addClass("dark");
    $(".navbar-default .navbar-nav li.light a").click(function() {
        $('body').addClass("light");
        $('body').removeClass("dark");
        $('.navbar-default .navbar-nav li.light').addClass("active");
        $('.navbar-default .navbar-nav li.dark').removeClass("active");
        $.cookie("body", 'light', {path: '/'});
    });
    $(".navbar-default .navbar-nav li.dark a").click(function() {
        $('body').addClass("dark");
        $('body').removeClass("light");
        $('.navbar-default .navbar-nav li.light').removeClass("active");
        $('.navbar-default .navbar-nav li.dark').addClass("active");
         $.cookie("body", 'dark', {path: '/'});
    });
});
$('.index_page  .small_multi_boxes .box_ani, .finish_box .tba_box_history, .small_lotter_boxes .small_multi_boxes .box_ani ').matchHeight();
