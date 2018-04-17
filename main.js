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
