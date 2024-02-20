function add() {
    var studentName = document.getElementById('studentName').value;

    var sub1= Number(document.getElementById("one").value);
    var sub2 = Number(document.getElementById ("two").value);
    var sub3 = Number(document.getElementById ("three").value);
    var sub4 = Number(document.getElementById ("four").value);
    var sub5 = Number(document.getElementById ("five").value);
    var totalScore= sub1+sub2+sub3+sub4+sub5;
    var percentage = (totalScore / 500) * 100;
    var resultElement = document.getElementById('result');

    // resultElement.innerHTML = studentName + " Your Total Score Is " + percentage
    resultElement.innerHTML = `${studentName},  Your Total Score Is   ${percentage} %`
    // template literals 
    // document.getElementById(resultElement).value = resultElement;
    // resultElement.innerHTML = "<h2>Result for " + studentName + "</h2>";
}
