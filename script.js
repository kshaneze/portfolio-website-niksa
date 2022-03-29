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

// Menu fade animation
navContainer.addEventListener('mouseover', function (e) {
  if (e.target.classList.contains('navbar-link')) {
    // when mouse goes over(inside) area
    const mouseovered = e.target;

    //  In this step im moving up in parent element div (closest(header__content)), and from there Selecting logo image
    const logoImg = mouseovered
      .closest('.header__content')
      .querySelector('img');
    // In this step im moving up in parent element div (closest(header__content)), and from there Selecting logo text
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
    // when mouse goes outside of area
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

// Sticky navigation
const nav = document.querySelector('.header__content');
const header = document.querySelector('.header');

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: '-92px',
});

headerObserver.observe(header);

// Revealing Elmenets on scroll
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null, // viewport
  threshold: 0.15, // reveal when you reach 15% of the section
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});
