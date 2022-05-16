var sw = 0;
var sw2 = 0;
var finishanim = 0;
const emailshower = document.getElementById("emailshow");
const pshower = document.getElementById("pshow");
const phoneshower = document.getElementById("phoneshow");
const pshower2 = document.getElementById("pshow2");

function emailshow() {
    if (finishanim == 0) {
        if (sw == 0) {
            showaboutanim(emailshower, pshower);
            if (sw2 != 0) {
                phoneshower.style.display = "none";
                pshower2.style.opacity = 0;
                phoneshower.style.width = "0px";
                sw2 = 0;
            }
            emailshower.style.display = "inline-block";
            sw = 1;
        } else {
            if (sw2 != 0) {
                phoneshower.style.display = "none";
                pshower2.style.opacity = 0;
                phoneshower.style.width = "0px";
                sw2 = 0;
            }
            emailshower.style.display = "none";
            pshower.style.opacity = 0;
            emailshower.style.width = "0px";
            sw = 0;
        }
    }
}

function phoneshow() {
    if (finishanim == 0) {
        if (sw2 == 0) {
            showaboutanim(phoneshower, pshower2);
            if (sw != 0) {
                emailshower.style.display = "none";
                pshower.style.opacity = 0;
                emailshower.style.width = "0px";
                sw = 0;
            }
            phoneshower.style.display = "inline-block";
            sw2 = 1;
        } else {
            if (sw != 0) {
                emailshower.style.display = "none";
                pshower.style.opacity = 0;
                emailshower.style.width = "0px";
                sw = 0;
            }
            phoneshower.style.display = "none";
            pshower2.style.opacity = 0;
            phoneshower.style.width = "0px";
            sw2 = 0;
        }
    }
}

function showaboutanim(eshow, pshow) {
    finishanim = 1;
    var pos = 0;
    var id = setInterval(frame, 1);
    function frame() {
        if (pos >= 251) {
            clearInterval(id);
            pshow.style.opacity = 1;
            finishanim = 0;
        } else {
            if (pos <= 200)
                pos += 5;
            else pos += 0.5;
            eshow.style.width = pos + 'px';
        }
    }
}