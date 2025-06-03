export default function loadHome() {
  const content = document.getElementById('content');
  const homeDiv = document.createElement('div');

  const headline = document.createElement('h1');
  headline.textContent = "Welcome to Chow Haven!";

const para1 = document.createElement('p');
  para1.textContent = "Welcome to the only spot where your cravings finally get respect. Sit back, relax, and prepare your taste buds for greatness.";

  const para2 = document.createElement('p');
  para2.textContent = "Tired of mid meals? Upgrade your taste. Taste the chow your soul’s been waiting for.";

  homeDiv.appendChild(headline);
  homeDiv.appendChild(para1);
  homeDiv.appendChild(para2);
  content.appendChild(homeDiv);
}
