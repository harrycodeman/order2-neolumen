// Создаем обработчик загрузки страницы:
DG.autoload(function() {
    // Создаем объект карты, связанный с контейнером:
    var myMap = new DG.Map('myMapId');
    // Устанавливаем центр карты, и коэффициент масштабирования:
    myMap.setCenter(new DG.GeoPoint(84.950797872257,56.482352330204), 16);
    // Добавляем элемент управления коэффициентом масштабирования:
    myMap.controls.add(new DG.Controls.Zoom());

    // Создаем балун:
    var myBalloon = new DG.Balloons.Common({
        // Местоположение на которое указывает балун:
        geoPoint: new DG.GeoPoint(84.950797872257,56.482352330204),
        // Устанавливаем текст, который будет отображатся при открытии балуна:
        contentHtml: 'Привет!<br>Вы кликнули по мне :)'
    });
    // Создаем маркер:
    var myMarker = new DG.Markers.Common({
        // Местоположение на которое указывает маркер:
        geoPoint: new DG.GeoPoint(84.950797872257,56.482352330204),
        // Функция, вызываемая при клике по маркеру
        clickCallback: function() {
            if (! myMap.balloons.getDefaultGroup().contains(myBalloon)) {
                // Если балун еще не был добавлен на карту, добавляем его:
                myMap.balloons.add(myBalloon);
            } else {
                // Показываем уже ранее добавленный на карту балун
                myBalloon.show();
            }
        }
    });
    // Добавить маркер на карту:
    myMap.markers.add(myMarker);
});