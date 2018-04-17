// START
// Description:
// Анонимная самовызывающаяся функция для удаления приглашений в группы.
// Usage:
// Заходим в Vk на свою страницу, открываем "Группы" 
// 1 вариант: открываем консоль (F12->console) и вставляем следующий код:

var cancel_invites = setTimeout (function cancel() {
	var row = document.querySelector('#groups_invites_wrap .group_list_row');
		 if (row) {
		 	var btn = row.querySelector('.group_row_buttons .button_light');
		 if (btn) btn.click();
		 row.parentElement.removeChild(row);
		} else {clearTimeout(cancel_invites);}
		if (document.querySelector('#ui_invites_load_more')) {
		 document.querySelector('#ui_invites_load_more').click();
		}
		 cancel_invites = setTimeout (cancel, 400);
}, 400);

// 2 вариант: в браузерной строке вводим тот же самый код, но без пробелов и с приставкой "javascript":
javascript:var cancel_invites=setTimeout(function cancel(){var a=document.querySelector("#groups_invites_wrap .group_list_row");if(a){var b=a.querySelector(".group_row_buttons .button_light");b&&b.click();a.parentElement.removeChild(a)}else clearTimeout(cancel_invites);document.querySelector("#ui_invites_load_more")&&document.querySelector("#ui_invites_load_more").click();cancel_invites=setTimeout(cancel,400)},400);

//END

// START
// Description:
// Прокрутка страницы до самого низа с учетом подгрузки с сервера. Так же есть функция прокрутки до верха.
// Usage:
// Можно использовать, например во Вконтакте: на странице пользователя прокрутить его стену до самого низа.
// открываем консоль (F12->console) и вставляем следующий код:

var timerId = setTimeout(function tick() {
  var new_scroll_top = document.documentElement.scrollTop;            	
  window.scrollTo(0, document.documentElement.scrollHeight);
  if (document.documentElement.scrollTop == new_scroll_top) {
  	clearTimeout(timerId);
  } else {
  	timerId = setTimeout(tick, 500);
  }
}, 500);

// прокрутка до самого верха страницы:
window.scrollTo(0, 0);

//END

// START
// Description:
// Instagram. Ставим лайки всем подряд в ленте новостей (версия браузера естесственно)
// Usage:
// открываем консоль (F12->console) и вставляем следующий код:

var n = 0;
var k = 0;
var timerId = setTimeout (function like(){
	var len = document.querySelectorAll('._l9yih').length;
	if ( document.querySelectorAll('._l9yih span')[len - 1].innerHTML == "Нравится") {
		document.querySelectorAll('._l9yih')[len - 1].click();
	}
	window.scrollTo(0, n += 1000);
	k++;
	if (k > 30) { //не более 60 лайков в час, а то блокировка
		clearTimeout(timerId);
	} else {
	timerId = setTimeout (like, 500);
	}
}, 500);

//END

// START
// Description:
// Instagram. Жестко лайкаем чью-нить страничку.
// Usage:
// Открываем нужный аккаунт, жмем на первую фотку, открываем консоль (F12->console) и вставляем следующий код:

 var k = 0;
 var timerId = setTimeout (function like() {	
	if (k > 50 || (!document.querySelector('._3a693'))) { //не более 60 лайков в час, а то блокировка
		clearTimeout(timerId);
	} else {
		if ( document.querySelector('._l9yih span').innerHTML == "Нравится") {
 			document.querySelector('._l9yih').click();//ставим лайк
 			k++; //увеличиваем счетчик
 		} 
 		document.querySelector('._3a693').click();//перелистываем
		timerId = setTimeout (like, 1000 * Math.floor(Math.random() * 5 + 1));//для перестраховки интервал рандомный, можно настроить по-другому с любым интервалом
	}
}, 500);

 if ( document.querySelector('._l9yih span').innerHTML == "Нравится") {
 	document.querySelector('._l9yih').click();//ставим лайк
 } else {
 	document.querySelector('._3a693').click();//перелистываем
 }

//END
