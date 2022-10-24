// header
// Scroll
$(window).scroll(function() {
    let windowScroll = $(window).scrollTop()
    if(windowScroll > 145)
    {
         $("#header").addClass("header_2 fadeInDown")
         $("#scroll_top").addClass("active")
    }
    else
    {
        $("#header").removeClass("header_2 fadeInDown")
        $("#scroll_top").removeClass("active")
    }
});
$("#scroll_top").click(function(){
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
})
// User Menu
let userMenu = document.getElementById("user-menu")
userMenu.addEventListener("click" , openMenuLoin)
function openMenuLoin(){
    let userLinks = document.getElementById("user-links")
    userLinks.classList.toggle("active")
}
// Setting
let settingManu = document.getElementById("setting-manu")
settingManu.addEventListener("click" , openSetting)
function openSetting(){
    let openBar = document.getElementById("action-bar")
    openBar.classList.toggle("active")
}
// Bag
let bag = document.getElementById("bag")
let bagClose = document.getElementById("close-bag")
let bagMenu = document.getElementById("bag-menu")
bag.addEventListener("click" , openBag)
function openBag(){
    bagMenu.classList.add("active")
}
bagClose.addEventListener("click" , closeBag)
function closeBag(){
    bagMenu.classList.remove("active")
}
// Page Search
let openPage = document.getElementById("open-page")
let pageSearch = document.getElementById("page-search")
let closePage = document.getElementById("close-page")
openPage.addEventListener("click" , openPageSearch) 
function openPageSearch(){
    pageSearch.classList.add("active")
}
closePage.addEventListener("click" , closePageSearch)
function closePageSearch(){
    pageSearch.classList.remove("active")
}
// Menu Responsive
let openMenu = document.getElementById("open-menu")
let closeMenu = document.getElementById("close-menu")
let menu = document.getElementById("menu")
openMenu.addEventListener("click", menuOpen)
function menuOpen(){
    menu.classList.add("active")
}
closeMenu.addEventListener("click", menuClose)
function menuClose(){
    menu.classList.remove("active")
}
// Home Menu
$("#home").click(function(){
    $("#menuHome").slideToggle(400)
    let openMenu = document.getElementById("home")
    openMenu.classList.toggle("fa-minus")
    openMenu.classList.toggle("fa-plus")
})
$(".home #itemHome-1").click(function(){
    $(".mob_nav .home .item-1").slideToggle(400)
    let itemMenu = document.getElementById("itemHome-1")
    itemMenu.classList.toggle("fa-minus")
    itemMenu.classList.toggle("fa-plus")
})
$(".home #itemHome-2").click(function(){
    $(".mob_nav .home .item-2").slideToggle(400)
    let itemMenu = document.getElementById("itemHome-2")
    itemMenu.classList.toggle("fa-minus")
    itemMenu.classList.toggle("fa-plus")
})
$(".home #itemHome-3").click(function(){
    $(".mob_nav .home .item-3").slideToggle(400)
    let itemMenu = document.getElementById("itemHome-3")
    itemMenu.classList.toggle("fa-minus")
    itemMenu.classList.toggle("fa-plus")
})
// Shop Menu 
$("#shop").click(function(){
    $("#menuShop").slideToggle(400)
    let openMenu = document.getElementById("shop")
    openMenu.classList.toggle("fa-minus")
    openMenu.classList.toggle("fa-plus")
})
$(".shop #itemShop-1").click(function(){
    $(".mob_nav .shop .item-1").slideToggle(400)
    let itemMenu = document.getElementById("itemShop-1")
    itemMenu.classList.toggle("fa-minus")
    itemMenu.classList.toggle("fa-plus")
})
$(".shop #itemShop-2").click(function(){
    $(".mob_nav .shop .item-2").slideToggle(400)
    let itemMenu = document.getElementById("itemShop-2")
    itemMenu.classList.toggle("fa-minus")
    itemMenu.classList.toggle("fa-plus")
})
$(".shop #itemShop-3").click(function(){
    $(".mob_nav .shop .item-3").slideToggle(400)
    let itemMenu = document.getElementById("itemShop-3")
    itemMenu.classList.toggle("fa-minus")
    itemMenu.classList.toggle("fa-plus")
})
// Product Menu 
$("#product").click(function(){
    $("#menuProduct").slideToggle(400)
    let openMenu = document.getElementById("product")
    openMenu.classList.toggle("fa-minus")
    openMenu.classList.toggle("fa-plus")
})
$(".product #itemProduct-1").click(function(){
    $(".mob_nav .product .item-1").slideToggle(400)
    let itemMenu = document.getElementById("itemProduct-1")
    itemMenu.classList.toggle("fa-minus")
    itemMenu.classList.toggle("fa-plus")
})
$(".product #itemProduct-2").click(function(){
    $(".mob_nav .product .item-2").slideToggle(400)
    let itemMenu = document.getElementById("itemProduct-2")
    itemMenu.classList.toggle("fa-minus")
    itemMenu.classList.toggle("fa-plus")
})
$(".product #itemProduct-3").click(function(){
    $(".mob_nav .product .item-3").slideToggle(400)
    let itemMenu = document.getElementById("itemProduct-3")
    itemMenu.classList.toggle("fa-minus")
    itemMenu.classList.toggle("fa-plus")
})
$(".product #itemProduct-4").click(function(){
    $(".mob_nav .product .item-4").slideToggle(400)
    let itemMenu = document.getElementById("itemProduct-4")
    itemMenu.classList.toggle("fa-minus")
    itemMenu.classList.toggle("fa-plus")
})
// Page Menu
$("#page").click(function(){
    $("#menuPage").slideToggle(400)
    let openMenu = document.getElementById("page")
    openMenu.classList.toggle("fa-minus")
    openMenu.classList.toggle("fa-plus")
})
$(".page #itemPage-1").click(function(){
    $(".mob_nav .page .item-1").slideToggle(400)
    let itemMenu = document.getElementById("itemPage-1")
    itemMenu.classList.toggle("fa-minus")
    itemMenu.classList.toggle("fa-plus")
})
$(".page #itemPage-2").click(function(){
    $(".mob_nav .page .item-2").slideToggle(400)
    let itemMenu = document.getElementById("itemPage-2")
    itemMenu.classList.toggle("fa-minus")
    itemMenu.classList.toggle("fa-plus")
})
// Blog Menu
$("#blog").click(function(){
    $("#menuBlog").slideToggle(400)
    let openMenu = document.getElementById("blog")
    openMenu.classList.toggle("fa-minus")
    openMenu.classList.toggle("fa-plus")
})
// header
// main
// section 1
// Carouse
$('#carousel1').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    autoplayTimeout:7000,
    smartSpeed:1000,
    autoplay:true,
    navText:[`<i class="fa-solid fa-chevron-left"></i>` , `<i class="fa-solid fa-chevron-right"></i>`],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
// section 1
// section 2
// Grid 1
$(".grid-1 .green").click(function(){
    $(".grid-1 .variantImg").css("background-image" , "url(img/Hcefa63e81aeb42a581c71b37d34919e12_400x.webp)")
    $(".grid-1 .grid_img_wr").addClass("showVariantImg")
    $(".grid-1 .green").addClass("active")
    $(".grid-1 .white").removeClass("active")
    $(".grid-1 .black").removeClass("active")
    $(".grid-1 .yellow").removeClass("active")
    $(".grid-1 .khaki").removeClass("active")
    $(".grid-1 .blue").removeClass("active")
})
$(".grid-1 .white").click(function(){
    $(".grid-1 .variantImg").css("background-image" , "url(img/H061ecac8d27043779e961d036ec463e8M_af48da92-4207-43a1-9d75-fc7e9f64bdb9_400x.webp)")
    $(".grid-1 .grid_img_wr").addClass("showVariantImg")
    $(".grid-1 .white").addClass("active")
    $(".grid-1 .green").removeClass("active")
    $(".grid-1 .black").removeClass("active")
    $(".grid-1 .yellow").removeClass("active")
    $(".grid-1 .khaki").removeClass("active")
    $(".grid-1 .blue").removeClass("active")
})
$(".grid-1 .black").click(function(){
    $(".grid-1 .variantImg").css("background-image" , "url(img/Hf1e6872f1b8d48ceb201c5ab99726edf2_400x.webp)")
    $(".grid-1 .grid_img_wr").addClass("showVariantImg")
    $(".grid-1 .black").addClass("active")
    $(".grid-1 .green").removeClass("active")
    $(".grid-1 .white").removeClass("active")
    $(".grid-1 .yellow").removeClass("active")
    $(".grid-1 .khaki").removeClass("active")
    $(".grid-1 .blue").removeClass("active")
})
$(".grid-1 .yellow").click(function(){
    $(".grid-1 .variantImg").css("background-image" , "url(img/H95a1240cb5c740eeaace6418ca49ec6ab_400x.webp)")
    $(".grid-1 .grid_img_wr").addClass("showVariantImg")
    $(".grid-1 .yellow").addClass("active")
    $(".grid-1 .green").removeClass("active")
    $(".grid-1 .white").removeClass("active")
    $(".grid-1 .black").removeClass("active")
    $(".grid-1 .khaki").removeClass("active")
    $(".grid-1 .blue").removeClass("active")
})
$(".grid-1 .khaki").click(function(){
    $(".grid-1 .variantImg").css("background-image" , "url(img/H6b4e9d73b6eb44d1876197db9e984011Q_400x.webp)")
    $(".grid-1 .grid_img_wr").addClass("showVariantImg")
    $(".grid-1 .khaki").addClass("active")
    $(".grid-1 .green").removeClass("active")
    $(".grid-1 .white").removeClass("active")
    $(".grid-1 .black").removeClass("active")
    $(".grid-1 .yellow").removeClass("active")
    $(".grid-1 .blue").removeClass("active")
})
$(".grid-1 .blue").click(function(){
    $(".grid-1 .variantImg").css("background-image" , "url(img/Hf507b7345958422d9d8f8eca310fea33n_400x.webp)")
    $(".grid-1 .grid_img_wr").addClass("showVariantImg")
    $(".grid-1 .blue").addClass("active")
    $(".grid-1 .green").removeClass("active")
    $(".grid-1 .white").removeClass("active")
    $(".grid-1 .black").removeClass("active")
    $(".grid-1 .yellow").removeClass("active")
})
// Grid 2
$(".grid-2 .black").click(function(){
    $(".grid-2 .variantImg").css("background-image" , "url(img/1_31d70db6-985f-4068-9999-d360835e059f_400x.webp)")
    $(".grid-2 .grid_img_wr").addClass("showVariantImg")
    $(".grid-2 .black").addClass("active")
    $(".grid-2 .pink").removeClass("active")
})
$(".grid-2 .pink").click(function(){
    $(".grid-2 .variantImg").css("background-image" , "url(img/5_df537ecf-370b-4abb-bec3-29ef9537de8f_400x.webp)")
    $(".grid-2 .grid_img_wr").addClass("showVariantImg")
    $(".grid-2 .pink").addClass("active")
    $(".grid-2 .black").removeClass("active")
})
// Grid 3
$(".grid-3 .green").click(function(){
    $(".grid-3 .variantImg").css("background-image" , "url(img/Hf892f837deba4801914710c05f79ea99R_400x.webp)")
    $(".grid-3 .grid_img_wr").addClass("showVariantImg")
    $(".grid-3 .green").addClass("active")
    $(".grid-3 .white").removeClass("active")
    $(".grid-3 .pink").removeClass("active")
    $(".grid-3 .red").removeClass("active")
})
$(".grid-3 .pink").click(function(){
    $(".grid-3 .variantImg").css("background-image" , "url(img/Hb462be62c7e5443db951148b34d55bfcf_400x.webp)")
    $(".grid-3 .grid_img_wr").addClass("showVariantImg")
    $(".grid-3 .pink").addClass("active")
    $(".grid-3 .white").removeClass("active")
    $(".grid-3 .green").removeClass("active")
    $(".grid-3 .red").removeClass("active")
})
$(".grid-3 .white").click(function(){
    $(".grid-3 .variantImg").css("background-image" , "url(img/H8db043acbc47429ea614bf7208a80b0bB_400x.webp)")
    $(".grid-3 .grid_img_wr").addClass("showVariantImg")
    $(".grid-3 .white").addClass("active")
    $(".grid-3 .pink").removeClass("active")
    $(".grid-3 .green").removeClass("active")
    $(".grid-3 .red").removeClass("active")
})
$(".grid-3 .red").click(function(){
    $(".grid-3 .variantImg").css("background-image" , "url(img/H76ceafb17b0b46678ba2a9216dd13707D_400x.webp)")
    $(".grid-3 .grid_img_wr").addClass("showVariantImg")
    $(".grid-3 .red").addClass("active")
    $(".grid-3 .pink").removeClass("active")
    $(".grid-3 .green").removeClass("active")
    $(".grid-3 .white").removeClass("active")
})
// Grid 4
$(".grid-4 .white").click(function(){
    $(".grid-4 .variantImg").css("background-image" , "url(img/H625460db963f4acc8992ee6f37d22a32m_400x.jpg)")
    $(".grid-4 .grid_img_wr").addClass("showVariantImg")
    $(".grid-4 .white").addClass("active")
    $(".grid-4 .black").removeClass("active")
    $(".grid-4 .green").removeClass("active")
    $(".grid-4 .khaki").removeClass("active")
})
$(".grid-4 .black").click(function(){
    $(".grid-4 .variantImg").css("background-image" , "url(img/H4a5a6050f0014554a573c8dd44843b2fr_400x.webp)")
    $(".grid-4 .grid_img_wr").addClass("showVariantImg")
    $(".grid-4 .black").addClass("active")
    $(".grid-4 .white").removeClass("active")
    $(".grid-4 .green").removeClass("active")
    $(".grid-4 .khaki").removeClass("active")
})
$(".grid-4 .green").click(function(){
    $(".grid-4 .variantImg").css("background-image" , "url(img/Hade85bcca3364ddaa2e4d939e651b7f1k_400x.webp)")
    $(".grid-4 .grid_img_wr").addClass("showVariantImg")
    $(".grid-4 .green").addClass("active")
    $(".grid-4 .white").removeClass("active")
    $(".grid-4 .black").removeClass("active")
    $(".grid-4 .khaki").removeClass("active")
})
$(".grid-4 .khaki").click(function(){
    $(".grid-4 .variantImg").css("background-image" , "url(img/H72985799a02142a181cb665ce08f793ed_400x.webp)")
    $(".grid-4 .grid_img_wr").addClass("showVariantImg")
    $(".grid-4 .khaki").addClass("active")
    $(".grid-4 .white").removeClass("active")
    $(".grid-4 .black").removeClass("active")
    $(".grid-4 .green").removeClass("active")
})
// Grid 5
$(".grid-5 .black").click(function(){
    $(".grid-5 .variantImg").css("background-image" , "url(img/HTB1jrj_XHj1gK0jSZFuq6ArHpXa6_400x.jpg)")
    $(".grid-5 .grid_img_wr").addClass("showVariantImg")
    $(".grid-5 .black").addClass("active")
    $(".grid-5 .blue").removeClass("active")
    $(".grid-5 .yellow").removeClass("active")
})
$(".grid-5 .blue").click(function(){
    $(".grid-5 .variantImg").css("background-image" , "url(img/HTB1MBb9XO_1gK0jSZFqq6ApaXXaC_400x.jpg)")
    $(".grid-5 .grid_img_wr").addClass("showVariantImg")
    $(".grid-5 .blue").addClass("active")
    $(".grid-5 .black").removeClass("active")
    $(".grid-5 .yellow").removeClass("active")
})
$(".grid-5 .yellow").click(function(){
    $(".grid-5 .variantImg").css("background-image" , "url(img/HTB1CD_8XKH2gK0jSZJnq6yT1FXax_400x.jpg)")
    $(".grid-5 .grid_img_wr").addClass("showVariantImg")
    $(".grid-5 .yellow").addClass("active")
    $(".grid-5 .black").removeClass("active")
    $(".grid-5 .blue").removeClass("active")
})
// Grid 6
$(".grid-6 .pink").click(function(){
    $(".grid-6 .variantImg").css("background-image" , "url(img/Ha65c4c31c49a4ab0bf5eb8c22b94b5e7d_400x.webp)")
    $(".grid-6 .grid_img_wr").addClass("showVariantImg")
    $(".grid-6 .pink").addClass("active")
    $(".grid-6 .black").removeClass("active")
    $(".grid-6 .red").removeClass("active")
})
$(".grid-6 .black").click(function(){
    $(".grid-6 .variantImg").css("background-image" , "url(img/H2ffc39cb58d84625a65c0263b8ad3ae1O_400x.webp)")
    $(".grid-6 .grid_img_wr").addClass("showVariantImg")
    $(".grid-6 .black").addClass("active")
    $(".grid-6 .pink").removeClass("active")
    $(".grid-6 .red").removeClass("active")
})
$(".grid-6 .red").click(function(){
    $(".grid-6 .variantImg").css("background-image" , "url(img/H1c9dcfd4ab1c483e906850c92fedb45eo_400x.webp)")
    $(".grid-6 .grid_img_wr").addClass("showVariantImg")
    $(".grid-6 .red").addClass("active")
    $(".grid-6 .pink").removeClass("active")
    $(".grid-6 .black").removeClass("active")
})
// Grid 7
$(".grid-7 .white").click(function(){
    $(".grid-7 .variantImg").css("background-image" , "url(img/H224da54864c345ca8ab3f7ad7cf61ff86_400x.webp)")
    $(".grid-7 .grid_img_wr").addClass("showVariantImg")
    $(".grid-7 .white").addClass("active")
    $(".grid-7 .black").removeClass("active")
    $(".grid-7 .blue").removeClass("active")
})
$(".grid-7 .blue").click(function(){
    $(".grid-7 .variantImg").css("background-image" , "url(img/H95f3cdb347fd4d76b0ff5a94d04cf3b4q_400x.webp)")
    $(".grid-7 .grid_img_wr").addClass("showVariantImg")
    $(".grid-7 .blue").addClass("active")
    $(".grid-7 .black").removeClass("active")
    $(".grid-7 .white").removeClass("active")
})
$(".grid-7 .black").click(function(){
    $(".grid-7 .variantImg").css("background-image" , "url(img/Hcc7b99fd35e44a0fad2cb875c90a3863Y_400x.webp)")
    $(".grid-7 .grid_img_wr").addClass("showVariantImg")
    $(".grid-7 .black").addClass("active")
    $(".grid-7 .blue").removeClass("active")
    $(".grid-7 .white").removeClass("active")
})
// Grid 8
$(".grid-8 .black").click(function(){
    $(".grid-8 .variantImg").css("background-image" , "url(img/Ha63c8c02932a46178a97526736dd4d86b_400x.jpg)")
    $(".grid-8 .grid_img_wr").addClass("showVariantImg")
    $(".grid-8 .black").addClass("active")
    $(".grid-8 .grey").removeClass("active")
    $(".grid-8 .khaki").removeClass("active")
    $(".grid-8 .white").removeClass("active")
    $(".grid-8 .brown").removeClass("active")
})
$(".grid-8 .grey").click(function(){
    $(".grid-8 .variantImg").css("background-image" , "url(img/H539ea92796f743fea1d038566250bf3a6_400x.jpg)")
    $(".grid-8 .grid_img_wr").addClass("showVariantImg")
    $(".grid-8 .grey").addClass("active")
    $(".grid-8 .black").removeClass("active")
    $(".grid-8 .khaki").removeClass("active")
    $(".grid-8 .white").removeClass("active")
    $(".grid-8 .brown").removeClass("active")
})
$(".grid-8 .khaki").click(function(){
    $(".grid-8 .variantImg").css("background-image" , "url(img/H8e26bad13cdd48fea06971f582309e13j_400x.jpg)")
    $(".grid-8 .grid_img_wr").addClass("showVariantImg")
    $(".grid-8 .khaki").addClass("active")
    $(".grid-8 .black").removeClass("active")
    $(".grid-8 .grey").removeClass("active")
    $(".grid-8 .white").removeClass("active")
    $(".grid-8 .brown").removeClass("active")
})
$(".grid-8 .white").click(function(){
    $(".grid-8 .variantImg").css("background-image" , "url(img/H5af15a610efc4afb8d2406a12e3755aba_400x.jpg)")
    $(".grid-8 .grid_img_wr").addClass("showVariantImg")
    $(".grid-8 .white").addClass("active")
    $(".grid-8 .black").removeClass("active")
    $(".grid-8 .grey").removeClass("active")
    $(".grid-8 .khaki").removeClass("active")
    $(".grid-8 .brown").removeClass("active")
})
$(".grid-8 .brown").click(function(){
    $(".grid-8 .variantImg").css("background-image" , "url(img/H2c27f76c490d4742b3a54046881ae1d81_400x.jpg)")
    $(".grid-8 .grid_img_wr").addClass("showVariantImg")
    $(".grid-8 .brown").addClass("active")
    $(".grid-8 .black").removeClass("active")
    $(".grid-8 .grey").removeClass("active")
    $(".grid-8 .khaki").removeClass("active")
    $(".grid-8 .white").removeClass("active")
})
// Grid 9
$(".grid-9 .black").click(function(){
    $(".grid-9 .variantImg").css("background-image" , "url(img/HTB13Smra4n1gK0jSZKPq6xvUXXaO_400x.jpg)")
    $(".grid-9 .grid_img_wr").addClass("showVariantImg")
    $(".grid-9 .black").addClass("active")
    $(".grid-9 .grey").removeClass("active")
    $(".grid-9 .brown").removeClass("active")
    $(".grid-9 .khaki").removeClass("active")
    $(".grid-9 .white").removeClass("active")
})
$(".grid-9 .grey").click(function(){
    $(".grid-9 .variantImg").css("background-image" , "url(img/HTB1bRqsa7L0gK0jSZFxq6xWHVXa4_400x.webp)")
    $(".grid-9 .grid_img_wr").addClass("showVariantImg")
    $(".grid-9 .grey").addClass("active")
    $(".grid-9 .black").removeClass("active")
    $(".grid-9 .brown").removeClass("active")
    $(".grid-9 .khaki").removeClass("active")
    $(".grid-9 .white").removeClass("active")
})
$(".grid-9 .brown").click(function(){
    $(".grid-9 .variantImg").css("background-image" , "url(img/HTB11wWra.D1gK0jSZFGq6zd3FXaU_400x.jpg)")
    $(".grid-9 .grid_img_wr").addClass("showVariantImg")
    $(".grid-9 .brown").addClass("active")
    $(".grid-9 .black").removeClass("active")
    $(".grid-9 .grey").removeClass("active")
    $(".grid-9 .khaki").removeClass("active")
    $(".grid-9 .white").removeClass("active")
})
$(".grid-9 .khaki").click(function(){
    $(".grid-9 .variantImg").css("background-image" , "url(img/HTB1pxWra1H2gK0jSZFEq6AqMpXaX_400x.webp)")
    $(".grid-9 .grid_img_wr").addClass("showVariantImg")
    $(".grid-9 .khaki").addClass("active")
    $(".grid-9 .black").removeClass("active")
    $(".grid-9 .grey").removeClass("active")
    $(".grid-9 .brown").removeClass("active")
    $(".grid-9 .white").removeClass("active")
})
$(".grid-9 .white").click(function(){
    $(".grid-9 .variantImg").css("background-image" , "url(img/HTB16F9ra7P2gK0jSZPxq6ycQpXaH_400x.webp)")
    $(".grid-9 .grid_img_wr").addClass("showVariantImg")
    $(".grid-9 .white").addClass("active")
    $(".grid-9 .black").removeClass("active")
    $(".grid-9 .grey").removeClass("active")
    $(".grid-9 .brown").removeClass("active")
    $(".grid-9 .khaki").removeClass("active")
})
// Grid 11
$(".grid-11 .orange").click(function(){
    $(".grid-11 .variantImg").css("background-image" , "url(img/Hc917acd85d7d49298ea9f52cafd2b98dO_400x.webp)")
    $(".grid-11 .grid_img_wr").addClass("showVariantImg")
    $(".grid-11 .orange").addClass("active")
    $(".grid-11 .pink").removeClass("active")
    $(".grid-11 .blue").removeClass("active")
})
$(".grid-11 .pink").click(function(){
    $(".grid-11 .variantImg").css("background-image" , "url(img/Hc1b4243842854956a0046b18a6ea8f15U_400x.webp)")
    $(".grid-11 .grid_img_wr").addClass("showVariantImg")
    $(".grid-11 .pink").addClass("active")
    $(".grid-11 .orange").removeClass("active")
    $(".grid-11 .blue").removeClass("active")
})
$(".grid-11 .blue").click(function(){
    $(".grid-11 .variantImg").css("background-image" , "url(img/H26408db61afc4fb1b22ea64ed030b0b6H_400x.webp)")
    $(".grid-11 .grid_img_wr").addClass("showVariantImg")
    $(".grid-11 .blue").addClass("active")
    $(".grid-11 .orange").removeClass("active")
    $(".grid-11 .pink").removeClass("active")
})
// main
// Footer 
$("#down_1").click(function(){
    $("#item-down_1").slideToggle(400)
    $("#icon-down_1").toggleClass("fa-chevron-down")
    $("#icon-down_1").toggleClass("fa-chevron-up")
})
$("#down_2").click(function(){
    $("#item-down_2").slideToggle(400)
    $("#icon-down_2").toggleClass("fa-chevron-down")
    $("#icon-down_2").toggleClass("fa-chevron-up")
})
