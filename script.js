let output = document.getElementById('screen');

let buttons = Array.from(document.getElementsByClassName('key'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'RESET':
                output.innerText= '';
                break;
            case 'DEL':
                if(output.innerText){
                    output.innerText = output.innerText.slice(0, -1);
                }
                break;
            case '=':
                output.innerText = eval(output.innerText);
                break;
            case '.':
                if(output.innerText.includes('.')){
                    return;
                }
            default:
                output.innerText += e.target.innerText;
        }
    })
})


let theme = document.getElementById('theme-setting');
let root = document.querySelector(':root');
let logo = document.querySelector('.logo');
let equals = document.getElementById('equals');


theme.addEventListener('change', (e) => {
    switch(e.target.value){
        case '1':
            root.style.setProperty("--main-bg", "hsl(222, 26%, 31%)");
            root.style.setProperty("--toggle-bg", "hsl(223, 31%, 20%)");
            root.style.setProperty("--screen-bg", "hsl(224, 36%, 15%)");
            root.style.setProperty("--key-bg-blue", "hsl(225, 21%, 49%)");
            root.style.setProperty("--key-shdw-blue", "hsl(224, 28%, 35%)");
            root.style.setProperty("--key-bg-red", "hsl(6, 63%, 50%)");
            root.style.setProperty("--key-shdw-red", "hsl(6, 70%, 34%)");
            root.style.setProperty("--key-bg-orange", "hsl(30, 25%, 89%)");
            root.style.setProperty("--key-shdw-orange", "hsl(28, 16%, 65%)");
            root.style.setProperty("--dark-font", "hsl(221, 14%, 31%)");
            root.style.setProperty("--white", "#fff");
            logo.style.setProperty('color','var(--white)');
            output.style.setProperty('color','var(--white)');
            equals.style.setProperty('color','var(--white');
            break;
            
        case '2':
            root.style.setProperty("--main-bg", "hsl(0, 0%, 90%)");
            root.style.setProperty("--toggle-bg", "hsl(0, 5%, 81%)");
            root.style.setProperty("--screen-bg", "hsl(0, 0%, 93%)");
            root.style.setProperty("--key-bg-blue", "hsl(185, 42%, 37%)");
            root.style.setProperty("--key-shdw-blue", "hsl(185, 58%, 25%)");
            root.style.setProperty("--key-bg-red", "hsl(25, 98%, 40%)");
            root.style.setProperty("--key-shdw-red", "hsl(25, 99%, 27%)");
            root.style.setProperty("--key-bg-orange", "hsl(45, 7%, 89%)");
            root.style.setProperty("--key-shdw-orange", "hsl(35, 11%, 61%)");
            root.style.setProperty("--dark-font", "hsl(60, 10%, 19%)");
            root.style.setProperty("--white", "#fff");
            logo.style.setProperty('color','var(--dark-font)');
            output.style.setProperty('color','var(--dark-font)');
            equals.style.setProperty('color','var(--white');
            break;

        case '3':
            root.style.setProperty("--main-bg", "hsl(268, 75%, 9%)");
            root.style.setProperty("--toggle-bg", "hsl(268, 71%, 12%)");
            root.style.setProperty("--screen-bg", "hsl(268, 71%, 12%)");
            root.style.setProperty("--key-bg-blue", "hsl(281, 89%, 26%)");
            root.style.setProperty("--key-shdw-blue", "hsl(285, 91%, 52%)");
            root.style.setProperty("--key-bg-red", "hsl(176, 100%, 44%)");
            root.style.setProperty("--key-shdw-red", "hsl(177, 92%, 70%)");
            root.style.setProperty("--key-bg-orange", "hsl(268, 47%, 21%)");
            root.style.setProperty("--key-shdw-orange", "hsl(290, 70%, 36%)");
            root.style.setProperty("--dark-font", "hsl(52, 100%, 62%)");
            root.style.setProperty("--white", "#fff");
            logo.style.setProperty('color','var(--dark-font)');
            output.style.setProperty('color','var(--dark-font)');
            equals.style.setProperty('color','hsl(198, 20%, 13%)');
            break;

        default:
            return; 
    }
})