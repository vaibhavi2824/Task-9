document.addEventListener("DOMContentLoaded", function() {
    // Placeholder for any JavaScript functionality

    // Example: Add event listeners for pagination buttons
    document.querySelector('.prev-page').addEventListener('click', function() {
        alert('Previous page clicked');
    });

    document.querySelector('.next-page').addEventListener('click', function() {
        alert('Next page clicked');
    });

    // Example: Add event listener for the search input
    document.querySelector('.header input[type="text"]').addEventListener('input', function() {
        alert('Search input changed');
    });

    // Event listener for adding a customer (you can modify this as needed)
    document.querySelector('.add-customer').addEventListener('click', function() {
        const name = prompt('Enter name:');
        const description = prompt('Enter description:');
        const status = prompt('Enter status (open, paid, inactive, due):');
        const rate = prompt('Enter rate:');
        const balance = prompt('Enter balance:');
        const deposit = prompt('Enter deposit:');

        const statusClass = status.toLowerCase();
        const balanceClass = balance.startsWith('-') ? 'negative' : 'positive';

        const newRow = `
            <tr>
                <td><input type="checkbox"></td>
                <td>New</td>
                <td>${name}</td>
                <td>${description}</td>
                <td><span class="status ${statusClass}">${status}</span></td>
                <td>${rate}</td>
                <td class="balance ${balanceClass}">${balance}</td>
                <td>${deposit}</td>
            </tr>
        `;

        document.querySelector('.data-table tbody').insertAdjacentHTML('beforeend', newRow);
    });
});
