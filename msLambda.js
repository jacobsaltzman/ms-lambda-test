//The front end should pass in the desired column number as a query parameter, like so: https://YOUR_API_GATEWAY_ENDPOINT?columnNumber=3.

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const columnNumber = event.columnNumber; //desired column is extracted from input event
    const tableName = "MS-test"; // Bunmi's DynamoDB table for the MS
    const columnName = `Task ${columnNumber}`; // Dynamically construct the column name from the imput received from the front end


    //parameters for DynamoDB scan
    const params = {
        TableName: tableName,
        ProjectionExpression: `#task`,
        ExpressionAttributeNames: {
            "#task": columnName
        }
    };

    // scan is performed, results are waited for, then specified items are taken from those results
    const data = await docClient.scan(params).promise();
    const items = data.Items.map(item => item[columnName]);
    //calculates a random task from the list
    const randomIndex = Math.floor(Math.random() * items.length);
    const randomItem = items[randomIndex];
    //sends task with 'success' code
    const response = {
        statusCode: 200,
        body: randomItem
    };
    return response;
};