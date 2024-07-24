let initData;
let syncer;
let sessionData;

const origFetch = fetch;
unsafeWindow.fetch = async function (url, ...options) {
    try {
        const res = await origFetch(url, ...options);

        if (url.includes(p.CDN_DOMAIN)) {
            const text = await res.clone().text();
            initData = JSON.parse(`[${text.slice(1, -2)}]`);
            syncer = initData[10];
        } else if (url.includes(syncer) && !sessionData) {
            sessionData = await res.clone().json();
            bypass();
        }

        return res;
    } catch (e) {
        console.error(e);
        window.location.reload();
        throw e; // Ensure the error is propagated
    }
};

async function bypass() {
    const urid = sessionData[0].urid;
    let server = initData[9];
    server = `${(Number(urid.toString().slice(-5)) % 3)}.${server}`;

    const websocket = new WebSocket(`wss://${server}/c?uid=${urid}&cat=54&key=${p.KEY}`);

    await fetch(sessionData[0].action_pixel_url);

    websocket.onopen = async function () {
        await Promise.all([
            fetch(`https://${server}/st?uid=${urid}&cat=54`, { method: 'POST' }),
            fetch(`https://${syncer}/td?ac=1&urid=${urid}&cat=54&tid=${p.TID}`)
        ]);
    };

    websocket.onmessage = function (event) {
        if (event.data.startsWith('r:')) {
            const data = decryptData(event.data.split(':')[1]);
            window.location.assign(data);
        }
    };
}

function decryptData(encodedData, keyLength = 5) {
    const base64Decoded = atob(encodedData);
    const key = base64Decoded.slice(0, keyLength);
    const encryptedContent = base64Decoded.slice(keyLength);

    let decryptedData = '';

    for (let i = 0; i < encryptedContent.length; i++) {
        const charCodeEncrypted = encryptedContent.charCodeAt(i);
        const charCodeKey = key.charCodeAt(i % key.length);
        decryptedData += String.fromCharCode(charCodeEncrypted ^ charCodeKey);
    }

    return decryptedData;
}
