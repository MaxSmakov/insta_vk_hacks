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
