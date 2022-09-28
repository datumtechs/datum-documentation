# APIs for Secure Data Transmission to Blockchain


## Modes of Transmission and Storage Supported


### Cloud Transmission and Storage


Datum provides a wide range of cloud services, and users can first get registered, select the cloud service environment, and then upload the raw data. After the data is transmitted, users can easily bring their data to the Web 3 ecosystem through the  services available on Datum.


**Instructions**


- Interface: `uploadData`

- Request type: `POST`

- Request data type: `multipart/form-data`

- Response data type: `*/*`

- Request parameters:



| Name          | Type   | Description                                                  | If required |
| ------------- | ------ | ------------------------------------------------------------ | ----------- |
| file          | string | File                                                         | Y           |
| storageType   | int    | Storage type (0: local storage; **1: cloud storage [enter 1 for the API];** 2: IPFS storage; 3: blockchain storage) | Y           |
| storageOption | string | A json string that indicates the storage option and is used in combination with storageType [more info](#storageOption值说明) | Y           |


- Response status:



| Status code | Description  |
| ----------- | ------------ |
| 200         | OK           |
| 201         | Created      |
| 401         | Unauthorized |
| 403         | Forbidden    |
| 404         | Not Found    |


- Response parameters:


| Name     | Type   | Description                                                  | If required |
| -------- | ------ | ------------------------------------------------------------ | ----------- |
| status   | int    | Response code                                                | Y           |
| result   | json   | Summary information of the data uploaded                     | Y           |
| originId | string | originId of the raw data uploaded; it is the unique identification of the data on Datum | Y           |
| hash     | string | Hash of the raw data uploaded                                | Y           |
| msg      | string | Response message                                             | Y           |


- Response example:

  ```json
  {
      "status": 200,
      "result": {
        "originId": "0xdadad...454545",
        "hash": "295e5ae656d084dfda86c4ef7c38719ee1fb650899ec66d15d543b30c8f45b87"
      },
      "msg": "OK"
  }
  ```


- Usage example:

```shell
curl 'http://datumtechs.com/api/v2/data/uploadData' \
     -H 'Accept: application/json, text/plain, */*' \
     -H 'Accept-Language: zh-CN,zh;q=0.9' \
     -H 'Connection: keep-alive' \
     -H 'Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryml6aYqp5NPR1V6C9' \
     -H 'Origin: http://datum.io' \
     --data-raw $'------WebKitFormBoundaryml6aYqp5NPR1V6C9\r\nContent-Disposition: form-data; name="file"; filename="服务清单.xlsx"\r\nContent-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet\r\n\r   \n\r\n------WebKitFormBoundaryml6aYqp5NPR1V6C9\r\nContent-Disposition: form-data; name="storageType"\r\n\r\n1\r\n------WebKitFormBoundaryml6aYqp5NPR1V6C9\r\nContent-Disposition: form-data;name="storageOption"\r\n\r\n"{\\"cloudType\\": 0}"\r\n------WebKitFormBoundaryml6aYqp5NPR1V6C9--\r\n' \
     --compressed \
     --insecure
```



### IPFS Transmission and Storage


Datum provides distributed storage services, and users can choose to transmit raw data to IPFS for distributed management. After the data is transmitted to IPFS via services provided by Datum, users can easily bring their data to the Web 3 ecosystem through the services available on Datum.


**Instructions**


- Interface：`uploadData`

- Request type: `POST`

- Request data type: `multipart/form-data`

- Response data type: `*/*`

- Request parameters:



| Name          | Type   | Description                                                  | If required |
| ------------- | ------ | ------------------------------------------------------------ | ----------- |
| file          | string | File                                                         | Y           |
| storageType   | int    | Storage type (0: local storage; 1: cloud storage; **2: IPFS storage [enter 2 for the API];** 3: blockchain storage) | Y           |
| storageOption | string | A json string that indicates the storage option and is used in combination with storageType [more info](#storageOption值说明) | Y           |


- Response status:



| Status code | Description  |
| ----------- | ------------ |
| 200         | OK           |
| 201         | Created      |
| 401         | Unauthorized |
| 403         | Forbidden    |
| 404         | Not Found    |



- Request parameter:




| Name     | Type   | Description                                                  | If required |
| -------- | ------ | ------------------------------------------------------------ | ----------- |
| status   | int    | Response code                                                | Y           |
| result   | json   | Summary information of the data uploaded                     | Y           |
| originId | string | originId of the raw data uploaded; it is the unique identification of the data on Datum | Y           |
| hash     | string | Hash of the raw data uploaded                                | Y           |
| msg      | string | Response message                                             | Y           |


- Response example:

  ```json
  {
      "status": 200,
      "result": {
        "originId": "0xdadad...454545",
        "hash": "295e5ae656d084dfda86c4ef7c38719ee1fb650899ec66d15d543b30c8f45b87"
      },
      "msg": "OK"
  }
  ```


- Usage example:

```shell
curl 'http://datumtechs.com/api/v2/data/uploadData' \
     -H 'Accept: application/json, text/plain, */*' \
     -H 'Accept-Language: zh-CN,zh;q=0.9' \
     -H 'Connection: keep-alive' \
     -H 'Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryml6aYqp5NPR1V6C9' \
     -H 'Origin: http://datum.io' \
     --data-raw $'------WebKitFormBoundaryml6aYqp5NPR1V6C9\r\nContent-Disposition: form-data; name="file"; filename="服务清单.xlsx"\r\nContent-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet\r\n\r   \n\r\n------WebKitFormBoundaryml6aYqp5NPR1V6C9\r\nContent-Disposition: form-data; name="storageType"\r\n\r\n2\r\n------WebKitFormBoundaryml6aYqp5NPR1V6C9\r\nContent-Disposition: form-data;name="storageOption"\r\n\r\n""\r\n------WebKitFormBoundaryml6aYqp5NPR1V6C9--\r\n' \
     --compressed \
     --insecure
```




### Blockchain Transmission and Storage

Datum is connected with consortium chains and public chains, and users can directly transfer the raw data to the target blockchain. Blockchains supported: Ethereum, PlatON, etc. Users can choose to transmit the raw data or raw data hash + raw data storage index.



**Instructions**



- Interface: `uploadData`

- Request type: `POST`

- Request data type: `multipart/form-data`

- Response data type: `*/*`

- Request parameters:



| Name          | Type   | Description                                                  | If required |
| ------------- | ------ | ------------------------------------------------------------ | ----------- |
| file          | string | File                                                         | Y           |
| storageType   | int    | Storage type (0: local storage; 1: cloud storage; 2: IPFS storage; **3: blockchain storage [enter 3 for the API])** | Y           |
| storageOption | string | A json string that indicates the storage option and is used in combination with storageType [more info](#storageOption值说明) | Y           |


- Response status:



| Status code | Description  |
| ----------- | ------------ |
| 200         | OK           |
| 201         | Created      |
| 401         | Unauthorized |
| 403         | Forbidden    |
| 404         | Not Found    |


- Response parameters:



| Name     | Type   | Description                                                  | If required |
| -------- | ------ | ------------------------------------------------------------ | ----------- |
| status   | int    | Response code                                                | Y           |
| result   | json   | Summary information of the data uploaded                     | Y           |
| originId | string | originId of the raw data uploaded; it is the unique identification of the data on Datum | Y           |
| hash     | string | Hash of the raw data uploaded                                | Y           |
| msg      | string | Response message                                             | Y           |


- Response example:

  ```json
  {
      "status": 200,
      "result": {
        "originId": "0xdadad...454545",
        "hash": "295e5ae656d084dfda86c4ef7c38719ee1fb650899ec66d15d543b30c8f45b87"
      },
      "msg": "OK"
  }
  ```


- Usage example:

```shell
curl 'http://datumtechs.com/api/v2/data/uploadData' \
     -H 'Accept: application/json, text/plain, */*' \
     -H 'Accept-Language: zh-CN,zh;q=0.9' \
     -H 'Connection: keep-alive' \
     -H 'Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryml6aYqp5NPR1V6C9' \
     -H 'Origin: http://datum.io' \
     --data-raw $'------WebKitFormBoundaryml6aYqp5NPR1V6C9\r\nContent-Disposition: form-data; name="file"; filename="服务清单.xlsx"\r\nContent-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet\r\n\r   \n\r\n------WebKitFormBoundaryml6aYqp5NPR1V6C9\r\nContent-Disposition: form-data; name="storageType"\r\n\r\n3\r\n------WebKitFormBoundaryml6aYqp5NPR1V6C9\r\nContent-Disposition: form-data;name="storageOption"\r\n\r\n"{\\"chainType\\": 1}"\r\n------WebKitFormBoundaryml6aYqp5NPR1V6C9--\r\n' \
     --compressed \
     --insecure
```



## Secure Data Transmission to Blockchain


After the raw data is transmitted to the target channel, users can upload the data hash onto the blockchain and publish the metadata if they wish to make their raw data hosted in a cloud environment or IPFS through Datum searchable by other Web 3 users, without disclosing all information about the raw data.


### Extract Metadata


Metadata refers to the description of certain raw data features, covering the size, file type, data scenario, etc. Datum helps users extract the metadata from their raw data uploaded to a cloud environment or IPFS. The platform automatically extracts the key data features and packs them into metadata to be published. In addition, users may also modify the metadata acquired through automatic extraction and add more descriptions. 


**Instructions**



- Interface：`queryLocalMetadata`

- Request type: `GET`

- Request data type: none

- Response data type: `*/*`

- Request parameter:



| Name     | Type   | Description                                                  | If required |
| -------- | ------ | ------------------------------------------------------------ | ----------- |
| originId | string | originId of the raw data uploaded through Datum (the unique identification of the data on Datum) | Y           |


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
| result | json   | Metadata to be published (corresponding to the relevant raw data) | Y           |
| msg    | string | Response message                                             | Y           |


- Response example:

```json
{
      "status": 200,
      "result": {
            "owner": {
                "nodeName": "new_org152",
                "nodeId": "3188983b115ee29a09fc4798e4944cbb82636bd202d4d4611bde1cc347c7790c62186e91d55584b62c967f7466db97211238f81da52aa3db94d203e1d30043bb",
                "identityId": "did:pid:lat18vpuxh97dh52y6kr5csacuj9qv2c7qaem5ax8d",
                "identityType": 0,
                "dataStatus": 0,
                "status": 0,
                "updateAt": "0",
                "imageUrl": "",
                "details": "",
                "credential": "",
                "nonce": "0"
            },
            "information": {
                    "metadataId": "metadata:0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646",
                    "metadataName": "bank_predict_partyA",
                    "metadataType": 1,
                    "dataHash": "295e5ae656d084dfda86c4ef7c38719ee1fb650899ec66d15d543b30c8f45b87",
                    "desc": "bank_predict_partyA",
                    "locationType": 1,
                    "dataType": 1,
                    "industry": "1",
                    "state": 2,
                    "publishAt": "1660803893000",
                    "updateAt": "1660803893000",
                    "nonce": "5",
                    "metadataOption": "{\"metadataColumns\":[{\"index\":1,\"type\":\"string\",\"size\":0,\"name\":\"CLIENT_ID\"},{\"index\":2,\"type\":\"string\",\"size\":0,\"name\":\"DEFAULT\"},{\"index\":3,\"type\":\"string\",\"size\":0,\"name\":\"HOUSING\"},{\"index\":4,\"type\":\"string\",\"size\":0,\"name\":\"LOAN\"},{\"index\":5,\"type\":\"string\",\"size\":0,\"name\":\"CONTACT\"},{\"index\":6,\"type\":\"string\",\"size\":0,\"name\":\"CAMPAIGN\"},{\"index\":7,\"type\":\"string\",\"size\":0,\"name\":\"PDAYS\"},{\"index\":8,\"type\":\"string\",\"size\":0,\"name\":\"PREVIOUS\"},{\"index\":9,\"type\":\"string\",\"size\":0,\"name\":\"EURIBOR3M\"},{\"index\":10,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_APR\"},{\"index\":11,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_AUG\"},{\"index\":12,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_DEC\"},{\"index\":13,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_JUL\"},{\"index\":14,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_JUN\"},{\"index\":15,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_MAR\"},{\"index\":16,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_MAY\"},{\"index\":17,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_NOV\"},{\"index\":18,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_OCT\"},{\"index\":19,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_SEP\"},{\"index\":20,\"type\":\"string\",\"size\":0,\"name\":\"DAY_OF_WEEK_FRI\"},{\"index\":21,\"type\":\"string\",\"size\":0,\"name\":\"DAY_OF_WEEK_MON\"},{\"index\":22,\"type\":\"string\",\"size\":0,\"name\":\"DAY_OF_WEEK_THU\"},{\"index\":23,\"type\":\"string\",\"size\":0,\"name\":\"DAY_OF_WEEK_TUE\"},{\"index\":24,\"type\":\"string\",\"size\":0,\"name\":\"DAY_OF_WEEK_WED\"},{\"index\":25,\"type\":\"string\",\"size\":0,\"name\":\"POUTCOME_FAILURE\"},{\"index\":26,\"type\":\"string\",\"size\":0,\"name\":\"POUTCOME_NONEXISTENT\"},{\"index\":27,\"type\":\"string\",\"size\":0,\"name\":\"POUTCOME_SUCCESS\"}],\"columns\":27,\"rows\":7925,\"consumeOptions\":[],\"dataPath\":\"/home/user1/data/data_root/bank_predict_partyA_20220818-062409.csv\",\"condition\":3,\"originId\":\"07ac869b639a4a810caa3d23cc1a3872109b0258f8da9ff13046f9fbee048c21\",\"size\":609112,\"consumeTypes\":[],\"hasTitle\":true}",
                    "user": "0x7e336d121679e9d741ab771992d5f32286f60d4a",
                    "userType": 1,
                    "sign": ""
            }
        },
      "msg": "OK"
}
```



- Usage example:

```shell
curl --location --request GET 'http://datumtechs.com/api/v2/metadata/queryLocalMetadata?originId=0xdadad...454545'
```



### Publish Metadata


When publishing metadata, users put their metadata on a blockchain network or a specific data service market so that it can be seen and used by other users. Depending on the storage path of the raw data, metadata can be published based on either (a) raw data stored through Datum’s transmission channels or (b) raw data stored locally by the user.


#### **(a) Publish metadata based on raw data stored through Datum’s transmission channels**


The cloud storage and IPFS storage services provided by Datum automatically extract the metadata to be published from the raw data and package the data. After modifying and confirming the features and descriptions contained in the metadata, users can then submit and publish the metadata. Users may choose to publish their metadata on a blockchain network or a specific data service market. 


**Instructions**


- Interface：`publishMetadata`

- Request type: `POST`

- Request data type: `application/json`

- Response data type: `*/*`

- Request parameters:



| Name           | Type   | Description                                    | If required |
| -------------- | ------ | ---------------------------------------------- | ----------- |
| metadataId     | string | Metadata Id                                    | Y           |
| metadataName   | string | Metadata name                                  | Y           |
| metadataType   | int    | Metadata type                                  | Y           |
| dataHash       | string | Raw data Hash                                  | Y           |
| desc           | string | Data description                               | N           |
| locationType   | int    | Raw data storage method                        | Y           |
| dataType       | int    | Raw data type                                  | Y           |
| industry       | string | Target industry for data application           | Y           |
| state          | int    | Metadata status                                | Y           |
| metadataOption | stirng | json string of the metadata option information | Y           |
| user           | string | User information                               | Y           |
| userType       | int    | User type                                      | Y           |
| sign           | string | Message signature of the metadata              | Y           |



- Request parameter example:

```json
{
      "metadataId": "metadata:0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646",
      "metadataName": "bank_predict_partyA",
      "metadataType": 1,
      "dataHash": "295e5ae656d084dfda86c4ef7c38719ee1fb650899ec66d15d543b30c8f45b87",
      "desc": "bank_predict_partyA",
      "locationType": 1,
      "dataType": 1,
      "industry": "1",
      "state": 2,
      "metadataOption": "{\"metadataColumns\":[{\"index\":1,\"type\":\"string\",\"size\":0,\"name\":\"CLIENT_ID\"},{\"index\":2,\"type\":\"string\",\"size\":0,\"name\":\"DEFAULT\"},{\"index\":3,\"type\":\"string\",\"size\":0,\"name\":\"HOUSING\"},{\"index\":4,\"type\":\"string\",\"size\":0,\"name\":\"LOAN\"},{\"index\":5,\"type\":\"string\",\"size\":0,\"name\":\"CONTACT\"},{\"index\":6,\"type\":\"string\",\"size\":0,\"name\":\"CAMPAIGN\"},{\"index\":7,\"type\":\"string\",\"size\":0,\"name\":\"PDAYS\"},{\"index\":8,\"type\":\"string\",\"size\":0,\"name\":\"PREVIOUS\"},{\"index\":9,\"type\":\"string\",\"size\":0,\"name\":\"EURIBOR3M\"},{\"index\":10,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_APR\"},{\"index\":11,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_AUG\"},{\"index\":12,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_DEC\"},{\"index\":13,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_JUL\"},{\"index\":14,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_JUN\"},{\"index\":15,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_MAR\"},{\"index\":16,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_MAY\"},{\"index\":17,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_NOV\"},{\"index\":18,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_OCT\"},{\"index\":19,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_SEP\"},{\"index\":20,\"type\":\"string\",\"size\":0,\"name\":\"DAY_OF_WEEK_FRI\"},{\"index\":21,\"type\":\"string\",\"size\":0,\"name\":\"DAY_OF_WEEK_MON\"},{\"index\":22,\"type\":\"string\",\"size\":0,\"name\":\"DAY_OF_WEEK_THU\"},{\"index\":23,\"type\":\"string\",\"size\":0,\"name\":\"DAY_OF_WEEK_TUE\"},{\"index\":24,\"type\":\"string\",\"size\":0,\"name\":\"DAY_OF_WEEK_WED\"},{\"index\":25,\"type\":\"string\",\"size\":0,\"name\":\"POUTCOME_FAILURE\"},{\"index\":26,\"type\":\"string\",\"size\":0,\"name\":\"POUTCOME_NONEXISTENT\"},{\"index\":27,\"type\":\"string\",\"size\":0,\"name\":\"POUTCOME_SUCCESS\"}],\"columns\":27,\"rows\":7925,\"consumeOptions\":[],\"dataPath\":\"/home/user1/data/data_root/bank_predict_partyA_20220818-062409.csv\",\"condition\":3,\"originId\":\"07ac869b639a4a810caa3d23cc1a3872109b0258f8da9ff13046f9fbee048c21\",\"size\":609112,\"consumeTypes\":[],\"hasTitle\":true}",
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



| Name       | Type   | Description                                                  | If required |
| ---------- | ------ | ------------------------------------------------------------ | ----------- |
| status     | int    | Response code                                                | Y           |
| result     | json   | Information returned                                         | Y           |
| originId   | string | originId of the raw data uploaded; it is the unique identification of the data on Datum | Y           |
| metadataId | string | Id of the Metadata after it is published                     | Y           |
| msg        | string | Response message                                             | Y           |


- Response example:

```json
{
      "status": 200,
      "result": {
        "originId": "0xdadad...454545",
        "metadataId": "metadata:0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646"
      },
      "msg": "OK"
}
```



- Usage example:

```shell
curl --location --request POST 'http://datumtechs.com/api/v2/metadata/publishMetadata' \
--header 'Content-Type: application/json' \
--data-raw '{
      "metadataId": "metadata:0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646",
      "metadataName": "bank_predict_partyA",
      "metadataType": 1,
      "dataHash": "295e5ae656d084dfda86c4ef7c38719ee1fb650899ec66d15d543b30c8f45b87",
      "desc": "bank_predict_partyA",
      "locationType": 1,
      "dataType": 1,
      "industry": "1",
      "state": 2,
      "metadataOption": "{\"metadataColumns\":[{\"index\":1,\"type\":\"string\",\"size\":0,\"name\":\"CLIENT_ID\"},{\"index\":2,\"type\":\"string\",\"size\":0,\"name\":\"DEFAULT\"},{\"index\":3,\"type\":\"string\",\"size\":0,\"name\":\"HOUSING\"},{\"index\":4,\"type\":\"string\",\"size\":0,\"name\":\"LOAN\"},{\"index\":5,\"type\":\"string\",\"size\":0,\"name\":\"CONTACT\"},{\"index\":6,\"type\":\"string\",\"size\":0,\"name\":\"CAMPAIGN\"},{\"index\":7,\"type\":\"string\",\"size\":0,\"name\":\"PDAYS\"},{\"index\":8,\"type\":\"string\",\"size\":0,\"name\":\"PREVIOUS\"},{\"index\":9,\"type\":\"string\",\"size\":0,\"name\":\"EURIBOR3M\"},{\"index\":10,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_APR\"},{\"index\":11,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_AUG\"},{\"index\":12,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_DEC\"},{\"index\":13,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_JUL\"},{\"index\":14,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_JUN\"},{\"index\":15,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_MAR\"},{\"index\":16,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_MAY\"},{\"index\":17,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_NOV\"},{\"index\":18,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_OCT\"},{\"index\":19,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_SEP\"},{\"index\":20,\"type\":\"string\",\"size\":0,\"name\":\"DAY_OF_WEEK_FRI\"},{\"index\":21,\"type\":\"string\",\"size\":0,\"name\":\"DAY_OF_WEEK_MON\"},{\"index\":22,\"type\":\"string\",\"size\":0,\"name\":\"DAY_OF_WEEK_THU\"},{\"index\":23,\"type\":\"string\",\"size\":0,\"name\":\"DAY_OF_WEEK_TUE\"},{\"index\":24,\"type\":\"string\",\"size\":0,\"name\":\"DAY_OF_WEEK_WED\"},{\"index\":25,\"type\":\"string\",\"size\":0,\"name\":\"POUTCOME_FAILURE\"},{\"index\":26,\"type\":\"string\",\"size\":0,\"name\":\"POUTCOME_NONEXISTENT\"},{\"index\":27,\"type\":\"string\",\"size\":0,\"name\":\"POUTCOME_SUCCESS\"}],\"columns\":27,\"rows\":7925,\"consumeOptions\":[],\"dataPath\":\"/home/user1/data/data_root/bank_predict_partyA_20220818-062409.csv\",\"condition\":3,\"originId\":\"07ac869b639a4a810caa3d23cc1a3872109b0258f8da9ff13046f9fbee048c21\",\"size\":609112,\"consumeTypes\":[],\"hasTitle\":true}",
      "user": "0x7e336d121679e9d741ab771992d5f32286f60d4a",
      "userType": 1,
      "sign": "77+9UCNp77+9QFhC77+977+9Ru+/ve+/vUhGEe+/ve+/ve+/ve+/vQbvv73vv70dfu+/vd+Ff++/vTXvv73vv71w77+977+93KTvv73vv70F77+9Nu+/vWhjbEXvv73vv73vv73vv71Z77+977+977+977+9Yu+/ve+/vQ3vv70c"
}'
```



#### **(b) Publish metadata based on raw data stored locally**


In addition to the transmission channels provided by Datum, users may also tap into the raw data stored locally through services available on Datum to publish metadata. Users can choose to publish metadata on a blockchain network or a specific data service market.


**Instructions**



- Interface：`publishMetadataWithLocalDdata`

- Request type: `POST`

- Request data type: `application/json`

- Response data type: `*/*`

- Request parameters:



| Name           | Type   | Description                                    | If required |
| -------------- | ------ | ---------------------------------------------- | ----------- |
| metadataId     | string | Metadata Id                                    | Y           |
| metadataName   | string | Metadata name                                  | Y           |
| metadataType   | int    | Metadata type                                  | Y           |
| dataHash       | string | Raw data Hash                                  | Y           |
| desc           | string | Data description                               | N           |
| locationType   | int    | Raw data storage method                        | Y           |
| dataType       | int    | Raw data type                                  | Y           |
| industry       | string | Target industry for data application           | Y           |
| state          | int    | Metadata status                                | Y           |
| metadataOption | stirng | json string of the metadata option information | Y           |
| user           | string | User information                               | Y           |
| userType       | int    | User type                                      | Y           |
| sign           | string | Message signature of the metadata              | Y           |



- Request parameter example:

```json
{
      "metadataId": "metadata:0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646",
      "metadataName": "bank_predict_partyA",
      "metadataType": 1,
      "dataHash": "295e5ae656d084dfda86c4ef7c38719ee1fb650899ec66d15d543b30c8f45b87",
      "desc": "bank_predict_partyA",
      "locationType": 1,
      "dataType": 1,
      "industry": "1",
      "state": 2,
      "metadataOption": "{\"metadataColumns\":[{\"index\":1,\"type\":\"string\",\"size\":0,\"name\":\"CLIENT_ID\"},{\"index\":2,\"type\":\"string\",\"size\":0,\"name\":\"DEFAULT\"},{\"index\":3,\"type\":\"string\",\"size\":0,\"name\":\"HOUSING\"},{\"index\":4,\"type\":\"string\",\"size\":0,\"name\":\"LOAN\"},{\"index\":5,\"type\":\"string\",\"size\":0,\"name\":\"CONTACT\"},{\"index\":6,\"type\":\"string\",\"size\":0,\"name\":\"CAMPAIGN\"},{\"index\":7,\"type\":\"string\",\"size\":0,\"name\":\"PDAYS\"},{\"index\":8,\"type\":\"string\",\"size\":0,\"name\":\"PREVIOUS\"},{\"index\":9,\"type\":\"string\",\"size\":0,\"name\":\"EURIBOR3M\"},{\"index\":10,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_APR\"},{\"index\":11,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_AUG\"},{\"index\":12,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_DEC\"},{\"index\":13,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_JUL\"},{\"index\":14,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_JUN\"},{\"index\":15,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_MAR\"},{\"index\":16,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_MAY\"},{\"index\":17,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_NOV\"},{\"index\":18,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_OCT\"},{\"index\":19,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_SEP\"},{\"index\":20,\"type\":\"string\",\"size\":0,\"name\":\"DAY_OF_WEEK_FRI\"},{\"index\":21,\"type\":\"string\",\"size\":0,\"name\":\"DAY_OF_WEEK_MON\"},{\"index\":22,\"type\":\"string\",\"size\":0,\"name\":\"DAY_OF_WEEK_THU\"},{\"index\":23,\"type\":\"string\",\"size\":0,\"name\":\"DAY_OF_WEEK_TUE\"},{\"index\":24,\"type\":\"string\",\"size\":0,\"name\":\"DAY_OF_WEEK_WED\"},{\"index\":25,\"type\":\"string\",\"size\":0,\"name\":\"POUTCOME_FAILURE\"},{\"index\":26,\"type\":\"string\",\"size\":0,\"name\":\"POUTCOME_NONEXISTENT\"},{\"index\":27,\"type\":\"string\",\"size\":0,\"name\":\"POUTCOME_SUCCESS\"}],\"columns\":27,\"rows\":7925,\"consumeOptions\":[],\"dataPath\":\"/home/user1/data/data_root/bank_predict_partyA_20220818-062409.csv\",\"condition\":3,\"originId\":\"07ac869b639a4a810caa3d23cc1a3872109b0258f8da9ff13046f9fbee048c21\",\"size\":609112,\"consumeTypes\":[],\"hasTitle\":true}",
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



| Name       | Type   | Description                                                  | If required |
| ---------- | ------ | ------------------------------------------------------------ | ----------- |
| status     | int    | Response code                                                | Y           |
| result     | json   | Information returned                                         | Y           |
| originId   | string | originId of the raw data uploaded; it is the unique identification of the data on Datum | Y           |
| metadataId | string | Id of the Metadata after it is published                     | Y           |
| msg        | string | Response message                                             | Y           |


- Response example:

```json
{
      "status": 200,
      "result": {
        "originId": "0xdadad...454545",
        "metadataId": "metadata:0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646"
      },
      "msg": "OK"
}
```


- Usage example:

```shell
curl --location --request POST 'http://datumtechs.com/api/v2/metadata/publishMetadataWithLocalDdata' \
--header 'Content-Type: application/json' \
--data-raw '{
      "metadataId": "metadata:0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646",
      "metadataName": "bank_predict_partyA",
      "metadataType": 1,
      "dataHash": "295e5ae656d084dfda86c4ef7c38719ee1fb650899ec66d15d543b30c8f45b87",
      "desc": "bank_predict_partyA",
      "locationType": 1,
      "dataype": 1,
      "industry": "1",
      "state": 2,
      "metadataOption": "{\"metadataColumns\":[{\"index\":1,\"type\":\"string\",\"size\":0,\"name\":\"CLIENT_ID\"},{\"index\":2,\"type\":\"string\",\"size\":0,\"name\":\"DEFAULT\"},{\"index\":3,\"type\":\"string\",\"size\":0,\"name\":\"HOUSING\"},{\"index\":4,\"type\":\"string\",\"size\":0,\"name\":\"LOAN\"},{\"index\":5,\"type\":\"string\",\"size\":0,\"name\":\"CONTACT\"},{\"index\":6,\"type\":\"string\",\"size\":0,\"name\":\"CAMPAIGN\"},{\"index\":7,\"type\":\"string\",\"size\":0,\"name\":\"PDAYS\"},{\"index\":8,\"type\":\"string\",\"size\":0,\"name\":\"PREVIOUS\"},{\"index\":9,\"type\":\"string\",\"size\":0,\"name\":\"EURIBOR3M\"},{\"index\":10,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_APR\"},{\"index\":11,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_AUG\"},{\"index\":12,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_DEC\"},{\"index\":13,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_JUL\"},{\"index\":14,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_JUN\"},{\"index\":15,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_MAR\"},{\"index\":16,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_MAY\"},{\"index\":17,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_NOV\"},{\"index\":18,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_OCT\"},{\"index\":19,\"type\":\"string\",\"size\":0,\"name\":\"MONTH_SEP\"},{\"index\":20,\"type\":\"string\",\"size\":0,\"name\":\"DAY_OF_WEEK_FRI\"},{\"index\":21,\"type\":\"string\",\"size\":0,\"name\":\"DAY_OF_WEEK_MON\"},{\"index\":22,\"type\":\"string\",\"size\":0,\"name\":\"DAY_OF_WEEK_THU\"},{\"index\":23,\"type\":\"string\",\"size\":0,\"name\":\"DAY_OF_WEEK_TUE\"},{\"index\":24,\"type\":\"string\",\"size\":0,\"name\":\"DAY_OF_WEEK_WED\"},{\"index\":25,\"type\":\"string\",\"size\":0,\"name\":\"POUTCOME_FAILURE\"},{\"index\":26,\"type\":\"string\",\"size\":0,\"name\":\"POUTCOME_NONEXISTENT\"},{\"index\":27,\"type\":\"string\",\"size\":0,\"name\":\"POUTCOME_SUCCESS\"}],\"columns\":27,\"rows\":7925,\"consumeOptions\":[],\"dataPath\":\"/home/user1/data/data_root/bank_predict_partyA_20220818-062409.csv\",\"condition\":3,\"originId\":\"07ac869b639a4a810caa3d23cc1a3872109b0258f8da9ff13046f9fbee048c21\",\"size\":609112,\"consumeTypes\":[],\"hasTitle\":true}",
      "user": "0x7e336d121679e9d741ab771992d5f32286f60d4a",
      "userType": 1,
      "sign": "77+9UCNp77+9QFhC77+977+9Ru+/ve+/vUhGEe+/ve+/ve+/ve+/vQbvv73vv70dfu+/vd+Ff++/vTXvv73vv71w77+977+93KTvv73vv70F77+9Nu+/vWhjbEXvv73vv73vv73vv71Z77+977+977+977+9Yu+/ve+/vQ3vv70c"
}'
```



### Publish Data Hash


In some cases, users may need to publish the raw data hash on a blockchain network or data service platform.


**Instructions**


- Interface：`publishDataHash`

- Request type: `POST`

- Request data type: `application/json`

- Response data type: `*/*`

- Request parameters:



| Name     | Type   | Description                       | If required |
| -------- | ------ | --------------------------------- | ----------- |
| dataHash | string | Raw data Hash                     | Y           |
| desc     | string | Data description                  | N           |
| user     | string | User information                  | Y           |
| userType | int    | User type                         | Y           |
| sign     | string | Message signature of the metadata | Y           |


- Request parameter example:

```json
{
      "dataHash": "295e5ae656d084dfda86c4ef7c38719ee1fb650899ec66d15d543b30c8f45b87",
      "desc": "bank_predict_partyA",
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
      "result": "",
      "msg": "OK"
}
```


- Usage example:

```shell
curl --location --request POST 'http://datumtechs.com/api/v2/metadata/publishDataHash' \
--header 'Content-Type: application/json' \
--data-raw '{
      "dataHash": "295e5ae656d084dfda86c4ef7c38719ee1fb650899ec66d15d543b30c8f45b87",
      "desc": "bank_predict_partyA",
      "user": "0x7e336d121679e9d741ab771992d5f32286f60d4a",
      "userType": 1,
      "sign": "77+9UCNp77+9QFhC77+977+9Ru+/ve+/vUhGEe+/ve+/ve+/ve+/vQbvv73vv70dfu+/vd+Ff++/vTXvv73vv71w77+977+93KTvv73vv70F77+9Nu+/vWhjbEXvv73vv73vv73vv71Z77+977+977+977+9Yu+/ve+/vQ3vv70c"
}'
```



## Verification of Data Consistency


When users are using the stored data, because the provider's data is encrypted and stored in the private domain due to security considerations, it is impossible for the data user to confirm whether the provider has changed the data, which is why verification of data consistency is required. On Datum, users can check the consistency of the stored raw data through the data hash on the chain to make sure that it's not modified.




### Verification of Data Consistency Based on Data Hash


Datum uses the originId of the current raw data or the metadataId of the corresponding metadata to obtain the data hash stored on the blockchain and the data that's being used for the verification of data consistency.


**Instructions**



- Interface：`verifyDataByHash`

- Request type: `POST`

- Request data type: `application/json`

- Response data type: `*/*`


- Request parameters:



| Name       | Type   | Description                                                  | If required |
| ---------- | ------ | ------------------------------------------------------------ | ----------- |
| verifyType | int    | Types of verifyId, 0: unknown, 1: originId, 2: metadataId    | Y           |
| verifyId   | string | originId of the raw data uploaded or metadataId of the corresponding metadata; it represents the unique identification of the data on Datum | Y           |
| dataPath   | string | Cache path of the loaded raw data                            | Y           |


- Request parameter example:

```json
{
      "verifyType": 2,
      "verifyId": "metadata:0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646",
      "dataPath": "../../storage/data/bank_predict_partyA_20220818-062409.csv"
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
      "result": "",
      "msg": "OK"
}
```


- Usage example:

```shell
curl --location --request POST 'http://datumtechs.com/api/v2/verifyData/verifyDataByHash' \
--header 'Content-Type: application/json' \
--data-raw '{
      "verifyType": 2,
      "verifyId": "metadata:0x2cbb932fe93b84140d388501f399bbbe5825f473a9f13c437ac292c2b3693646",
      "dataPath": "../../storage/data/bank_predict_partyA_20220818-062409.csv"
}'
```



### Additional Remarks

#### <span id="storageOption值说明"> About the storageOption: </span>


- storageType： 0

- storageOption：

```
""
```


- storageType： 1

- storageOption：

```
"{
    "cloudType": 0    // 0: Datum's default storage method; 1: Google cloud storage provided by Datum; 2: Aazon AWS storage provided by Datum;...
  }"
```




- storageType： 2

- storageOption：2

```
""
```


- storageType： 3

- storageOption：3

```
"{
    "chainType": 0 // 0: Alaya storage; 1: PlatON storage; 2: Ethereum storage; (more coming soon)...
  }"
```

