// Language List

let containerlist = document.getElementById("container_list");
let radioinputs = document.getElementsByClassName("radio-inputs")[0];
containerlist.addEventListener("mouseover", showList);
radioinputs.addEventListener("mouseover", showList);

var a, b;

containerlist.addEventListener("mouseout", function () {
    a = setTimeout(hideList, 1000);
});
radioinputs.addEventListener("mouseout", function () {
    b = setTimeout(hideList, 1000);
});

function showList() {
    clearTimeout(a);
    clearTimeout(b);
    radioinputs.style.display = "flex";
}

function hideList() {
    radioinputs.style.display = "none";
}

function checkindatabase(lang, division, atword) {
    if (localStorage.getItem("journey_database") !== null) {
        var data = JSON.parse(localStorage.getItem("journey_database"));
        var thisarray = [lang, division, atword];
        var index = data.findIndex((arr) => arr[0] === thisarray[0] && arr[1] === thisarray[1]);
        if (index === -1) {
            return [lang, division, atword];
        }
        else {
            return data[index];
        }
    } else {
        return [lang, division, atword];
    }

}

function goto(b, diviv = "1", atword = 0) {
    let a;
    let divisionsname = ["Beginner", "Moderate", "Advance"];

    if (atword === 0) {
        let arrayreq = checkindatabase(b, divisionsname[parseInt(diviv) - 1], atword);
        atword = arrayreq[2];
    }

    switch (b) {
        case "chinese":
            a = "1" + String(diviv);
            break;
        case "french":
            a = "2" + String(diviv);
            break;
        case "german":
            a = "3" + String(diviv);
            break;
        case "hindi":
            a = "4" + String(diviv);
            break;
        case "japanese":
            a = "5" + String(diviv);
            break;
        case "korean":
            a = "6" + String(diviv);
            break;
        case "russian":
            a = "7" + String(diviv);
            break;
        case "spanish":
            a = "8" + String(diviv);
            break;
        case "tamil":
            a = "9" + String(diviv);
            break;

        default:
            break;
    }
    let link = "language.html?langid=" + String(a) + "&atword=" + String(atword);
    open(link, "_self");
}


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

    let colors = [
        "#FF0000",
        "#FF3300",
        "#FF6600",
        "#FF9900",
        "#FFCC00",
        "#FFFF00",
        "#CCFF00",
        "#99FF00",
        "#66FF00",
        "#33FF00",
        "#00FF00",
        "#00FF33",
        "#00FF66",
        "#00FF99",
        "#00FFCC",
        "#00FFFF",
        "#00CCFF",
        "#0099FF",
        "#0066FF",
        "#0033FF",
        "#0000FF",
        "#3300FF",
        "#6600FF",
        "#9900FF",
        "#CC00FF",
        "#FF00FF",
        "#FF00CC",
        "#FF0099",
        "#FF0066",
        "#FF0033",
        "#FF0000",
        "#FF3300",
        "#FF6600",
        "#FF9900",
        "#FFCC00",
        "#FFFF00",
        "#CCFF00",
        "#99FF00",
        "#66FF00",
        "#33FF00",
    ];
    let i = 0;
    // Initial color of fonts
    l1.style.color = "transparent";
    l2.style.color = "transparent";
    l3.style.color = "transparent";
    l4.style.color = "transparent";
    l5.style.color = "transparent";
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
        } else {
            // increasing the value of i so color changes
            i = i + 1;
        }
    }, 100);
}


function show_hidden_info() {
    var containers = document.getElementsByClassName('language');
    for (var i = 0; i < containers.length; i++) {
        var container = containers[i];
        var button = container.getElementsByClassName('lang_info_extend')[0];
        var text = 'lang_hidden_info';

        button.addEventListener('click', function () {
            var parent = this.parentNode;
            parent.style.height = 'auto';
            this.style.display = "none";
            parent.getElementsByClassName(text)[0].style.display = 'block';
            parent.getElementsByClassName("lang-short-info")[0].style.display = 'none';
        });
    }
}
show_hidden_info();









