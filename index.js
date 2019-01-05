var imagesURL;
fetch('https://sharma-api.herokuapp.com/users/getimages').then(response => {
  return response.json();
}).then(data => {
  // Work with JSON data here
  imagesURL = data;
  console.log(data);
  console.log(imagesURL);
  for(var i=0;i<imagesURL.items.length;i++){
    var oImg = document.createElement("div");
    oImg.setAttribute('class', "col-lg-4 col-sm-6 thumbnail");
    var Img = document.createElement("img");
    Img.setAttribute('src', 'https://sharma-api.herokuapp.com/uploaded/'+imagesURL.items[i]);
    Img.setAttribute('alt', 'pic');
    oImg.appendChild(Img);
    var ele = document.getElementsByClassName("row")[0];
    ele.appendChild(oImg);
    document.body.appendChild(ele);}
}).catch(err => {
  // Do something for an error here
});
