// ===== Учебный скрипт (специально неоптимизированный) =====

// Тяжёлая синхронная работа — блокирует рендеринг
(function heavyWork() {
  var result = 0;
  for (var i = 0; i < 8000000; i++) {
    result += Math.sqrt(i) * Math.sin(i);
  }
  console.log('Heavy work done:', result);
})();

// Бесполезная функция, которая нигде не используется
function unusedHelper(a, b) {
  var total = 0;
  for (var i = 0; i < a; i++) {
    for (var j = 0; j < b; j++) {
      total += i * j;
    }
  }
  return total;
}

// Ещё один неиспользуемый блок
var config = {
  apiUrl: 'https://example.com/api',
  timeout: 5000,
  retries: 3,
  debug: true,
  version: '1.0.0',
  features: ['a', 'b', 'c', 'd', 'e']
};

// Инициализация после загрузки DOM
document.addEventListener('DOMContentLoaded', function () {
  console.log('Site loaded at', new Date().toISOString());
});