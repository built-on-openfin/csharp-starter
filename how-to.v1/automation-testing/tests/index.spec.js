const { OpenFinProxy, OpenFinSystem, WebDriver } = require('@openfin/automation-helpers');
const { expect } = require('chai');
const fkill = require('fkill');

describe('DotNet native', () => {
    it('The runtime is ready', async () => {
        const isReady = await OpenFinSystem.waitForReady(10000);
        expect(isReady).to.equal(true);
    });

	it('Wait for native app', async () => {
        const hasWindow = await WebDriver.waitForWindow("title", "Native Automation", 20000);
        expect(hasWindow).to.equal(true);
    });

    it('The runtime version should be set', async () => {
        const fin = await OpenFinProxy.fin();
		const version = await fin.System.getVersion();
        expect(version).to.equal('26.102.71.7');
    });

    it('Get windows', async () => {
        const windows = await WebDriver.getWindows();
        expect(windows.length).to.equal(2);
    });

    it('Set the content in the native window', async () => {
        const mainContent = await WebDriver.findElementById("mainContent");
        expect(mainContent).to.exist;

		await mainContent.setHTML("foo");
		const newContent = await mainContent.getHTML();

		expect(newContent).to.equal("foo");
    });

	it('Close the native app', async () => {
        await fkill("OpenFin.Automation.Win.Sample.exe", { silent: true, force: true });
    });

});
