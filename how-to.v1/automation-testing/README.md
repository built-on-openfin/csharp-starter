# Automation testing for .Net application using embedded OpenFin view

This is an example of a Windows Form Application that can be used for test automation.

First install the dependencies with `npm install`

Next:

* Build the .net Application either through Visual Studio or by running `npm run build`
* Start the .net Application manually or `npm run start`
* Run the tests with `npm run test`

The tests use a harness platform manifest in `./harness/manifest.fin.json` which needs to bootstrap the runner with the same runtime version as the .net application is using.

When the tests are run we also use the `--closeRuntime never` command line option, otherwise the .net Application link to the runtime is severed before it gets a chance to be used.

The last test also uses `fkill` to remove the running application, otherwise the test runner does not exit.

To make the whole process behave with clean versions of the runtime we use `fkill` to remove the instances at the start and the end of the test run.

The whole process can be automated by using the `npm run all` package script.
