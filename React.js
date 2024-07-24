(function() {
    'use strict';

    // Get the current URL
    let currentUrl = window.location.href;

    // Check if the URL starts with the specified string
    if (currentUrl.startsWith("https://trigonevo.com/getkey/?hwid=")) {
        // Extract the HWID from the URL
        let hwid = currentUrl.split("hwid=")[1];

        // Construct the new URL
        let newUrl = `https://pandadevelopment.net/getkey?service=trigon-evo&hwid=${hwid}&provider=linkvertise`;

        // Redirect to the new URL
        window.location.href = newUrl;
    }
})();
