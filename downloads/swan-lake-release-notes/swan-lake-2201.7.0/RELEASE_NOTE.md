---
layout: ballerina-left-nav-release-notes
title: 2201.7.0 (Swan Lake) 
permalink: /downloads/swan-lake-release-notes/2201.7.0/
active: 2201.7.0
redirect_from: 
    - /downloads/swan-lake-release-notes/2201.7.0
    - /downloads/swan-lake-release-notes/2201.7.0-swan-lake/
    - /downloads/swan-lake-release-notes/2201.7.0-swan-lake
    - /downloads/swan-lake-release-notes/
    - /downloads/swan-lake-release-notes
---

## Overview of Ballerina Swan Lake 2201.7.0

<em>2201.7.0 (Swan Lake Update 7) is the seventh update release of Ballerina Swan Lake, and it includes a new set of features and significant improvements to the compiler, runtime, standard library, and developer tooling. It is based on the 2022R4 version of the Language Specification.</em> 

## Update Ballerina

Update your current Ballerina installation directly to 2201.7.0 by using the [Ballerina Update Tool](/learn/cli-documentation/update-tool/) as follows.

1. Run `bal update` to get the latest version of the Update Tool.
2. Run `bal dist update` to update to this latest distribution.

## Install Ballerina

If you have not installed Ballerina, download the [installers](/downloads/#swanlake) to install.

## Backward-incompatible changes

- A bug that allowed using a function reference of a non-`isolated` function type in a function or method call expression within an `isolated` function or method has been fixed.

    ```ballerina
    type Employee record {|
        string name;
        int id;
        string department;
    |};

    isolated function createEmployee(string[] name, 
                                    function () returns int idFunction,
                                    string department) 
            returns Employee => {
        name: string:'join(" ", ...name),
        // Compilation error now, since `idFunction` is not `isolated`.
        id: idFunction(),
        department
    };
    ```
  
- A bug that caused the broader type to be used instead of the singleton type when a constant is used as a type descriptor has been fixed.

  This may result in compilation errors that were previously not identified.

    ```ballerina
    const int CONST = 1 + 7;
    CONST num = 2; // Compilation error now.
    ```

  This results in a compilation error now since `num`, which is of type `CONST`, can only be integer `8`.
 
- A bug that resulted in compilation errors not being logged for duplicate keys via computed name fields of a mapping constructor in a mapping constant declaration has been fixed. This previously resulted in a panic at runtime instead.

    ```ballerina
    const MESSAGE = "message";
    const map<string> HTTP_OK = {httpCode: "200", message: "OK", [MESSAGE] : "BAD REQUEST"}; // Compilation error now.
    ```

- Fixed a bug in the configurable TOML syntax validation for the model structure. The error message thrown for an invalid TOML module structure is now improved to provide the variable name.

    For example, consider a non-default module `foo.bar`, which contains the following configurable variables.

    ```ballerina
    configurable int intVar = ?;
    configurable string stringVar = ?;
    ```

    If an invalid TOML structure is found for the module `foo.bar` in the `Config.toml` file, it throws an error with the following message.

    ```
    [Config.toml:(1:1,2:23)] invalid TOML structure found for module ’foo.bar’. with variable 'intVar'. Please provide the module name as '[foo.bar]'
    [Config.toml:(1:1,2:23)] invalid TOML structure found for module ‘foo’.bar. with variable 'stringVar'. Please provide the module name as ‘[foo.bar]’
    ```

## Language updates

### New features

#### Introduction of the `group by` and `collect` clauses

The language now supports the `group by` and `collect` clauses to perform aggregation-related operations. The `group by` clause is used to group a collection based on a `grouping-key`. The `grouping-key` will be unique for each group. The `collect` clause is used to group a collection into one group. 

```ballerina
import ballerina/io;
public type CovidEntry record {|
    string district;
    string province;
    decimal deaths;
|};
public final table<CovidEntry> covidTable = table [
    {district: "Colombo", province: "Western", deaths: 21},
    {district: "Kandy", province: "Central", deaths: 14},
    {district: "Kaluthara", province: "Western", deaths: 18},
    {district: "Jaffna", province: "North", deaths: 10}
];
public function main() {
    record {|string province; decimal deaths;|}[] deathsByProvince = from var {province, deaths} in covidTable
        group by province
        select {province, deaths: sum(deaths)};
    io:println(deathsByProvince);
    decimal totalDeaths = from var {deaths} in covidTable
            collect sum(deaths);
    io:println(totalDeaths);
}
```

### Improvements

#### Support for constant declarations without a type descriptor

Constants can now be declared without specifying a type descriptor. Previously, it was required to specify a type descriptor except with numeric and string literal expressions.

Both of the following cases are allowed now.

```ballerina
const map<string> HTTP_OK = {httpCode: "200", message: "OK"};
const HTTP_BAD_REQUEST = {httpCode: "400", message: "BAD REQUEST"};
```

#### Support for unions as type descriptors in constant declarations
  
Constant declarations with unions as type descriptors are now supported.

```ballerina
const float|decimal TOTAL = 1 + 2.0;
```

#### Support for more recursive type definitions

The type definition resolution logic has been improved to support more recursive type definitions.

```ballerina
type A [A];
type B [B] & readonly;
```

### Bug fixes

To view other bug fixes, see the [GitHub milestone for Swan Lake 2201.7.0](https://github.com/ballerina-platform/ballerina-lang/issues?q=is%3Aissue+label%3ATeam%2FCompilerFE+milestone%3A2201.7.0+is%3Aclosed+label%3AType%2FBug).

## Runtime updates

### Bug fixes

To view bug fixes, see the [GitHub milestone for 2201.7.0 (Swan Lake)](https://github.com/ballerina-platform/ballerina-lang/issues?q=is%3Aissue+milestone%3A2201.7.0+label%3ATeam%2FjBallerina+label%3AType%2FBug+is%3Aclosed).

## Standard library updates

### New features

#### `http` package

- Introduced the `httpscerr` module, which contains the HTTP status code errors.

#### `graphql` package

- Added support for the `ID` scalar type.
- Added support for the input constraint validation.

#### `persist` package

- Added support for the `mssql` data store.

### Deprecations

#### `http` package

- Deprecated the usage of adding interceptors in the `http:ListenerConfiguration`.

### Improvements

#### `http` package
- Improved the default error format and message.

#### `graphql` package
- Improved the validation of duplicate fields with different arguments.

### Bug fixes

To view bug fixes, see the [GitHub milestone for Swan Lake 2201.7.0](https://github.com/ballerina-platform/ballerina-standard-library/issues?q=is%3Aclosed+is%3Aissue+milestone%3A%222201.7.0%22+label%3AType%2FBug).

## Developer tools updates

### New features

#### Language Server

- Added a new API named `workspaceProjects` to the workspace manager to get the projects loaded in the workspace.

### Deprecations

### Improvements

#### CLI commands

- Renamed the `--native` flag to `--graalvm`.
- Introduced the `--graalvm-build-options` build option to support passing additional arguments for GraalVM native image generation.

#### Language Server

- Improved the order of completion items in the client resource access action context.
- Improved the documentation generated by the `Document this` code action to follow the Ballerina code-style best practices.
- Improved the placeholder support provided for the completion items of the service-template snippets.

#### OpenAPI tool
- Added auto-generated file headers for all the generated Ballerina files in OpenAPI to Ballerina service and client generations. Also, the users will have the option to  replace the auto generated headers with their own license, using the `--license <license-file-path>` command option.

### Bug fixes

To view bug fixes, see the GitHub milestone for Swan Lake 2201.7.0 of the repositories below.

- [Test Framework](https://github.com/ballerina-platform/ballerina-lang/issues?q=is%3Aissue+is%3Aclosed+label%3AType%2FBug+label%3AArea%2FTestFramework+milestone%3A2201.7.0)
- [Language Server](https://github.com/ballerina-platform/ballerina-lang/issues?q=is%3Aissue+label%3ATeam%2FLanguageServer+milestone%3A2201.7.0+is%3Aclosed+label%3AType%2FBug)
- [Architecture Model Generator](https://github.com/ballerina-platform/ballerina-dev-tools/issues?q=is%3Aissue+milestone%3A2201.7.0+is%3Aclosed+label%3AArea%2FArchitectureModelGenerator+label%3AType%2FBug)

## Ballerina packages updates

### New features


### Improvements

### Bug fixes

To view bug fixes, see the [GitHub milestone for Swan Lake 2201.7.0](https://github.com/ballerina-platform/ballerina-lang/issues?q=is%3Aissue+is%3Aclosed+label%3AType%2FBug+milestone%3A2201.7.0+label%3AArea%2FProjectAPI).