// let inventory = [];
// let newProducts = [];
// const boms = {
//     bom1: [],
//     bom2: [],
//     bom3: []
// };

// function toggleform() {
//     const action = document.getElementById('action').value;
//     document.getElementById('input-form').style.display = 'none';
//     document.getElementById('remove-form').style.display = 'none';
//     document.getElementById('available-form').style.display = 'none';
//     if (action === 'input') {
//         document.getElementById('input-form').style.display = 'block';
//     } else if (action === 'remove') {
//         document.getElementById('remove-form').style.display = 'block';
//     } else if (action === 'available') {
//         document.getElementById('available-form').style.display = 'block';
//     }
// }

// function handleFileInput() {
//     const inputFile = document.getElementById('inputfile').files[0];
//     const reader = new FileReader();
//     reader.onload = function(event) {
//         const data = new Uint8Array(event.target.result);
//         const workbook = XLSX.read(data, { type: 'array' });
//         const sheetName = workbook.SheetNames[0];
//         const sheet = workbook.Sheets[sheetName];
//         const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
//         updateInventory(jsonData);
//     };
//     reader.readAsArrayBuffer(inputFile);
// }

// function handleFileRemove() {
//     const removeFile = document.getElementById('removefile').files[0];
//     const reader = new FileReader();
//     reader.onload = function(event) {
//         const data = new Uint8Array(event.target.result);
//         const workbook = XLSX.read(data, { type: 'array' });
//         const sheetName = workbook.SheetNames[0];
//         const sheet = workbook.Sheets[sheetName];
//         const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
//         updateNewProducts(jsonData);
//     };
//     reader.readAsArrayBuffer(removeFile);
// }

// function handleBOMUpload(event, bomType) {
//     const file = event.target.files[0];
//     const reader = new FileReader();
//     reader.onload = function(event) {
//         const data = new Uint8Array(event.target.result);
//         const workbook = XLSX.read(data, { type: 'array' });
//         const sheetName = workbook.SheetNames[0];
//         const sheet = workbook.Sheets[sheetName];
//         const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
//         boms[bomType] = jsonData;
//         updateBOMTable(jsonData, bomType);
//         if (inventory.length > 0) {
//             addBOMColumnToInventory();
//         }
//         if (newProducts.length > 0) {
//             addBOMColumnToNewProducts();
//         }
//     };
//     reader.readAsArrayBuffer(file);
// }

// function handleBOMSelection() {
//     const selectedBOM = document.getElementById('bom').value;
//     document.getElementById('bom1-upload').style.display = 'none';
//     document.getElementById('bom2-upload').style.display = 'none';
//     document.getElementById('bom3-upload').style.display = 'none';
//     if (selectedBOM) {
//         document.getElementById(`${selectedBOM}-upload`).style.display = 'block';
//     }
// }

// function uploadBOMFile(bomType) {
//     const bomFileInput = document.getElementById(`${bomType}-upload`).querySelector('input[type="file"]');
//     const file = bomFileInput.files[0];
//     const reader = new FileReader();
//     reader.onload = function(event) {
//         const data = new Uint8Array(event.target.result);
//         const workbook = XLSX.read(data, { type: 'array' });
//         const sheetName = workbook.SheetNames[0];
//         const sheet = workbook.Sheets[sheetName];
//         const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
//         boms[bomType] = jsonData;
//         updateBOMTable(jsonData, bomType);
//         if (inventory.length > 0) {
//             addBOMColumnToInventory();
//         }
//         if (newProducts.length > 0) {
//             addBOMColumnToNewProducts();
//         }
//     };
//     reader.readAsArrayBuffer(file);
// }

// function updateInventory(data) {
//     inventory = data;
//     updateInventoryTable();
// }

// function updateNewProducts(data) {
//     newProducts = data;
//     data.slice(1).forEach(entry => {
//         const component = inventory.find(item => item[1] === entry[1] && item[3] === entry[3]);
//         if (component) {
//             component[5] -= parseInt(entry[4]);
//         }
//     });
//     updateInventoryTable();
//     updateNewProductsTable();
// }

// function updateInventoryTable(data = inventory) {
//     const inventoryBody = document.getElementById('inventoryBody');
//     inventoryBody.innerHTML = '';
//     data.forEach((item, index) => {
//         if (index === 0) return; // Skip header row
//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td>${item[0] || ''}</td>
//             <td>${item[1] || ''}</td>
//             <td>${item[2] || ''}</td>
//             <td>${item[3] || ''}</td>
//             <td>${item[4] || ''}</td>
//             <td>${item[5] || ''}</td>
//             <td>${getBOMNumber(item)}</td>
//         `;
//         inventoryBody.appendChild(row);
//     });
// }

// function addBOMColumnToInventory() {
//     const inventoryBody = document.getElementById('inventoryBody');
//     const headerRow = document.getElementById('inventoryTable').querySelector('thead tr');
//     if (!headerRow.querySelector('th#bomNoHeader')) {
//         const bomNoHeader = document.createElement('th');
//         bomNoHeader.id = 'bomNoHeader';
//         bomNoHeader.innerText = "comp bom no";
//         headerRow.appendChild(bomNoHeader);
//     }

//     inventoryBody.innerHTML = '';
//     inventory.forEach((item, index) => {
//         if (index === 0) return; // Skip header row
//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td>${item[0] || ''}</td>
//             <td>${item[1] || ''}</td>
//             <td>${item[2] || ''}</td>
//             <td>${item[3] || ''}</td>
//             <td>${item[4] || ''}</td>
//             <td>${item[5] || ''}</td>
//             <td>${getBOMNumber(item)}</td>
//         `;
//         inventoryBody.appendChild(row);
//     });
// }

// function updateBOMTable(bomData, bomType) {
//     const bomBody = document.getElementById('bomBody');
//     bomBody.innerHTML = '';
//     document.getElementById('bomTableTitle').innerText = `BOM Materials (${bomType.toUpperCase()})`;
//     bomData.forEach((item, index) => {
//         if (index === 0) return; // Skip header row
//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td>${item[0] || ''}</td>
//             <td>${item[1] || ''}</td>
//             <td>${item[2] || ''}</td>
//             <td>${item[3] || ''}</td>
//             <td>${item[4] || ''}</td>
//             <td>${item[5] || ''}</td>
//             <td>${item[6] || ''}</td>
//         `;
//         bomBody.appendChild(row);
//     });
// }

// function updateNewProductsTable(data = newProducts) {
//     const newProductsBody = document.getElementById('newproductsbody');
//     newProductsBody.innerHTML = '';
//     data.forEach((item, index) => {
//         if (index === 0) return; // Skip header row
//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td>${item[0] || ''}</td>
//             <td>${item[1] || ''}</td>
//             <td>${item[2] || ''}</td>
//             <td>${item[3] || ''}</td>
//             <td>${item[4] || ''}</td>
//             <td>${getBOMNumber(item)}</td>
//         `;
//         newProductsBody.appendChild(row);
//     });
// }

// function getBOMNumber(item) {
//     let bomNumbers = [];
//     for (const [bomType, bomData] of Object.entries(boms)) {
//         if (bomData.some(bomItem => bomItem[1] === item[1] && bomItem[3] === item[3])) {
//             bomNumbers.push(bomType.toUpperCase());
//         }
//     }
//     return bomNumbers.join(', ');
// }

// document.getElementById('inputfile').addEventListener('change', handleFileInput);
// document.getElementById('removefile').addEventListener('change', handleFileRemove);
// document.getElementById('bomfile1').addEventListener('change', (event) => handleBOMUpload(event, 'bom1'));
// document.getElementById('bomfile2').addEventListener('change', (event) => handleBOMUpload(event, 'bom2'));
// document.getElementById('bomfile3').addEventListener('change', (event) => handleBOMUpload(event, 'bom3'));

let inventory = [];
let newProducts = [];
const boms = {
    bom1: [],
    bom2: [],
    bom3: []
};

function toggleform() {
    const action = document.getElementById('action').value;
    document.getElementById('input-form').style.display = 'none';
    document.getElementById('remove-form').style.display = 'none';
    document.getElementById('available-form').style.display = 'none';
    if (action === 'input') {
        document.getElementById('input-form').style.display = 'block';
    } else if (action === 'remove') {
        document.getElementById('remove-form').style.display = 'block';
    } else if (action === 'available') {
        document.getElementById('available-form').style.display = 'block';
    }
}

function handleBOMSelection() {
    const selectedBOM = document.getElementById('bom').value;
    document.getElementById('bom1-upload').style.display = 'none';
    document.getElementById('bom2-upload').style.display = 'none';
    document.getElementById('bom3-upload').style.display = 'none';
    if (selectedBOM) {
        document.getElementById(`${selectedBOM}-upload`).style.display = 'block';
    }
}

function uploadBOMFile(bomType) {
    const bomFileInput = document.getElementById(`${bomType}-upload`).querySelector('input[type="file"]');
    const file = bomFileInput.files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
        const data = new Uint8Array(event.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        boms[bomType] = jsonData;
        updateBOMTable(jsonData, bomType);
        //saving to local storage
        localStorage.setItem('boms', JSON.stringify(boms));
    };
    reader.readAsArrayBuffer(file);
}

function updateBOMTable(bomData, bomType) {
    const bomBody = document.getElementById('bomBody');
    bomBody.innerHTML = '';
    document.getElementById('bomTableTitle').innerText = `BOM Materials (${bomType.toUpperCase()})`;
    bomData.forEach((item, index) => {
        if (index === 0) return; // Skip header row
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item[0] || ''}</td>
            <td>${item[1] || ''}</td>
            <td>${item[2] || ''}</td>
            <td>${item[3] || ''}</td>
            <td>${item[4] || ''}</td>
            <td>${item[5] || ''}</td>
            <td>${item[6] || ''}</td>
        `;
        bomBody.appendChild(row);
    });
}

document.getElementById('bomfile1').addEventListener('change', (event) => handleBOMUpload(event, 'bom1'));
document.getElementById('bomfile2').addEventListener('change', (event) => handleBOMUpload(event, 'bom2'));
document.getElementById('bomfile3').addEventListener('change', (event) => handleBOMUpload(event, 'bom3'));
