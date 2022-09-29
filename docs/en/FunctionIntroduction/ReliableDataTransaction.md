# Reliable Data Transaction

Datum attaches various verifiable credential properties to Data NFTs and leverages proxy re-encryption algorithms to offer such functions as authorization for data access, secure data sharing, and ownership transfer. The platform achieves the settlement of data transactions via Data Tokens.


## Supported Data Security Transaction Modes
- Authorized access based on token properties: Verify data access rights and legality
- Secure sharing based on token properties: Control how data is used
- Settlement operations after token usage: Evidence after data use and easy audit


## Framework

- Diagram

  ![][Reliable Data Transaction]

- Summary

  - The user calls the API for viewing metadata to obtain the specific metadata of the NFT, which helps him decide whether to make the purchase;
  - The user buys the NFT through the NFT marketplace;
  - If the raw data is stored through entrusted storage (the specific storage method is specified in the metadata), the user will need to apply for permission to access the plaintext data and acquire the decryption key;
  - The user calls the API for viewing or downloading the raw data to access the raw data;
  - If the raw data is stored through entrusted storage, the user will need to decrypt the data using the decryption key to obtain the plaintext data;
  - Once the data transaction is completed, the user's Data Token will be processed accordingly (burned). 

## [][api desc]Please refer to [APIs for Reliable Data Transaction][api desc] for more instructions

[Reliable Data Transaction]: ../img/data_security_transaction.png
[api desc]: ../APIDescription/ReliableDataTransaction.md

