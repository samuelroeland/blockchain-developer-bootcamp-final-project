// SPDX-License-Identifier: MIT
pragma solidity >=0.5.16 <0.9.0;


contract Marketplace {

    /* 
     * State Variables 
     */
     address public owner = msg.sender; 
     uint public skuCount; 



    /* 
     * Enums
     */
     enum ProductState{Available, Sold, Shipped, Received}


     /* 
      * Structs
      */
    struct Item {
        string name;
        uint sku;
        uint price;
        ProductState state
        address payable seller;
        address payable buyer; 
    }
    

    /* 
     * Events
     */



    /* 
     * Modifiers
     */
     modifier onlyOwner() {
         require(owner == msg.sender); 
         _; 
     }



     /* 
      * Mappings
      */
      mapping(uint => Item) items; 




     constructor() public {
         owner = msg.sender;
         skuCount = 0; 
     }


     
     
     /* 
      * Functions
      */

    function listItem(string _name, uint _price) public  {
        items[skuCount] = Item(_name, skuCount, _price, msg.sender, address(0)); 
    }



}