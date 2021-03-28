let newProductDiv = document.getElementById("new-product");
document.addEventListener("DOMContentLoaded", () => {
  getBooth();
});

function getBooth() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://fakestoreapi.com/products", true);
  xhr.onload = function () {
    if (this.status == 200) {
      let results = JSON.parse(this.responseText);
        let html = "";
        let count = 0;
      console.log(results);
     results.forEach(element => {
        //     if (count==4) {
        //         return;
        //  }
         html += `<div class="col-md-3 col-sm-6
             mx-auto">
               
                <img src="${element.image}"  width ="100px" height = "100px" />
                
                <div class="price-wrapper">
                <p> ${element.price} USD</p>
                </div>
                </div>`;
        //  count++;
     });
        newProductDiv.innerHTML = html;
    }
  };
  xhr.send();
}
{/* <div class="col-md-3">
                    <img src="${url}" width ="100px" height = "100px">
                        <div class="title">${productList[index].title}</div>
                            <div class="price-wrapper">
                                <p class="price"> ${[productList[index].price]}USD</p>
                </div>
                </div> */}