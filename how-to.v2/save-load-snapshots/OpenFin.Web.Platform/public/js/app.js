async function init() {
    const launchChild = document.querySelector("#btnLaunchChild");
    const logging = document.querySelector("#logging");

    launchChild.addEventListener("click", () => {
        const winOption = {
            name: `${window.crypto.randomUUID()}`,
            defaultWidth: 400,
            defaultHeight: 400,
            url: "http://localhost:4040/views/child.html",
            frame: true,
            autoShow: true
        };
        return fin.Window.create(winOption);
    });

    const snapshotProvider = {
        async getSnapshot() {
            logging.textContent = "getSnapshot was called";
            return fin.Platform.getCurrentSync().getSnapshot();
        },
        async applySnapshot(snapshot) {
            logging.textContent = "applySnapshot was called";
            return fin.Platform.getCurrentSync().applySnapshot(snapshot);
        }
    }

    fin.Platform.init();

    await fin.SnapshotSource.init(snapshotProvider);
}

document.addEventListener("DOMContentLoaded", async () => {
    try {
        await init();
    } catch (error) {
        console.error(error);
    }
});
