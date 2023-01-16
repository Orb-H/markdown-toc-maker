/// Made by Orb-H
///
/// Referenced the mechanism of toc in [namu.wiki]

let ps = [];

function toc_init(start=3, end=6) {
    if (start > end || start < 1 || end > 6) return;
    let target_element = [];
    for (let i = start; i <= end; i++) {
        target_element.push(".markdown-body > h" + i);
    }
    
    let query = target_element.join(",");
    let headings = document.querySelectorAll(query);
    let toc = document.getElementById("toc");
    let cur_toc = toc;
    let depth = 0;
    let nums = [0];
    for (let i = start; i < end; i++) {
        nums.push(1);
    }

    for (let i = 0; i < headings.length; i++) {
        let element = headings[i];
        let new_depth = parseInt(element.tagName.substr(1)) - start;
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