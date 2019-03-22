export class App {
    constructor() {
        this.main();
    }

    main = () => {
        $(function () {
            // real logic starts here
          
            var wrapperParent = $('.po-wrapper');
            var wrapper = $('.po-wrapper-inner');
            var positionItems = wrapper.find('.po-position');
            var filter = "";
            $(".po-category-button").click(function () {
              // Check for active states
              $(".po-category-button").each(function () {
                $(this).removeClass("co-active");
              });
              $(this).addClass("co-active"); // logic to do filtering
          
              var newFilter = $(this).data("filter");
              if (newFilter === filter) return;
              filter = newFilter;
              wrapperParent.css('min-height', wrapperParent.height() + 'px');
              wrapper.css('opacity', 0);
              setTimeout(function () {
                positionItems.each(function () {
                  var filterElems = $(this).data("filterelem");
                  $(this).css('display', filter === "nofilter" || filterElems.find(function (elem: any) {
                    return elem === filter;
                  }) ? 'inline-block' : 'none');
                }); // re-get odds
          
                getOdds($(".po-position"));
                wrapperParent.css('min-height', wrapper.height() + 'px');
                setTimeout(function () {
                  wrapper.css('opacity', 1);
                }, 400);
              }, 400);
            }); // Handling of even / odds
          
            getOdds($(".po-position"));
          
            function getOdds(elements: any) {
              positionItems.removeClass('po-odd');
          
              Array.from(elements).filter(function (el: HTMLElement) {
                return el.style.display !== 'none';
              }).forEach(function (el, i) {
                // Removed and solved differently because the second parameter of .toggle
                // doesn't work in IE11
                //el.classList.toggle('po-odd', i % 2 === 0);
          
                if (i % 2 === 0) 
                  $(el).toggleClass('po-odd');
              });
            }
          });
    }
}
