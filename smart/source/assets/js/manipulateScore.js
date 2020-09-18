let totalScore = document.querySelector("#totalscore");
const assn = document.querySelector("#assn").value;
const examScore = document.querySelector("#exscore").value;
const caScore = document.querySelector("#ca").value;

const addScore = () => {
    if (assn && examScore && caScore) {
      const total = assn + examScore + caScore;
      totalScore.value = total;
      console.log(assn, examScore, caScore);
      console.log(totalScore.value);
    }
  };

  if(presentPageBody.classList.contains('exam')){ 
      addScore()
      console.log(assn, examScore, caScore);
      console.log(totalScore.value);
  }