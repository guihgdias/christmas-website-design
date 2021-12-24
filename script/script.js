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

  if(window.scrollY > 650) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }

  let value = window.scrollY / 10;
  document.querySelector('.home .mountain').style.bottom = `${-value}%`
  document.querySelector('.home .content').style.bottom = `${value}%`
  document.querySelector('.home .moon').style.marginTop = `${-value}%`
  document.querySelector('.home .cloud-1').style.left = `${-value}%`
  document.querySelector('.home .cloud-2').style.right = `${-value}%`
};