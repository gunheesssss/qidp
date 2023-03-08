$(function () {
    const menu = {
        template: {
            name: "템플릿관리",
            subMenu: [
                {
                    name: "항목관리",
                    value : "item"
                },
                {
                    name: "검증항목관리",
                    value : "verify"
                },
                {
                    name: "목차관리",
                    value : "table"
                },
                {
                    name: "서식관리",
                    value : "form"
                },
                {
                    name: "표준약관관리",
                    value : "term"
                },
          
            ]
        },
        product: {
            name: "상품관리",
            subMenu: [
                {
                    name: "상품항목관리",
                    value : "proditem"
                },
                {
                    name: "상품분류관리",
                    value : "class"
                },
                {
                    name: "상품정보관리",
                    value : "info"
                },

            ]
        },
        document: {
            name: "기초서류관리",
            subMenu: [
                {
                    name: "문서관리",
                    value : "manage"
                },
                {
                    name: "문서작성/편집",
                    value : "edit"
                },
                {
                    name: "문서일괄편집",
                    value : "bloc"
                },
            ]
        },

    }
    let navData = "";
    const mainPath = new URL(location.href).pathname.split("/")[2];
    const subPath = new URL(location.href).pathname.split("/")[3];
    
    $(document).ready(function(){
        if(["edit"].includes(subPath)) $(".header_control").addClass("show");

        activeMenu("main", mainPath);
        addMenu(mainPath);
        activeMenu("sub", subPath);
    });

    $("[data-mainnav]").click(function () {
        const mainData = this.dataset.mainnav;
        if ($(".sub_nav").hasClass("show") && mainData === navData || mainData === "home") {
            $(".sub_nav").removeClass("show");
            $(".tab_wrap").removeClass("show");
            navData = "";
            return;
        }
        $(".sub_nav").addClass("show");
        $(".tab_wrap").addClass("show");

        if(!$(this).hasClass('active')){
            addMenu(mainData);
            activeMenu("main", mainData)
            activeMenu("sub", subPath);
        }
        navData = mainData;
    })

    function activeMenu(type, data){
        $(`[data-${type}nav]`).removeClass("active");
        $(`[data-${type}nav=${data}]`).addClass("active");
    }

    function addMenu(mainData) {
        const subMenu = menu[mainData].subMenu.map(v => `
            <li onclick="onClickSubNav('${mainData}', '${v.value}')" data-subnav="${v.value}">
                <img class="icon" src="../../../public/image/nav_${v.value}.svg" alt="">
                <span>${v.name}</span>
            </li>
        `)

        $("#menu_title").text(menu[mainData].name)
        $("#sub_menu").html(subMenu.join(' '))
    }


});
  
function onClickSubNav(mainData, value){
    console.log(["bloc", "verify"].includes(value));
    if(["bloc", "verify"].includes(value)) return alert("개발 중인 페이지입니다.");

    location.href=`/src/${mainData}/${value}/index.html`;
}