'use strict';
const btnShowProjects = document.querySelector('#btn-projects');
const sectionProjects = document.querySelector('.section__projects');

const btnContactMe = document.querySelector('#btn-contact');
const sectionContactMe = document.querySelector('.contact-section');

const navItems = document.querySelectorAll('.nav-item');
const navContainer = document.querySelector('.header__content');

// Scrolling on click
btnShowProjects.addEventListener('click', function (e) {
  sectionProjects.scrollIntoView({ behavior: 'smooth' });
});

// Scrolling on click

btnContactMe.addEventListener('click', function (e) {
  sectionContactMe.scrollIntoView({ behavior: 'smooth' });
});

// Sticky navigation

// Menu fade animation
navContainer.addEventListener('mouseover', function (e) {
  if (e.target.classList.contains('navbar-link')) {
    const mouseovered = e.target;

    const logoImg = mouseovered
      .closest('.header__content')
      .querySelector('img');
    const logoText = mouseovered
      .closest('.header__content')
      .querySelector('.header__logo-name');
    // In this step im moving up in parent element div (closest(header__content)), and from there selecting links
    const siblings = mouseovered
      .closest('.header__content')
      .querySelectorAll('.navbar-link');

    siblings.forEach(el => {
      if (el !== mouseovered) el.style.opacity = 0.5;
    });

    logoImg.style.opacity = 0.5;
    logoText.style.opacity = 0.5;
  }
});

navContainer.addEventListener('mouseout', function (e) {
  if (e.target.classList.contains('navbar-link')) {
    const mouseovered = e.target;

    const logoImg = mouseovered
      .closest('.header__content')
      .querySelector('img');
    const logoText = mouseovered
      .closest('.header__content')
      .querySelector('.header__logo-name');
    // In this step im moving up in parent element div (closest(header__content)), and from there selecting links
    const siblings = mouseovered
      .closest('.header__content')
      .querySelectorAll('.navbar-link');

    siblings.forEach(el => {
      if (el !== mouseovered) el.style.opacity = 1;
    });
    logoImg.style.opacity = 1;
    logoText.style.opacity = 1;
  }
});
