$(document).ready(function () {
    
    //标题图标旋转 控制菜单显隐
    $(".leftbar ul>li").on("click", function () {
        // $(this).children(".iconfont").addClass("sport")
        $(this).children(".detail_content").slideToggle()
        if ($(this).children(".iconfont").hasClass("sport")) {
            $(this).children(".iconfont").removeClass("sport");
        } else {
            $(this).children(".iconfont").addClass("sport");
        }
    })
    $.get("../json/classify.json", function (res) {
        var stra = ``;
        var ratr = ``;
        var data = res[2];

        for (var i = 0; i < res[1].alphabet.length; i++) {
            stra += `  
            <div class="head_brand"><a href="#">${res[1].alphabet[i]}</a></div>
            <div class="move_brand">
                <ul class="ul_scroll">
                </ul>
            </div>
            `
        }
        
        // for (var attr in data) {//获取对象
        //     // console.log(data[attr]);
        //     console.log(data[attr][1]);
        //     for (var j = 0; j < data[attr].length; j++) {
        //         ratr +=
        //             `<li><a href="#">
        //                 <span class="iconfont checkbox checked">&#xe601;</span>
        //                ${data[attr][j]}
        //             </a> </li>`
        //     }
        // }
        $(".more_brand").html(stra);
        $(".ul_scroll").html(ratr);
        console.log($(".ul_scroll"))
        $(".brand-more").on("click", function () {
            $(".select_data:eq(1)").slideToggle(100);
            $(".more_brand").slideToggle(400);
        })
        $(".multi-select").on("click", function () {
            $(".select_data:eq(1)").slideToggle(100);
            $(".head_search").fadeToggle(399);
            $(".more_brand").slideToggle(500);
        })
        $(".ud-price-range>input").on("blur", function () {
            if ($(this).is(".ud-price-range>input:eq(1)")) {
                $(".price-sure").fadeIn('fast');
            } else {
                $(".price-sure").on("click", function () {
                    if ($(".ud-price-range>input:eq(1)").val() != "") {
                        $(".price-sure").fadeOut('fast');
                    }
                })
            }
        })
        var str1 = ``;
        for (var i = 0; i < res[0].sex.length; i++) {
            str1 += `<a href="#">${res[0].sex[i]}</a>`
        }
        $(".select_data:eq(0)").html(str1);
        var str2 = ``;
        for (var i = 0; i < res[0].brand.length; i++) {
            str2 += `<a href="#">${res[0].brand[i]}</a>`
        }
        // console.log(res[0].brand.length)
        $(".select_data:eq(1)").html(str2);
        var str3 = ``;
        for (var i = 0; i < res[0].classify.length; i++) {
            str3 += `<a href="#">${res[0].classify[i]}</a>`
        }
        console.log(res[0].classify.length)
        $(".select_data:eq(2)").html(str3);
        var str4 = ``;
        for (var i = 0; i < res[0].price.length; i++) {
            str4 += `<a href="#">${res[0].price[i]}</a>`
        }
        console.log(res[0].price.length)
        $(".select_data:eq(3)").html(str4);
        var str5 = ``;
        for (var i = 0; i < res[0].color.length; i++) {
            str5 += `<a href="#">${res[0].color[i]}<div class="display_color" style="background:${res[0].col[i]}"></div></a>`
        }
        console.log(res[0].color.length)
        $(".select_data:eq(4)").html(str5);
        $(".select_data").css({
            "width": "730px",
            "overflow": "hidden"
        })
        $(".select_data > a").css({ "display": "block", "float": "left", "padding": "0 10px", "color": "#666" })
        $(".display_color").css({
            "display": "block",
            "float": "left",
            "height": "22px",
            "width": "22px",
            "border": "1px solid #ccc",
            "margin-bottom": "-6px",
            "margin-right": "5px",
        })
    }, 'json')
    //商品列表       
        $('#pagination-demo').twbsPagination({
            totalPages:10,
            visiblePages: 6,
            onPageClick: function (event,page) {
                $.get('../json/MADNESS.json', function (data){
                    var result = `BOYS首页  > "<strong>帽子</strong>" 共有${data.length}个结果`;
                    $(".result").html(result);
                 var strR = ``;
                    for (var i = 0; i < data.length; i++) {
                        // console.log(data[i].src)     
                        strR += `
            <div class="good-info">
            <div class="good-hide">
                <div class="tag_container"></div>
                <div class="allimg">
                        <div class="good-thumb">
                                <a href="#">
                                    <img src="../${data[i].src}" alt="">
                                </a>
                            </div>
                            <div class="good-cat">
                                    <a href="#">
                                        <img src="../${data[i].src}" alt="">
                                    </a>
                                </div>
                </div>          
                <div class="good-detail-text">
                    <a href="">${data[i].title}</a>
                    <p class="brand">
                        <a href="">${data[i].brand}</a>
                    </p>
                    <p class="price">
                        <span class="market-price">${data[i].oriprice || ""}</span>
                        <span class="sale-price">${data[i].nowprice}</span>
                    </p>
                </div>
            </div>
            <div class="tag_container"></div>
            <div class="good-thumb">
                <a href="#">
                    <img src="../${data[i].src}" alt="">
                </a>
            </div>
            <div class="good-detail-text">
                <a href="">${data[i].title}</a>
                <p class="brand">
                    <a href="">${data[i].brand}</a>
                </p>
                <p class="price">
                    <span class="market-price">${data[i].oriprice || ""}</span>
                    <span class="sale-price">${data[i].nowprice}</span>
                </p>
                <p class="few-tag" style="${data[i].stock || ""}">即将售罄</p>
            </div>
        </div>
            `;
                    }
                    $(".goods_list").html(strR);
                    $(".good-info").hover(
                        function () {
                            $(".good-hide").css('z-index', '1').siblings().css('z-index', '-1');
                            $(this).children(".good-hide").fadeIn();
                        },
                        function () {
                            $(this).children(".good-hide").fadeOut();
                        }
                    )
                }, "json")
            }
        })

        $(document).on("scroll", function (res) {
            console.log($(document).scrollTop())
            
            if ($(document).scrollTop() > 600) {
                $(".scroll_slide").fadeIn()
            }else {
                $(".scroll_slide").fadeOut()
            }
        })
        $(".scroll_slide>span:eq(1)").on("click", function () {
            $('html,body').animate({scrollTop:'0px'},1000);
        })
        $(".scroll_fixed>span").on("click", function () {
            $(".scroll_fixed").fadeToggle(100);
        })
        $(".scroll_slide>span").on("mouseenter", function () {
            if ($(this).is($(".scroll_slide>span:eq(0)"))) {
                $(".ewm").fadeIn();
            }
            $(this).css({ "background": "reba(0,0,0,0.5)", "color": "#000" })
        })
        $(".scroll_slide>span").on("mouseout", function () {
            if ($(this).is($(".scroll_slide>span:eq(0)"))) {
                $(".ewm").fadeOut();
            }
            $(this).css({ "background": "", "color": "" })
        })     
    })