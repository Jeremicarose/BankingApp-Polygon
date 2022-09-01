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
    
    modifier isLogin(address _user) {
        if (!accounts[_user].status) {
            revert("User not logged in");
            _;
        } 
    }

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

    function login() public view  returns  (bool) {
        //get the account data
        Account memory account = accounts[msg.sender];

        //check if the account exists
        if (account.id == 0) {
            revert("Account does not exist");
        }

        //check if the account is active
       if (account.status == true) {
            revert("Account is not active");
        }
        return true;
        //  accounts[msg.sender] = account;
        
    }

    function deposit(uint256 _amount) public returns (bool) {
        //get the account data
        Account memory account = accounts[msg.sender];
        //check if the account exists
        if (account.id == 0) {
            revert("Account does not exist");
        }
        //check if the account is active
        if (account.status == true) {
            revert("Account is not active");
        }
        //check if the amount is greater than 0
        if (_amount <= 0) {
            revert("Amount must be greater than 0");
        }
        //add the amount to the balance
        account.balance += _amount;
        //update the account data
        accounts[msg.sender] = account;
    
        return true;
        
    }

    //check balance
    function checkBalance(address _user) public view returns  (uint256) {
        //get the account data
        Account memory account = accounts[_user];
        //check if the account exists
        if (account.id == 0) {
            revert("Account does not exist");
        }
        
        
        return account.balance;
    }
        
        
    
    
}


