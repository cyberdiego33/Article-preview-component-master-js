`use strict`;

const hidden = function() {
    document.querySelector('.socials').classList.toggle('hidden');
};

const shareIcon = document.querySelector('.share-icon');

shareIcon.addEventListener('click', function () {
    hidden();
});

const shareIcon2 = document.querySelector('.share-icon2');

shareIcon2.addEventListener('click', function () {
    hidden();
});