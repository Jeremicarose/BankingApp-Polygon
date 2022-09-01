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
     function register(uint id,string memory name,string memory kraPin, uint balance) public{



     }
}

