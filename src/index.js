// Swiper ------------------------------------------------------------------------------------------
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';
// swiper1 ////////////////////////////////////////////////////////
const swiper1 = new Swiper('.swiper-1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  const titleList1 = [
    '1つ目のタイトル',
    '2つ目のタイトル',
    '3つ目のタイトル',
    '4つ目のタイトル',
    ]

  const swiperTitle = document.getElementById('swiper-title');
  const titleText = titleList1[swiper1.realIndex];
  let titleElement = document.createTextNode(titleText);
  swiperTitle.appendChild(titleElement);

  swiper1.on('slideChange', function() {
    console.log(swiper1.realIndex);

    if (titleElement) {
        titleElement.remove();
    }
    const titleText = titleList1[swiper1.realIndex];
    titleElement = document.createTextNode(titleText);

    swiperTitle.appendChild(titleElement);

  });

// swiper2 ////////////////////////////////////////////////////////
const swiper2 = new Swiper('.swiper-2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  const titleList2 = [
    'Aです',
    'Bです',
    'Cです',
    ]

  const swiperTitle2 = document.getElementById('swiper-title-2');
  const titleText2 = titleList2[swiper2.realIndex];
  let titleElement2 = document.createTextNode(titleText2);
  swiperTitle2.appendChild(titleElement2);

  swiper2.on('slideChange', function() {

    if (titleElement2) {
        titleElement2.remove();
    }
    const titleText = titleList2[swiper2.realIndex];
    titleElement2 = document.createTextNode(titleText);
    
    swiperTitle2.appendChild(titleElement2);

  });

// JustValidate ------------------------------------------------------------------------------------------

import JustValidate from 'just-validate';
const validator = new JustValidate('#basic_form');

validator
.addField('#basic_name', [
    {
        rule: 'required',
        errorMessage: '入力必須項目です',
    },
    {
        rule: 'minLength',
        value: 3,
        errorMessage: '3文字以上で入力してください',
    },
    {
        rule: 'maxLength',
        value: 15,
        errorMessage: '15文字以内です',
    },
])
.addField('#basic_email', [
    {
        rule: 'required',
        errorMessage: '入力必須項目です',
    },
    {
        rule: 'email',
        errorMessage: 'メールアドレスを入力してください',
    },
])
.addField('#basic_password', [
    {
        rule: 'required',
        errorMessage: '入力必須項目です',
    },
    {
        rule: 'password',
        errorMessage: '8文字以上、文字1つ以上、数字1つ以上で記入してください',
    },
])
.addField('#basic_age', [
    {
        rule: 'required',
        errorMessage: '入力必須項目です',
    },
    {
        rule: 'number',
        errorMessage: '数字で入力してださい',
    },
    {
        rule: 'minNumber',
        value: 18,
        errorMessage: '未成年の方は送信できません',
    },
    {
        rule: 'maxNumber',
        value: 150,
        errorMessage: '150歳以上の方はギネス世界記録に申請してください。申請してからご記入いただけます',
    },
])
.addField('#basic_address', [
    {
        rule: 'required',
        errorMessage: '入力必須項目です',
    },
])
.onSuccess((event) =>{
    let formData = new FormData(event.target);
    console.log(formData.get("name"));
    console.log(formData.get("email"));
    console.log(formData.get("password"));
    console.log(formData.get("age"));
    console.log(formData.get("address"));
  });