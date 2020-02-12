$(document).ready(function() {
    var background = $("body");
    $(document).mousemove(function() {
        var x = event.screenX / 1535 - 0.5;
        var y = (event.screenY - 103) / 729 - 0.5;
        background.css({
            "background-position-x": (x * x * x * 4 + 0.5) * 100 + "%",
            "background-position-y": (y * y * y * 4 + 0.5) * 100 + "%"
        });
    });

});