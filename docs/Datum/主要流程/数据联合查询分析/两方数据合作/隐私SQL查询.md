---
sidebar_position: 3
---

# 隐私SQL查询

**主要功能**

在查询方不泄露查询的内容，且被查询方不泄露查询结果以外的数据库数据的前提下，查询方能使用SQL查询语句获得正确的查询结果。它支持基于MPC的隐私查询和基于同态加密(HE)的隐私查询。

**接口说明（API）**

+ 接口名称：runPrivacySQLTask

+ 请求【POST】

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

  参数说明

  | 参数      | 类型   | 说明                        | 是否必须 |
  | --------- | ------ | --------------------------- | -------- |
  | algo_type | string | 使用的算法类型，支持MPC，HE | Y        |
  | requester | json   | 查询方信息                  | Y        |
  | name      | string | 组织名称                    | Y        |
  | data_path | string | 数据所在路径                | Y        |
  | data_type | string | 数据的格式                  | Y        |
  | sql       | string | sql语句                     | Y        |
  | provider  | json   | 被查询方信息                | Y        |

  

+ 响应

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

  参数说明

  | 参数   | 类型   | 说明                                                       |
  | ------ | ------ | ---------------------------------------------------------- |
  | status | int    | 响应状态，<br />200-成功，400-无效请求，500-服务器内部错误 |
  | result | json   | 结果信息                                                   |
  | path   | string | 结果所在路径                                               |
  | type   | string | 结果的类型                                                 |
  | extra  | string | 关于结果的额外信息                                         |
  | msg    | string | 成功信息或错误的描述                                       |

  

