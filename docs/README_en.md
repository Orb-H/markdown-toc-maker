# table-of-content-maker

[한국어](https://github.com/Orb-H/markdown-toc-maker/blob/main/README.md)

A simple js file for making table of content + numbering header

referenced the style of ToC and numbering from namu.wiki

## Usage

1. Create a `<ul id="toc">` element where you want. The ToC box will automatically created in it. If needed, add a `<li>` element inside the ul for **Index** string(as example page).

## How this works

1. Creates a table of content box where `<ul id="toc">` exists. There are link to each header at the index number of each item in ToC.
1. Prepends the index number to the header with link to ToC.
1. If fragment to header is defined in the address, scroll will be automatically set to the corresponding header after 0.5s.

## Example page

You can check how this works in [here](https://orb-h.github.io/markdown-toc-maker/example).

## DONE

### Setting range of header

~~Currently this code treats only h3~h6 as headers. Option to set this range by user is needed.~~

#### Usage

The definition of function was changed from `function toc_init()` to `function toc_init(start=3, end=6)`. Now you can define `start` and `end` as you want, to create toc for only selected range of headers. For example, if you set `start=1` and `end=4`, the code will consider only h1~h4 as headers and provide numbers, and display in toc box.

## TODO

### Headers in certain element(s)

Currently this code finds headers in `.markdown-body`, where contents are displayed when github-page is used. On other environments, the name of class could be different, or no class name would be needed. Therefore, option to limit the range of elements to check headers is needed.