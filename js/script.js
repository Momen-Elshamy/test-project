let rowData = document.getElementById("rowData");
let datacontainer = document.getElementById("cont");
var data = [];

window.onload = async function () {
   const data = await getData();
   if (!data) return console.log("no data");

   displaydata(data.data);
};

function displaydata(data) {
   console.log("data : ", data);

   const templatesContainer = document.getElementById("templatesContainer");
   data.map((item) => {
      const template = document.createElement("div");
      template.innerHTML = `
      <div>
      ${item.title}
      </div>
      `;
      templatesContainer.appendChild(template);
   });
}

async function getData() {
   const data = await fetch(
      `https://premast.com/wp-json/pmst/v1/products?orderby=date&order=DESC&category_slug=presentation&status=any`
   ).then((res) => {
      console.log("data : ", res);
      return res.json();
   });
   console.log("data : ", data);
   return data;
}

getdatacontainer();

async function getdatacontainer() {
   fetch(`https://premast.com/wp-json/pmst/v1/category?id=884`)
      .then((res) => res.json())
      .then((container) => {
         console.log(container);
         datacontainer.innerHTML = container.heading;
      })
      .catch((err) => console.log(err));
}
