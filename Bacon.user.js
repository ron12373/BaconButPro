// ==UserScript==
// @name         Bacon Bypass Userscript
// @version      2.0.5
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
// @match        *://*.sub2get.com/*
// @match        *://socialwolvez.com/*
// @match        *://auth.platoboost.com/*
// @match        *://auth.platoboost.click/*
// @match        *://auth.platoboost.net/*
// @match        *://auth.platorelay.com/*
// @match        *://flux.li/android/external/*
// @match        *://bstlar.com/*
// @match        *://mobile.codex.lol/*
// @match        *://social-unlock.com/*
// @match        *://spdmteam.com/key-system*
// @match        *://krnl.cat/checkpoint/*
// @match        *://ads.luarmor.net/*
// @match        *://dusarisalary.com/*
// @match        *://bloggingdaze.com/*
// @match        *://key.volcano.wtf/*
// @match        *://keyrblx.com/*
// @match        *://pandadevelopment.net/getkey?*
// @match        *://bypass-linkv2.vercel.app/bypass.html?url=*
// @require      https://cdn.rawgit.com/ricmoo/aes-js/e27b99df/index.js
// @require      https://raw.githubusercontent.com/ron12373/BaconButPro/refs/heads/main/Notify.js
// @require      https://raw.githubusercontent.com/ron12373/BaconButPro/main/notifyVS.js
// @require      https://raw.githubusercontent.com/ron12373/BaconButPro/refs/heads/main/Main.js
// @icon         https://cdn141.picsart.com/351217840073211.png
// @grant        GM_xmlhttpRequest
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
        redirect: 'true' // Auto redirect: 'true' or 'false'
    };
}
