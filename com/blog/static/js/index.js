$(document).ready(function() {
    for (i = 0; i < 5; i++) {
        var link = $(".single-link:eq(" + i + ")");
        do {
            var random_r = Math.round(Math.random() * 255);
            var random_g = Math.round(Math.random() * 255);
            var random_b = Math.round(Math.random() * 255);
            var random_a = Math.random() * 0.5;
        } while (random_r > 197 & random_g > 223 & random_b > 235)

        link.css({
            "background-color": "rgba(" + random_r + "," + random_g + "," + random_b + "," + random_a + ")"
        });
    }
});