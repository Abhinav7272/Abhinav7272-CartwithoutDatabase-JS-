var sum=0;
var flag=0;
var arr=[0,0,0,0,0];
var bookstext = document.getElementById('cartContainer');
var total = document.getElementById('total');
var discount =document.getElementById('discount');
var finalamt =document.getElementById('finalamt');
total.innerText="Total Amount: "+sum;
discount.innerText="Total discount:"+(sum*0.1);
finalamt.innerText="Final Amount :"+(sum-(sum*0.1));
function calculate(x){
if(flag==0){
    bookstext.textContent="";
    flag=1;
}
if(x==1){
        sum+=230;
        var paragraph =document.createElement('span');
        var nl =document.createElement('br');
        paragraph.innerText=" 1.In Search of Lost Time";
        bookstext.appendChild(paragraph);
        var btn = document.createElement('button');
        btn.innerText="❎";
        bookstext.appendChild(btn);
        bookstext.appendChild(nl);
        btn.addEventListener('click',function(){
            bookstext.removeChild(paragraph);
            bookstext.removeChild(btn);
            bookstext.removeChild(nl);
            sum=sum-230;
            total.innerText="Total Amount: "+sum;
            discount.innerText="Total discount:"+(sum*0.1);
            finalamt.innerText="Final Amount :"+(sum-(sum*0.1));
            if(sum==0){
                bookstext.textContent = "Empty 👎 Add some items !!!";
                flag=0;
            }

    })
   
    
}
else if(x==2){
    if(sum==0){
        bookstext.textContent = "Empty 👎 Add some items !!!";
    }
    sum+=420;
    var paragraph =document.createElement('span');
        var nl =document.createElement('br');
        paragraph.innerText="2. uylsses ";
        bookstext.appendChild(paragraph);
        var btn = document.createElement('button');
        btn.innerText="❎";
        bookstext.appendChild(btn);
        bookstext.appendChild(nl);
        btn.addEventListener('click',function(){
            bookstext.removeChild(paragraph);
            bookstext.removeChild(btn);
            bookstext.removeChild(nl);
            sum-=420;
            total.innerText="Total Amount: "+sum;
            discount.innerText="Total discount:"+(sum*0.1);
            finalamt.innerText="Final Amount :"+(sum-(sum*0.1));
            if(sum==0){
                bookstext.textContent = "Empty 👎 Add some items !!!";
                flag=0;
            }
    })
}
else if(x==3){
    if(sum==0){
        bookstext.textContent = "Empty 👎 Add some items !!!";
    }
     sum+=150;
     var paragraph =document.createElement('span');
     var nl =document.createElement('br');
     paragraph.innerText="3.Don quixote";
     bookstext.appendChild(paragraph);
     var btn = document.createElement('button');
     btn.innerText="❎";
     bookstext.appendChild(btn);
     bookstext.appendChild(nl);
     btn.addEventListener('click',function(){
         bookstext.removeChild(paragraph);
         bookstext.removeChild(btn);
         bookstext.removeChild(nl);
         sum-=150;
         total.innerText="Total Amount: "+sum;
         discount.innerText="Total discount:"+(sum*0.1);
         finalamt.innerText="Final Amount :"+(sum-(sum*0.1));
         if(sum==0){
             bookstext.textContent = "Empty 👎 Add some items !!!";
             flag=0;
         }
 })
    }
else if(x==4){
    if(sum==0){
        bookstext.textContent = "Empty 👎 Add some items !!!";
    }
      sum+=380;
      var paragraph =document.createElement('span');
      var nl =document.createElement('br');
      paragraph.innerText="4.one hundred years of solitude";
      bookstext.appendChild(paragraph);
      var btn = document.createElement('button');
      btn.innerText="❎";
      bookstext.appendChild(btn);
      bookstext.appendChild(nl);
      btn.addEventListener('click',function(){
          bookstext.removeChild(paragraph);
          bookstext.removeChild(btn);
          bookstext.removeChild(nl);
          sum-=380;
          total.innerText="Total Amount: "+sum;
          discount.innerText="Total discount:"+(sum*0.1);
          finalamt.innerText="Final Amount :"+(sum-(sum*0.1));
          if(sum==0){
              bookstext.textContent = "Empty 👎 Add some items !!!";
              flag=0;
          }
  })
    }
else if(x==5){
    if(sum==0){
        bookstext.textContent = "Empty 👎 Add some items !!!";
    }
      sum+=100;
      var paragraph =document.createElement('span');
      var nl =document.createElement('br');
      paragraph.innerText="5. the great Gatsby";
      bookstext.appendChild(paragraph);
      var btn = document.createElement('button');
      btn.innerText="❎";
      bookstext.appendChild(btn);
      bookstext.appendChild(nl);
      btn.addEventListener('click',function(){
          bookstext.removeChild(paragraph);
          bookstext.removeChild(btn);
          bookstext.removeChild(nl);
          sum-=100;
          total.innerText="Total Amount: "+sum;
          discount.innerText="Total discount:"+(sum*0.1);
          finalamt.innerText="Final Amount :"+(sum-(sum*0.1));
            if(sum==0){
                bookstext.textContent = "Empty 👎 Add some items !!!";
                flag=0;
            }
  })
}
total.innerText="Total Amount: "+sum;
discount.innerText="Total discount:"+(sum*0.1);
finalamt.innerText="Final Amount :"+(sum-(sum*0.1));

}