# Data Tokenization

Datum's data tokenization supports multiple asset standards and allows users to issue Data Tokens with one click.

Here is how data is tokenized on Datum:

![][Data Tokenization]

## Token

Datum's data tokenization supports the ERC20 standard; on Datum, the data tokenization process includes the following steps: obtaining contract templates, deploying contracts, correlating raw data (address)/metadata (published) with contract address, minting Tokens, and burning Tokens.

### Obtain Contract Template

The contract template can be obtained by calling this API. The contract template is compatible with Data NFT protocols following the ERC721 and ERC1155 standards, which include fixed interfaces and events, such as minting Tokens, burning Tokens, etc.

### Deploy Contract

Data providers use their own wallets to deploy the obtained contract template on the specified chain, such as PlatON (default) and Ethereum, and the contract address will be returned upon successful deployment.

### Correlate Raw Data & Metadata with Contract Address

After the contract is successfully deployed, the user must correlate the contract address with the corresponding raw data and metadata. The raw data refers to the address returned after secure on-chain data transfer, and the metadata is the address published; different raw data is managed by different contracts.

### Mint Token

After the contract address is correlated with  the corresponding raw data and metadata, the data provider can start minting tokens, and the minted tokens can be traded on DEXs.

### Burn Token

Users can burn Data Tokens that have been minted and not used in transactions; Tokens should be burned after they are used; for instance, a token must be burned after the raw data was downloaded; burned Tokens can no longer be used.

## NFT

Datum's data tokenization also supports Data NFT protocols compatible with the ERC721 and ERC1155 standards; on Datum, the data tokenization process includes the following steps: obtaining contract templates, burning contracts, correlating raw data (address)/metadata (published) with contract address, minting Tokens, and burning Tokens.

### Obtain Contract Template

The contract template can be obtained by calling this API. The contract template is compatible with Data NFT protocols following the ERC721 and ERC1155 standards, which include fixed interfaces and events, such as minting Tokens, burning Tokens, etc.

### Deploy Contract

Data providers use their own wallets to deploy the obtained contract template on the specified chain, such as PlatON (default) and Ethereum, and the contract address will be returned upon successful deployment.

### Correlate Raw Data & Metadata with Contract Address

After the contract is successfully deployed, the user must correlate the contract address with the corresponding raw data and metadata. The raw data refers to the address returned after secure on-chain data transfer, and the metadata is published; different raw data is managed by different contracts.

### Mint Token

After the contract address is correlated with the corresponding raw data and metadata, the data provider can start minting tokens, and the minted tokens can be traded on DEXs.

### Burn Token

Users can burn Data Tokens that have been minted and not used in transactions; Tokens should be burned after they are used; for instance, a token must be burned after the raw data was downloaded; burned Tokens can no longer be used.

## List Token on Exchanges

To help users to publish Data Tokens with one click, Datum provides an API that automatically lists Tokens/NFTs on DEXs or NFT marketplaces.

## Please refer to [APIs for Data Tokenization][api desc] for more specific user instructions

[Data Tokenization]: ../../img/data_capitalization.png
[api desc]: ../APIDescription/DataTokenization.md