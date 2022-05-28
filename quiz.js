const que_div1 = document.getElementById("questions_div1")
const que_div2 = document.getElementById("questions_div2")
const que_div3 = document.getElementById("questions_div3")
const que_div4 = document.getElementById("questions_div4")
const que_div5 = document.getElementById("questions_div5")
let answer1=[];
let answer2=[];
let answer3=[];
let answer4=[];
let answer5=[];
let int_eger;
let answer = 0;
let first_to_ten = []
let ten_to_twenty = []
let twenty_to_thirty = []
let thirty_to_fourty = []
let fourty_to_fifty = []
let difficulty = parseInt(localStorage.getItem("class"))
function randomRange(min, max){
    var ans_return = Math.floor(Math.random() * (max - min + 1)) + min 
    if(ans_return!=0){
        return ans_return
    }else{
        return randomRange(min,max)
    }
    
}
    for(var i = 0; i<20; i++){
        for(var j = 0; j<5; j++){
            int_eger = randomRange(10+difficulty,-10-difficulty);
            if(i >= 0 && i<10){
                
                first_to_ten.push(int_eger)
                answer+=int_eger;
            }
            if(i >= 10 && i <20){
                ten_to_twenty.push(int_eger)
                answer+=int_eger;
            }
           
        }
        // console.log(answer)
        if(i >= 0 && i<10){answer1.push(answer);}
        if(i >= 10 && i <20){answer2.push(answer);}


        answer=0;
    }
    for(var i = 20; i<30; i++){
        for(var j = 0; j<10; j++){
            int_eger = randomRange(3+difficulty,-3-difficulty);
           
            if(i >= 20 && i<30){
                twenty_to_thirty.push(int_eger)
                answer+=int_eger;
            }
          
            
        }
        // console.log(answer)
       
        if(i >= 20 && i <30){answer3.push(answer);}
      

        answer=0;
    }
    let multiplication;
    let division;
    let divisor;
    for(var i = 30; i<32; i++){
        for(var j = 0; j<10; j++){
            
            int_eger = randomRange(3+difficulty,-3-difficulty);
             
            if(i >= 30 && i<31){
                multiplication = randomRange(99+difficulty,-99-difficulty)

                thirty_to_fourty.push(`${multiplication}*${int_eger}`)
                answer=multiplication*int_eger;
            }
            if(i >= 31 && i<32){
                division = randomRange(-1000, 1000)
                divisor = int_eger * division;          
                fourty_to_fifty.push(`${divisor}/${int_eger}`)
               
                
                answer= divisor/int_eger;
            }
            if(i >= 30 && i <31){answer4.push(answer);}
            if(i >= 31 && i <32){answer5.push(answer);}
            answer=0;
            
    }
        // console.log(answer)
       
      
      

      
    }





var options_1_10 = [];
var options_10_20 = [];
var options_20_30 = [];
var options_30_40 = [];
var options_40_50 = [];
var a;
var b;
var c;
for(var i = 0; i<10;i++){
    var integer = answer1[i];
    var modifier = randomRange(-1,1)
    // console.log(randomRange(-1,1))
    if(modifier>0){
        a = Math.floor(integer+7 /9);
        b = Math.floor(integer -35*3);
        c = integer +1;
        options_1_10.push(a);
        options_1_10.push(c);
        options_1_10.push(b);
    }
    if(modifier<0){
        a = Math.ceil(integer/2 +5);
        b = Math.ceil((integer+2) /5);
        c = integer -1;
        options_1_10.push(a);
        options_1_10.push(c);
        options_1_10.push(b);
    }
}
// console.log(options_1_10);
for(var i = 0; i<10;i++){
    var integer = answer2[i];
    var modifier = randomRange(-1,1)
    // console.log(randomRange(-1,1))
    if(modifier>0){
        a = Math.floor(integer+7 /9);
        b = Math.floor(integer -35*3);
        c = integer +1;
        options_10_20.push(a);
        options_10_20.push(c);
        options_10_20.push(b);
    }
    if(modifier<0){
        a = Math.ceil(integer/2 +5);
        b = Math.ceil((integer+2) /5);
        c = integer -1;
        options_10_20.push(a);
        options_10_20.push(c);
        options_10_20.push(b);
    }
}
for(var i = 0; i<10;i++){
    var integer = answer3[i];
    var modifier = randomRange(-1,1)
    // console.log(randomRange(-1,1))
    if(modifier>0){
        a = Math.floor(integer+7 /9);
        b = Math.floor(integer -35*3);
        c = integer +1;
        options_20_30.push(a);
        options_20_30.push(c);
        options_20_30.push(b);
    }
    if(modifier<0){
        a = Math.ceil(integer/2 +5);
        b = Math.ceil((integer+2) /5);
        c = integer -1;
        options_20_30.push(a);
        options_20_30.push(c);
        options_20_30.push(b);
    }
}
for(var i = 0; i<10;i++){
    var integer = answer4[i];
    var modifier = randomRange(-1,1)
    // console.log(randomRange(-1,1))
    if(modifier>0){
        a = Math.floor(integer+7 /9);
        b = Math.floor(integer -35*3);
        c = integer +1;
        options_30_40.push(a);
        options_30_40.push(c);
        options_30_40.push(b);
    }
    if(modifier<0){
        a = Math.ceil(integer/2 +5);
        b = Math.ceil((integer+2) /5);
        c = integer -1;
        options_30_40.push(a);
        options_30_40.push(c);
        options_30_40.push(b);
    }
}
for(var i = 0; i<10;i++){
    var integer = answer5[i];
    var modifier = randomRange(-1,1)
    // console.log(randomRange(-1,1))
    if(modifier>0){
        a = Math.floor(integer+7 /9);
        b = Math.floor(integer -35*3);
        c = integer +1;
        options_40_50.push(a);
        options_40_50.push(c);
        options_40_50.push(b);
    }
    if(modifier<0){
        a = Math.ceil(integer/2 +5);
        b = Math.ceil((integer+2) /5);
        c = integer -1;
        options_40_50.push(a);
        options_40_50.push(c);
        options_40_50.push(b);
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    
    }
   return array;
}

var doublearr1 = [[],[],[],[],[],[],[],[],[],[]]
var doublearr2 = [[],[],[],[],[],[],[],[],[],[]]
var doublearr3 = [[],[],[],[],[],[],[],[],[],[]]
var doublearr4 = [[],[],[],[],[],[],[],[],[],[]]
var doublearr5 = [[],[],[],[],[],[],[],[],[],[]]

for(var i = 0;i<10;i++){
    doublearr1[i].push(options_1_10[i])
    doublearr1[i].push(options_1_10[i+1])
    doublearr1[i].push(options_1_10[i+2])
    doublearr1[i].push(answer1[i])
}
for(var i = 0;i<10;i++){
    doublearr2[i].push(options_10_20[i])
    doublearr2[i].push(options_10_20[i+1])
    doublearr2[i].push(options_10_20[i+2])
    doublearr2[i].push(answer2[i])
}
for(var i = 0;i<10;i++){
    doublearr3[i].push(options_20_30[i])
    doublearr3[i].push(options_20_30[i+1])
    doublearr3[i].push(options_20_30[i+2])
    doublearr3[i].push(answer3[i])
}
for(var i = 0;i<10;i++){
    doublearr4[i].push(options_30_40[i])
    doublearr4[i].push(options_30_40[i+1])
    doublearr4[i].push(options_30_40[i+2])
    doublearr4[i].push(answer4[i])
}
for(var i = 0;i<10;i++){
    doublearr5[i].push(options_40_50[i])
    doublearr5[i].push(options_40_50[i+1])
    doublearr5[i].push(options_40_50[i+2])
    doublearr5[i].push(answer5[i])
}

for(var i= 0; i<10; i++){
    shuffleArray(doublearr1[i])
    shuffleArray(doublearr2[i])
    shuffleArray(doublearr3[i])
    shuffleArray(doublearr4[i])
    shuffleArray(doublearr5[i])
}

sessionStorage.setItem("answer1", JSON.stringify(answer1));
sessionStorage.setItem("answer2", JSON.stringify(answer2));
sessionStorage.setItem("answer3", JSON.stringify(answer3));
sessionStorage.setItem("answer4", JSON.stringify(answer4));
sessionStorage.setItem("answer5", JSON.stringify(answer5));

sessionStorage.setItem("first_to_ten", JSON.stringify(first_to_ten));
sessionStorage.setItem("ten_to_twenty", JSON.stringify(ten_to_twenty));
sessionStorage.setItem("twenty_to_thirty", JSON.stringify(twenty_to_thirty));
sessionStorage.setItem("thirty_to_fourty", JSON.stringify(thirty_to_fourty));
sessionStorage.setItem("fourty_to_fifty", JSON.stringify(fourty_to_fifty));

sessionStorage.setItem("options_1_10", JSON.stringify(options_1_10));
sessionStorage.setItem("options_10_20", JSON.stringify(options_10_20));
sessionStorage.setItem("options_20_30", JSON.stringify(options_20_30));
sessionStorage.setItem("options_30_40", JSON.stringify(options_30_40));
sessionStorage.setItem("options_40_50", JSON.stringify(options_40_50));

sessionStorage.setItem("doublearr1", JSON.stringify(doublearr1));
sessionStorage.setItem("doublearr2", JSON.stringify(doublearr2));
sessionStorage.setItem("doublearr3", JSON.stringify(doublearr3));
sessionStorage.setItem("doublearr4", JSON.stringify(doublearr4));
sessionStorage.setItem("doublearr5", JSON.stringify(doublearr5));




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
                        <td class="option" id="a_${i+1}">A. ${a}</td>
                        <td class="option right" id="b_${i+1}">B. ${b}</td>
                    </tr>
                    <tr class="option_row a2">
                        <td class="option" id="c_${i+1}">C. ${c}</td>
                        <td class="option right" id="d_${i+1}">D. ${d}</td>
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



let array_session = [];
sessionStorage.setItem("storage", JSON.stringify(array_session))

const element = document.querySelectorAll('.option')
console.log(element);
element.forEach(ele => {
    ele.addEventListener('click', (e)=>{
        console.log(ele.id);
        const number = (ele.id).split("_")[1]
        document.getElementById(`a_${number}`).style.backgroundColor="white"
        document.getElementById(`b_${number}`).style.backgroundColor="white"
        document.getElementById(`c_${number}`).style.backgroundColor="white"
        document.getElementById(`d_${number}`).style.backgroundColor="white"
        ele.style.backgroundColor="yellow"
        
        // console.log((ele.innerText).split(". ")[1])
        // console.log((((((ele.parentElement).parentElement).parentElement).parentElement).id).split("_")[1])
        let sto = JSON.parse(sessionStorage.getItem("storage"));
        sto.forEach(element => {
            // console.log(element)
            console.log(element)
            if(parseInt(element.toString().split(".")[0]) == (ele.parentElement.parentElement.parentElement.parentElement.id).split("_")[1]-1){
                
                sto.splice(sto.indexOf(`${element}`))
            }
            
        });
        sto.push(`${(((((ele.parentElement).parentElement).parentElement).parentElement).id).split("_")[1]-1}.${(ele.innerText).split(". ")[1]}`)
        sessionStorage.setItem("storage", JSON.stringify(sto));
    })
});

let combined_arr1 = answer1.concat(answer2);
let combined_arr2 = combined_arr1.concat(answer3);
let combined_arr3 = combined_arr2.concat(answer4);
let combined_arr4 = combined_arr3.concat(answer5);
sessionStorage.setItem("combined_arr4", JSON.stringify(combined_arr4));

let slide_no = 1;




const next_btn = document.getElementById("next_btn")
const prev_btn = document.getElementById("prev_btn")
next_btn.addEventListener('click', ()=>{
    if(slide_no==1){
        que_div1.style.display = "none"
        que_div2.style.display = "flex"
        next_btn.innerHTML = "Next"
        prev_btn.style.display= "block";
    }
    if(slide_no==2){
        que_div2.style.display = "none"
        que_div3.style.display = "flex"
        next_btn.innerHTML = "Next"
        prev_btn.style.display= "block";
    }
    if(slide_no==3){
        que_div3.style.display = "none"
        que_div4.style.display = "flex"
        next_btn.innerHTML = "Next"
        prev_btn.style.display= "block";
    }
    if(slide_no==4){
        que_div4.style.display = "none"
        que_div5.style.display = "flex"
       
        next_btn.innerHTML = "Finish"
        prev_btn.style.display= "block";
    }
    if(slide_no==5){
        // que_div5.style.display = "none"
        sessionStorage.setItem("time_left", timer.innerText)
        location.replace("./result.php")
        
       
    }
    slide_no+=1

})
prev_btn.addEventListener('click', ()=>{
    
    if(slide_no==2){
        que_div2.style.display = "none"
        que_div1.style.display = "flex"
        prev_btn.style.display= "none";
    }
    if(slide_no==3){
        que_div3.style.display = "none"
        que_div2.style.display = "flex"
    }
    if(slide_no==4){
        que_div4.style.display = "none"
        que_div3.style.display = "flex"
    }
    if(slide_no==5){
        que_div5.style.display = "none"
        que_div4.style.display = "flex"
        next_btn.innerHTML = "Next"
    }
    slide_no-=1

})



const section_btn1 = document.getElementById("section_btn1")
const section_btn2 = document.getElementById("section_btn2")
const section_btn3 = document.getElementById("section_btn3")
const section_btn4 = document.getElementById("section_btn4")
const section_btn5 = document.getElementById("section_btn5")

section_btn1.addEventListener('click', ()=>{
    if(slide_no==1){

    }else if(slide_no ==2){
        que_div2.style.display = "none"
        que_div1.style.display = "flex"
        prev_btn.style.display= "none";
    }else if(slide_no==3){
        que_div3.style.display = "none"
        que_div1.style.display = "flex"
        prev_btn.style.display= "none";
    }
    else if(slide_no==4){
        que_div4.style.display = "none"
        que_div1.style.display = "flex"
        prev_btn.style.display= "none";
    
    }else if(slide_no==5){
        que_div5.style.display = "none"
        que_div1.style.display = "flex"
        next_btn.innerHTML = "Next"
        prev_btn.style.display= "none";
    }
    slide_no = 1;
})
section_btn2.addEventListener('click', ()=>{
    if(slide_no==1){
        que_div2.style.display = "flex"
        que_div1.style.display = "none"
        prev_btn.style.display= "block";
    }else if(slide_no ==2){
        
    }else if(slide_no==3){
        que_div3.style.display = "none"
        que_div2.style.display = "flex"
    }
    else if(slide_no==4){
        que_div4.style.display = "none"
        que_div2.style.display = "flex"
    
    }else if(slide_no==5){
        que_div5.style.display = "none"
        que_div2.style.display = "flex"
        next_btn.innerHTML = "Next"
    }
    slide_no = 2;
})
section_btn3.addEventListener('click', ()=>{
    if(slide_no==1){
        que_div3.style.display = "flex"
        que_div1.style.display = "none"
        prev_btn.style.display= "block";
    }else if(slide_no ==2){
        que_div2.style.display = "none"
        que_div3.style.display = "flex"
        
    }else if(slide_no==3){
      
    }
    else if(slide_no==4){
        que_div4.style.display = "none"
        que_div3.style.display = "flex"
    
    }else if(slide_no==5){
        que_div5.style.display = "none"
        que_div3.style.display = "flex"
        next_btn.innerHTML = "Next"
    }
    slide_no= 3;
})
section_btn4.addEventListener('click', ()=>{
    if(slide_no==1){
        que_div4.style.display = "flex"
        que_div1.style.display = "none"
        prev_btn.style.display= "block";
    }else if(slide_no ==2){
        que_div2.style.display = "none"
        que_div4.style.display = "flex"
      
    }else if(slide_no==3){
        que_div3.style.display = "none"
        que_div4.style.display = "flex"
    }
    else if(slide_no==4){
    
    
    }else if(slide_no==5){
        que_div5.style.display = "none"
        que_div4.style.display = "flex"
        next_btn.innerHTML = "Next"
    }
    slide_no = 4;
})
section_btn5.addEventListener('click', ()=>{
    if(slide_no==1){
        que_div5.style.display = "flex"
        que_div1.style.display = "none"
        prev_btn.style.display= "block";
        next_btn.innerHTML = "Finish"
    }else if(slide_no ==2){
        que_div2.style.display = "none"
        que_div5.style.display = "flex"
        next_btn.innerHTML = "Finish"
        
    }else if(slide_no==3){
        que_div3.style.display = "none"
        que_div5.style.display = "flex"
        next_btn.innerHTML = "Finish"
    }
    else if(slide_no==4){
        que_div4.style.display = "none"
        que_div5.style.display = "flex"
        next_btn.innerHTML = "Finish"
    
    }else if(slide_no==5){
    }
    slide_no = 5;
})

var timer = document.getElementById("timer");

    var today = new Date()
    var hours = today.getHours()
    var minutes = today.getMinutes()
    var seconds = today.getSeconds()
    var future_hour;
    var future_minute;
    var future_second;


    if(minutes>-1 && minutes<30){
        future_hour = hours;
        future_minute = minutes+30;
        future_second = seconds
    }
    if(minutes==30){
        future_hour= hours+1
        future_minute = 0;
        future_second = seconds
    }
    if(minutes>30 && minutes<60){
        future_minute = 30-(60%minutes)
        future_hour = hours+1
        future_second = seconds
    }
    
var x = setInterval(function(){
        var today = new Date()
        var hours = today.getHours()
        var minutes = today.getMinutes()
        var seconds = today.getSeconds()
console.log(`${future_hour}:${future_minute}:${future_second}`)
console.log(`${hours}:${minutes}:${seconds}`)
    if(future_hour==hours){
        // 2:15:25 => 2:44:25
        if((future_second-seconds) ==0){
            
            console.log(`${future_minute-minutes} : 00`)
            timer.innerText = `${future_minute-minutes}:00`
            
        }
        if((future_second-seconds) <0){
            console.log(`${future_minute-minutes-1} : ${60 - Math.abs(future_second-seconds)}`);
            timer.innerText = `${future_minute-minutes-1}:${60 - Math.abs(future_second-seconds)}`;
        }
        if(future_second-seconds >0){
            console.log(`${future_minute-minutes} : ${Math.abs(seconds-future_second)}`);
            timer.innerText = `${future_minute-minutes}:${Math.abs(seconds-future_second)}`;
        }

    }else if(future_hour>hours){
        if((future_second-seconds) == 0){
            console.log(`${60-minutes+future_minute} : 00`);
            timer.innerText = `${60-minutes+future_minute}:00`;
        }
        if((future_second-seconds)<0){
            console.log(`${60-minutes+future_minute-1} : ${60 - Math.abs(future_second-seconds)}`);
            timer.innerText = `${60-minutes+future_minute-1}:${60 - Math.abs(future_second-seconds)}`;

        }
        if(future_second-seconds >0){
            console.log(`${60-minutes+future_minute} : ${Math.abs(seconds-future_second)}`)
            timer.innerText = `${60-minutes+future_minute}:${Math.abs(seconds-future_second)}`;
        }
    }
    sessionStorage.setItem("time_left", timer.innerText)
}, 1000);
setTimeout(function( ) { clearInterval( x );
    location.replace("./result.html")
}, 1800000);
