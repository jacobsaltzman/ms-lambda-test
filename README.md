# ms-lambda-test

Building a Node.js lambda function for the backend of an AWS client to grab and send info from a DynamoDB table.


### The pseudocode:

- set up the AWS and DynamoDB client object info.

- define the lambda function and fill with logic

- logic one: grab the desired data from the 'event' -- the params from the frontend.

- logic two: declare the correct DB table

- logic three: use "logic one" to grab the necessary items from "logic two" 

- logic four: of those items, select a random one to be sent with a 200 status code of success

- return the item


### Does not include logic for: 

- storing user data (e.g. who has had what item before or who is currently receiving the item, ect)