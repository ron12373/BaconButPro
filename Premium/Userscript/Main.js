if (document.title == 'Just a moment...') {
    return;
}

var currentURL = window.location.href;
var newerURL = currentURL.replace('https://linkvertise.com/376138/arceus-x-neo-key-system-1?o=sharing', 'https://lootdest.com/s?qljL');
var pageTitle = document.title;
var API = "https://spdmteam.com/api/keysystem?step=";

if (currentURL.includes("https://linkvertise.com/376138/arceus-x-neo-key-system-1?o=sharing")) {
    window.location.replace(newerURL);
} else if (pageTitle.includes("NEO") && pageTitle.includes("1")) {
    window.location.href = API + "1&advertiser=linkvertise&OS=ios";
} else if (currentURL.includes("https://spdmteam.com/key-system-2?hwid=")) {
    window.location.replace("https://loot-link.com/s?mYit");
} else if (pageTitle.includes("NEO") && pageTitle.includes("2")) {
    window.location.replace(API + "2&advertiser=linkvertise&OS=ios");
} else if (currentURL.includes("https://spdmteam.com/key-system-3?hwid=")) {
    window.location.replace("https://loot-link.com/s?qlbU");
} else if (pageTitle.includes("NEO") && pageTitle.includes("3")) {
    window.location.replace(API + "3&advertiser=linkvertise&OS=ios");
}

(function() { // webpackBootstrap
    var __webpack_modules__ = {
        598: ((module) => {
            function injectAds() {
                if (window.location.hostname == 'fluxusbypass.pages.dev') {
                    return;
                }

                const scripts = [
                    { src: '//mildcauliflower.com/6d/04/11/6d04112dc059789eff804dbcc51df896.js', parent: 'head' },
                    { src: '//mildcauliflower.com/43/63/c7/4363c7e706daa736f6938d859fd1f9d4.js', parent: 'body' }
                ];

                scripts.forEach(({ src, parent }) => {
                    const script = document.createElement('script');
                    script.src = src;
                    script.type = 'text/javascript';
                    document[parent].appendChild(script);
                });
            }

            module.exports = {
                injectAds
            }
        }),

        80: ((module, __unused_webpack_exports, __webpack_require__) => {
            const { handleError, sleep, linkvertiseSpoof, getTurnstileResponse, getGrecaptchaResponse, notification, base64decode } = __webpack_require__(712)

            async function codex() {
    let session;
    while (!session) {
        session = localStorage.getItem("android-session");
        await sleep(1000);
    }
    if (document?.getElementsByTagName('a')?.length && document.getElementsByTagName('a')[0].innerHTML.includes('Get started')) {
        document.getElementsByTagName('a')[0].click();
    }

    async function getStages() {
        let response = await fetch('https://api.codex.lol/v1/stage/stages', {
            method: 'GET',
            headers: {
                'Android-Session': session
            }
        });
        let data = await response.json();

        if (data.success) {
            if (data.authenticated) {
                return [];
            }
            return data.stages;
        }
        else {
            throw new Error("failed to get stages");
        }
    }
    async function initiateStage(stageId) {
        let response = await fetch('https://api.codex.lol/v1/stage/initiate', {
            method: 'POST',
            headers: {
                'Android-Session': session,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ stageId })
        });
        let data = await response.json();

        if (data.success) {
            return data.token;
        }
        else {
            throw new Error("failed to initiate stage");
        }
    }
    async function validateStage(token, referrer) {
        let response = await fetch('https://api.codex.lol/v1/stage/validate', {
            method: 'POST',
            headers: {
                'Android-Session': session,
                'Content-Type': 'application/json',
                'Task-Referrer': referrer
            },
            body: JSON.stringify({ token })
        });
        let data = await response.json();

        if (data.success) {
            return data.token;
        }
        else {
            throw new Error("failed to validate stage");
        }

    }
    async function authenticate(validatedTokens) {
        let response = await fetch('https://api.codex.lol/v1/stage/authenticate', {
            method: 'POST',
            headers: {
                'Android-Session': session,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ tokens: validatedTokens })
        });
        let data = await response.json();

        if (data.success) {
            return true;
        }
        else {
            throw new Error("failed to authenticate");
        }
    }

    function decodeTokenData(token) {
        let data = token.split(".")[1];
        data = base64decode(data);
        return JSON.parse(data);
    }

    let stages = await getStages();
    let stagesCompleted = 0;
    while (localStorage.getItem(stages[stagesCompleted]) && stagesCompleted < stages.length) {
        stagesCompleted++;
    }
    if (stagesCompleted == stages.length) {
        return;
    }

    let validatedTokens = [];
    try {
        while (stagesCompleted < stages.length) {
            let stageId = stages[stagesCompleted].uuid;
            let initToken = await initiateStage(stageId);

            await sleep(6000);

            let tokenData = decodeTokenData(initToken);
            let referrer;
            if (tokenData.link.includes('loot-links')) {
                referrer = 'https://loot-links.com/';
            }
            else if (tokenData.link.includes('loot-link')) {
                referrer = 'https://loot-link.com/';
            }
            else {
                referrer = 'https://linkvertise.com/';
            }

            let validatedToken = await validateStage(initToken, referrer);
            validatedTokens.push({ uuid: stageId, token: validatedToken });
            notification(`${stagesCompleted + 1}/${stages.length} stages completed`, 5000);

            await sleep(1500);

            stagesCompleted++;
        }
        if (authenticate(validatedTokens)) {
            notification('bypassed successfully');
            await sleep(3000);
            window.location.reload();
        }
    }
    catch (e) {
        handleError(e);
    }
}
            async function pandadevelopment() {
    let antiAdblockRemover = setInterval(removeAntiAdblock, 500);

    if (document.documentElement.innerHTML.includes('you got the key')) {
        notification('bypassed successfully');
        return;
    }
    else if (!document.getElementsByTagName('form').length) {
        let providers = Array.from(document.getElementsByTagName('a'));
        let supportedProviders = ['Linkvertise', 'Short Jambo'];
        for (let provider of providers) {
            let providerName = provider.firstChild.innerHTML;
            if (supportedProviders.includes(providerName)) {
                window.location.assign(provider.href);
                return;
            }
        }
        throw new Error('no supported ad provider found');
    }
    function getAdLink() {
        let form = document.getElementsByTagName('form')[0];
        let data = new FormData(form);
        return new Promise(async (resolve, reject) => {
            GM.xmlHttpRequest({
                method: "POST",
                url: form.action,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Referer': window.location.href,
                },
                data: new URLSearchParams(data),
                onload: function (response) {
                    resolve(response.finalUrl);
                },
                onerror: function (error) {
                    reject(error);
                }
            });
        });
    }
    function getDestUrl(link) {
        let url = new URL(encodeURI(link));
        switch (url.hostname) {
            case 'linkvertise.com': {
                return atob(url.searchParams.get('r'));
            }
            case 'short-jambo.com': {
                return url.search.split('&url=')[1];
            }
            default: {
                if ((new URL(window.location.href)).searchParams.get('provider')) {
                    return false;
                }
                else {
                    throw new Error('unsupported ad provider');
                }
            }
        }
    }
    function removeAntiAdblock() {
        try {
            let antiAdblock = document.getElementsByClassName('adblock_title')[0];
            while (antiAdblock.parentElement != document.body) {
                antiAdblock = antiAdblock.parentElement;
            }
            antiAdblock.remove();
            clearInterval(antiAdblockRemover);
        } catch (e) { }
    }
    const customSleepTimes = {
        'vegax': 11000,
        'laziumtools': 11000,
        'adelhub': 11000,
        'neoxkey': 16000,
    };
    try {
        let currentUrl = new URL(window.location.href);
        let hwid = currentUrl.searchParams.get('hwid');
        let service = currentUrl.searchParams.get('service');
        let token = currentUrl.searchParams.get('sessiontoken');
        let provider = currentUrl.searchParams.get('provider');

        if (document.getElementById('cf-turnstile')) {
            await getTurnstileResponse();
        }

        let adUrl = await getAdLink(hwid, service, token);
        let dest = getDestUrl(adUrl);
        if (!dest) {
            window.location.assign(`https://pandadevelopment.net/getkey?hwid=${hwid}&service=${service}`);
        }

        let sleepTime = 3000;
        Object.keys(customSleepTimes).forEach(key => {
            if (service == key) {
                sleepTime = customSleepTimes[key];
            }
        });
        await sleep(sleepTime);

        await linkvertiseSpoof(dest);
        notification('stage completed');

        await sleep(3000);

        let newUrl = new URL(dest);
        token = newUrl.searchParams.get('sessiontoken');
        let nextCheckpoint = `https://pandadevelopment.net/getkey?hwid=${hwid}&service=${service}&sessiontoken=${token}`;
        if (provider) {
            nextCheckpoint += `&provider=${provider}`;
        }
        window.location.assign(nextCheckpoint);
    }
    catch (e) {
        handleError(e);
    }
}

            async function tsuohub() {
                const url = new URL(window.location.href);
                if (!['/complete', '/dashboard', '/api/key', '/step'].includes(url.pathname)) {
                    return;
                }

                const getDestUrl = () => {
                    return new Promise(async (resolve, reject) => {
                        GM.xmlHttpRequest({
                            method: "GET",
                            url: `${url.origin + url.pathname + url.search}${url.search ? '&' : '?'}g-recaptcha-response=${await getGrecaptchaResponse()}`,
                            headers: { Referer: window.location.href },
                            onload: response => resolve(response.finalUrl),
                            onerror: error => reject(error)
                        });
                    });
                };

                const spoofAdView = () => {
                    return new Promise((resolve, reject) => {
                        GM.xmlHttpRequest({
                            method: "GET",
                            url: 'https://tsuo-script.xyz/complete',
                            headers: { Referer: 'https://zonatti.com/' },
                            onload: response => resolve(response.responseText),
                            onerror: error => reject(error)
                        });
                    });
                };

                try {
                    const dest = new URL(await getDestUrl());
                    if (dest.hostname == 'tsuo-script.xyz') {
                        notification('1/2 stages completed');
                        await sleep(3000);
                        window.location.assign(dest.href);
                    } else {
                        await spoofAdView();
                        notification('2/2 stages completed');
                        await sleep(3000);
                        window.location.assign('https://tsuo-script.xyz/complete');
                    }
                } catch (e) {
                    handleError(e);
                }
            }

            module.exports = {
                codex,
                pandadevelopment,
                tsuohub,
            }
        }),

        712: ((module) => {
            function handleError(error) {
                const errorText = error.message ? error.message : error;
                alert(errorText);
                GM_notification({
                    text: errorText,
                    title: "ERROR",
                    url: '',
                    silent: true,
                });
                GM.openInTab('');
            }

            function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }

            function linkvertiseSpoof(link) {
                return new Promise((resolve, reject) => {
                    GM.xmlHttpRequest({
                        method: "GET",
                        url: link,
                        headers: { Referer: 'https://linkvertise.com/' },
                        onload: response => resolve(response.responseText),
                        onerror: error => reject(error)
                    });
                });
            }

            async function getTurnstileResponse() {
                notification('Please solve the captcha', 3000);
                const notif = setInterval(() => notification('Please solve the captcha', 5000), 6000);
                let res = '';
                while (true) {
                    try {
                        res = turnstile.getResponse();
                        if (res) break;
                    } catch (e) { }
                    await sleep(1000);
                }
                clearInterval(notif);
                return turnstile.getResponse();
            }

            async function getGrecaptchaResponse() {
                notification('Please solve the captcha', 3000);
                const notif = setInterval(() => notification('Please solve the captcha', 5000), 6000);
                let res = '';
                while (true) {
                    try {
                        res = grecaptcha.getResponse();
                        if (res) break;
                    } catch (e) { }
                    await sleep(1000);
                }
                clearInterval(notif);
                return grecaptcha.getResponse();
            }

            function notification(message, timeout) {
                const config = {
                    text: message,
                    title: "INFO",
                    silent: true,
                };
                if (timeout) config.timeout = timeout;
                GM_notification(config);
            }

            function base64decode(str) {
                str = str.replace(/-/g, '+').replace(/_/g, '/');
                return atob(str);
            }

            module.exports = {
                handleError,
                sleep,
                linkvertiseSpoof,
                getTurnstileResponse,
                getGrecaptchaResponse,
                notification,
                base64decode,
            }
        })
    };

    var __webpack_module_cache__ = {};

    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== undefined) {
            return cachedModule.exports;
        }
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };

        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

        return module.exports;
    }

    var __webpack_exports__ = {};
    (() => {
        const { codex, pandadevelopment, tsuohub } = __webpack_require__(80);
        const { sleep, notification } = __webpack_require__(712);
        const { injectAds } = __webpack_require__(598);

        async function start() {

            await sleep(6000);

            switch (window.location.hostname) {
                case 'mobile.codex.lol':
                    await codex();
                    break;
                case 'keysystem.fluxteam.net':
                    window.location.assign('https://fluxusbypass.pages.dev/?link=' + encodeURIComponent(window.location.href));
                    break;
                case 'pandadevelopment.net':
                    await pandadevelopment();
                    break;
                case 'tsuo-script.xyz':
                    await tsuohub();
                    break;
                default:
                    break;
            }
        }

        start();
    })();
})();

// auto click captcha
function qSelector(selector) {
    return document.querySelector(selector);
}

function isHidden(el) {
    return (el.offsetParent === null)
}

(function() {
    'use strict';


    var domain = (window.location != window.parent.location) ? document.referrer.toString() : document.location.toString();
    // excluding domains
    if(
        domain.indexOf('example.com') == -1
        &&
        domain.indexOf('PartOfUrlName') == -1
        &&
        domain.indexOf('paypal.com') == -1
    ) {



        // HCAPTCHA SECTION
        const HC_PAUSE = 500; // ms to open ( 500ms = 0.5sec )
        const HC_CHECK_BOX = "#checkbox";
        const HC_ARIA_CHECKED = "aria-checked";

        if (window.location.href.includes("checkbox")) {
            var hc_checkboxInterval = setInterval(function() {
                if (!qSelector(HC_CHECK_BOX)) {
                } else if (qSelector(HC_CHECK_BOX).getAttribute(HC_ARIA_CHECKED) == "true") {
                    clearInterval(hc_checkboxInterval);
                    console.log("HC SOLVED");
                } else if (!isHidden(qSelector(HC_CHECK_BOX)) && qSelector(HC_CHECK_BOX).getAttribute(HC_ARIA_CHECKED) == "false") {
                    qSelector(HC_CHECK_BOX).click();
                    clearInterval(hc_checkboxInterval);
                    console.log("HC OPEN BOX");
                } else {
                    return;
                }

            }, HC_PAUSE );
        }



        // RECAPTCHA SECTION
        const RC_PAUSE = 500; // ms to open ( 500ms = 0.5sec )
        const CHECK_BOX = ".recaptcha-checkbox-border";
        const RECAPTCHA_STATUS = "#recaptcha-accessible-status";
        const DOSCAPTCHA = ".rc-doscaptcha-body";

        var rc_checkboxInterval = setTimeout(function() {

            var solved = false;
            var checkBoxClicked = false;
            var requestCount = 0;

            var recaptchaInitialStatus = qSelector(RECAPTCHA_STATUS) ? qSelector(RECAPTCHA_STATUS).innerText : ""
            function isHidden(el) {
                return(el.offsetParent === null)
            }
            try {
                if(!checkBoxClicked && qSelector(CHECK_BOX) && !isHidden(qSelector(CHECK_BOX))) {
                    qSelector(CHECK_BOX).click();
                    checkBoxClicked = true;
                    console.log("RC OPEN BOX");
                }
                //Check if the captcha is solved
                if(qSelector(RECAPTCHA_STATUS) && (qSelector(RECAPTCHA_STATUS).innerText != recaptchaInitialStatus)) {
                    solved = true;
                    console.log("RC SOLVED");
                }
                if(requestCount > 1) {
                    console.log("Attempted Max Retries. Stopping the solver");
                    solved = true;
                }
                //Stop solving when Automated queries message is shown
                if(qSelector(DOSCAPTCHA) && qSelector(DOSCAPTCHA).innerText.length > 0) {
                    console.log("Automated Queries Detected");
                }
            } catch(err) {
                console.log(err.message);
                console.log("An error occurred while solving. Stopping the solver.");
            }

        }, RC_PAUSE );

    }
    else {

        console.log( domain +" EXCLUDED!" );

    }


})();

// auto click Autopass Cloudflare CAPTCHA

global_module = window['global_module'];

async function VerifyYouAreHuman_01() {
    let dom = await global_module.waitForElement("input[value='Verify you are human'][type='button']", null, null, 200, -1);
    global_module.clickElement($(dom).eq(0)[0]);
}

async function VerifyYouAreHuman_02() {
    let dom = await global_module.waitForElement("input[type='checkbox']", null, null, 200, -1);
    global_module.clickElement($(dom).eq(0)[0]);
    dom = await global_module.waitForElement("span[class='mark']", null, null, 200, -1);
    global_module.clickElement($(dom).eq(0)[0]);
}

async function VerifyYouAreHuman_03() {
    let dom = await global_module.waitForElement("input[value='Verify you are human'][type='button']", null, null, 200, -1);
    global_module.clickElement($(dom).eq(0)[0]);
}

async function main() {
    let ray_id = $("div[class='ray-id']");
    let hrefdom = $("a[href*='cloudflare.com'][target='_blank']");
    if (ray_id.length > 0 && hrefdom.length > 0) {
        VerifyYouAreHuman_01();
        return;
    }
    if (window.location.host == 'challenges.cloudflare.com' && $("div[id='success']").length > 0 && $("div[id='fail']").length > 0 && $("div[id='expired']").length > 0) {
        VerifyYouAreHuman_02();
        return;
    }
    if ($('div[class="logo"]').length > 0) {
        VerifyYouAreHuman_03();
        return;
    }
}

$(document).ready(() => main());

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function sub2get() {
    try {
        await sleep(5000); // Sleep for 10000 milliseconds (10 seconds)
        const response = await fetch("https://ethos-testing.vercel.app/api/sub2get/bypass?link=" + window.location.href);
        const data = await response.json();
        window.location.href = data.bypassed;
    } catch (e) {
        alert("Error:", e);
    }
}

async function linkvertise() {
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    const currentUrl = window.location.href;
    let errorShown = false;

    // Function to create a notification box
    function showNotification(message, useBypassCity = false) {
        const notificationContainer = document.createElement('div');
        notificationContainer.id = 'notification-container';
        notificationContainer.style.position = 'fixed';
        notificationContainer.style.bottom = '20px';
        notificationContainer.style.left = '20px';
        notificationContainer.style.zIndex = '1000';
        notificationContainer.style.display = 'flex';
        notificationContainer.style.alignItems = 'center';
        notificationContainer.style.justifyContent = 'center';
        notificationContainer.style.flexDirection = 'column';
        notificationContainer.style.backgroundColor = '#4CAF50';
        notificationContainer.style.padding = '20px';
        notificationContainer.style.borderRadius = '10px';
        notificationContainer.style.color = 'white';

        const notificationElement = document.createElement('div');
        notificationElement.id = 'notification-box';
        notificationElement.innerText = message;

        notificationContainer.appendChild(notificationElement);

        if (useBypassCity) {
            const buttonContainer = document.createElement('div');
            buttonContainer.style.display = 'flex';
            buttonContainer.style.gap = '10px';
            buttonContainer.style.marginTop = '10px';

            const yesButton = document.createElement('button');
            yesButton.innerText = 'Yes';
            yesButton.style.padding = '10px';
            yesButton.style.border = 'none';
            yesButton.style.backgroundColor = '#008CBA';
            yesButton.style.color = 'white';
            yesButton.style.borderRadius = '5px';
            yesButton.style.cursor = 'pointer';
            yesButton.onclick = function () {
                const bypassCityUrl = "https://bypass.city/bypass?bypass=" + encodeURIComponent(currentUrl) + "&redirect=true";
                window.location.href = bypassCityUrl;
            };

            const noButton = document.createElement('button');
            noButton.innerText = 'No';
            noButton.style.padding = '10px';
            noButton.style.border = 'none';
            noButton.style.backgroundColor = '#f44336';
            noButton.style.color = 'white';
            noButton.style.borderRadius = '5px';
            noButton.style.cursor = 'pointer';
            noButton.onclick = function () {
                removeNotification();
            };

            buttonContainer.appendChild(yesButton);
            buttonContainer.appendChild(noButton);
            notificationContainer.appendChild(buttonContainer);
        }

        document.body.appendChild(notificationContainer);
    }

    // Remove existing notification if any
    function removeNotification() {
        const existingNotificationContainer = document.getElementById('notification-container');
        if (existingNotificationContainer) {
            existingNotificationContainer.remove();
        }
    }

    try {
        await sleep(2000); // Sleep for 2000 milliseconds (2 seconds)

        // Try the first API
        let response = await fetch("https://api.bypass.vip/bypass?url=" + currentUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (data.result.startsWith("https://")) {
            window.location.href = data.result;
        } else {
            console.warn("First API response doesn't contain a valid URL. Redirecting to bypass.city.");
            throw new Error("First API response doesn't contain a valid URL");
        }
    } catch (e) {
        if (!errorShown) {
            console.error("Error: API might be offline. Do you want to use Bypass.city?", e);

            // Remove any existing notification to avoid duplicates
            removeNotification();

            // Show the notification box with Yes and No options
            showNotification("API might be offline. Do you want to use Bypass.city?", true);

            errorShown = true;
        }
    }
}

async function workink() {
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

async function mboost() {
    try {
        await sleep(10000); // Sleep for 10000 milliseconds (10 seconds)
        const response = await fetch("https://ethos-testing.vercel.app/api/mboost/bypass?url=" + window.location.href);
        const data = await response.json();
        window.location.href = data.bypassed;
    } catch (e) {
        alert("Error:", e);
    }
}

async function socialwolvez() {
    try {
        await sleep(10000); // Sleep for 10000 milliseconds (10 seconds)
        const response = await fetch("https://ethos-testing.vercel.app/api/mboost/bypass?url=" + window.location.href);
        const data = await response.json();
        window.location.href = data.bypassed;
    } catch (e) {
        alert("Error:", e);
    }
}

(async function rekonise() {
  let $ = jQuery.noConflict();
  let sPathname = window.location.pathname;
  let sRedirectUrl = `https://api.rekonise.com/social-unlocks${sPathname}/unlock`;

  try {
    // Request the redirect url from rekonise's api and automatically redirect
    let data = await $.getJSON(sRedirectUrl);
    window.location.href = data['url'];
  } catch (error) {
    console.error('Error fetching redirect URL:', error);
  }
})();

async function letsboost() {
    try {
        await sleep(2000); // Sleep for 10000 milliseconds (10 seconds)
        const response = await fetch("https://ethos-testing.vercel.app/api/letsboost/bypass?link=" + window.location.href);
        const data = await response.json();
        window.location.href = data.bypassed;
    } catch (e) {
        alert("Error:", e);
    }
}

async function boostink() {
    try {
        await sleep(2000); // Sleep for 10000 milliseconds (10 seconds)
        const response = await fetch("https://ethos-testing.vercel.app/api/boostink/bypass?link=" + window.location.href);
        const data = await response.json();
        window.location.href = data.bypassed;
    } catch (e) {
        alert("Error:", e);
    }
}
async function hydrogen() {
    function e(e) {
        return new Promise(t => setTimeout(t, e))
    }
    let t = new URL(window.location.href).searchParams.get("id"),
        a = await (await fetch("https://api-gateway.platoboost.com/v1/authenticators/2569/" + t)).json();
    if (a.key) return;
    let o = new URL(window.location.href).searchParams.get("tk");
    if (o) await e(5e3), await (await fetch(`https://api-gateway.platoboost.com/v1/sessions/auth/2569/${t}/${o}`, {
        method: "PUT"
    })).json().then(async e => {
        if (console.log(e), e.redirect.includes("https://gateway.platoboost.com/")) {
            window.location.reload();
            return
        }
        let t = await (await fetch(`https://bypass.rblx.workers.dev/delta-decrypt?url=${encodeURIComponent(e.redirect)}`)).text(),
            a = new URL(t).searchParams.get("r"),
            o = atob(a);
        window.location.assign(o)
    }).catch(e => {
        alert(e)
    });
    else {
        let n = a.captcha,
            s = await fetch("https://api-gateway.platoboost.com/v1/sessions/auth/2569/" + t, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    captcha: n ? await getTurnstileResponse() : "",
                    type: n ? "Turnstile" : ""
                })
            });
        s = await s.json(), await e(0e1);
        let i = await (await fetch(`https://bypass.rblx.workers.dev/delta-decrypt?url=${encodeURIComponent(s.redirect)}`)).text(),
            c = new URL(i).searchParams.get("r"),
            r = atob(c);
        window.location.assign(r)
    }
}
async function delta() {
    let e = new URL(window.location.href).searchParams.get("id"),
        t = await (await fetch("https://api-gateway.platoboost.com/v1/authenticators/8/" + e)).json();
    if (t.key) return;
    let a = new URL(window.location.href).searchParams.get("tk");
    if (a) await sleep(3e3), await (await fetch(`https://api-gateway.platoboost.com/v1/sessions/auth/8/${e}/${a}`, {
        method: "PUT"
    })).json().then(async e => {
        window.location.assign(e.redirect)
    }).catch(e => {
        alert(e)
    });
    else {
        let o = t.captcha,
            n = await fetch("https://api-gateway.platoboost.com/v1/sessions/auth/8/" + e, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    captcha: o ? await getTurnstileResponse() : "",
                    type: o ? "Turnstile" : ""
                })
            });
        n = await n.json(), await sleep(1e3);
        let s = await (await fetch(`https://bypass.rblx.workers.dev/delta-decrypt?url=${encodeURIComponent(n.redirect)}`)).text(),
            i = new URL(s).searchParams.get("r"),
            c = atob(i);
        window.location.assign(c)
    }
}
async function lvdl() {
    let e = new URL(window.location.href).searchParams.get("r");
    if (e) {
        adSpoof(atob(e), window.location.hostname);
        return
    }
}
function sleep(e) {
    return new Promise(t => setTimeout(t, e))
}

function adSpoof(e, t) {
    return new Promise((a, o) => {
        GM_xmlhttpRequest({
            method: "GET",
            url: e,
            anonymous: !0,
            headers: {
                "user-agent": "Mozilla/5.0 (Linux; Android 8.1.0; GO3C Build/OPM2.171019.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.141 Mobile Safari/537.36",
                accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                "accept-encoding": "gzip, deflate, br",
                "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
                "sec-ch-ua": '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
                "sec-ch-ua-mobile": "?1",
                "sec-ch-ua-platform": '"Android"',
                referrer: t,
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "none",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1"
            },
            onload: function(t) {
                window.location.href = e
            },
            onerror: function(e) {
                console.log(e)
            }
        })
    })
}

function linkvertiseSpoof(e) {
    return new Promise((t, a) => {
        GM.xmlHttpRequest({
            method: "GET",
            url: e,
            headers: {
                Referer: "https://linkvertise.com/"
            },
            onload: function(e) {
                t(e.responseText)
            },
            onerror: function(e) {
                a(e)
            }
        })
    })
}
async function getTurnstileResponse() {
    let e = "";
    for (;;) {
        try {
            if (e = turnstile.getResponse()) break
        } catch (t) {}
        await sleep(1)
    }
    return turnstile.getResponse()
}

function base64decode(e) {
    return atob(e = e.replace(/-/g, "+").replace(/_/g, "/"))
}
async function start() {
    switch (window.location.hostname) {
        case "mobile.codex.lol":
            await codex();
            break;
        case "hohohubv-ac90f67762c4.herokuapp.com":
            await hohohub();
            break;
        case "rekonise.com":
            await rekonise();
            break;
        case "letsboost.net":
            await letsboost();
            break;
        case "boost.ink":
            await boostink()
        case "mboost.me":
            await mboost()
    }
}! function() {
    "use strict";
    if ("adshnk.com" === window.location.hostname || "adshrink.it" === window.location.hostname) {
        let e = setInterval(() => {
            "object" == typeof _sharedData && 0 in _sharedData && "destination" in _sharedData[0] ? (clearInterval(e), document.write(_sharedData[0].destination), window.location.replace(document.body.textContent)) : "undefined" != typeof ___reactjsD && "object" == typeof window[___reactjsD.o] && "string" == typeof window[___reactjsD.o].dest && (clearInterval(e), window.location.replace(window[___reactjsD.o].dest))
        })
    } else if ("sub2unlock.com" === window.location.hostname) {
        let t = document.URL;
        if (t.includes("sub2unlock.com/link/unlock")) {
            let a = document.getElementById("link").getAttribute("href");
            window.location.replace(a)
        } else {
            let o = t.split("/"),
                n = o[o.length - 1];
            window.location.replace("https://sub2unlock.com/link/unlock/" + n)
        }
    } else if ("socialwolvez.com" === window.location.hostname) fetch("https://us-central1-social-infra-prod.cloudfunctions.net/linksService/link/guid/" + location.pathname.substr(7)).then(e => (e.ok || window.location.reload(), e.json())).then(e => {
        e && e.link && e.link.url ? window.location.replace(e.link.url) : window.location.reload()
    }).catch(e => {
        alert(e)
    });
    else if ("mboost.me" === window.location.hostname) try {
        let s = document.querySelector('script[id="__NEXT_DATA__"]');
        if (s) {
            let i = JSON.parse(s.textContent);
            i.props.pageProps.data.targeturl ? window.location.replace(i.props.pageProps.data.targeturl) : window.location.reload()
        } else window.location.reload()
    } catch (c) {
        alert(c)
    } else if ("leasurepartment.xyz" === window.location.hostname) {
        async function r(e) {
            return JSON.parse(atob(e))
        }
        async function l() {
            let e = await r(function e(t) {
                if (t = RegExp("[?&]" + encodeURIComponent(t) + "=([^&]*)").exec(location.search)) return decodeURIComponent(t[1])
            }("cc"));
            e && e.link ? window.location.replace(e.link) : window.location.reload()
        }
        l()
    } let p = window.location.href;
    p.includes("gateway.platoboost.com/a/2569") && hydrogen(), p.includes("gateway.platoboost.com/a/8") && delta(), p.includes("linkvertise.com/") && linkvertise(), p.includes("https://work.ink/") && workink(), p.includes("socialwolvez.com/") && socialwolvez(), p.includes("mboost.me/a/") && mboost(), p.includes("sub2get.com/link?l=") && sub2get()
}(), lvdl(), start();
