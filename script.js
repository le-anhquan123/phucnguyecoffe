const next = document.querySelector('.next-2')
const prev = document.querySelector('.prev-2')
const comment = document.querySelector('#list-comment')
const commentItem = document.querySelectorAll('#list-comment .item')
var translateY = 0
var count = commentItem.length

next.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 1) {
    // Xem hết bình luận
    return false
  }
  translateY += -400
  comment.style.transform = `translateY(${translateY}px)`
  count--
})

prev.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 3) {
    // Xem hết bình luận
    return false
  }
  translateY += 400
  comment.style.transform = `translateY(${translateY}px)`
  count++
})



let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
// giỏ hàng
// const priceBtn= document.querySelectorAll('.js-btn-price')
// console.log(priceBtn)
// priceBtn.forEach(function(button,index) {
//   button.addEventListener('click',function(event){
//     var btnItem= event.target
//     var product = btnItem.parentElement
//     var productImg = product.querySelector('.product-img').src
//     var productName = product.querySelector('.desc').innerText
//     var productPrice = product.querySelector('.product-price').innerText
//     console.log(productImg,productName,productPrice)
//   })
// })
let list = document.querySelectorAll('.productitem');
list.forEach(productitem => {
  productitem.addEventListener('click' , function(event) {
    if(event.target.classList.contains('js-btn-price')){
      var itemNew = productitem.cloneNode(true);
      let chackIsset = false;
      
      let listcart =document.querySelectorAll('.cart .productitem')
      listcart.forEach(cart => {
        if(cart.getAttribute('data-key') == itemNew.getAttribute('data-key')){
          chackIsset = true;
          cart.classList.add('danger')
          setTimeout(function() {
            cart.classList.remove('danger');
          },1000)
        }
      })
      if (chackIsset == false){

        document.querySelector('.listcart').appendChild(itemNew);
      }

    }
  })
})
function Remove($key) {
  let listcart = document.querySelectorAll('.cart .productitem');
  listcart.forEach(productitem => {
    if(productitem.getAttribute('data-key') ==$key){
      productitem.remove();
      return;
    }
  })
}