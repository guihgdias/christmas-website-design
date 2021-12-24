let searchBtn = document.querySelector('#search-btn');
let searchForm = document.querySelector('.header .search-form');

searchBtn.onclick = () => {
  searchBtn.classList.toggle('fa-times');
  searchForm.classList.toggle('active');
  navBtn.classList.remove('fa-times');
  navBar.classList.remove('active');
};

let navBtn = document.querySelector('#menu-btn');
let navBar = document.querySelector('.navbar');

navBtn.onclick = () => {
  navBtn.classList.toggle('fa-times');
  navBar.classList.toggle('active');
  searchBtn.classList.remove('fa-times');
  searchForm.classList.remove('active');
};

window.onscroll = () => {
  navBtn.classList.remove('fa-times');
  navBar.classList.remove('active');
  searchBtn.classList.remove('fa-times');
  searchForm.classList.remove('active');
};