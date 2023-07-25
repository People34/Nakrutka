function updateOrderInfo() {
    // Находим все карточки services__card
    $('.services__card').each(function(index) {
        const quantityField = $(this).find('.services__card-input.sum');
        const quantity = parseInt(quantityField.val());
        const price = parseFloat($(this).find('.services__card-button.active').data('price'));
        const errmsgElement = $('#errmsg' + (index + 1));

        // Проверка на заполненность поля с количеством
        if (Number.isNaN(quantity) || quantity <= 0) {
            errmsgElement.text('Оберіть кількість');
            errmsgElement.removeClass('error');
        } else {
            const totalPrice = (price * quantity).toFixed(2);
            errmsgElement.text(`До сплати ${totalPrice} грн`);

            // Добавляем класс "error" если заказ меньше 70 грн
            if (totalPrice < 70) {
                errmsgElement.addClass('error');
            } else {
                errmsgElement.removeClass('error');
            }
        }
    });
}

// Вызываем функцию для обновления информации о заказе при загрузке страницы
updateOrderInfo();

// Находим все кнопки "Замовити" и добавляем обработчик клика для каждой из них
$('.services__card-done').on('click', updateOrderInfo);

// Добавляем обработчик изменения для поля с количеством
$('.services__card-input.sum').on('input', updateOrderInfo);