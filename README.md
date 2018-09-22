# simple-sum

> A simple Vue.js app to calculate the sum of the prices of items in a store, deployed to Amazon AWS S3

## How to deploy to Amazon S3

* Create a new S3 bucket
* Update S3 bucket name in package.json under scripts -> deploy (currently: "simple-sum-copy"
* (Install and configure aws-cli)[https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html]
> npm install
> npm run build
> npm run deploy

* [Host website using your S3 bucket)[https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html]
