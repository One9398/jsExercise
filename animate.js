/**
 * Created by One on 16/10/21.
 */

function animate(targetEle, attrs, callback) {

    clearInterval(targetEle.timer);
    targetEle.timer = setInterval(function () {

        var finshed = true;
        for (var key in attrs) {
            var targetValue = attrs[key];
            var currentValue = parseInt(getStyle(targetEle, key));
            var step = (targetValue - currentValue) / 10;

            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            currentValue += step ;

            targetEle.style[key] = currentValue + 'px';

            if (currentValue != attrs[key]) {
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
}

function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return window.getComputedStyle(obj, null)[attr];
    }
}
