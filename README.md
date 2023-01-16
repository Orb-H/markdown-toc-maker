# markdown-toc-maker

[English](https://github.com/Orb-H/markdown-toc-maker/blob/main/README_en.md)

마크다운 파일에 ToC를 만들어주는 간단한 JS 파일

## 요구사항

1. `<ul id="toc">` element를 원하는 위치에 생성합니다. 목차를 보여주는 박스가 자동으로 생성될 것입니다. 필요하다면, ul 안에 li를 하나 추가하고 **목차** 문자열을 쓸 수 있습니다(예시 페이지에서 확인 가능합니다).

## 기능

1. `<ul id="toc">`에 ToC 박스를 생성합니다. 각 항목의 번호에는 각 헤더로 이동하는 링크가 붙습니다.
1. 각 헤더에 ToC를 가리키는 링크가 붙은 번호가 붙습니다.
1. 주소에 헤더에 해당하는 fragment가 주어지면 해당 위치로 0.5초 후에 자동으로 이동합니다.

## 예시

[여기](https://orb-h.github.io/markdown-toc-maker/example)에서 예시를 확인할 수 있습니다.

## DONE

### 헤더의 범위 설정

~~현재 이 코드는 h3~h6만을 헤더로 인식하고 처리합니다. 이 범위를 사용자에 따라 동적으로 정할 수 있어야 할 것 같습니다.~~

#### 사용법

`function toc_init()`을 `function toc_init(start=3, end=6)`으로 바꾸어 `start`와 `end`에 원하는 범위를 입력하면 해당 헤더에 대해서만 toc를 생성합니다. 예를 들어, `start=1`, `end=4`로 설정하면 h1~h4까지의 헤더만 toc로 인식하여 번호를 부여하고 toc에 표시합니다.

## TODO

### 특정 element의 헤더

현재 이 코드는 `.markdown-body` 내부에 있는 헤더만 검사합니다. `.markdown-body`는 github page 사용 시 본문이 위치하는 클래스입니다. 다른 환경에서는 본문 클래스 이름이 다르거나, 이러한 클래스가 존재하지 않을 수도 있습니다. 따라서 헤더가 있는지 검사할 element의 범위를 정하는 옵션이 필요할 것 같습니다.