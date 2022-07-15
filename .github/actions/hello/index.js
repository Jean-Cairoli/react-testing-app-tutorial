const core = require("@actions/core");
const github = require("@actions/github");

try {
    // throw new Error("some error message");
    core.debug("debug");
    core.warning("warning");
    core.error("error");

    const name = core.getInput("who-to-greet");
    core.setSecret("name");

    console.log(`Hello ${name}`);

    const time = new Date();

    core.setOutput("time", time.toDateString());

    core.startGroup("logging github obj");
    console.log(JSON.stringify(github, null, "\t"));
    core.endGroup();

    core.exportVariable("Hello", "helo");
} catch (error) {
    core.setFailed(error.message);
}
