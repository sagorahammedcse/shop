let headersList = {
    "Authorization": "Token eaaa90eb2c9efa5eed75d0bb8c51bb41c75686b3",
    "store": "1"
   }

  fetch('http://192.168.0.9:5500/api/store_product', {
  method: 'GET',

  headers: headersList,
})
  .then((response) => response.json())
  .then((json) => console.log(json));