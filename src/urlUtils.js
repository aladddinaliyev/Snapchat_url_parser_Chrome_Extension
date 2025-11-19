// urlUtils.js

function getParam(url, paramName) {
    try {
        const params = new URLSearchParams(String(url).split("?")[1]);
        return params.get(paramName);
    } catch (e) {
        return null;
    }
}

var E = function(url, paramName) {
    try {
        const v = getParam(url, paramName);
        return v === null ? "" : v;
    } catch (e) {
        return "";
    }
};

export function be(paramName, useHref) {
    try {
        var url = useHref ? window.location.href : window.location.search;
        var v = getParam(url, paramName);
        return v == null ? "" : v;
    } catch (e) {
        return "";
    }
}

export { getParam, E };
