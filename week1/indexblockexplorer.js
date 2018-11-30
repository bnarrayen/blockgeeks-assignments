    function updateBlocks() {
        let provider = ethers.getDefaultProvider();
}
    // TODO: Get the current gas price and pass the result to printGasPrice() function
        provider.getGasPrice().then((gasPrice) =>  {
            gasPrice = current.gasPrice;
            return gasPrice;
            })
        function printGasPrice(gasPrice) {
        var gasPriceText = document.getElementById('gasPrice');
        gasPriceText.insertAdjacentHTML('beforeend', gasPrice);
}
    // TODO: Get the latest block number
        provider.getBlockNumber().then((BlockNumber) => {
            BlockNumber = current.BlockNumber;
            return BlockNumber;
})

    // TODO: Get the last 10 blocks and pass the result to printBlock() function
        provider.getBlocks(-1,-10).then ((Block) => {
            return Block;
})
        function printBlock(block) {
        var table = document.getElementById('blocks');
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        cell1.innerHTML = block.number;
        cell2.innerHTML = block.hash;
        cell3.innerHTML = block.timestamp;
        cell4.innerHTML = block.miner;
        cell5.innerHTML = block['transactions'].length;
}
