let display = document.querySelector("#display");

let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");

let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");

let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");

let zero = document.querySelector("#zero");

let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let multiply = document.querySelector("#multiply");
let divide = document.querySelector("#divide");
let clear = document.querySelector("#clear");
let equal = document.querySelector("#equal");
let isEqualClicked = false;

seven.addEventListener('click',()=>{
    let str = String(display.value);
    if(str.length < 15 || isEqualClicked)
    {
        if(isEqualClicked)
        {
            str = "7";
            isEqualClicked = false;
        } else if(str == "0")
        {
            str = "7";
        } else {
            str = str + "7";
        }
    } else {
        alert("Maxmimum size is 15!");
    }
    display.value = str;
});

eight.addEventListener('click',()=>{
    let str = String(display.value);
    if(str.length < 15 || isEqualClicked)
    {
        if(isEqualClicked)
        {
            str = "8";
            isEqualClicked = false;
        } else if(str == "0")
        {
            str = "8";
        } else {
            str = str + "8";
        }
    } else {
        alert("Maxmimum size is 15!");
    }
    display.value = str;
});

nine.addEventListener('click',()=>{
    let str = String(display.value);
    if(str.length < 15 || isEqualClicked)
    {
        if(isEqualClicked)
        {
            str = "9";
            isEqualClicked = false;
        } else if(str == "0")
        {
            str = "9";
        } else {
            str = str + "9";
        }
    } else {
        alert("Maxmimum size is 15!");
    }
    display.value = str;
});

four.addEventListener('click',()=>{
    let str = String(display.value);
    if(str.length < 15 || isEqualClicked)
    {
        if(isEqualClicked)
        {
            str = "4";
            isEqualClicked = false;
        } else if(str == "0")
        {
            str = "4";
        } else {
            str = str + "4";
        }
    } else {
        alert("Maxmimum size is 15!");
    }
    display.value = str;
});

five.addEventListener('click', ()=>{
    let str = String(display.value);
    if(str.length < 15 || isEqualClicked)
    {
        if(isEqualClicked)
        {
            str = "5";
            isEqualClicked = false;
        } else if(str == "0")
        {
            str = "5";
        } else {
            str = str + "5";
        }
    } else {
        alert("Maxmimum size is 15!");
    }
    display.value = str;
});

six.addEventListener('click',()=>{
    let str = String(display.value);
    if(str.length < 15 || isEqualClicked)
    {
        if(isEqualClicked)
        {
            str = "6";
            isEqualClicked = false;
        } else if(str == "0")
        {
            str = "6";
        } else {
            str = str + "6";
        }
    } else {
        alert("Maxmimum size is 15!");
    }
    display.value = str;
});

one.addEventListener('click',()=>{
    let str = String(display.value);
    if(str.length < 15 || isEqualClicked)
    {
        if(isEqualClicked)
        {
            str = "1";
            isEqualClicked = false;
        } else if(str == "0")
        {
            str = "1";
        } else {
            str = str + "1";
        }
    } else {
        alert("Maxmimum size is 15!");
    }
    display.value = str;
});

two.addEventListener('click',()=>{
    let str = String(display.value);
    if(str.length < 15 || isEqualClicked)
    {
        if(isEqualClicked)
        {
            str = "2";
            isEqualClicked = false;
        } else if(str == "0")
        {
            str = "2";
        } else {
            str = str + "2";
        }
    } else {
        alert("Maxmimum size is 15!");
    }
    display.value = str;
});

three.addEventListener('click',()=>{
    let str = String(display.value);
    if(str.length < 15 || isEqualClicked)
    {
        if(isEqualClicked)
        {
            str = "3";
            isEqualClicked = false;
        } else if(str == "0")
        {
            str = "3";
        } else {
            str = str + "3";
        }
    } else {
        alert("Maxmimum size is 15!");
    }
    display.value = str;
});

zero.addEventListener('click',()=>{
    let str = String(display.value);
    if(str.length < 15 || isEqualClicked)
    {
        if(isEqualClicked)
        {
            str = "0";
            isEqualClicked = false;
        } else if(str == "0")
        {
            str = "0";
        } else {
            str = str + "0";
        }
    } else {
        alert("Maxmimum size is 15!");
    }
    display.value = str;
});

clear.addEventListener('click',()=>{
    display.value = 0;
});

plus.addEventListener('click',()=>{
    let str = String(display.value);
    if(str.length < 15 || isEqualClicked)
    {
        if(str == "0")
        {
            alert("Please enter the first number!");
        } else {
            if (str[str.length-1] == "+")
            {
                alert("You must enter +(plus) button only once!");
            } else if(str[str.length-1] == "-" || str[str.length-1] == "*" || str[str.length-1] == "/") {
                alert("Please enter the number after operator!");
            } else {
                str = str + "+";
                isEqualClicked = false;
            }
        }
    } else {
        alert("Maxmimum size is 15!");
    }
    display.value = str;
});

minus.addEventListener('click',()=>{
    let str = String(display.value);
    if(str.length < 15 || isEqualClicked)
    {
        if(str == "0")
        {
            alert("Please enter the first number!");
        } else {
            if (str[str.length-1] == "-")
            {
                alert("You must enter -(minus) button only once!");
            } else if(str[str.length-1] == "+" || str[str.length-1] == "*" || str[str.length-1] == "/") {
                alert("Please enter the number after operator!");
            } else {
                str = str + "-";
                isEqualClicked = false;
            }
        }
    } else {
        alert("Maxmimum size is 15!");
    }
    display.value = str;
});

multiply.addEventListener('click',()=>{
    let str = String(display.value);
    if(str.length < 15 || isEqualClicked)
    {
        if(str == "0")
        {
            alert("Please enter the first number!");
        } else {
            if (str[str.length-1] == "*")
            {
                alert("You must enter *(multiply) button only once!");
            } else if(str[str.length-1] == "+" || str[str.length-1] == "-" || str[str.length-1] == "/") {
                alert("Please enter the number after operator!");
            } else {
                str = str + "*";
                isEqualClicked = false;
            }
        }
    } else {
        alert("Maxmimum size is 15!");
    }
    display.value = str;
});

divide.addEventListener('click',()=>{
    let str = String(display.value);
    if(str.length < 15 || isEqualClicked)
    {
        if(str == "0")
        {
            alert("Please enter the first number!");
        } else {
            if (str[str.length-1] == "/")
            {
                alert("You must enter /(divide) button only once!");
            } else if(str[str.length-1] == "+" || str[str.length-1] == "*" || str[str.length-1] == "-") {
                alert("Please enter the number after operator!");
            } else {
                str = str + "/";
                isEqualClicked = false;
            }
        }
    } else {
        alert("Maxmimum size is 15!");
    }
    display.value = str;
});

equal.addEventListener('click',()=>{
    let str = String(display.value);
    let result = str;
    try{
        result = eval(str);
        isEqualClicked = true;
    } catch (e)
    {
        alert(e.message);
        //isEqualClicked = false;
    }
    display.value = String(result);
});