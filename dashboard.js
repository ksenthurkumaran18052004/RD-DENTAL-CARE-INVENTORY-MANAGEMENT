// document.addEventListener('DOMContentLoaded', function() {
//     const inventoryData = JSON.parse(localStorage.getItem('inventoryData')) || [];
//     const orderData = JSON.parse(localStorage.getItem('orderData')) || [];

//     displayMetrics(inventoryData, orderData);
//     displayInventoryStatusChart(inventoryData);
//     displayMonthlyStockChangesChart(inventoryData);
//     displayComponentUsageChart(inventoryData);
//     displayMostUsedComponents(inventoryData);

//     document.getElementById('generatePDF').addEventListener('click', generatePDFReport);
//     document.getElementById('generateExcel').addEventListener('click', generateExcelReport);
// });

// function displayMetrics(inventoryData, orderData) {
//     const totalInventoryItems = inventoryData.reduce((total, item) => total + Number(item.quantity), 0);
//     const totalStockValue = inventoryData.reduce((total, item) => total + (Number(item.priceperitem) * Number(item.quantity)), 0);

//     document.getElementById('totalInventory').textContent = totalInventoryItems;
//     document.getElementById('totalStockValue').textContent = `₹${totalStockValue.toFixed(2)}`;
//     document.getElementById('ordersProcessed').textContent = orderData.length;
// }

// function displayInventoryStatusChart(inventoryData) {
//     const ctx = document.getElementById('inventoryStatusChart').getContext('2d');
//     const labels = inventoryData.map(item => item.name);
//     const data = inventoryData.map(item => Number(item.quantity));

//     new Chart(ctx, {
//         type: 'bar',
//         data: {
//             labels: labels,
//             datasets: [{
//                 label: 'Quantity',
//                 data: data,
//                 backgroundColor: 'rgba(54, 162, 235, 0.2)',
//                 borderColor: 'rgba(54, 162, 235, 1)',
//                 borderWidth: 1
//             }]
//         },
//         options: {
//             responsive: true,
//             scales: {
//                 y: {
//                     beginAtZero: true
//                 }
//             }
//         }
//     });
// }

// function displayMonthlyStockChangesChart(inventoryData) {
//     const ctx = document.getElementById('monthlyStockChangesChart').getContext('2d');
//     const monthlyChanges = calculateMonthlyStockChanges(inventoryData);

//     new Chart(ctx, {
//         type: 'line',
//         data: {
//             labels: Object.keys(monthlyChanges),
//             datasets: [{
//                 label: 'Stock Changes',
//                 data: Object.values(monthlyChanges),
//                 borderColor: 'rgba(75, 192, 192, 1)',
//                 borderWidth: 2,
//                 fill: false
//             }]
//         },
//         options: {
//             responsive: true,
//             scales: {
//                 y: {
//                     beginAtZero: true
//                 }
//             }
//         }
//     });
// }

// function calculateMonthlyStockChanges(inventoryData) {
//     const monthlyChanges = {};
//     inventoryData.forEach(item => {
//         const month = new Date(item.date).getMonth() + 1; // Assuming item.date is a date
//         if (monthlyChanges[month]) {
//             monthlyChanges[month] += Number(item.quantity);
//         } else {
//             monthlyChanges[month] = Number(item.quantity);
//         }
//     });
//     return monthlyChanges;
// }

// function displayComponentUsageChart(inventoryData) {
//     const ctx = document.getElementById('componentUsageChart').getContext('2d');
//     const componentUsage = calculateComponentUsage(inventoryData);
//     const totalQuantity = Object.values(componentUsage).reduce((sum, value) => sum + value, 0);

//     const labels = Object.keys(componentUsage);
//     const data = Object.values(componentUsage).map(value => ((value / totalQuantity) * 100).toFixed(2));

//     new Chart(ctx, {
//         type: 'pie',
//         data: {
//             labels: labels,
//             datasets: [{
//                 label: 'Component Usage (%)',
//                 data: data,
//                 backgroundColor: generateRandomColors(labels.length)
//             }]
//         },
//         options: {
//             responsive: true,
//             plugins: {
//                 tooltip: {
//                     callbacks: {
//                         label: function(context) {
//                             const label = context.label || '';
//                             const value = context.raw || 0;
//                             return `${label}: ${value}%`;
//                         }
//                     }
//                 }
//             }
//         }
//     });
// }

// function calculateComponentUsage(inventoryData) {
//     const componentUsage = {};
//     inventoryData.forEach(item => {
//         const componentType = item.componentType; // Assuming item.componentType is the component type
//         if (componentUsage[componentType]) {
//             componentUsage[componentType] += Number(item.quantity);
//         } else {
//             componentUsage[componentType] = Number(item.quantity);
//         }
//     });
//     return componentUsage;
// }

// function generateRandomColors(count) {
//     const colors = [];
//     for (let i = 0; i < count; i++) {
//         colors.push(`rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.6)`);
//     }
//     return colors;
// }

// function displayMostUsedComponents(inventoryData) {
//     const mostUsed = calculateMostUsedComponents(inventoryData);
//     const mostUsedComponentsDiv = document.getElementById('mostUsedComponents');
//     mostUsed.forEach(([component, count]) => {
//         const div = document.createElement('div');
//         div.textContent = `${component}: ${count}`;
//         mostUsedComponentsDiv.appendChild(div);
//     });
// }

// function calculateMostUsedComponents(inventoryData) {
//     const componentUsage = calculateComponentUsage(inventoryData);
//     return Object.entries(componentUsage).sort((a, b) => b[1] - a[1]).slice(0, 5);
// }

// function generatePDFReport() {
//     const { jsPDF } = window.jspdf;
//     const doc = new jsPDF();

//     doc.text('Inventory Report', 10, 10);
//     // Add more content to the PDF
//     doc.save('inventory_report.pdf');
// }

// function generateExcelReport() {
//     const wb = XLSX.utils.book_new();
//     const ws = XLSX.utils.json_to_sheet(inventoryData); // Assume inventoryData is your data
//     XLSX.utils.book_append_sheet(wb, ws, 'Inventory');
//     XLSX.writeFile(wb, 'inventory_report.xlsx');
// }






















document.addEventListener('DOMContentLoaded', function() {
    const inventoryData = JSON.parse(localStorage.getItem('inventoryData')) || [];
    const orderData = JSON.parse(localStorage.getItem('orderData')) || [];

    displayMetrics(inventoryData, orderData);
    displayInventoryStatusChart(inventoryData);
    displayMonthlyStockChangesChart(inventoryData);
    displayComponentUsageChart(inventoryData);
    displayMostUsedComponents(inventoryData);

    document.getElementById('generatePDF').addEventListener('click', generatePDFReport);
    document.getElementById('generateExcel').addEventListener('click', generateExcelReport);
});

function displayMetrics(inventoryData, orderData) {
    const totalInventoryItems = inventoryData.reduce((total, item) => total + Number(item.quantity), 0);
    const totalStockValue = inventoryData.reduce((total, item) => total + (Number(item.priceperitem) * Number(item.quantity)), 0);

    document.getElementById('totalInventory').textContent = totalInventoryItems;
    document.getElementById('totalStockValue').textContent = `₹${totalStockValue.toFixed(2)}`;
    document.getElementById('ordersProcessed').textContent = orderData.length;
}

function displayInventoryStatusChart(inventoryData) {
    const ctx = document.getElementById('inventoryStatusChart').getContext('2d');
    const labels = inventoryData.map(item => item.name);
    const data = inventoryData.map(item => Number(item.quantity));

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Quantity',
                data: data,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function displayMonthlyStockChangesChart(inventoryData) {
    const ctx = document.getElementById('monthlyStockChangesChart').getContext('2d');
    const monthlyChanges = calculateMonthlyStockChanges(inventoryData);

    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: Object.keys(monthlyChanges),
            datasets: [{
                label: 'Stock Changes',
                data: Object.values(monthlyChanges),
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Simulate real-time data updates
    setInterval(() => {
        updateMonthlyStockChangesChart(chart);
    }, 5000); // Update every 5 seconds
}

function updateMonthlyStockChangesChart(chart) {
    const inventoryData = JSON.parse(localStorage.getItem('inventoryData')) || [];
    const monthlyChanges = calculateMonthlyStockChanges(inventoryData);

    chart.data.labels = Object.keys(monthlyChanges);
    chart.data.datasets[0].data = Object.values(monthlyChanges);
    chart.update();
}

function calculateMonthlyStockChanges(inventoryData) {
    const monthlyChanges = {};
    inventoryData.forEach(item => {
        const month = new Date(item.date).getMonth() + 1; // Assuming item.date is a date
        if (monthlyChanges[month]) {
            monthlyChanges[month] += Number(item.quantity);
        } else {
            monthlyChanges[month] = Number(item.quantity);
        }
    });
    return monthlyChanges;
}

function displayComponentUsageChart(inventoryData) {
    const ctx = document.getElementById('componentUsageChart').getContext('2d');
    const componentUsage = calculateComponentUsage(inventoryData);
    const totalQuantity = Object.values(componentUsage).reduce((sum, value) => sum + value, 0);

    const labels = Object.keys(componentUsage);
    const data = Object.values(componentUsage).map(value => ((value / totalQuantity) * 100).toFixed(2));

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                label: 'Component Usage (%)',
                data: data,
                backgroundColor: generateRandomColors(labels.length)
            }]
        },
        options: {
            responsive: true,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.raw || 0;
                            return `${label}: ${value}%`;
                        }
                    }
                }
            }
        }
    });
}

function calculateComponentUsage(inventoryData) {
    const componentUsage = {};
    inventoryData.forEach(item => {
        const componentType = item.componentType; // Assuming item.componentType is the component type
        if (componentUsage[componentType]) {
            componentUsage[componentType] += Number(item.quantity);
        } else {
            componentUsage[componentType] = Number(item.quantity);
        }
    });
    return componentUsage;
}

function generateRandomColors(count) {
    const colors = [];
    for (let i = 0; i < count; i++) {
        colors.push(`rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.6)`);
    }
    return colors;
}

function displayMostUsedComponents(inventoryData) {
    const mostUsed = calculateMostUsedComponents(inventoryData);
    const mostUsedComponentsDiv = document.getElementById('mostUsedComponents');
    mostUsed.forEach(([component, count]) => {
        const div = document.createElement('div');
        div.textContent = `${component}: ${count}`;
        mostUsedComponentsDiv.appendChild(div);
    });
}

function calculateMostUsedComponents(inventoryData) {
    const componentUsage = calculateComponentUsage(inventoryData);
    return Object.entries(componentUsage).sort((a, b) => b[1] - a[1]).slice(0, 5);
}

function generatePDFReport() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text('Inventory Report', 10, 10);
    // Add more content to the PDF
    doc.save('inventory_report.pdf');
}

function generateExcelReport() {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(inventoryData); // Assume inventoryData is your data
    XLSX.utils.book_append_sheet(wb, ws, 'Inventory');
    XLSX.writeFile(wb, 'inventory_report.xlsx');
}









