document.addEventListener("DOMContentLoaded", function() {
    if ($(window).width() < 767) {
        var $hamburger = $(".header__hamburger");
        var $menu = $('.mainNavigation');
        var $menuElements = $('.mainNavigation__element');
        var $menuElementDropdown = $('.mainNavigation__dropdown');
        var $menuElementDropdownList = $('.mainNavigation__dropdown ul');

        $hamburger.on("click", function() {
            $menu.slideToggle(300);
            console.log("work");
        });
        $menuElements.on("click", function() {
            $menuElements.removeClass("mainNavigation__element--active");
            $(this).addClass("mainNavigation__element--active");
        });
        $menuElementDropdown.on("click", function() {
            $menuElementDropdownList.slideToggle(300);
        });
    }
});
