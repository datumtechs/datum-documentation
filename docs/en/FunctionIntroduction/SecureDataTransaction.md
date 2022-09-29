# Secure Data Transaction

Datum attaches various verifiable credential properties to Data NFTs and leverages proxy re-encryption algorithms to offer such functions as authorization for data access, secure data sharing, and ownership transfer. The platform achieves the settlement of data transactions via Data Tokens.



## Authorized Access Based on Token Properties

When the user initiates a data access request, Datum relies on the user's Token for authentication to determine whether he can view the metadata or raw data; the Token properties contain the permission of access to the data, which allows Datum to determine if the user's request is legitimate.

## Secure Sharing Based on Token Properties

The Token properties also include operation permissions, such as use right and ownership; the user can obtain the ownership of the data by purchasing the Token and then download the raw data using the Token; upon receiving download requests, Datum will determine if the user's request is legitimate through the operation permissions contained in the token properties.

## Settlement Operations After Token Usage

After the user used the Token to complete the relevant data operations, Datum will confirm the usage of the Token and then modify the operation properties of the Token and upload it to the blockchain. For instance, the number of operations of the used Token will be modified, or the Token will be set to frozen/destroyed, which are both properties that determine whether the user can operate the Token.

## Usage Process

- Diagram

  ![][Secure Data Transaction]

- Summary

  - The user calls the API for viewing metadata to obtain the specific metadata of the NFT, which helps him decide whether to make the purchase;
  - The user buys the NFT through the NFT marketplace;
  - If the raw data is stored through entrusted storage (the specific storage method is specified in the metadata), the user will need to apply for permission to access the plaintext data and acquire the decryption key;
  - The user calls the API for viewing or downloading the raw data to access the raw data;
  - If the raw data is stored through entrusted storage, the user will need to decrypt the data using the decryption key to obtain the plaintext data;
  - Once the data transaction is completed, the user's Data Token will be processed accordingly (burned). 

## [][api desc]Please refer to [APIs for Secure Data Transaction](api desc) for more specific user instructions

[Secure Data Transaction]: ../img/data_security_transaction.png
[api desc]: ../APIDescription/SecureDataTransaction.md

