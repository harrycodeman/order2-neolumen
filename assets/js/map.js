// Создаем обработчик загрузки страницы:
DG.autoload(function() {
    // Создаем объект карты, связанный с контейнером:
    var myMap = new DG.Map('myMapId');
    // Устанавливаем центр карты, и коэффициент масштабирования:
    myMap.setCenter(new DG.GeoPoint(73.431275,61.251404), 16);
    // Добавляем элемент управления коэффициентом масштабирования:
    myMap.controls.add(new DG.Controls.Zoom());

    // Создаем балун:
    var myBalloon = new DG.Balloons.Common({
        // Местоположение на которое указывает балун:
        geoPoint: new DG.GeoPoint(73.431275,61.251404),
        // Устанавливаем текст, который будет отображатся при открытии балуна:
        contentHtml: 'Здравствуйте<br>Мы находимся тут'
    });
    // Создаем маркер:
    var myMarker = new DG.Markers.Common({
        // Местоположение на которое указывает маркер:
        geoPoint: new DG.GeoPoint(73.431275,61.251404),
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