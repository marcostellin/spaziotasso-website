const secondsBetween = 10;
const secondsFading = 1;

const slideshow = {
  '0' : 'img/landing1.jpg',
  '1' : 'img/landing2.jpg',
  '2' : 'img/landing3.jpg',
  '3' : 'img/landing4.jpg',
  cur : 1,
  next: function () {
    this.cur++;

    if (this.cur > 2)
      this.cur = 1;

    return this[this.cur.toString()];
  }
}

setInterval( () => {
  $('.cover').fadeToggle(secondsFading * 1000, 'linear', () => {
    if ($('.cover').css('display') === 'none') {
      $('.cover').css('background-image', `url(${ slideshow.next() })`);
    } else {
      $('header').css('background-image', `url(${ slideshow.next() })`);
    }
  });

}, secondsBetween * 1000);

