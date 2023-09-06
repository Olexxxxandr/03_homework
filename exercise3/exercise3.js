/* Напишіть скріпт, який за допомогою засобів DOM створить
для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів. */

/* <body>
  <main class="mainClass check item">         
     <div id="myDiv">
         <p>First paragraph</p>           
     </div>
 </main> 
</body> */

const body = document.body;

//version1();
version2();

function version1() {
    body.innerHTML = `
        <body>
            <main class="mainClass check item">         
                <div id="myDiv">
                    <p>First paragraph</p>           
                </div>
            </main> 
        </body>
    `;
}

function version2() {
    const main = document.createElement('main');
    main.className = "mainClass check item";

    const div = document.createElement('div');
    div.setAttribute('id', 'myDiv');
    main.appendChild(div);

    const paragraph = document.createElement('p');
    paragraph.textContent = "First paragraph";
    div.appendChild(paragraph);

    body.appendChild(main);
}