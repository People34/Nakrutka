// Функция, которая будет вызываться при клике на кнопку "Замовити"
function updateOrderInfo() {
    const quantityField = document.querySelector('.services__card-input.sum');
    const quantity = parseInt(quantityField.value);
    const price = parseFloat(document.querySelector('.services__card-button.active').dataset.price);
    
    // Проверка на заполненность поля с количеством
    if (Number.isNaN(quantity) || quantity <= 0) {
        const errmsgElement = document.getElementById('errmsg');
        errmsgElement.innerHTML = 'Оберiть послугу';
        errmsgElement.classList.remove('error');
    } else {
        const totalPrice = (price * quantity).toFixed(2); // Округляем до 2 знаков после запятой
        const errmsgElement = document.getElementById('errmsg');
        errmsgElement.innerHTML = `До сплати ${totalPrice} грн`;
        
        // Добавляем класс "error" если заказ меньше 70 грн
        if (totalPrice < 70) {
            errmsgElement.classList.add('error');
        } else {
            errmsgElement.classList.remove('error');
        }
    }
}

// Вызываем функцию для обновления информации о заказе при загрузке страницы
updateOrderInfo();

// Находим все кнопки "Замовити" и добавляем обработчик клика для каждой из них
const orderButtons = document.querySelectorAll('.services__card-done');
orderButtons.forEach(button => button.addEventListener('click', updateOrderInfo));

// Добавляем обработчик изменения для поля с количеством
const quantityField = document.querySelector('.services__card-input.sum');
quantityField.addEventListener('input', updateOrderInfo);