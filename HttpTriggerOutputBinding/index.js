  module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    context.bindings.employees = JSON.stringify([{
      "employeeid": 1,
      "firstname": "Hello",
      "lastname": "World",
      "company": "Microsoft",
      "team": "Functions"
    }])

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: "OK"
    };
}