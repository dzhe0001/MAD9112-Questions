// Create a div container on HTML document and create 1 to 100 numbers dynamically and append to the container div. Even numbers background is green. Odd numbers background is yellow. Prime numbers background is red.

document.addEventListener("DOMContentLoaded", init);

function init() {
  const df = new DocumentFragment();
  const container = document.getElementById("container");

  for (let i = 1; i <= 100; i++) {
    const el = document.createElement("div");
    el.textContent = i;
    el.classList.add("number");

    if(i % 2 === 0){
        el.classList.add("even");
    }

    if(i % 2 !== 0){
        el.classList.add("odd");
    }

    if(isPrime(i)){
        el.classList.add("prime");
    }

    df.append(el);
  }

  container.append(df);
}

function isPrime(number) {
  let counter = 0;

  for (let i = 2; i <= number; i++) {
    if(number % i === 0){
        counter++;
    }
  }

  if(counter === 1){
    return true;
  }
  else{
    return false;
  }
}