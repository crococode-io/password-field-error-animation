/**
 * demo.js
 * https://www.instagram.com/croco.code/
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2022, CROCO.CODE
 * https://www.instagram.com/croco.code/
 */

let errorMessage = document.querySelector('.error-message');
let passwordDiv = document.querySelector('.password-holder');
let unlock = passwordDiv.querySelector('.unlock');

unlock.addEventListener('click', function() {
  if (passwordDiv.querySelector("input").value) {

    var tl = new TimelineMax();

    tl.fromTo(passwordDiv, 0.075, { x: -4 }, { x: 8, ease: "slow(0.0325, 0.075)",  clearProps: "x" })
      .to($('body'), 0.15, {
        backgroundColor: '#E74C3C'
      })
      .to(errorMessage, 0.15, {
        autoAlpha: 1,
        y: -16
      }, "-=0.15")
      .to(passwordDiv, 0.15, {
        className: "password-holder false"
      }, "-=0.15")
      .to(passwordDiv, 0.15, {
        className: "password-holder"
      }, "+=2.5")
      .to($('body'), 0.15, {
        backgroundColor: '#EDF0F9'
      }, "+=0.65")
      .to(errorMessage, 0.15, {
        autoAlpha: 0,
        y: 0
      }, "-=0.15");

  }
});
