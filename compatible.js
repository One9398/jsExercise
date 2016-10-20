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

function getEvent(e) {
    return e || window.event;
}

function getTargetIdWithEvent(e) {
    return e.target ? e.target.id : e.srcElement.id;
}
