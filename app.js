const slipId = document.getElementById("slip-id");
const advice = document.getElementById("advice");
const next = document.getElementById("next-btn");

// 1st Method...

// const getAdvice = () => {
//     const apiUrl = "https://api.adviceslip.com/advice"

//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data)

//         const slip = data.slip;
//         console.log(slip)


//         advice.textContent = slip.advice;
//         slipId.textContent = slip.id; 
//         // console.log(getAdvice);
        

//       });
//   };
  
//   getAdvice();
  

    // 2nd method...
 
  const getAdvice = async () => {

    const apiUrl = "https://api.adviceslip.com/advice"

    const response = await fetch(apiUrl)
    const {slip} = await response.json();

    console.log(slip);

    advice.textContent = slip.advice;
    slipId.textContent = slip.id;
    // console.log(getAdvice);

  }
  
  getAdvice();


next.addEventListener("click", getAdvice);


