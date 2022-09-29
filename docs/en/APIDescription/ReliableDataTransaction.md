# APIs for Reliable Data Transaction 

## Authorized Access Based on Token Properties

### View Metadata 

On Datum, users can first view the published metadata to check out the raw data and decide whether to purchase the corresponding Data Token; users can also call the API for viewing metadata and initiate queries on the blockchain or the data service platform. The calling does not require authentication.

**Instructions**

- Interface: getMetaData

- Instructions

  | Name             | Type    | Description                                                  | If required |
  | ---------------- | ------- | ------------------------------------------------------------ | ----------- |
  | contract_address | address | NFT contract address                                         | Y           |
  | chainId          | uint32  | chainId; 1 by default, which represents the Ethereum mainnet | N           |
  | tokenid          | string  | NFT id                                                       | Y           |

- Response

  ```json
  {
  	"status": 200,
  	"result": {
  		"token_address": "0x8df91a59b8610990004987ac6ad8b6e70779ee97",
  		"token_id": "1",
  		"owner_of": "0x806164c929ad3a6f4bd70c2370b3ef36c64deaa8",
  		"contract_type": "ERC721",
  		"name": "datum",
  		"symbol": "FZAI1",
          "file_hash": "0x.....................",
          "storage_method": "hosting/Unmanaged",
          "permission_type": "ownership/use", 
  		"metadata": "{
          	"name": "datum", 
          	"description": "this is datum metadata", 
          	"data_size": 100, 
              "columns": 2, 
              "rows": 10, 
              "cols_desc": [
                  {"col_name": "col1", "col_desc": "this is col1 desc"},
                  {"col_name": "col2", "col_desc": "this is col2 desc"}
  			]
  		}"
  	},
  	"msg": "get MetaData success."
  }
  ```

- Example

  ```shell
  curl --request POST \
       --url 'http://datumtechs.com/api/v2/$contract_address/getMetaData?chainId=$chainId&tokenid=$tokenid' \
       --header 'Accept: application/json' \
       --header 'Content-Type: application/json' \
       --header 'X-API-Key: test'
  ```

### View Raw Data

Users can view the raw data corresponding to a Data NFT according to the relevant permissions.

**Main features**

Users can call the API for viewing the raw data through a Data Token with viewing permission. Upon successful authentication, they will be able to view the corresponding raw data. For ciphertext data stored through entrusted storage, users have to first [apply for permission to access the plaintext data](#Apply for Permission to Access Plaintext Data); otherwise, the data will not be available.

**Instructions**

- Interface: getRawData

- Parameter description

  | Name             | Type    | Description                                                  | If required |
  | ---------------- | ------- | ------------------------------------------------------------ | ----------- |
  | contract_address | address | NFT contract address                                         | Y           |
  | chainId          | uint32  | chainId; 1 by default, which represents the Ethereum mainnet | N           |
  | tokenid          | string  | NFT id                                                       | Y           |
  | publicKey        | string  | Users' public key; the parameter needs to be provided when the raw data is stored through entrusted storage; if the user has been authorized, then the parameter can be omitted | N           |

- Response

  ```json
  {
  	"status": 200,
  	"result": {
  		"token_address": "0x8df91a59b8610990004987ac6ad8b6e70779ee97",
  		"token_id": "1",
  		"owner_of": "0x806164c929ad3a6f4bd70c2370b3ef36c64deaa8",
  		"contract_type": "ERC721",
  		"name": "datum",
  		"symbol": "FZAI1",
          "file_hash": "0x.....................",
          "storage_method": "hosting/Unmanaged",
          "permission_type": "ownership/use", 
  		"metadata": "{
          	"name": "datum", 
          	"description": "this is datum metadata", 
          	"file_type": "csv",
          	"data_size": 100, 
              "columns": 2, 
              "rows": 10, 
              "cols_desc": [
                  {"col_name": "col1", "col_desc": "this is col1 desc"},
                  {"col_name": "col2", "col_desc": "this is col2 desc"}
  			]
  		}",
  		"content": "this is data content."
  	},
  	"msg": "get data success."
  }
  ```

- Example

  ```shell
  curl --request POST \
       --url 'http://datumtechs.com/api/v2/$contract_address/getRawData?chainId=$chainId&tokenid=$tokenid&publicKey=$publicKey' \
       --header 'Accept: application/json' \
       --header 'Content-Type: application/json' \
       --header 'X-API-Key: test'
  ```

## Secure Sharing Based on Token Properties

### Transfer Ownership

After a user decided to purchase a Data NFT and completed the transaction with the Provider, the Data Provider can call this API to change the ownership property of the Data Token and have it transferred  to the buyer. Users who obtained ownership of a Data Token can access, view, and download the corresponding raw data with the Token.

**Instructions**

- Interface: transferOwnership

- Parameter description

  | Name             | Type    | Description                                                  | If required |
  | ---------------- | ------- | ------------------------------------------------------------ | ----------- |
  | contract_address | address | NFT contract address                                         | Y           |
  | chainId          | uint32  | chainId; 1 by default, which represents the Ethereum mainnet | N           |
  | tokenid          | string  | NFT id                                                       | Y           |
  | to_address       | address | Data user address                                            | Y           |

- Response

  ```json
  {
      "status": 200,
      "result": {
          transaction_hash: "0xxxxxxxxxxxxxxxxxxxx"
      },
      "msg": "transfer NFT Ownership success."
  }
  ```

- Example

  ```shell
  curl --request POST \
       --url 'http://datumtechs.com/api/v2/$contract_address/transferOwnership?chainId=$chainId&tokenid=$tokenid&to_address=$to_address' \
       --header 'Accept: application/json' \
       --header 'Content-Type: application/json' \
       --header 'X-API-Key: test'
  ```

### Transfer Usage Rights

After a user decides to purchase a Data NFT, considering the business demand and funds, he'll only need to query or calculate/use the NFT once or for a limited period. Once the user completes the transaction with the Provider, the Data Provider can call this API to change the ownership property of the Data Token and have it transferred to the buyer. Users who obtained ownership of a Data Token can access, view, and calculate/use (within a limited scope) the corresponding raw data with the Token. The raw data may be available in plaintext or through privacy-preserving computation.

**Instructions**

- Interface: transferUsageRights

- Parameter description

  | Name             | Type    | Description                                                  | If required |
  | ---------------- | ------- | ------------------------------------------------------------ | ----------- |
  | contract_address | address | NFT contract address                                         | Y           |
  | chainId          | uint32  | chainId; 1 by default, which represents the Ethereum mainnet | N           |
  | tokenid          | string  | NFT id                                                       | Y           |
  | to_address       | address | Data user address                                            | Y           |

- Response

  ```json
  {
      "status": 200,
      "result": {
          transaction_hash: "0xxxxxxxxxxxxxxxxxxxx"
      },
      "msg": "transfer NFT Usage Rights success."
  }
  ```

- Example

  ```shell
  curl --request POST \
       --url 'http://datumtechs.com/api/v2/$contract_address/transferUsageRights?chainId=$chainId&tokenid=$tokenid&to_address=$to_address' \
       --header 'Accept: application/json' \
       --header 'Content-Type: application/json' \
       --header 'X-API-Key: test'
  ```

### Assess Verification for Data NFTs 

Data Providers can call this API to verify the usage permissions of the data user's Data Token.

Instructions

- Interface: verifyAccess

- Parameter description

  | Name             | Type    | Description                                                  | If required |
  | ---------------- | ------- | ------------------------------------------------------------ | ----------- |
  | contract_address | address | NFT contract address                                         | Y           |
  | chainId          | uint32  | chainId; 1 by default, which represents the Ethereum mainnet | N           |
  | tokenid          | string  | NFT id                                                       | Y           |
  | operate          | elem    | 1: View, 2: Download                                         | Y           |

- Response

  ```json
  {
  	"status": 200,
  	"result": {
  		"token_address": "0x8df91a59b8610990004987ac6ad8b6e70779ee97",
  		"token_id": "1",
  		"owner_of": "0x806164c929ad3a6f4bd70c2370b3ef36c64deaa8",
  		"contract_type": "ERC721",
  		"name": "datum",
  		"symbol": "FZAI1",
          "operate": "view/download"
  	},
  	"msg": "Validation of access rights succeeded."
  }
  ```

- Example

  ```shell
  curl --request POST \
       --url 'http://datumtechs.com/api/v2/$contract_address/verifyAccess?chainId=$chainId&tokenid=$tokenid&operate=$operate' \
       --header 'Accept: application/json' \
       --header 'Content-Type: application/json' \
       --header 'X-API-Key: test'
  ```

### Download Raw Data

Users can download the raw data that corresponds to the Data NFT according to the relevant permissions.

**Main features**

Users can call the API for downloading the raw data through a Data Token with download permission. Upon successful authentication, they will be able to download the corresponding raw data. For ciphertext data stored through entrusted storage, users have to first [apply for permission to access the plaintext data](#Apply for Permission to Access Plaintext Data); otherwise, the data will not be available.

**Instructions**

- Interface: downloadData

- Parameter description

  | Name             | Type    | Description                                                  | If required |
  | ---------------- | ------- | ------------------------------------------------------------ | ----------- |
  | contract_address | address | NFT contract address                                         | Y           |
  | chainId          | uint32  | chainId; 1 by default, which represents the Ethereum mainnet | N           |
  | tokenid          | string  | NFT id                                                       | Y           |
  | publicKey        | string  | Users' public key; the parameter needs to be provided when the raw data is stored through entrusted storage; if the user has been authorized, then the parameter can be omitted | N           |

- Response

  ```json
  {
  	"status": 200,
  	"result": {
  		"token_address": "0x8df91a59b8610990004987ac6ad8b6e70779ee97",
  		"token_id": "1",
  		"owner_of": "0x806164c929ad3a6f4bd70c2370b3ef36c64deaa8",
  		"contract_type": "ERC721",
  		"name": "datum",
  		"symbol": "FZAI1",
          "file_type": "csv",
          "file_hash": "0x.....................",
          "storage_method": "hosting/Unmanaged",
          "permission_type": "ownership/use",        
  		"metadata": "{
          	"name": "datum", 
          	"description": "this is datum metadata", 
          	"data_size": 100, 
              "columns": 2, 
              "rows": 10, 
              "cols_desc": [
                  {"col_name": "col1", "col_desc": "this is col1 desc"},
                  {"col_name": "col2", "col_desc": "this is col2 desc"}
  			]
  		}",
  		"file_path": "/path/file.csv"
  	},
  	"msg": "download data file success."
  }
  ```

- Example

  ```shell
  curl --request POST \
       --url 'http://datumtechs.com/api/v2/$contract_address/downloadData?chainId=$chainId&tokenid=$tokenid&publicKey=$publicKey' \
       --header 'Accept: application/json' \
       --header 'Content-Type: application/json' \
       --header 'X-API-Key: test'
  ```

### Apply for Permission to Access Plaintext Data

If the raw data corresponding to the Data Token held by the data user is hosted in the form of ciphertext, the user needs to call this API with his Data Token and public key to to request access the plaintext data.

Instructions

- Interface: RequestAccessToRawData

- Parameter description

  | Name             | Type    | Description                                                  | If required |
  | ---------------- | ------- | ------------------------------------------------------------ | ----------- |
  | contract_address | address | NFT contract address                                         | Y           |
  | chainId          | uint32  | chainId; 1 by default, which represents the Ethereum mainnet | N           |
  | tokenid          | string  | NFT id                                                       | Y           |
  | publicKey        | string  | Users' public key; the parameter needs to be provided when the raw data is stored through entrusted storage; if the user has been authorized, then the parameter can be omitted | N           |

- Response

  ```json
  {
  	"status": 200,
  	"result": {
  		"token_address": "0x8df91a59b8610990004987ac6ad8b6e70779ee97",
  		"token_id": "1",
  		"owner_of": "0x806164c929ad3a6f4bd70c2370b3ef36c64deaa8",
  		"contract_type": "ERC721",
  		"name": "datum",
  		"symbol": "FZAI1",
          "storage_method": "hosting/Unmanaged",
  	},
  	"msg": "Authorization to access plaintext data succeeded."
  }
  ```

- Example

  ```shell
  curl --request POST \
       --url 'http://datumtechs.com/api/v2/$contract_address/RequestAccessToRawData?chainId=$chainId&tokenid=$tokenid&publicKey=$publicKey' \
       --header 'Accept: application/json' \
       --header 'Content-Type: application/json' \
       --header 'X-API-Key: test'
  ```

### Verify Access to Plaintext Data

When the target data is stored through a channel provided by Datum in the form of ciphertext, the user can call this API to verify whether he has access to the plaintext data;

**Instructions**

- Interface: verifyAccessRawData

- Parameter description

  | Name             | Type    | Description                                                  | If required |
  | ---------------- | ------- | ------------------------------------------------------------ | ----------- |
  | contract_address | address | NFT contract address                                         | Y           |
  | chainId          | uint32  | chainId; 1 by default, which represents the Ethereum mainnet | N           |
  | tokenid          | string  | NFT id                                                       | Y           |
  | publicKey        | string  | Users' public key; the parameter needs to be provided when the raw data is stored through entrusted storage; if the user has been authorized, then the parameter can be omitted | N           |

- Response

  ```json
  {
  	"status": 200,
  	"result": {
  		"token_address": "0x8df91a59b8610990004987ac6ad8b6e70779ee97",
  		"token_id": "1",
  		"owner_of": "0x806164c929ad3a6f4bd70c2370b3ef36c64deaa8",
  		"contract_type": "ERC721",
  		"name": "datum",
  		"symbol": "FZAI1",
          "storage_method": "hosting/Unmanaged",
          "publicKey": "0x......................."
  	},
  	"msg": "Verifying access to plaintext data is successful."
  }
  ```

- Example

  ```shell
  curl --request POST \
       --url 'http://datumtechs.com/api/v2/$contract_address/verifyAccessRawData?chainId=$chainId&tokenid=$tokenid&publicKey=$publicKey' \
       --header 'Accept: application/json' \
       --header 'Content-Type: application/json' \
       --header 'X-API-Key: test'
  ```

## Settlement Operations After Token Usage

After the user used the Token to complete the relevant data operations, Datum will confirm the usage of the Token and then modify the operation properties of the Token and upload it to the blockchain. For instance, the number of operations of the used Token will be modified, or the Token will be set to frozen/destroyed, which are both properties that determine whether the user can operate the Token.

### Usage Confirmation

When the user initiates an operation with the Token (e.g. download the raw data), the service records and confirms the usage of the Token.

**Instructions**

- Interface: confirmToUse

- Parameter description

  | Name             | Type    | Description                                                  | If required |
  | ---------------- | ------- | ------------------------------------------------------------ | ----------- |
  | contract_address | address | NFT contract address                                         | Y           |
  | chainId          | uint32  | chainId; 1 by default, which represents the Ethereum mainnet | N           |
  | tokenid          | string  | NFT id                                                       | Y           |

- Response

  ```json
  {
  	"status": 200,
  	"result": {
  		"token_address": "0x8df91a59b8610990004987ac6ad8b6e70779ee97",
  		"token_id": "1",
  		"owner_of": "0x806164c929ad3a6f4bd70c2370b3ef36c64deaa8",
  		"contract_type": "ERC721",
  		"name": "datum",
  		"symbol": "FZAI1",
          "storage_method": "hosting/Unmanaged",
          "publicKey": "0x......................."
  	},
  	"msg": "Token confirm to use."
  }
  ```

- Example

  ```shell
  curl --request POST \
       --url 'http://datumtechs.com/api/v2/$contract_address/confirmToUse?chainId=$chainId&tokenid=$tokenid' \
       --header 'Accept: application/json' \
       --header 'Content-Type: application/json' \
       --header 'X-API-Key: test'
  ```

### Destroy or Freeze Token After Usage

After the user completes the needed operation with the Token, such as downloading the raw data, the service will freeze/destroy the used Token by changing the operation property of the Token.

**Instructions**

- Interface: destroyOrFreezeToken

- Parameter description

  | Name             | Type    | Description                                                  | If required |
  | ---------------- | ------- | ------------------------------------------------------------ | ----------- |
  | contract_address | address | NFT contract address                                         | Y           |
  | chainId          | uint32  | chainId; 1 by default, which represents the Ethereum mainnet | N           |
  | tokenid          | string  | NFT id                                                       | Y           |
  | option           | uint8   | Modify the operation status, 0: freeze; 1: destroy           | Y           |

- Response

  ```json
  {
  	"status": 200,
  	"result": {
  		"token_address": "0x8df91a59b8610990004987ac6ad8b6e70779ee97",
  		"token_id": "1",
  		"owner_of": "0x806164c929ad3a6f4bd70c2370b3ef36c64deaa8",
  		"contract_type": "ERC721",
  		"name": "datum",
  		"symbol": "FZAI1",
          "storage_method": "hosting/Unmanaged",
          "publicKey": "0x......................."
  	},
  	"msg": "Token confirm to use."
  }
  ```

- Example

  ```bash
  curl --request POST \
       --url 'http://datumtechs.com/api/v2/$contract_address/destroyOrFreezeToken?chainId=$chainId&tokenid=$tokenid&option=$option' \
       --header 'Accept: application/json' \
       --header 'Content-Type: application/json' \
       --header 'X-API-Key: test'
  ```
