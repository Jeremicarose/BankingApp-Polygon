// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract BankApp {
    string public name;

    address public owner;

    //declare a struct to hold the data for each account
    struct Account {
        address user;
        uint256 id;
        string name;
        string kraPin;
        uint256 balance;
        bool status;
    }

    mapping(address => Account) public accounts;

    constructor(string memory _name) {
        owner = msg.sender;
        name = _name;
    }

    //registers a new user
    function register(
        address user,
        uint256 id,
        string memory _name,
        string memory _kraPin,
        uint256 balance
    ) public returns (bool) {
        require(msg.sender == owner, "Only the owner can register a new user");

        //mapping accounts
        Account memory account = accounts[user];

        //check if the account exists
        if (account.id != 0) {
            revert("Account already exists");
        }

        //set the account data
        account.id = id;
        account.name = _name;
        account.kraPin = _kraPin;
        account.balance = balance;

        accounts[user] = account;

        return true;
    }

    function login() public  returns  (bool) {
        //get the account data
        Account storage account = accounts[msg.sender];

        //check if the account exists
        require(account.id != 0, "Account does not exist");

        //check if the account is active
        if (account.status == false) {
            revert("Account is not active");
        }else{
            account.status = true;
        }
        
        //  accounts[msg.sender] = account;
        
    }
}
