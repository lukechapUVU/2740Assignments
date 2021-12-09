// what is the path to the JSON file?
const apiURL = "../12_Hotel/hoteldata.json"

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((myList) => {
    //Once it comes back, display it to the console.
    console.log(myList);
    
    for(i = 0; i < myList.length; i++) {

    let myImageTag = document.createElement('img');
    myImageTag.src = myList[i].photo;

    let myCaptionTag = document.createElement('figcaption');
    myCaptionTag.textContent = myList[i].name;

    let myFigureTag = document.createElement('figure');
    myFigureTag.appendChild(myImageTag);
    myFigureTag.appendChild(myCaptionTag);

    let carIconTag = document.createElement('ion-icon');
    carIconTag.className = 'ion-icon';
    carIconTag.name = 'car';
    let phoneIconTag = document.createElement('ion-icon');
    phoneIconTag.className = 'ion-icon';
    phoneIconTag.name = 'call';

    let addressTag = document.createElement('p');
    addressTag.textContent = myList[i].address;
    let phoneNumberTag = document.createElement('p');
    phoneNumberTag.textContent = myList[i].phone;

    let myDivTag1 = document.createElement('div');
    myDivTag1.className = 'hotel-icon';
    myDivTag1.appendChild(carIconTag);
    myDivTag1.appendChild(addressTag);
    let myDivTag2 = document.createElement('div');
    myDivTag2.className = 'hotel-icon';
    myDivTag2.appendChild(phoneIconTag);
    myDivTag2.appendChild(phoneNumberTag);

    let mySpanTag = document.createElement('span');
    mySpanTag.className = 'icon-card';
    mySpanTag.appendChild(myDivTag1);
    mySpanTag.appendChild(myDivTag2);

    let myParentDivTag = document.createElement('div');
    myParentDivTag.className = 'hotel-card';
    myParentDivTag.appendChild(myFigureTag);
    myParentDivTag.appendChild(mySpanTag);

    document.getElementById('hotelWrapper').appendChild(myParentDivTag);

    }
    
    
}); //end of "then" fat arrow function