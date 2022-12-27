/// Made by Orb-H
///
/// Referenced the mechanism of toc in [namu.wiki]

let ps = [];

function toc_init() {
    let headings = document.querySelectorAll(".markdown-body > h3,.markdown-body > h4,.markdown-body > h5,.markdown-body > h6");
    let toc = document.getElementById("toc");
    let cur_toc = toc;
    let depth = 0;
    let nums = [0, 1, 1, 1];

    for (let i = 0; i < headings.length; i++) {
        let element = headings[i];
        let new_depth = parseInt(element.tagName.substr(1)) - 3;
        let prefix = "";
        let prefix2 = "";

        if (new_depth < depth) {
            nums[new_depth]++;
            for (let j = 0; j <= new_depth; j++) {
                prefix += nums[j] + ".";
            }
            for (let j = depth; j > new_depth; j--) {
                cur_toc = cur_toc.parentElement.parentElement;
            }
        } else if (new_depth == depth) {
            nums[depth]++;
            for (let j = 0; j <= depth; j++) {
                prefix += nums[j] + ".";
            }
        } else {
            for (let j = depth + 1; j <= new_depth; j++) {
                nums[j] = 1;
            }
            for (let j = 0; j <= new_depth; j++) {
                prefix += nums[j] + ".";
            }
            cur_toc.lastElementChild.append(document.createElement("ul"));
            cur_toc = cur_toc.lastElementChild.lastElementChild;
        }

        prefix2 = prefix.substr(0, prefix.length - 1);
        let li = document.createElement("li");
        li.innerHTML = "<a href=\"#s-" + prefix2 + "\">" + prefix + "</a> " + element.textContent;
        cur_toc.append(li);

        element.innerHTML = "<a href=\"#toc\" id=s-" + prefix2 + ">" + prefix + "</a> " + element.innerHTML; 
        depth = new_depth;
    }

    // auto scrolling to header after 0.5s
    setTimeout(function() {
        if (location.href.indexOf("#") != -1) {
            document.getElementById(location.href.split("#")[1]).scrollIntoView();
        }
    }, 500);
}

if (document.readyState !== 'loading') {
    toc_init();
} else {
    window.addEventListener('DOMContentLoaded', toc_init);
}