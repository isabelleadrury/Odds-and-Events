const bank = [];
const odds = [];
const evens = [];

function addNumbers(numbers) {
  bank.push(numbers);
  render();
}

function sortOne() {}

function sortAll() {}

function sortNumbers(numbers) {}
function NumberForm() {
  const $form = document.createElement("form");
  $form.innerHTML = `<label for="bank">Add a number to the bank</label>
    <input name="bank" id="bank" type="text" placeholder="Add number">
    <button type="submit" data-action="add">Add Number</button>
     <button type="submit" data-action="sortOne">Sort One</button>
      <button type="submit" data-action="sortAll">Sort All</button>`;
  $form.addEventListener("submit", function (event) {
    event.preventDefault();
    const action = event.submitter.dataset.action;
    const formData = new FormData($form);
    const userInputedNumber = formData.get("bank");
    if (action === "add" && userInputedNumber !== "") {
      addNumbers(userInputedNumber);
    } else if (action === "sortOne") {
      sortOne();
    } else if (action === "sortAll") {
      sortAll();
    }
  });
  return $form;
}

function NumberGroup() {}

NumberForm();

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
<h1>Odds and Events</h1>
    `;
}

render();
