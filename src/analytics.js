/
export function someAnalyticsFunction(url) {
    console.log("Analytics called with:", url);

}
console.log("continue =", getParam(window.location.href, "continue"));
console.log("client_id =", getParam(window.location.href, "client_id"));

import { getParam } from './urlUtils.js';
var be = function(paramName, useHref) {
    try {
        var loc = typeof window !== "undefined" ? window.location : {};
        var url = useHref ? loc.href : loc.search;
        var v = getParam(url || "", paramName);
        return v == null ? "" : v;
    } catch (e) {
        return "";
    }
};
