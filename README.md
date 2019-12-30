Задание из github.com/maxfarseer/tz-webinars

## Тестовое задание #2

**Цель**: выяснить уровень знаний React/Redux/React-Router. Уровень работы с асинхронными запросами. Понимание взаимодействия клиента и сервера.

Явдяется продолжением первого [варианта задания](https://github.com/mansMS/test-maxfarseer-1/tree/master).

Для старта можете использовать [репозиторий](репозиторий) из тестового задания #1 ([сайт](https://maxpfrontend.ru/vebinary/razbor-testovogo-zadaniya-react-junior-razrabotchika/), [vk](https://vk.com/maxpfrontend?w=wall-151851243_78)) или лучше решите первое задание сами.

### Предподготовка

Внешний вид приложения и прочие моменты:

+ верхнее / боковое меню с навигацией
+ Логин ( `/login`)
+ Новости (список новостей, роут `/news`)
+ Профиль (страница с информацией о пользователе, `/profile`)
+ Кнопка «войти/выйти»
+ Страница `/profile` недоступна для тех, кто не залогинился.

### Бэкэнд

Приложение использует простой «бэк» расположенный на heroku. Свой бэкэнд делать не нужно.

Для проверки доступности бэкэнда, можете перейти по адресу:

[https://mysterious-reef-29460.herokuapp.com/api/v1/](https://mysterious-reef-29460.herokuapp.com/api/v1/)

***

### Удачный логин + редирект

Форма для входа включает в себя 2 поля: email + пароль.
По нажатию на «логин» (или после нажатия клавиши Enter) уходит POST запрос с введенными данными на бэкэнд.

Адрес и метод для запроса:

```
POST https://mysterious-reef-29460.herokuapp.com/api/v1/validate
```

Если введены корректные данные: (**email** = 'max@test.com', **password** = '12345', **content-type**: application/json), ответ будет:

```
{
  "status": "ok",
  "data": {
    "id": 1
  }
}
```

В случае успеха — пользователя нужно редиректить на страницу профиля, на которой будет нужно получить подробную информацию о пользователе. Об этом ниже в разделе **Профиль**. Для выполнения этой задачи, рекомендую полученный id сохранять в стор (в какой-то из редьюсеров).

Обратите внимание на название полей (username, password), на их значения (строковые) и на то, что это **POST** запрос.

Если введены некорректные данные, то нужно уметь обрабатывать ответ с ошибкой:

```
{
  "status": "err",
  "message": "wrong_email_or_password"
}
```

После получения такого ответа, необходимо очистить из формы поле пароля (email не трогать) и показать красивое сообщение об ошибке: *Имя пользователя или пароль введены не верно*.

Дополнительно:

+ организовать код таким образом, чтобы можно было легко показывать сообщения на различные сообщения об ошибке от сервера.

+ сделать обработку возможной сетевой ошибки с текстом: *Сервер не доступен*

Запрос должен быть выполнен через традиционный redux-подход: то есть мы «диспатчим (вызываем) экшены и сохраняем необходимое в редьюсере».

### Профиль

На странице профиля необходимо сделать GET запрос, и получить подробную информацию о пользователе:

```
GET https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/:id
```

В реальном приложении, после user-info мог бы быть **любой** id, в нашем случае — это id 1, значит запрос должен выглядеть так:

```
https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/1
```

Ответ:

```
{
  "status": "ok",
  "data": {
    "userId": 1,
    "city": "Москва",
    "languages": [
      "English",
      "Русский"
    ],
    "social": [
      {
        "label": "vk",
        "link": "vk.com/maxpfrontend"
      },
      {
        "label": "telegram",
        "link": "t.me/maxpfrontend"
      },
      {
        "label": "web",
        "link": "https://maxpfrontend.ru"
      },
      {
        "label": "youtube",
        "link": "https://www.youtube.com/channel/UCqJyAVWwIqPWKEkfCSP1y4Q"
      },
      {
        "label": "twitter",
        "link": "https://twitter.com/MaxPatsiansky"
      },
      {
        "label": "twitch",
        "link": "http://twich.tv/maxpfrontend"
      }
    ]
  }
}
```

Полученные данные, положить в стор, и отрисовать на странице следующим образом:

```
Город: Москва

Знание языков:
 + English
 + Русский

Ссылки:

+ ссылка-иконка 1
+ ссылка-иконка 2
...

(
  т.е. кликабельная иконка каждого из сервисов.
  Ссылка открывается в новом окне
)

```


В требовании к задаче, «дизайнер» захотел, чтобы сайт (web) был первым в списке, а бэкэнд-разработчик ответил, что ему «пофиг и некогда». Поэтому, сайт нужно отрисовать первым своими силами (то есть, как-то обработать входящие данные с MockAPI). Все остальное в любом порядке.

Дополнительно:

+ обработать ситуацию, когда пользователь не найден.

Запрос:

```
GET https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/2
```

Ответ:

```
{
  "status": "err",
  "message": "user_not_found"
}
```

### Новости

На странице, нужно вывести новости в формате «заголовок» + «текст».
Внизу страницы — «всего новостей ХХ» (зависит от количества новостей, в нашем случае это всегда «2», но вы должны сделать это число не «захардкоженным»)

Если говорить, словами «разработчиков», то API endpoint:

```
GET https://mysterious-reef-29460.herokuapp.com/api/v1/news
```

Если словами «новичков» — нужно сделать GET запрос, по адресу выше.

Ответ:

```
{
  "status": "ok",
  "data": [
    {
      "id": 1,
      "title": "Не слишком ли быстро мы переходим на беспилотные автомобили",
      "text": "Автопроизводители и высокотехнологичные компании, тратящие миллиарды долларов на развитие беспилотных автомобилей и грузовиков, вовсю рекламируют автоматический транспорт, который, по их мнению, будет безопаснее, чище и сделает общество более мобильным."
    },
    {
      "id": 2,
      "title": "Интеллектуальная собственность: где заканчивается цитирование и начинается плагиат",
      "text": "Компьютерная программа или роман — это в первую очередь идея, творческий замысел. Но человек, купивший книгу, хоть и стал собственником её обложки и страниц, не может присвоить себе то, что написал или нарисовал автор, и продавать романы под своим именем. Иными словами, интеллектуальная собственность — это придуманный и созданный человеком результат. И одновременно с этим — права на него."
    }
  ]
}
```

Новости должны храниться в соответствующем редьюсере.

### Войти/Выйти

Кнопка просто меняет свое состояние. Если пользователи уже залогинился — «Выйти», если нет — «Войти»

### Требования

+ Внимание к деталям.

+ Для асинхронных запросов использовать redux-thunk, можно ducks или любой другой подход. Использование «саг» для такой задачи не рекомендуется.

+ Пока новости / профиль грузятся — показывать прелоадер (использовать редьюсеры и экшены, как того требует redux).

+ Пока запрос на логине «в процессе» блокировать повторные запросы (самый легкий способ, это блокировать нажатия кнопки Enter + сделать disabled кнопку отправки формы). Разумеется, чтобы пользователю было понятнее, текст disabled кнопки можно сделать: «Проверяю…» либо прелоадер как на профиле/новостях.

+ В форме показывать ошибку + стандартную валидацию email (по типу инпута, либо по регулярному выражению).
