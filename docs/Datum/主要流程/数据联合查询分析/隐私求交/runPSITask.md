### runPSITask

[POST] https://xxx.datum.com/api/v2/runPSITask

run psi task.

+ 请求

  ```
  {
  	"data_provider": [
  		{
  			"node_id": "0xsss...sssss",
  			"name": "orgA",
  			"data_path": "/path/to/data",
  			"data_type": "csv",
  			"key_column": "id_col"
  			
  		},
  		{
  			"node_id": "0xttt...ttttt",
  			"name": "orgB",
  			"data_path": "/path/to/data",
  			"data_type": "csv",
  			"key_column": "id_col"
  		}
  	],
  	"result_receiver": ["0xsss...sssss", "0xttt...ttttt"]
  }
  ```

  说明

  | 参数          | 类型   | 说明               | 是否必须 |
  | ------------- | ------ | ------------------ | -------- |
  | data_provider | list   | 所有数据提供方信息 | Y        |
  | node_id       | string | 节点ID，标识       |          |
  |               |        |                    |          |
  |               |        |                    |          |
  |               |        |                    |          |

  

+ 响应

  ```
  {
  	"status": 200,
  	"result":{
  		"path": "/path/to/result/file",
  		"type": "csv",
  		"extra": ""
  	},
  	"msg": "psi task success"
  }
  ```

  

+ 示例

  ```
  curl --request POST \
       --url 'https://datum.io/api/v2/$contract_address/setNFTProperty?	    chainId=$chainId&tokenid=$tokenid&property=$property' \
       --header 'Accept: application/json' \
       --header 'Content-Type: application/json' \
       --header 'X-API-Key: test'
  ```





