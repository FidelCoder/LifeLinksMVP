// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "./LifeLinksToken.sol";

contract LifeLinkLogic{
 LifeLinkToken public lifelinktoken;

 constructor(address _lifeLinkToken) {
    lifelinktoken = LifeLinkToken(_lifeLinkToken);
}


 //fixed lifelinks tokens to be 10

 uint8 constant public prize =10;
 
 //struct catchup
 struct CatchUp{
    string reason;
    uint   time;
    address catchupOwner;
    uint    catchupNo;

 }

 //join catchup
 struct JoinCatchup{
   address _catchUpOwner;
   uint    _catchNo;
   string  _reason;
   address  _catchupInvite;
 }
 //all capture index
uint256 catchupIndex;

// check if user has join catchup from a specific user for a specific catchNumber
//      user               catchupowner      catchNo   => true or false
mapping(address => mapping(address =>mapping(uint=>bool)))public hasJoin;

 //mapping struct catchup to 
 mapping(address => CatchUp)public catchup;

 //mapping catchup number with the address
 mapping(address => uint) public catchupnumber; 

 //mapping catchupNumber from a user with the catchup
 mapping(uint =>mapping(address => CatchUp)) public catchups;

 //only join one catch up once from the catcup creator
 //       joiner            catchupowner      catchNo
  mapping(address=>mapping(address =>mapping(uint => JoinCatchup))) public JoinCatchupOnce;

  //receive incentive from a catchup 
  /*
  *address participant ,  owner, catchup no , bool
  */
  mapping(address =>mapping(address=>mapping(uint => bool))) public hasReceivedIncentiveForTheCatchup;

 //function create catchup

 function createCatchUp(string memory _reason,uint _time)public  returns(uint) {

 uint catchNo = catchupnumber[msg.sender] +1;
 CatchUp memory catchp = CatchUp({reason:_reason,time:_time,catchupOwner:msg.sender,catchupNo:catchNo});
 catchup[msg.sender] = catchp;
 
 catchups[catchNo][msg.sender] =catchp;
 catchupnumber[msg.sender] ++;
 catchupIndex ++;
 return catchNo;




}

//function to join a catchup

function joinCatchup(uint _catchupNo,address _catchupOwner)public{
  
    CatchUp  memory catchps = catchups[_catchupNo][_catchupOwner];
    require(hasJoin[msg.sender][catchps.catchupOwner][catchps.catchupNo] ==false,"already join the catchup");
    JoinCatchupOnce[msg.sender][catchps.catchupOwner][catchps.catchupNo] = JoinCatchup(catchps.catchupOwner,catchps.catchupNo,catchps.reason,msg.sender);
    hasJoin[msg.sender][catchps.catchupOwner][catchps.catchupNo] = true;


    



}

//give incetives  => most important

function incentive(address _participant, address _catchupowner, uint _catchupNo) private {
    require(!hasReceivedIncentiveForTheCatchup[_participant][_catchupowner][_catchupNo], "already received reward for the catchup");

    lifelinktoken.transfer(_participant, prize);

    // Update the mapping to indicate that the participant has received the incentive
    hasReceivedIncentiveForTheCatchup[_participant][_catchupowner][_catchupNo] = true;
}

//claimIncentive

function claimIncentive(address _participant, address _catchupOwner,uint catchupNo)public{
  
  incentive(_participant, _catchupOwner, catchupNo);
}

//return user created captures 
function userCaptureMeetups(address _creator)public view returns(CatchUp[] memory catchp){
  uint count =0;
  for(uint i=0; i < catchupIndex;++i){
    if(catchups[i][_creator].catchupOwner == _creator){
      count ++;
    }

  }

  catchp = new CatchUp[](count);

  uint index=0;
  for(uint i=0; i < catchupIndex;++i){
    if(catchups[i][_creator].catchupOwner == _creator){
      catchp[index] = catchups[i][_creator];
      index ++;
    }

  }


}

}