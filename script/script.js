const urlParams = new URLSearchParams(window.location.search);
const isYes = urlParams.get("yes") === "true"; // Si el valor es 'true', entonces es un "Sí"

// Referencias a los elementos HTML
const card = document.getElementById("card");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const loading = document.getElementById("loading");
const message = document.getElementById("message");

// Imágenes y mensajes de acuerdo con la respuesta
const yesImage = "images/yes-valentine.jpg"; // Imagen para el "Sí"
const noImage = "images/no-valentine.jpg"; // Imagen para el "No"
const yesMessage = "¡Yay! You said YES! 💖";
const noMessage = "Aww, maybe next time 😢";

// Función para voltear la tarjeta
function flipCard() {
    card.classList.toggle("flip");
}

// Función para manejar el clic en el botón "Sí"
yesBtn.addEventListener("click", () => {
    message.innerText = "Redirigiendo...";
    loading.style.display = "flex"; // Mostrar el spinner
    flipCard();

    // Redirigir a la página de "Sí" después de 3 segundos
    setTimeout(
        () => {
            window.location.href = "sheSaidYes.html"; // Redirigir a la página "Yes"
        },

        3000,
    ); // 3000 ms = 3 segundos
});

// Función para manejar el clic en el botón "No"
noBtn.addEventListener("click", () => {
    message.innerText = "Redirigiendo...";
    loading.style.display = "flex"; // Mostrar el spinner
    flipCard();

    // Redirigir a la página de "No" después de 3 segundos
    setTimeout(
        () => {
            window.location.href = "sheSaidNo.html"; // Redirigir a la página "No"
        },

        3000,
    ); // 3000 ms = 3 segundos
});

// Si ya tenemos el parámetro en la URL, mostrar la respuesta automáticamente
if (isYes) {
    message.innerText = "Redirigiendo...";
    loading.style.display = "flex"; // Mostrar el spinner
    flipCard();

    // Redirigir a la página de "Sí" después de 3 segundos
    setTimeout(
        () => {
            window.location.href = "sheSaidYes.html"; // Redirigir a la página "Yes"
        },

        3000,
    ); // 3000 ms = 3 segundos
}
