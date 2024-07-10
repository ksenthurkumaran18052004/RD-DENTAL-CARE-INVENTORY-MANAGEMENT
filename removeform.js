document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('action').addEventListener('change', function() {
        var action = this.value;
        document.getElementById('input-form').style.display = 'none';
        document.getElementById('remove-form').style.display = 'none';

        if (action === 'input') {
            document.getElementById('input-form').style.display = 'block';
        } else if (action === 'remove') {
            document.getElementById('remove-form').style.display = 'block';
        }
    });

    document.getElementById('addComponent').addEventListener('click', function() {
        var componentDiv = document.createElement('div');
        componentDiv.className = 'component';
        componentDiv.innerHTML = `
            <label for="type">Components type:</label>
            <select class="type" required>
                <option value="resistor">Resistor</option>
                <option value="capacitor">Capacitor</option>
                <option value="battery">Battery</option>
            </select>
            <br>
            <label for="id">Components id:</label>
            <input type="text" class="id" required>
            <br>
            <label for="quantity">Quantity:</label>
            <input type="number" class="quantity" required>
            <br>
        `;
        document.getElementById('components').appendChild(componentDiv);
    });

    document.getElementById('removeComponentForm').addEventListener('submit', function(event) {
        event.preventDefault();
        var productName = document.getElementById('productname').value;
        var productId = document.getElementById('newproductid').value;
        var components = [];
        document.querySelectorAll('.component').forEach(function(component) {
            var type = component.querySelector('.type').value;
            var id = component.querySelector('.id').value;
            var quantity = component.querySelector('.quantity').value;
            components.push({ type: type, id: id, quantity: quantity });
        });

        console.log({
            productName: productName,
            productId: productId,
            components: components
        });

    });
});
