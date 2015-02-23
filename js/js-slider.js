(function($) {
 
    $.fn.slider = function() {
        return this.each(function() {
            var slider = this;
            slider.innerHTML += "<div class=\"slide-left slide-button\">\
                                    <div class=\"arrow-left\"></div>\
                                 </div>\
                                 <div class=\"slide-right slide-button\">\
                                    <div class=\"arrow-right\"></div>\
                                 </div>";
            var slides = $(slider).find(".slide");
            var left = $(slider).find(".slide-left");
            var right = $(slider).find(".slide-right");
            
            var first = 0;
            var last = slides.length - 1;
            var current = first;
            var next = 1;
            var prev = last;
            
            $(slides[0]).addClass("active");
            
            $(right).click(function(evt) {
                $(slides[current]).css("opacity", 0);
                $(slides[next]).css("opacity", 1);
                current = next;
                next = (current == last) ? first : ++next;
                prev = (current == first) ? last : ++prev;
                if(prev > last) prev = first;
            });
            
            $(left).click(function(evt) {
                $(slides[current]).css("opacity", 0);
                $(slides[prev]).css("opacity", 1);
                current = prev;
                next = (current == last) ? first : --next;
                prev = (current == first) ? last : --prev;
                if(next < first) next = last;
            });
        });
    };
    
    return this;
 
}(jQuery));
