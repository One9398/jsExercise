/**
 * Created by One on 16/10/21.
 */

function animate(targetEle, attrs, callback) {

    clearInterval(targetEle.timer);
    targetEle.timer = setInterval(function () {

        var finshed = true;
        for (var key in attrs) {
            var targetValue = attrs[key];
            var currentValue = 0;
            var step = 0;
            if (isOpacity(key)) {
                // opacity 0.1 -> 10%
                currentValue = Math.round(getStyle(targetEle, key) * 100 || 100);
                step = (100 * targetValue - currentValue) / 10;
            } else {
                currentValue = parseInt(getStyle(targetEle, key)) || 0;
                step = (targetValue - currentValue) / 10;
            }

            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            currentValue += step ;

            if (isOpacity(key)) {
                targetEle.style.opacity = currentValue / 100;
                targetEle.style.filter = "alpha(opacity=" + currentValue + ")";

            } else if (isZIndex(key)) {
                targetEle.style.zIndex = attrs[key];
                console.log('z-index'+ attrs[key]);

            } else {
                targetEle.style[key] = currentValue + 'px';
            }

            if (isOpacity(key) && (currentValue !== attrs[key] * 100)) {
                finshed = false;
            }

            if (!isOpacity(key) && currentValue !== attrs[key]) {
                finshed = false;
            }

        }

        if (finshed) {
            clearInterval(targetEle.timer);
            if (callback && typeof callback === 'function') {
                callback();
            }
        }


    }, 30);

    function isOpacity(key) {
        return key === "opacity";
    }

    function isZIndex(key) {
        return key === 'zIndex';
    }
}

function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return window.getComputedStyle(obj, null)[attr];
    }
}
