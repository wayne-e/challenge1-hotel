class Reservation {
    constructor(reservationId, initialDate, finalDate, dayNumber, companions, finalPrice, room, customer) {
        this._reservationId = reservationId;
        this._initialDate = initialDate;
        this._finalDate = finalDate;
        this._dayNumber = dayNumber;
        this._companions = companions;
        this._finalPrice = finalPrice;
        this._room = room;
        this._customer = customer;
    }
    get reservationId() {
        return this._reservationId;
    }
    get initialDate() {
        return this._initialDate;
    }
    get finalDate() {
        return this._finalDate;
    }
    get dayNumber() {
        return this._dayNumber;
    }
    get companions() {
        return this._companions;
    }
    get finalPrice() {
        return this._finalPrice;
    }
    get room() {
        return this._room;
    }
    get customer() {
        return this._customer;
    }
}
class Features {
    constructor(beds, bathrooms, tvs, wifi, roomService, pool) {
        this.oneBedPrice = 50;
        this.oneTvPrice = 25;
        this.roomServicePrice = 50;
        this._beds = beds;
        this._bathrooms = bathrooms;
        this._tvs = tvs;
        this._wifi = wifi;
        this._roomService = roomService;
        this._pool = pool;
    }
    get beds() {
        return this._beds;
    }
    get bathrooms() {
        return this._bathrooms;
    }
    get tvs() {
        return this._tvs;
    }
    get wifi() {
        return this._wifi;
    }
    get roomService() {
        return this._roomService;
    }
    get pool() {
        return this._pool;
    }
}
class Room {
    constructor(roomId, roomName, roomDescription, maxCompanions, maxBeds, maxTvs, roomFeatures, roomPrice, roomImage, availableRooms) {
        this._roomId = roomId;
        this._roomName = roomName;
        this._roomDescription = roomDescription;
        this._maxCompanions = maxCompanions;
        this._maxBeds = maxBeds;
        this._maxTvs = maxTvs;
        this._roomFeatures = roomFeatures;
        this._roomPrice = roomPrice;
        this._roomImage = roomImage;
        this._availableRooms = availableRooms;
    }
    get roomId() {
        return this._roomId;
    }
    get roomName() {
        return this._roomName;
    }
    get roomDescription() {
        return this._roomDescription;
    }
    get maxCompanions() {
        return this._maxCompanions;
    }
    get maxBeds() {
        return this._maxBeds;
    }
    get maxTvs() {
        return this._maxTvs;
    }
    get roomFeatures() {
        return this._roomFeatures;
    }
    get roomPrice() {
        return this._roomPrice;
    }
    get roomImage() {
        return this._roomImage;
    }
    get availableRooms() {
        return this._availableRooms;
    }
    createSelectOption() {
        let stringOption = `<option value="${this._roomId}">${this._roomName}</option>`;
        return stringOption;
    }
    createHTMLRoom() {
        let stringRoom = `
        <article id="${this._roomId}" class="flex roomArticle">
        <figure class="flex roomImage">
            <img src="${this._roomImage}" alt="imagen">
        </figure>
        <div class="roomDescriptionDiv mainInfo">
            <h2 class="roomName">${this._roomName}</h2>
            <p class="descriptionP">${this._roomDescription}</p>
            <h3 class="additionalDescription">Acompañantes Máximos: ${this._maxCompanions}</h3>
            <h3 class="additionalDescription">Precio Habitación: $${this._roomPrice.toFixed(2)}</h3>
        </div>
        <div class="roomDescriptionDiv additionalFeatures">
            <h3 class="additionalDescription">Caracteristicas:</h3>
            <h4 class="additionalDescription"><img class="icons" src="icons/4.png">Camas: ${this._roomFeatures.beds}</h4>
            <h4 class="additionalDescription"><img class="icons" src="icons/4.png">Baños: ${this._roomFeatures.bathrooms}</h4>
            <h4 class="additionalDescription"><img class="icons" src="icons/1.png">TVs: ${this._roomFeatures.tvs}</h4>
            <h4 class="additionalDescription"><img class="icons" src="icons/2.png">Wifi: ${this._roomFeatures.wifi}</h4>
            <h4 class="additionalDescription"><img class="icons" src="icons/3.png">Room Service: ${this._roomFeatures.roomService}</h4>
            <h4 class="additionalDescription"><img class="icons" src="icons/5.png">Piscina: ${this._roomFeatures.pool}</h4>
        </div>
        </article>`;
        return stringRoom;
    }
}
class Customer {
    constructor(customerName, customerLastName, customerDocument, customerEmail, cellphoneNumber) {
        this._customerName = customerName;
        this._customerLastName = customerLastName;
        this._customerDocument = customerDocument;
        this._customerEmail = customerEmail;
        this._cellphoneNumber = cellphoneNumber;
    }
    get customerName() {
        return this._customerName;
    }
    get customerLastName() {
        return this._customerLastName;
    }
    get customerDocument() {
        return this._customerDocument;
    }
    get _customerEmail() {
        return this.__customerEmail;
    }
    get cellphoneNumber() {
        return this._cellphoneNumber;
    }
}

bronzeFeatures = new Features(1, 1, 1, "Disponible", "No Disponible", "No Disponible");
silverFeatures = new Features(1, 1, 2, "Disponible", "No Disponible", "No Disponible");
goldenFeatures = new Features(1, 2, 2, "Disponible", "Disponible", "No Disponible");
diamondFeatures = new Features(1, 2, 3, "Disponible", "Disponible", "Disponible");

habitacion01 = new Room("HABITACION01", "Habitación Diamante", "El servicio más completo en la mejor habitación de nuestro Hotel", 2, 2, 4, diamondFeatures, 700.00, "img/plantilla.jpg", 10);
habitacion02 = new Room("HABITACION02", "Habitación Oro", "Excelente opción para un mejor esparcimiento", 4, 2, 3, goldenFeatures, 400.00, "img/plantilla.jpg", 20);
habitacion03 = new Room("HABITACION03", "Habitación Plata", "Atención personalizada al alcance de su bolsillo", 6, 3, 2, silverFeatures, 250.00, "img/plantilla.jpg", 30);
habitacion04 = new Room("HABITACION04", "Habitación Bronce", "Balance perfecto entre economía y confort", 8, 4, 2, bronzeFeatures, 100.00, "img/plantilla.jpg", 40);

let roomsArray = [habitacion01, habitacion02, habitacion03, habitacion04];
let featuresArray = [diamondFeatures, goldenFeatures, silverFeatures, bronzeFeatures];
let i = 0, totalRooms = roomsArray.length, selectedDays;

const roomsSection = document.getElementById("roomsSection");
buildRooms();
const roomArticles = document.getElementsByClassName("roomArticle");
const decreaseDayButton = document.getElementById("decreaseDayButton");
const increaseDayButton = document.getElementById("increaseDayButton");
const dayInput = document.getElementById("dayInput");
const initialDateInput = document.getElementById("initialDateInput");
const finalDateInput = document.getElementById("finalDateInput");
const continueBtn = document.getElementById("continueBtn");
const amountInput = document.getElementById("amountInput");

decreaseDayButton.addEventListener("click", function (event) {
    editDays(event);
});
increaseDayButton.addEventListener("click", function (event) {
    editDays(event);
});




function buildRooms() {
    let rooms = "", selectItems = "";
    for (i = 0; i < totalRooms; i++) {
        selectItems += roomsArray[i].createSelectOption();
        rooms += roomsArray[i].createHTMLRoom();
    }
    const roomSelect = document.getElementById("roomSelect");
    roomSelect.innerHTML += selectItems;
    roomsSection.innerHTML += rooms;
}
roomSelect.onchange = function () {
    let selectIndex = roomSelect.selectedIndex;
    if (selectIndex === 0) {
        defaultSelectElement(true);
    }
    else {
        defaultSelectElement(false);
        roomArticles[selectIndex - 1].classList.remove("hideElement");
    }
}
function defaultSelectElement(reset) {
    for (i = 0; i < totalRooms; i++) {
        if (reset) {
            roomArticles[i].classList.remove("hideElement");
        }
        else {
            roomArticles[i].classList.add("hideElement");
        }
    }
    increaseDayButton.disabled = reset;
    initialDateInput.disabled = reset;
    finalDateInput.disabled = reset;
    continueBtn.disabled = reset;
    if (reset) {
        decreaseDayButton.disabled = reset;
        roomSelect.selectedIndex = 0;
    }
}
function editDays(event) {
    let selectedValue = event.target.value;
    selectedDays = parseInt(dayInput.value);
    if (selectedValue === "+") {
        selectedDays++;
    } else {
        selectedDays--;
    }
    if (selectedDays === 0) {        
        amountInput.value = "Costo Total";
        decreaseDayButton.disabled = true;
        continueBtn.disabled = true;
    }
    else {
        amountInput.value = selectedDays;
        decreaseDayButton.disabled = false;
        continueBtn.disabled = false;
    }
    dayInput.value = selectedDays;
}