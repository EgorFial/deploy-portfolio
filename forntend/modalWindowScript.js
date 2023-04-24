const value={
    email:'',
    text:''
    };



const modalWindow = document.getElementById('modal-conteiner');
const openModalButton = document.getElementById('open-modal');
const closeModalButton = document.getElementById('close-modal');

openModalButton.addEventListener('click', showModalWindow);
closeModalButton.addEventListener('click',closeModalWindow);

function showModalWindow(){
    modalWindow.style.display = 'block';
    document.body.classList.add("no-scrol");

}


function closeModalWindow(){
    modalWindow.style.display = 'none';
    document.body.classList.remove("no-scrol");
}


const massage = document.getElementById('message');
const guestEmail = document.getElementById('email');
const sendMassageButton = document.getElementById('send-btn');
sendMassageButton.addEventListener('click',sendMassageProcess);

function sendMassageProcess(){
if(guestEmail.value.indexOf('@')=='-1' || guestEmail.value == '' || massage.value==''){
    return 0;
}
value.email=guestEmail.value;
value.text= massage.value;
sendToBackEnd();
alert('Message sent');
closeModalWindow();
};


function sendToBackEnd(){

const xhr = new XMLHttpRequest();
const url = 'http://127.0.0.1:5000/send';
  
xhr.open('POST', url);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send(JSON.stringify(value));

xhr.onload = ()=>{
console.log(xhr.response);
};

};

