# Overview
This repository is a basic setup for a TypeScript serverless launch on the AWS platform using the [Serverless Framework](https://www.serverless.com/framework/docs/getting-started/).

### Required Software
1. [Node.js](https://nodejs.org/en/)
2. [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)
3. [Serverless CLI](https://www.serverless.com/framework/docs/getting-started/)

### Inportant Files/Folders
1. *serverless.yml* - Configuration file for serverless deployment
2. *functions/handlers.ts* - Your lambda functions that will handle your request

### How To Use 
1. Download or clone the repository
2. Run `npm i` to install the needed dependencies
3. Run `sls config credentials --provider aws --key key --secret secret`
4. Run `sls deploy -v` to deploy your serverless application

### Test
To verify your application was successfully deployed use postman to send a `GET` request to the service endpoint that was created during the stack update. You should receive a response with a message **This is a serverless app**.

### What's Created
You can see all the resources that were installed by looking at the CloudFormation Resources. However, you should have a lambda function, an S3 bucket, and an API Gateway created within your AWS Account.