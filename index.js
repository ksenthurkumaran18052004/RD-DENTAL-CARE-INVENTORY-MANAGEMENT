document.addEventListener('DOMContentLoaded', function() {
    loadRecentActivity();
    loadStatistics();

    // Initialize statistics data in local storage for demonstration
    if (!localStorage.getItem('statistics')) {
        const initialStatistics = [
            { label: 'Total Items', value: 200 },
            { label: 'Total Suppliers', value: 35 },
            { label: 'Recent Orders', value: 12 }
        ];
        localStorage.setItem('statistics', JSON.stringify(initialStatistics));
    }
});

function loadRecentActivity() {
    const recentActivity = [
        { action: 'Added new supplier: Supplier A', timestamp: '2024-06-01' },
        { action: 'Updated stock for Component X', timestamp: '2024-06-02' },
        { action: 'Created purchase order #12345', timestamp: '2024-06-03' }
    ];

    const recentActivityDiv = document.getElementById('recentActivity');
    recentActivity.forEach(activity => {
        const div = document.createElement('div');
        div.classList.add('activity-item');
        div.innerHTML = `<p>${activity.action}</p><small>${activity.timestamp}</small>`;
        recentActivityDiv.appendChild(div);
    });
}

function loadStatistics() {
    const statistics = JSON.parse(localStorage.getItem('statistics')) || [];

    if (statistics.length === 0) {
        statistics.push({ label: 'Total Items', value: 'No data' });
        statistics.push({ label: 'Total Suppliers', value: 'No data' });
        statistics.push({ label: 'Recent Orders', value: 'No data' });
    }

    const statisticsDiv = document.getElementById('statistics');
    statisticsDiv.innerHTML = '';
    statistics.forEach(stat => {
        const div = document.createElement('div');
        div.classList.add('statistic-item');
        div.innerHTML = `<h3>${stat.label}</h3><p>${stat.value}</p>`;
        statisticsDiv.appendChild(div);
    });
}
