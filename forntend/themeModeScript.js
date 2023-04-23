const switchButton = document.getElementById('switherTheme');
const icoButton = document.getElementById('ico');
const myPhoto= document.getElementById('myPhoto');
const theme = document.getElementById('theme');
switchButton.addEventListener('click', switchThemeProcess);
icoButton.addEventListener('dblclick',rainbowMode)
var mode = 'light';

function switchThemeProcess(){
if(mode=='light'){
    darkMode(); 
    mode='dark';
}else{
    lightMode();
    mode='light';
}
};


function lightMode(){
    theme.href = "style-light.css";
    myPhoto.attributes.src.value='img/myPhoto.png';
    icoButton.attributes.src.value='img/ico.png';
};

function darkMode(){
    theme.href = "style-dark.css";
    myPhoto.attributes.src.value='img/myPhotoDark.png';
    icoButton.attributes.src.value='img/icoDark.png';
};

function rainbowMode(){
if(theme.href != "style-raibow.css"){
    theme.href = "style-raibow.css";
}else{
        lightMode();
    }

};