let rowData = document.getElementById("rowData");
let datacontainer = document.getElementById("cont");
var data = [];

getdata();
function getdata() {
  fetch(
    `https://premast.com/wp-json/pmst/v1/product?slug=medirest-first-aid-powerpoint-presentation-template`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      rowData.innerHTML = data.gallery;
      displaydata();
    })
    .catch((err) => console.log(err));
}

function displaydata() {
  var cols = "";
  for (i = 0; i < data.length; i++) {
    cols += ` 
    <div class = "col-md-3">
    <div class = "post" >
    <img class="w-100" src="${arr[i].medium}" alt="" />
    </div>
    </div>

    `;
  }
  document.getElementById("post").innerHTML = cols;
}

getdatacontainer();

function getdatacontainer() {
  fetch(`https://premast.com/wp-json/pmst/v1/category?id=884`)
    .then((res) => res.json())
    .then((container) => {
      console.log(container);
      datacontainer.innerHTML = container.heading;
    })
    .catch((err) => console.log(err));
}
