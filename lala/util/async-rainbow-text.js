require(`colors`);

let asyncRainbowText = async (text, ms) => {
    await new Promise(response => {
        console.log(`Processing...`);
        response(setTimeout(() => {
            console.log(`Your text: ${text.rainbow} after ${ms/1000} seconds`);
        },ms));
    });
};

module.exports = asyncRainbowText;