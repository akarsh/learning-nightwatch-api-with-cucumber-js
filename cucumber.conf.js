const { startWebDriver, createSession, closeSession, stopWebDriver } = require("nightwatch-api");
const { setDefaultTimeout, BeforeAll, AfterAll } = require("cucumber");

setDefaultTimeout(50000); // 5 minutes

BeforeAll(async () => {
    await startWebDriver();
    await createSession();
});

AfterAll(async () => {
    await closeSession();
    await stopWebDriver();
});
