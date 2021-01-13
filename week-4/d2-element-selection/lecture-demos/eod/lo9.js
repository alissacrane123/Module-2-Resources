function getTimeString() {
    const now = new Date();
    const hourStr = String(now.getHours()).padStart(2, '0');
    const minuteStr = String(now.getMinutes()).padStart(2, '0')
    const secondsStr = String(now.getSeconds()).padStart(2, '0')
    return `${hourStr}:${minuteStr}:${secondsStr}`;
}

window.addEventListener('DOMContentLoaded', () => {

});
