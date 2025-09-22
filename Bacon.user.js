// ==UserScript==
// @name         Bacon Bypass Userscript
// @version      2.1.8
// @description  Made by Bacon But Pro
// @author       Bacon
// @homepageURL  https://discord.gg/gFNAH7WNZj
// @match        *://loot-link.com/s?*
// @match        *://loot-links.com/s?*
// @match        *://lootlink.org/s?*
// @match        *://lootlinks.co/s?*
// @match        *://lootdest.info/s?*
// @match        *://lootdest.org/s?*
// @match        *://lootdest.com/s?*
// @match        *://links-loot.com/s?*
// @match        *://linksloot.net/s?*
// @match        *://linkvertise.com/*/*
// @match        *://linkvertise.com/?iwantbypass=*
// @match        *://adfoc.us/*
// @match        *://go.linkify.ru/*
// @match        *://boost.ink/*
// @match        *://bst.gg/*
// @match        *://blox-script.com/get-key*
// @match        *://blox-script.com/subscribe*
// @match        *://link-unlock.com/*
// @match        *://rekonise.com/*
// @match        *://rkns.link/*
// @match        *://mboost.me/*
// @match        *://sub4unlock.pro/*
// @match        *://sub4unlock.com/*
// @match        *://linkunlocker.com/*
// @match        *://sub2unlock.com/*
// @match        *://sub2unlock.top/*
// @match        *://sub2unlock.me/*
// @match        *://*.sub2get.com/*
// @match        *://socialwolvez.com/*
// @match        *://auth.platoboost.com/*
// @match        *://auth.platoboost.click/*
// @match        *://auth.platoboost.net/*
// @match        *://auth.platorelay.com/*
// @match        *://bstlar.com/*
// @match        *://mobile.codex.lol/*
// @match        *://social-unlock.com/*
// @match        *://spdmteam.com/key-system*
// @match        *://krnl.cat/checkpoint/*
// @match        *://ads.luarmor.net/*
// @match        *://dusarisalary.com/*
// @match        *://bloggingdaze.com/*
// @match        *://keyrblx.com/*
// @match        *://pandadevelopment.net/getkey?*
// @match        *://ldnesfspublic.org/*
// @match        *://tapvietcode.com/*
// @match        *://sub2unlock.io/*
// @match        *://getkey.farrghii.com/check1.php*
// @match        *://bypass-linkv2.vercel.app/bypass.html?url=*
// @require      https://cdn.rawgit.com/ricmoo/aes-js/e27b99df/index.js
// @require      https://github.com/ron12373/BaconButPro/raw/main/notifyVS.js
// @require      https://github.com/ron12373/BaconButPro/raw/main/Main.js
// @icon         https://cdn141.picsart.com/351217840073211.png
// @run-at       document-end
// @grant        GM_xmlhttpRequest
// @grant        GM_setClipboard
// @grant        unsafeWindow
// @connect      linkvertise.com
// @connect      loot-link.com
// @connect      loot-links.com
// @connect      lootlink.org
// @connect      lootlinks.co
// @connect      lootdest.info
// @connect      lootdest.org
// @connect      lootdest.com
// @connect      links-loot.com
// @connect      linksloot.net
// ==/UserScript==
function config() {
    return {
        timer: '0', // Timer wait before bypass
        redirect: 'false', // Auto redirect: 'true' or 'false'
        redirectv2: 'true', // Auto redirect without button: 'true' or 'false'
        redirectv2Delay: 0, // Delay in seconds before auto redirect (0 = no delay)
        lootlabsv2: 'true', // Use lootlabs v2: 'true' or 'false'
        redirectURLButton: ['krnl.cat', 'ads.luarmor.net', 'buicon.com'], // URLs that should show button instead of auto redirect (only working if you use redirectv2)
        cooldownButton: 'default', // Button cooldown: 'default', number (0 = no cooldown, custom number = all links use that cooldown)
        auto_copy: 'true' // Auto Copy: 'true' or 'false'
    };
}
