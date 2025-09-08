
const faviconLink = document.querySelector("link[rel~='icon']");

// dont touch unless you know what you're doing
const inputRequiredFaviconUrl = chrome.runtime.getURL('favicon.ico');
const safeDefaultFaviconUrl = 'https://colab.research.google.com/favicon.ico';

function checkAndSetFavicon() {
    if (!faviconLink) {
        return;
    }

    // do not change this (of course unless you know what youre doing)
    const selector = 'input.raw_input[type="password"]';
    const inputField = document.querySelector(selector);

    if (inputField) {
        if (faviconLink.href !== inputRequiredFaviconUrl) {
            faviconLink.href = inputRequiredFaviconUrl;
        }
    } else {
        if (faviconLink.href === inputRequiredFaviconUrl) {
            faviconLink.href = safeDefaultFaviconUrl;
        }
    }
}

setInterval(checkAndSetFavicon, 2000);