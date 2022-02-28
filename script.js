const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const redPara = document.createElement('p');
redPara.classList.add('redPara');
redPara.textContent = 'Hey I\'m red!';
redPara.style.color = 'red';

container.appendChild(redPara);

const blueHeader = document.createElement('h3');
blueHeader.classList.add('blueHeader');
blueHeader.textContent = 'I\'m a blue H3!';
blueHeader.style.color = 'blue';

container.appendChild(blueHeader);

const borderDiv = document.createElement('div');
borderDiv.classList.add('borderDiv');
borderDiv.style.border = '2px solid black';
borderDiv.style.background = 'pink';

const divHeader = document.createElement('h1');

divHeader.classList.add('divHeader');
divHeader.textContent = "I'm in the div!";
borderDiv.appendChild(divHeader);

const divPara = document.createElement('p');

divPara.classList.add('divPara');
divPara.textContent = "ME TOO!";
borderDiv.appendChild(divPara);

container.appendChild(borderDiv);