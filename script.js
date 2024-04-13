let descriptionInput = document.getElementById('description');
let inputAmount = document.getElementById('amount');
let transferMethod = document.getElementById('transaction-method');
let transactionId = 0;
let addButton = document.getElementById('add-record')
let tableRecords = document.getElementById('record-table')
console.log(inputAmount.value == 0)
console.log(transferMethod.value == 0)


//json parsin
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

if(!Array.isArray(transactions)){
    transactions = []

}

transactions.forEach(transaction => {
    let row = document.createElement('tr');
    
    let descriptionCol = document.createElement('td')
    descriptionCol.innerHTML = transaction.description

    let amountCol = document.createElement('td')
    amountCol.innerHTML = transaction.amount;

    let transferMethodCol = document.createElement('td')
    transferMethodCol.innerHTML = transaction.transferMethod

    let transactionIdCol = document.createElement('td')
    transactionId += 1
    transactionIdCol.innerHTML = transactionId

    tableRecords.append(row)
    row.append(descriptionCol)
    row.append(amountCol)
    row.append(transferMethodCol)
    row.append(transactionIdCol)
console.log(transactions)

});


addButton.addEventListener('click', ()=>{
    if(descriptionInput !=='' && inputAmount.value !== '' && inputAmount.value !== 0 && transferMethod.value !== 'none'){
        let transaction = {
            description: descriptionInput.value,
            amount: inputAmount.value,
            transferMethod: transferMethod.value
        }

        //pushes the newly created object to the array
        transactions.push(transaction)

        localStorage.setItem('transactions', JSON.stringify(transactions))
        
        //create row
        let row = document.createElement('tr');

        //create col for description text
        let descriptionCol = document.createElement('td')
        descriptionCol.innerHTML = transaction.description;

        //create col for amount
        let amountCol = document.createElement('td')
        amountCol.innerHTML = transaction.amount;

        //create col for transfer method
        let transferMethodCol = document.createElement('td')
        switch(transferMethod.value){
            case 'cash':
                transferMethodCol.innerHTML = transferMethod.value;
                break;
            case 'credit':
                transferMethodCol.innerHTML = transferMethod.value;
                break;
            case 'check':
                transferMethodCol.innerHTML = transferMethod.value;
                break;
            case 'etransfer':
                transferMethodCol.innerHTML = transferMethod.value;
                break;
            default:
                transferMethodCol.textContent = 'Unknown';
        }

        let transactionIdCol = document.createElement('td')
        transactionId += 1
        transactionIdCol.innerHTML = transactionId

        tableRecords.append(row)
        row.append(descriptionCol)
        row.append(amountCol)
        row.append(transferMethodCol)
        row.append(transactionIdCol)

        descriptionInput.value =''
        inputAmount.value =''
        transferMethod.value =''
        tableRecords.value =''
    
    } else{
        alert('Some input fields are empty!')
    }

    

})

//uncomment the line below if u want to empty the localstorage
//localStorage.clear()