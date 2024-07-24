async function lootlabs() {
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    const currentUrl = window.location.href;

    try {
        console.log("Starting script, current URL:", currentUrl);
        await sleep(2000); // Sleep for 2000 milliseconds (2 seconds)

        // Try the first API
        console.log("Sending request to API...");
        let response = await fetch("https://dlr-api.woozym.workers.dev/api/deloreanv2/goatbypassersontop/free?url=" + currentUrl);
        if (!response.ok) {
            console.error(`HTTP error! status: ${response.status}`);
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        console.log("API responded, parsing JSON...");
        const data = await response.json();
        console.log("Parsed JSON:", data);

        if (data.result && data.result.startsWith("https://")) {
            console.log("Valid URL found, redirecting to:", data.result);
            window.location.href = data.result;
        } else {
            console.warn("First API response doesn't contain a valid URL.");
            throw new Error("First API response doesn't contain a valid URL");
        }
    } catch (e) {
        console.error("Error: API might be offline or returned an invalid response.", e);
    }
}

function createNotificationBox() {
    const modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "50%";
    modal.style.left = "50%";
    modal.style.transform = "translate(-50%, -50%)";
    modal.style.backgroundColor = "#fff";
    modal.style.padding = "20px";
    modal.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
    modal.style.zIndex = "1000";
    modal.style.textAlign = "center";

    const message = document.createElement("p");
    message.textContent = "Do you want to use the API bypass?";
    modal.appendChild(message);

    const yesButton = document.createElement("button");
    yesButton.textContent = "Yes";
    yesButton.style.margin = "0 10px";
    yesButton.onclick = () => {
        modal.remove();
        lootlabs();
    };
    modal.appendChild(yesButton);

    const noButton = document.createElement("button");
    noButton.textContent = "No";
    noButton.style.margin = "0 10px";
    noButton.onclick = () => {
        modal.remove();
    };
    modal.appendChild(noButton);

    document.body.appendChild(modal);
}

const p = window.location.href;
const lootlabsRegex = /https:\/\/(loot-link\.com|loot-links\.com|lootlink\.org|lootlinks\.co|lootdest\.info|lootdest\.org|lootdest\.com|links-loot\.com|linksloot\.net)\/s\?.*/;

if (lootlabsRegex.test(p)) {
    createNotificationBox();
}
