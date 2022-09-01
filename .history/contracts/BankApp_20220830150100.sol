pragma solidity ^0.8.9;

contract BankApp {

    address public owner;

//declare a struct to hold the data for each account
struct Account {
    uint id;
    string name;
    uint kraPin;
    uint balance;
}
    constructor(){
    owner = msg.sender;
    }

    //registers a new user
     function register() public{



     }
}

