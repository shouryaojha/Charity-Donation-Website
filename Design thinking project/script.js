function displayDateTime() {
    const now = new Date();
    const datetimeString = `Date: ${now.toLocaleDateString()} Time: ${now.toLocaleTimeString()}`;
    document.getElementById('datetime').innerText = datetimeString;
}
