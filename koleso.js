<div class="res" id='res'>Здесь будет показываться результат выполнения обработчика колесика мышки.</div>
<script>
function wheel(event){
    var delta = 0;
    if (!event) event = window.event; // Событие IE.
    // Установим кроссбраузерную delta
    if (event.wheelDelta) {
        // IE, Opera, safari, chrome - кратность дельта равна 120
        delta = event.wheelDelta/120;
    } else if (event.detail) {
        // Mozilla, кратность дельта равна 3
        delta = -event.detail/3;
    }
    if (delta) {
        // Отменим текущее событие - событие по умолчанию (скроллинг окна).
        if (event.preventDefault) {
            event.preventDefault();
        }
        event.returnValue = false; // для IE

        // если дельта больше 0, то колесо крутят вверх, иначе вниз
        var dir = delta > 0 ? 'Up' : 'Down';
        document.getElementById('res').innerHTML=dir+' '+Math.abs(delta);
    }
}
addEvent(window, 'mousewheel', wheel);
addEvent(window, 'DOMMouseScroll', wheel);
</script>
