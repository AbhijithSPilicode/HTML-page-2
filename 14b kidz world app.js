const toggleButton=document.getElementsByClassName('toggle-button')[0]
const navbarLinks=document.getElementsByClassName('navbar-links')[0]
toggleButton.addEventListener('click',()=>{
    navbarLinks.classList.toggle('active')  /*this javascript will help you to enable home,contact,user when we click the 3 button on top of site*/
})

// var removeCartItemButtons=document.getElementsByClassName('button')
// console.log(removeCartItemButtons)
// var total=document.getElementsByClassName('count')
// for(var i=0;i<removeCartItemButtons.length;i++){
//     var button=removeCartItemButtons[i]
//     button.addEventListener('click',function(){
//         console.log('clicked')   //when younclick on any button having ADD to cart,in console of inspect it will say clicked
//         total=total+1
//         updateCartTotal()
//     })
// }

// function updateCartTotal(){
//     var cartItemContainer = document.getElementsByClassName('table')[0]
//     var cartRows=cartItemContainer.getElementsByClassName('td')
//     console.log(cartItemContainer)
//     console.log(cartRows)
//     for(var i=0;i<cartRows.length;i++){
//         var cartRow=cartRows[i]
//         var priceElement=cartRow.getElementsByClassName('cart-price')[0]
//         console.log(priceElement)
//     }
// }
var AddtoCartButtons=document.getElementsByClassName('button')
var itemPrice=document.getElementsByClassName('shop-item-price')
let count=document.getElementById('count')
var cart=0
var totalprice=0
console.log(AddtoCartButtons)
for(var i=0;AddtoCartButtons.length;i++){
    var button=AddtoCartButtons[i]
    var price=itemPrice[i]
    button.addEventListener('click',function(){
        cart=cart+1
        console.log(cart)
        count.innerText=cart
        console.log(price)
        totalprice=totalprice+price;
        console.log(totalprice)
        
    })
}

function  SendWhatsappMessage(){
    var phonenumber="+919495906524";
    var name=document.querySelector('shop-item-title');
    var price=document.querySelector('shop-item-price');
    var url="https://wa.me/"+phonenumber+"?text="
    +"Name:"+name+"%0a"
    +"Price:"+price+"%0a%0a";
    window.open(url,'_blank').focus();

}

