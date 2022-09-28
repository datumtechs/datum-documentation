# APIs for Data Tokenization

Data tokens are issued in the form of NFTs. The raw data is packaged and transformed into a special type of asset, and the rights authentication, transaction & use, and revenue acquisition of assets are achieved in the form of NFTs.

## Token

Datum's data tokenization supports the ERC20 standard; on Datum, the data tokenization process includes the following steps: obtaining contract templates, deploying contracts, correlating raw data (address)/metadata (published) with contract address, minting Tokens, and burning Tokens.

### Obtain Contract Templates

The contract template can be obtained by calling this API. The contract template follows the ERC20 standard, which includes fixed interfaces and events, such as minting Tokens, burning Tokens, etc.

**Instructions**


- Interface: `queryTokenContractTempleteList`
- Request type: `GET`
- Request data type: none
- Response data type: `*/*`
- Request parameter: none
- Response status:

| Status code | Description  |
| ----------- | ------------ |
| 200         | OK           |
| 201         | Created      |
| 401         | Unauthorized |
| 403         | Forbidden    |
| 404         | Not Found    |


- Response parameters:

| Name            | Type      | Description                                           | If required |
| --------------- | --------- | ----------------------------------------------------- | ----------- |
| status          | int       | Response code                                         | Y           |
| result          | jsonArray | List of built-in Token contract templates on Datum    | Y           |
| templeteId      | int       | Id of built-in Token contract templates on Datum      | Y           |
| templeteType    | int       | Type of built-in Token contract templates on Datum    | Y           |
| templeteContent | string    | Content of built-in Token contract templates on Datum | Y           |
| msg             | string    | Response message                                      | Y           |

- Response example:

```json
{
      "status": 200,
      "result": [
        {
            "templeteId": 1,
            "templeteType": 1,
            "templeteContent": "{xxx}" 
        }
      ],
      "msg": "OK"
}
```


- Usage example:

```shell
curl --location --request GET 'http://datumtechs.com/api/v2/dataAsset/queryTokenContractTempleteList'
```

### Deploy Contract

Data providers use their own wallets to deploy the obtained contract template on the specified chain, such as PlatON (default) and Ethereum, and the contract address will be returned upon successful deployment.

**Instructions**


- Interface: `deployToken`
- Request type: `POST`
- Request data type: `application/json`
- Response data type: `*/*`
- Request parameters:

| Name       | Type   | Description      | If required |
| ---------- | ------ | ---------------- | ----------- |
| templeteId | string | Template Id      | Y           |
| user       | string | User information | Y           |
| userType   | int    | User type        | Y           |


- Request parameter example:

```json
{
      "templeteId": 1,
      "user": "0x7e336d121679e9d741ab771992d5f32286f60d4a",
      "userType": 1
}
```

- Response status:

| Status code | Description  |
| ----------- | ------------ |
| 200         | OK           |
| 201         | Created      |
| 401         | Unauthorized |
| 403         | Forbidden    |
| 404         | Not Found    |


- Response parameters:

| Name            | Type   | Description                             | If required |
| --------------- | ------ | --------------------------------------- | ----------- |
| status          | int    | Response code                           | Y           |
| result          | json   | Information returned                    | Y           |
| txHash          | string | Transaction Hash of contract deployment | Y           |
| contractAddress | string | Contract address                        | Y           |
| msg             | string | Response message                        | Y           |

- Response example:

```json
{
      "status": 200,
      "result": {
        "txHash": "0xdadad...454545",
        "contractAddress": "0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646"
      },
      "msg": "OK"
}
```


- Usage example:

```shell
curl --location --request POST 'http://datumtechs.com/api/v2/dataAsset/deployNFT' \
--header 'Content-Type: application/json' \
--data-raw '{
      "templeteId": 1,
      "user": "0x7e336d121679e9d741ab771992d5f32286f60d4a",
      "userType": 1,
    }'
```

### Correlate Raw Data & Metadata with Contract Address

After the contract is successfully deployed, the user must correlate the contract address with the corresponding raw data and metadata. The raw data refers to the address returned after secure on-chain data transfer, and the metadata is the address published; different raw data is managed by different contracts.

**如何使用**

**Instructions**


- Interface: `tokenCorrelateData`
- Request type: `POST`
- Request data type: `application/json`
- Response data type:  `*/*`
- Request parameters:

| Name            | Type    | Description                                                  | If required |
| --------------- | ------- | ------------------------------------------------------------ | ----------- |
| contractAddress | address | Contract address                                             | Y           |
| option          | string  | User-defined property options (json field, including metadataId of the published metadata or originId of the raw data and the retrieval path of raw data, etc.) | Y           |
| desc            | string  | Description information                                      | N           |
| user            | string  | User information                                             | Y           |
| userType        | int     | User type                                                    | Y           |
| sign            | string  | Message signature of the metadata                            | Y           |


- Request parameter example:

```json
{
      "contractAddress": "0x....",
      "option": "{XXx}",
      "desc": "the first contract",
      "user": "0x7e336d121679e9d741ab771992d5f32286f60d4a",
      "userType": 1,
      "sign": "77+9UCNp77+9QFhC77+977+9Ru+/ve+/vUhGEe+/ve+/ve+/ve+/vQbvv73vv70dfu+/vd+Ff++/vTXvv73vv71w77+977+93KTvv73vv70F77+9Nu+/vWhjbEXvv73vv73vv73vv71Z77+977+977+977+9Yu+/ve+/vQ3vv70c"
}
```

- Response status:

| Status code | Description  |
| ----------- | ------------ |
| 200         | OK           |
| 201         | Created      |
| 401         | Unauthorized |
| 403         | Forbidden    |
| 404         | Not Found    |


- Response parameters:

| Name   | Type   | Description                                                  | If required |
| ------ | ------ | ------------------------------------------------------------ | ----------- |
| status | int    | Response code                                                | Y           |
| result | json   | Information returned                                         | Y           |
| txHash | string | Transaction Hash for correlating raw data & metadata with contract address | Y           |
| msg    | string | Response message                                             | Y           |

- Response example:

```json
{
      "status": 200,
      "result": {
        "txHash": "0xdadad...454545"
     },
      "msg": "OK"
}
```


- Usage example:

```shell
curl --location --request POST 'http://datumtechs.com/api/v2/dataAsset/tokenCorrelateData' \
--header 'Content-Type: application/json' \
--data-raw '{
      "templeteId": 1,
      "option": "{XXx}",
      "desc": "the first contract",
      "user": "0x7e336d121679e9d741ab771992d5f32286f60d4a",
      "userType": 1,
      "sign": "77+9UCNp77+9QFhC77+977+9Ru+/ve+/vUhGEe+/ve+/ve+/ve+/vQbvv73vv70dfu+/vd+Ff++/vTXvv73vv71w77+977+93KTvv73vv70F77+9Nu+/vWhjbEXvv73vv73vv73vv71Z77+977+977+977+9Yu+/ve+/vQ3vv70c"
}'
```

### Mint Token

After the contract address is correlated with  the corresponding raw data and metadata, the data provider can start minting tokens, and the minted tokens can be traded on DEXs.

**Instructions**


- Interface: `mintToken`
- Request type: `POST`
- Request data type: `application/json`
- Response data type: `*/*`
- Request parameters:

| Name            | Type    | Description                                                  | If required |
| --------------- | ------- | ------------------------------------------------------------ | ----------- |
| contractAddress | address | Token contract address                                       | Y           |
| chainId         | uint32  | chainId; 1 by default, which represents the Ethereum mainnet | N           |
| property        | string  | Description of the Data Token property; format: json         | Y           |

- Response status:

| Status code | Description  |
| ----------- | ------------ |
| 200         | OK           |
| 201         | Created      |
| 401         | Unauthorized |
| 403         | Forbidden    |
| 404         | Not Found    |


- Response parameters:

| Name            | Type      | Description                               | If required |
| --------------- | --------- | ----------------------------------------- | ----------- |
| status          | int       | Response code                             | Y           |
| result          | jsonArray | List of Token contracts deployed by users | Y           |
| transactionHash | string    | Transaction Hash                          | Y           |
| msg             | string    | Response message                          | Y           |

- Response example:

```json
{
    "status": 200,
    "result": {
        "transactionHash": "0xxxxxxxxxxxxxxxxxxxx"
    },
    "msg": "OK"
}
```

- Usage example:

```shell
curl --request POST \
     --url 'http://datumtechs.com/api/v2/dataAsset/mintToken?contractAddress="0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646"&chainId=$chainId&property=$property' \
     --header 'Accept: application/json' \
     --header 'Content-Type: application/json' \
     --header 'X-API-Key: test'
```

### Burn Token

Users can burn Data Tokens that have been minted and not used in transactions; Tokens should be burned after they are used; for instance, a token must be burned after the raw data was downloaded; burned Tokens can no longer be used.

**Instructions**


- Interface: `burnToken`
- Request type: `POST`
- Request data type: `application/json`
- Response data type: `*/*`
- Request parameters:

| Name            | Type    | Description                                                  | If required |
| --------------- | ------- | ------------------------------------------------------------ | ----------- |
| contractAddress | address | Token contract address                                       | Y           |
| chainId         | uint32  | chainID; 1 by default, which represents the Ethereum mainnet | N           |
| tokenid         | string  | Id of Data Token                                             | Y           |

- Response status:

| Status code | Description  |
| ----------- | ------------ |
| 200         | OK           |
| 201         | Created      |
| 401         | Unauthorized |
| 403         | Forbidden    |
| 404         | Not Found    |


- Response parameters:

| Name            | Type      | Description                             | If required |
| --------------- | --------- | --------------------------------------- | ----------- |
| status          | int       | Response code                           | Y           |
| result          | jsonArray | List of NFT contracts deployed by users | Y           |
| transactionHash | string    | Transaction Hash                        | Y           |
| msg             | string    | Response message                        | Y           |

- Response example:

```json
{
    "status": 200,
    "result": {
        "transactionHash": "0xxxxxxxxxxxxxxxxxxxx"
    },
    "msg": "OK"
}
```

- Usage example:

```shell
curl --request POST \
     --url 'http://datumtechs.com/api/v2/dataAsset/burnToken?contractAddress="0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646"&chainId=$chainId&tokenid=$tokenid' \
     --header 'Accept: application/json' \
     --header 'Content-Type: application/json' \
     --header 'X-API-Key: test'
```



## NFT

Datum's data tokenization also supports Data NFT protocols compatible with the ERC721 and ERC1155 standards; on Datum, the data tokenization process includes the following steps: obtaining contract templates, deploying contracts, correlating raw data (address)/metadata (published) with contract address, minting Tokens, and burning Tokens.

### Obtain Contract Template

The contract template can be obtained by calling this API. The contract template is compatible with Data NFT protocols following the ERC721 and ERC1155 standards, which include fixed interfaces and events, such as minting Tokens, burning Tokens, etc.

**Instructions**


- Interface: `queryNFTContractTempleteList`
- Request type: `GET`
- Request data type: none
- Response data type: `*/*`
- Request parameter: none

- Response status:

| Status code | Description  |
| ----------- | ------------ |
| 200         | OK           |
| 201         | Created      |
| 401         | Unauthorized |
| 403         | Forbidden    |
| 404         | Not Found    |


- Response parameters:

| Name            | Type      | Description                                         | If required |
| --------------- | --------- | --------------------------------------------------- | ----------- |
| status          | int       | Response code                                       | Y           |
| result          | jsonArray | List of built-in NFT contract templates on Datum    | Y           |
| templeteId      | int       | Id Id of built-in NFT contract templates on Datum   | Y           |
| templeteType    | int       | Type of built-in NFT contract templates on Datum    | Y           |
| templeteContent | string    | Content of built-in NFT contract templates on Datum | Y           |
| msg             | string    | Response message                                    | Y           |

- Response example:

```json
{
      "status": 200,
      "result": [
        {
            "templeteId": 1,
            "templeteType": 1,
            "templeteContent": "{xxx}" 
        }
      ],
      "msg": "OK"
}
```


- Usage example:

```shell
curl --location --request GET 'http://datumtechs.com/api/v2/dataAsset/queryNFTContractTempleteList'
```

### Deploy Contract

Data providers use their own wallets to deploy the obtained contract template on the specified chain, such as PlatON and Ethereum, and the contract address will be returned upon successful deployment.

**Instructions**


- Interface: `deployNFT`
- Request type: `POST`
- Request data type: `application/json`
- Response data type: `*/*`
- Request parameters: 

| Name       | Type   | Description      | If required |
| ---------- | ------ | ---------------- | ----------- |
| templeteId | string | Template Id      | Y           |
| user       | string | User information | Y           |
| userType   | int    | User type        | Y           |


- Request parameter example:

```json
{
      "templeteId": 1,
      "user": "0x7e336d121679e9d741ab771992d5f32286f60d4a",
      "userType": 1
}
```

- Response example:

| Status code | Description  |
| ----------- | ------------ |
| 200         | OK           |
| 201         | Created      |
| 401         | Unauthorized |
| 403         | Forbidden    |
| 404         | Not Found    |


- Response parameters:

| Name            | Type   | Description                             | If required |
| --------------- | ------ | --------------------------------------- | ----------- |
| status          | int    | Response code                           | Y           |
| result          | json   | Information returned                    | Y           |
| txHash          | string | Transaction Hash of contract deployment | Y           |
| contractAddress | string | Contract address                        | Y           |
| msg             | string | Response message                        | Y           |

- Response example:

```json
{
      "status": 200,
      "result": {
        "txHash": "0xdadad...454545",
        "contractAddress": "0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646"
      },
      "msg": "OK"
}
```


- Usage example:

```shell
curl --location --request POST 'http://datumtechs.com/api/v2/dataAsset/deployNFT' \
--header 'Content-Type: application/json' \
--data-raw '{
      "templeteId": 1,
      "user": "0x7e336d121679e9d741ab771992d5f32286f60d4a",
      "userType": 1,
    }'
```

### Correlate Raw Data & Metadata with Contract Address

After the contract is successfully deployed, the user must correlate the contract address with the corresponding raw data and metadata. The raw data refers to the address returned after secure on-chain data transfer, and the metadata is published; different raw data is managed by different contracts.

**Instructions**


- Interface: `nftCorrelateData`
- Request type: `POST`
- Request data type: `application/json`
- Response data type: `*/*`
- Request parameters: 

| Name            | Type    | Description                                                  | If required |
| --------------- | ------- | ------------------------------------------------------------ | ----------- |
| contractAddress | address | Contract address                                             | Y           |
| option          | string  | User-defined property options (json field, including metadataId of the published metadata or originId of the raw data and the retrieval path of raw data, etc.) | Y           |
| desc            | string  | Description information                                      | N           |
| user            | string  | User information                                             | Y           |
| userType        | int     | User type                                                    | Y           |
| sign            | string  | Message signature of the metadata                            | Y           |


- Request parameter example:

```json
{
      "contractAddress": "0x....",
      "option": "{XXx}",
      "desc": "the first contract",
      "user": "0x7e336d121679e9d741ab771992d5f32286f60d4a",
      "userType": 1,
      "sign": "77+9UCNp77+9QFhC77+977+9Ru+/ve+/vUhGEe+/ve+/ve+/ve+/vQbvv73vv70dfu+/vd+Ff++/vTXvv73vv71w77+977+93KTvv73vv70F77+9Nu+/vWhjbEXvv73vv73vv73vv71Z77+977+977+977+9Yu+/ve+/vQ3vv70c"
}
```

- Response status:

| Status code | Description  |
| ----------- | ------------ |
| 200         | OK           |
| 201         | Created      |
| 401         | Unauthorized |
| 403         | Forbidden    |
| 404         | Not Found    |


- Response parameters:

| Name   | Type   | Description                                                  | If required |
| ------ | ------ | ------------------------------------------------------------ | ----------- |
| status | int    | Response code                                                | Y           |
| result | json   | Information returned                                         | Y           |
| txHash | string | Transaction Hash for correlating raw data & metadata with contract address | Y           |
| msg    | string | Response message                                             | Y           |

- Response example:

```json
{
      "status": 200,
      "result": {
        "txHash": "0xdadad...454545"
     },
      "msg": "OK"
}
```


- Usage example:

```shell
curl --location --request POST 'http://datumtechs.com/api/v2/dataAsset/nftCorrelateData' \
--header 'Content-Type: application/json' \
--data-raw '{
      "templeteId": 1,
      "option": "{XXx}",
      "desc": "the first contract",
      "user": "0x7e336d121679e9d741ab771992d5f32286f60d4a",
      "userType": 1,
      "sign": "77+9UCNp77+9QFhC77+977+9Ru+/ve+/vUhGEe+/ve+/ve+/ve+/vQbvv73vv70dfu+/vd+Ff++/vTXvv73vv71w77+977+93KTvv73vv70F77+9Nu+/vWhjbEXvv73vv73vv73vv71Z77+977+977+977+9Yu+/ve+/vQ3vv70c"
}'
```

### Mint Token

After the contract address is correlated with the corresponding raw data and metadata, the data provider can start minting tokens, and the minted tokens can be traded on DEXs.

**Instructions**


- Interface: `mintNFT`
- Request type: `POST`
- Request data type: `application/json`
- Response data type: `*/*`
- Request parameters: 

| Name            | Type    | Description                                                  | If required |
| --------------- | ------- | ------------------------------------------------------------ | ----------- |
| contractAddress | address | NFTContract address                                          | Y           |
| chainId         | uint32  | chainId; 1 by default, which represents the Ethereum mainnet | N           |
| property        | string  | Description of the Data Token property; format: json         | Y           |

- Response status:

| Status code | Description  |
| ----------- | ------------ |
| 200         | OK           |
| 201         | Created      |
| 401         | Unauthorized |
| 403         | Forbidden    |
| 404         | Not Found    |


- Response parameters:

| Name            | Type      | Description                             | If required |
| --------------- | --------- | --------------------------------------- | ----------- |
| status          | int       | Response code                           | Y           |
| result          | jsonArray | List of NFT contracts deployed by users | Y           |
| transactionHash | string    | Transaction Hash                        | Y           |
| msg             | string    | Response message                        | Y           |

- Response example:

```json
{
    "status": 200,
    "result": {
        "transactionHash": "0xxxxxxxxxxxxxxxxxxxx"
    },
    "msg": "OK"
}
```

- Usage example:

```shell
curl --request POST \
     --url 'http://datumtechs.com/api/v2/dataAsset/mintNFT?contractAddress="0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646"&chainId=$chainId&property=$property' \
     --header 'Accept: application/json' \
     --header 'Content-Type: application/json' \
     --header 'X-API-Key: test'
```

### Burn Token

Users can burn Data Tokens that have been minted and not used in transactions; Tokens should be burned after they are used; for instance, a token must be burned after the raw data was downloaded; burned Tokens can no longer be used.

**Instructions**


- Interface: `burnNFT`
- Request type: `POST`
- Request data type: `application/json`
- Response data type: `*/*`
- Request parameters: 

| Name            | Type    | Description                     | If required |
| --------------- | ------- | ------------------------------- | ----------- |
| contractAddress | address | NFTContract address             | Y           |
| chainId         | uint32  | chainId; 1 by default, which represents the Ethereum mainnet | N           |
| tokenid         | string  | Data Token的id                  | Y           |

- Response status:

| Status code | Description  |
| ----------- | ------------ |
| 200         | OK           |
| 201         | Created      |
| 401         | Unauthorized |
| 403         | Forbidden    |
| 404         | Not Found    |


- Response parameters:

| Name            | Type      | Description                             | If required |
| --------------- | --------- | --------------------------------------- | ----------- |
| status          | int       | Response code                           | Y           |
| result          | jsonArray | List of NFT contracts deployed by users | Y           |
| transactionHash | string    | Transaction Hash                        | Y           |
| msg             | string    | Response message                        | Y           |

- Response example:

```json
{
    "status": 200,
    "result": {
        "transactionHash": "0xxxxxxxxxxxxxxxxxxxx"
    },
    "msg": "OK"
}
```

- Usage example:

```shell
curl --request POST \
     --url 'http://datumtechs.com/api/v2/dataAsset/burnNFT?contractAddress="0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646"&chainId=$chainId&tokenid=$tokenid' \
     --header 'Accept: application/json' \
     --header 'Content-Type: application/json' \
     --header 'X-API-Key: test'
```

## List Token on Exchanges

To help users publish Data Tokens with one click, Datum provides an API that automatically lists Tokens/NFTs on DEXs or NFT marketplaces.

**Instructions**


- Interface:`exchangeListing`
- Request type: `POST`
- Request data type: `application/json`
- Response data type: `*/*`
- Request parameters: 

| Name             | Type   | Description                                                  | If required |
| ---------------- | ------ | ------------------------------------------------------------ | ----------- |
| contract_address | string | Content of the NFT contract                                  | Y           |
| option           | string | User-defined property options (json field, including metadataId of the published metadata or originId of the raw data and the retrieval path of raw data, etc.) | Y           |
| desc             | string | Description information                                      | N           |
| user             | string | User information                                             | Y           |
| userType         | int    | User type                                                    | Y           |
| sign             | string | Message signature of the metadata                            | Y           |


- Request parameter example:

```json
{
      "templeteId": 1,
      "option": "{XXx}",
      "desc": "the first contract",
      "user": "0x7e336d121679e9d741ab771992d5f32286f60d4a",
      "userType": 1,
      "sign": "77+9UCNp77+9QFhC77+977+9Ru+/ve+/vUhGEe+/ve+/ve+/ve+/vQbvv73vv70dfu+/vd+Ff++/vTXvv73vv71w77+977+93KTvv73vv70F77+9Nu+/vWhjbEXvv73vv73vv73vv71Z77+977+977+977+9Yu+/ve+/vQ3vv70c"
}
```

- Response status:

| Status code | Description  |
| ----------- | ------------ |
| 200         | OK           |
| 201         | Created      |
| 401         | Unauthorized |
| 403         | Forbidden    |
| 404         | Not Found    |


- Response parameters:

| Name   | Type   | Description          | If required |
| ------ | ------ | -------------------- | ----------- |
| status | int    | Response code        | Y           |
| result | json   | Information returned | Y           |
| msg    | string | Response message     | Y           |

- Response example:

```json
{
      "status": 200,
      "result": {
        "txHash": "0xdadad...454545",
        "contractAddress": "0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646"
      },
      "msg": "OK"
}
```


- Usage example:

```shell
curl --location --request POST 'http://datumtechs.com/api/v2/dataAsset/exchangeListing' \
--header 'Content-Type: application/json' \
--data-raw '{
      "templeteId": 1,
      "option": "{XXx}",
      "desc": "the first contract",
      "user": "0x7e336d121679e9d741ab771992d5f32286f60d4a",
      "userType": 1,
      "sign": "77+9UCNp77+9QFhC77+977+9Ru+/ve+/vUhGEe+/ve+/ve+/ve+/vQbvv73vv70dfu+/vd+Ff++/vTXvv73vv71w77+977+93KTvv73vv70F77+9Nu+/vWhjbEXvv73vv73vv73vv71Z77+977+977+977+9Yu+/ve+/vQ3vv70c"
}'
```
