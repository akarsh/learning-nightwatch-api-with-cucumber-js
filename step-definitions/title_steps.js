const { Given, Then } = require("cucumber");
const { client } = require("nightwatch-api");

Given('I open Bing search page {string}', function (string) {
    return client.url(string).waitForElementVisible('body', 1000);
});
  
Then('the title is {string}', function (string) {
    return client.assert.title(string);
});
