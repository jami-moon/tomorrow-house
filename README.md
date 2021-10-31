# 오늘의 집 클론 사이트 만들기

### 1. GNB

- 로그인을 하지 않은 경우

```html
<div class="button-group">
  <button class="gnb-icon-button is-search gnb-icon-button lg-hidden" type="button">
    <i class="ic-search" aria-label="검색창 열기 버튼"></i>
  </button>
  <a href="/" class="gnb-icon-button is-cart" aria-label="장바구니 페이지로 이동">
    <i class="ic-cart"></i>
  </a>

  <div class="gnb-auth sm-hidden">
    <a href="/">로그인</a>
    <a href="/">회원가입</a>
  </div>
</div>
```

- 로그인을 한 경우

```html
<div class="button-group">
  <button class="gnb-icon-button is-search gnb-icon-button lg-hidden" type="button">
    <i class="ic-search" aria-label="검색창 열기 버튼"></i>
  </button>

  <a href="/" class="gnb-icon-button sm-hidden" aria-label="스크랩북 페이지로 이동">
    <i class="ic-bookmark"></i>
  </a>
  <a href="/" class="gnb-icon-button sm-hidden" aria-label="내 소식 페이지로 이동">
    <i class="ic-bell"></i>
  </a>

  <a href="/" class="gnb-icon-button is-cart" aria-label="장바구니 페이지로 이동">
    <i class="ic-cart"></i>
    <strong class="badge">5</strong>
  </a>

  <button class="gnb-avatar-button sm-hidden" type="button" aria-label="마이메뉴 열기 버튼">
    <div class="avatar-32">
      <img src="./assets/images/img-user-01.jpg" alt="사달라아저씨" />
    </div>
  </button>
</div>
```

### 2. Sidebar

- 로그인을 하지 않은 경우

```html
<div class="sidebar-auth">
  <a class="btn-outlined btn-40" href="/">로그인</a>
  <a class="btn-fill-primary btn-40" href="/">회원가입</a>
</div>
```

- 로그인을 한 경우

```html
<div class="sidebar-user">
  <a href="/">
    <div class="avatar-24">
      <img src="./assets/images/img-user-01.jpg" alt="사달라아저씨" />
    </div>
    <strong class="username">사달라</strong>
  </a>
</div>
```
