// show menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
};

showMenu('nav-toggle', 'nav-menu');

// active and remove menu
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    // active link
    navLink.forEach((link) => link.classList.remove('active'));
    this.classList.add('active');

    //li를 클릭할때는 show가 활성화 되어있을텐데
    //class를 지워주기
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}

navLink.forEach((link) => link.addEventListener('click', linkAction));
