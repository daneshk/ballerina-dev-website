---
layout: ballerina-persist-documentation-left-nav-pages-swanlake
title: Supported Data Stores
description: The sections gives details on the Supported Data Stores.
keywords: ballerina, programming language, ballerina packages, persist, data store, in-memory, mysql, google sheets
permalink: /learn/ballerina-persist/supported-datastores/
active: persist_supported_datastores
intro: In the realm of `bal persist` feature, selecting the right data store is crucial for ensuring the reliable storage and retrieval of data. Various data stores exist, each with its strengths and weaknesses. The `bal persist` currently supports three data stores. Depending on the data store you selected for your application, configuration and supported types are varied.
redirect_from:
- /learn/ballerina-persist/supported-datastores/
---

Following are the data stores supported,

* In-Memory
* MySQL
* Google Sheets [Experimental]

The datastore is passed as a parameter to the `persist init` command. If you do not specify a data store, the In-Memory data store is used by default. 

```shell
$ bal persist init --datastore mysql
```

It is recorded in the `Ballerina.toml` file in your project as follows:

```toml
[persist]
datastore = mysql
...
```
The following sections describe the configuration and supported types for each data store.

## In-Memory

The In-Memory data store is a simple data store that stores data in memory. This data store is useful for testing purposes. The In-Memory data store is the default data store for `bal persist`. Therefore, you do not need to explicitly specify the data store when you are using the In-Memory data store.

### Supported Ballerina Types

The In-Memory data store supports the following Ballerina types:

* [any](https://ballerina.io/learn/language-basics/#any-type)
* error

### Configuration

The In-Memory data store does not require any configuration. 

## MySQL

The MySQL data store is a relational database management system that stores data in tables. The MySQL data store is useful for storing data in a relational format. The MySQL data store is not the default data store for `bal persist`. Therefore, you need to explicitly specify the data store when initializing `bal persist` in your application. like below,

```shell
$ bal persist init --datastore mysql
```

### Supported Ballerina Types

The following table lists the Ballerina types supported by the MySQL data store and the corresponding SQL types used to store the data in the database.

|  Ballerina Type  |    SQL Type     |
|:----------------:|:---------------:|
|       int        |       INT       |
|      float       |     DOUBLE      |
|     decimal      | DECIMAL(65,30)  |
|      string      |  VARCHAR(191)   |
|     boolean      |     BOOLEAN     |
|      byte[]      |    LONGBLOB     |
|        ()        |      NULL       |
|    time:Date     |      DATE       |
|  time:TimeOfDay  |      TIME       |
|     time:Utc     |    TIMESTAMP    |
|    time:Civil    |    DATETIME     |

 
If you want to map a Ballerina type to a different SQL type or want to change the default length of a SQL type, you can change it in the `script.sql` file generated by the `persist generate` command before executing the script.

### Configuration

You need to set values for the following basic configuration parameters in the `Config.toml` file in your project to use the MySQL data store.

|  Parameter  |              Description              |
|:-----------:|:-------------------------------------:|
|    host     |   The hostname of the MySQL server.   |
|    port     |     The port of the MySQL server.     |
|  username   |   The username of the MySQL server.   |
|  password   |   The password of the MySQL server.   |
|  database   | The name of the database to be used.  |

The following is a sample `Config.toml` file with the MySQL data store configuration. This is generated by the `persist generate` command.

```toml
[<packageName>.<moduleName>]
host = "localhost"
port = 3306
user = "root"
password = ""
database = ""
```

Additionally, you can set values for the following advanced configuration parameters in the `Config.toml` file in your project to use the MySQL data store. Please refer to the [MySQL Connector documentation](https://lib.ballerina.io/ballerinax/mysql/1.8.0#Options) for more information on these parameters.

### How to Set up

#### Set up a MySQL server instance

Select one of the methods below to set up a MySQL server.

Tip: Keep the connection and authentication details for connecting to the MySQL server including the hostname, port, username and password noted down.

* Install a MySQL server on your machine locally by downloading and installing MySQL for different platforms.
* Use a cross-platform web-server solution such as XAMPP or WampServer.
* Use Docker to create a MySQL server deployment.
* Use a cloud-based MySQL solution such as Google’s CloudSQL, Amazon’s RDS for MySQL, or Microsoft’s Azure database for MySQL.

#### Run the script to create the database and tables

The `persist generate` command generates a `script.sql` file in the generated directory of your project. This file contains the SQL script to create the tables required for your application. You need to run this script to create the database and tables in the MySQL server using a MySQL client such as MySQL Workbench or the MySQL command line client.


## Google Sheets

The Google Sheets data store is a cloud-based spreadsheet application that stores data in tables. The Google Sheets data store is useful for storing data in a spreadsheet format. The Google Sheets data store is not the default data store for `bal persist`. Therefore, you need to explicitly specify the data store when initializing `bal persist` in your application. like below,

```shell
$ bal persist init --datastore googlesheets
```

### Supported Ballerina Types

The following table lists the Ballerina types supported by the Google Sheets data store and the corresponding Google Sheets types used to store the data in the spreadsheet.

|  Ballerina Type  | Google Sheets Type  |
|:----------------:|:-------------------:|
|       int        |       NUMBER        |
|      float       |       NUMBER        |
|     decimal      |       NUMBER        |
|      string      |       STRING        |
|     boolean      |       BOOLEAN       |
|    time:Date     |       STRING        |
|  time:TimeOfDay  |       STRING        |
|     time:Utc     |       STRING        |
|    time:Civil    |       STRING        |


### Configuration

You need to set values for the following basic configuration parameters in the `Config.toml` file in your project to use the Google Sheets data store.

|   Parameter    |                 Description                  |
|:--------------:|:--------------------------------------------:|
|    clientId    |   The client ID of the Google Sheets API.    |
|  clientSecret  | The client secret of the Google Sheets API.  |
|  refreshToken  | The refresh token of the Google Sheets API.  |
| spreadsheetId  |    The ID of the spreadsheet to be used.     |

The following is a sample `Config.toml` file with the Google Sheets data store configuration. This is generated by the `persist generate` command.

```toml
[<packageName>.<moduleName>]
spreadsheetId = ""
clientId = ""
clientSecret = ""
refreshToken = ""
```

Please refer to the [Google API documentation](https://developers.google.com/identity/protocols/oauth2) for more information on how to obtain the client ID, client secret, and refresh token.

### How to Set up

#### How to run `script.gs` in the worksheet

The `script.gs` file generated from the `persist generate` command can initiate the google sheets client. This file can be executed in the Google Apps Script console using the following steps.
1. Go to the respective spreadsheet.
2. Open the AppScript console from the menu item `Extensions - > Apps Script`
3. Copy the content of the script.gs file into the console.
4. Click the Deploy button to Deploy the project as a Web Application.
5. Click on the Run button to execute the selected function.

### How to obtain Google API tokens

API tokens for the Google sheets can be obtained using the following procedure.
1. Get the clientID, and client secret using the code following [guidelines](https://developers.google.com/identity/protocols/oauth2).
2. If you want to use [OAuth 2.0 playground](https://developers.google.com/oauthplayground) to receive the authorization code and obtain the access token and refresh token, Follow below steps.
   1. Go to the [OAuth 2.0 playground](https://developers.google.com/oauthplayground).
   2. Click the settings icon ![settings icon](https://developers.google.com/oauthplayground/assets/images/settings.png) on the top right corner of the page.
   3. Select the checkbox `Use your own OAuth credentials`.
   4. Enter the OAuth Client ID and OAuth Client secret.
   5. Click `Close`.
   6. Select the required Google Sheets API scopes.
   7. Click `Authorize APIs`.
   8. Click `Exchange authorization code for tokens` to obtain the access token and refresh token.
