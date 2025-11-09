function formatMessage(message, maxLength) {

    if (message.length <= maxLength) {

        return message;

    } else {

        return `${message.slice(0, maxLength)}...`;
    }
}

console.log(formatMessage("Curabitur ligula sapien")); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien")); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec")); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec")); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla")); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla")); // "Nunc sed turpis a felis in nunc fringilla"
