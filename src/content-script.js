(() => {
  "use strict";
  
  // Функция для получения параметра из URL
  function getParam(url, name) {
    try {
      return new URLSearchParams(url.split('?')[1]).get(name);
    } catch (e) {
      return null;
    }
  }

  // Получаем текущий URL страницы
  const currentUrl = window.location.href;
  
  // Логируем значения параметров
  console.log("continue =", getParam(currentUrl, "continue"));
  console.log("client_id =", getParam(currentUrl, "client_id"));

  // Пример использования с другим URL
  const exampleUrl = "https://accounts.snapchat.com/v2/password?continue=%2Fv2%2Fwelcome&captchaChallenge=CioKKDZMZk5RV1lyQUFBQUFHQzkwSVc0a3VMaXdMQ3dNS2VhcEh0U1o5V1U&ai=aWNlb250aGVubm5lY2s%3D";
  const testParam = getParam(exampleUrl, "test");
  console.log("Test param:", testParam);
})();
