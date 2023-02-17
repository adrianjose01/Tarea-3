const $contactContainer = document.getElementById("contact_container");
const $form = document.getElementById("formulario");
const $inputName = document.getElementById("name");
const $inputLastName = document.getElementById("lastName");
const $inputPhone = document.getElementById("PhoneNumber");

const myApp = async () => {
  const response = await fetch("http://www.raydelto.org/agenda.php");
  const data = await response.json();
  DisplayContacts(data);
};

const DisplayContacts = (arrayContacts = []) => {
  arrayContacts.forEach((contact) => {
    let html = `<div class="row card">
                    <div class="col-4">
                    <p><b>Nombre:</b> ${contact.nombre}</p>
                    </div>
                    <div class="col-4">
                    <p><b>Apellido:</b> ${contact.apellido}</p>
                    </div>
                    <div class="col-4">
                    <p><b>Telefono:</b> ${contact.telefono}</p>
                    </div>
                </div>`;
    $contactContainer.insertAdjacentHTML("beforeend", html);
  });
};

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = $inputName.value;
  const lastName = $inputLastName.value;
  const phoneNumber = $inputPhone.value;

  console.log(name, lastName, phoneNumber);

  fetch("http://www.raydelto.org/agenda.php", {
    method: "POST",
    body: JSON.stringify({
      nombre: name,
      apellido: lastName,
      telefono: phoneNumber,
    }),
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
});

myApp();
