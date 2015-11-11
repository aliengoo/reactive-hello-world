import Rx from 'rx';
import $ from 'jquery';

window.jQuery = $;

var input = document.querySelector("[name='first-name']");
var helpBlock = document.querySelector(".help-block");

let keydownStream = Rx.Observable.fromEvent(input, 'keydown');

keydownStream
  .subscribe(event => {

  });
