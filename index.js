document.getElementById("submit_button").onclick = function() {
    let allAreFilled = true;
    document.getElementById("stu_info").querySelectorAll("[required]").forEach(function(i) {
        if (!allAreFilled) return;
        if (i.type === "radio") {
        let radioValueCheck = false;
    document.getElementById("stu_info").querySelectorAll(`[name=${i.name}]`).forEach(function(r) {
            if (r.checked) radioValueCheck = true;
        })
        allAreFilled = radioValueCheck;
        return;
        }
        if (!i.value) { allAreFilled = false;  return; }
    })
    if (!allAreFilled || document.getElementById("class").value<1) {
        alert('Fill all the fields with valid values')
        // console.log("hi1")
    }else{
        location.replace("./quiz.html")
        localStorage.setItem("name", document.getElementById("name").value)
        localStorage.setItem("class", document.getElementById("class").value)
 
        var radios = document.getElementsByName("section");
        var selected = Array.from(radios).find(radio => radio.checked);
        localStorage.setItem("section",selected.value);
        
    }
};