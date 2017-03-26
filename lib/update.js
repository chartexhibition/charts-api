'use strict';

const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.update = (event, context, callback) => {
    const timestamp = new Date().getTime();
    const data = JSON.parse(event.body);

    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        Key: {
            id: event.pathParameters.id,
        },
        ExpressionAttributeNames: {
            '#chart_name': 'name',
            '#chart_url': 'url',
        },
        ExpressionAttributeValues: {
            ':name': data.name,
            ':address': data.address,
            ':url': data.url,
            ':updatedAt': timestamp,
        },

        UpdateExpression: 'SET #chart_name = :name, address = :address, #chart_url = :url, updatedAt = :updatedAt',
        ReturnValues: 'ALL_NEW',
    };

    dynamoDb.update(params, (error, result) => {
        if (error) {
            console.error(error);
            callback(new Error('Couldn\'t update the chart.'));
            return;
        }

        const response = {
            statusCode: 200,
            body: JSON.stringify(result.Attributes),
        };

        callback(null, response);
    });
};
