# azure-functions-sqlbinding-js-example
## How to make this work

1. clone this repo.
1. rename `local.settings.json.example` to `local.settings.json`
1. set a connection string for SQL server to the `SqlConnectionString` property in `local.settings.json`
1. execute function host
    - option 1.  
       Use VScode debug feature (press `F5`).
    - option 2.  
       Use `func start` after executing the following command.

       ```
       func extensions install --package Microsoft.Azure.WebJobs.Extensions.Sql --version 0.1.304-preview
       cp ./bin/extensions.deps.json ./bin/function.deps.json
       ```
