const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

function displayChristmasTreeWithoutToys(height) {
    let spaceItem = '';
    let starItem = '';
    let i = 0;
    while (i < height) {
        spaceItem = '';
        starItem = '';
        for (let j = 0; j < height - i; j++) {
            spaceItem += ' ';
        }
        for (let j = 0; j < i * 2 + 1; j++) {
            starItem += '*';
        }
        console.log(spaceItem + starItem);
        i++;
    }
}

function displayChristmasTreeWithToys(height) {
    let rowWithToys = 1;
    let separateRowOfTree = '';
    for (let i = 0; i < height; i++) {
        for (let q = 0; q < height - i - 1; q++) {
            separateRowOfTree += ' ';
        }
        if ((i + 2) % 2 !== 0) {
            separateRowOfTree += '@'; // start
            for (let y = 0; y < rowWithToys - 2; y++) {
                separateRowOfTree += '*';
            }
            separateRowOfTree += '@'; // end
        } else {
            for (let y = 0; y < rowWithToys; y++) {
                separateRowOfTree += '*';
            }
        }
        rowWithToys += 2;
        console.log(separateRowOfTree);
        separateRowOfTree = '';
    }
}

function displayChristmasTreeWithToysDesignTree(height) {
    let i = 0;
    let spaceItem = '';
    let starItem = '';

    while (i < height) {
        spaceItem = '';
        starItem = '';

        for (let j = 0; j < height - i; j++) {
            spaceItem += ' ';
        }
        for (let q = 0; q < i * 2 + 1; q++) {
            if ((q + 1) % 2 === 0) {
                starItem += '@';
            } else {
                starItem += '*';
            }
        }
        console.log('\x1b[32m', spaceItem + starItem);
        i++;
    }
}

readline.question('Please enter the height of future Christmas tree: ', (treeHeight) => {
    const heightReadLine = Number(treeHeight);
    console.log('\nEnjoy your Christmas tree WITHOUT toys');
    displayChristmasTreeWithoutToys(heightReadLine);
    console.log('\nEnjoy your Christmas tree WITH toys');
    displayChristmasTreeWithToys(heightReadLine);
    console.log('\nEnjoy your Christmas tree WITH toys (tree with design)');
    displayChristmasTreeWithToysDesignTree(heightReadLine);
    readline.close();
});
