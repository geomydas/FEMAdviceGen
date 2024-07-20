// No classes here

// main
// h1
// q
// button

const API_ENDPOINT_URL = "https://api.adviceslip.com/advice";

(function () {
  const displayAdvice = (id, advice) => {
    document.getElementById("advice").textContent = advice;
    document.getElementById("advice-id").textContent = `#${id}`;
  };
  const generateAdvice = async () => {
    try {
      const request = await fetch(API_ENDPOINT_URL);
      const response = await request.json();
      const slip = response.slip;
      const { id, advice } = slip;
      displayAdvice(id, advice);
    } catch (error) {
      displayAdvice("", "failed to load advice");
      console.error(error);
    }
  };
  document.getElementById("generate-advice-btn").addEventListener("click",generateAdvice);
  generateAdvice();
})();
