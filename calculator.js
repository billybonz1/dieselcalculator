$( function() {
    $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: '&#x3c;Пред',
        nextText: 'След&#x3e;',
        currentText: 'Сегодня',
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthNamesShort: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
        dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        weekHeader: 'Нед',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['ru']);
    $( "#datepicker" ).datepicker({
        dateFormat: "dd.mm.yy"
    });


    var date = new Date();
    var month = date.getMonth() + "";

    if(month.length == 1){
        month = "0" + month;
    }

    var currentDate = date.getDate() + "." + month + "." + date.getFullYear();
    $( "#datepicker" ).val(currentDate);



    function calculate(){
        var volume = parseInt($("[name=value_fuel]").val());
        var type = $("[name=type_of_fuel]:checked");
        var type_val = 0;

        if(volume){
            if(volume < 5000){
                type_val = parseFloat(type.data("value1"));
            }else if(volume >= 5000 && volume <= 10000){
                type_val = parseFloat(type.data("value2"));
            }else{
                type_val = parseFloat(type.data("value3"));
            }
        }else{
            type_val = parseFloat(type.data("value1"));
        }


        if(type_val != 0){
            $(".price1 span").text(type_val);
            $(".price1").show();
            $('[data-name="fuel_type"]').hide();
        }else{
            $(".price1").hide();
            $('[data-name="fuel_type"]').show();
        }

        if(volume && type_val){
            var price = type_val*volume;
            $(".price2 span").text(price);
            $(".price2").show();
            $('[data-name="fuel_liters"]').hide();
        }else{
            $(".price2").hide();
            $('[data-name="fuel_liters"]').show();
        }




        console.log(volume,type_val);
    }




    $("[name=type_of_fuel]").change(function(){
        calculate();
    });


    $("[name=value_fuel]").on("keyup", function(){
        calculate();
    });


} );