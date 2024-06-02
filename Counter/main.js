let count = 0;
const countHeader = document.getElementById("count");
const Addbtn = document.getElementById("add");
const subBtn = document.getElementById("sub");

Addbtn.addEventListener("click", () => {
  count++;
  countHeader.innerText = count;
  // console.log("Hello from Add");
});

subBtn.addEventListener("click", () => {
  count--;
  countHeader.innerText = count;
});
