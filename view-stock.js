// const componentAttributes = {
//     Resistor: [
//         { name: "Resistor Type", type: "text", placeholder: "Enter type (e.g. R0805)" },
//         { name: "Resistance Value", type: "number", placeholder: "Enter in Ω (e.g. 1.2Ω)" },
//         { name: "Power Rating", type: "number", placeholder: "Enter in W (e.g. 0.25W)" },
//         { name: "Voltage Rating", type: "number", placeholder: "Enter in V (e.g. 50V)" },
//         { name: "Temperature Coefficient", type: "number", placeholder: "Enter in ppm/°C (e.g. 100ppm/°C)" },
//         { name: "Tolerance", type: "number", placeholder: "Enter in % (e.g. ±1%)" },
//         { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
//         { name: "Label Type",type:"text",placeholder:"Enter label type (e.g. R1, R2, R3)"},
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//         { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
//         { name: "Quantity",type:"number",placeholder:"Enter quantity"},
//         { name: "Price per item",type:"number",placeholder:"Enter price per item "},
//     ],
//     Capacitor: [
//         { name: "Capacitance Value", type: "number", placeholder: "Enter in µF (e.g. 1.2µF)" },
//         { name: "Voltage Rating", type: "number", placeholder: "Enter in V (e.g. 25V)" },
//         { name: "Tolerance", type: "number", placeholder: "Enter in % (e.g. ±10%)" },
//         { name: "Dielectric Type", type: "text", placeholder: "Enter dielectric type (e.g. X5R, X7R)" },
//         { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
//         { name: "Label Type",type:"text",placeholder:"Enter label type (e.g. C1, C2, C3)"},
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//         { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
//         { name: "Quantity",type:"number",placeholder:"Enter quantity"},
//         { name: "Price per item",type:"number",placeholder:"Enter price per item "},
//     ],
//     Inductor: [
//         { name: "Inductance Value", type: "number", placeholder: "Enter in µH (e.g. 10µH)" },
//         { name: "Current Rating", type: "number", placeholder: "Enter in A (e.g. 1.5A)" },
//         { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//         { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
//         { name: "Quantity",type:"number",placeholder:"Enter quantity"},
//         { name: "Price per item",type:"number",placeholder:"Enter price per item "},
//     ],
//     Diode: [
//         {name:  "Value" ,type:"text",placeholder:"Enter diode value "},
//         { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. 1N4148)" },
//         { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//         { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
//         { name: "Quantity",type:"number",placeholder:"Enter quantity"},
//         { name: "Price per item",type:"number",placeholder:"Enter price per item "},
//     ],
//     Transistor: [
//         { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. 2N2222)" },
//         { name: "Voltage Rating", type: "number", placeholder: "Enter in V (e.g. 40V)" },
//         { name: "Current Rating", type: "number", placeholder: "Enter in A (e.g. 0.8A)" },
//         { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//         { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
//         { name: "Quantity",type:"number",placeholder:"Enter quantity"},
//         { name: "Price per item",type:"number",placeholder:"Enter price per item "},
//     ],
//     Mosfet: [
//         { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. SI2312)" },
//         { name: "Voltage Rating", type: "number", placeholder: "Enter in V (e.g. 60V)" },
//         { name: "Current Rating", type: "number", placeholder: "Enter in A (e.g. 1.0A)" },
//         { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//         { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
//         { name: "Quantity",type:"number",placeholder:"Enter quantity"},
//         { name: "Price per item",type:"number",placeholder:"Enter price per item "},
//     ],
//     UFL: [
//         {name:  "Value", type: "text", placeholder: "Enter value (e.g. DS3231)" },
//         { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. U.FL-R-SMT-1)" },
//         { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//         { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
//         { name: "Quantity",type:"number",placeholder:"Enter quantity"},
//         { name: "Price per item",type:"number",placeholder:"Enter price per item "},
//     ],
//     Crystal: [
//         { name: "Type", type: "text", placeholder: "Enter type (e.g. SMD)"},
//         { name: "Frequency", type: "number", placeholder: "Enter in kHz (e.g. 32.768kHz)" },
//         { name: "Tolerance", type: "number", placeholder: "Enter in ppm (e.g. ±20ppm)" },
//         { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//         { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
//         { name: "Quantity",type:"number",placeholder:"Enter quantity"},
//         { name: "Price per item",type:"number",placeholder:"Enter price per item "},
//     ],
//     Regulator: [
//         { name: "Value" ,type:"text",placeholder:"Enter regulator value"},
//         { name: "Label" ,type:"text",placeholder:"Enter label (e.g. U1)"},
//         { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//         { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
//         { name: "Quantity",type:"number",placeholder:"Enter quantity"},
//         { name: "Price per item",type:"number",placeholder:"Enter price per item "},
//     ],
//     Modem: [
//         {name:  "Value", type: "text", placeholder: "Enter value (e.g. DS3231)" },
//         { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. Simcom_A7672S)" },
//         { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//         { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
//         { name: "Quantity",type:"number",placeholder:"Enter quantity"},
//         { name: "Price per item",type:"number",placeholder:"Enter price per item "},
//     ],
//     Pressure_Sensor: [
//         {name:  "Value", type: "text", placeholder: "Enter value (e.g. DS3231)" },
//         { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. DPS310)" },
//         { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//         { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
//         { name: "Quantity",type:"number",placeholder:"Enter quantity"},
//         { name: "Price per item",type:"number",placeholder:"Enter price per item "},
//     ],
//     RTC: [
//         {name:  "Value", type: "text", placeholder: "Enter value (e.g. DS3231)" },
//         { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. BM8563ESA)" },
//         { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//         { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
//         { name: "Quantity",type:"number",placeholder:"Enter quantity"},
//         { name: "Price per item",type:"number",placeholder:"Enter price per item "},
//     ],
//     ESP: [
//         {name:  "Value", type: "text", placeholder: "Enter value (e.g. DS3231)" },
//         { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. ESP WROOM 32)" },
//         { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//         { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
//         { name: "Quantity",type:"number",placeholder:"Enter quantity"},
//         { name: "Price per item",type:"number",placeholder:"Enter price per item "},
//     ],
//     RS485: [
//         {name:  "Value", type: "text", placeholder: "Enter value (e.g. DS3231)" },
//         { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. MAX485CSA+T)" },
//         { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//         { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
//         { name: "Quantity",type:"number",placeholder:"Enter quantity"},
//         { name: "Price per item",type:"number",placeholder:"Enter price per item "},
//     ],
//     Sim_Slot: [
//         {name:  "Value", type: "text", placeholder: "Enter value (e.g. DS3231)" },
//         { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. SIM-1305-6P)" },
//         { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//         { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
//         { name: "Quantity",type:"number",placeholder:"Enter quantity"},
//         { name: "Price per item",type:"number",placeholder:"Enter price per item "},
//     ],
//     Connector: [
//         { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. 8pin)" },
//         { name: "Pin Count", type: "number", placeholder: "Enter pin count (e.g. 8)" },
//         { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. Leaded)" },
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//         { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
//         { name: "Quantity",type:"number",placeholder:"Enter quantity"},
//         { name: "Price per item",type:"number",placeholder:"Enter price per item "},
//     ],
//     Enclosure: [
//         {name:  "Value", type: "text", placeholder: "Enter value (e.g. DS3231)" },
//         { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. Enclosure)" },
//         { name: "Dimensions", type: "text", placeholder: "Enter dimensions (e.g. 120 x 60 x 40 mm)" },
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//         { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
//         { name: "Quantity",type:"number",placeholder:"Enter quantity"},
//         { name: "Price per item",type:"number",placeholder:"Enter price per item "},
//     ],
//     UFL_Cable: [
//         { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. UFL Cable)" },
//         { name: "Length", type: "number", placeholder: "Enter length (e.g. 50mm)" },
//         { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//         { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
//         { name: "Quantity",type:"number",placeholder:"Enter quantity"},
//         { name: "Price per item",type:"number",placeholder:"Enter price per item "},
//     ],
// };




// function toggleForm() {
//     const action = document.getElementById('action').value;
//     const forms = document.querySelectorAll('.form');
//     forms.forEach(form => form.style.display = 'none');

//     if (action) {
//         document.getElementById(`${action}-form`).style.display = 'block';
//     }
// }

// function addStock() {
//     const componentType = document.getElementById('componentType').value;
//     if (!componentType) {
//         alert("Please select a component type");
//         return;
//     }

//     let values = {};
//     let allFieldsFilled = true;

//     // Gather values based on the component type
//     switch (componentType) {
//         case 'Resistor':
//             values = {
//                 type: document.getElementById('add-type').value,
//                 resistanceValue: document.getElementById('add-resistance-value').value,
//                 powerRating: document.getElementById('add-power-rating').value,
//                 voltageRating: document.getElementById('add-voltage-rating').value,
//                 temperatureCoefficient: document.getElementById('add-temperature-coefficient').value,
//                 tolerance: document.getElementById('add-tolerance').value,
//                 packageType: document.getElementById('add-package-type').value,
//                 labelType: document.getElementById('add-label-type').value,
//                 locationType: document.getElementById('add-location-type').value,
//                 supplier: document.getElementById('add-supplier').value,
//                 quantity: document.getElementById('add-quantity').value,
//                 priceperitem: document.getElementById('add-price-per-item').value,
//                 totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
//             };
//             break;
//         case 'Capacitor':
//             values = {
//                 capacitanceValue: document.getElementById('add-capacitance-value').value,
//                 voltageRating: document.getElementById('add-voltage-rating').value,
//                 tolerance: document.getElementById('add-tolerance').value,
//                 dielectricType: document.getElementById('add-dielectric-type').value,
//                 packageType: document.getElementById('add-package-type').value,
//                 labelType: document.getElementById('add-label-type').value,
//                 locationType: document.getElementById('add-location-type').value,
//                 supplier: document.getElementById('add-supplier').value,
//                 quantity: document.getElementById('add-quantity').value,
//                 priceperitem: document.getElementById('add-price-per-item').value,
//                 totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
//             };
//             break;
//         case 'Inductor':
//             values = {
//                 type: document.getElementById('add-type').value,
//                 inductanceValue: document.getElementById('add-inductance-value').value,
//                 currentRating: document.getElementById('add-current-rating').value,
//                 packageType: document.getElementById('add-package-type').value,
//                 locationType: document.getElementById('add-location-type').value,
//                 supplier: document.getElementById('add-supplier').value,
//                 quantity: document.getElementById('add-quantity').value,
//                 priceperitem: document.getElementById('add-price-per-item').value,
//                 totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
//             };
//             break;
//         case 'Diode':
//             values = {
//                 type: document.getElementById('add-type').value,
//                 partNumber: document.getElementById('add-part-number').value,
//                 packageType: document.getElementById('add-package-type').value,
//                 locationType: document.getElementById('add-location-type').value,
//                 supplier: document.getElementById('add-supplier').value,
//                 quantity: document.getElementById('add-quantity').value,
//                 priceperitem: document.getElementById('add-price-per-item').value,
//                 totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
//             };
//             break;
//         case 'Transistor':
//             values = {
//                 value: document.getElementById('add-value').value,
//                 label: document.getElementById('add-label').value,
//                 packageType: document.getElementById('add-package-type').value,
//                 locationType: document.getElementById('add-location-type').value,
//                 locationType: document.getElementById('add-location-type').value,
//                 supplier: document.getElementById('add-supplier').value,
//                 quantity: document.getElementById('add-quantity').value,
//                 priceperitem: document.getElementById('add-price-per-item').value,
//                 totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
//             };
//             break;
//         case 'Mosfet':
//             values = {
//                 value: document.getElementById('add-value').value,
//                 label: document.getElementById('add-label').value,
//                 packageType: document.getElementById('add-package-type').value,
//                 locationType: document.getElementById('add-location-type').value,
//                 supplier: document.getElementById('add-supplier').value,
//                 quantity: document.getElementById('add-quantity').value,
//                 priceperitem: document.getElementById('add-price-per-item').value,
//                 totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
//             };
//             break;
//         case 'UFL':
//             values = {
//                 value: document.getElementById('add-value').value,
//                 partNumber: document.getElementById('add-part-number').value,
//                 packageType: document.getElementById('add-package-type').value,
//                 locationType: document.getElementById('add-location-type').value,
//                 supplier: document.getElementById('add-supplier').value,
//                 quantity: document.getElementById('add-quantity').value,
//                 priceperitem: document.getElementById('add-price-per-item').value,
//                 totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
//             };
//             break;
//         case 'Crystal':
//             values = {
//                 type: document.getElementById('add-type').value,
//                 frequency: document.getElementById('add-frequency').value,
//                 tolerance: document.getElementById('add-tolerance').value,
//                 packageType: document.getElementById('add-package-type').value,
//                 locationType: document.getElementById('add-location-type').value,
//                 supplier: document.getElementById('add-supplier').value,
//                 quantity: document.getElementById('add-quantity').value,
//                 priceperitem: document.getElementById('add-price-per-item').value,
//                 totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
//             };
//             break;
//         case 'Regulator':
//             values = {
//                 value: document.getElementById('add-value').value,
//                 label: document.getElementById('add-label').value,
//                 packageType: document.getElementById('add-package-type').value,
//                 locationType: document.getElementById('add-location-type').value,
//                 supplier: document.getElementById('add-supplier').value,
//                 quantity: document.getElementById('add-quantity').value,
//                 priceperitem: document.getElementById('add-price-per-item').value,
//                 totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
//             };
//             break;
//         case 'Modem':
//             values = {
//                 value: document.getElementById('add-value').value,
//                 partNumber: document.getElementById('add-part-number').value,
//                 packageType: document.getElementById('add-package-type').value,
//                 locationType: document.getElementById('add-location-type').value,
//                 supplier: document.getElementById('add-supplier').value,
//                 quantity: document.getElementById('add-quantity').value,
//                 priceperitem: document.getElementById('add-price-per-item').value,
//                 totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
//             };
//             break;
//         case 'Pressure_Sensor':
//             values = {
//                 value: document.getElementById('add-value').value,
//                 partNumber: document.getElementById('add-part-number').value,
//                 packageType: document.getElementById('add-package-type').value,
//                 locationType: document.getElementById('add-location-type').value,
//                 supplier: document.getElementById('add-supplier').value,
//                 quantity: document.getElementById('add-quantity').value,
//                 priceperitem: document.getElementById('add-price-per-item').value,
//                 totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
//             };
//             break;
//         case 'RTC':
//             values = {
//                 value: document.getElementById('add-value').value,
//                 partNumber: document.getElementById('add-part-number').value,
//                 packageType: document.getElementById('add-package-type').value,
//                 locationType: document.getElementById('add-location-type').value,
//                 supplier: document.getElementById('add-supplier').value,
//                 quantity: document.getElementById('add-quantity').value,
//                 priceperitem: document.getElementById('add-price-per-item').value,
//                 totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
//             };
//             break;
//         case 'ESP':
//             values = {
//                 value: document.getElementById('add-value').value,
//                 partNumber: document.getElementById('add-part-number').value,
//                 packageType: document.getElementById('add-package-type').value,
//                 locationType: document.getElementById('add-location-type').value,
//                 supplier: document.getElementById('add-supplier').value,
//                 quantity: document.getElementById('add-quantity').value,
//                 priceperitem: document.getElementById('add-price-per-item').value,
//                 totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
//             };
//             break;
//         case 'RS485':
//             values = {
//                 value: document.getElementById('add-value').value,
//                 partNumber: document.getElementById('add-part-number').value,
//                 packageType: document.getElementById('add-package-type').value,
//                 locationType: document.getElementById('add-location-type').value,
//                 supplier: document.getElementById('add-supplier').value,
//                 quantity: document.getElementById('add-quantity').value,
//                 priceperitem: document.getElementById('add-price-per-item').value,
//                 totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
//             };
//             break;
//         case 'Sim Slot':
//             values = {
//                 value: document.getElementById('add-value').value,
//                 partNumber: document.getElementById('add-part-number').value,
//                 packageType: document.getElementById('add-package-type').value,
//                 locationType: document.getElementById('add-location-type').value,
//                 supplier: document.getElementById('add-supplier').value,
//                 quantity: document.getElementById('add-quantity').value,
//                 priceperitem: document.getElementById('add-price-per-item').value,
//                 totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
//             };
//             break;
//         case 'Connector':
//             values = {
//                 type: document.getElementById('add-type').value,
//                 partNumber: document.getElementById('add-part-number').value,
//                 pinCount: document.getElementById('add-pin-count').value,
//                 packageType: document.getElementById('add-package-type').value,
//                 locationType: document.getElementById('add-location-type').value,
//                 supplier: document.getElementById('add-supplier').value,
//                 quantity: document.getElementById('add-quantity').value,
//                 priceperitem: document.getElementById('add-price-per-item').value,
//                 totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
//             };
//             break;
//         case 'Enclosure':
//             values = {
//                 type: document.getElementById('add-type').value,
//                 partNumber: document.getElementById('add-part-number').value,
//                 dimensions: document.getElementById('add-dimensions').value,
//                 packageType: document.getElementById('add-package-type').value,
//                 locationType: document.getElementById('add-location-type').value,
//                 supplier: document.getElementById('add-supplier').value,
//                 quantity: document.getElementById('add-quantity').value,
//                 priceperitem: document.getElementById('add-price-per-item').value,
//                 totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
//             };
//             break;
//         case 'UFL Cable':
//             values = {
//                 type: document.getElementById('add-type').value,
//                 partNumber: document.getElementById('add-part-number').value,
//                 length: document.getElementById('add-length').value,
//                 packageType: document.getElementById('add-package-type').value,
//                 locationType: document.getElementById('add-location-type').value,
//                 supplier: document.getElementById('add-supplier').value,
//                 quantity: document.getElementById('add-quantity').value,
//                 priceperitem: document.getElementById('add-price-per-item').value,
//                 totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
//             };
//             break;
//         default:
//             console.error('Unknown component type');
//             alert("Unknown component type");
//             return;
//     }

//     // Check if all fields are filled
//     allFieldsFilled = Object.values(values).every(field => field !== "");
    
//     if (!allFieldsFilled) {
//         alert("Please fill in all fields");
//         return;
//     }

//     // Determine the table and section IDs
//     const tableId = `${componentType.toLowerCase().replace(' ', '')}Table`;
//     const tableSectionId = `${componentType.toLowerCase().replace(' ', '')}TableSection`;
//     const tableSection = document.getElementById(tableSectionId);

//     if (!tableSection) {
//         console.error(`Element with ID ${tableSectionId} not found!`);
//         alert("Error: Table section not found.");
//         return;
//     }

//     // I just added this line
//     const inventoryData = JSON.parse(localStorage.getItem('inventoryData')) || [];
//     inventoryData.push(values);
//     localStorage.setItem('inventoryData', JSON.stringify(inventoryData));
//     tableSection.style.display = 'block';
//     // to here
//     // Get the table body and append the new row
//     const tableBody = document.querySelector(`#${tableId} tbody`);
//     const newRow = document.createElement('tr');
//     newRow.innerHTML = Object.values(values).map(value => `<td>${value}</td>`).join('');
//     tableBody.appendChild(newRow);
//     saveToLocalStorage(componentType, values);
//     alert(`${componentType} added successfully`);
// }

// function updateAttributes() {
//     const componentType = document.getElementById('componentType').value;
//     const attributeDropdowns = document.getElementById('attributeDropdowns');

//     // Clear previous fields
//     attributeDropdowns.innerHTML = '';

//     let fieldsHtml = '';
//     switch (componentType) {
//         case 'Resistor':
//             fieldsHtml = `
//                 <label for="add-type">Type:</label>
//                 <input type="text" id="add-type" placeholder="Enter type (e.g. R0805)">
//                 <label for="add-resistance-value">Resistance Value:</label>
//                 <input type="number" id="add-resistance-value" placeholder="Enter in Ω (e.g. 1.2Ω)">
//                 <label for="add-power-rating">Power Rating:</label>
//                 <input type="number" id="add-power-rating" placeholder="Enter in W (e.g. 0.25W)">
//                 <label for="add-voltage-rating">Voltage Rating:</label>
//                 <input type="number" id="add-voltage-rating" placeholder="Enter in V (e.g. 50V)">
//                 <label for="add-temperature-coefficient">Temperature Coefficient:</label>
//                 <input type="number" id="add-temperature-coefficient" placeholder="Enter in ppm/°C (e.g. 100ppm/°C)">
//                 <label for="add-tolerance">Tolerance:</label>
//                 <input type="number" id="add-tolerance" placeholder="Enter in % (e.g. ±1%)">
//                 <label for="add-package-type">Package Type:</label>
//                 <input type="text" id="add-package-type" placeholder="Enter package type (e.g. SMD)">
//                 <label for="add-label-type">Label Type:</label>
//                 <input type="text" id="add-label-type" placeholder="Enter label type (e.g. R1, R2, R3)">
//                 <label for="add-location-type">Location Stored:</label>
//                 <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
//                 <label for="add-supplier">Supplier:</label>
//                 <input type="text" id="add-supplier" placeholder="Enter supplier details">
//                 <label for="add-quantity">Quantity:</label>
//                 <input type="number" id="add-quantity" placeholder="Enter quantity">
//                 <label for="add-price-per-item">Price per item:</label>
//                 <input type="number" id="add-price-per-item" placeholder="Enter price per item">
                
//             `;
//             break;
//         case 'Capacitor':
//             fieldsHtml = `
//                 <label for="add-capacitance-value">Capacitance Value:</label>
//                 <input type="number" id="add-capacitance-value" placeholder="Enter in µF (e.g. 1.2µF)">
//                 <label for="add-voltage-rating">Voltage Rating:</label>
//                 <input type="number" id="add-voltage-rating" placeholder="Enter in V (e.g. 25V)">
//                 <label for="add-tolerance">Tolerance:</label>
//                 <input type="number" id="add-tolerance" placeholder="Enter in % (e.g. ±10%)">
//                 <label for="add-dielectric-type">Dielectric Type:</label>
//                 <input type="number" id="add-dielectric-type" placeholder="Enter dielectric type (e.g. X5R, X7R)">
//                 <label for="add-package-type">Package Type:</label>
//                 <input type="text" id="add-package-type" placeholder="Enter package type (e.g. SMD)">
//                 <label for="add-label-type">Label Type:</label>
//                 <input type="text" id="add-label-type" placeholder="Enter label type (e.g. C1, C2, C3)">
//                 <label for="add-location-type">Location Stored:</label>
//                 <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
//                 <label for="add-supplier">Supplier:</label>
//                 <input type="text" id="add-supplier" placeholder="Enter supplier details">
//                 <label for="add-quantity">Quantity:</label>
//                 <input type="number" id="add-quantity" placeholder="Enter quantity">
//                 <label for="add-price-per-item">Price per item:</label>
//                 <input type="number" id="add-price-per-item" placeholder="Enter price per item">
//             `;
//             break;
//         case 'Inductor':
//             fieldsHtml = `
//                 <label for="add-type">Type:</label>
//                 <input type="text" id="add-type" placeholder="Enter type">
//                 <label for="add-inductance-value">Inductance Value:</label>
//                 <input type="number" id="add-inductance-value" placeholder="Enter in µH (e.g. 10µH)">
//                 <label for="add-current-rating">Current Rating:</label>
//                 <input type="number" id="add-current-rating" placeholder="Enter in A (e.g. 1.5A)">
//                 <label for="add-package-type">Package Type:</label>
//                 <input type="text" id="add-package-type" placeholder="Enter package type (e.g. SMD)">
//                 <label for="add-location-type">Location Stored:</label>
//                 <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
//                 <label for="add-supplier">Supplier:</label>
//                 <input type="text" id="add-supplier" placeholder="Enter supplier details">
//                 <label for="add-quantity">Quantity:</label>
//                 <input type="number" id="add-quantity" placeholder="Enter quantity">
//                 <label for="add-price-per-item">Price per item:</label>
//                 <input type="number" id="add-price-per-item" placeholder="Enter price per item">
//             `;
//             break;
//         case 'Diode':
//             fieldsHtml = `
//                 <label for="add-type">Diode value:</label>
//                 <input type="text" id="add-type" placeholder="Enter diode value (e.g. SMD)">
//                 <label for="add-part-number">Part Number:</label>
//                 <input type="text" id="add-part-number" placeholder="Enter part number (e.g. D1 or D2.. or D1,D2  use comma seperated values)">
//                 <label for="add-package-type">Package Type:</label>
//                 <input type="text" id="add-package-type" placeholder="Enter package type (e.g. SMD)">
//                 <label for="add-location-type">Location Stored:</label>
//                 <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
//                 <label for="add-supplier">Supplier:</label>
//                 <input type="text" id="add-supplier" placeholder="Enter supplier details">
//                 <label for="add-quantity">Quantity:</label>
//                 <input type="number" id="add-quantity" placeholder="Enter quantity">
//                 <label for="add-price-per-item">Price per item:</label>
//                 <input type="number" id="add-price-per-item" placeholder="Enter price per item">
//             `;
//             break;
//         case 'Transistor':
//             fieldsHtml = `
//                 <label for="add-value">Value:</label>
//                 <input type="text" id="add-value" placeholder="Enter value (e.g. MMBT3904)">
//                 <label for="add-label">Label:</label>
//                 <input type="text" id="add-label" placeholder="Enter label (e.g. Q1,Q2,Q4,Q5)">
//                 <label for="add-package-type">Package Type:</label>
//                 <input type="text" id="add-package-type" placeholder="Enter package type (e.g. SMD- SOT-23)">
//                 <label for="add-location-type">Location Stored:</label>
//                 <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
//                 <label for="add-supplier">Supplier:</label>
//                 <input type="text" id="add-supplier" placeholder="Enter supplier details">
//                 <label for="add-quantity">Quantity:</label>
//                 <input type="number" id="add-quantity" placeholder="Enter quantity">
//                 <label for="add-price-per-item">Price per item:</label>
//                 <input type="number" id="add-price-per-item" placeholder="Enter price per item">
//             `;
//             break;
//         case 'Mosfet':
//             fieldsHtml = `
//                 <label for="add-value">Value:</label>
//                 <input type="text" id="add-value" placeholder="Enter value (e.g. SI2312)">
//                 <label for="add-label">Label:</label>
//                 <input type="text" id="add-label" placeholder="Enter label (e.g. Q1,Q2,Q4,Q5)">
//                 <label for="add-package-type">Package Type:</label>
//                 <input type="text" id="add-package-type" placeholder="Enter package type (e.g. SMD- SOT-23)">
//                 <label for="add-location-type">Location Stored:</label>
//                 <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
//                 <label for="add-supplier">Supplier:</label>
//                 <input type="text" id="add-supplier" placeholder="Enter supplier details">
//                 <label for="add-quantity">Quantity:</label>
//                 <input type="number" id="add-quantity" placeholder="Enter quantity">
//                 <label for="add-price-per-item">Price per item:</label>
//                 <input type="number" id="add-price-per-item" placeholder="Enter price per item">
//             `;
//             break;
//         case 'UFL':
//             fieldsHtml = `
//                 <label for="add-value">Value:</label>
//                 <input type="text" id="add-value" placeholder="Enter Value (eg.BM8563ESA)">
//                 <label for="add-part-number">Part Number:</label>
//                 <input type="text" id="add-part-number" placeholder="Enter part number">
//                 <label for="add-package-type">Package Type:</label>
//                 <input type="text" id="add-package-type" placeholder="Enter package type (eg. SMD - SOP-8)">
//                 <label for="add-location-type">Location Stored:</label>
//                 <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
//                 <label for="add-supplier">Supplier:</label>
//                 <input type="text" id="add-supplier" placeholder="Enter supplier details">
//                 <label for="add-quantity">Quantity:</label>
//                 <input type="number" id="add-quantity" placeholder="Enter quantity">
//                 <label for="add-price-per-item">Price per item:</label>
//                 <input type="number" id="add-price-per-item" placeholder="Enter price per item">
//             `;
//             break;
//         case 'Crystal':
//             fieldsHtml = `
//                 <label for="add-type">Type:</label>
//                 <input type="text" id="add-type" placeholder="Enter type">
//                 <label for="add-frequency">Frequency:</label>
//                 <input type="number" id="add-frequency" placeholder="Enter frequency (Enter in kHz)">
//                 <label for="add-tolerance">Tolerance:</label>
//                 <input type="text" id="add-tolerance" placeholder="Enter tolerance (eg. Enter in ±5%)">
//                 <label for="add-package-type">Package Type:</label>
//                 <input type="text" id="add-package-type" placeholder="Enter package type">
//                 <label for="add-location-type">Location Stored:</label>
//                 <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
//                 <label for="add-supplier">Supplier:</label>
//                 <input type="text" id="add-supplier" placeholder="Enter supplier details">
//                 <label for="add-quantity">Quantity:</label>
//                 <input type="number" id="add-quantity" placeholder="Enter quantity">
//                 <label for="add-price-per-item">Price per item:</label>
//                 <input type="number" id="add-price-per-item" placeholder="Enter price per item">
//             `;
//             break;
//         case 'Regulator':
//             fieldsHtml = `
//                 <label for="add-value">Value:</label>
//                 <input type="text" id="add-value" placeholder="Enter value (e.g. MMBT3904)">
//                 <label for="add-label">Label:</label>
//                 <input type="text" id="add-label" placeholder="Enter label (e.g. Q1,Q2,Q4,Q5)">
//                 <label for="add-package-type">Package Type:</label>
//                 <input type="text" id="add-package-type" placeholder="Enter package type (e.g. SMD- SOT-23)">
//                 <label for="add-location-type">Location Stored:</label>
//                 <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
//                 <label for="add-supplier">Supplier:</label>
//                 <input type="text" id="add-supplier" placeholder="Enter supplier details">
//                 <label for="add-quantity">Quantity:</label>
//                 <input type="number" id="add-quantity" placeholder="Enter quantity">
//                 <label for="add-price-per-item">Price per item:</label>
//                 <input type="number" id="add-price-per-item" placeholder="Enter price per item">
//             `;
//             break;
//         case 'Modem':
//             fieldsHtml = `
//                 <label for="add-value">Value:</label>
//                 <input type="text" id="add-value" placeholder="Enter Value (eg.BM8563ESA)">
//                 <label for="add-part-number">Part Number:</label>
//                 <input type="text" id="add-part-number" placeholder="Enter part number">
//                 <label for="add-package-type">Package Type:</label>
//                 <input type="text" id="add-package-type" placeholder="Enter package type (eg. SMD - SOP-8)">
//                 <label for="add-location-type">Location Stored:</label>
//                 <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
//                 <label for="add-supplier">Supplier:</label>
//                 <input type="text" id="add-supplier" placeholder="Enter supplier details">
//                 <label for="add-quantity">Quantity:</label>
//                 <input type="number" id="add-quantity" placeholder="Enter quantity">
//                 <label for="add-price-per-item">Price per item:</label>
//                 <input type="number" id="add-price-per-item" placeholder="Enter price per item">
//             `;
//             break;
//         case 'pressureSensor': //changed
//             fieldsHtml = `
//                 <label for="add-value">Value:</label>
//                 <input type="text" id="add-value" placeholder="Enter Value (eg.BM8563ESA)">
//                 <label for="add-part-number">Part Number:</label>
//                 <input type="text" id="add-part-number" placeholder="Enter part number">
//                 <label for="add-package-type">Package Type:</label>
//                 <input type="text" id="add-package-type" placeholder="Enter package type (eg. SMD - SOP-8)">
//                 <label for="add-location-type">Location Stored:</label>
//                 <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
//                 <label for="add-supplier">Supplier:</label>
//                 <input type="text" id="add-supplier" placeholder="Enter supplier details">
//                 <label for="add-quantity">Quantity:</label>
//                 <input type="number" id="add-quantity" placeholder="Enter quantity">
//                 <label for="add-price-per-item">Price per item:</label>
//                 <input type="number" id="add-price-per-item" placeholder="Enter price per item">
//             `;
//             break;
//         case 'RTC':
//             fieldsHtml = `
//                 <label for="add-value">Value:</label>
//                 <input type="text" id="add-value" placeholder="Enter Value (eg.BM8563ESA)">
//                 <label for="add-part-number">Part Number:</label>
//                 <input type="text" id="add-part-number" placeholder="Enter part number">
//                 <label for="add-package-type">Package Type:</label>
//                 <input type="text" id="add-package-type" placeholder="Enter package type (eg. SMD - SOP-8)">
//                 <label for="add-location-type">Location Stored:</label>
//                 <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
//                 <label for="add-supplier">Supplier:</label>
//                 <input type="text" id="add-supplier" placeholder="Enter supplier details">
//                 <label for="add-quantity">Quantity:</label>
//                 <input type="number" id="add-quantity" placeholder="Enter quantity">
//                 <label for="add-price-per-item">Price per item:</label>
//                 <input type="number" id="add-price-per-item" placeholder="Enter price per item">
//             `;
//             break;
//         case 'ESP':
//             fieldsHtml = `
//                 <label for="add-value">Value:</label>
//                 <input type="text" id="add-value" placeholder="Enter Value (eg.BM8563ESA)">
//                 <label for="add-part-number">Part Number:</label>
//                 <input type="text" id="add-part-number" placeholder="Enter part number">
//                 <label for="add-package-type">Package Type:</label>
//                 <input type="text" id="add-package-type" placeholder="Enter package type (eg. SMD - SOP-8)">
//                 <label for="add-location-type">Location Stored:</label>
//                 <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
//                 <label for="add-supplier">Supplier:</label>
//                 <input type="text" id="add-supplier" placeholder="Enter supplier details">
//                 <label for="add-quantity">Quantity:</label>
//                 <input type="number" id="add-quantity" placeholder="Enter quantity">
//                 <label for="add-price-per-item">Price per item:</label>
//                 <input type="number" id="add-price-per-item" placeholder="Enter price per item">
//             `;
//             break;
//         case 'RS485':
//             fieldsHtml = `
//                 <label for="add-value">Value:</label>
//                 <input type="text" id="add-value" placeholder="Enter Value (eg.BM8563ESA)">
//                 <label for="add-part-number">Part Number:</label>
//                 <input type="text" id="add-part-number" placeholder="Enter part number">
//                 <label for="add-package-type">Package Type:</label>
//                 <input type="text" id="add-package-type" placeholder="Enter package type (eg. SMD - SOP-8)">
//                 <label for="add-location-type">Location Stored:</label>
//                 <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
//                 <label for="add-supplier">Supplier:</label>
//                 <input type="text" id="add-supplier" placeholder="Enter supplier details">
//                 <label for="add-quantity">Quantity:</label>
//                 <input type="number" id="add-quantity" placeholder="Enter quantity">
//                 <label for="add-price-per-item">Price per item:</label>
//                 <input type="number" id="add-price-per-item" placeholder="Enter price per item">
//             `;
//             break;
//         case 'Sim Slot':
//             fieldsHtml = `
//                 <label for="add-value">Value:</label>
//                 <input type="text" id="add-value" placeholder="Enter Value (eg.BM8563ESA)">
//                 <label for="add-part-number">Part Number:</label>
//                 <input type="text" id="add-part-number" placeholder="Enter part number">
//                 <label for="add-package-type">Package Type:</label>
//                 <input type="text" id="add-package-type" placeholder="Enter package type (eg. SMD - SOP-8)">
//                 <label for="add-location-type">Location Stored:</label>
//                 <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
//                 <label for="add-supplier">Supplier:</label>
//                 <input type="text" id="add-supplier" placeholder="Enter supplier details">
//                 <label for="add-quantity">Quantity:</label>
//                 <input type="number" id="add-quantity" placeholder="Enter quantity">
//                 <label for="add-price-per-item">Price per item:</label>
//                 <input type="number" id="add-price-per-item" placeholder="Enter price per item">
//             `;
//             break;
//         case 'Connector':
//             fieldsHtml = `
//                 <label for="add-type">Type:</label>
//                 <input type="text" id="add-type" placeholder="Enter type">
//                 <label for="add-part-number">Part Number:</label>
//                 <input type="text" id="add-part-number" placeholder="Enter part number">
//                 <label for="add-pin-count">Pin Count:</label>
//                 <input type="text" id="add-pin-count" placeholder="Enter pin count">
//                 <label for="add-package-type">Package Type:</label>
//                 <input type="text" id="add-package-type" placeholder="Enter package type">
//                 <label for="add-location-type">Location Stored:</label>
//                 <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
//                 <label for="add-supplier">Supplier:</label>
//                 <input type="text" id="add-supplier" placeholder="Enter supplier details">
//                 <label for="add-quantity">Quantity:</label>
//                 <input type="number" id="add-quantity" placeholder="Enter quantity">
//                 <label for="add-price-per-item">Price per item:</label>
//                 <input type="number" id="add-price-per-item" placeholder="Enter price per item">
//             `;
//             break;
//         case 'Enclosure':
//             fieldsHtml = `
//                 <label for="add-type">Type:</label>
//                 <input type="text" id="add-type" placeholder="Enter type">
//                 <label for="add-part-number">Part Number:</label>
//                 <input type="text" id="add-part-number" placeholder="Enter part number">
//                 <label for="add-dimensions">Dimensions:</label>
//                 <input type="text" id="add-dimensions" placeholder="Enter dimensions">
//                 <label for="add-package-type">Package Type:</label>
//                 <input type="text" id="add-package-type" placeholder="Enter package type">
//                 <label for="add-location-type">Location Stored:</label>
//                 <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
//                 <label for="add-supplier">Supplier:</label>
//                 <input type="text" id="add-supplier" placeholder="Enter supplier details">
//                 <label for="add-quantity">Quantity:</label>
//                 <input type="number" id="add-quantity" placeholder="Enter quantity">
//                 <label for="add-price-per-item">Price per item:</label>
//                 <input type="number" id="add-price-per-item" placeholder="Enter price per item">
//             `;
//             break;
//         case 'UFL Cable':
//             fieldsHtml = `
//                 <label for="add-type">Type:</label>
//                 <input type="text" id="add-type" placeholder="Enter type">
//                 <label for="add-part-number">Part Number:</label>
//                 <input type="text" id="add-part-number" placeholder="Enter part number">
//                 <label for="add-length">Length:</label>
//                 <input type="text" id="add-length" placeholder="Enter length">
//                 <label for="add-package-type">Package Type:</label>
//                 <input type="text" id="add-package-type" placeholder="Enter package type">
//                 <label for="add-location-type">Location Stored:</label>
//                 <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
//                 <label for="add-supplier">Supplier:</label>
//                 <input type="text" id="add-supplier" placeholder="Enter supplier details">
//                 <label for="add-quantity">Quantity:</label>
//                 <input type="number" id="add-quantity" placeholder="Enter quantity">
//                 <label for="add-price-per-item">Price per item:</label>
//                 <input type="number" id="add-price-per-item" placeholder="Enter price per item">
//             `;
//             break;
//         default:
//             fieldsHtml = '<p>Please select a valid component type.</p>';
//     }

//     attributeDropdowns.innerHTML = fieldsHtml;
// }

// function populateSearchFields() {
//     const component = document.getElementById('component-type').value;
//     const searchFields = document.getElementById('component-search-fields');
//     searchFields.innerHTML = '';

//     if (component && componentAttributes[component]) {
//         componentAttributes[component].forEach(field => {
//             const label = document.createElement('label');
//             label.textContent = `${field.name}:`;
//             const input = document.createElement('input');
//             input.type = field.type;
//             input.placeholder = field.placeholder;
//             input.id = `search-${field.name.toLowerCase().replace(/ /g, '-')}`;

//             searchFields.appendChild(label);
//             searchFields.appendChild(input);
//             searchFields.appendChild(document.createElement('br'));
//         });
//     }
// }

// function searchComponentTable() {
//     const component = document.getElementById('component-type').value;
//     const attributes = componentAttributes[component];
//     const values = {};

//     attributes.forEach(field => {
//         values[field.name] = document.getElementById(`search-${field.name.toLowerCase().replace(/ /g, '-')}`).value.toLowerCase();
//     });

//     const tableId = `${component.toLowerCase()}Table`;
//     const table = document.getElementById(tableId);
//     const rows = table.getElementsByTagName('tr');
//     let found = false;
//     let results = [];

//     for (let i = 1; i < rows.length; i++) { // Start from 1 to skip header row
//         const cells = rows[i].getElementsByTagName('td');
//         let match = true;
//         attributes.forEach((field, index) => {
//             if (values[field.name] && !cells[index].innerText.toLowerCase().includes(values[field.name])) {
//                 match = false;
//             }
//         });
//         if (match) {
//             rows[i].classList.add('highlight');
//             results.push(rows[i].innerText);
//             found = true;
//         } else {
//             rows[i].classList.remove('highlight');
//         }
//     }

//     displayResults(found, results);
// }

// function displayResults(found, results) {
//     const resultCard = document.getElementById('result-card');
//     const resultContent = document.getElementById('result-content');
//     resultContent.innerHTML = ''; // Clear previous results

//     if (found) {
//         results.forEach(result => {
//             const p = document.createElement('p');
//             p.textContent = result;
//             resultContent.appendChild(p);
//         });
//     } else {
//         const p = document.createElement('p');
//         p.textContent = 'No matching components found.';
//         resultContent.appendChild(p);
//     }

//     resultCard.style.display = 'block';
// }

// function populateSpecFields() {
//     const component = document.getElementById('spec-component-type').value;
//     const searchFields = document.getElementById('spec-search-fields');
//     searchFields.innerHTML = '';

//     if (component && componentAttributes[component]) {
//         componentAttributes[component].forEach(field => {
//             const label = document.createElement('label');
//             label.textContent = `${field.name}:`;
//             const input = document.createElement('input');
//             input.type = field.type;
//             input.placeholder = field.placeholder;
//             input.id = `spec-${field.name.toLowerCase().replace(/ /g, '-')}`;

//             searchFields.appendChild(label);
//             searchFields.appendChild(input);
//             searchFields.appendChild(document.createElement('br'));
//         });
//     }
// }

// function searchSpecificationTable() {
//     const componentType = document.getElementById('spec-component-type').value;
//     if (!componentType) {
//         alert("Please select a component type");
//         return;
//     }

//     const searchFields = document.querySelectorAll(`#specification-specific-search-form input`);
//     const searchValues = {};
//     searchFields.forEach(field => {
//         if (field.value) {
//             searchValues[field.id.split('-')[1]] = field.value.toLowerCase();
//         }
//     });

//     let tableId = `${componentType.toLowerCase().replace(' ', '')}Table`;
//     let table = document.getElementById(tableId);

//     if (!table) {
//         alert("Error: Table not found.");
//         return;
//     }

//     let rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
//     let totalQuantity = 0;

//     for (let i = 0; i < rows.length; i++) {
//         let cells = rows[i].getElementsByTagName('td');
//         let match = true;

//         for (let key in searchValues) {
//             let cellValue = cells[Object.keys(searchValues).indexOf(key)].textContent.toLowerCase();
//             if (cellValue !== searchValues[key]) {
//                 match = false;
//                 break;
//             }
//         }

//         if (match) {
//             totalQuantity += parseInt(cells[cells.length - 2].textContent);  // Assuming quantity is the second last column
//         }
//     }

//     displaySearchResult(totalQuantity);
// }


// function displaySearchResult(totalQuantity) {
//     const resultCard = document.getElementById('result-card');
//     const resultContent = document.getElementById('result-content');

//     resultContent.innerHTML = `
//         <p>Total matching components: ${totalQuantity}</p>
//     `;

//     resultCard.style.display = 'block';
// }

// function toggleForm() {
//     const action = document.getElementById('action').value;
//     const forms = document.querySelectorAll('.form');
//     forms.forEach(form => form.style.display = 'none');

//     if (action) {
//         document.getElementById(`${action}-form`).style.display = 'block';
//     }
// }

// function saveToLocalStorage(componentType, values) {
//     let data = JSON.parse(localStorage.getItem('stockData')) || {};
//     if (!data[componentType]) {
//         data[componentType] = [];
//     }
//     data[componentType].push(values);
//     localStorage.setItem('stockData', JSON.stringify(data));
// }

// document.addEventListener('DOMContentLoaded', function() {
//     loadFromLocalStorage();
// });

// function loadFromLocalStorage() {
//     let data = JSON.parse(localStorage.getItem('stockData'));
//     if (data) {
//         for (let componentType in data) {
//             let tableId = `${componentType.toLowerCase().replace(' ', '')}Table`;
//             let tableBody = document.querySelector(`#${tableId} tbody`);
//             let tableSectionId = `${componentType.toLowerCase().replace(' ', '')}TableSection`;
//             let tableSection = document.getElementById(tableSectionId);

//             if (tableBody && tableSection) {
//                 data[componentType].forEach(item => {
//                     let newRow = document.createElement('tr');
//                     newRow.innerHTML = Object.values(item).map(value => `<td>${value}</td>`).join('');
//                     tableBody.appendChild(newRow);
//                 });
//                 tableSection.style.display = 'block';
//             }
//         }
//     }
// }


// // function saveToLocalStorage() {
// //     const data = JSON.parse(localStorage.getItem('viewStockData')) || [];
// //     document.querySelectorAll('table tbody tr').forEach(row => {
// //         const rowData = {};
// //         const tableId = row.closest('table').id;
// //         const componentType = tableId.replace('Table', '');
// //         rowData['Component Type'] = componentType.charAt(0).toUpperCase() + componentType.slice(1);
// //         row.querySelectorAll('td').forEach((cell, index) => {
// //             const key = row.closest('table').querySelector('thead th:nth-child(' + (index + 1) + ')').innerText;
// //             rowData[key] = cell.innerText;
// //         });
// //         data.push(rowData);
// //     });
// //     localStorage.setItem('viewStockData', JSON.stringify(data));
// // }

// document.addEventListener('DOMContentLoaded', () => {
//     const savedProducts = localStorage.getItem('viewStockData');
//     if (savedProducts) {
//         const products = JSON.parse(savedProducts);
//         products.forEach(product => addProductToTable(product));
//     }
// });

// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('action').addEventListener('change', toggleForm);
//     document.getElementById('componentType').addEventListener('change', updateAttributes);
// });






































































































































































































































 


// const componentAttributes = {
//     Resistor: [
//         { name: "Resistor Type", type: "text", placeholder: "Enter type (e.g. R0805)" },
//         { name: "Resistance Value", type: "number", placeholder: "Enter in Ω (e.g. 1.2Ω)" },
//         { name: "Power Rating", type: "number", placeholder: "Enter in W (e.g. 0.25W)" },
//         { name: "Voltage Rating", type: "number", placeholder: "Enter in V (e.g. 50V)" },
//         { name: "Temperature Coefficient", type: "number", placeholder: "Enter in ppm/°C (e.g. 100ppm/°C)" },
//         { name: "Tolerance", type: "number", placeholder: "Enter in % (e.g. ±1%)" },
//         { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
//         { name: "Label Type",type:"text",placeholder:"Enter label type (e.g. R1, R2, R3)"},
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//         { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
//         { name: "Quantity",type:"number",placeholder:"Enter quantity"},
//         { name: "Price per item",type:"number",placeholder:"Enter price per item "},
//     ],
//     Capacitor: [
//         { name: "Capacitance Value", type: "number", placeholder: "Enter in µF (e.g. 1.2µF)" },
//         { name: "Voltage Rating", type: "number", placeholder: "Enter in V (e.g. 25V)" },
//         { name: "Tolerance", type: "number", placeholder: "Enter in % (e.g. ±10%)" },
//         { name: "Dielectric Type", type: "text", placeholder: "Enter dielectric type (e.g. X5R, X7R)" },
//         { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
//         { name: "Label Type",type:"text",placeholder:"Enter label type (e.g. C1, C2, C3)"},
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//         { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
//         { name: "Quantity",type:"number",placeholder:"Enter quantity"},
//         { name: "Price per item",type:"number",placeholder:"Enter price per item "},
//     ],
//     Inductor: [
//         { name: "Inductance Value", type: "number", placeholder: "Enter in µH (e.g. 10µH)" },
//         { name: "Current Rating", type: "number", placeholder: "Enter in A (e.g. 1.5A)" },
//         { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//         { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
//         { name: "Quantity",type:"number",placeholder:"Enter quantity"},
//         { name: "Price per item",type:"number",placeholder:"Enter price per item "},
//     ],
//     Diode: [
//         {name:  "Value" ,type:"text",placeholder:"Enter diode value "},
//         { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. 1N4148)" },
//         { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//         { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
//         { name: "Quantity",type:"number",placeholder:"Enter quantity"},
//         { name: "Price per item",type:"number",placeholder:"Enter price per item "},
//     ],
//     Transistor: [
//         { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. 2N2222)" },
//         { name: "Voltage Rating", type: "number", placeholder: "Enter in V (e.g. 40V)" },
//         { name: "Current Rating", type: "number", placeholder: "Enter in A (e.g. 0.8A)" },
//         { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//         { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
//         { name: "Quantity",type:"number",placeholder:"Enter quantity"},
//         { name: "Price per item",type:"number",placeholder:"Enter price per item "},
//     ],
//     Mosfet: [
//         { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. SI2312)" },
//         { name: "Voltage Rating", type: "number", placeholder: "Enter in V (e.g. 60V)" },
//         { name: "Current Rating", type: "number", placeholder: "Enter in A (e.g. 1.0A)" },
//         { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//         { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
//         { name: "Quantity",type:"number",placeholder:"Enter quantity"},
//         { name: "Price per item",type:"number",placeholder:"Enter price per item "},
//     ],
//     UFL: [
//         {name:  "Value", type: "text", placeholder: "Enter value (e.g. DS3231)" },
//         { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. U.FL-R-SMT-1)" },
//         { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//         { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
//         { name: "Quantity",type:"number",placeholder:"Enter quantity"},
//         { name: "Price per item",type:"number",placeholder:"Enter price per item "},
//     ],
//     Crystal: [
//         { name: "Type", type: "text", placeholder: "Enter type (e.g. SMD)"},
//         { name: "Frequency", type: "number", placeholder: "Enter in kHz (e.g. 32.768kHz)" },
//         { name: "Tolerance", type: "number", placeholder: "Enter in ppm (e.g. ±20ppm)" },
//         { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//         { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
//         { name: "Quantity",type:"number",placeholder:"Enter quantity"},
//         { name: "Price per item",type:"number",placeholder:"Enter price per item "},
//     ],
//     Regulator: [
//         { name: "Value" ,type:"text",placeholder:"Enter regulator value"},
//         { name: "Label" ,type:"text",placeholder:"Enter label (e.g. U1)"},
//         { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//         { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
//         { name: "Quantity",type:"number",placeholder:"Enter quantity"},
//         { name: "Price per item",type:"number",placeholder:"Enter price per item "},
//     ],
//     Modem: [
//         {name:  "Value", type: "text", placeholder: "Enter value (e.g. DS3231)" },
//         { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. Simcom_A7672S)" },
//         { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//         { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
//         { name: "Quantity",type:"number",placeholder:"Enter quantity"},
//         { name: "Price per item",type:"number",placeholder:"Enter price per item "},
//     ],
//     Pressure_Sensor: [
//         {name:  "Value", type: "text", placeholder: "Enter value (e.g. DS3231)" },
//         { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. DPS310)" },
//         { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//         { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
//         { name: "Quantity",type:"number",placeholder:"Enter quantity"},
//         { name: "Price per item",type:"number",placeholder:"Enter price per item "},
//     ],
//     RTC: [
//         {name:  "Value", type: "text", placeholder: "Enter value (e.g. DS3231)" },
//         { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. BM8563ESA)" },
//         { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//         { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
//         { name: "Quantity",type:"number",placeholder:"Enter quantity"},
//         { name: "Price per item",type:"number",placeholder:"Enter price per item "},
//     ],
//     ESP: [
//         {name:  "Value", type: "text", placeholder: "Enter value (e.g. DS3231)" },
//         { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. ESP WROOM 32)" },
//         { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//         { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
//         { name: "Quantity",type:"number",placeholder:"Enter quantity"},
//         { name: "Price per item",type:"number",placeholder:"Enter price per item "},
//     ],
//     RS485: [
//         {name:  "Value", type: "text", placeholder: "Enter value (e.g. DS3231)" },
//         { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. MAX485CSA+T)" },
//         { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//         { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
//         { name: "Quantity",type:"number",placeholder:"Enter quantity"},
//         { name: "Price per item",type:"number",placeholder:"Enter price per item "},
//     ],
//     Sim_Slot: [
//         {name:  "Value", type: "text", placeholder: "Enter value (e.g. DS3231)" },
//         { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. SIM-1305-6P)" },
//         { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//         { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
//         { name: "Quantity",type:"number",placeholder:"Enter quantity"},
//         { name: "Price per item",type:"number",placeholder:"Enter price per item "},
//     ],
//     Connector: [
//         { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. 8pin)" },
//         { name: "Pin Count", type: "number", placeholder: "Enter pin count (e.g. 8)" },
//         { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. Leaded)" },
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//         { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
//         { name: "Quantity",type:"number",placeholder:"Enter quantity"},
//         { name: "Price per item",type:"number",placeholder:"Enter price per item "},
//     ],
//     Enclosure: [
//         {name:  "Value", type: "text", placeholder: "Enter value (e.g. DS3231)" },
//         { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. Enclosure)" },
//         { name: "Dimensions", type: "text", placeholder: "Enter dimensions (e.g. 120 x 60 x 40 mm)" },
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//         { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
//         { name: "Quantity",type:"number",placeholder:"Enter quantity"},
//         { name: "Price per item",type:"number",placeholder:"Enter price per item "},
//     ],
//     UFL_Cable: [
//         { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. UFL Cable)" },
//         { name: "Length", type: "number", placeholder: "Enter length (e.g. 50mm)" },
//         { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
//         { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
//         { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
//         { name: "Quantity",type:"number",placeholder:"Enter quantity"},
//         { name: "Price per item",type:"number",placeholder:"Enter price per item "},
//     ],
// };




// function toggleForm() {
//     const action = document.getElementById('action').value;
//     const forms = document.querySelectorAll('.form');
//     forms.forEach(form => form.style.display = 'none');

//     if (action) {
//         document.getElementById(`${action}-form`).style.display = 'block';
//     }
// }


// document.addEventListener('DOMContentLoaded', function() {
//     const savedBOMs = localStorage.getItem('boms');
//     if (savedBOMs) {
//         Object.assign(boms, JSON.parse(savedBOMs));
//     }
//     loadStockTables();
// });

// function loadStockTables() {
//     const inventoryData = JSON.parse(localStorage.getItem('inventoryData')) || [];
//     inventoryData.forEach(item => {
//         addRowToTable(item.componentType, item);
//     });
// }

// function addRowToTable(componentType, values) {
//     const tableId = `${componentType.toLowerCase().replace(' ', '')}Table`;
//     const tableSectionId = `${componentType.toLowerCase().replace(' ', '')}TableSection`;
//     const tableSection = document.getElementById(tableSectionId);

//     if (!tableSection) {
//         console.error(`Element with ID ${tableSectionId} not found!`);
//         alert("Error: Table section not found.");
//         return;
//     }

//     const tableBody = document.querySelector(`#${tableId} tbody`);
//     const newRow = document.createElement('tr');
//     newRow.innerHTML = Object.values(values).map(value => `<td>${value}</td>`).join('') + `<td><button onclick="deleteRow(this, '${componentType}')">Delete</button></td>`;
//     tableBody.appendChild(newRow);
//     tableSection.style.display = 'block';
// }

// function deleteRow(button, componentType) {
//     const row = button.parentNode.parentNode;
//     const rowIndex = Array.from(row.parentNode.children).indexOf(row); // Get the index of the row
//     row.parentNode.removeChild(row);

//     const inventoryData = JSON.parse(localStorage.getItem('inventoryData')) || [];
//     const filteredData = inventoryData.filter((item, index) => {
//         return !(item.componentType === componentType && index === rowIndex);
//     });

//     localStorage.setItem('inventoryData', JSON.stringify(filteredData));
//     alert(`${componentType} deleted successfully`);
// }



// function addStock() {
//     const componentType = document.getElementById('componentType').value;
//     if (!componentType) {
//         alert("Please select a component type");
//         return;
//     }

//     let values = {};
//     let allFieldsFilled = true;

//     // Gather values based on the component type
//     switch (componentType) {
//         case 'Resistor':
//             values = {
//                 type: document.getElementById('add-type').value,
//                 resistanceValue: document.getElementById('add-resistance-value').value,
//                 powerRating: document.getElementById('add-power-rating').value,
//                 voltageRating: document.getElementById('add-voltage-rating').value,
//                 temperatureCoefficient: document.getElementById('add-temperature-coefficient').value,
//                 tolerance: document.getElementById('add-tolerance').value,
//                 packageType: document.getElementById('add-package-type').value,
//                 labelType: document.getElementById('add-label-type').value,
//                 locationType: document.getElementById('add-location-type').value,
//                 supplier: document.getElementById('add-supplier').value,
//                 quantity: document.getElementById('add-quantity').value,
//                 priceperitem: document.getElementById('add-price-per-item').value,
//                 totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
//             };
//             break;
//         case 'Capacitor':
//             values = {
//                 capacitanceValue: document.getElementById('add-capacitance-value').value,
//                 voltageRating: document.getElementById('add-voltage-rating').value,
//                 tolerance: document.getElementById('add-tolerance').value,
//                 dielectricType: document.getElementById('add-dielectric-type').value,
//                 packageType: document.getElementById('add-package-type').value,
//                 labelType: document.getElementById('add-label-type').value,
//                 locationType: document.getElementById('add-location-type').value,
//                 supplier: document.getElementById('add-supplier').value,
//                 quantity: document.getElementById('add-quantity').value,
//                 priceperitem: document.getElementById('add-price-per-item').value,
//                 totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
//             };
//             break;
//         case 'Inductor':
//             values = {
//                 type: document.getElementById('add-type').value,
//                 inductanceValue: document.getElementById('add-inductance-value').value,
//                 currentRating: document.getElementById('add-current-rating').value,
//                 packageType: document.getElementById('add-package-type').value,
//                 locationType: document.getElementById('add-location-type').value,
//                 supplier: document.getElementById('add-supplier').value,
//                 quantity: document.getElementById('add-quantity').value,
//                 priceperitem: document.getElementById('add-price-per-item').value,
//                 totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
//             };
//             break;
//         case 'Diode':
//             values = {
//                 type: document.getElementById('add-type').value,
//                 partNumber: document.getElementById('add-part-number').value,
//                 packageType: document.getElementById('add-package-type').value,
//                 locationType: document.getElementById('add-location-type').value,
//                 supplier: document.getElementById('add-supplier').value,
//                 quantity: document.getElementById('add-quantity').value,
//                 priceperitem: document.getElementById('add-price-per-item').value,
//                 totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
//             };
//             break;
//         case 'Transistor':
//             values = {
//                 value: document.getElementById('add-value').value,
//                 label: document.getElementById('add-label').value,
//                 packageType: document.getElementById('add-package-type').value,
//                 locationType: document.getElementById('add-location-type').value,
//                 locationType: document.getElementById('add-location-type').value,
//                 supplier: document.getElementById('add-supplier').value,
//                 quantity: document.getElementById('add-quantity').value,
//                 priceperitem: document.getElementById('add-price-per-item').value,
//                 totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
//             };
//             break;
//         case 'Mosfet':
//             values = {
//                 value: document.getElementById('add-value').value,
//                 label: document.getElementById('add-label').value,
//                 packageType: document.getElementById('add-package-type').value,
//                 locationType: document.getElementById('add-location-type').value,
//                 supplier: document.getElementById('add-supplier').value,
//                 quantity: document.getElementById('add-quantity').value,
//                 priceperitem: document.getElementById('add-price-per-item').value,
//                 totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
//             };
//             break;
//         case 'UFL':
//             values = {
//                 value: document.getElementById('add-value').value,
//                 partNumber: document.getElementById('add-part-number').value,
//                 packageType: document.getElementById('add-package-type').value,
//                 locationType: document.getElementById('add-location-type').value,
//                 supplier: document.getElementById('add-supplier').value,
//                 quantity: document.getElementById('add-quantity').value,
//                 priceperitem: document.getElementById('add-price-per-item').value,
//                 totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
//             };
//             break;
//         case 'Crystal':
//             values = {
//                 type: document.getElementById('add-type').value,
//                 frequency: document.getElementById('add-frequency').value,
//                 tolerance: document.getElementById('add-tolerance').value,
//                 packageType: document.getElementById('add-package-type').value,
//                 locationType: document.getElementById('add-location-type').value,
//                 supplier: document.getElementById('add-supplier').value,
//                 quantity: document.getElementById('add-quantity').value,
//                 priceperitem: document.getElementById('add-price-per-item').value,
//                 totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
//             };
//             break;
//         case 'Regulator':
//             values = {
//                 value: document.getElementById('add-value').value,
//                 label: document.getElementById('add-label').value,
//                 packageType: document.getElementById('add-package-type').value,
//                 locationType: document.getElementById('add-location-type').value,
//                 supplier: document.getElementById('add-supplier').value,
//                 quantity: document.getElementById('add-quantity').value,
//                 priceperitem: document.getElementById('add-price-per-item').value,
//                 totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
//             };
//             break;
//         case 'Modem':
//             values = {
//                 value: document.getElementById('add-value').value,
//                 partNumber: document.getElementById('add-part-number').value,
//                 packageType: document.getElementById('add-package-type').value,
//                 locationType: document.getElementById('add-location-type').value,
//                 supplier: document.getElementById('add-supplier').value,
//                 quantity: document.getElementById('add-quantity').value,
//                 priceperitem: document.getElementById('add-price-per-item').value,
//                 totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
//             };
//             break;
//         case 'Pressure_Sensor':
//             values = {
//                 value: document.getElementById('add-value').value,
//                 partNumber: document.getElementById('add-part-number').value,
//                 packageType: document.getElementById('add-package-type').value,
//                 locationType: document.getElementById('add-location-type').value,
//                 supplier: document.getElementById('add-supplier').value,
//                 quantity: document.getElementById('add-quantity').value,
//                 priceperitem: document.getElementById('add-price-per-item').value,
//                 totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
//             };
//             break;
//         case 'RTC':
//             values = {
//                 value: document.getElementById('add-value').value,
//                 partNumber: document.getElementById('add-part-number').value,
//                 packageType: document.getElementById('add-package-type').value,
//                 locationType: document.getElementById('add-location-type').value,
//                 supplier: document.getElementById('add-supplier').value,
//                 quantity: document.getElementById('add-quantity').value,
//                 priceperitem: document.getElementById('add-price-per-item').value,
//                 totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
//             };
//             break;
//         case 'ESP':
//             values = {
//                 value: document.getElementById('add-value').value,
//                 partNumber: document.getElementById('add-part-number').value,
//                 packageType: document.getElementById('add-package-type').value,
//                 locationType: document.getElementById('add-location-type').value,
//                 supplier: document.getElementById('add-supplier').value,
//                 quantity: document.getElementById('add-quantity').value,
//                 priceperitem: document.getElementById('add-price-per-item').value,
//                 totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
//             };
//             break;
//         case 'RS485':
//             values = {
//                 value: document.getElementById('add-value').value,
//                 partNumber: document.getElementById('add-part-number').value,
//                 packageType: document.getElementById('add-package-type').value,
//                 locationType: document.getElementById('add-location-type').value,
//                 supplier: document.getElementById('add-supplier').value,
//                 quantity: document.getElementById('add-quantity').value,
//                 priceperitem: document.getElementById('add-price-per-item').value,
//                 totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
//             };
//             break;
//         case 'Sim Slot':
//             values = {
//                 value: document.getElementById('add-value').value,
//                 partNumber: document.getElementById('add-part-number').value,
//                 packageType: document.getElementById('add-package-type').value,
//                 locationType: document.getElementById('add-location-type').value,
//                 supplier: document.getElementById('add-supplier').value,
//                 quantity: document.getElementById('add-quantity').value,
//                 priceperitem: document.getElementById('add-price-per-item').value,
//                 totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
//             };
//             break;
//         case 'Connector':
//             values = {
//                 type: document.getElementById('add-type').value,
//                 partNumber: document.getElementById('add-part-number').value,
//                 pinCount: document.getElementById('add-pin-count').value,
//                 packageType: document.getElementById('add-package-type').value,
//                 locationType: document.getElementById('add-location-type').value,
//                 supplier: document.getElementById('add-supplier').value,
//                 quantity: document.getElementById('add-quantity').value,
//                 priceperitem: document.getElementById('add-price-per-item').value,
//                 totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
//             };
//             break;
//         case 'Enclosure':
//             values = {
//                 type: document.getElementById('add-type').value,
//                 partNumber: document.getElementById('add-part-number').value,
//                 dimensions: document.getElementById('add-dimensions').value,
//                 packageType: document.getElementById('add-package-type').value,
//                 locationType: document.getElementById('add-location-type').value,
//                 supplier: document.getElementById('add-supplier').value,
//                 quantity: document.getElementById('add-quantity').value,
//                 priceperitem: document.getElementById('add-price-per-item').value,
//                 totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
//             };
//             break;
//         case 'UFL Cable':
//             values = {
//                 type: document.getElementById('add-type').value,
//                 partNumber: document.getElementById('add-part-number').value,
//                 length: document.getElementById('add-length').value,
//                 packageType: document.getElementById('add-package-type').value,
//                 locationType: document.getElementById('add-location-type').value,
//                 supplier: document.getElementById('add-supplier').value,
//                 quantity: document.getElementById('add-quantity').value,
//                 priceperitem: document.getElementById('add-price-per-item').value,
//                 totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
//             };
//             break;
//         default:
//             console.error('Unknown component type');
//             alert("Unknown component type");
//             return;
//     }

//     // Check if all fields are filled
//     allFieldsFilled = Object.values(values).every(field => field !== "");

//     if (!allFieldsFilled) {
//         alert("Please fill in all fields");
//         return;
//     }

//     const inventoryData = JSON.parse(localStorage.getItem('inventoryData')) || [];
//     inventoryData.push({ componentType, ...values });
//     localStorage.setItem('inventoryData', JSON.stringify(inventoryData));
//     addRowToTable(componentType, values);
//     alert(`${componentType} added successfully`);
// }

// function updateAttributes() {
//     const componentType = document.getElementById('componentType').value;
//     const attributeDropdowns = document.getElementById('attributeDropdowns');

//     // Clear previous fields
//     attributeDropdowns.innerHTML = '';

//     let fieldsHtml = '';
//     switch (componentType) {
//         case 'Resistor':
//             fieldsHtml = `
//                 <label for="add-type">Type:</label>
//                 <input type="text" id="add-type" placeholder="Enter type (e.g. R0805)">
//                 <label for="add-resistance-value">Resistance Value:</label>
//                 <input type="number" id="add-resistance-value" placeholder="Enter in Ω (e.g. 1.2Ω)">
//                 <label for="add-power-rating">Power Rating:</label>
//                 <input type="number" id="add-power-rating" placeholder="Enter in W (e.g. 0.25W)">
//                 <label for="add-voltage-rating">Voltage Rating:</label>
//                 <input type="number" id="add-voltage-rating" placeholder="Enter in V (e.g. 50V)">
//                 <label for="add-temperature-coefficient">Temperature Coefficient:</label>
//                 <input type="number" id="add-temperature-coefficient" placeholder="Enter in ppm/°C (e.g. 100ppm/°C)">
//                 <label for="add-tolerance">Tolerance:</label>
//                 <input type="number" id="add-tolerance" placeholder="Enter in % (e.g. ±1%)">
//                 <label for="add-package-type">Package Type:</label>
//                 <input type="text" id="add-package-type" placeholder="Enter package type (e.g. SMD)">
//                 <label for="add-label-type">Label Type:</label>
//                 <input type="text" id="add-label-type" placeholder="Enter label type (e.g. R1, R2, R3)">
//                 <label for="add-location-type">Location Stored:</label>
//                 <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
//                 <label for="add-supplier">Supplier:</label>
//                 <input type="text" id="add-supplier" placeholder="Enter supplier details">
//                 <label for="add-quantity">Quantity:</label>
//                 <input type="number" id="add-quantity" placeholder="Enter quantity">
//                 <label for="add-price-per-item">Price per item:</label>
//                 <input type="number" id="add-price-per-item" placeholder="Enter price per item">
                
//             `;
//             break;
//         case 'Capacitor':
//             fieldsHtml = `
//                 <label for="add-capacitance-value">Capacitance Value:</label>
//                 <input type="number" id="add-capacitance-value" placeholder="Enter in µF (e.g. 1.2µF)">
//                 <label for="add-voltage-rating">Voltage Rating:</label>
//                 <input type="number" id="add-voltage-rating" placeholder="Enter in V (e.g. 25V)">
//                 <label for="add-tolerance">Tolerance:</label>
//                 <input type="number" id="add-tolerance" placeholder="Enter in % (e.g. ±10%)">
//                 <label for="add-dielectric-type">Dielectric Type:</label>
//                 <input type="number" id="add-dielectric-type" placeholder="Enter dielectric type (e.g. X5R, X7R)">
//                 <label for="add-package-type">Package Type:</label>
//                 <input type="text" id="add-package-type" placeholder="Enter package type (e.g. SMD)">
//                 <label for="add-label-type">Label Type:</label>
//                 <input type="text" id="add-label-type" placeholder="Enter label type (e.g. C1, C2, C3)">
//                 <label for="add-location-type">Location Stored:</label>
//                 <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
//                 <label for="add-supplier">Supplier:</label>
//                 <input type="text" id="add-supplier" placeholder="Enter supplier details">
//                 <label for="add-quantity">Quantity:</label>
//                 <input type="number" id="add-quantity" placeholder="Enter quantity">
//                 <label for="add-price-per-item">Price per item:</label>
//                 <input type="number" id="add-price-per-item" placeholder="Enter price per item">
//             `;
//             break;
//         case 'Inductor':
//             fieldsHtml = `
//                 <label for="add-type">Type:</label>
//                 <input type="text" id="add-type" placeholder="Enter type">
//                 <label for="add-inductance-value">Inductance Value:</label>
//                 <input type="number" id="add-inductance-value" placeholder="Enter in µH (e.g. 10µH)">
//                 <label for="add-current-rating">Current Rating:</label>
//                 <input type="number" id="add-current-rating" placeholder="Enter in A (e.g. 1.5A)">
//                 <label for="add-package-type">Package Type:</label>
//                 <input type="text" id="add-package-type" placeholder="Enter package type (e.g. SMD)">
//                 <label for="add-location-type">Location Stored:</label>
//                 <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
//                 <label for="add-supplier">Supplier:</label>
//                 <input type="text" id="add-supplier" placeholder="Enter supplier details">
//                 <label for="add-quantity">Quantity:</label>
//                 <input type="number" id="add-quantity" placeholder="Enter quantity">
//                 <label for="add-price-per-item">Price per item:</label>
//                 <input type="number" id="add-price-per-item" placeholder="Enter price per item">
//             `;
//             break;
//         case 'Diode':
//             fieldsHtml = `
//                 <label for="add-type">Diode value:</label>
//                 <input type="text" id="add-type" placeholder="Enter diode value (e.g. SMD)">
//                 <label for="add-part-number">Part Number:</label>
//                 <input type="text" id="add-part-number" placeholder="Enter part number (e.g. D1 or D2.. or D1,D2  use comma seperated values)">
//                 <label for="add-package-type">Package Type:</label>
//                 <input type="text" id="add-package-type" placeholder="Enter package type (e.g. SMD)">
//                 <label for="add-location-type">Location Stored:</label>
//                 <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
//                 <label for="add-supplier">Supplier:</label>
//                 <input type="text" id="add-supplier" placeholder="Enter supplier details">
//                 <label for="add-quantity">Quantity:</label>
//                 <input type="number" id="add-quantity" placeholder="Enter quantity">
//                 <label for="add-price-per-item">Price per item:</label>
//                 <input type="number" id="add-price-per-item" placeholder="Enter price per item">
//             `;
//             break;
//         case 'Transistor':
//             fieldsHtml = `
//                 <label for="add-value">Value:</label>
//                 <input type="text" id="add-value" placeholder="Enter value (e.g. MMBT3904)">
//                 <label for="add-label">Label:</label>
//                 <input type="text" id="add-label" placeholder="Enter label (e.g. Q1,Q2,Q4,Q5)">
//                 <label for="add-package-type">Package Type:</label>
//                 <input type="text" id="add-package-type" placeholder="Enter package type (e.g. SMD- SOT-23)">
//                 <label for="add-location-type">Location Stored:</label>
//                 <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
//                 <label for="add-supplier">Supplier:</label>
//                 <input type="text" id="add-supplier" placeholder="Enter supplier details">
//                 <label for="add-quantity">Quantity:</label>
//                 <input type="number" id="add-quantity" placeholder="Enter quantity">
//                 <label for="add-price-per-item">Price per item:</label>
//                 <input type="number" id="add-price-per-item" placeholder="Enter price per item">
//             `;
//             break;
//         case 'Mosfet':
//             fieldsHtml = `
//                 <label for="add-value">Value:</label>
//                 <input type="text" id="add-value" placeholder="Enter value (e.g. SI2312)">
//                 <label for="add-label">Label:</label>
//                 <input type="text" id="add-label" placeholder="Enter label (e.g. Q1,Q2,Q4,Q5)">
//                 <label for="add-package-type">Package Type:</label>
//                 <input type="text" id="add-package-type" placeholder="Enter package type (e.g. SMD- SOT-23)">
//                 <label for="add-location-type">Location Stored:</label>
//                 <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
//                 <label for="add-supplier">Supplier:</label>
//                 <input type="text" id="add-supplier" placeholder="Enter supplier details">
//                 <label for="add-quantity">Quantity:</label>
//                 <input type="number" id="add-quantity" placeholder="Enter quantity">
//                 <label for="add-price-per-item">Price per item:</label>
//                 <input type="number" id="add-price-per-item" placeholder="Enter price per item">
//             `;
//             break;
//         case 'UFL':
//             fieldsHtml = `
//                 <label for="add-value">Value:</label>
//                 <input type="text" id="add-value" placeholder="Enter Value (eg.BM8563ESA)">
//                 <label for="add-part-number">Part Number:</label>
//                 <input type="text" id="add-part-number" placeholder="Enter part number">
//                 <label for="add-package-type">Package Type:</label>
//                 <input type="text" id="add-package-type" placeholder="Enter package type (eg. SMD - SOP-8)">
//                 <label for="add-location-type">Location Stored:</label>
//                 <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
//                 <label for="add-supplier">Supplier:</label>
//                 <input type="text" id="add-supplier" placeholder="Enter supplier details">
//                 <label for="add-quantity">Quantity:</label>
//                 <input type="number" id="add-quantity" placeholder="Enter quantity">
//                 <label for="add-price-per-item">Price per item:</label>
//                 <input type="number" id="add-price-per-item" placeholder="Enter price per item">
//             `;
//             break;
//         case 'Crystal':
//             fieldsHtml = `
//                 <label for="add-type">Type:</label>
//                 <input type="text" id="add-type" placeholder="Enter type">
//                 <label for="add-frequency">Frequency:</label>
//                 <input type="number" id="add-frequency" placeholder="Enter frequency (Enter in kHz)">
//                 <label for="add-tolerance">Tolerance:</label>
//                 <input type="text" id="add-tolerance" placeholder="Enter tolerance (eg. Enter in ±5%)">
//                 <label for="add-package-type">Package Type:</label>
//                 <input type="text" id="add-package-type" placeholder="Enter package type">
//                 <label for="add-location-type">Location Stored:</label>
//                 <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
//                 <label for="add-supplier">Supplier:</label>
//                 <input type="text" id="add-supplier" placeholder="Enter supplier details">
//                 <label for="add-quantity">Quantity:</label>
//                 <input type="number" id="add-quantity" placeholder="Enter quantity">
//                 <label for="add-price-per-item">Price per item:</label>
//                 <input type="number" id="add-price-per-item" placeholder="Enter price per item">
//             `;
//             break;
//         case 'Regulator':
//             fieldsHtml = `
//                 <label for="add-value">Value:</label>
//                 <input type="text" id="add-value" placeholder="Enter value (e.g. MMBT3904)">
//                 <label for="add-label">Label:</label>
//                 <input type="text" id="add-label" placeholder="Enter label (e.g. Q1,Q2,Q4,Q5)">
//                 <label for="add-package-type">Package Type:</label>
//                 <input type="text" id="add-package-type" placeholder="Enter package type (e.g. SMD- SOT-23)">
//                 <label for="add-location-type">Location Stored:</label>
//                 <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
//                 <label for="add-supplier">Supplier:</label>
//                 <input type="text" id="add-supplier" placeholder="Enter supplier details">
//                 <label for="add-quantity">Quantity:</label>
//                 <input type="number" id="add-quantity" placeholder="Enter quantity">
//                 <label for="add-price-per-item">Price per item:</label>
//                 <input type="number" id="add-price-per-item" placeholder="Enter price per item">
//             `;
//             break;
//         case 'Modem':
//             fieldsHtml = `
//                 <label for="add-value">Value:</label>
//                 <input type="text" id="add-value" placeholder="Enter Value (eg.BM8563ESA)">
//                 <label for="add-part-number">Part Number:</label>
//                 <input type="text" id="add-part-number" placeholder="Enter part number">
//                 <label for="add-package-type">Package Type:</label>
//                 <input type="text" id="add-package-type" placeholder="Enter package type (eg. SMD - SOP-8)">
//                 <label for="add-location-type">Location Stored:</label>
//                 <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
//                 <label for="add-supplier">Supplier:</label>
//                 <input type="text" id="add-supplier" placeholder="Enter supplier details">
//                 <label for="add-quantity">Quantity:</label>
//                 <input type="number" id="add-quantity" placeholder="Enter quantity">
//                 <label for="add-price-per-item">Price per item:</label>
//                 <input type="number" id="add-price-per-item" placeholder="Enter price per item">
//             `;
//             break;
//         case 'pressureSensor': //changed
//             fieldsHtml = `
//                 <label for="add-value">Value:</label>
//                 <input type="text" id="add-value" placeholder="Enter Value (eg.BM8563ESA)">
//                 <label for="add-part-number">Part Number:</label>
//                 <input type="text" id="add-part-number" placeholder="Enter part number">
//                 <label for="add-package-type">Package Type:</label>
//                 <input type="text" id="add-package-type" placeholder="Enter package type (eg. SMD - SOP-8)">
//                 <label for="add-location-type">Location Stored:</label>
//                 <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
//                 <label for="add-supplier">Supplier:</label>
//                 <input type="text" id="add-supplier" placeholder="Enter supplier details">
//                 <label for="add-quantity">Quantity:</label>
//                 <input type="number" id="add-quantity" placeholder="Enter quantity">
//                 <label for="add-price-per-item">Price per item:</label>
//                 <input type="number" id="add-price-per-item" placeholder="Enter price per item">
//             `;
//             break;
//         case 'RTC':
//             fieldsHtml = `
//                 <label for="add-value">Value:</label>
//                 <input type="text" id="add-value" placeholder="Enter Value (eg.BM8563ESA)">
//                 <label for="add-part-number">Part Number:</label>
//                 <input type="text" id="add-part-number" placeholder="Enter part number">
//                 <label for="add-package-type">Package Type:</label>
//                 <input type="text" id="add-package-type" placeholder="Enter package type (eg. SMD - SOP-8)">
//                 <label for="add-location-type">Location Stored:</label>
//                 <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
//                 <label for="add-supplier">Supplier:</label>
//                 <input type="text" id="add-supplier" placeholder="Enter supplier details">
//                 <label for="add-quantity">Quantity:</label>
//                 <input type="number" id="add-quantity" placeholder="Enter quantity">
//                 <label for="add-price-per-item">Price per item:</label>
//                 <input type="number" id="add-price-per-item" placeholder="Enter price per item">
//             `;
//             break;
//         case 'ESP':
//             fieldsHtml = `
//                 <label for="add-value">Value:</label>
//                 <input type="text" id="add-value" placeholder="Enter Value (eg.BM8563ESA)">
//                 <label for="add-part-number">Part Number:</label>
//                 <input type="text" id="add-part-number" placeholder="Enter part number">
//                 <label for="add-package-type">Package Type:</label>
//                 <input type="text" id="add-package-type" placeholder="Enter package type (eg. SMD - SOP-8)">
//                 <label for="add-location-type">Location Stored:</label>
//                 <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
//                 <label for="add-supplier">Supplier:</label>
//                 <input type="text" id="add-supplier" placeholder="Enter supplier details">
//                 <label for="add-quantity">Quantity:</label>
//                 <input type="number" id="add-quantity" placeholder="Enter quantity">
//                 <label for="add-price-per-item">Price per item:</label>
//                 <input type="number" id="add-price-per-item" placeholder="Enter price per item">
//             `;
//             break;
//         case 'RS485':
//             fieldsHtml = `
//                 <label for="add-value">Value:</label>
//                 <input type="text" id="add-value" placeholder="Enter Value (eg.BM8563ESA)">
//                 <label for="add-part-number">Part Number:</label>
//                 <input type="text" id="add-part-number" placeholder="Enter part number">
//                 <label for="add-package-type">Package Type:</label>
//                 <input type="text" id="add-package-type" placeholder="Enter package type (eg. SMD - SOP-8)">
//                 <label for="add-location-type">Location Stored:</label>
//                 <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
//                 <label for="add-supplier">Supplier:</label>
//                 <input type="text" id="add-supplier" placeholder="Enter supplier details">
//                 <label for="add-quantity">Quantity:</label>
//                 <input type="number" id="add-quantity" placeholder="Enter quantity">
//                 <label for="add-price-per-item">Price per item:</label>
//                 <input type="number" id="add-price-per-item" placeholder="Enter price per item">
//             `;
//             break;
//         case 'Sim Slot':
//             fieldsHtml = `
//                 <label for="add-value">Value:</label>
//                 <input type="text" id="add-value" placeholder="Enter Value (eg.BM8563ESA)">
//                 <label for="add-part-number">Part Number:</label>
//                 <input type="text" id="add-part-number" placeholder="Enter part number">
//                 <label for="add-package-type">Package Type:</label>
//                 <input type="text" id="add-package-type" placeholder="Enter package type (eg. SMD - SOP-8)">
//                 <label for="add-location-type">Location Stored:</label>
//                 <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
//                 <label for="add-supplier">Supplier:</label>
//                 <input type="text" id="add-supplier" placeholder="Enter supplier details">
//                 <label for="add-quantity">Quantity:</label>
//                 <input type="number" id="add-quantity" placeholder="Enter quantity">
//                 <label for="add-price-per-item">Price per item:</label>
//                 <input type="number" id="add-price-per-item" placeholder="Enter price per item">
//             `;
//             break;
//         case 'Connector':
//             fieldsHtml = `
//                 <label for="add-type">Type:</label>
//                 <input type="text" id="add-type" placeholder="Enter type">
//                 <label for="add-part-number">Part Number:</label>
//                 <input type="text" id="add-part-number" placeholder="Enter part number">
//                 <label for="add-pin-count">Pin Count:</label>
//                 <input type="text" id="add-pin-count" placeholder="Enter pin count">
//                 <label for="add-package-type">Package Type:</label>
//                 <input type="text" id="add-package-type" placeholder="Enter package type">
//                 <label for="add-location-type">Location Stored:</label>
//                 <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
//                 <label for="add-supplier">Supplier:</label>
//                 <input type="text" id="add-supplier" placeholder="Enter supplier details">
//                 <label for="add-quantity">Quantity:</label>
//                 <input type="number" id="add-quantity" placeholder="Enter quantity">
//                 <label for="add-price-per-item">Price per item:</label>
//                 <input type="number" id="add-price-per-item" placeholder="Enter price per item">
//             `;
//             break;
//         case 'Enclosure':
//             fieldsHtml = `
//                 <label for="add-type">Type:</label>
//                 <input type="text" id="add-type" placeholder="Enter type">
//                 <label for="add-part-number">Part Number:</label>
//                 <input type="text" id="add-part-number" placeholder="Enter part number">
//                 <label for="add-dimensions">Dimensions:</label>
//                 <input type="text" id="add-dimensions" placeholder="Enter dimensions">
//                 <label for="add-package-type">Package Type:</label>
//                 <input type="text" id="add-package-type" placeholder="Enter package type">
//                 <label for="add-location-type">Location Stored:</label>
//                 <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
//                 <label for="add-supplier">Supplier:</label>
//                 <input type="text" id="add-supplier" placeholder="Enter supplier details">
//                 <label for="add-quantity">Quantity:</label>
//                 <input type="number" id="add-quantity" placeholder="Enter quantity">
//                 <label for="add-price-per-item">Price per item:</label>
//                 <input type="number" id="add-price-per-item" placeholder="Enter price per item">
//             `;
//             break;
//         case 'UFL Cable':
//             fieldsHtml = `
//                 <label for="add-type">Type:</label>
//                 <input type="text" id="add-type" placeholder="Enter type">
//                 <label for="add-part-number">Part Number:</label>
//                 <input type="text" id="add-part-number" placeholder="Enter part number">
//                 <label for="add-length">Length:</label>
//                 <input type="text" id="add-length" placeholder="Enter length">
//                 <label for="add-package-type">Package Type:</label>
//                 <input type="text" id="add-package-type" placeholder="Enter package type">
//                 <label for="add-location-type">Location Stored:</label>
//                 <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
//                 <label for="add-supplier">Supplier:</label>
//                 <input type="text" id="add-supplier" placeholder="Enter supplier details">
//                 <label for="add-quantity">Quantity:</label>
//                 <input type="number" id="add-quantity" placeholder="Enter quantity">
//                 <label for="add-price-per-item">Price per item:</label>
//                 <input type="number" id="add-price-per-item" placeholder="Enter price per item">
//             `;
//             break;
//         default:
//             fieldsHtml = '<p>Please select a valid component type.</p>';
//     }

//     attributeDropdowns.innerHTML = fieldsHtml;
// }

// function populateSearchFields() {
//     const component = document.getElementById('component-type').value;
//     const searchFields = document.getElementById('component-search-fields');
//     searchFields.innerHTML = '';

//     if (component && componentAttributes[component]) {
//         componentAttributes[component].forEach(field => {
//             const label = document.createElement('label');
//             label.textContent = `${field.name}:`;
//             const input = document.createElement('input');
//             input.type = field.type;
//             input.placeholder = field.placeholder;
//             input.id = `search-${field.name.toLowerCase().replace(/ /g, '-')}`;

//             searchFields.appendChild(label);
//             searchFields.appendChild(input);
//             searchFields.appendChild(document.createElement('br'));
//         });
//     }
// }

// function searchComponentTable() {
//     const component = document.getElementById('component-type').value;
//     const attributes = componentAttributes[component];
//     const values = {};

//     attributes.forEach(field => {
//         values[field.name] = document.getElementById(`search-${field.name.toLowerCase().replace(/ /g, '-')}`).value.toLowerCase();
//     });

//     const tableId = `${component.toLowerCase()}Table`;
//     const table = document.getElementById(tableId);
//     const rows = table.getElementsByTagName('tr');
//     let found = false;
//     let results = [];

//     for (let i = 1; i < rows.length; i++) { // Start from 1 to skip header row
//         const cells = rows[i].getElementsByTagName('td');
//         let match = true;
//         attributes.forEach((field, index) => {
//             if (values[field.name] && !cells[index].innerText.toLowerCase().includes(values[field.name])) {
//                 match = false;
//             }
//         });
//         if (match) {
//             rows[i].classList.add('highlight');
//             results.push(rows[i].innerText);
//             found = true;
//         } else {
//             rows[i].classList.remove('highlight');
//         }
//     }

//     displayResults(found, results);
// }

// function displayResults(found, results) {
//     const resultCard = document.getElementById('result-card');
//     const resultContent = document.getElementById('result-content');
//     resultContent.innerHTML = ''; // Clear previous results

//     if (found) {
//         results.forEach(result => {
//             const p = document.createElement('p');
//             p.textContent = result;
//             resultContent.appendChild(p);
//         });
//     } else {
//         const p = document.createElement('p');
//         p.textContent = 'No matching components found.';
//         resultContent.appendChild(p);
//     }

//     resultCard.style.display = 'block';
// }

// function populateSpecFields() {
//     const component = document.getElementById('spec-component-type').value;
//     const searchFields = document.getElementById('spec-search-fields');
//     searchFields.innerHTML = '';

//     if (component && componentAttributes[component]) {
//         componentAttributes[component].forEach(field => {
//             const label = document.createElement('label');
//             label.textContent = `${field.name}:`;
//             const input = document.createElement('input');
//             input.type = field.type;
//             input.placeholder = field.placeholder;
//             input.id = `spec-${field.name.toLowerCase().replace(/ /g, '-')}`;

//             searchFields.appendChild(label);
//             searchFields.appendChild(input);
//             searchFields.appendChild(document.createElement('br'));
//         });
//     }
// }

// function searchSpecificationTable() {
//     const componentType = document.getElementById('spec-component-type').value;
//     if (!componentType) {
//         alert("Please select a component type");
//         return;
//     }

//     const searchFields = document.querySelectorAll(`#specification-specific-search-form input`);
//     const searchValues = {};
//     searchFields.forEach(field => {
//         if (field.value) {
//             searchValues[field.id.split('-')[1]] = field.value.toLowerCase();
//         }
//     });

//     let tableId = `${componentType.toLowerCase().replace(' ', '')}Table`;
//     let table = document.getElementById(tableId);

//     if (!table) {
//         alert("Error: Table not found.");
//         return;
//     }

//     let rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
//     let totalQuantity = 0;

//     for (let i = 0; i < rows.length; i++) {
//         let cells = rows[i].getElementsByTagName('td');
//         let match = true;

//         for (let key in searchValues) {
//             let cellValue = cells[Object.keys(searchValues).indexOf(key)].textContent.toLowerCase();
//             if (cellValue !== searchValues[key]) {
//                 match = false;
//                 break;
//             }
//         }

//         if (match) {
//             totalQuantity += parseInt(cells[cells.length - 2].textContent);  // Assuming quantity is the second last column
//         }
//     }

//     displaySearchResult(totalQuantity);
// }


// function displaySearchResult(totalQuantity) {
//     const resultCard = document.getElementById('result-card');
//     const resultContent = document.getElementById('result-content');

//     resultContent.innerHTML = `
//         <p>Total matching components: ${totalQuantity}</p>
//     `;

//     resultCard.style.display = 'block';
// }

// function toggleForm() {
//     const action = document.getElementById('action').value;
//     const forms = document.querySelectorAll('.form');
//     forms.forEach(form => form.style.display = 'none');

//     if (action) {
//         document.getElementById(`${action}-form`).style.display = 'block';
//     }
// }

// function saveToLocalStorage(componentType, values) {
//     let data = JSON.parse(localStorage.getItem('stockData')) || {};
//     if (!data[componentType]) {
//         data[componentType] = [];
//     }
//     data[componentType].push(values);
//     localStorage.setItem('stockData', JSON.stringify(data));
// }

// document.addEventListener('DOMContentLoaded', function() {
//     loadFromLocalStorage();
// });

// function loadFromLocalStorage() {
//     let data = JSON.parse(localStorage.getItem('stockData'));
//     if (data) {
//         for (let componentType in data) {
//             let tableId = `${componentType.toLowerCase().replace(' ', '')}Table`;
//             let tableBody = document.querySelector(`#${tableId} tbody`);
//             let tableSectionId = `${componentType.toLowerCase().replace(' ', '')}TableSection`;
//             let tableSection = document.getElementById(tableSectionId);

//             if (tableBody && tableSection) {
//                 data[componentType].forEach(item => {
//                     let newRow = document.createElement('tr');
//                     newRow.innerHTML = Object.values(item).map(value => `<td>${value}</td>`).join('');
//                     tableBody.appendChild(newRow);
//                 });
//                 tableSection.style.display = 'block';
//             }
//         }
//     }
// }

// document.addEventListener('DOMContentLoaded', () => {
//     const savedProducts = localStorage.getItem('viewStockData');
//     if (savedProducts) {
//         const products = JSON.parse(savedProducts);
//         products.forEach(product => addProductToTable(product));
//     }
// });

// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('action').addEventListener('change', toggleForm);
//     document.getElementById('componentType').addEventListener('change', updateAttributes);
// });
























































































































const componentAttributes = {
    Resistor: [
        { name: "Resistor Type", type: "text", placeholder: "Enter type (e.g. R0805)" },
        { name: "Resistance Value", type: "number", placeholder: "Enter in Ω (e.g. 1.2Ω)" },
        { name: "Power Rating", type: "number", placeholder: "Enter in W (e.g. 0.25W)" },
        { name: "Voltage Rating", type: "number", placeholder: "Enter in V (e.g. 50V)" },
        { name: "Temperature Coefficient", type: "number", placeholder: "Enter in ppm/°C (e.g. 100ppm/°C)" },
        { name: "Tolerance", type: "number", placeholder: "Enter in % (e.g. ±1%)" },
        { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
        { name: "Label Type",type:"text",placeholder:"Enter label type (e.g. R1, R2, R3)"},
        { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
        { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
        { name: "Quantity",type:"number",placeholder:"Enter quantity"},
        { name: "Price per item",type:"number",placeholder:"Enter price per item "},
    ],
    Capacitor: [
        { name: "Capacitance Value", type: "number", placeholder: "Enter in µF (e.g. 1.2µF)" },
        { name: "Voltage Rating", type: "number", placeholder: "Enter in V (e.g. 25V)" },
        { name: "Tolerance", type: "number", placeholder: "Enter in % (e.g. ±10%)" },
        { name: "Dielectric Type", type: "text", placeholder: "Enter dielectric type (e.g. X5R, X7R)" },
        { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
        { name: "Label Type",type:"text",placeholder:"Enter label type (e.g. C1, C2, C3)"},
        { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
        { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
        { name: "Quantity",type:"number",placeholder:"Enter quantity"},
        { name: "Price per item",type:"number",placeholder:"Enter price per item "},
    ],
    Inductor: [
        { name: "Inductance Value", type: "number", placeholder: "Enter in µH (e.g. 10µH)" },
        { name: "Current Rating", type: "number", placeholder: "Enter in A (e.g. 1.5A)" },
        { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
        { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
        { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
        { name: "Quantity",type:"number",placeholder:"Enter quantity"},
        { name: "Price per item",type:"number",placeholder:"Enter price per item "},
    ],
    Diode: [
        {name:  "Value" ,type:"text",placeholder:"Enter diode value "},
        { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. 1N4148)" },
        { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
        { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
        { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
        { name: "Quantity",type:"number",placeholder:"Enter quantity"},
        { name: "Price per item",type:"number",placeholder:"Enter price per item "},
    ],
    Transistor: [
        { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. 2N2222)" },
        { name: "Voltage Rating", type: "number", placeholder: "Enter in V (e.g. 40V)" },
        { name: "Current Rating", type: "number", placeholder: "Enter in A (e.g. 0.8A)" },
        { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
        { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
        { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
        { name: "Quantity",type:"number",placeholder:"Enter quantity"},
        { name: "Price per item",type:"number",placeholder:"Enter price per item "},
    ],
    Mosfet: [
        { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. SI2312)" },
        { name: "Voltage Rating", type: "number", placeholder: "Enter in V (e.g. 60V)" },
        { name: "Current Rating", type: "number", placeholder: "Enter in A (e.g. 1.0A)" },
        { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
        { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
        { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
        { name: "Quantity",type:"number",placeholder:"Enter quantity"},
        { name: "Price per item",type:"number",placeholder:"Enter price per item "},
    ],
    UFL: [
        {name:  "Value", type: "text", placeholder: "Enter value (e.g. DS3231)" },
        { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. U.FL-R-SMT-1)" },
        { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
        { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
        { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
        { name: "Quantity",type:"number",placeholder:"Enter quantity"},
        { name: "Price per item",type:"number",placeholder:"Enter price per item "},
    ],
    Crystal: [
        { name: "Type", type: "text", placeholder: "Enter type (e.g. SMD)"},
        { name: "Frequency", type: "number", placeholder: "Enter in kHz (e.g. 32.768kHz)" },
        { name: "Tolerance", type: "number", placeholder: "Enter in ppm (e.g. ±20ppm)" },
        { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
        { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
        { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
        { name: "Quantity",type:"number",placeholder:"Enter quantity"},
        { name: "Price per item",type:"number",placeholder:"Enter price per item "},
    ],
    Regulator: [
        { name: "Value" ,type:"text",placeholder:"Enter regulator value"},
        { name: "Label" ,type:"text",placeholder:"Enter label (e.g. U1)"},
        { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
        { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
        { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
        { name: "Quantity",type:"number",placeholder:"Enter quantity"},
        { name: "Price per item",type:"number",placeholder:"Enter price per item "},
    ],
    Modem: [
        {name:  "Value", type: "text", placeholder: "Enter value (e.g. DS3231)" },
        { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. Simcom_A7672S)" },
        { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
        { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
        { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
        { name: "Quantity",type:"number",placeholder:"Enter quantity"},
        { name: "Price per item",type:"number",placeholder:"Enter price per item "},
    ],
    Pressure_Sensor: [
        {name:  "Value", type: "text", placeholder: "Enter value (e.g. DS3231)" },
        { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. DPS310)" },
        { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
        { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
        { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
        { name: "Quantity",type:"number",placeholder:"Enter quantity"},
        { name: "Price per item",type:"number",placeholder:"Enter price per item "},
    ],
    RTC: [
        {name:  "Value", type: "text", placeholder: "Enter value (e.g. DS3231)" },
        { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. BM8563ESA)" },
        { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
        { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
        { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
        { name: "Quantity",type:"number",placeholder:"Enter quantity"},
        { name: "Price per item",type:"number",placeholder:"Enter price per item "},
    ],
    ESP: [
        {name:  "Value", type: "text", placeholder: "Enter value (e.g. DS3231)" },
        { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. ESP WROOM 32)" },
        { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
        { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
        { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
        { name: "Quantity",type:"number",placeholder:"Enter quantity"},
        { name: "Price per item",type:"number",placeholder:"Enter price per item "},
    ],
    RS485: [
        {name:  "Value", type: "text", placeholder: "Enter value (e.g. DS3231)" },
        { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. MAX485CSA+T)" },
        { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
        { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
        { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
        { name: "Quantity",type:"number",placeholder:"Enter quantity"},
        { name: "Price per item",type:"number",placeholder:"Enter price per item "},
    ],
    Sim_Slot: [
        {name:  "Value", type: "text", placeholder: "Enter value (e.g. DS3231)" },
        { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. SIM-1305-6P)" },
        { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
        { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
        { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
        { name: "Quantity",type:"number",placeholder:"Enter quantity"},
        { name: "Price per item",type:"number",placeholder:"Enter price per item "},
    ],
    Connector: [
        { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. 8pin)" },
        { name: "Pin Count", type: "number", placeholder: "Enter pin count (e.g. 8)" },
        { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. Leaded)" },
        { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
        { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
        { name: "Quantity",type:"number",placeholder:"Enter quantity"},
        { name: "Price per item",type:"number",placeholder:"Enter price per item "},
    ],
    Enclosure: [
        {name:  "Value", type: "text", placeholder: "Enter value (e.g. DS3231)" },
        { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. Enclosure)" },
        { name: "Dimensions", type: "text", placeholder: "Enter dimensions (e.g. 120 x 60 x 40 mm)" },
        { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
        { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
        { name: "Quantity",type:"number",placeholder:"Enter quantity"},
        { name: "Price per item",type:"number",placeholder:"Enter price per item "},
    ],
    UFL_Cable: [
        { name: "Part Number", type: "text", placeholder: "Enter part number (e.g. UFL Cable)" },
        { name: "Length", type: "number", placeholder: "Enter length (e.g. 50mm)" },
        { name: "Package Type", type: "text", placeholder: "Enter package type (e.g. SMD)" },
        { name: "Location Stored",type:"text",placeholder:"Enter location stored "},
        { name: "Supplier",type:"text",placeholder:"Enter supplier details"},
        { name: "Quantity",type:"number",placeholder:"Enter quantity"},
        { name: "Price per item",type:"number",placeholder:"Enter price per item "},
    ],
};




// function toggleForm() {
//     const action = document.getElementById('action').value;
//     const forms = document.querySelectorAll('.form');
//     forms.forEach(form => form.style.display = 'none');

//     if (action) {
//         document.getElementById(`${action}-form`).style.display = 'block';
//     }
// }

document.addEventListener('DOMContentLoaded', function() {
    loadStockTables();
});

function loadStockTables() {
    const inventoryData = JSON.parse(localStorage.getItem('inventoryData')) || [];
    inventoryData.forEach(item => {
        addRowToTable(item.componentType, item);
    });
}

function addRowToTable(componentType, values) {
    const tableId = `${componentType.toLowerCase().replace(' ', '')}Table`;
    const tableSectionId = `${componentType.toLowerCase().replace(' ', '')}TableSection`;
    const tableSection = document.getElementById(tableSectionId);

    if (!tableSection) {
        console.error(`Element with ID ${tableSectionId} not found!`);
        alert("Error: Table section not found.");
        return;
    }

    const tableBody = document.querySelector(`#${tableId} tbody`);
    const newRow = document.createElement('tr');
    const cellValues = getCellValues(componentType, values);
    newRow.innerHTML = cellValues.map(value => `<td>${value}</td>`).join('') + `<td><button onclick="deleteRow(this, '${componentType}')">Delete</button></td>`;
    tableBody.appendChild(newRow);
    tableSection.style.display = 'block';
}

function deleteRow(button, componentType) {
    const row = button.parentNode.parentNode;
    const tableId = `${componentType.toLowerCase().replace(' ', '')}Table`;
    const tableBody = document.querySelector(`#${tableId} tbody`);
    const rowIndex = Array.from(tableBody.children).indexOf(row); // Get the index of the row

    row.parentNode.removeChild(row);

    let inventoryData = JSON.parse(localStorage.getItem('inventoryData')) || [];
    inventoryData = inventoryData.filter((item, index) => {
        return !(item.componentType === componentType && index === rowIndex);
    });

    localStorage.setItem('inventoryData', JSON.stringify(inventoryData));
    alert(`${componentType} deleted successfully`);
}

function getCellValues(componentType, values) {
    switch (componentType) {
        case 'Resistor':
            return [
                values.type,
                values.resistanceValue,
                values.powerRating,
                values.voltageRating,
                values.temperatureCoefficient,
                values.tolerance,
                values.packageType,
                values.labelType,
                values.locationType,
                values.supplier,
                values.quantity,
                values.priceperitem,
                values.totalPrice
            ];
        case 'Capacitor':
            return [
                values.capacitanceValue,
                values.voltageRating,
                values.tolerance,
                values.dielectricType,
                values.packageType,
                values.labelType,
                values.locationType,
                values.supplier,
                values.quantity,
                values.priceperitem,
                values.totalPrice
            ];
        case 'Inductor':
            return [
                values.type,
                values.inductanceValue,
                values.currentRating,
                values.packageType,
                values.locationType,
                values.supplier,
                values.quantity,
                values.priceperitem,
                values.totalPrice
            ];
        case 'Diode':
            return [
                values.type,
                values.partNumber,
                values.packageType,
                values.locationType,
                values.supplier,
                values.quantity,
                values.priceperitem,
                values.totalPrice
            ];
        case 'Transistor':

            return [
                values.value,
                values.label,
                values.packageType,
                values.locationType,
                values.supplier,
                values.quantity,
                values.priceperitem,
                values.totalPrice
            ];
        case 'Mosfet':
            return [
                values.value,
                values.label,
                values.packageType,
                values.locationType,
                values.supplier,
                values.quantity,
                values.priceperitem,
                values.totalPrice
            ];
        case 'UFL':
            return [
                values.value,
                values.partNumber,
                values.packageType,
                values.locationType,
                values.supplier,
                values.quantity,
                values.priceperitem,
                values.totalPrice
            ];
        case 'Crystal':
            return [
                values.type,
                values.frequency,
                values.tolerance,
                values.packageType,
                values.locationType,
                values.supplier,
                values.quantity,
                values.priceperitem,
                values.totalPrice
            ];
        case 'Regulator':
            return [
                values.value,
                values.label,
                values.packageType,
                values.locationType,
                values.supplier,
                values.quantity,
                values.priceperitem,
                values.totalPrice
            ];
        case 'Modem':
            return [
                values.value,
                values.partNumber,
                values.packageType,
                values.locationType,
                values.supplier,
                values.quantity,
                values.priceperitem,
                values.totalPrice
            ];
        case 'Pressure_Sensor':
            return [
                values.value,
                values.partNumber,
                values.packageType,
                values.locationType,
                values.supplier,
                values.quantity,
                values.priceperitem,
                values.totalPrice
            ];
        case 'RTC':
            return [
                values.value,
                values.partNumber,
                values.packageType,
                values.locationType,
                values.supplier,
                values.quantity,
                values.priceperitem,
                values.totalPrice
            ];
        case 'ESP':
            return [
                values.value,
                values.partNumber,
                values.packageType,
                values.locationType,
                values.supplier,
                values.quantity,
                values.priceperitem,
                values.totalPrice
            ];
        case 'RS485':
            return [
                values.value,
                values.partNumber,
                values.packageType,
                values.locationType,
                values.supplier,
                values.quantity,
                values.priceperitem,
                values.totalPrice
            ];

        case 'Sim_Slot':
            return [
                values.value,
                values.partNumber,
                values.packageType,
                values.locationType,
                values.supplier,
                values.quantity,
                values.priceperitem,
                values.totalPrice
            ];
        case 'Connector':
            return [
                values.partNumber,
                values.pinCount,
                values.packageType,
                values.locationType,
                values.supplier,
                values.quantity,
                values.priceperitem,
                values.totalPrice
            ];
        case 'Enclosure':
            return [
                values.value,
                values.partNumber,
                values.dimensions,
                values.locationType,
                values.supplier,
                values.quantity,
                values.priceperitem,
                values.totalPrice
            ];
        case 'UFL_Cable':
            return [
                values.partNumber,
                values.length,

                values.packageType,
                values.locationType,
                values.supplier,
                values.quantity,
                values.priceperitem,
                values.totalPrice
            ];
        // Add other component types similarly...
        default:
            console.error('Unknown component type');
            return [];
    }
}



function addStock() {
    const componentType = document.getElementById('componentType').value;
    if (!componentType) {
        alert("Please select a component type");
        return;
    }

    let values = {};
    let allFieldsFilled = true;

    // Gather values based on the component type
    switch (componentType) {
        case 'Resistor':
            values = {
                type: document.getElementById('add-type').value,
                resistanceValue: document.getElementById('add-resistance-value').value,
                powerRating: document.getElementById('add-power-rating').value,
                voltageRating: document.getElementById('add-voltage-rating').value,
                temperatureCoefficient: document.getElementById('add-temperature-coefficient').value,
                tolerance: document.getElementById('add-tolerance').value,
                packageType: document.getElementById('add-package-type').value,
                labelType: document.getElementById('add-label-type').value,
                locationType: document.getElementById('add-location-type').value,
                supplier: document.getElementById('add-supplier').value,
                quantity: document.getElementById('add-quantity').value,
                priceperitem: document.getElementById('add-price-per-item').value,
                totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
            };
            break;
        case 'Capacitor':
            values = {
                capacitanceValue: document.getElementById('add-capacitance-value').value,
                voltageRating: document.getElementById('add-voltage-rating').value,
                tolerance: document.getElementById('add-tolerance').value,
                dielectricType: document.getElementById('add-dielectric-type').value,
                packageType: document.getElementById('add-package-type').value,
                labelType: document.getElementById('add-label-type').value,
                locationType: document.getElementById('add-location-type').value,
                supplier: document.getElementById('add-supplier').value,
                quantity: document.getElementById('add-quantity').value,
                priceperitem: document.getElementById('add-price-per-item').value,
                totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
            };
            break;
        case 'Inductor':
            values = {
                type: document.getElementById('add-type').value,
                inductanceValue: document.getElementById('add-inductance-value').value,
                currentRating: document.getElementById('add-current-rating').value,
                packageType: document.getElementById('add-package-type').value,
                locationType: document.getElementById('add-location-type').value,
                supplier: document.getElementById('add-supplier').value,
                quantity: document.getElementById('add-quantity').value,
                priceperitem: document.getElementById('add-price-per-item').value,
                totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
            };
            break;
        case 'Diode':
            values = {
                type: document.getElementById('add-type').value,
                partNumber: document.getElementById('add-part-number').value,
                packageType: document.getElementById('add-package-type').value,
                locationType: document.getElementById('add-location-type').value,
                supplier: document.getElementById('add-supplier').value,
                quantity: document.getElementById('add-quantity').value,
                priceperitem: document.getElementById('add-price-per-item').value,
                totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
            };
            break;
        case 'Transistor':
            values = {
                value: document.getElementById('add-value').value,
                label: document.getElementById('add-label').value,
                packageType: document.getElementById('add-package-type').value,
                locationType: document.getElementById('add-location-type').value,
                locationType: document.getElementById('add-location-type').value,
                supplier: document.getElementById('add-supplier').value,
                quantity: document.getElementById('add-quantity').value,
                priceperitem: document.getElementById('add-price-per-item').value,
                totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
            };
            break;
        case 'Mosfet':
            values = {
                value: document.getElementById('add-value').value,
                label: document.getElementById('add-label').value,
                packageType: document.getElementById('add-package-type').value,
                locationType: document.getElementById('add-location-type').value,
                supplier: document.getElementById('add-supplier').value,
                quantity: document.getElementById('add-quantity').value,
                priceperitem: document.getElementById('add-price-per-item').value,
                totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
            };
            break;
        case 'UFL':
            values = {
                value: document.getElementById('add-value').value,
                partNumber: document.getElementById('add-part-number').value,
                packageType: document.getElementById('add-package-type').value,
                locationType: document.getElementById('add-location-type').value,
                supplier: document.getElementById('add-supplier').value,
                quantity: document.getElementById('add-quantity').value,
                priceperitem: document.getElementById('add-price-per-item').value,
                totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
            };
            break;
        case 'Crystal':
            values = {
                type: document.getElementById('add-type').value,
                frequency: document.getElementById('add-frequency').value,
                tolerance: document.getElementById('add-tolerance').value,
                packageType: document.getElementById('add-package-type').value,
                locationType: document.getElementById('add-location-type').value,
                supplier: document.getElementById('add-supplier').value,
                quantity: document.getElementById('add-quantity').value,
                priceperitem: document.getElementById('add-price-per-item').value,
                totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
            };
            break;
        case 'Regulator':
            values = {
                value: document.getElementById('add-value').value,
                label: document.getElementById('add-label').value,
                packageType: document.getElementById('add-package-type').value,
                locationType: document.getElementById('add-location-type').value,
                supplier: document.getElementById('add-supplier').value,
                quantity: document.getElementById('add-quantity').value,
                priceperitem: document.getElementById('add-price-per-item').value,
                totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
            };
            break;
        case 'Modem':
            values = {
                value: document.getElementById('add-value').value,
                partNumber: document.getElementById('add-part-number').value,
                packageType: document.getElementById('add-package-type').value,
                locationType: document.getElementById('add-location-type').value,
                supplier: document.getElementById('add-supplier').value,
                quantity: document.getElementById('add-quantity').value,
                priceperitem: document.getElementById('add-price-per-item').value,
                totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
            };
            break;
        case 'Pressure_Sensor':
            values = {
                value: document.getElementById('add-value').value,
                partNumber: document.getElementById('add-part-number').value,
                packageType: document.getElementById('add-package-type').value,
                locationType: document.getElementById('add-location-type').value,
                supplier: document.getElementById('add-supplier').value,
                quantity: document.getElementById('add-quantity').value,
                priceperitem: document.getElementById('add-price-per-item').value,
                totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
            };
            break;
        case 'RTC':
            values = {
                value: document.getElementById('add-value').value,
                partNumber: document.getElementById('add-part-number').value,
                packageType: document.getElementById('add-package-type').value,
                locationType: document.getElementById('add-location-type').value,
                supplier: document.getElementById('add-supplier').value,
                quantity: document.getElementById('add-quantity').value,
                priceperitem: document.getElementById('add-price-per-item').value,
                totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
            };
            break;
        case 'ESP':
            values = {
                value: document.getElementById('add-value').value,
                partNumber: document.getElementById('add-part-number').value,
                packageType: document.getElementById('add-package-type').value,
                locationType: document.getElementById('add-location-type').value,
                supplier: document.getElementById('add-supplier').value,
                quantity: document.getElementById('add-quantity').value,
                priceperitem: document.getElementById('add-price-per-item').value,
                totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
            };
            break;
        case 'RS485':
            values = {
                value: document.getElementById('add-value').value,
                partNumber: document.getElementById('add-part-number').value,
                packageType: document.getElementById('add-package-type').value,
                locationType: document.getElementById('add-location-type').value,
                supplier: document.getElementById('add-supplier').value,
                quantity: document.getElementById('add-quantity').value,
                priceperitem: document.getElementById('add-price-per-item').value,
                totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
            };
            break;
        case 'Sim Slot':
            values = {
                value: document.getElementById('add-value').value,
                partNumber: document.getElementById('add-part-number').value,
                packageType: document.getElementById('add-package-type').value,
                locationType: document.getElementById('add-location-type').value,
                supplier: document.getElementById('add-supplier').value,
                quantity: document.getElementById('add-quantity').value,
                priceperitem: document.getElementById('add-price-per-item').value,
                totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
            };
            break;
        case 'Connector':
            values = {
                type: document.getElementById('add-type').value,
                partNumber: document.getElementById('add-part-number').value,
                pinCount: document.getElementById('add-pin-count').value,
                packageType: document.getElementById('add-package-type').value,
                locationType: document.getElementById('add-location-type').value,
                supplier: document.getElementById('add-supplier').value,
                quantity: document.getElementById('add-quantity').value,
                priceperitem: document.getElementById('add-price-per-item').value,
                totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
            };
            break;
        case 'Enclosure':
            values = {
                type: document.getElementById('add-type').value,
                partNumber: document.getElementById('add-part-number').value,
                dimensions: document.getElementById('add-dimensions').value,
                packageType: document.getElementById('add-package-type').value,
                locationType: document.getElementById('add-location-type').value,
                supplier: document.getElementById('add-supplier').value,
                quantity: document.getElementById('add-quantity').value,
                priceperitem: document.getElementById('add-price-per-item').value,
                totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
            };
            break;
        case 'UFL Cable':
            values = {
                type: document.getElementById('add-type').value,
                partNumber: document.getElementById('add-part-number').value,
                length: document.getElementById('add-length').value,
                packageType: document.getElementById('add-package-type').value,
                locationType: document.getElementById('add-location-type').value,
                supplier: document.getElementById('add-supplier').value,
                quantity: document.getElementById('add-quantity').value,
                priceperitem: document.getElementById('add-price-per-item').value,
                totalPrice: (document.getElementById('add-quantity').value * document.getElementById('add-price-per-item').value).toFixed(2) // Calculate total price
            };
            break;
        default:
            console.error('Unknown component type');
            alert("Unknown component type");
            return;
    }

    allFieldsFilled = Object.values(values).every(field => field !== "");

    if (!allFieldsFilled) {
        alert("Please fill in all fields");
        return;
    }

    const inventoryData = JSON.parse(localStorage.getItem('inventoryData')) || [];
    inventoryData.push({ componentType, ...values });
    localStorage.setItem('inventoryData', JSON.stringify(inventoryData));
    addRowToTable(componentType, values);
    alert(`${componentType} added successfully`);
}

function updateAttributes() {
    const componentType = document.getElementById('componentType').value;
    const attributeDropdowns = document.getElementById('attributeDropdowns');

    // Clear previous fields
    attributeDropdowns.innerHTML = '';

    let fieldsHtml = '';
    switch (componentType) {
        case 'Resistor':
            fieldsHtml = `
                <label for="add-type">Type:</label>
                <input type="text" id="add-type" placeholder="Enter type (e.g. R0805)">
                <label for="add-resistance-value">Resistance Value:</label>
                <input type="number" id="add-resistance-value" placeholder="Enter in Ω (e.g. 1.2Ω)">
                <label for="add-power-rating">Power Rating:</label>
                <input type="number" id="add-power-rating" placeholder="Enter in W (e.g. 0.25W)">
                <label for="add-voltage-rating">Voltage Rating:</label>
                <input type="number" id="add-voltage-rating" placeholder="Enter in V (e.g. 50V)">
                <label for="add-temperature-coefficient">Temperature Coefficient:</label>
                <input type="number" id="add-temperature-coefficient" placeholder="Enter in ppm/°C (e.g. 100ppm/°C)">
                <label for="add-tolerance">Tolerance:</label>
                <input type="number" id="add-tolerance" placeholder="Enter in % (e.g. ±1%)">
                <label for="add-package-type">Package Type:</label>
                <input type="text" id="add-package-type" placeholder="Enter package type (e.g. SMD)">
                <label for="add-label-type">Label Type:</label>
                <input type="text" id="add-label-type" placeholder="Enter label type (e.g. R1, R2, R3)">
                <label for="add-location-type">Location Stored:</label>
                <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
                <label for="add-supplier">Supplier:</label>
                <input type="text" id="add-supplier" placeholder="Enter supplier details">
                <label for="add-quantity">Quantity:</label>
                <input type="number" id="add-quantity" placeholder="Enter quantity">
                <label for="add-price-per-item">Price per item:</label>
                <input type="number" id="add-price-per-item" placeholder="Enter price per item">
                
            `;
            break;
        case 'Capacitor':
            fieldsHtml = `
                <label for="add-capacitance-value">Capacitance Value:</label>
                <input type="number" id="add-capacitance-value" placeholder="Enter in µF (e.g. 1.2µF)">
                <label for="add-voltage-rating">Voltage Rating:</label>
                <input type="number" id="add-voltage-rating" placeholder="Enter in V (e.g. 25V)">
                <label for="add-tolerance">Tolerance:</label>
                <input type="number" id="add-tolerance" placeholder="Enter in % (e.g. ±10%)">
                <label for="add-dielectric-type">Dielectric Type:</label>
                <input type="number" id="add-dielectric-type" placeholder="Enter dielectric type (e.g. X5R, X7R)">
                <label for="add-package-type">Package Type:</label>
                <input type="text" id="add-package-type" placeholder="Enter package type (e.g. SMD)">
                <label for="add-label-type">Label Type:</label>
                <input type="text" id="add-label-type" placeholder="Enter label type (e.g. C1, C2, C3)">
                <label for="add-location-type">Location Stored:</label>
                <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
                <label for="add-supplier">Supplier:</label>
                <input type="text" id="add-supplier" placeholder="Enter supplier details">
                <label for="add-quantity">Quantity:</label>
                <input type="number" id="add-quantity" placeholder="Enter quantity">
                <label for="add-price-per-item">Price per item:</label>
                <input type="number" id="add-price-per-item" placeholder="Enter price per item">
            `;
            break;
        case 'Inductor':
            fieldsHtml = `
                <label for="add-type">Type:</label>
                <input type="text" id="add-type" placeholder="Enter type">
                <label for="add-inductance-value">Inductance Value:</label>
                <input type="number" id="add-inductance-value" placeholder="Enter in µH (e.g. 10µH)">
                <label for="add-current-rating">Current Rating:</label>
                <input type="number" id="add-current-rating" placeholder="Enter in A (e.g. 1.5A)">
                <label for="add-package-type">Package Type:</label>
                <input type="text" id="add-package-type" placeholder="Enter package type (e.g. SMD)">
                <label for="add-location-type">Location Stored:</label>
                <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
                <label for="add-supplier">Supplier:</label>
                <input type="text" id="add-supplier" placeholder="Enter supplier details">
                <label for="add-quantity">Quantity:</label>
                <input type="number" id="add-quantity" placeholder="Enter quantity">
                <label for="add-price-per-item">Price per item:</label>
                <input type="number" id="add-price-per-item" placeholder="Enter price per item">
            `;
            break;
        case 'Diode':
            fieldsHtml = `
                <label for="add-type">Diode value:</label>
                <input type="text" id="add-type" placeholder="Enter diode value (e.g. SMD)">
                <label for="add-part-number">Part Number:</label>
                <input type="text" id="add-part-number" placeholder="Enter part number (e.g. D1 or D2.. or D1,D2  use comma seperated values)">
                <label for="add-package-type">Package Type:</label>
                <input type="text" id="add-package-type" placeholder="Enter package type (e.g. SMD)">
                <label for="add-location-type">Location Stored:</label>
                <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
                <label for="add-supplier">Supplier:</label>
                <input type="text" id="add-supplier" placeholder="Enter supplier details">
                <label for="add-quantity">Quantity:</label>
                <input type="number" id="add-quantity" placeholder="Enter quantity">
                <label for="add-price-per-item">Price per item:</label>
                <input type="number" id="add-price-per-item" placeholder="Enter price per item">
            `;
            break;
        case 'Transistor':
            fieldsHtml = `
                <label for="add-value">Value:</label>
                <input type="text" id="add-value" placeholder="Enter value (e.g. MMBT3904)">
                <label for="add-label">Label:</label>
                <input type="text" id="add-label" placeholder="Enter label (e.g. Q1,Q2,Q4,Q5)">
                <label for="add-package-type">Package Type:</label>
                <input type="text" id="add-package-type" placeholder="Enter package type (e.g. SMD- SOT-23)">
                <label for="add-location-type">Location Stored:</label>
                <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
                <label for="add-supplier">Supplier:</label>
                <input type="text" id="add-supplier" placeholder="Enter supplier details">
                <label for="add-quantity">Quantity:</label>
                <input type="number" id="add-quantity" placeholder="Enter quantity">
                <label for="add-price-per-item">Price per item:</label>
                <input type="number" id="add-price-per-item" placeholder="Enter price per item">
            `;
            break;
        case 'Mosfet':
            fieldsHtml = `
                <label for="add-value">Value:</label>
                <input type="text" id="add-value" placeholder="Enter value (e.g. SI2312)">
                <label for="add-label">Label:</label>
                <input type="text" id="add-label" placeholder="Enter label (e.g. Q1,Q2,Q4,Q5)">
                <label for="add-package-type">Package Type:</label>
                <input type="text" id="add-package-type" placeholder="Enter package type (e.g. SMD- SOT-23)">
                <label for="add-location-type">Location Stored:</label>
                <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
                <label for="add-supplier">Supplier:</label>
                <input type="text" id="add-supplier" placeholder="Enter supplier details">
                <label for="add-quantity">Quantity:</label>
                <input type="number" id="add-quantity" placeholder="Enter quantity">
                <label for="add-price-per-item">Price per item:</label>
                <input type="number" id="add-price-per-item" placeholder="Enter price per item">
            `;
            break;
        case 'UFL':
            fieldsHtml = `
                <label for="add-value">Value:</label>
                <input type="text" id="add-value" placeholder="Enter Value (eg.BM8563ESA)">
                <label for="add-part-number">Part Number:</label>
                <input type="text" id="add-part-number" placeholder="Enter part number">
                <label for="add-package-type">Package Type:</label>
                <input type="text" id="add-package-type" placeholder="Enter package type (eg. SMD - SOP-8)">
                <label for="add-location-type">Location Stored:</label>
                <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
                <label for="add-supplier">Supplier:</label>
                <input type="text" id="add-supplier" placeholder="Enter supplier details">
                <label for="add-quantity">Quantity:</label>
                <input type="number" id="add-quantity" placeholder="Enter quantity">
                <label for="add-price-per-item">Price per item:</label>
                <input type="number" id="add-price-per-item" placeholder="Enter price per item">
            `;
            break;
        case 'Crystal':
            fieldsHtml = `
                <label for="add-type">Type:</label>
                <input type="text" id="add-type" placeholder="Enter type">
                <label for="add-frequency">Frequency:</label>
                <input type="number" id="add-frequency" placeholder="Enter frequency (Enter in kHz)">
                <label for="add-tolerance">Tolerance:</label>
                <input type="text" id="add-tolerance" placeholder="Enter tolerance (eg. Enter in ±5%)">
                <label for="add-package-type">Package Type:</label>
                <input type="text" id="add-package-type" placeholder="Enter package type">
                <label for="add-location-type">Location Stored:</label>
                <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
                <label for="add-supplier">Supplier:</label>
                <input type="text" id="add-supplier" placeholder="Enter supplier details">
                <label for="add-quantity">Quantity:</label>
                <input type="number" id="add-quantity" placeholder="Enter quantity">
                <label for="add-price-per-item">Price per item:</label>
                <input type="number" id="add-price-per-item" placeholder="Enter price per item">
            `;
            break;
        case 'Regulator':
            fieldsHtml = `
                <label for="add-value">Value:</label>
                <input type="text" id="add-value" placeholder="Enter value (e.g. MMBT3904)">
                <label for="add-label">Label:</label>
                <input type="text" id="add-label" placeholder="Enter label (e.g. Q1,Q2,Q4,Q5)">
                <label for="add-package-type">Package Type:</label>
                <input type="text" id="add-package-type" placeholder="Enter package type (e.g. SMD- SOT-23)">
                <label for="add-location-type">Location Stored:</label>
                <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
                <label for="add-supplier">Supplier:</label>
                <input type="text" id="add-supplier" placeholder="Enter supplier details">
                <label for="add-quantity">Quantity:</label>
                <input type="number" id="add-quantity" placeholder="Enter quantity">
                <label for="add-price-per-item">Price per item:</label>
                <input type="number" id="add-price-per-item" placeholder="Enter price per item">
            `;
            break;
        case 'Modem':
            fieldsHtml = `
                <label for="add-value">Value:</label>
                <input type="text" id="add-value" placeholder="Enter Value (eg.BM8563ESA)">
                <label for="add-part-number">Part Number:</label>
                <input type="text" id="add-part-number" placeholder="Enter part number">
                <label for="add-package-type">Package Type:</label>
                <input type="text" id="add-package-type" placeholder="Enter package type (eg. SMD - SOP-8)">
                <label for="add-location-type">Location Stored:</label>
                <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
                <label for="add-supplier">Supplier:</label>
                <input type="text" id="add-supplier" placeholder="Enter supplier details">
                <label for="add-quantity">Quantity:</label>
                <input type="number" id="add-quantity" placeholder="Enter quantity">
                <label for="add-price-per-item">Price per item:</label>
                <input type="number" id="add-price-per-item" placeholder="Enter price per item">
            `;
            break;
        case 'pressureSensor': //changed
            fieldsHtml = `
                <label for="add-value">Value:</label>
                <input type="text" id="add-value" placeholder="Enter Value (eg.BM8563ESA)">
                <label for="add-part-number">Part Number:</label>
                <input type="text" id="add-part-number" placeholder="Enter part number">
                <label for="add-package-type">Package Type:</label>
                <input type="text" id="add-package-type" placeholder="Enter package type (eg. SMD - SOP-8)">
                <label for="add-location-type">Location Stored:</label>
                <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
                <label for="add-supplier">Supplier:</label>
                <input type="text" id="add-supplier" placeholder="Enter supplier details">
                <label for="add-quantity">Quantity:</label>
                <input type="number" id="add-quantity" placeholder="Enter quantity">
                <label for="add-price-per-item">Price per item:</label>
                <input type="number" id="add-price-per-item" placeholder="Enter price per item">
            `;
            break;
        case 'RTC':
            fieldsHtml = `
                <label for="add-value">Value:</label>
                <input type="text" id="add-value" placeholder="Enter Value (eg.BM8563ESA)">
                <label for="add-part-number">Part Number:</label>
                <input type="text" id="add-part-number" placeholder="Enter part number">
                <label for="add-package-type">Package Type:</label>
                <input type="text" id="add-package-type" placeholder="Enter package type (eg. SMD - SOP-8)">
                <label for="add-location-type">Location Stored:</label>
                <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
                <label for="add-supplier">Supplier:</label>
                <input type="text" id="add-supplier" placeholder="Enter supplier details">
                <label for="add-quantity">Quantity:</label>
                <input type="number" id="add-quantity" placeholder="Enter quantity">
                <label for="add-price-per-item">Price per item:</label>
                <input type="number" id="add-price-per-item" placeholder="Enter price per item">
            `;
            break;
        case 'ESP':
            fieldsHtml = `
                <label for="add-value">Value:</label>
                <input type="text" id="add-value" placeholder="Enter Value (eg.BM8563ESA)">
                <label for="add-part-number">Part Number:</label>
                <input type="text" id="add-part-number" placeholder="Enter part number">
                <label for="add-package-type">Package Type:</label>
                <input type="text" id="add-package-type" placeholder="Enter package type (eg. SMD - SOP-8)">
                <label for="add-location-type">Location Stored:</label>
                <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
                <label for="add-supplier">Supplier:</label>
                <input type="text" id="add-supplier" placeholder="Enter supplier details">
                <label for="add-quantity">Quantity:</label>
                <input type="number" id="add-quantity" placeholder="Enter quantity">
                <label for="add-price-per-item">Price per item:</label>
                <input type="number" id="add-price-per-item" placeholder="Enter price per item">
            `;
            break;
        case 'RS485':
            fieldsHtml = `
                <label for="add-value">Value:</label>
                <input type="text" id="add-value" placeholder="Enter Value (eg.BM8563ESA)">
                <label for="add-part-number">Part Number:</label>
                <input type="text" id="add-part-number" placeholder="Enter part number">
                <label for="add-package-type">Package Type:</label>
                <input type="text" id="add-package-type" placeholder="Enter package type (eg. SMD - SOP-8)">
                <label for="add-location-type">Location Stored:</label>
                <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
                <label for="add-supplier">Supplier:</label>
                <input type="text" id="add-supplier" placeholder="Enter supplier details">
                <label for="add-quantity">Quantity:</label>
                <input type="number" id="add-quantity" placeholder="Enter quantity">
                <label for="add-price-per-item">Price per item:</label>
                <input type="number" id="add-price-per-item" placeholder="Enter price per item">
            `;
            break;
        case 'Sim Slot':
            fieldsHtml = `
                <label for="add-value">Value:</label>
                <input type="text" id="add-value" placeholder="Enter Value (eg.BM8563ESA)">
                <label for="add-part-number">Part Number:</label>
                <input type="text" id="add-part-number" placeholder="Enter part number">
                <label for="add-package-type">Package Type:</label>
                <input type="text" id="add-package-type" placeholder="Enter package type (eg. SMD - SOP-8)">
                <label for="add-location-type">Location Stored:</label>
                <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
                <label for="add-supplier">Supplier:</label>
                <input type="text" id="add-supplier" placeholder="Enter supplier details">
                <label for="add-quantity">Quantity:</label>
                <input type="number" id="add-quantity" placeholder="Enter quantity">
                <label for="add-price-per-item">Price per item:</label>
                <input type="number" id="add-price-per-item" placeholder="Enter price per item">
            `;
            break;
        case 'Connector':
            fieldsHtml = `
                <label for="add-type">Type:</label>
                <input type="text" id="add-type" placeholder="Enter type">
                <label for="add-part-number">Part Number:</label>
                <input type="text" id="add-part-number" placeholder="Enter part number">
                <label for="add-pin-count">Pin Count:</label>
                <input type="text" id="add-pin-count" placeholder="Enter pin count">
                <label for="add-package-type">Package Type:</label>
                <input type="text" id="add-package-type" placeholder="Enter package type">
                <label for="add-location-type">Location Stored:</label>
                <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
                <label for="add-supplier">Supplier:</label>
                <input type="text" id="add-supplier" placeholder="Enter supplier details">
                <label for="add-quantity">Quantity:</label>
                <input type="number" id="add-quantity" placeholder="Enter quantity">
                <label for="add-price-per-item">Price per item:</label>
                <input type="number" id="add-price-per-item" placeholder="Enter price per item">
            `;
            break;
        case 'Enclosure':
            fieldsHtml = `
                <label for="add-type">Type:</label>
                <input type="text" id="add-type" placeholder="Enter type">
                <label for="add-part-number">Part Number:</label>
                <input type="text" id="add-part-number" placeholder="Enter part number">
                <label for="add-dimensions">Dimensions:</label>
                <input type="text" id="add-dimensions" placeholder="Enter dimensions">
                <label for="add-package-type">Package Type:</label>
                <input type="text" id="add-package-type" placeholder="Enter package type">
                <label for="add-location-type">Location Stored:</label>
                <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
                <label for="add-supplier">Supplier:</label>
                <input type="text" id="add-supplier" placeholder="Enter supplier details">
                <label for="add-quantity">Quantity:</label>
                <input type="number" id="add-quantity" placeholder="Enter quantity">
                <label for="add-price-per-item">Price per item:</label>
                <input type="number" id="add-price-per-item" placeholder="Enter price per item">
            `;
            break;
        case 'UFL Cable':
            fieldsHtml = `
                <label for="add-type">Type:</label>
                <input type="text" id="add-type" placeholder="Enter type">
                <label for="add-part-number">Part Number:</label>
                <input type="text" id="add-part-number" placeholder="Enter part number">
                <label for="add-length">Length:</label>
                <input type="text" id="add-length" placeholder="Enter length">
                <label for="add-package-type">Package Type:</label>
                <input type="text" id="add-package-type" placeholder="Enter package type">
                <label for="add-location-type">Location Stored:</label>
                <input type="text" id="add-location-type" placeholder="Enter location stored (e.g. A1, A2, A3)">
                <label for="add-supplier">Supplier:</label>
                <input type="text" id="add-supplier" placeholder="Enter supplier details">
                <label for="add-quantity">Quantity:</label>
                <input type="number" id="add-quantity" placeholder="Enter quantity">
                <label for="add-price-per-item">Price per item:</label>
                <input type="number" id="add-price-per-item" placeholder="Enter price per item">
            `;
            break;
        default:
            fieldsHtml = '<p>Please select a valid component type.</p>';
    }

    attributeDropdowns.innerHTML = fieldsHtml;
}

function populateSearchFields() {
    const component = document.getElementById('component-type').value;
    const searchFields = document.getElementById('component-search-fields');
    searchFields.innerHTML = '';

    if (component && componentAttributes[component]) {
        componentAttributes[component].forEach(field => {
            const label = document.createElement('label');
            label.textContent = `${field.name}:`;
            const input = document.createElement('input');
            input.type = field.type;
            input.placeholder = field.placeholder;
            input.id = `search-${field.name.toLowerCase().replace(/ /g, '-')}`;

            searchFields.appendChild(label);
            searchFields.appendChild(input);
            searchFields.appendChild(document.createElement('br'));
        });
    }
}

function searchComponentTable() {
    const component = document.getElementById('component-type').value;
    const attributes = componentAttributes[component];
    const values = {};

    attributes.forEach(field => {
        values[field.name] = document.getElementById(`search-${field.name.toLowerCase().replace(/ /g, '-')}`).value.toLowerCase();
    });

    const tableId = `${component.toLowerCase()}Table`;
    const table = document.getElementById(tableId);
    const rows = table.getElementsByTagName('tr');
    let found = false;
    let results = [];

    for (let i = 1; i < rows.length; i++) { // Start from 1 to skip header row
        const cells = rows[i].getElementsByTagName('td');
        let match = true;
        attributes.forEach((field, index) => {
            if (values[field.name] && !cells[index].innerText.toLowerCase().includes(values[field.name])) {
                match = false;
            }
        });
        if (match) {
            rows[i].classList.add('highlight');
            results.push(rows[i].innerText);
            found = true;
        } else {
            rows[i].classList.remove('highlight');
        }
    }

    displayResults(found, results);
}

function displayResults(found, results) {
    const resultCard = document.getElementById('result-card');
    const resultContent = document.getElementById('result-content');
    resultContent.innerHTML = ''; // Clear previous results

    if (found) {
        results.forEach(result => {
            const p = document.createElement('p');
            p.textContent = result;
            resultContent.appendChild(p);
        });
    } else {
        const p = document.createElement('p');
        p.textContent = 'No matching components found.';
        resultContent.appendChild(p);
    }

    resultCard.style.display = 'block';
}

function populateSpecFields() {
    const component = document.getElementById('spec-component-type').value;
    const searchFields = document.getElementById('spec-search-fields');
    searchFields.innerHTML = '';

    if (component && componentAttributes[component]) {
        componentAttributes[component].forEach(field => {
            const label = document.createElement('label');
            label.textContent = `${field.name}:`;
            const input = document.createElement('input');
            input.type = field.type;
            input.placeholder = field.placeholder;
            input.id = `spec-${field.name.toLowerCase().replace(/ /g, '-')}`;

            searchFields.appendChild(label);
            searchFields.appendChild(input);
            searchFields.appendChild(document.createElement('br'));
        });
    }
}

function searchSpecificationTable() {
    const componentType = document.getElementById('spec-component-type').value;
    if (!componentType) {
        alert("Please select a component type");
        return;
    }

    const searchFields = document.querySelectorAll(`#specification-specific-search-form input`);
    const searchValues = {};
    searchFields.forEach(field => {
        if (field.value) {
            searchValues[field.id.split('-')[1]] = field.value.toLowerCase();
        }
    });

    let tableId = `${componentType.toLowerCase().replace(' ', '')}Table`;
    let table = document.getElementById(tableId);

    if (!table) {
        alert("Error: Table not found.");
        return;
    }

    let rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    let totalQuantity = 0;

    for (let i = 0; i < rows.length; i++) {
        let cells = rows[i].getElementsByTagName('td');
        let match = true;

        for (let key in searchValues) {
            let cellValue = cells[Object.keys(searchValues).indexOf(key)].textContent.toLowerCase();
            if (cellValue !== searchValues[key]) {
                match = false;
                break;
            }
        }

        if (match) {
            totalQuantity += parseInt(cells[cells.length - 2].textContent);  // Assuming quantity is the second last column
        }
    }

    displaySearchResult(totalQuantity);
}


function displaySearchResult(totalQuantity) {
    const resultCard = document.getElementById('result-card');
    const resultContent = document.getElementById('result-content');

    resultContent.innerHTML = `
        <p>Total matching components: ${totalQuantity}</p>
    `;

    resultCard.style.display = 'block';
}

function toggleForm() {
    const action = document.getElementById('action').value;
    const forms = document.querySelectorAll('.form');
    forms.forEach(form => form.style.display = 'none');

    if (action) {
        document.getElementById(`${action}-form`).style.display = 'block';
    }
}

function saveToLocalStorage(componentType, values) {
    let data = JSON.parse(localStorage.getItem('stockData')) || {};
    if (!data[componentType]) {
        data[componentType] = [];
    }
    data[componentType].push(values);
    localStorage.setItem('stockData', JSON.stringify(data));
}

document.addEventListener('DOMContentLoaded', function() {
    loadFromLocalStorage();
});

function loadFromLocalStorage() {
    let data = JSON.parse(localStorage.getItem('stockData'));
    if (data) {
        for (let componentType in data) {
            let tableId = `${componentType.toLowerCase().replace(' ', '')}Table`;
            let tableBody = document.querySelector(`#${tableId} tbody`);
            let tableSectionId = `${componentType.toLowerCase().replace(' ', '')}TableSection`;
            let tableSection = document.getElementById(tableSectionId);

            if (tableBody && tableSection) {
                data[componentType].forEach(item => {
                    let newRow = document.createElement('tr');
                    newRow.innerHTML = Object.values(item).map(value => `<td>${value}</td>`).join('');
                    tableBody.appendChild(newRow);
                });
                tableSection.style.display = 'block';
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const savedProducts = localStorage.getItem('viewStockData');
    if (savedProducts) {
        const products = JSON.parse(savedProducts);
        products.forEach(product => addProductToTable(product));
    }
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('action').addEventListener('change', toggleForm);
    document.getElementById('componentType').addEventListener('change', updateAttributes);
});



