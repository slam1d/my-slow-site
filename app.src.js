// ===== Оптимизированный скрипт =====
// Удалено: heavyWork() — синхронный цикл 8 млн итераций в <head> (блокировал рендеринг)
// Удалено: unusedHelper(), config — неиспользуемый мёртвый код
// Добавлено: defer в теге <script> — загрузка не блокирует отрисовку

document.addEventListener('DOMContentLoaded', function () {
  console.log('Site loaded at', new Date().toISOString());
});
