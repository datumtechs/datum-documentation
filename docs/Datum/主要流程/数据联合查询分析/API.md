## 数据联合查询分析API

### 隐私求交(PSI)

##### 主要功能

隐私求交的全称是隐私保护集合求交(Private Set Intersection)，功能是两个数据持有方能计算得到双方数据集的交集，但互相不暴露交集以外的数据集的任何信息。

##### 常用场景

黑名单查询，白名单查询，通讯录好友发现，联合计算样本对齐。

##### 接口说明（API）

+ 接口名称：runPSITask

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

  参数说明

  | 参数            | 类型   | 说明                   | 是否必须 |
  | --------------- | ------ | ---------------------- | -------- |
  | data_provider   | list   | 所有数据提供方信息     | Y        |
  | node_id         | string | 节点ID，组织的唯一标识 | Y        |
  | name            | string | 组织名称               | Y        |
  | data_path       | string | 数据所在路径           | Y        |
  | data_type       | string | 数据格式               | Y        |
  | key_column      | string | 所需操作的列           | Y        |
  | result_receiver | list   | 接收方列表             | Y        |

  

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

  参数说明

  | 参数   | 类型   | 说明                 |
  | ------ | ------ | -------------------- |
  | status | int    | 响应状态             |
  | result | json   | 结果信息             |
  | path   | string | 结果所在路径         |
  | type   | string | 结果的类型           |
  | extra  | string | 关于结果的额外信息   |
  | msg    | string | 成功信息或错误的描述 |

  

+ 示例

  ```
  curl --request POST \
       --url 'https://datum.io/api/v2/runPSITask' \
       --header 'Accept: application/json' \
       --header 'Content-Type: application/json' \
       --header 'X-API-Key: test' \
       --data ''
  ```





### 隐私标签查询(Labeled PSI)

##### 主要功能

数据提供方有多列标签数据表，查询方有一个数据列表，该任务可以在查询方不泄露查询请求的数据列表内容，且数据提供方不泄露交集以外的数据的前提下，获得相应数据列表的交集及对应标签。结果文件只存储于查询方，数据提供方无法感知交集数据列表。

##### 常用场景

数据集特征补充，数据集缺省值补齐。

##### 接口说明（API）



### 隐私SQL查询

##### 主要功能

数据提供方有一个数据库，查询方使用SQL语句查询，该任务可以在查询方不泄露查询的具体信息，且数据提供方不泄露查询结果以外的数据库数据的前提下，获取SQL查询的正确结果。

##### 接口说明（API）





### 联合统计分析

##### 主要功能

在保证数据提供方不泄露敏感数据的前提下，对数据提供方的数据完成联合统计分析。提供两种方式：常用统计公式（如求和、求平均、求方差、合格投资人等），自定义统计公式。

##### 接口说明（API）





### 联合模型训练

##### 主要功能

在保证数据提供方不泄露敏感数据的前提下，完成联合模型训练。支持算法：逻辑回归、线性回归、DNN、XGBoost等。

##### 接口说明（API）



### 联合模型预测

##### 主要功能

在保证数据提供方不泄露敏感数据的前提下，完成联合模型预测。支持算法：逻辑回归、线性回归、DNN、XGBoost等。

##### 接口说明（API）