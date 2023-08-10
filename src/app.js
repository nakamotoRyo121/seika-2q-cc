import { gsap } from "gsap";

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// swiper
const swiper1 = new Swiper('.swiper-1',{
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 7000,
  },
  speed: 500,
});

// gsap
const tl = gsap.timeline();
const consept1 = document.querySelector('#consept1');
tl.from(consept1, {
  y: 50,
  duration: 2,
  ease: "expo.out",
  autoAlpha: 0,
}, 1);

const sub1 = document.querySelector('.sub1');
tl.from(sub1, {
  y: 0,
  duration: 2,
  delay: 0.35,
  ease: "expo.out",
  autoAlpha: 0,
}, 1);

const consept2 = document.querySelector('#consept2');
tl.from(consept2, {
  y: 30,
  duration: 2,
  ease: "expo.out",
  autoAlpha: 0,
}, 1);

const sub2 = document.querySelector('.sub2');
tl.from(sub2, {
  y:30,
  duration: 2,
  delay: 0.3,
  ease: "expo.out",
  autoAlpha: 0,
}, 1);

const consept3 = document.querySelector('#consept3');
tl.from(consept3, {
  y: 30,
  duration: 2,
  ease: "expo.out",
  autoAlpha: 0,
}, 1);

const sub3 = document.querySelector('.sub3');
tl.from(sub3, {
  y:30,
  duration: 2,
  delay: 0.3,
  ease: "expo.out",
  autoAlpha: 0,
}, 1);

const consept4 = document.querySelector('#consept4');
tl.from(consept4, {
  y: 30,
  duration: 2,
  ease: "expo.out",
  autoAlpha: 0,
}, 1);

const sub4 = document.querySelector('.sub4');
tl.from(sub4, {
  y:30,
  duration: 2,
  delay: 0.3,
  ease: "expo.out",
  autoAlpha: 0,
}, 1);

const consept5 = document.querySelector('#consept5');
tl.from(consept5, {
  y: 30,
  duration: 2,
  ease: "expo.out",
  autoAlpha: 0,
}, 1);

const sub5 = document.querySelector('.sub5');
tl.from(sub5, {
  y:30,
  duration: 2,
  delay: 0.3,
  ease: "expo.out",
  autoAlpha: 0,
}, 1);

const consept6 = document.querySelector('#consept6');
tl.from(consept6, {
  y: 30,
  duration: 2,
  ease: "expo.out",
  autoAlpha: 0,
}, 1);

const sub6 = document.querySelector('.sub6');
tl.from(sub6, {
  y:30,
  duration: 2,
  delay: 0.3,
  ease: "expo.out",
  autoAlpha: 0,
}, 1);

let change = swiper1.realIndex;

swiper1.on('slideChange', function() {
  if (change > -5) {
    console.log(change);
    tl.seek(0);
  }
});


