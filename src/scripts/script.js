$(document).ready(function() {
    $('.btn_mobile').on('click', function() {
       $('.mobile_nav_list_container').toggleClass('active');
       $('.btn_mobile').find('i ').toggleClass('fa-x');
    });
});