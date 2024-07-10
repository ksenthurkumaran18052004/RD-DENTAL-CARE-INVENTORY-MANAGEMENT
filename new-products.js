// const componentAttributes = {
//     Resistor: [
//         { name: "Resistor Type", type: "text", placeholder: "Enter type (e.g. R0805)" },
//         { name: "Resistance Value", type: "number", placeholder: "Enter in Ω (e.g. 1.2Ω)" },
//         { name: "Power Rating", type: "number", placeholder: "Enter in W (e.g. 0.25W)" },
//         { name: "Voltage Rating", type: "number", placeholder: "Enter in V (e.g. 50V)" },
//         { name: "Temperature Coefficient", type: "number", placeholder: "Enter in ppm/°C (e.g. 100ppm/°C)" },
//         { name: "Tolerance", type: "number", placeholder: "Enter in % (e.g. ±1%)" },
//         { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
//         { name: "Label Type", type: "text", placeholder: "Enter label type (e.g. R1, R2, R3)" },
//         { name: "Location Stored", type: "text", placeholder: "Enter location stored" },
//     ],
//     Capacitor: [
//         { name: "Capacitance Value", type: "number", placeholder: "Enter in µF (e.g. 1.2µF)" },
//         { name: "Voltage Rating", type: "number", placeholder: "Enter in V (e.g. 25V)" },
//         { name: "Tolerance", type: "number", placeholder: "Enter in % (e.g. ±10%)" },
//         { name: "Dielectric Type", type: "text", placeholder: "Enter dielectric type (e.g. X5R, X7R)" },
//         { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
//         { name: "Label Type",type:"text",placeholder:"Enter label type (e.g. C1, C2, C3)"},
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//     ],
//     Inductor: [
//         { name: "Inductance Value", type: "number", placeholder: "Enter in µH (e.g. 10µH)" },
//         { name: "Current Rating", type: "number", placeholder: "Enter in A (e.g. 1.5A)" },
//         { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//     ],
//     Diode: [
//         {name:  "Value" ,type:"text",placeholder:"Enter diode value "},
//         { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. 1N4148)" },
//         { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//     ],
//     Transistor: [
//         { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. 2N2222)" },
//         { name: "Voltage Rating", type: "number", placeholder: "Enter in V (e.g. 40V)" },
//         { name: "Current Rating", type: "number", placeholder: "Enter in A (e.g. 0.8A)" },
//         { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//     ],
//     Mosfet: [
//         { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. SI2312)" },
//         { name: "Voltage Rating", type: "number", placeholder: "Enter in V (e.g. 60V)" },
//         { name: "Current Rating", type: "number", placeholder: "Enter in A (e.g. 1.0A)" },
//         { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//     ],
//     UFL: [
//         {name:  "Value", type: "text", placeholder: "Enter value (e.g. DS3231)" },
//         { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. U.FL-R-SMT-1)" },
//         { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//     ],
//     Crystal: [
//         { name: "Type", type: "text", placeholder: "Enter type (e.g. SMD)"},
//         { name: "Frequency", type: "number", placeholder: "Enter in kHz (e.g. 32.768kHz)" },
//         { name: "Tolerance", type: "number", placeholder: "Enter in ppm (e.g. ±20ppm)" },
//         { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//     ],
//     Regulator: [
//         { name: "Value" ,type:"text",placeholder:"Enter regulator value"},
//         { name: "Label" ,type:"text",placeholder:"Enter label (e.g. U1)"},
//         { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//     ],
//     Modem: [
//         {name:  "Value", type: "text", placeholder: "Enter value (e.g. DS3231)" },
//         { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. Simcom_A7672S)" },
//         { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//     ],
//     Pressure_Sensor: [
//         {name:  "Value", type: "text", placeholder: "Enter value (e.g. DS3231)" },
//         { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. DPS310)" },
//         { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//     ],
//     RTC: [
//         {name:  "Value", type: "text", placeholder: "Enter value (e.g. DS3231)" },
//         { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. BM8563ESA)" },
//         { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//     ],
//     ESP: [
//         {name:  "Value", type: "text", placeholder: "Enter value (e.g. DS3231)" },
//         { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. ESP WROOM 32)" },
//         { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//     ],
//     RS485: [
//         {name:  "Value", type: "text", placeholder: "Enter value (e.g. DS3231)" },
//         { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. MAX485CSA+T)" },
//         { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//     ],
//     Sim_Slot: [
//         {name:  "Value", type: "text", placeholder: "Enter value (e.g. DS3231)" },
//         { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. SIM-1305-6P)" },
//         { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//     ],
//     Connector: [
//         { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. 8pin)" },
//         { name: "Pin Count", type: "number", placeholder: "Enter pin count (e.g. 8)" },
//         { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. Leaded)" },
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//     ],
//     Enclosure: [
//         {name:  "Value", type: "text", placeholder: "Enter value (e.g. DS3231)" },
//         { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. Enclosure)" },
//         { name: "Dimensions", type: "text", placeholder: "Enter dimensions (e.g. 120 x 60 x 40 mm)" },
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//     ],
//     UFL_Cable: [
//         { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. UFL Cable)" },
//         { name: "Length", type: "number", placeholder: "Enter length (e.g. 50mm)" },
//         { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//     ],
// };


// function updateAttributes() {
//     const componentType = document.getElementById('componentType').value;
//     const attributeDropdowns = document.getElementById('attributeDropdowns');

//     attributeDropdowns.innerHTML = '';

//     if (componentType && componentAttributes[componentType]) {
//         componentAttributes[componentType].forEach(attr => {
//             const label = document.createElement('label');
//             label.setAttribute('for', `add-${attr.name}`);
//             label.textContent = `${attr.name}:`;
//             const input = document.createElement('input');
//             input.setAttribute('type', attr.type);
//             input.setAttribute('id', `add-${attr.name}`);
//             input.setAttribute('placeholder', attr.placeholder);
//             attributeDropdowns.appendChild(label);
//             attributeDropdowns.appendChild(input);
//         });
//     }
// }

// function addNewProduct() {
//     const componentType = document.getElementById('componentType').value;
//     if (!componentType) {
//         alert("Please select a component type");
//         return;
//     }

//     let values = {};
//     let allFieldsFilled = true;

//     componentAttributes[componentType].forEach(attr => {
//         const input = document.getElementById(`add-${attr.name}`);
//         if (input && input.value) {
//             values[attr.name] = input.value;
//         } else {
//             allFieldsFilled = false;
//         }
//     });

//     const quantityInput = document.getElementById('quantity');
//     if (quantityInput && quantityInput.value) {
//         values['Quantity'] = quantityInput.value;
//     } else {
//         allFieldsFilled = false;
//     }

//     if (!allFieldsFilled) {
//         alert("Please fill in all fields");
//         return;
//     }

//     const tableId = `${componentType.toLowerCase().replace(' ', '')}Table`;
//     const tableSectionId = `${componentType.toLowerCase().replace(' ', '')}TableSection`;
//     const tableSection = document.getElementById(tableSectionId);

//     if (!tableSection) {
//         console.error(`Element with ID ${tableSectionId} not found!`);
//         alert("Error: Table section not found.");
//         return;
//     }

//     tableSection.style.display = 'block';

//     const tableBody = document.querySelector(`#${tableId} tbody`);
//     const newRow = document.createElement('tr');
//     newRow.innerHTML = Object.values(values).map(value => `<td>${value}</td>`).join('');
//     tableBody.appendChild(newRow);

//     saveToLocalStorage();
//     alert(`${componentType} added successfully`);
// }

// function saveToLocalStorage() {
//     const currentData = JSON.parse(localStorage.getItem('newProductsData')) || [];
//     const data = [...currentData];

//     document.querySelectorAll('table tbody tr').forEach(row => {
//         const rowData = {};
//         const tableId = row.closest('table').id;
//         const componentType = tableId.replace('Table', '');
//         rowData['Component Type'] = componentType.charAt(0).toUpperCase() + componentType.slice(1);

//         row.querySelectorAll('td').forEach((cell, index) => {
//             const keyElement = row.closest('table').querySelector('thead th:nth-child(' + (index + 1) + ')');
//             if (keyElement) {
//                 const key = keyElement.innerText;
//                 rowData[key] = cell.innerText;
//             }
//         });

//         const exists = data.find(
//             item => JSON.stringify(item) === JSON.stringify(rowData)
//         );

//         if (!exists) {
//             data.push(rowData);
//         }
//     });

//     localStorage.setItem('newProductsData', JSON.stringify(data));
// }

// document.addEventListener('DOMContentLoaded', () => {
//     const savedProducts = localStorage.getItem('newProductsData');
//     if (savedProducts) {
//         const products = JSON.parse(savedProducts);
//         products.forEach(product => addProductToTable(product));
//     }
// });

// function addProductToTable(product) {
//     const componentType = product['Component Type'];
//     const tableId = `${componentType.toLowerCase().replace(' ', '')}Table`;
//     const tableSectionId = `${componentType.toLowerCase().replace(' ', '')}TableSection`;
//     const tableSection = document.getElementById(tableSectionId);

//     if (!tableSection) {
//         return;
//     }

//     tableSection.style.display = 'block';

//     const tableBody = document.querySelector(`#${tableId} tbody`);
//     const newRow = document.createElement('tr');
//     newRow.innerHTML = Object.values(product).map(value => `<td>${value}</td>`).join('');
//     tableBody.appendChild(newRow);
// }

// function proceedToCheckout() {
//     saveToLocalStorage();
//     window.location.href = "checkoutpage_copy.html";
// }















































































































































const componentAttributes = {
    Resistor: [
        { name: "Resistor Type", type: "text", placeholder: "Enter type (e.g. R0805)" },
        { name: "Resistance Value", type: "number", placeholder: "Enter in Ω (e.g. 1.2Ω)" },
        { name: "Power Rating", type: "number", placeholder: "Enter in W (e.g. 0.25W)" },
        { name: "Voltage Rating", type: "number", placeholder: "Enter in V (e.g. 50V)" },
        { name: "Temperature Coefficient", type: "number", placeholder: "Enter in ppm/°C (e.g. 100ppm/°C)" },
        { name: "Tolerance", type: "number", placeholder: "Enter in % (e.g. ±1%)" },
        { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
        { name: "Label Type", type: "text", placeholder: "Enter label type (e.g. R1, R2, R3)" },
        { name: "Location Stored", type: "text", placeholder: "Enter location stored" },
    ],
    Capacitor: [
        { name: "Capacitance Value", type: "number", placeholder: "Enter in µF (e.g. 1.2µF)" },
        { name: "Voltage Rating", type: "number", placeholder: "Enter in V (e.g. 25V)" },
        { name: "Tolerance", type: "number", placeholder: "Enter in % (e.g. ±10%)" },
        { name: "Dielectric Type", type: "text", placeholder: "Enter dielectric type (e.g. X5R, X7R)" },
        { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
        { name: "Label Type",type:"text",placeholder:"Enter label type (e.g. C1, C2, C3)"},
        { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
    ],
    Inductor: [
        { name: "Inductance Value", type: "number", placeholder: "Enter in µH (e.g. 10µH)" },
        { name: "Current Rating", type: "number", placeholder: "Enter in A (e.g. 1.5A)" },
        { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
        { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
    ],
    Diode: [
        {name:  "Value" ,type:"text",placeholder:"Enter diode value "},
        { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. 1N4148)" },
        { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
        { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
    ],
    Transistor: [
        { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. 2N2222)" },
        { name: "Voltage Rating", type: "number", placeholder: "Enter in V (e.g. 40V)" },
        { name: "Current Rating", type: "number", placeholder: "Enter in A (e.g. 0.8A)" },
        { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
        { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
    ],
    Mosfet: [
        { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. SI2312)" },
        { name: "Voltage Rating", type: "number", placeholder: "Enter in V (e.g. 60V)" },
        { name: "Current Rating", type: "number", placeholder: "Enter in A (e.g. 1.0A)" },
        { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
        { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
    ],
    UFL: [
        {name:  "Value", type: "text", placeholder: "Enter value (e.g. DS3231)" },
        { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. U.FL-R-SMT-1)" },
        { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
        { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
    ],
    Crystal: [
        { name: "Type", type: "text", placeholder: "Enter type (e.g. SMD)"},
        { name: "Frequency", type: "number", placeholder: "Enter in kHz (e.g. 32.768kHz)" },
        { name: "Tolerance", type: "number", placeholder: "Enter in ppm (e.g. ±20ppm)" },
        { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
        { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
    ],
    Regulator: [
        { name: "Value" ,type:"text",placeholder:"Enter regulator value"},
        { name: "Label" ,type:"text",placeholder:"Enter label (e.g. U1)"},
        { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
        { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
    ],
    Modem: [
        {name:  "Value", type: "text", placeholder: "Enter value (e.g. DS3231)" },
        { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. Simcom_A7672S)" },
        { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
        { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
    ],
    Pressure_Sensor: [
        {name:  "Value", type: "text", placeholder: "Enter value (e.g. DS3231)" },
        { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. DPS310)" },
        { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
        { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
    ],
    RTC: [
        {name:  "Value", type: "text", placeholder: "Enter value (e.g. DS3231)" },
        { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. BM8563ESA)" },
        { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
        { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
    ],
    ESP: [
        {name:  "Value", type: "text", placeholder: "Enter value (e.g. DS3231)" },
        { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. ESP WROOM 32)" },
        { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
        { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
    ],
    RS485: [
        {name:  "Value", type: "text", placeholder: "Enter value (e.g. DS3231)" },
        { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. MAX485CSA+T)" },
        { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
        { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
    ],
    Sim_Slot: [
        {name:  "Value", type: "text", placeholder: "Enter value (e.g. DS3231)" },
        { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. SIM-1305-6P)" },
        { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
        { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
    ],
    Connector: [
        { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. 8pin)" },
        { name: "Pin Count", type: "number", placeholder: "Enter pin count (e.g. 8)" },
        { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. Leaded)" },
        { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
    ],
    Enclosure: [
        {name:  "Value", type: "text", placeholder: "Enter value (e.g. DS3231)" },
        { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. Enclosure)" },
        { name: "Dimensions", type: "text", placeholder: "Enter dimensions (e.g. 120 x 60 x 40 mm)" },
        { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
    ],
    UFL_Cable: [
        { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. UFL Cable)" },
        { name: "Length", type: "number", placeholder: "Enter length (e.g. 50mm)" },
        { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
        { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
    ],
};


function updateAttributes() {
    const componentType = document.getElementById('componentType').value;
    const attributeDropdowns = document.getElementById('attributeDropdowns');

    attributeDropdowns.innerHTML = '';

    if (componentType && componentAttributes[componentType]) {
        componentAttributes[componentType].forEach(attr => {
            const label = document.createElement('label');
            label.setAttribute('for', `add-${attr.name}`);
            label.textContent = `${attr.name}:`;
            const input = document.createElement('input');
            input.setAttribute('type', attr.type);
            input.setAttribute('id', `add-${attr.name}`);
            input.setAttribute('placeholder', attr.placeholder);
            attributeDropdowns.appendChild(label);
            attributeDropdowns.appendChild(input);
        });
    }
}

function addNewProduct() {
    const componentType = document.getElementById('componentType').value;
    if (!componentType) {
        alert("Please select a component type");
        return;
    }

    let values = {};
    let allFieldsFilled = true;

    componentAttributes[componentType].forEach(attr => {
        const input = document.getElementById(`add-${attr.name}`);
        if (input && input.value) {
            values[attr.name] = input.value;
        } else {
            allFieldsFilled = false;
        }
    });

    const quantityInput = document.getElementById('quantity');
    if (quantityInput && quantityInput.value) {
        values['Quantity'] = quantityInput.value;
    } else {
        allFieldsFilled = false;
    }

    if (!allFieldsFilled) {
        alert("Please fill in all fields");
        return;
    }

    const tableId = `${componentType.toLowerCase().replace(' ', '')}Table`;
    const tableSectionId = `${componentType.toLowerCase().replace(' ', '')}TableSection`;
    const tableSection = document.getElementById(tableSectionId);

    if (!tableSection) {
        console.error(`Element with ID ${tableSectionId} not found!`);
        alert("Error: Table section not found.");
        return;
    }

    tableSection.style.display = 'block';

    const tableBody = document.querySelector(`#${tableId} tbody`);
    const newRow = document.createElement('tr');
    newRow.innerHTML = Object.values(values).map(value => `<td>${value}</td>`).join('');
    newRow.innerHTML += '<td><button onclick="deleteRow(this)">Delete</button></td>';
    tableBody.appendChild(newRow);

    saveToLocalStorage();
    alert(`${componentType} added successfully`);
}

function saveToLocalStorage() {
    const data = [];

    document.querySelectorAll('table tbody tr').forEach(row => {
        const rowData = {};
        const tableId = row.closest('table').id;
        const componentType = tableId.replace('Table', '');
        rowData['Component Type'] = componentType.charAt(0).toUpperCase() + componentType.slice(1);

        row.querySelectorAll('td').forEach((cell, index) => {
            const keyElement = row.closest('table').querySelector('thead th:nth-child(' + (index + 1) + ')');
            if (keyElement) {
                const key = keyElement.innerText;
                rowData[key] = cell.innerText;
            }
        });

        data.push(rowData);
    });

    localStorage.setItem('newProductsData', JSON.stringify(data));
}

document.addEventListener('DOMContentLoaded', () => {
    const savedProducts = localStorage.getItem('newProductsData');
    if (savedProducts) {
        const products = JSON.parse(savedProducts);
        products.forEach(product => addProductToTable(product));
    }
});

function addProductToTable(product) {
    const componentType = product['Component Type'];
    const tableId = `${componentType.toLowerCase().replace(' ', '')}Table`;
    const tableSectionId = `${componentType.toLowerCase().replace(' ', '')}TableSection`;
    const tableSection = document.getElementById(tableSectionId);

    if (!tableSection) {
        return;
    }

    tableSection.style.display = 'block';

    const tableBody = document.querySelector(`#${tableId} tbody`);
    const newRow = document.createElement('tr');
    
    const headers = Array.from(document.querySelector(`#${tableId} thead tr`).children).map(th => th.innerText);
    headers.forEach(header => {
        const value = product[header] || '';
        newRow.innerHTML += `<td>${value}</td>`;
    });

    newRow.innerHTML += '<td><button onclick="deleteRow(this)">Delete</button></td>';
    tableBody.appendChild(newRow);
}

function deleteRow(button) {
    const row = button.closest('tr');
    row.remove();
    saveToLocalStorage();
}

function proceedToCheckout() {
    saveToLocalStorage();
    window.location.href = "checkoutpage_copy.html";
}