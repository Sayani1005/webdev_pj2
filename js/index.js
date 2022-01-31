document.addEventListener("DOMContentLoaded", function() {
    let bookStoreHTML = "";
for (let i = 0; i < bookStore.length; i++) {
    bookStoreHTML += '<table><tbody><tr><td><div><img src="' + bookStore[i].thumbnailUrl +
    '" alt="" onerror="this.src=\'/images/noImage.jpg\'""/></div></td><td><table><tbody><tr><td><strong>Title : </strong></td><td>' + bookStore[i].title +
    '</td></tr><tr><td><strong>pageCount : </strong></td><td>' + bookStore[i].pageCount +
    '</td></tr><tr><td><strong>publishedDate: </strong></td><td>' + 
    (bookStore[i].publishedDate ? bookStore[i].publishedDate.$date : "") +
    '</td></tr><tr><td valign="top"><strong>Description : </strong></td><td>' + bookStore[i].shortDescription +
    '</td></tr><tr><td><strong>Authors : </strong></td><td>' + bookStore[i].authors +
    '</td></tr><tr><td><strong>Categories : </strong></td><td>' + bookStore[i].categories +
    '</td></tr></tbody></table></td></tr></tbody></table>';
  }
  document.getElementById("book-store").innerHTML = bookStoreHTML;
  });