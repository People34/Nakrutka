function updateOrderInfo() {
    $('.services__card').each(function(index) {
        const quantityField = $(this).find('.services__card-input.sum');
        const quantity = parseInt(quantityField.val());
        const price = parseFloat($(this).find('.services__card-button.active').data('price'));
        const errmsgElement = $('#errmsg' + (index + 1));

        if (Number.isNaN(quantity) || quantity <= 0) {
            errmsgElement.text('Оберiть послугу');
            errmsgElement.removeClass('error');
        } else {
            const totalPrice = (price * quantity).toFixed(2);

            if (totalPrice < 70) {
                errmsgElement.addClass('error');
                errmsgElement.text('Мiнiмальна вартiсть 70 грн');
            } else {
                errmsgElement.removeClass('error');
                errmsgElement.text(`До сплати ${totalPrice} грн`);
            }
        }
    });
}

updateOrderInfo();

$('.services__card-done').on('click', function() {
    updateOrderInfo();
});

$('.services__card-input.sum').on('input', function() {
    updateOrderInfo();
});