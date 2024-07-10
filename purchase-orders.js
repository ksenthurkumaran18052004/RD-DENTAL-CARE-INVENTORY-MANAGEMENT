document.addEventListener('DOMContentLoaded', function() {
    loadSuppliersForOrders();
    loadPurchaseOrders();
});

function loadSuppliersForOrders() {
    const suppliers = JSON.parse(localStorage.getItem('suppliers')) || [];
    const orderSupplier = document.getElementById('orderSupplier');
    suppliers.forEach(supplier => {
        const option = document.createElement('option');
        option.value = supplier.name;
        option.textContent = supplier.name;
        orderSupplier.appendChild(option);
    });
}

function loadPurchaseOrders() {
    const purchaseOrders = JSON.parse(localStorage.getItem('purchaseOrders')) || [];
    const purchaseOrdersBody = document.getElementById('purchaseOrdersBody');
    purchaseOrdersBody.innerHTML = '';
    purchaseOrders.forEach((order, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${order.supplier}</td>
            <td>${order.date}</td>
            <td>${order.priorityDate}</td>
            <td>${order.status}</td>
            <td>${order.address}</td>
            <td><button onclick="deletePurchaseOrder(${index})">Delete</button></td>
        `;
        purchaseOrdersBody.appendChild(row);
    });
}

function addPurchaseOrder(event) {
    event.preventDefault();
    const purchaseOrder = {
        supplier: document.getElementById('orderSupplier').value,
        date: document.getElementById('orderDate').value,
        priorityDate: document.getElementById('priorityDate').value,
        status: document.getElementById('orderStatus').value,
        address: document.getElementById('orderAddress').value
    };
    const purchaseOrders = JSON.parse(localStorage.getItem('purchaseOrders')) || [];
    purchaseOrders.push(purchaseOrder);
    localStorage.setItem('purchaseOrders', JSON.stringify(purchaseOrders));
    loadPurchaseOrders();
    document.getElementById('purchaseOrderForm').reset();
}

function deletePurchaseOrder(index) {
    const purchaseOrders = JSON.parse(localStorage.getItem('purchaseOrders')) || [];
    purchaseOrders.splice(index, 1);
    localStorage.setItem('purchaseOrders', JSON.stringify(purchaseOrders));
    loadPurchaseOrders();
}

function exportPurchaseOrders() {
    const purchaseOrders = JSON.parse(localStorage.getItem('purchaseOrders')) || [];
    const worksheet = XLSX.utils.json_to_sheet(purchaseOrders);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Purchase Orders");
    XLSX.writeFile(workbook, 'purchase_orders.xlsx');
}
