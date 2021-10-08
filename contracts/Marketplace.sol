// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.6.0 <0.9.0;

contract CrowdFunding {


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
        ProductState state;
    }
    
    


    /* 
     * Events
     */
    event LogItemBought(uint sku, address buyer, address _from)


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
      mapping(uint => Item) public items; 
      mapping(uint => address) public sellors;
      mapping(uint => address) public buyers; 




     constructor() public {
         owner = msg.sender;
         skuCount = 0; 
     }


     
     
     /* 
      * Functions
      */
    
    
    function listItem(string memory _name, uint _price) public returns(bool) {
        items[skuCount] = Item(_name, skuCount, _price, ProductState.Available);
        sellors[skuCount] = msg.sender; 
        skuCount ++; 
        delete items[skuCount]; 
    }
    
    function buyItem(uint sku) public payable{

        require(msg.value >= items[skuCount].price , "You did not send enough funds to buy this product");
        buyers[skuCount] = msg.sender; // 
        emit LogItemBought(skuCount, msg.sender, sellors[skuCount]); 
        
        
        
        
    }


}