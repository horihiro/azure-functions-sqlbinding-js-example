  module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    context.bindings.employees = JSON.stringify([{
      "EmployeeId": 1,
      "FirstName": "Hello",
      "LastName": "World",
      "Company": "Microsoft",
      "Team": "Functions"
    }])

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: "OK"
    };
}