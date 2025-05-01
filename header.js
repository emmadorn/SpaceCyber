let header = `
    <nav class="navbar">
        <div class="logo">
            <h2><a id="home-link" class="links logo-heading" href="/">Space Cyber</a></h2>
        </div>
        <div class="menu">
            <ul class = "menu-list">
                <li class="menu-list-items">
                    <a id="home-link" class="links" href="/">
                        Home
                    </a>
                </li>
                <li class="menu-list-items">
                    <a id="nos3-link" class="links" href="nos3.html">
                        NOS3
                    </a>
                </li>
                <li class="menu-list-items">
                    <a id="cfs-link" class="links" href="cfs.html">
                        cFS
                    </a>
                </li>
                <li class="menu-list-items">
                    <a id="other-link" class="links" href="other.html">
                        Other Resources
                    </a>
                </li>
            </ul>
        </div>
    </nav>
`;
document.getElementById("page-header").innerHTML = header;