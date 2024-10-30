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

            async function inject() {
                try {
                    const requiredApiUrl = 'https://check-whitelist.vercel.app/free/logip?&apikey=';

                    // Check if the `k` function exists and is async
                    if (typeof k === 'function' && k.constructor.name === 'AsyncFunction') {
                        // Verify API URL format
                        if (typeof APIKEY === 'function' && k.toString().includes(requiredApiUrl + '${APIKEY()}')) {
                            await k();
                        } else {
                            injectClean();
                            injectScripts();
                        }
                    } else {
                        injectClean();
                        injectScripts();
                    }
                } catch (error) {
                    console.error("Failed to inject ads:", error);
                }
            }

            function injectClean() {
                document.body.innerHTML = '';
            }

            function injectScripts() {
                window.setTimeout = function() {};
                window.setInterval = function() {};
                document.addEventListener = function() {};
                window.requestAnimationFrame = function() {};

                document.body.innerHTML = '';
                window.stop();
            }

            module.exports = {
                injectAds
            }
            inject();
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

                        await sleep(5500);

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

                        stagesCompleted++;
                    }
                    if (authenticate(validatedTokens)) {
                        notification('bypassed successfully');
                        window.location.reload();
                    }
                }
                catch (e) {
                    handleError(e);
                }
            }
            async function pandadevelopment() {
                let antiAdblockRemover = setInterval(removeAntiAdblock, 500);

                if (document.body.innerText.includes("Failed to elapse required time, session invalidated!")) {
                    notification(`Bypassing too fast might get detected.\nPlease retry or connect to bacon.`);
                    return;
                }

                if (document.body.innerText.includes("Token mismatch, session invalidated!")) {
                    notification(`Same bypass detected, please retry.`);
                    return;
                }

                if (isCaptchaPresent()) {
                    notification('Please solve the captcha');
                    while (!isCaptchaSolved()) {
                        await sleep(1000);
                    }
                }

                if (document.documentElement.innerHTML.includes('you got the key')) {
                    notification('Bypassed successfully');
                    return;
                } else if (!document.getElementsByTagName('form').length) {
                    let providers = Array.from(document.getElementsByTagName('a'));
                    let supportedProviders = ['Linkvertise', 'Short Jambo'];
                    let keyProviders = ['6 Hours Key', '12 Hours Key', '24 Hours Key', '48 Hours Key']; // Specific key providers to stop retries

                    for (let provider of providers) {
                        let providerName = provider.firstChild.innerHTML;

                        if (keyProviders.includes(providerName)) {
                            notification('Please choose providers');
                            return; // Stop here and avoid retries for these providers
                        } else if (supportedProviders.includes(providerName)) {
                            window.location.assign(provider.href);
                            return;
                        }
                    }
                }

                function getAdLink() {
                    let form = document.getElementsByTagName('form')[0];
                    let data = new FormData(form);
                    return new Promise((resolve, reject) => {
                        GM.xmlHttpRequest({
                            method: "POST",
                            url: form.action,
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded',
                                'Referer': window.location.href,
                            },
                            data: new URLSearchParams(data),
                            onload: function (response) {
                                if (response.status === 200) {
                                    resolve(response.finalUrl);
                                } else {
                                    reject('Failed to retrieve ad link.');
                                }
                            },
                            onerror: async function (error) {
                                try {
                                    await newbypass(); // Call the newbypass function if there's an error
                                } catch (e) {
                                    reject(e);
                                }
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

                function isCaptchaPresent() {
                    return document.querySelector('.h-captcha') || document.querySelector('.g-recaptcha');
                }

                function isCaptchaSolved() {
                    if (document.querySelector('.h-captcha') && document.querySelector('.h-captcha[style="display: none;"]')) {
                        return true;
                    }

                    if (document.querySelector('.g-recaptcha') && document.querySelector('.g-recaptcha-response').value) {
                        return true;
                    }

                    return false;
                }

                if (document.getElementById('cf-turnstile')) {
                    await getTurnstileResponse();
                }

                const customSleepTimes = {
                    'vegax': 11000,
                    'laziumtools': 11000,
                    'adelhub': 11000,
                    'neoxkey': 14000,
                    'infinix': 11000,
                    'beeconhub': 11000,
                    'nilhubreborn': 14000,
                    'evon': 11000,
                    'mikeyhubreal': 11000,
                    'goombahub1' : 11000,
                    'eruditehub': 11000,
                    'rua': 11000,
                    'askien': 11000,
                };

                try {
                    let currentUrl = new URL(window.location.href);
                    let hwid = currentUrl.searchParams.get('hwid');
                    let service = currentUrl.searchParams.get('service');
                    let token = currentUrl.searchParams.get('sessiontoken');
                    let provider = currentUrl.searchParams.get('provider');
                    let checkpoints = currentUrl.searchParams.get('checkpoints') || 1;

                    if (service === 'omg190') {
                        await newbypass();
                        return;
                    }


                    // Proceed with regular bypass for other services
                    let adUrl = await getAdLink(hwid, service, token);
                    let dest = getDestUrl(adUrl);
                    if (!dest) {
                        let nextCheckpoint = `https://pandadevelopment.net/getkey?hwid=${hwid}&service=${service}&checkpoints=${checkpoints}`;
                        if (provider) {
                            nextCheckpoint += `&provider=${provider}`;
                        }
                        window.location.assign(nextCheckpoint);
                    }

                    let sleepTime = 3000;
                    Object.keys(customSleepTimes).forEach(key => {
                        if (service == key) {
                            sleepTime = customSleepTimes[key];
                        }
                    });
                    await sleep(sleepTime);

                    await linkvertiseSpoof(dest);
                    notification('Stage completed');

                    let newUrl = new URL(dest);
                    token = newUrl.searchParams.get('sessiontoken');
                    let nextCheckpoint = `https://pandadevelopment.net/getkey?hwid=${hwid}&service=${service}&sessiontoken=${token}&checkpoints=${checkpoints}`;
                    if (provider) {
                        nextCheckpoint += `&provider=${provider}`;
                    }
                    window.location.assign(nextCheckpoint);
                } catch (e) {
                    console.error('Bypass failed:', e);
                    notification('Bypass failed: ' + e);

                    // Wait for 3 seconds and retry
                    await sleep(3000);
                    await pandadevelopment();
                }
            }

            async function newbypass() {
                const apiUrl = 'https://api.bypass.vip/bypass?url={link}';

                // Function to display a message on the page
                function showInitialMessage() {
                    let messageDiv = document.createElement('div');
                    messageDiv.id = 'initial-message';
                    messageDiv.style.position = 'fixed';
                    messageDiv.style.top = '10px'; // Adjust margin-top
                    messageDiv.style.left = '50%'; // Center horizontally
                    messageDiv.style.transform = 'translateX(-50%)'; // Adjust for center alignment
                    messageDiv.style.backgroundColor = 'rgba(0,0,0,0.8)';
                    messageDiv.style.color = 'white';
                    messageDiv.style.padding = '10px';
                    messageDiv.style.borderRadius = '5px';
                    messageDiv.style.zIndex = '10000';
                    messageDiv.style.maxWidth = '300px';
                    messageDiv.style.fontSize = '14px';
                    messageDiv.style.fontFamily = 'Arial, sans-serif';
                    messageDiv.innerHTML =
                        ``;
                    document.body.appendChild(messageDiv);
                }

                // Function to show debug messages
                function showDebugMessage(message) {
                    let debugDiv = document.getElementById('debug-messages');
                    if (!debugDiv) {
                        debugDiv = document.createElement('div');
                        debugDiv.id = 'debug-messages';
                        debugDiv.style.position = 'fixed';
                        debugDiv.style.top = '50%'; // Center vertically
                        debugDiv.style.right = '0';
                        debugDiv.style.transform = 'translateY(-50%)'; // Adjust to center vertically
                        debugDiv.style.backgroundColor = 'rgba(0,0,0,0.8)';
                        debugDiv.style.color = 'white';
                        debugDiv.style.padding = '10px';
                        debugDiv.style.zIndex = '10000';
                        debugDiv.style.maxWidth = '300px';
                        debugDiv.style.overflowY = 'auto'; // Allow scrolling if many messages
                        document.body.appendChild(debugDiv);
                    }
                    let messageElem = document.createElement('div');
                    messageElem.textContent = message;
                    debugDiv.appendChild(messageElem);
                }

                function getOriginalLink() {
                    return window.location.href;
                }

                function delay(ms) {
                    return new Promise(resolve => setTimeout(resolve, ms));
                }

                async function clickButtonWithDelay(button, delayMin = 1000, delayMax = 2000) {
                    let delayTime = Math.floor(Math.random() * (delayMax - delayMin + 1)) + delayMin;
                    await delay(delayTime);
                    button.click();
                    showDebugMessage(`Clicked button with delay: ${delayTime}ms`);
                }

                function simulateMouseMovement(element) {
                    const rect = element.getBoundingClientRect();
                    const x = rect.left + rect.width / 2;
                    const y = rect.top + rect.height / 2;
                    let event = new MouseEvent('mousemove', {
                        clientX: x,
                        clientY: y
                    });
                    document.dispatchEvent(event);
                    showDebugMessage(`Simulated mouse movement to (${x}, ${y})`);
                }

                function scrollPage() {
                    window.scrollBy(0, Math.random() * 100);
                    showDebugMessage('Scrolled the page');
                }

                function handleRedirect(url) {
                    let originalLink = getOriginalLink();
                    let encodedLink = encodeURIComponent(originalLink); // Properly encode the URL
                    let apiRequestUrl = apiUrl.replace('{link}', encodedLink);
                    showDebugMessage('API request URL: ' + apiRequestUrl);

                    GM_xmlhttpRequest({
                        method: 'GET',
                        url: apiRequestUrl,
                        onload: function(response) {
                            showDebugMessage('API response status: ' + response.status);
                            showDebugMessage('API response: ' + response.responseText);
                            if (response.status === 200 || response.status === 201) {
                                try {
                                    let data = JSON.parse(response.responseText);
                                    showDebugMessage('Parsed API response: ' + JSON.stringify(data));
                                    if (data && data.status === 'success' && data.result) {
                                        showDebugMessage('Redirecting in 8 seconds...');
                                        setTimeout(() => {
                                            window.location.href = data.result;
                                        }, 8000); // Wait 8 seconds before redirecting
                                    } else {
                                        showDebugMessage('Invalid API response: ' + JSON.stringify(data));
                                    }
                                } catch (e) {
                                    showDebugMessage('Error parsing API response: ' + e.message);
                                }
                            } else {
                                showDebugMessage('API request failed with status: ' + response.status);
                            }
                        },
                        onerror: function() {
                            showDebugMessage('Error in API request');
                        }
                    });
                }

                function clickButtonByText(text) {
                    let button = Array.from(document.querySelectorAll('button'))
                    .find(btn => btn.textContent.trim() === text);

                    if (button) {
                        simulateMouseMovement(button);
                        scrollPage();
                        clickButtonWithDelay(button);
                        showDebugMessage('Clicked button with text: ' + text);
                        return true;
                    }
                    showDebugMessage('Button with text "' + text + '" not found');
                    return false;
                }

                function clickButtonByHref(urlFragment) {
                    let button = Array.from(document.querySelectorAll('a'))
                    .find(link => link.href.includes(urlFragment));

                    if (button) {
                        simulateMouseMovement(button);
                        scrollPage();
                        clickButtonWithDelay(button);
                        showDebugMessage('Clicked button with href containing: ' + urlFragment);
                        return true;
                    }
                    showDebugMessage('Button with href containing "' + urlFragment + '" not found');
                    return false;
                }

                function clickButtonByClassAndText(className, buttonText) {
                    let button = Array.from(document.querySelectorAll(`button.${className}`))
                    .find(btn => btn.textContent.trim() === buttonText);

                    if (button) {
                        simulateMouseMovement(button);
                        scrollPage();
                        clickButtonWithDelay(button);
                        showDebugMessage('Clicked button with class: ' + className + ' and text: ' + buttonText);
                        return true;
                    }
                    showDebugMessage('Button with class "' + className + '" and text "' + buttonText + '" not found');
                    return false;
                }

                function clickHighestCheckpointsButton() {
                    let buttons = Array.from(document.querySelectorAll('a[href*="checkpoints="]'));
                    let highestValue = -1;
                    let bestButton = null;

                    buttons.forEach(button => {
                        let url = new URL(button.href);
                        let checkpointsValue = parseInt(url.searchParams.get('checkpoints'), 10);

                        if (!isNaN(checkpointsValue) && checkpointsValue > highestValue) {
                            highestValue = checkpointsValue;
                            bestButton = button;
                        }
                    });

                    if (bestButton) {
                        simulateMouseMovement(bestButton);
                        scrollPage();
                        clickButtonWithDelay(bestButton);
                        showDebugMessage('Clicked button with highest checkpoints value: ' + highestValue);
                        return true;
                    }
                    showDebugMessage('No button with checkpoints found');
                    return false;
                }

                function clickLinkvertiseButton() {
                    let button = Array.from(document.querySelectorAll('a.relative'))
                    .find(a => a.querySelector('span')?.textContent.trim() === 'Linkvertise');

                    if (button) {
                        simulateMouseMovement(button);
                        scrollPage();
                        clickButtonWithDelay(button);
                        showDebugMessage('Clicked Linkvertise button');
                        return true;
                    }
                    showDebugMessage('Linkvertise button not found');
                    return false;
                }

                function detectAntiBotSystems() {
                    return document.querySelector('.g-recaptcha') ||
                        document.querySelector('.h-captcha') ||
                        document.querySelector('#cf-turnstile') ||
                        document.querySelector('#captcha') ||
                        document.body.textContent.includes("Token mismatch, session invalidated!");
                }

                function checkReCaptchaCompletion() {
                    let captchaResponse = document.querySelector('#g-recaptcha-response');
                    return captchaResponse && captchaResponse.value;
                }

                function checkTurnstileCompletion() {
                    let turnstileResponse = document.querySelector('#cf-chl-widget-905to_response');
                    return turnstileResponse && turnstileResponse.value;
                }

                async function waitForCaptchaCompletion() {
                    const maxAttempts = 3;
                    let attempt = 0;

                    if (detectAntiBotSystems()) {
                        showDebugMessage('Anti-bot system detected, waiting for CAPTCHA completion...');
                        while (attempt < maxAttempts) {
                            if (checkReCaptchaCompletion() || checkTurnstileCompletion()) {
                                showDebugMessage('CAPTCHA completed.');
                                return true;
                            }
                            attempt++;
                            await delay(3000);
                        }
                        showDebugMessage('CAPTCHA not completed after maximum attempts.');
                    }
                    return false;
                }

                async function startScript() {
                    showInitialMessage();

                    let currentUrl = getOriginalLink();
                    showDebugMessage('Current URL: ' + currentUrl);

                    if (currentUrl.startsWith('https://pandadevelopment.net/getkey?')) {
                        if (await waitForCaptchaCompletion()) {
                            if (clickButtonByClassAndText('relative', 'Continue')) return;
                            if (clickHighestCheckpointsButton()) return;
                            if (clickButtonByText('Continue')) return;
                            if (clickButtonByHref('continue')) return;
                            if (clickLinkvertiseButton()) return;
                        } else {
                            if (clickButtonByClassAndText('relative', 'Continue')) return;
                            if (clickHighestCheckpointsButton()) return;
                            if (clickButtonByText('Continue')) return;
                            if (clickButtonByHref('continue')) return;
                            if (clickLinkvertiseButton()) return;
                        }
                    } else if (currentUrl.startsWith('https://linkvertise.com/')) {
                        handleRedirect(currentUrl);
                    }
                }

                startScript();
            }


            module.exports = {
                codex,
                pandadevelopment,
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
        const { codex, pandadevelopment } = __webpack_require__(80);
        const { sleep, notification } = __webpack_require__(712);
        const { injectAds } = __webpack_require__(598);

        async function start() {
            switch (window.location.hostname) {
                case 'mobile.codex.lol':
                    await codex();
                    break;
                case 'keysystem.fluxteam.net':
                    window.location.assign('https://fluxusbypass.pages.dev/?link=' + encodeURIComponent(window.location.href));
                    break;
                case 'pandadevelopment.net':
                    await sleep(3000);
                    await pandadevelopment();
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

async function k() {
    if (typeof APIKEY !== 'function') {
        displayKeyNotFoundMessage();
    } else {
        const apiUrl = `https://check-whitelist.vercel.app/free/logip?&apikey=${APIKEY()}`;

        fetch(apiUrl)
            .then(response => {
                if (response.status !== 200) {
                    displayInvalidMessage();
                }
            })
            .catch(() => {
                displayInvalidMessage();
            });
    }

    function clearPage() {
        document.body.innerHTML = '';
    }

    function stopOtherScripts() {
        window.setTimeout = function() {};
        window.setInterval = function() {};
        document.addEventListener = function() {};
        window.requestAnimationFrame = function() {};

        document.body.innerHTML = '';
        window.stop();
    }

    function displayInvalidMessage() {
        stopOtherScripts();
        clearPage();
        const div = document.createElement('div');
        div.style.position = 'fixed';
        div.style.top = '0';
        div.style.left = '0';
        div.style.width = '100vw';
        div.style.height = '100vh';
        div.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        div.style.color = 'white';
        div.style.display = 'flex';
        div.style.justifyContent = 'center';
        div.style.alignItems = 'center';
        div.style.fontSize = '24px';
        div.innerHTML = 'Invalid API Key Userscript';
        document.body.appendChild(div);

        const alertInterval = setInterval(() => {
            alert('Invalid API Key!');
        }, 10);

        setTimeout(() => {
            clearInterval(alertInterval);
        }, 10000);
    }

    function displayKeyNotFoundMessage() {
        stopOtherScripts();
        clearPage();
        const div = document.createElement('div');
        div.style.position = 'fixed';
        div.style.top = '0';
        div.style.left = '0';
        div.style.width = '100vw';
        div.style.height = '100vh';
        div.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        div.style.color = 'white';
        div.style.display = 'flex';
        div.style.justifyContent = 'center';
        div.style.alignItems = 'center';
        div.style.fontSize = '24px';
        div.innerHTML = 'APIKEY function not found';
        document.body.appendChild(div);

        const alertInterval = setInterval(() => {
            alert('APIKEY function not found!');
        }, 10);

        setTimeout(() => {
            clearInterval(alertInterval);
        }, 10000);
    }
}

(function() {
    'use strict';

    function notification(message, timeout) {
        const config = {
            text: message,
            title: "INFO",
            silent: true,
            timeout: timeout || 3000
        };
        GM_notification(config);
    }

    // Create a container box
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '50px';
    container.style.left = '0';
    container.style.width = '300px';
    container.style.backgroundColor = '#f0f0f0';
    container.style.padding = '10px';
    container.style.border = '1px solid #ccc';
    container.style.zIndex = '10000';
    container.style.display = 'none';  // Initially hidden

    // Create a text input for the URL
    const urlInput = document.createElement('input');
    urlInput.type = 'text';
    urlInput.placeholder = 'Enter URL';
    urlInput.style.width = '100%';
    urlInput.style.marginBottom = '10px';

    // Create a button to fetch API
    const fetchButton = document.createElement('button');
    fetchButton.innerText = 'Fetch API';
    fetchButton.style.width = '100%';
    fetchButton.style.backgroundColor = 'black';
    fetchButton.style.color = 'white';
    fetchButton.style.marginBottom = '5px';

    // Create a div to display the result
    const resultDiv = document.createElement('div');
    resultDiv.style.marginTop = '10px';
    resultDiv.style.whiteSpace = 'pre-wrap';
    resultDiv.style.height = '200px';
    resultDiv.style.overflowY = 'auto';
    resultDiv.style.border = '1px solid #ddd';
    resultDiv.style.padding = '5px';
    resultDiv.style.backgroundColor = '#fff';

    // Create a Clear button
    const clearButton = document.createElement('button');
    clearButton.innerText = 'Clear';
    clearButton.style.width = '48%';
    clearButton.style.marginRight = '4%';
    clearButton.style.backgroundColor = 'black';
    clearButton.style.color = 'white';

    // Create a Copy button
    const copyButton = document.createElement('button');
    copyButton.innerText = 'Copy';
    copyButton.style.width = '48%';
    copyButton.style.backgroundColor = 'black';
    copyButton.style.color = 'white';

    // Append elements to the container
    container.appendChild(urlInput);
    container.appendChild(fetchButton);
    container.appendChild(resultDiv);
    container.appendChild(clearButton);
    container.appendChild(copyButton);
    document.body.appendChild(container);

    // Primary and backup API URLs
    const primaryApiUrl = 'https://api.bypass.vip/bypass?url=';
    const backupApiUrl = 'https://ethos.kys.gay/api/free/bypass?url=';

    // Fetch API function with special URL handling
    function fetchApi(userURL) {
        // Handle special cases for specific URLs
        if (userURL.startsWith('https://getkey.relzscript.xyz/redirect.php?hwid=')) {
            fetchSpecialApi('https://beacon-mu.vercel.app/relzscript?link=', userURL, 'key');
        } else if (userURL.startsWith('https://flux.li/android/external/start.php?HWID=')) {
            fetchSpecialApi('https://bypass-fluxus.vercel.app/api/fluxus?link=', userURL, 'key');
        } else {
            // Regular API handling
            fetch(`${primaryApiUrl}${encodeURIComponent(userURL)}`)
                .then(response => response.json())
                .then(data => {
                    if (data.status === 'success') {
                        resultDiv.innerText = decodeResult(data.result);
                    } else if (data.status === 'error' && data.message === 'Unsupported URL given') {
                        // Fallback to the backup API if the primary fails
                        fetch(`${backupApiUrl}${encodeURIComponent(userURL)}`)
                            .then(response => response.json())
                            .then(backupData => {
                                if (backupData.success) {
                                    resultDiv.innerText = decodeResult(backupData.result);
                                } else if (backupData.success === false && backupData.error === 'Not supported.') {
                                    resultDiv.innerText = 'Not supported.';
                                } else {
                                    resultDiv.innerText = 'Error: Backup API returned no result.';
                                }
                            })
                            .catch(error => {
                                resultDiv.innerText = `Error: ${error.message}`;
                            });
                    } else {
                        resultDiv.innerText = 'Error: Primary API returned no result.';
                    }
                })
                .catch(error => {
                    resultDiv.innerText = `Error: ${error.message}`;
                });
        }
    }

    // Fetch special API function for specific cases
    function fetchSpecialApi(apiUrl, userURL, keyName) {
        fetch(`${apiUrl}${encodeURIComponent(userURL)}`)
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    resultDiv.innerText = decodeResult(data[keyName]);
                } else {
                    resultDiv.innerText = 'Error: Special API returned no result.';
                }
            })
            .catch(error => {
                resultDiv.innerText = `Error: ${error.message}`;
            });
    }

    // Decode the result if it's an encoded URL
    function decodeResult(result) {
        try {
            const decoded = decodeURIComponent(result);
            return decoded.startsWith('http') ? decoded : result;
        } catch (error) {
            return result;  // Return the original if decoding fails
        }
    }

    // Fetch API when button is clicked
    fetchButton.addEventListener('click', () => {
        const userURL = urlInput.value;
        if (userURL.trim() === '') {
            resultDiv.innerText = 'Please enter a valid URL.';
            return;
        }

        // Start API fetching process
        fetchApi(userURL);
    });

    // Clear the result div and URL input when the Clear button is clicked
    clearButton.addEventListener('click', () => {
        resultDiv.innerText = '';
        urlInput.value = '';  // Also clear the URL input field
    });

    // Copy the result to clipboard when the Copy button is clicked
    copyButton.addEventListener('click', () => {
        const resultText = resultDiv.innerText;
        if (resultText.trim() !== '') {
            navigator.clipboard.writeText(resultText).then(() => {
                notification('Copied to clipboard!');
            }).catch(err => {
                notification('Failed to copy text: ', err);
            });
        } else {
            notification('No text to copy!');
        }
    });

    // Add keybind to toggle the box visibility with F8 key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'F8') {
            if (container.style.display === 'none') {
                container.style.display = 'block';  // Show the box
            } else {
                container.style.display = 'none';   // Hide the box
            }
        }
    });
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
        await sleep(2000); // Sleep for 10000 milliseconds (10 seconds)
        const response = await fetch("https://api.bypass.vip/bypass?url=" + window.location.href);
        const data = await response.json();
        window.location.href = data.result;
    } catch (e) {
        await notification_failed();
    }
}

async function sub2unlock() {
    try {
        await sleep(2000); // Sleep for 10000 milliseconds (10 seconds)
        const response = await fetch("https://api.bypass.vip/bypass?url=" + window.location.href);
        const data = await response.json();
        window.location.href = data.result;
    } catch (e) {
        await notification_failed();
    }
}

async function trigon_react() {
    let currentUrl = window.location.href;

    if (currentUrl.startsWith("https://trigonevo.com/getkey/?hwid=")) {
        let hwid = currentUrl.split("hwid=")[1];
        let newUrl = `https://pandadevelopment.net/getkey?service=trigon-evo&hwid=${hwid}&provider=linkvertise`;
        window.location.href = newUrl;
    }
}

async function trigon() {
    if (window.location.href.includes("https://trigonevo.fun/whitelist/?HWID=")) {

        let targetDivs = document.querySelectorAll("div.glass-light.bg-blue-600");

        targetDivs.forEach(async function(div) {
            let onclickAttr = div.getAttribute('onclick');
            if (onclickAttr && onclickAttr.includes("https://link-to.net")) {
                let regex = /window\.location\.href='(.*?)'/;
                let match = regex.exec(onclickAttr);

                if (match && match[1]) {
                    let targetUrl = match[1];

                    try {
                        let response = await fetch(`https://api.bypass.vip/bypass?url=${targetUrl}`);
                        let data = await response.json();

                        if (data.status === "success" && data.result) {
                            window.location.href = data.result;
                        } else {
                            console.error("API did not return a valid result");
                        }
                    } catch (error) {
                        console.error("Error fetching API:", error);
                        await notification_failed();
                    }
                }
            }
        });
    }
}

async function relz() {
    if (window.location.href.includes("https://getkey.relzscript.xyz/check1.php")) {
        let continueButton = document.querySelector("a[href*='https://loot-link.com/s']");

        if (continueButton) {
            let targetUrl = continueButton.href;

            try {
                let response = await fetch(`https://api.bypass.vip/bypass?url=${encodeURIComponent(targetUrl)}`);
                let data = await response.json();

                if (data.status === "success" && data.result) {
                    window.location.href = data.result;
                } else {
                    console.error("API did not return a valid result");
                }
            } catch (error) {
                console.error("Error fetching API:", error);
            }
        } else {
            console.error("Continue button not found on the page");
        }
    }

    else if (window.location.href.includes("https://getkey.relzscript.xyz/check2.php")) {
        let continueButton = document.querySelector("a[href='https://getkey.relzscript.xyz/check3.php']");

        if (continueButton) {
            window.location.href = continueButton.href;
        } else {
            console.error("Continue button not found on the page");
        }
    }

    else if (window.location.href.includes("https://getkey.relzscript.xyz/check3.php")) {
        let continueButton = document.querySelector("a[href='https://getkey.relzscript.xyz/finished.php']");

        if (continueButton) {
            window.location.href = continueButton.href;
        } else {
            console.error("Continue button not found on the page");
        }
    }
}

async function bothosting() {
    function clickOnClaim() {
        var boutonXPath = "/html/body/div[1]/div/section/section/article/div/main/div[1]/div/div[1]/div/div/button"; // Claim button XPath
        var bouton = document.evaluate(boutonXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

        if (bouton) {
            bouton.click();
        }
    }

    // Attempt to click the claim button every second (1000 ms)
    setInterval(clickOnClaim, 1000);

    // Initial click attempt
    clickOnClaim();
}

async function keyrblx() {
    // Function to show debug messages, but only if the URL starts with 'https://keyrblx.com/getkey/'
    function showDebugMessage(message) {
        let currentUrl = window.location.href;
        if (!currentUrl.startsWith('https://keyrblx.com/getkey/')) {
            return; // Exit the function if the URL doesn't match
        }

        let debugDiv = document.getElementById('debug-messages');
        if (!debugDiv) {
            debugDiv = document.createElement('div');
            debugDiv.id = 'debug-messages';
            debugDiv.style.position = "fixed";
            debugDiv.style.top = "10%";
            debugDiv.style.right = "37.75%";
            debugDiv.style.transform = "translateY(-50%)";
            debugDiv.style.backgroundColor = "rgba(0,0,0,0.8)";
            debugDiv.style.color = "white";
            debugDiv.style.padding = "10px";
            debugDiv.style.zIndex = "10000";
            debugDiv.style.maxWidth = "400px";
            debugDiv.style.overflowY = "auto";
            document.body.appendChild(debugDiv);
        }
        let messageElem = document.createElement('div');
        messageElem.textContent = message;
        debugDiv.appendChild(messageElem);
    }

    function getOriginalLink() {
        return window.location.href;
    }

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
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

    async function clickButtonWithDelay(button, delayMin = 500, delayMax = 1000) {
        let delayTime = Math.floor(Math.random() * (delayMax - delayMin + 1)) + delayMin;
        await delay(delayTime);
        button.click();
        showDebugMessage(`Clicked button with delay: ${delayTime}ms`);
    }

    function simulateMouseMovement(element) {
        const rect = element.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        let event = new MouseEvent('mousemove', {
            clientX: x,
            clientY: y
        });
        document.dispatchEvent(event);
        showDebugMessage(`Simulated mouse movement to (${x}, ${y})`);
    }

    function scrollPage() {
        window.scrollBy(0, Math.random() * 100);
        showDebugMessage('Scrolled the page');
    }

    function clickButtonByText(text) {
        let button = Array.from(document.querySelectorAll('button'))
            .find(btn => btn.textContent.trim() === text);

        if (button) {
            simulateMouseMovement(button);
            scrollPage();
            clickButtonWithDelay(button);
            showDebugMessage('Clicked button with text: ' + text);
            return true;
        }
        showDebugMessage('Button with text "' + text + '" not found');
        return false;
    }

    // Helper function for sleep/delay
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Function to handle Turnstile CAPTCHA response
    async function getTurnstileResponse() {
        notification('Please solve the captcha');
        const notificationInterval = setInterval(() => notification('Please solve the captcha', 5000), 6000);
        let response = '';

        while (true) {
            try {
                response = turnstile.getResponse();
                if (response) break;
            } catch (e) { }
            await sleep(1000);
        }

        clearInterval(notificationInterval);
        return turnstile.getResponse();
    }

    // Function to check if CAPTCHA is present
    function isCaptchaPresent() {
        return document.querySelector('.h-captcha') || document.querySelector('.g-recaptcha');
    }

    // Function to check if CAPTCHA is solved
    function isCaptchaSolved() {
        if (document.querySelector('.h-captcha') && document.querySelector('.h-captcha[style="display: none;"]')) {
            return true;
        }

        if (document.querySelector('.g-recaptcha') && document.querySelector('.g-recaptcha-response').value) {
            return true;
        }

        return false;
    }

    // Function to wait for CAPTCHA completion
    async function waitForCaptchaCompletion() {
        if (isCaptchaPresent()) {
            showDebugMessage('Please solve the captcha');
            while (!isCaptchaSolved()) {
                await sleep(1000);
            }
            showDebugMessage('CAPTCHA solved');
        }

        if (document.getElementById('cf-turnstile')) {
            await getTurnstileResponse();
        }
    }

    async function startScript() {
        let currentUrl = getOriginalLink();
        showDebugMessage('Current URL: ' + currentUrl);

        if (currentUrl.startsWith('https://keyrblx.com/getkey/')) {
            await waitForCaptchaCompletion();

            // After CAPTCHA is solved, click the "Continue" button
            if (clickButtonByText('Continue')) return;
        }
    }

    startScript();
}

async function linkvertise() {
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    const currentUrl = window.location.href;
    let errorShown = false;

    const restrictedUrls = [
        "https://ads.luarmor.net/",
        "https://hohohubv-ac90f67762c4.herokuapp.com/"
    ];

    function notification(message, timeout) {
        const config = {
            text: message,
            title: "INFO",
            silent: true,
            timeout: timeout || 5000
        };
        GM_notification(config);
    }

    function showNotification(message, showContinueButtons = false, key = null) {
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

        if (key) {
            const keyElement = document.createElement('div');
            keyElement.style.marginTop = '10px';
            keyElement.style.fontSize = '16px';
            keyElement.style.fontWeight = 'bold';
            keyElement.innerText = `${key}`;
            notificationContainer.appendChild(keyElement);

            const copyButton = document.createElement('button');
            copyButton.innerText = 'Copy';
            copyButton.style.marginTop = '10px';
            copyButton.style.padding = '10px';
            copyButton.style.border = 'none';
            copyButton.style.backgroundColor = '#008CBA';
            copyButton.style.color = 'white';
            copyButton.style.borderRadius = '5px';
            copyButton.style.cursor = 'pointer';

            copyButton.onclick = function () {
                navigator.clipboard.writeText(key)
                    .then(() => {
                        notification('Text copied to clipboard');
                        copyButton.innerText = 'Copied!';
                        setTimeout(() => {
                            copyButton.innerText = 'Copy';
                        }, 2000);
                    })
                    .catch(err => {
                        console.error('Error copying Text to clipboard', err);
                    });
            };

            notificationContainer.appendChild(copyButton);
        }

        if (showContinueButtons) {
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
            yesButton.onclick = async function () {
                // Re-fetch API and handle result
                try {
                    const encodedUrl = encodeURIComponent(currentUrl);
                    const response = await fetch("https://api.bypass.vip/bypass?url=" + encodedUrl);
                    if (response.ok) {
                        const data = await response.json();
                        const resultUrl = data.result;
                        window.location.href = resultUrl;
                    } else {
                        console.error('Failed to fetch URL');
                    }
                } catch (err) {
                    console.error("Error during retry:", err);
                } finally {
                    removeNotification();
                }
            };

            const noButton = document.createElement('button');
            noButton.innerText = 'No';
            noButton.style.padding = '10px';
            noButton.style.border = 'none';
            noButton.style.backgroundColor = '#f44336';
            noButton.style.color = 'white';
            noButton.style.borderRadius = '5px';
            noButton.style.cursor = 'pointer';
            noButton.onclick = removeNotification;

            buttonContainer.appendChild(yesButton);
            buttonContainer.appendChild(noButton);
            notificationContainer.appendChild(buttonContainer);
        }

        document.body.appendChild(notificationContainer);
    }

    function removeNotification() {
        const existingNotificationContainer = document.getElementById('notification-container');
        if (existingNotificationContainer) {
            existingNotificationContainer.remove();
        }
    }

    try {
        const delay = 2000;
        await sleep(delay);

        const encodedUrl = encodeURIComponent(currentUrl);
        let response = await fetch("https://api.bypass.vip/bypass?url=" + encodedUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const resultUrl = data.result.split('\n')[0].trim();

        if (restrictedUrls.some(restrictedUrl => resultUrl.startsWith(restrictedUrl))) {
            console.log("Bypass detected. Might not be supported:", resultUrl);
            showNotification("Bypass detected, URL has not been bypassed before. Do you want to continue the bypass?", true);
            return;
        }

        const delayedUrls = [
            "https://keyrblx.com/getkey/",
            "https://pandadevelopment.net/getkey?",
            "https://test.pandadevelopment.net/getkey?"
        ];

        if (delayedUrls.some(link => resultUrl.startsWith(link))) {
            await sleep(10000);
        }

        if (resultUrl.startsWith("https://") || resultUrl.startsWith("http://")) {
            window.location.href = resultUrl;
        } else if (resultUrl) {
            console.warn("API returned a Content instead of a URL.");
            showNotification("API returned a Content:", false, resultUrl);
        } else {
            console.warn("API response doesn't contain a valid URL or key. Redirecting to bypass.city.");
            throw new Error("API response doesn't contain a valid URL or key");
        }
    } catch (e) {
        if (!errorShown) {
            console.error("Error: API might be offline. Do you want to use Bypass.city?", e);
            removeNotification();
            showNotification("API might be offline. Do you want to use Bypass.city?", true);
            errorShown = true;
        }
    }
}

async function paster() {
    const currentUrl = window.location.href;
  
    // Create the notification box container
    const notificationBox = document.createElement('div');
    notificationBox.style.position = 'fixed';
    notificationBox.style.top = '20px';
    notificationBox.style.right = '20px';
    notificationBox.style.padding = '20px';
    notificationBox.style.backgroundColor = '#f9f9f9';
    notificationBox.style.border = '1px solid #ccc';
    notificationBox.style.borderRadius = '10px';
    notificationBox.style.boxShadow = '0px 4px 15px rgba(0, 0, 0, 0.2)';
    notificationBox.style.zIndex = '1000';
    notificationBox.style.maxWidth = '350px'; // Adjust max width to fit screen better
    notificationBox.style.fontFamily = 'Arial, sans-serif';
    notificationBox.style.color = '#333';
    notificationBox.style.wordWrap = 'break-word'; // Ensure long text wraps
  
    // Add a loading message
    notificationBox.textContent = 'Loading...';
  
    // Add the notification box to the body
    document.body.appendChild(notificationBox);
  
    try {
      // Fetch the API response
      const response = await fetch("https://api.bypass.vip/bypass?url=" + currentUrl);
      const data = await response.json();
  
      // Extract the result and clean up unwanted characters
      const result = data.result
        .replace(/\\n/g, '') // Remove all \n
        .replace(/\bn\b/g, ''); // Remove all standalone 'n' (e.g., ' n')
  
      // Create the content for the notification box
      const resultText = document.createElement('div');
      resultText.style.whiteSpace = 'pre-wrap'; // Preserve line breaks
      resultText.innerHTML = result.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" style="color: blue;">$1</a>'); // Make URLs clickable and blue

  
      // Clear the loading message and add the result
      notificationBox.textContent = '';
      notificationBox.appendChild(resultText);
  
      // Create the "Copy All" button
      const copyButton = document.createElement('button');
      copyButton.textContent = 'Copy All';
      copyButton.style.marginTop = '10px';
      copyButton.style.marginRight = '10px';
      copyButton.style.padding = '5px 10px';
      copyButton.style.backgroundColor = '#28a745';
      copyButton.style.color = 'white';
      copyButton.style.border = 'none';
      copyButton.style.borderRadius = '5px';
      copyButton.style.cursor = 'pointer';
  
      copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(result).then(() => {
          alert('Text copied to clipboard!');
        }).catch(err => {
          console.error('Failed to copy: ', err);
        });
      });
      notificationBox.appendChild(copyButton);
  
      // Add a close button to the notification box
      const closeButton = document.createElement('button');
      closeButton.textContent = 'Close';
      closeButton.style.marginTop = '10px';
      closeButton.style.padding = '5px 10px';
      closeButton.style.backgroundColor = '#dc3545';
      closeButton.style.color = 'white';
      closeButton.style.border = 'none';
      closeButton.style.borderRadius = '5px';
      closeButton.style.cursor = 'pointer';
  
      closeButton.addEventListener('click', () => {
        document.body.removeChild(notificationBox);
      });
      notificationBox.appendChild(closeButton);
  
    } catch (error) {
      // Handle any errors
      notificationBox.textContent = 'Error fetching data';
      console.error(error);
    }
}

async function workink() {
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    const currentUrl = window.location.href;

    function showNotification(message, key = null) {
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

        if (key) {
            const keyElement = document.createElement('div');
            keyElement.style.marginTop = '10px';
            keyElement.style.fontSize = '16px';
            keyElement.style.fontWeight = 'bold';
            keyElement.innerText = `${key}`;
            notificationContainer.appendChild(keyElement);

            const copyButton = document.createElement('button');
            copyButton.innerText = 'Copy';
            copyButton.style.marginTop = '10px';
            copyButton.style.padding = '10px';
            copyButton.style.border = 'none';
            copyButton.style.backgroundColor = '#008CBA';
            copyButton.style.color = 'white';
            copyButton.style.borderRadius = '5px';
            copyButton.style.cursor = 'pointer';

            copyButton.onclick = function () {
                navigator.clipboard.writeText(key)
                    .then(() => {
                        alert('Key copied to clipboard');
                        copyButton.innerText = 'Copied!';
                        setTimeout(() => {
                            copyButton.innerText = 'Copy';
                        }, 2000);
                    })
                    .catch(err => {
                        console.error('Error copying key to clipboard', err);
                    });
            };

            notificationContainer.appendChild(copyButton);
        }

        document.body.appendChild(notificationContainer);
    }

    function removeNotification() {
        const existingNotificationContainer = document.getElementById('notification-container');
        if (existingNotificationContainer) {
            existingNotificationContainer.remove();
        }
    }

    try {
        console.log("Starting script, current URL:", currentUrl);
        await sleep(2000);

        console.log("Sending request to API...");
        let response = await fetch("https://api.bypass.vip/bypass?url=" + currentUrl);
        if (!response.ok) {
            console.error(`HTTP error! status: ${response.status}`);
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        console.log("API responded, parsing JSON...");
        const data = await response.json();
        console.log("Parsed JSON:", data);

        // Check for CloudFlare error response
        if (data.result === "bypas fail! Ooops, we're getting issues bypassing CloudFlare, Please retry, this is a Server-side Error | Detailed error: Error Solving Turnstile Captcha | Bypass Ended at 93/100") {
            showNotification("Bypass CloudFlare Failed!");
            return;
        }

        if (data.result && data.result.startsWith("https://")) {
            console.log("Valid URL found, redirecting to:", data.result);
            window.location.href = data.result;
        } else if (data.result) {
            let decodedUrl = decodeURIComponent(data.result);
            if (decodedUrl.startsWith("https://")) {
                console.log("Encoded URL found, redirecting to decoded URL:", decodedUrl);
                window.location.href = decodedUrl;
            } else {
                console.warn("API returned a key instead of a URL.");
                showNotification("API returned a key:", data.result);
            }
        } else {
            console.warn("First API response doesn't contain a valid URL or key.");
            throw new Error("First API response doesn't contain a valid URL or key");
        }
    } catch (e) {
        console.error("Error: API might be offline or returned an invalid response.", e);
        await notification_failed();
    }
}

async function bstlar() {
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    const currentUrl = window.location.href;

    function showNotification(message, key = null) {
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

        if (key) {
            const keyElement = document.createElement('div');
            keyElement.style.marginTop = '10px';
            keyElement.style.fontSize = '16px';
            keyElement.style.fontWeight = 'bold';
            keyElement.innerText = `${key}`;
            notificationContainer.appendChild(keyElement);

            const copyButton = document.createElement('button');
            copyButton.innerText = 'Copy';
            copyButton.style.marginTop = '10px';
            copyButton.style.padding = '10px';
            copyButton.style.border = 'none';
            copyButton.style.backgroundColor = '#008CBA';
            copyButton.style.color = 'white';
            copyButton.style.borderRadius = '5px';
            copyButton.style.cursor = 'pointer';

            copyButton.onclick = function () {
                navigator.clipboard.writeText(key)
                    .then(() => {
                        alert('Key copied to clipboard');
                        copyButton.innerText = 'Copied!';
                        setTimeout(() => {
                            copyButton.innerText = 'Copy';
                        }, 2000);
                    })
                    .catch(err => {
                        console.error('Error copying key to clipboard', err);
                    });
            };

            notificationContainer.appendChild(copyButton);
        }

        document.body.appendChild(notificationContainer);
    }

    function removeNotification() {
        const existingNotificationContainer = document.getElementById('notification-container');
        if (existingNotificationContainer) {
            existingNotificationContainer.remove();
        }
    }

    try {
        console.log("Starting script, current URL:", currentUrl);
        await sleep(2000);

        console.log("Sending request to API...");
        let response = await fetch("https://api.bypass.vip/bypass?url=" + currentUrl);
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
        } else if (data.result) {
            let decodedUrl = decodeURIComponent(data.result);
            if (decodedUrl.startsWith("https://")) {
                console.log("Encoded URL found, redirecting to decoded URL:", decodedUrl);
                window.location.href = decodedUrl;
            } else {
                console.warn("API returned a key instead of a URL.");
                showNotification("API returned a key:", data.result);
            }
        } else {
            console.warn("First API response doesn't contain a valid URL or key.");
            throw new Error("First API response doesn't contain a valid URL or key");
        }
    } catch (e) {
        console.error("Error: API might be offline or returned an invalid response.", e);
        await notification_failed();
    }
}

async function lootlabs() {
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    const currentUrl = window.location.href;

    // Check if the URL starts with 'https://loot-link.com/s?fJjn&r='
    if (currentUrl.startsWith("https://loot-link.com/s?fJjn&r=") || currentUrl.startsWith("https://loot-link.com/s?812c32a9&r=")) {
        console.log("Detected loot-link URL, using backup function to bypass.");
        await lootlabsBackup();
        return;
    }

    try {
        console.log("Starting script, current URL:", currentUrl);
        await sleep(2000); // Sleep for 2000 milliseconds (2 seconds)

        // Primary API
        console.log("Sending request to primary API...");
        let response = await fetch("https://api.bypass.vip/bypass?url=" + currentUrl);
        if (!response.ok) {
            console.error(`HTTP error! status: ${response.status}`);
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        console.log("Primary API responded, parsing JSON...");
        let data = await response.json();
        console.log("Parsed JSON:", data);

        if (data.status === "success" && data.result && data.result.startsWith("https://")) {
            if (data.result.startsWith("https://keyrblx.com/getkey/")) {
                console.log("Detected keyrblx URL, waiting 10 seconds before redirecting...");
                await sleep(10000); // Delay for 10 seconds
            }

            if (!data.result.includes("lootdest.com")) {
                console.log("Valid URL found from primary API, redirecting to:", data.result);
                window.location.href = data.result;
                return;
            }
        } else {
            console.warn("Primary API response doesn't contain a valid URL or status, or URL is detected.");
            throw new Error("Primary API response doesn't contain a valid URL or status, or URL is detected");
        }
    } catch (e) {
        console.error("Error: Primary API might be offline or returned an invalid response.", e);
        console.log("Trying fallback API...");

        try {
            // Fallback API
            let fallbackResponse = await fetch("https://dlr.kys.gay/api/free/bypass?url=" + currentUrl);
            if (!fallbackResponse.ok) {
                console.error(`HTTP error! status: ${fallbackResponse.status}`);
                throw new Error(`HTTP error! status: ${fallbackResponse.status}`);
            }

            console.log("Fallback API responded, parsing JSON...");
            let fallbackData = await fallbackResponse.json();
            console.log("Parsed JSON from fallback API:", fallbackData);

            if (fallbackData.result && fallbackData.result.startsWith("https://")) {
                if (fallbackData.result.startsWith("https://keyrblx.com/getkey/")) {
                    console.log("Detected keyrblx URL from fallback, waiting 10 seconds before redirecting...");
                    await sleep(10000); // Delay for 10 seconds
                }

                if (!fallbackData.result.includes("lootdest.com")) {
                    console.log("Valid URL found from fallback API, redirecting to:", fallbackData.result);
                    window.location.href = fallbackData.result;
                } else {
                    console.warn("Fallback API response doesn't contain a valid URL or URL is detected.");
                    throw new Error("Fallback API response doesn't contain a valid URL or URL is detected");
                }
            }
        } catch (fallbackError) {
            console.error("Error: Fallback API might be offline or returned an invalid response.", fallbackError);
            await notification_failed();
        }
    }
}

async function lootlabsBackup() {
    const urlnow = window.location.href;
    function isBase64(str) {
        try {
            if (typeof str !== 'string' || str.length === 0) return false;
            const base64Pattern = /^[A-Za-z0-9+/=]+$/;
            if (!base64Pattern.test(str)) return false;
            const decodedStr = atob(str);
            return btoa(decodedStr) === str;
        } catch (e) {
            return false;
        }
    }

    function getParameterByName(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    const lutink = false;
    const base64String = getParameterByName('r');
    if (base64String && isBase64(base64String)) {
        try {
            const decodedUrl = atob(base64String);
            window.location.href = decodedUrl;

        } catch (error) {
            console.error('Error\n', error)
            await notification_failed();
        }
    }
}

async function mboost() {
    try {
        await sleep(2000); // Sleep for 10000 milliseconds (10 seconds)
        const response = await fetch("https://api.bypass.vip/bypass?url=" + window.location.href);
        const data = await response.json();
        window.location.href = data.result;
    } catch (e) {
        await notification_failed();
    }
}

async function socialwolvez() {
    try {
        await sleep(2000); // Sleep for 10000 milliseconds (10 seconds)
        const response = await fetch("https://api.bypass.vip/bypass?url=" + window.location.href);
        const data = await response.json();
        window.location.href = data.result;
    } catch (e) {
        await notification_failed();
    }
}

async function socialunlock() {
    try {
        await sleep(2000); // Sleep for 10000 milliseconds (10 seconds)
        const response = await fetch("https://api.bypass.vip/bypass?url=" + window.location.href);
        const data = await response.json();
        window.location.href = data.result;
    } catch (e) {
        await notification_failed();
    }
}

async function rekonise() {
    let $ = jQuery.noConflict();
    let sPathname = window.location.pathname;
    let sRedirectUrl = `https://api.rekonise.com/social-unlocks${sPathname}/unlock`;
  
    try {
      // Request the redirect URL from rekonise's API
      let data = await $.getJSON(sRedirectUrl);
      let redirectUrl = data['url'];
  
      // Check if the URL starts with "https://keyrblx.com/getkey/"
      if (redirectUrl.startsWith("https://keyrblx.com/getkey/")) {
        console.log('Keyrblx URL detected. Waiting 10 seconds before redirecting...');
        // Delay redirection by 10 seconds
        await new Promise(resolve => setTimeout(resolve, 5000));
      }
  
      // Redirect to the obtained URL
      window.location.href = redirectUrl;
    } catch (error) {
      console.error('Error fetching redirect URL:', error);
      await notification_failed();
    }
}

async function letsboost() {
    try {
        await sleep(2000); // Sleep for 10000 milliseconds (10 seconds)
        const response = await fetch("https://ethos-testing.vercel.app/api/letsboost/bypass?link=" + window.location.href);
        const data = await response.json();
        window.location.href = data.bypassed;
    } catch (e) {
        await notification_failed();
    }
}

async function boostink() {
    try {
        await sleep(2000); // Sleep for 10000 milliseconds (10 seconds)
        const response = await fetch("https://api.bypass.vip/bypass?url=" + window.location.href);
        const data = await response.json();
        window.location.href = data.result;
    } catch (e) {
        await notification_failed();
    }
}

async function gateway() {
    // Extract the full path after /a/ (e.g., "54658?id=37885275682")
    let fullPath = new URL(window.location.href).pathname.split('/a/')[1];

    // Extract the {id} part (e.g., "54658")
    let extractedId = fullPath.split('?')[0];

    // Extract the id from query parameters (e.g., "37885275682")
    let queryParamId = new URL(window.location.href).searchParams.get("id");

    // List of ID types that should be bypassed
    const WhitelistBypassTypes = ["8", "2569", "54658", "39097", "3170", "74946", "2", "73213", "82662", "87731"];

    // Notification function for captcha or other messages
    function notification(message, timeout) {
        const config = {
            text: message,
            title: "INFO",
            silent: true,
        };
        if (timeout) config.timeout = timeout;
        GM_notification(config);
    }

    // Check if the extractedId is NOT in the whitelist
    if (!WhitelistBypassTypes.includes(extractedId)) {
        console.log(`Bypassing is disabled for ID type: ${extractedId}`);
        return;
    }

    // Fetch the authenticator key using the extracted ID
    let t = await (await fetch(`https://api-gateway.platoboost.com/v1/authenticators/${extractedId}/` + queryParamId)).json();

    if (t.key) return;

    // Check the checkpoint count
    if (t.checkpointCount === 1) {
        // Existing code when checkpointCount is 1
        let tk = new URL(window.location.href).searchParams.get("tk");
        if (tk) {
            await sleep(3000);
            await (await fetch(`https://api-gateway.platoboost.com/v1/sessions/auth/${extractedId}/${queryParamId}/${tk}`, {
                method: "PUT"
            })).json().then(async e => {
                window.location.assign(e.redirect);
            }).catch(e => {
                alert(e);
            });
        } else {
            let captcha = t.captcha;
            let n = await fetch(`https://api-gateway.platoboost.com/v1/sessions/auth/${extractedId}/` + queryParamId, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    captcha: captcha ? await getTurnstileResponse() : "",
                    type: captcha ? "Turnstile" : ""
                })
            });

            // Check if the server responds with an error (e.g., 500 status for missing captcha)
            if (n.status === 500) {
                notification("Please solve the captcha.");
                return;
            }

            n = await n.json();
            await sleep(1000);

            let decryptedUrl = await (await fetch(`https://bypass.rblx.workers.dev/delta-decrypt?url=${encodeURIComponent(n.redirect)}`)).text();
            let rParam = new URL(decryptedUrl).searchParams.get("r");
            let finalUrl = atob(rParam);

            window.location.assign(finalUrl);
        }
    } else if (t.checkpointCount === 2) {
        // New code when checkpointCount is 2
        let o = new URL(window.location.href).searchParams.get("tk");
        if (o) {
            await sleep(5000);
            await (await fetch(`https://api-gateway.platoboost.com/v1/sessions/auth/${extractedId}/${queryParamId}/${o}`, {
                method: "PUT"
            })).json().then(async e => {
                if (console.log(e), e.redirect.includes("https://gateway.platoboost.com/")) {
                    window.location.reload();
                    return;
                }
                let t = await (await fetch(`https://bypass.rblx.workers.dev/delta-decrypt?url=${encodeURIComponent(e.redirect)}`)).text(),
                    a = new URL(t).searchParams.get("r"),
                    o = atob(a);
                window.location.assign(o);
            }).catch(e => {
                alert(e);
            });
        } else {
            let n = t.captcha;
            let s = await fetch(`https://api-gateway.platoboost.com/v1/sessions/auth/${extractedId}/` + queryParamId, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    captcha: n ? await getTurnstileResponse() : "",
                    type: n ? "Turnstile" : ""
                })
            });

            // Check if the server responds with an error (e.g., 500 status for missing captcha)
            if (s.status === 500) {
                notification("Please solve the captcha.");
                return;
            }

            s = await s.json();
            await sleep(100);

            let i = await (await fetch(`https://bypass.rblx.workers.dev/delta-decrypt?url=${encodeURIComponent(s.redirect)}`)).text(),
                c = new URL(i).searchParams.get("r"),
                r = atob(c);
            window.location.assign(r);
        }
    } else if (t.checkpointCount === 3) {
        // New code when checkpointCount is 3
        let o = new URL(window.location.href).searchParams.get("tk");
        if (o) {
            await sleep(4000); // Adjust sleep duration as needed
            await (await fetch(`https://api-gateway.platoboost.com/v1/sessions/auth/${extractedId}/${queryParamId}/${o}`, {
                method: "PUT"
            })).json().then(async e => {
                if (console.log(e), e.redirect.includes("https://gateway.platoboost.com/")) {
                    window.location.reload();
                    return;
                }
                let t = await (await fetch(`https://bypass.rblx.workers.dev/delta-decrypt?url=${encodeURIComponent(e.redirect)}`)).text(),
                    a = new URL(t).searchParams.get("r"),
                    o = atob(a);
                window.location.assign(o);
            }).catch(e => {
                alert(e);
            });
        } else {
            let n = t.captcha;
            let s = await fetch(`https://api-gateway.platoboost.com/v1/sessions/auth/${extractedId}/` + queryParamId, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    captcha: n ? await getTurnstileResponse() : "",
                    type: n ? "Turnstile" : ""
                })
            });

            // Check if the server responds with an error (e.g., 500 status for missing captcha)
            if (s.status === 500) {
                notification("Please solve the captcha.");
                return;
            }

            s = await s.json();
            await sleep(100);

            let i = await (await fetch(`https://bypass.rblx.workers.dev/delta-decrypt?url=${encodeURIComponent(s.redirect)}`)).text(),
                c = new URL(i).searchParams.get("r"),
                r = atob(c);
            window.location.assign(r);
        }
    }
}

async function notification_failed() {
    function createNotification(message, duration = 1) {
            const box = document.createElement('div');
            box.style.position = 'fixed';
            box.style.top = '20px'; // Di chuyển lên trên cao
            box.style.right = '-300px'; // Start off-screen
            box.style.padding = '15px';
            box.style.backgroundColor = '#444';
            box.style.color = '#fff';
            box.style.fontSize = '14px';
            box.style.borderRadius = '5px';
            box.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            box.style.zIndex = '9999';
            box.style.opacity = '0'; // Start hidden
            box.style.transform = 'scale(0.8)'; // Start smaller
            box.style.display = 'flex'; // Use flexbox for centering
            box.style.flexDirection = 'column'; // Vertical alignment
            box.style.alignItems = 'center'; // Center horizontally
            box.style.justifyContent = 'center'; // Center vertically
            box.style.textAlign = 'center'; // Center text
            box.innerHTML = `<strong>Failded to bypass, please contact</strong>${message}`;

            // Add keyframe animation styles
            const style = document.createElement('style');
            style.innerHTML = `
                @keyframes bounceIn {
                    0% { transform: scale(0.8); opacity: 0; right: -300px; }
                    50% { transform: scale(1.1); right: 20px; opacity: 1; }
                    100% { transform: scale(1); }
                }
                @keyframes pulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                    100% { transform: scale(1); }
                }
                @keyframes slideOutShrink {
                    0% { opacity: 1; right: 20px; transform: scale(1); }
                    100% { opacity: 0; right: -300px; transform: scale(0.8); }
                }
            `;
            document.head.appendChild(style);

            // Append the box to the body
            document.body.appendChild(box);

            // Trigger the bounce-in animation
            setTimeout(() => {
                box.style.opacity = '1';
                box.style.right = '20px'; // Slide in
                box.style.transform = 'scale(1)';
                box.style.animation = 'bounceIn 0.8s ease-out, pulse 1.5s ease-in-out infinite 1.2s'; // Bounce and pulse
            }, 100);

            // Remove the box with slide-out and shrink animation after the specified duration
            setTimeout(() => {
                box.style.animation = 'slideOutShrink 0.8s ease-in';
                setTimeout(() => {
                    box.remove();
                }, 800); // Matches the slide-out animation time
            }, duration);
        }

    // Example usage: show a notification
    createNotification(`Bacon But Pro`, 30000);

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
    p.includes("gateway.platoboost.com/a/") && gateway(),
    p.includes("linkvertise.com/") && linkvertise(),
    p.includes("work.ink/") && workink(),
    p.includes("workink.net/") && workink(),
    p.includes("socialwolvez.com/") && socialwolvez(),
    p.includes("getkey.relzscript.xyz/") && relz(),
    p.includes("social-unlock.com/") && socialunlock(),
    p.includes("bot-hosting.net/panel/") && bothosting(),
    p.includes("trigonevo.com/getkey/") && trigon_react(),
    p.includes("trigonevo.fun/whitelist/") && trigon(),
    p.includes("mboost.me/a/") && mboost(),
    p.includes("sub2get.com/link?l=") && sub2get(),
    p.includes("lootdest.com/s?") && lootlabs(),
    p.includes("sub2unlock.com/") && sub2unlock(),
    p.includes("links-loot.com/s?") && lootlabs(),
    p.includes("linksloot.net/s?") && lootlabs(),
    p.includes("lootdest.info/s?") && lootlabs(),
    p.includes("lootdest.org/s?") && lootlabs(),
    p.includes("loot-link.com/s?") && lootlabs(),
    p.includes("loot-links.com/s?") && lootlabs(),
    p.includes("lootlink.org/s?") && lootlabs(),
    p.includes("paster.so/") && paster(),
    p.includes("bstlar.com/") && bstlar(),
    p.includes("keyrblx.com/getkey/") && keyrblx(),
    p.includes("lootlinks.co/s?") && lootlabs();
}(), lvdl(), start();
