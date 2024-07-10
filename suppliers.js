document.addEventListener('DOMContentLoaded', function() {
    loadSuppliers();
});

function loadSuppliers() {
    const suppliers = JSON.parse(localStorage.getItem('suppliers')) || [];
    const suppliersBody = document.getElementById('suppliersBody');
    suppliersBody.innerHTML = '';
    suppliers.forEach((supplier, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${supplier.name}</td>
            <td>${supplier.contact}</td>
            <td>${supplier.email}</td>
            <td>${supplier.address}</td>
            <td><button onclick="deleteSupplier(${index})">Delete</button></td>
        `;
        suppliersBody.appendChild(row);
    });
}

function addSupplier(event) {
    event.preventDefault();
    const supplier = {
        name: document.getElementById('supplierName').value,
        contact: document.getElementById('supplierContact').value,
        email: document.getElementById('supplierEmail').value,
        address: document.getElementById('supplierAddress').value
    };
    const suppliers = JSON.parse(localStorage.getItem('suppliers')) || [];
    suppliers.push(supplier);
    localStorage.setItem('suppliers', JSON.stringify(suppliers));
    loadSuppliers();
    document.getElementById('supplierForm').reset();
}

function deleteSupplier(index) {
    const suppliers = JSON.parse(localStorage.getItem('suppliers')) || [];
    suppliers.splice(index, 1);
    localStorage.setItem('suppliers', JSON.stringify(suppliers));
    loadSuppliers();
}

function uploadSuppliers(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const parsedData = XLSX.utils.sheet_to_json(sheet);

        const suppliers = JSON.parse(localStorage.getItem('suppliers')) || [];
        parsedData.forEach(supplier => {
            suppliers.push({
                name: supplier.Name,
                contact: supplier.Contact,
                email: supplier.Email,
                address: supplier.Address
            });
        });
        localStorage.setItem('suppliers', JSON.stringify(suppliers));
        loadSuppliers();
    };

    reader.readAsArrayBuffer(file);
}

function exportSuppliers() {
    const suppliers = JSON.parse(localStorage.getItem('suppliers')) || [];
    const worksheet = XLSX.utils.json_to_sheet(suppliers);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Suppliers");
    XLSX.writeFile(workbook, 'suppliers.xlsx');
}
