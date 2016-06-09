module.exports = function(className) {
    var elems = document.getElementsByClassName(className);
    for (var i = 0; i < x.length; i++) {
        var content = elems[i].textContent;
        elems[i].textContent = capitalize(content);
    }
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}