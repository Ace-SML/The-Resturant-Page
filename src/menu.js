export default function loadMenu() {
  const content = document.getElementById('content');
  const menuDiv = document.createElement('div');
  menuDiv.innerHTML = `
    <h2>Menu</h2>
    <ul>
  <li>Jollof Rice</li>
  <li>Amala & Ewedu</li>
  <li>Suya (Spicy Grilled Meat)</li>
  <li>Pounded Yam & Egusi Soup</li>
  <li>Fried Plantain (Dodo)</li>
  <li>Grilled Chicken</li>
  <li>French Fries</li>
  <li>Chicken Wings (Spicy or BBQ)</li>
  <li>Moi Moi (Steamed Bean Cake)</li>
  <li>Beef Pepper Soup</li>
  <li>Akara (Bean Fritters)</li>
  <li>Fish Fingers</li>
  <li>Burger (Naija Style or Classic)</li>
  <li>Ofada Rice & Ayamase Sauce</li>
  <li>Coleslaw Salad</li>
</ul>

  `;
  content.appendChild(menuDiv);
}
