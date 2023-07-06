
function glow_title() {
    // Title to Glow and animate on hover
    
    let element = document.getElementById("title_name");
    let l1 = document.getElementById("title_name1");
    let l2 = document.getElementById("title_name2");
    let l3 = document.getElementById("title_name3");
    let l4 = document.getElementById("title_name4");
    let l5 = document.getElementById("title_name5");
    let l6 = document.getElementById("title_name6");
    let l7 = document.getElementById("title_name7");
    let l8 = document.getElementById("title_name8");
    let l9 = document.getElementById("title_name9");
    let l10 = document.getElementById("title_name10");


    let colors = ["#FF0000", "#FF3300", "#FF6600", "#FF9900", "#FFCC00", "#FFFF00", "#CCFF00", "#99FF00", "#66FF00", "#33FF00", "#00FF00", "#00FF33", "#00FF66", "#00FF99", "#00FFCC", "#00FFFF", "#00CCFF", "#0099FF", "#0066FF", "#0033FF", "#0000FF", "#3300FF", "#6600FF", "#9900FF", "#CC00FF", "#FF00FF", "#FF00CC", "#FF0099", "#FF0066", "#FF0033", "#FF0000", "#FF3300", "#FF6600", "#FF9900", "#FFCC00", "#FFFF00", "#CCFF00", "#99FF00", "#66FF00", "#33FF00"];
    let i = 0;
    // Initial color of fonts
    l1.style.color = "white";
    l2.style.color = "white";
    l3.style.color = "white";
    l4.style.color = "white";
    l5.style.color = "white";
    l6.style.color = colors[i + 5];
    l7.style.color = colors[i + 6];
    l8.style.color = colors[i + 7];
    l9.style.color = colors[i + 8];
    l10.style.color = colors[i + 9];

    // Text stroke for LINGO
    l1.style.webkitTextStroke = "2px" + String(colors[i]);
    l2.style.webkitTextStroke = "2px" + String(colors[i + 1]);
    l3.style.webkitTextStroke = "2px" + String(colors[i + 2]);
    l4.style.webkitTextStroke = "2px" + String(colors[i + 3]);
    l5.style.webkitTextStroke = "2px" + String(colors[i + 4]);
    // Bold text for VERSE
    l6.style.fontWeight = "1000";
    l7.style.fontWeight = "1000";
    l8.style.fontWeight = "1000";
    l9.style.fontWeight = "1000";
    l10.style.fontWeight = "1000";



    element.addEventListener('mouseover', () => {

        element.animationInterval = setInterval(function () {
            // Changing text stroke color on hover
            l1.style.webkitTextStroke = "2px" + String(colors[i]);
            l2.style.webkitTextStroke = "2px" + String(colors[i + 1]);
            l3.style.webkitTextStroke = "2px" + String(colors[i + 2]);
            l4.style.webkitTextStroke = "2px" + String(colors[i + 3]);
            l5.style.webkitTextStroke = "2px" + String(colors[i + 4]);
            // changing font color on hover
            l6.style.color = colors[i + 5];
            l7.style.color = colors[i + 6];
            l8.style.color = colors[i + 7];
            l9.style.color = colors[i + 8];
            l10.style.color = colors[i + 9];

            if (i >= colors.length - 11) {
                // reseting i to zero on cycle complete
                i = 0;
            }
            else {
                // increasing the value of i so color changes
                i = i + 1;
            }
        }, 100);
    });
    element.addEventListener("mouseout", () => {
        // stoping the interval on the exact position on stop hovering
        clearInterval(element.animationInterval);
    });
}



