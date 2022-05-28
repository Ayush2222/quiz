const que_div1 = document.getElementById("questions_div1")
const que_div2 = document.getElementById("questions_div2")
const que_div3 = document.getElementById("questions_div3")
const que_div4 = document.getElementById("questions_div4")
const que_div5 = document.getElementById("questions_div5")
let answer1= JSON.parse(sessionStorage.getItem("answer1"));
let answer2= JSON.parse(sessionStorage.getItem("answer2"));
let answer3= JSON.parse(sessionStorage.getItem("answer3"));
let answer4= JSON.parse(sessionStorage.getItem("answer4"));
let answer5= JSON.parse(sessionStorage.getItem("answer5"));

// let int_eger;
// let answer = 0;
let first_to_ten = JSON.parse(sessionStorage.getItem("first_to_ten"))
let ten_to_twenty = JSON.parse(sessionStorage.getItem("ten_to_twenty"))
let twenty_to_thirty = JSON.parse(sessionStorage.getItem("twenty_to_thirty"))
let thirty_to_fourty = JSON.parse(sessionStorage.getItem("thirty_to_fourty"))
let fourty_to_fifty = JSON.parse(sessionStorage.getItem("fourty_to_fifty"))

var options_1_10 = JSON.parse(sessionStorage.getItem("options_1_10"));
var options_10_20 = JSON.parse(sessionStorage.getItem("options_10_20"));
var options_20_30 = JSON.parse(sessionStorage.getItem("options_20_30"));
var options_30_40 = JSON.parse(sessionStorage.getItem("options_30_40"));
var options_40_50 =  JSON.parse(sessionStorage.getItem("options_40_50"));
// var a;
// var b;
// var c;

var doublearr1 = JSON.parse(sessionStorage.getItem("doublearr1"))
var doublearr2 = JSON.parse(sessionStorage.getItem("doublearr2"))
var doublearr3 = JSON.parse(sessionStorage.getItem("doublearr3"))
var doublearr4 = JSON.parse(sessionStorage.getItem("doublearr4"))
var doublearr5 = JSON.parse(sessionStorage.getItem("doublearr5"))



for(var i = 0; i<10; i++){
    let a = doublearr1[i][0];
    let b = doublearr1[i][1];
    let c = doublearr1[i][2];
    let d = doublearr1[i][3];
    if(a==b || a==c || a==d){
        a+=1;
    }
    if(b==a || b==c || b==d){
        b+=1;
    }
    if(c==a || c==b || c==d){
        c+=1;
    }
    if(a==b || a==c || a==d){
        a+=1;
    }
    if(b==a || b==c || b==d){
        b+=1;
    }
    if(c==a || c==b || c==d){
        c+=1;
    }
    que_div1.innerHTML+= `
    <div id="question_${i+1}">
                <table class="question_table">
                    <tr class="que_no_row">
                        <th colspan="2" class="que_no">Q ${i+1}</th>
                    </tr>
                    <tr class="que_sub"><td colspan="2">${first_to_ten[0]}</td></tr>
                    <tr class="que_sub"><td colspan="2">${first_to_ten[1]}</td></tr>
                    <tr class="que_sub"><td colspan="2">${first_to_ten[2]}</td></tr>
                    <tr class="que_sub"><td colspan="2">${first_to_ten[3]}</td></tr>
                    <tr class="que_sub"><td colspan="2">${first_to_ten[4]}</td></tr>

              
                    <tr class="option_row a1">
                        <td class="option" id="a_${i}">A. ${a}</td>
                        <td class="option right" id="b_${i}">B. ${b}</td>
                    </tr>
                    <tr class="option_row a2">
                        <td class="option" id="c_${i}">C. ${c}</td>
                        <td class="option right" id="d_${i}">D. ${d}</td>
                    </tr>
                </table>
            </div>
    `
    for(var j = 0; j<5;j++){
        first_to_ten.shift()
    }
}
for(var i = 0; i<10; i++){
    let a = doublearr2[i][0];
    let b = doublearr2[i][1];
    let c = doublearr2[i][2];
    let d = doublearr2[i][3];
    if(a==b || a==c || a==d){
        a+=1;
    }
    if(b==a || b==c || b==d){
        b+=1;
    }
    if(c==a || c==b || c==d){
        c+=1;
    }
    if(a==b || a==c || a==d){
        a+=1;
    }
    if(b==a || b==c || b==d){
        b+=1;
    }
    if(c==a || c==b || c==d){
        c+=1;
    }
    que_div2.innerHTML+= `
    <div id="question_${i+1+10}">
                <table class="question_table">
                    <tr class="que_no_row">
                        <th colspan="2" class="que_no">Q ${i+1+10}</th>
                    </tr>
                    <tr class="que_sub"><td colspan="2">${ten_to_twenty[0]}</td></tr>
                    <tr class="que_sub"><td colspan="2">${ten_to_twenty[1]}</td></tr>
                    <tr class="que_sub"><td colspan="2">${ten_to_twenty[2]}</td></tr>
                    <tr class="que_sub"><td colspan="2">${ten_to_twenty[3]}</td></tr>
                    <tr class="que_sub"><td colspan="2">${ten_to_twenty[4]}</td></tr>

              
                    <tr class="option_row a1">
                        <td class="option" id="a_${i+10}">A. ${a}</td>
                        <td class="option right" id="b_${i+10}">B. ${b}</td>
                    </tr>
                    <tr class="option_row a2">
                        <td class="option" id="c_${i+10}">C. ${c}</td>
                        <td class="option right" id="d_${i+10}">D. ${d}</td>
                    </tr>
                </table>
            </div>
    `
    for(var j = 0; j<5;j++){
        ten_to_twenty.shift()
    }
}
for(var i = 0; i<10; i++){
    let a = doublearr3[i][0];
    let b = doublearr3[i][1];
    let c = doublearr3[i][2];
    let d = doublearr3[i][3];
    if(a==b || a==c || a==d){
        a+=1;
    }
    if(b==a || b==c || b==d){
        b+=1;
    }
    if(c==a || c==b || c==d){
        c+=1;
    }
    if(a==b || a==c || a==d){
        a+=1;
    }
    if(b==a || b==c || b==d){
        b+=1;
    }
    if(c==a || c==b || c==d){
        c+=1;
    }
    que_div3.innerHTML+= `
    <div id="question_${i+1+20}">
                <table class="question_table">
                    <tr class="que_no_row">
                        <th colspan="2" class="que_no">Q ${i+1+20}</th>
                    </tr>
                    <tr class="que_sub"><td colspan="2">${twenty_to_thirty[0]}</td></tr>
                    <tr class="que_sub"><td colspan="2">${twenty_to_thirty[1]}</td></tr>
                    <tr class="que_sub"><td colspan="2">${twenty_to_thirty[2]}</td></tr>
                    <tr class="que_sub"><td colspan="2">${twenty_to_thirty[3]}</td></tr>
                    <tr class="que_sub"><td colspan="2">${twenty_to_thirty[4]}</td></tr>
                    <tr class="que_sub"><td colspan="2">${twenty_to_thirty[5]}</td></tr>
                    <tr class="que_sub"><td colspan="2">${twenty_to_thirty[6]}</td></tr>
                    <tr class="que_sub"><td colspan="2">${twenty_to_thirty[7]}</td></tr>
                    <tr class="que_sub"><td colspan="2">${twenty_to_thirty[8]}</td></tr>
                    <tr class="que_sub"><td colspan="2">${twenty_to_thirty[9]}</td></tr>
              
                    <tr class="option_row a1">
                        <td class="option" id="a_${i+20}">A. ${a}</td>
                        <td class="option right" id="b_${i+20}">B. ${b}</td>
                    </tr>
                    <tr class="option_row a2">
                        <td class="option" id="c_${i+20}">C. ${c}</td>
                        <td class="option right" id="d_${i+20}">D. ${d}</td>
                    </tr>
                </table>
            </div>
    `
    for(var j = 0; j<10;j++){
        twenty_to_thirty.shift()
    }
}
for(var i = 0; i<10; i++){
    let a = doublearr4[i][0];
    let b = doublearr4[i][1];
    let c = doublearr4[i][2];
    let d = doublearr4[i][3];
    if(a==b || a==c || a==d){
        a+=1;
    }
    if(b==a || b==c || b==d){
        b+=1;
    }
    if(c==a || c==b || c==d){
        c+=1;
    }
    if(a==b || a==c || a==d){
        a+=1;
    }
    if(b==a || b==c || b==d){
        b+=1;
    }
    if(c==a || c==b || c==d){
        c+=1;
    }
    que_div4.innerHTML+= `
    <div id="question_${i+1+30}">
                <table class="question_table">
                    <tr class="que_no_row">
                        <th colspan="2" class="que_no">Q ${i+1+30}</th>
                    </tr>
                    <tr class="que_sub"><td colspan="2">${thirty_to_fourty[0]}</td></tr>

              
                    <tr class="option_row a1">
                        <td class="option" id="a_${i+30}">A. ${a}</td>
                        <td class="option right" id="b_${i+30}">B. ${b}</td>
                    </tr>
                    <tr class="option_row a2">
                        <td class="option" id="c_${i+30}">C. ${c}</td>
                        <td class="option right" id="d_${i+30}">D. ${d}</td>
                    </tr>
                </table>
            </div>
    `
    for(var j = 0; j<1;j++){
        thirty_to_fourty.shift()
    }
}
for(var i = 0; i<10; i++){
    let a = doublearr5[i][0];
    let b = doublearr5[i][1];
    let c = doublearr5[i][2];
    let d = doublearr5[i][3];
    if(a==b || a==c || a==d){
        a+=1;
    }
    if(b==a || b==c || b==d){
        b+=1;
    }
    if(c==a || c==b || c==d){
        c+=1;
    }
    if(a==b || a==c || a==d){
        a+=1;
    }
    if(b==a || b==c || b==d){
        b+=1;
    }
    if(c==a || c==b || c==d){
        c+=1;
    }
    que_div5.innerHTML+= `
    <div id="question_${i+1+40}">
                <table class="question_table">
                    <tr class="que_no_row">
                        <th colspan="2" class="que_no">Q ${i+1+40}</th>
                    </tr>
                    <tr class="que_sub"><td colspan="2">${fourty_to_fifty[0]}</td></tr>

              
                    <tr class="option_row a1">
                        <td class="option" id="a_${i+40}">A. ${a}</td>
                        <td class="option right" id="b_${i+40}">B. ${b}</td>
                    </tr>
                    <tr class="option_row a2">
                        <td class="option" id="c_${i+40}">C. ${c}</td>
                        <td class="option right" id="d_${i+40}">D. ${d}</td>
                    </tr>
                </table>
            </div>
    `
    for(var j = 0; j<1;j++){
        fourty_to_fifty.shift()
    }
}
function sort(arr){

    for(let i = 0; i < arr.length; i++){

        //Inner pass
        for(let j = 0; j < arr.length - i - 1; j++){

            //Value comparison using ascending order

            if(parseInt((arr[j + 1]).split(".")[0]) < parseInt((arr[j]).split(".")[0])){

                //Swapping
                [arr[j + 1],arr[j]] = [arr[j],arr[j + 1]]
            }
        }
    };
    return arr;
}

let answer_arr = sort(JSON.parse(sessionStorage.getItem("storage")))
// answer_arr = sort(answer_arr)
localStorage.setItem("student's_answers", JSON.stringify(answer_arr));
console.log(answer_arr);
let correct_answers = 0;
let wrong_answers = 0;
let combined_arr4 = JSON.parse(sessionStorage.getItem("combined_arr4"));
for(var i = 0;i<answer_arr.length;i++){
    // var aaa_x = (answer_arr[i]).split(".")[1];
    // var aaa_z = (answer_arr[i]).split('.')[0]
    // var aaa_y = combined_arr4[(answer_arr[i]).split('.')[0]];
    
    if(((answer_arr[i]).split(".")[1]) != combined_arr4[(answer_arr[i].split('.')[0])]){
        wrong_answers++;
        // console.log(correct_answers)
        let a = document.getElementById(`a_${(answer_arr[i]).split('.')[0]}`)
        let b = document.getElementById(`b_${(answer_arr[i]).split('.')[0]}`)
        let c = document.getElementById(`c_${(answer_arr[i]).split('.')[0]}`)
        let d = document.getElementById(`d_${(answer_arr[i]).split('.')[0]}`)
        const val_a = a.innerText.split(". ")[1]
        const val_b = b.innerText.split(". ")[1]
        const val_c = c.innerText.split(". ")[1]
        const val_d = d.innerText.split(". ")[1]
        var element =  (answer_arr[i]).split(".")[1]
        if(val_a == element){
            a.style.backgroundColor = "red"
            a.parentElement.parentElement.firstChild.style.backgroundColor = "red"
            a.parentElement.parentElement.parentElement.style.border = "1px solid red"
            a.parentElement.parentElement.firstChild.childNodes[1].style.backgroundColor = "red"
            a.parentElement.parentElement.firstChild.childNodes[1].style.border = "1px solid red"
        }
        else if(val_b == element){
            b.style.backgroundColor = "red"
            b.parentElement.parentElement.firstChild.style.backgroundColor = "red"
            b.parentElement.parentElement.parentElement.style.border = "1px solid red"
            b.parentElement.parentElement.firstChild.childNodes[1].style.backgroundColor = "red"
            b.parentElement.parentElement.firstChild.childNodes[1].style.border = "1px solid red"

        }
        else if(val_c == element){
            c.style.backgroundColor = "red"
            c.parentElement.parentElement.firstChild.style.backgroundColor = "red"
            c.parentElement.parentElement.parentElement.style.border = "1px solid red"
            c.parentElement.parentElement.firstChild.childNodes[1].style.backgroundColor = "red"
            c.parentElement.parentElement.firstChild.childNodes[1].style.border = "1px solid red"

        }
        else if(val_d == element){

            d.style.backgroundColor = "red"
            d.parentElement.parentElement.firstChild.style.backgroundColor = "red"
            d.parentElement.parentElement.parentElement.style.border = "1px solid red"
            d.parentElement.parentElement.firstChild.childNodes[1].style.backgroundColor = "red"
            d.parentElement.parentElement.firstChild.childNodes[1].style.border = "1px solid red"

        }   

    }else{
        correct_answers++;
        let a = document.getElementById(`a_${(answer_arr[i]).split('.')[0]}`)
        let b = document.getElementById(`b_${(answer_arr[i]).split('.')[0]}`)
        let c = document.getElementById(`c_${(answer_arr[i]).split('.')[0]}`)
        let d = document.getElementById(`d_${(answer_arr[i]).split('.')[0]}`)
        const val_a = a.innerText.split(". ")[1]
        const val_b = b.innerText.split(". ")[1]
        const val_c = c.innerText.split(". ")[1]
        const val_d = d.innerText.split(". ")[1]
        var element =  (answer_arr[i]).split(".")[1]
        if(val_a == element){
            a.style.backgroundColor = "green"
            a.parentElement.parentElement.firstChild.style.backgroundColor = "green"
            a.parentElement.parentElement.parentElement.style.border = "1px solid green"
            a.parentElement.parentElement.firstChild.childNodes[1].style.backgroundColor = "green"
            a.parentElement.parentElement.firstChild.childNodes[1].style.border = "1px solid green"
        }
        else if(val_b == element){
            b.style.backgroundColor = "green"
            b.parentElement.parentElement.firstChild.style.backgroundColor = "green"
            b.parentElement.parentElement.parentElement.style.border = "1px solid green"
            b.parentElement.parentElement.firstChild.childNodes[1].style.backgroundColor = "green"
            b.parentElement.parentElement.firstChild.childNodes[1].style.border = "1px solid green"

        }
        else if(val_c == element){
            c.style.backgroundColor = "green"
            c.parentElement.parentElement.firstChild.style.backgroundColor = "green"
            c.parentElement.parentElement.parentElement.style.border = "1px solid green"
            c.parentElement.parentElement.firstChild.childNodes[1].style.backgroundColor = "green"
            c.parentElement.parentElement.firstChild.childNodes[1].style.border = "1px solid green"

        }
        else if(val_d == element){

            d.style.backgroundColor = "green"
            d.parentElement.parentElement.firstChild.style.backgroundColor = "green"
            d.parentElement.parentElement.parentElement.style.border = "1px solid green"
            d.parentElement.parentElement.firstChild.childNodes[1].style.backgroundColor = "green"
            d.parentElement.parentElement.firstChild.childNodes[1].style.border = "1px solid green"

        }   
    }
    
}

answer1.forEach(element => {
    const a  = document.getElementById(`a_${answer1.indexOf(element)}`)
    const b  = document.getElementById(`b_${answer1.indexOf(element)}`)
    const c  = document.getElementById(`c_${answer1.indexOf(element)}`)
    const d  = document.getElementById(`d_${answer1.indexOf(element)}`)
    answer1[answer1.indexOf(element)] = null;
    const val_a = a.innerText.split(". ")[1]
    const val_b = b.innerText.split(". ")[1]
    const val_c = c.innerText.split(". ")[1]
    const val_d = d.innerText.split(". ")[1]
    if(val_a == element){
        a.style.backgroundColor = "green"
    }
    else if(val_b == element){
        b.style.backgroundColor = "green"
    }
    else if(val_c == element){
        c.style.backgroundColor = "green"
    }
    else if(val_d == element){
        d.style.backgroundColor = "green"
    }   



});
answer2.forEach(element => {
    const a  = document.getElementById(`a_${answer2.indexOf(element)+10}`)
    const b  = document.getElementById(`b_${answer2.indexOf(element)+10}`)
    const c  = document.getElementById(`c_${answer2.indexOf(element)+10}`)
    const d  = document.getElementById(`d_${answer2.indexOf(element)+10}`)
    answer2[answer2.indexOf(element)] = null;
    const val_a = a.innerText.split(". ")[1]
    const val_b = b.innerText.split(". ")[1]
    const val_c = c.innerText.split(". ")[1]
    const val_d = d.innerText.split(". ")[1]
    if(val_a == element){
        a.style.backgroundColor = "green"
    }
    else if(val_b == element){
        b.style.backgroundColor = "green"
    }
    else if(val_c == element){
        c.style.backgroundColor = "green"
    }
    else if(val_d == element){
        d.style.backgroundColor = "green"
    }   



});
answer3.forEach(element => {
    const a  = document.getElementById(`a_${answer3.indexOf(element)+20}`)
    const b  = document.getElementById(`b_${answer3.indexOf(element)+20}`)
    const c  = document.getElementById(`c_${answer3.indexOf(element)+20}`)
    const d  = document.getElementById(`d_${answer3.indexOf(element)+20}`)
    answer3[answer3.indexOf(element)] = null;
    const val_a = a.innerText.split(". ")[1]
    const val_b = b.innerText.split(". ")[1]
    const val_c = c.innerText.split(". ")[1]
    const val_d = d.innerText.split(". ")[1]
    if(val_a == element){
        a.style.backgroundColor = "green"
    }
    else if(val_b == element){
        b.style.backgroundColor = "green"
    }
    else if(val_c == element){
        c.style.backgroundColor = "green"
    }
    else if(val_d == element){
        d.style.backgroundColor = "green"
    }   



});
answer4.forEach(element => {
    const a  = document.getElementById(`a_${answer4.indexOf(element)+30}`)
    const b  = document.getElementById(`b_${answer4.indexOf(element)+30}`)
    const c  = document.getElementById(`c_${answer4.indexOf(element)+30}`)
    const d  = document.getElementById(`d_${answer4.indexOf(element)+30}`)
    answer4[answer4.indexOf(element)] = null;
    const val_a = a.innerText.split(". ")[1]
    const val_b = b.innerText.split(". ")[1]
    const val_c = c.innerText.split(". ")[1]
    const val_d = d.innerText.split(". ")[1]
    
    if(val_a == element){
        a.style.backgroundColor = "green"
    }
    else if(val_b == element){
        b.style.backgroundColor = "green"
    }
    else if(val_c == element){
        c.style.backgroundColor = "green"
    }
    else if(val_d == element){
        d.style.backgroundColor = "green"
    }   



});
answer5.forEach(element => {
    const a  = document.getElementById(`a_${answer5.indexOf(element)+40}`)
    const b  = document.getElementById(`b_${answer5.indexOf(element)+40}`)
    const c  = document.getElementById(`c_${answer5.indexOf(element)+40}`)
    const d  = document.getElementById(`d_${answer5.indexOf(element)+40}`)
    answer5[answer5.indexOf(element)] = null;
    const val_a = a.innerText.split(". ")[1]
    const val_b = b.innerText.split(". ")[1]
    const val_c = c.innerText.split(". ")[1]
    const val_d = d.innerText.split(". ")[1]
    if(val_a == element){
        a.style.backgroundColor = "green"
    }
    else if(val_b == element){
        b.style.backgroundColor = "green"
    }
    else if(val_c == element){
        c.style.backgroundColor = "green"
    }
    else if(val_d == element){
        d.style.backgroundColor = "green"
    }   



});
localStorage.setItem("answers",sessionStorage.getItem("combined_arr4"));
var date_new = new Date();
var month_new = date_new.toLocaleString('default', { month: 'long' });
var date = date_new.getDate();
var year  = date_new.getFullYear();
var full_date = month_new + " " + date + "," + year
document.getElementById("date").innerHTML = full_date;
document.getElementById("correct_answers").innerHTML = `${correct_answers} / 50`;
document.getElementById("wrong_answers").innerHTML = `${wrong_answers} / 50`;
localStorage.setItem("correct_answers", correct_answers)
localStorage.setItem("wrong_answers", wrong_answers)
localStorage.setItem("accuracy", `${(correct_answers/50)*100}%`)
document.getElementById("accuracy").innerHTML = `${(correct_answers/50)*100} %`
let time_left = sessionStorage.getItem("time_left");
let minutes_left = time_left.split(":")[0]
let seconds_left = time_left.split(":")[1]
let display_minutes;
let display_seconds;
var attempted_que = correct_answers + wrong_answers;
document.getElementById("attempted").innerText = attempted_que
localStorage.setItem("attempted_que", attempted_que)

if(60-seconds_left!=60){
    display_minutes = (30-minutes_left)-1
    display_seconds = 60-seconds_left;
}else{
    display_minutes = 30-minutes_left
    display_seconds = 0;
}
let display_string = `${display_minutes}m ${display_seconds}s`
document.getElementById("time").innerText = display_string;
localStorage.setItem("time_taken", display_string)
document.getElementById("heading").innerHTML = 
`
<h1>
    Dear, ${localStorage.getItem("name")} Std ${localStorage.getItem("class")}${localStorage.getItem("section")}, your result is: 
</h1>
`