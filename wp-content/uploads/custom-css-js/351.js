<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
jQuery(window).on("scroll", function() { 
    if(jQuery(window).scrollTop() > 80) { 
        jQuery(".my-header, .elementskit-navbar-nav, .logo-1-black, .logo-2-white").addClass("active"); 
      //if browser window will scroll > 80 pixels, then the final CSS class will be .my-header.active, .elementskit-navbar-nav.active, .logo-1-black.active, .logo-2-white.active. 
    } else { 
       
      jQuery(".my-header, .elementskit-navbar-nav, .logo-1-black, .logo-2-white").removeClass("active"); 
      // If above condition (scroll>80pixels) is not met, then CSS become .my-header, .elementskit-navbar-nav, .logo-1-black, .logo-2-white. 
    } 
}); 


</script>
<!-- end Simple Custom CSS and JS -->
