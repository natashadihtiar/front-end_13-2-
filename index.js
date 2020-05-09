$(document).ready(function() {
    if (location.hash !== "") {
        const currentLoc = location.hash;
        $('.data').attr('hidden', true);
        $(currentLoc).removeAttr('hidden');
    }

    $('.button').click(function () {
        const curTab = $(this).attr('data-tab');
        location.hash = curTab;
        $('.data').attr('hidden', true);
        $(curTab).removeAttr('hidden');
    });
});