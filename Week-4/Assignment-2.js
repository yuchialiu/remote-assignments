const pageList = document.getElementById("list");

function ajax(src, callback) {
  // your code here
  const xhr = new XMLHttpRequest();
  xhr.open("GET", src);
  xhr.onload = () => {
    if (xhr.status === 200) {
      let data = JSON.parse(xhr.responseText);
      return callback(data);
    }
  };
  xhr.send();
}

function render(data) {
  // your code here
  // document.createElement() and appendChild() methods are preferred.
  data.map((products) => {
    const section = document.createElement("section");
    pageList.appendChild(section);
    section.innerHTML = `
    <h2>${products.name}</h2>
    <p>Price: $ ${products.price}</p>
    <p>Description: ${products.description}</p>
    `;
  });
}

ajax(
  "https://appworks-school.github.io/Remote-Aassigiment-Data/products",
  function (response) {
    render(response);
  }
);
/* you should get product information in JSON format and render
    data in the page */
