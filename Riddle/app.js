function submit() {
    const riddle1 = document.querySelector('#riddle1').value;
    const riddle2 = document.querySelector('#riddle2').value;
    const riddle3 = document.querySelector('#riddle3').value;

    console.log(riddle1);
    console.log(riddle2);
    console.log(riddle3);
    if (riddle1 == "something" || riddle1 == " " && riddle2 == "something" || riddle1 == " " && riddle3 == "something" || riddle3 == " "){
        console.log("PASSED");
        window.location.href = "http://www.w3schools.com";
    }else{
        console.log("FAILED");
    }
}