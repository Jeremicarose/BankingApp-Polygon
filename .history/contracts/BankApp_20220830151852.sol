pragma solidity ^0.8.9;

contract BankApp {

    address public owner;

//declare a struct to hold the data for each account
struct Account {
    uint id;
    string name;
    string kraPin;
    uint balance;
}
    constructor(){
    owner = msg.sender;
    }

    //registers a new user
     function register(uint id,string memory _name,string memory _kraPin, uint balance) public{
        require(msg.sender == owner, "Only the owner can register a new user");



     }
}

