function sayHi(){
    let nama = document.getElementById('text').value;
    let done = document.getElementById('done').value;
    let option = document.getElementById('select-option').value;
    let type = document.getElementById('type').value;

    if (nama == ""){
        alert("Name Can't be Empty")
    }else if (done == ""){
        alert("E-mail Can't be Empty")
    }else if (option == ""){
        alert("Option Can't be Empty")
    }else if (type == ""){
        alert("Message Can't be Empty")
    }

    if (document.getElementById('cm').checked & document.getElementById('cf').checked){
        console.log(document.getElementById('cm').value + document.getElementById('cf').value);
    }else if (document.getElementById('cm').checked) {
        console.log(document.getElementById('cm').value);
    }else if (document.getElementById('cf').checked) {
        console.log(document.getElementById('cf').value);
    }
    
    console.log(nama, done, option, type);

    let penerima = 'koregawa10@yahoo.com'

    let bodoh = document.createElement('a');
    
    bodoh.href= `mailto: ${penerima}?subject=${option}&body=Hello. My name is ${nama} I wanted to let you know that i have a notice that "${type}". You can tell me via ${done} if its fixed`;

    bodoh.click();

    let objekForm ={
        username: nama,
        email: done,
        course: option,
        message: type,
    }
    console.log(objekForm)
}