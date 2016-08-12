let myapp = document.getElementById('my-app');
myapp.parentNode.removeChild(myapp);
let myappcontainer = document.getElementById('my-app-container');
myappcontainer.appendChild(myapp);

let myherodetail = document.getElementById('my-hero-detail');
myherodetail.parentNode.removeChild(myherodetail);
let myherodetailcontainer = document.getElementById('my-hero-detail-container');
myherodetailcontainer.appendChild(myherodetail);

let myheroform = document.getElementById('my-hero-form');
myheroform.parentNode.removeChild(myheroform);
let myheroformcontainer = document.getElementById('my-hero-form-container');
myheroformcontainer.appendChild(myheroform);
