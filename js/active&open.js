"use strict";

const $searchInput = document.querySelector(".gnb-search .form-input");
const $searchHistory = document.querySelector(".gnb-search .search-history");
const $myMenu = document.querySelector(".my-menu");
const $myMenuBtn = document.querySelector(".my-menu .my-menu-button");
const $searchIcon = document.querySelector(".gnb-icon-button.is-search");
const $searchModal = document.querySelector(".search-modal");
const $searchModalCloseBtn = document.querySelector(".search-modal .close-btn");
const $menuBtn = document.querySelector(".gnb-icon-button.is-menu");
const $sidebar = document.querySelector(".sidebar");
const $overlay = document.querySelector(".overlay");
const $sidebarMenu = document.querySelectorAll(".sidebar .drawer-menu");
const $contentBtn = document.querySelector(".product-section-content .open-btn");
const $productSpec = document.querySelector(".product-section.product-spec");
const $inquiry = document.querySelector(".product-inquiry");
const $inquiryHeader = document.querySelector(".product-inquiry .product-section-header");
const $shipment = document.querySelector(".product-shipment");
const $shipmentHeader = document.querySelector(".product-shipment .product-section-header");
const $ctaOrderBtn = document.querySelector(".order-cta .order-btn");
const $orderFormModal = document.querySelector(".order-form-modal");

const IS_ACTIVE = `is-active`;
const IS_OPEN = `is-open`;

// 토글 클래스 이벤트핸들러
function activeToggle(elementToBeChanged) {
  elementToBeChanged.classList.toggle(IS_ACTIVE);
}

function openToggle(elementToBeChanged) {
  elementToBeChanged.classList.toggle(IS_OPEN);
}

// 검색창 이벤트리스너
$searchInput.addEventListener("focus", () => {
  activeToggle($searchHistory);
});

$searchInput.addEventListener("blur", () => {
  activeToggle($searchHistory);
});

// 마이 메뉴 이벤트리스너
$myMenuBtn.addEventListener("focus", () => {
  activeToggle($myMenu);
});

$myMenuBtn.addEventListener("blur", () => {
  activeToggle($myMenu);
});

// 모바일 서치 모달 이벤트리스너 및 스크롤바 없애기
$searchIcon.addEventListener("click", () => {
  activeToggle($searchModal);
  document.body.style.overflow = "hidden";
});

$searchModalCloseBtn.addEventListener("click", () => {
  activeToggle($searchModal);
  document.body.style.overflow = "visible";
});

// 모바일 사이드바 이벤트리스너 및 overlay
$menuBtn.addEventListener("click", () => {
  $sidebar.classList.add(IS_ACTIVE);
  $overlay.classList.add(IS_ACTIVE);

  if ($sidebar.classList.contains(IS_ACTIVE)) {
    window.addEventListener("click", removeSidebar);
  }
});

function removeSidebar(e) {
  if (e.target === $overlay) {
    $sidebar.classList.remove(IS_ACTIVE);
    $overlay.classList.remove(IS_ACTIVE);
    window.removeEventListener("click", removeSidebar);
  }
}

// 모바일 사이드바 대메뉴, 상세메뉴 이벤트리스너
$sidebarMenu.forEach((target) => {
  target.addEventListener("click", () => {
    target.classList.toggle(IS_ACTIVE);
    target.classList.toggle(IS_OPEN);
  });
});

$contentBtn.addEventListener("click", () => {
  openToggle($productSpec);
});

// 모바일 문의 오픈
$inquiryHeader.addEventListener("click", () => {
  $inquiry.classList.add(IS_OPEN);
});

// 모바일 배송 오픈
$shipmentHeader.addEventListener("click", () => {
  $shipment.classList.add(IS_OPEN);
});

// 하단 CTA 이벤트리스너 및 overlay 추가
$ctaOrderBtn.addEventListener("click", () => {
  $orderFormModal.classList.add(IS_OPEN);
  $overlay.classList.add(IS_ACTIVE);

  window.addEventListener("click", removeOrderModal);
});

function removeOrderModal(e) {
  if (e.target === $overlay) {
    $orderFormModal.classList.remove(IS_OPEN);
    $overlay.classList.remove(IS_ACTIVE);
    document.body.style.overflow = "visible";
    window.removeEventListener("click", removeOrderModal);
  }
}
