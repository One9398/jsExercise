/**
 * Created by One on 16/10/20.
 */


function clientSize() {
    if (window.innerWidth != null) {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        };
    } else if (document.compatMode === 'CSS1Compat') {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        };
    }

    return {
        width: document.body.clientWidth,
        height: document.body.clientHeight
    };
}

function scrollOffset() {
    if (window.pageYOffset != null) {
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        };

    } else if (document.compatMode === "CSS1Compat") {
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        };
    }

    return {
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    };
}

function avoidSelection() {
    window.getSelection() ? window.getSelection().removeAllRanges() : document.selection().empty();
}

function getSelectText() {
    if (window.getSelection) {
        text = window.getSelection().toString();
    }
    else {
        text = document.selection.createRange().text;
    }

    return text;
}

function getEvent(e) {
    return e || window.event;
}

function getTargetIdWithEvent(e) {
    return e.target ? e.target.id : e.srcElement.id;
}

function getElementsByClassName() {

    return [];
}


function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return window.getComputedStyle(obj, null)[attr];
    }
}
/*
textContent Polyfill for IE8
*/

if (Object.defineProperty
    && Object.getOwnPropertyDescriptor
    && Object.getOwnPropertyDescriptor(Element.prototype, "textContent")
    && !Object.getOwnPropertyDescriptor(Element.prototype, "textContent").get) {
    (function() {
        var innerText = Object.getOwnPropertyDescriptor(Element.prototype, "innerText");
        Object.defineProperty(Element.prototype, "textContent",
            {
                get: function() {
                    return innerText.get.call(this);
                },
                set: function(s) {
                    return innerText.set.call(this, s);
                }
            }
        );
    })();
}

