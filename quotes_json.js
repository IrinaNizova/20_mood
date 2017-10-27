(function () {
quotes_json = [
      {
        "phrase": "Кукурузные хлопья - теперь без асбеста!",
        "signature": "©Неизвестный маркетолог"
      },
      {
        "phrase": "Собираюсь жить вечно, пока всё идёт нормально"
      },
      {
        "phrase": "Вывеска над кафе — '\u003cМы открылись\u003e'. Что-то не так. Где же '\u003c/Мы открылись\u003e'?"
      },
      {
        "phrase": "Если ты будешь усердно работать по 8 часов в день, то обязательно станешь боссом и начнешь работать по 12"
      },
      {
        "phrase": "Самая тяжелая работа-её отсутствие!",
        "signature": "Рубен Багаутдинов"
      },
      {
        "phrase": "Ради денег люди готовы пойти на ВСЁ! Даже на работу..."
      },
      {
        "phrase": "Я люблю работу: она захватывает меня целиком. Я могу часами сидеть и смотреть, как другие работают",
        "signature": "Д.К.Джером"
      },
      {
        "phrase": "Работа избавляет нас от трех великих зол: скуки, порока и нужды",
        "signature": "Вольтер"
      },
      {
        "phrase": "Брак без любви чреват любовью без брака",
        "signature": "Бенджамин Франклин"
      }
    ]

  var quote_num = Math.round(Math.random() * (quotes_json.length - 1))
  document.getElementsByClassName('quote')[0].textContent = quotes_json[quote_num]['phrase'];

  if (quotes_json[quote_num]['signature']==undefined) {
    document.getElementsByClassName('quote-autor')[0].classList.add('no-display');
  } else {
    document.getElementsByClassName('quote-autor')[0].textContent = quotes_json[quote_num]['signature'];
  }
})();
