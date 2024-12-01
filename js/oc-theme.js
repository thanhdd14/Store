
jQuery('.js-scroll').click(function(e) {
    jQuery('html,body').animate({ scrollTop: jQuery(this.hash).offset().top }, 700);
    return false;
    e.preventDefault();
});

new ScrollHint('.js-table', {
    suggestiveShadow: true,
    remainingTime: 5000,
    i18n: {
        scrollable: 'スクロールできます',
    },
});



