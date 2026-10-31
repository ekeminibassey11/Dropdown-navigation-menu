const featuresButton = document.getElementById('features-btn');
const featuresMenu = document.getElementById('features');
const featuresArrow=featuresButton.querySelector('.arrow');

const companyButton = document.getElementById('company-btn');
const companyMenu= document.getElementById('company');
const companyArrow= companyButton.querySelector('.arrow');

// to close the menu
function closeFeatures(){
    featuresMenu.classList.add('hidden');
    featuresArrow.classList.remove('rotate-180');
}

function closeCompany(){
    companyMenu.classList.add('hidden');
    companyArrow.classList.remove('rotate-180');
}

// click features, close company, then flip features
featuresButton.addEventListener('click', function (event) {
    event.stopPropagation();
    closeCompany();
    featuresMenu.classList.toggle('hidden');
    featuresArrow.classList.toggle('rotate-180');
});

//click company, close features, then flip features
companyButton.addEventListener('click', function(event){
    event.stopPropagation();
    closeFeatures();
    companyMenu.classList.toggle('hidden');
    companyArrow.classList.toggle('rotate-180');
});

//click anywhere else, close both
document.addEventListener('click', function(){
    closeFeatures();
    closeCompany();
});

const menuButton=document.getElementById('menu-btn');
const mobileMenu=document.getElementById('mobile-menu');
const menuIcon=document.getElementById('menu-icon');

menuButton.addEventListener('click', function(){
    const isHidden= mobileMenu.classList.toggle('hidden');
    menuIcon.src=isHidden ? 'icon-menu.svg' : 'icon-close-menu.svg'
})