const presentPageBody = document.querySelector("body");


const validateFormFields = () => {
  const validValuesObj = {
    text: {
      expected: () => /^[A-z0-9 \s]{2,20}$/,
      failureResponse: "please provide minimum of two characters",
    },
    number: {
      expected: () => /^[0-9]{2,11}$/,
      failureResponse:
        "must contain minimum of two and maximum of eleven digits!",
    },
    date: {
      expected: () =>
        /^(19|20)\d\d([- /.])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])$/,
      failureResponse:
        "Date format is invalid. Enter date in the format yyyy-mm-dd",
    },
    email: {
      expected: () => /([A-z0-9.-_]+)@([A-z]+)\.([A-z]){2,5}$/,
      failureResponse: "is not a valid email address",
    },
    password: {
      expected: () => /[a-zA-Z0-9\w!@#$%^&*()_+|]{8,20}$/,
      failureResponse: "must be eight characters at least",
    },
    confirmPassword: {
      expected: () =>
        new RegExp(`^${document.querySelector("#password").value}$`),
      failureResponse: "must be equal to password",
    },
    textarea: {
      expected: () => /^[A-z0-9 \s]{5,250}$/,
      failureResponse:
        "must have a minimum of five and maximum of 250 characters",
    },
  };

  const fieldsToBeValidated = document.querySelectorAll(
    "input, .selGender, textarea"
  );

  //   console.log(fieldsToBeValidated);
  fieldsToBeValidated.forEach((element) => {
    const elementToDisplayError = element.nextElementSibling;
    // console.log(elementToDisplayError)
    elementToDisplayError.classList.add("error-display");
    element.addEventListener("keyup", validate, false);
  });
  let btn = document.getElementById("btn");
  function validate() {
    const valTypeStore = validValuesObj[this.dataset.valType || this.type];
    if (valTypeStore.expected().test(this.value)) {
      this.parentElement.children[2].textContent = "";
      btn.removeAttribute("disabled");
    } else {
      this.parentElement.children[2].textContent = `${valTypeStore.failureResponse}`;
      btn.setAttribute("disabled", "disabled");
    }
  }
  // validate();
};

if (
  presentPageBody.classList.contains("login") ||
  presentPageBody.classList.contains("sign-up-body") ||
  presentPageBody.classList.contains("add")
) {
  validateFormFields();
}
// if (validateFormFields) {
//       alert("login successful");
//       window.location.assign("parent-dashboard.html");
//   }

// if(assn && examScore && caScore){
//     addScore();
//     // console.log(assn, examScore, caScore);
// }

// const total = assn + examScore + caScore;
// totalScore.value = total;
// console.log(assn, examScore, caScore);
// console.log(totalScore.value);
