function kirimPesan(){

    var name = document.getElementById('name');  
    var instagram = document.getElementById('instagram');  
    var message = document.getElementById('message');
    
    var gabungan = 'name%3A%0A' + name.value  + '%0Ainstagram%3A%0A' + instagram.value  + '%0Amessage%3A%0A' + message.value;

    var token = '6960030201:AAEu028kVzv9Uw5ZdctFNS0UoiRjA11ehMs';
    var grup = '-1002133334535';
    var chat_id ='6583013893';

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
    })
}
