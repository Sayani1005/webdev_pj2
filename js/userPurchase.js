//code
let searchString;
let useremailid;
    
    function searchWithField(){
    let field=document.getElementById("searchField");
    searchString=field.value;
    }


document.addEventListener("click", function() {
    let bookStoreHTML = "";
    let userpurchase = [];
    let j=0;
    let t=2;
    for (let i=0;i< users.length; i++){
      if(searchString===users[i].name){
        userpurchase=users[i].bookIds;
        useremailid=users[i].email;
        t=1;
        // break;
      }
    //   if(i==users.length-1&&t!=1){
    //       t=3;
    //   }
    }
    if(searchString==""){
        bookStoreHTML +="No record!";
    }
    // if(t==3){
    //     bookStoreHTML +="No record!";
    // }

    if(t==1){
        bookStoreHTML +='<div><strong>Name : </strong>'+ searchString.toUpperCase()+'</div>';
        bookStoreHTML +='<div><strong>Email : </strong>'+ useremailid +'</div>';
    }

  for (let i = 0; i < userpurchase.length; i++) {
      bookStoreHTML += '<table><tbody><tr><td><div><img src="' + bookStore[userpurchase[i]].thumbnailUrl +
      '" alt="" onerror="this.src=\'/images/noImage.jpg\'""/></div></td><td><table><tbody><tr><td><strong>Title : </strong></td><td>' + bookStore[userpurchase[i]].title +
      '</td></tr><tr><td><strong>pageCount : </strong></td><td>' + bookStore[userpurchase[i]].pageCount +
      '</td></tr><tr><td><strong>publishedDate: </strong></td><td>' + 
      (bookStore[userpurchase[i]].publishedDate ? bookStore[userpurchase[i]].publishedDate.$date : "") +
      '</td></tr><tr><td valign="top"><strong>Description : </strong></td><td>' + bookStore[userpurchase[i]].shortDescription +
      '</td></tr><tr><td><strong>Authors : </strong></td><td>' + bookStore[userpurchase[i]].authors +
      '</td></tr><tr><td><strong>Categories : </strong></td><td>' + bookStore[userpurchase[i]].categories +
      '</td></tr></tbody></table></td></tr></tbody></table>';
    }
    document.getElementById("book-store2").innerHTML = bookStoreHTML;
    });
