// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract LifeLinkToken is ERC20{

    //array of owners

    address[] public owners;
    //maping to  store address > bool
    mapping(address =>bool)public isOwner;

    //function mint token
    constructor()ERC20("Life Links","LL"){
        owners.push(msg.sender);
        isOwner[msg.sender] = true;

    }

    function mintLifeLinks(address _address,uint256 amount)public onlyAdmins{
        _mint(_address, amount *10**18);

    }
    //only admins modifier

    modifier onlyAdmins(){
        for(uint i=0; i< owners.length;++i){
            if(owners[i]==msg.sender){
                isOwner[msg.sender] = true;

            }
        }
require(isOwner[msg.sender] == true,"not authorize");
        
        _;
    }

    //add admins/owner allowed to mint tokens

    function addOwnerOrAdmins(address _address)public onlyAdmins{
        owners.push(_address);
    }




}