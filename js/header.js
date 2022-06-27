const template = document.createElement('template')

template.innerHTML=`
    <header class="header">
    <svg class="logo" xmlns="http://www.w3.org/2000/svg"
        xml:space="preserve"
        baseProfile="tiny"
        overflow="visible"
        version="1.2"
        viewBox="0 0 250 250">
        <path fill="#010101" d="M250 171v26.4h-92.1V250H0V118.5h131.5V49.2L79 84.2l-52.6-35v42.9H0V0l79 52.6L157.9 0v144.7H26.4v78.9h105.1v-26.2H65.8V171z"/>
    </svg>
    <button class="nav-toggle"><span class="hamburger"></span></button>
    <nav class="nav">
        <ul class="nav__list">
            <li class="nav__item"><a href="index.html" class="nav__link">Work</a></li>
            <li class="nav__item"><a href="#" class="nav__link">About</a></li>
            <li class="nav__item"><a href="contact.html" class="nav__link">Contact</a></li>
        </ul>
    </nav>
    </header>
    <div class="header-dummy"></div>
`

document.body.appendChild(template.content)