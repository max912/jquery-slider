# jquery-slider
Very simple jQuery image slider. Enjoy

#HTML
This is the HTML markup:

```
<head>
    <link rel="stylesheet" type="text/css" href="css/js-slider.css" /> <!-- Include CSS -->
    <script type="text/javascript" src="js/jquery-2.1.1.min.js"></script> <!-- Include jQuery -->
    <script type="text/javascript" src="js/js-slider.js"></script> <!-- Include jQuery slider -->
</head>
    
<body> 
   
    <div id="mySlider" class="slider"> <!-- Outer div with "slider" class -->
    
        <div class="slides"> <!-- Slides wrapper with "slides" class -->
    
            <div class="slide"> <!-- Slide elements with "slide" class and img inside -->
                <img alt="" src="" />
            </div>
            <div class="slide">
                <img alt="" src="" />
            </div>
            <div class="slide">
                <img alt="" src="" />
            </div>
            <div class="slide">
                <img alt="" src="" />
            </div>
            <div class="slide">
                <img alt="" src="" />
            </div>
            
        </div> <!-- /slides -->
    
    </div> <!-- /slider -->
```
#CSS
You have to set ".slider" width and height in the CSS.

#Javascript
Call ".slider()" method:
    
```
$("#mySlider").slider();
```
