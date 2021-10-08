# Consensys Final Project

## Decentralized Marketplace

- In my decentralized marketplace people can log in with there metamask.
- Users can list items for sale
- Users can buy items

### Basic Functionality:

#### Enums

- productState{Available, Sold, Shipped, Received}

#### Structs

- struct Item{
  string name,
  uint sku,
  uint price,
  ProductState state
  address payable seller,
  address payable buyer (initial address(0))
  }

#### Events

#### Modifiers

#### Mappings

- mapping(uint => Item) items;

#### Functions

x function listItem()

x buyItem()

## NFT Social Media Platform

#####

#####

#####
