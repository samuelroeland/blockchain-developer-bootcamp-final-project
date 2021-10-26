const scAddress = "0x963ae813B7F4c6773446AC89a35824E1D35b934e";

const scABI = [
	{
		inputs: [],
		stateMutability: "nonpayable",
		type: "constructor",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint256",
				name: "sku",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "address",
				name: "buyer",
				type: "address",
			},
			{
				indexed: false,
				internalType: "address",
				name: "_from",
				type: "address",
			},
		],
		name: "LogItemBought",
		type: "event",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "sku",
				type: "uint256",
			},
		],
		name: "buyItem",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		name: "buyers",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		name: "items",
		outputs: [
			{
				internalType: "string",
				name: "name",
				type: "string",
			},
			{
				internalType: "uint256",
				name: "sku",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "price",
				type: "uint256",
			},
			{
				internalType: "enum Marketplace.ProductState",
				name: "state",
				type: "uint8",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "string",
				name: "_name",
				type: "string",
			},
			{
				internalType: "uint256",
				name: "_price",
				type: "uint256",
			},
		],
		name: "listItem",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "owner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		name: "sellers",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "skuCount",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
];

console.log("Decentralized Marketplace");

window.addEventListener("load", function () {
	if (typeof window.ethereum !== "undefined") {
		console.log("MetaMask detected");
		let mmDetected = document.getElementById("mm-detected");
		mmDetected.innerHTML = "MetaMask Has been Detected!";
	} else {
		console.log("MetaMask not available");
		this.alert("Install MetaMask");
	}
});

const mmEnable = document.getElementById("mm-connect");

mmEnable.onclick = async () => {
	await ethereum.request({ method: "eth_requestAccounts" });

	const mmCurrentAccount = document.getElementById("mm-current-account");

	mmCurrentAccount.innerHTML =
		"Here is your current account: " + window.ethereum.selectedAddress;
};

const submitItem = document.getElementById("btnUploadItem");

submitItem.onclick = async () => {
	const itemName = document.getElementById("inputItemName").value;
	const itemPrice = document.getElementById("inputItemPrice").value;

	var web3 = new Web3(window.ethereum);

	// Instantiate Smart Contract
	const marketplace = new web3.eth.Contract(scABI, scAddress);
	marketplace.setProvider(window.ethereum);

	await marketplace.methods
		. (itemName, itemPrice)
		.send({ from: ethereum.selectedAddress });
};
