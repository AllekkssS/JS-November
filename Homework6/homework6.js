
  // function printInput() {
  //   const values = document.querySelector("input").value;
  //   console.log(values);
  // }

  function printInput() {
    let value1 = document.getElementById("field1").value
    let value2 = document.getElementById("field2").value
    let value3 = document.getElementById("field3").value
    let value4 = document.getElementById("field4").value
    console.log(value1, value2, value3, value4)
    let option1 = document.getElementById("male")
    let option2 = document.getElementById("female")
    if(option1.checked == true) {
      console.log("Male")
      // return document.getElementById("label_male").value
    }else if(option2.checked = true){
      console.log("Female")
      // return document.getElementById("label_female").value
    }else{
      console.log("Error")
    }
  }
