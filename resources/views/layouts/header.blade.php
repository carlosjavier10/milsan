<!-- ############################################################################## -->
<!-- Top Background Image Wrapper -->
<div class="bgded overlay" style="background-image:url(' {{ asset('/images/backgrounds/01.png') }} ');">
  <!-- ############################################################################## -->

@include('layouts.topbar')
  <!-- ############################################################################## -->
  <!-- ############################################################################## -->
  <!-- ############################################################################## -->
  <div class="wrapper row1">
    <header id="header" class="hoc clear">
      <div id="logo" class="fl_left">
        <!-- ############################################################################## -->
        <div class="logoms">
        <a href="#"> <img src=" {{ asset('/images/MSarquitecta logo Horizontal.png ') }} "> </a>
        </div>
        <!-- ############################################################################## -->
      </div>
      @include('layouts.nav-menu')
    </header>
  </div>
  <!-- ############################################################################## -->
  <!-- ############################################################################## -->
  <!-- ############################################################################## -->
  <div id="pageintro" class="hoc clear">
    <!-- ############################################################################## -->
    <article>
      <h3 class="heading">Finibus dictum lobortis</h3>
      <p>Libero sed ullamcorper nibh dignissim et curabitur cursus scelerisque metus sit amet sodales justo auctor sit amet proin quis lacus non nisi.</p>
      <footer>
        <ul class="nospace inline pushright">
          <li><a class="btn" href="#">Pharetra etiam</a></li>
          <li><a class="btn inverse" href="#">Sagittis massa</a></li>
        </ul>
      </footer>
    </article>
    <!-- ############################################################################## -->
  </div>
  <!-- ############################################################################## -->
</div>
<!-- End Top Background Image Wrapper -->