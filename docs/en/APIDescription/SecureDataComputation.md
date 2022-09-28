# APIs for Secure Data Computation 

## Ciphertext-protected Computation Outsourcing

**Main features**

Homomorphic encryption technology is adopted to encrypt the data to be sent to a third party for outsourced computation. Users receive the encrypted computation result and then decrypt the raw result, and the third party will not have access to the raw data during the entire process.

Applications: cloud computing, anonymous voting systems, ciphertext retrieval, anonymous access, etc.

**Steps involved**

5. Generate the public and private key pair (genHEKeyPair)
2. Encrypt data with the public key (HEEncrypt)
3. Homomorphic calculation (HECalc)
4. Decrypt  with the private key (HEDecrypt)

**Instructions**

+ Interface: genHEKeyPair

+ Description: A helper function usually called by the result party who maintains the private key and publishes the public key and other public information

+ Request [POST]

  ```json
  {
  	”params": {
          "scheme": "ckks",
          ...
      }
  }
  ```

  Parameter description

  | Parameter | Type   | Description                                                  | If required |
| --------- | ------ | :----------------------------------------------------------- | ----------- |
  | params    | json   | A parameter used by the homomorphic encryption algorithm and applies to the specific library | Y           |
  | scheme    | string | The selected scheme                                          | N           |
  | ...       | string | Other parameters                                             | N           |
  
+ Response

  ```json
  {
  	"status": 200,
  	"result":{
  		"pub_key": "0xABCD",
  		"priv_key": "0xDEAD"
  	},
  	"msg": "success"
  }
  ```

  Parameter description

  | Parameter | Type   | Description                                                  |
| --------- | ------ | ------------------------------------------------------------ |
  | status    | int    | Response status: 200 - success, 400 - invalid request, 500 - internal server error |
  | result    | json   | Result information                                           |
  | pub_key   | string | Public key                                                   |
  | priv_key  | string | Private key                                                  |
  | msg       | string | Success or error message                                     |
  
+ Interface: HEEncrypt

+ Description: A helper function used to encrypt data and is called by the data provider

+ Request [POST]

  ```json
  {
  	"pub_key": "0xABCD",
      "data": "your data",
      "params": {
          ...
      }
  }
  ```

  Parameter description

  | Parameter | Type   | Description                                                  | If required |
| --------- | ------ | ------------------------------------------------------------ | ----------- |
  | pub_key   | string | Public key, received from the result party                   | Y           |
  | data      | string | Data to be encrypted                                         | Y           |
  | params    | json   | Other parameters used by the homomorphic encryption algorithm | N           |
  
+ Response

  ```json
  {
  	"status": 200,
  	"result":{
  		"ciphertext": "0x178C"
  	},
  	"msg": "success"
  }
  ```

  Parameter description

  | Parameter  | Type   | Description                                                  |
| ---------- | ------ | ------------------------------------------------------------ |
  | status     | int    | Response status: 200 - success, 400 - invalid request, 500 - internal server error |
  | result     | json   | Result information                                           |
  | ciphertext | string | Ciphertext                                                   |
  | msg        | string | Success or error message                                     |
  
+ Interface: HECalc

+ Description: Request for homomorphic computation, usually initiated by the result party

+ Request [POST]

  ```json
  {
  	"pub_key": "0xABCD",
      "data_path": "/path/to/data",
      "formula": "sum()",   
      "params": {
          ...
      }
  }
  ```

  Parameter description

  | Parameter | Type   | Description                                                  | If required |
| --------- | ------ | ------------------------------------------------------------ | ----------- |
  | pub_key   | string | Public key, received from the result party                   | Y           |
  | data_path | string | Path of the encrypted data                                   | Y           |
  | formula   | string | Formulas such as summation, multiplication, etc.             | Y           |
  | params    | json   | Other parameters used by the homomorphic encryption algorithm | N           |
  
+ Response

  ```json
  {
  	"status": 200,
  	"result":{
  		"ciphertext": "0xDA7A"
  	},
  	"msg": "success"
  }
  ```

  Parameter description

  | Parameter  | Type   | Description                                                  |
| ---------- | ------ | ------------------------------------------------------------ |
  | status     | int    | Response status: 200 - success, 400 - invalid request, 500 - internal server error |
  | result     | json   | Result information                                           |
  | ciphertext | string | Ciphertext result                                            |
  | msg        | string | Success or error message                                     |
  
+ Interface: HEDecrypt

+ Description: A helper function, called by the result party as he keeps the private key

+ Request [POST]

  ```json
  {
  	"priv_key": "0xDEAD",
      "data": "ciphered result data",
      "params": {
          ...
      }
  }
  ```

  Parameter description

  | Parameter | Type   | Description                                                  | If required |
| --------- | ------ | ------------------------------------------------------------ | ----------- |
  | priv_key  | string | Private key                                                  | Y           |
  | data      | string | Encrypted result returned by the party that conducts the homomorphic computation | Y           |
  | params    | json   | Other parameters used by the homomorphic encryption algorithm | N           |
  
+ Response

  ```json
  {
  	"status": 200,
  	"result":{
  		"value": 8
  	},
  	"msg": "success"
  }
  ```

  Parameter description

  | Parameter | Type   | Description                                                  |
  | --------- | ------ | ------------------------------------------------------------ |
  | status    | int    | Response status: 200 - success, 400 - invalid request, 500 - internal server error |
  | result    | json   | Result information                                           |
  | value     | number | Decrypted result                                             |
  | msg       | string | Success or error message                                     |




## Joint Query & Stat

### Joint Match

Privacy match can be applied in multiple data application scenarios, including joint friend discovery, whitelist/blacklist user match, sample alignment for joint computation, etc.

**Main features**

Joint Match enables data cooperation between two parties: Requester and Provider. The two parties can obtain the intersection of their data but cannot access any other information in the raw data set. This feature is achieved using Private Set Intersection, and supports the Diffie-Hellman (DH) algorithm and the Homomorphic Encryption (HE) algorithm.

**Instructions**

+ Interface: runPSITask

+ Request [POST]

  ```json
  {
  	"algo_type": "DH",
  	"requester": {
  	"name": "orgA",
  	"data_path": "/path/to/data",
  	"data_type": "csv",
  	"key_column": "id_col"
  	},
  	"provider": {
  	"name": "orgB",
  	"data_path": "/path/to/data",
  	"data_type": "csv",
  	"key_column": "id_col"
    },
  	"result_recv_type": 1
  }
  ```

  Parameter description

  | Parameter        | Type   | Description                                                  | If required |
| ---------------- | ------ | ------------------------------------------------------------ | ----------- |
  | algo_type        | string | Types of algorithms used: DH & HE                            | Y           |
  | requester        | json   | Requester information                                        | Y           |
  | name             | string | Organization name                                            | Y           |
  | data_path        | string | Data path                                                    | Y           |
  | data_type        | string | Data type                                                    | Y           |
  | key_column       | string | Column to be operated                                        | Y           |
  | provider         | json   | Provider information                                         | Y           |
  | result_recv_type | int    | How the result is received: 1 - sent to one party, 2 - sent to two parties | Y           |
  
+ Response

  ```json
  {
  	"status": 200,
  	"result":{
  		"path": "/path/to/result/file",
  		"type": "csv",
  		"extra": ""
  	},
  	"msg": "success"
  }
  ```

  Parameter description

  | Parameter | Type   | Description                                                  |
  | --------- | ------ | ------------------------------------------------------------ |
  | status    | int    | Response status: 200 - success, 400 - invalid request, 500 - internal server error |
  | result    | json   | Result information                                           |
  | path      | string | Result path                                                  |
  | type      | string | Result type                                                  |
  | extra     | string | Additional information about the result                      |
  | msg       | string | Success or error message                                     |

+ Interface: getDataProviders

+ Request [GET]

  None

+ Response

  ```json
  {
  	"status": 200,
  	"result":{
  		"data_providers": ["orgA", "orgB", "orgC"]
  	},
  	"msg": "success"
  }
  ```

  Parameter description

  | Parameter      | Type   | Description                                                  |
| -------------- | ------ | ------------------------------------------------------------ |
  | status         | int    | Response status: 200 - success, 400 - invalid request, 500 - internal server error |
  | result         | json   | Result information                                           |
  | data_providers | list   | Organization name of all data providers                      |
  | msg            | string | Success or error message                                     |
  
+ Interface: getDataPath

+ Request [GET]

  | Parameter     | Type   | Description                            | If required |
  | ------------- | ------ | -------------------------------------- | ----------- |
  | data_provider | string | Organization name of the data provider | Y           |

+ Response

  ```json
  {
  	"status": 200,
  	"result":{
  		"data_path": ["/path/to/data1", "/path/to/data2", "/path/to/data3"]
  	},
  	"msg": "success"
  }
  ```

  Parameter description

  | Parameter | Type   | Description                                                  |
  | --------- | ------ | ------------------------------------------------------------ |
  | status    | int    | Response status: 200 - success, 400 - invalid request, 500 - internal server error |
  | result    | json   | Result information                                           |
  | data_path | string | Data path                                                    |
  | msg       | string | Success or error message                                     |

+ Interface: getMetaData

+ Request [GET]

  | Parameter     | Type   | Description                            | If required |
  | ------------- | ------ | -------------------------------------- | ----------- |
  | data_provider | string | Organization name of the data provider | Y           |
  | data_path     | string | Data path                              | Y           |

+ Response

  ```json
  {
  	"status": 200,
  	"result":{
  	"data_type": "csv",
  	"rows_num": 10,
  	"columns_num": 5,
  	"columns_name": ["col1", "col2"]
  },
  "msg": "success"
  }
  ```

  Parameter description

  | Parameter    | Type   | Description                                                  |
  | ------------ | ------ | ------------------------------------------------------------ |
  | status       | int    | Response status: 200 - success, 400 - invalid request, 500 - internal server error |
  | result       | json   | Result information                                           |
  | data_type    | string | Data type                                                    |
  | rows_num     | int    | Number of rows of the datasheet                              |
  | columns_num  | int    | Number of columns of the datasheet                           |
  | columns_name | list   | Name of columns of the datasheet                             |
  | msg          | string | Success or error message                                     |




### Privacy Label Query

The intersection of data between two parties can be matched, and the corresponding Label data can be queried and matched.

**Main features**

Privacy Label Query allows the Requester to obtain the intersection of data between himself and the Provider, as well as the Label data that corresponds to the intersection, while making sure that the Requester does not disclose the query content and the Provider does not disclose any other data. The function is achieved through Labeled Private Set Intersection, and supports the Diffie-Hellman (DH) algorithm and the Homomorphic Encryption (HE) algorithm.

**Instructions**

+ Interface: runLabeledPSITask

+ Request [POST]

  ```json
  {
  	"algo_type": "DH",
  	"requester": {
  	"name": "orgA",
  	"data_path": "/path/to/data",
  	"data_type": "csv",
  	"key_column": "id_col"
  	},
  	"provider": {
  	"name": "orgB",
  	"data_path": "/path/to/data",
  	"data_type": "csv",
  	"key_column": "id_col",
  	"selected_columns": ["col1", "col2"]
    }
  }
  ```

  Parameter description

  | Parameter        | Type   | Description                         | If required |
| ---------------- | ------ | ----------------------------------- | ----------- |
  | algo_type        | string | Types of algorithms used: DH & HE   | Y           |
  | requester        | json   | Requester information               | Y           |
  | name             | string | Organization name                   | Y           |
  | data_path        | string | Data path                           | Y           |
  | data_type        | string | Data type                           | Y           |
  | key_column       | string | Column to be operated               | Y           |
  | provider         | json   | Provider information                | Y           |
  | selected_columns | list   | Column name of labels to be queried | Y           |
  
+ Response

  ```json
  {
  	"status": 200,
  	"result":{
  		"path": "/path/to/result/file",
  		"type": "csv",
  		"extra": ""
  	},
  	"msg": "success"
  }
  ```

  Parameter description

  | Parameter | Type   | Description                                                  |
  | --------- | ------ | ------------------------------------------------------------ |
  | status    | int    | Response status: 200 - success, 400 - invalid request, 500 - internal server error |
  | result    | json   | Result information                                           |
  | path      | string | Result path                                                  |
  | type      | string | Result type                                                  |
  | extra     | string | Additional information about the result                      |
  | msg       | string | Success or error message                                     |




### Joint Query

**Main features**

Joint Query allows the Requester to obtain the correct query result using the SQL SELECT statement, while making sure that the Request does not disclose the query content and the Provider does not disclose any data in the database other than the query result. The feature supports MPC-based privacy queries and HE-based privacy queries.

**Instructions**

+ Interface: runPrivacySQLTask

+ Request [POST]

  ```json
  {
  	"algo_type": "MPC",
  	"requester": {
  	"name": "orgA",
  	"data_path": "/path/to/data",
  	"data_type": "csv"
  	},
  	"provider": {
  	"name": "orgB",
  	"data_path": "/path/to/data",
  	"data_type": "csv"
    },
  	"sql": "select sum(col1) from orgB;"
  }
  ```

  Parameter description

  | Parameter | Type   | Description                        | If required |
  | --------- | ------ | ---------------------------------- | ----------- |
  | algo_type | string | Types of algorithms used: MPC & HE | Y           |
  | requester | json   | Requester information              | Y           |
  | name      | string | Organization name                  | Y           |
  | data_path | string | Data path                          | Y           |
  | data_type | string | Data type                          | Y           |
  | sql       | string | SQL statement                      | Y           |
  | provider  | json   | Provider information               | Y           |

+ Response

  ```json
  {
  	"status": 200,
  	"result":{
  		"path": "/path/to/result/file",
  		"type": "csv",
  		"extra": ""
  	},
  	"msg": "success"
  }
  ```

  Parameter description

  | Parameter | Type   | Description                                                  |
  | --------- | ------ | ------------------------------------------------------------ |
  | status    | int    | Response status: 200 - success, 400 - invalid request, 500 - internal server error |
  | result    | json   | Result information                                           |
  | path      | string | Result path                                                  |
  | type      | string | Result type                                                  |
  | extra     | string | Additional  information about the result                     |
  | msg       | string | Success or error message                                     |




### Joint Statistical Analysis

A scenario of data collaboration among multi-parties. The feature adopts the privacy-preserving AI framework Rosetta and supports arithmetic operations among three (or more) parties 

**Main features**

Joint Statistical Analysis achieves joint statistical analysis for the data from data providers while making sure that no data provider discloses his sensitive data. The feature provides two methods: common statistical formulas (sum, average, variance, accredited investor discovery, etc.) and custom statistical formulas.

**Instructions**

+ Interface: runJointStatisticalAnalysisTask

+ Request [POST]

  ```json
  {
  	"data_providers": [
  		{
  			"name": "orgA",
  			"data_path": "/path/to/data",
  			"data_type": "csv",
  			"key_column": "id_col",
            "data_alias": "df1"
  		},
  		{
  			"name": "orgB",
  			"data_path": "/path/to/data",
  			"data_type": "csv",
  			"key_column": "id_col",
            "data_alias": "df2"
  		}
  	],
  	"result_receivers": ["orgA", "orgB"],
  	"method": "custom",
  "expression": "df1.unit_price * df2.units",
  "result_alias": "total_value"
  }
  ```

  Parameter description

  | Parameter        | Type   | Description                                                  | If required |
  | ---------------- | ------ | ------------------------------------------------------------ | ----------- |
  | data_providers   | list   | Information of data providers                                | Y           |
  | name             | string | Organization name                                            | Y           |
  | data_path        | string | Data path                                                    | Y           |
  | data_type        | string | Data type                                                    | Y           |
  | data_alias       | string | Data alias                                                   | N           |
  | key_column       | string | Column to be operated                                        | Y           |
  | result_receivers | list   | List of result receivers                                     | Y           |
  | method           | string | Method for joint stat among multi-parties; Datum now supports sum, avg, var, is_investor_accredited, custom formula, etc. | Y           |
  | expression       | string | Computation expression formula, used when the method field is custom | N           |
  | result_alias     | string | Result alias                                                 | N           |

+ Response

  ```json
  {
    "status": 200,
  	"result": {
  	"path": "/path/to/result/file",
  	"type": "csv",
  	"extra": ""
  	},
  	"msg": "success"
  }
  ```

  Parameter description

  | Parameter | Type   | Description                                                  |
  | --------- | ------ | ------------------------------------------------------------ |
  | status    | int    | Response status: 200 - success, 400 - invalid request, 500 - internal server error |
  | result    | json   | Result information                                           |
  | path      | string | Result path                                                  |
  | type      | string | Result type                                                  |
  | extra     | string | Additional information about the result                      |
  | msg       | string | Success or error message                                     |




## Joint Machine Learning

### Joint Model Training

**Main features**

Joint Model Training achieves federated model training while making sure that no data provider discloses his sensitive data. The feature is enabled by the privacy-preserving AI framework Rosetta. Algorithms supported: logistic regression, linear regression, DNN, XGBoost, etc.

**Instructions**

+ Interface: runModelTrainTask

+ Request [POST]

  ```json
  {
  	"data_providers": [
  		{
  			"name": "orgA",
  			"data_path": "/path/to/data",
  			"data_type": "csv",
  			"label_column": "is_good",
  		"key_column": "id", 
  		"select_columns": ["col1"],
  		"discrete_columns": ["type"]
  		},
  		{
  			"name": "orgB",
  			"data_path": "/path/to/data",
  			"data_type": "csv",
  			"label_column": "is_good",
  		"key_column": "id", 
  		"select_columns": ["col1"],
  		"discrete_cols": ["type"]
  		}
  	],
  	"result_receivers": ["orgA"],
      "algorithm": "dnn",
      "hyper_params": {"learning_rate": 0.00001, "loss": "mse"},
      "metrics": ["accuracy", "precision", "recall"],
      "model_config": {""}
  }
  ```

  Parameter description

  | Parameter        | Type   | Description                                                  | If required |
  | ---------------- | ------ | ------------------------------------------------------------ | ----------- |
  | data_providers   | list   | Information of all data providers                            | Y           |
  | name             | string | Organization name                                            | Y           |
  | data_path        | string | Data path                                                    | Y           |
  | data_type        | string | Data type                                                    | Y           |
  | label_column     | string | Label column                                                 | Y           |
  | key_column       | string | Key column, used for aligning                                | N           |
  | select_columns   | list   | Select the columns to be used for model training (default: all columns) | N           |
  | discrete_cols    | list   | Discrete columns used to certain operations (e.g. embedding) | N           |
  | result_receivers | list   | List of result receivers                                     | Y           |
  | algorithm        | string | Training algorithm                                           | Y           |
  | hyper_params     | string | Hyperparameters, related to the training method              | N           |
  | metrics          | list   | Metrics of the model (default: loss)                         | N           |
  | model_config     | string | json string that describes the complex DNN model             | N           |

+ Response

  ```json
  {
    "status": 200,
  	"result": {
        "model_id": "0xd22"
  		"path": "/path/to/model",
  		"type": "bin",
  		"extra": "",
        "metrics": {"accuracy": 0.95}
  	},
  	"msg": "success"
  }
  ```

  Parameter description

  | Parameter | Type   | Description                                                  |
  | --------- | ------ | ------------------------------------------------------------ |
  | status    | int    | Response status: 200 - success, 400 - invalid request, 500 - internal server error |
  | result    | json   | Result information                                           |
  | model_id  | string | Model ID                                                     |
  | path      | string | Result path                                                  |
  | type      | string | Result type                                                  |
  | extra     | string | Additional information about the result                      |
  | metrics   | json   | Metrics required                                             |
  | msg       | string | Success or error message                                     |




### Joint Model Prediction

**Main features**

Joint Model Prediction achieves federated model prediction while making sure that no data provider discloses his sensitive data. The feature is enabled by the privacy-preserving AI framework Rosetta. Algorithms supported: logistic regression, linear regression, DNN, XGBoost, etc.

**如何使用**

**Instructions**

+ Interface: runModelPredictTask

+ Request [POST]

  ```json
  {
  	"data_providers": [
  		{
  			"name": "orgA",
  			"data_path": "/path/to/data",
  			"data_type": "csv",
            "key_column": "id", 
  		},
  		{
  			"name": "orgB",
  			"data_path": "/path/to/data",
  			"data_type": "csv",
            "key_column": "id", 
  		}
  	],
  	"result_receivers": ["orgA"],
      "model_id": "0xd22",
      "params": {"threshold": 0.8}
  }
  ```

  Parameter description

  | Parameter        | Type   | Description                       | If required |
  | ---------------- | ------ | --------------------------------- | ----------- |
  | data_providers   | list   | Information of all data providers | Y           |
  | name             | string | Organization name                 | Y           |
  | data_path        | string | Data path                         | Y           |
  | data_type        | string | Data type                         | Y           |
  | key_column       | string | Key column, used for aligning     | N           |
  | result_receivers | list   | List of result receivers          | Y           |
  | model_id         | string | Model ID                          | Y           |
  | params           | json   | Parameter                         | N           |

+ Response

  ```json
  {
    "status": 200,
  	"result": {
  		"path": "/path/to/result/file",
  		"type": "csv",
  		"extra": ""
  	},
  	"msg": "success"
  }
  ```

  Parameter description

  | Parameter | Type   | Description                                                  |
  | --------- | ------ | ------------------------------------------------------------ |
  | status    | int    | Response status: 200 - success, 400 - invalid request, 500 - internal server error |
  | result    | json   | Result information                                           |
  | path      | string | Result path                                                  |
  | type      | string | Result type                                                  |
  | extra     | string | Additional information about the result                      |
  | msg       | string | Success or error message                                     |

