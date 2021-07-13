let db;

const request = indexedDB.open("budget", 1);

request.onupgradeneeded = function (event) {
    const db = event.target.result;
    db.createObjectStore("pending", { autoIncrement: true });
};

request.onsuccess = function (event) {
    db = event.target.result;

    if (navigator.onLine) {
        checkDatabase();
    }
};

request.onerror = function (event) {
    console.log("Oh no!" + event.target.errorCode);
};

function saveRecord(record) {
    const transaction = db.transaction("pending", "readwrite");
    const store = transaction.objectStore("pending");
    store.add(record);
}

function checkDatabase() {
    // open a transaction on your pending db
    const transaction = db.transaction("pending", "readwrite");

    // access your pending object store
    const store = transaction.objectStore("pending");
    // get all records from store and set to a variable
    const getAll = store.getAll();