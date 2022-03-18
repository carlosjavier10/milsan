            <!-- Sidebar -->
            <div id="tmSideBar" class="col-xl-3 col-lg-4 col-md-12 col-sm-12 sidebar">

                <button id="tmMainNavToggle" class="menu-icon">&#9776;</button>

                <div class="inner">



                    <nav id="tmMainNav" class="tm-main-nav">
                        <div class="menu-img">
                            <a href="#intro" style="background-image: initial;" data-bg-img="constructive_bg_01.jpg" data-page="#tm-section-1">
                                <img src="{{ asset('/images/logo_header_white 300x78.png') }}">
                            </a>
                        </div>
                        <ul>
                            <li>

                                <div class="tst">
                                    <a href="#intro" id="tmNavLink1" class="scrolly active" data-bg-img="constructive_bg_01.jpg" data-page="#tm-section-1">

                                        <i class="fas fa-home tm-nav-fa-icon"></i>
                                        <span> {{__('messages.home')}} </span>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="tst">
                                    <a href="#products" id="tmNavLink2" class="scrolly" data-bg-img="constructive_bg_02.jpg" data-page="#tm-section-2" data-page-type="carousel">
                                        <i class="fas fa-map tm-nav-fa-icon"></i>
                                        <span>Galeria</span>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="tst">
                                    <a href="#company" class="scrolly" data-bg-img="constructive_bg_03.jpg" data-page="#tm-section-3">
                                        <i class="fas fa-users tm-nav-fa-icon"></i>
                                        <span>Sobre MSArquitecta</span>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="tst">
                                    <a href="#contact" class="scrolly" data-bg-img="constructive_bg_04.jpg" data-page="#tm-section-4">
                                        <i class="fas fa-comments tm-nav-fa-icon"></i>
                                        <span>Contacto</span>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <a href="{{ url('locale/es') }}" class="lang-button"> <img src="{{ asset('/images/es.png') }}"> </a>
                                <a href="{{ url('locale/en') }}" class="lang-button"> <img src="{{ asset('/images/en.png') }}"> </a>

                            </li>
                        </ul>
                    </nav>
                </div>




            </div>