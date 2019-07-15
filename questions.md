1. Синтаксис для передачи переменных в шаблон.

Хорошее объяснение на SO - https://stackoverflow.com/a/42978464/274500


2. как можно показать прогресс бар который показывает загрузку модуля?

Есть событие RouteConfigLoadStart, на которое можно подписаться, чтобы получить состояние загрузки (загружено/незагружено).
https://stackoverflow.com/a/57017583/274500



3. как показывать статус 404 (Заголовки, когда ошибка в самом приложении)

Мы можем манипулировать заголовками с помощью специального сервис-провайдера - `response`

`constructor( @Optional() @Inject(response) response: any)`
 ...

`response.statusCode = 404`
`response.statusMessage = message`



4. Какая разница между markForCheck() и detectChanges()? 

подробный SO ответ - https://stackoverflow.com/a/41364469/274500
tl;dr;
markForCheck - применяем при OnPush стратегии, когда входящие параметры не изменились, но мы все равно хотим синхронизации
detectChanges - компонет исключили из дерева CD (то есть его не захватывает нормальный проход)



5. Инициализации приложения с дополенительными настройками, которые мы получаем с сервера

решение зависит от специфики проекта.
- мы можем подгружать дополнительные данные с помощью роутер гарда (https://angular.io/guide/router#resolve-guard)
- используя APP_INTIALIZER (https://stackoverflow.com/questions/49707830/angular-how-to-correctly-implement-app-initializer)
- в конструкторе модуля 

