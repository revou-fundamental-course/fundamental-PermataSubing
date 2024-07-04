// Ini Javascript

function validateForm() {
    let firstName = document.querySelector('#firstname').value;
    let lastName = document.querySelector('#lastname').value;

    console.log(firstName);
    console.log(lastName);

        if (firstName != '' && lastName != '') {
            document.getElementById('result').innerHTML = firstName + ' '+ lastname;
        } else {
            alert('Inputan ada yang kosong');
        }
}

let indexSlide = 1; // [0,1,2]
showSlide(1);

function nextSlide(n){
    showSlide(indexSlide += n)
    console.log('indexSlide kita tambah ' + n);
    console.log(indexSlide + 'Ini NextSlide');
}

function showSlide(n){
    let listImage = document.getElementsByClassName('banner-item');
    if (n >= listImage.length) indexSlide = 1;
    console.log(n + ' Ini N di showslide')

    let index = 0;
    while (index < listImage.length) {
        listImage[index].style.display = 'none';
        index++;
    }

    listImage[indexSlide - 1].style.display = 'block';
    console.log(indexSlide - 1 + 'Ini ShowSlide');
}