export default function loadContact() {
  const content = document.getElementById('content');
  const contactDiv = document.createElement('div');
  contactDiv.innerHTML = `
    <h1>Contact Us</h1>
    <p>Phone: 0800-CHOW-YUM</p>
    <p>Address: 123 Lagos Street</p>
    <p>Chow everywhere you go!!!</p>
  `;
  content.appendChild(contactDiv);
}
