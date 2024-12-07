const productList = document.querySelector(".productWrap");

function getProductList() {
  axios
    .get(
      `https://livejs-api.hexschool.io/api/livejs/v1/customer/${api_path}/products`
    )
    .then(function (resp) {
      productData = resp;
      console.log(productData.data.products);
    });
}
getProductList();
