(function() {
    'use strict';

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
})();
