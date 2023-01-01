# markdown-toc-maker

A simple js file for making ToC of markdown file

마크다운 파일에 ToC를 만들어주는 간단한 JS 파일

## Requirement / 요구사항

1. Create a `<ul id="toc">` element where you want. The ToC box will automatically created in it. If needed, add a `<li>` element inside the ul for **Index** string(as example page).

---

1. `<ul id="toc">` element를 원하는 위치에 생성합니다. 목차를 보여주는 박스가 자동으로 생성될 것입니다. 필요하다면, ul 안에 li를 하나 추가하고 **목차** 문자열을 쓸 수 있습니다(예시 페이지에서 확인 가능합니다).

## Feature / 기능

1. Creates a table of content box where `<ul id="toc">` exists. There are link to each header at the index number of each item in ToC.
1. Prepends the index number to the header with link to ToC.
1. If fragment to header is defined in the address, scroll will be automatically set to the corresponding header after 0.5s.

---

1. `<ul id="toc">`에 ToC 박스를 생성합니다. 각 항목의 번호에는 각 헤더로 이동하는 링크가 붙습니다.
1. 각 헤더에 ToC를 가리키는 링크가 붙은 번호가 붙습니다.
1. 주소에 헤더에 해당하는 fragment가 주어지면 해당 위치로 0.5초 후에 자동으로 이동합니다.

## Example page / 예시

You can check how this works in [here](https://orb-h.github.io/markdown-toc-maker/example).

[여기](https://orb-h.github.io/markdown-toc-maker/example)에서 예시를 확인할 수 있습니다.

## TODO

### Range of header / 헤더의 범위

Currently this code treats only h3~h6 as headers. Option to set this range by user is needed.

현재 이 코드는 h3~h6만을 헤더로 인식하고 처리합니다. 이 범위를 사용자에 따라 동적으로 정할 수 있어야 할 것 같습니다.

### Headers in certain element(s) / 특정 element의 헤더

Currently this code finds headers in `.markdown-body`, where contents are displayed when github-page is used. On other environments, the name of class could be different, or no class name would be needed. Therefore, option to limit the range of elements to check headers is needed.

현재 이 코드는 `.markdown-body` 내부에 있는 헤더만 검사합니다. `.markdown-body`는 github page 사용 시 본문이 위치하는 클래스입니다. 다른 환경에서는 본문 클래스 이름이 다르거나, 이러한 클래스가 존재하지 않을 수도 있습니다. 따라서 헤더가 있는지 검사할 element의 범위를 정하는 옵션이 필요할 것 같습니다.