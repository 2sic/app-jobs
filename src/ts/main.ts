import { PolyFills } from './components/array_find';

export class App {
    constructor(moduleid: number) {
        this.main(moduleid);
    }

    main = (moduleid: number) => {
        $(function () {
            // First, check if Array.find() is supportet, if not, use a polyfill.
            new PolyFills();

            // Build the app-wrapper, so this code only uses elements from this module.
            const appWrapper = `.app-${moduleid}`;

            // Define the crucial wrappers, so we can use them later on in the code.
            var wrapperParent = $(`${appWrapper} .po-wrapper`);
            var wrapper = $(`${appWrapper} .po-wrapper-inner`);
            var positionItems = wrapper.find('.po-position');
            var filter = '';

            $(`${appWrapper} .po-category-button`).click(function () {
                // This checks if the current element has an active state.
                $('.po-category-button').each(function () {
                    $(this).removeClass('co-active');
                });
                $(this).addClass('co-active');

                // This code is responsible for the filtering of the jobs
                var newFilter = $(this).data('filter');

                // Stop if clicked on the same filter as the one that is currently active.
                if (newFilter === filter) return;

                filter = newFilter;

                wrapperParent.css('min-height', wrapperParent.height() + 'px');
                wrapper.css('opacity', 0);

                setTimeout(function () {
                    positionItems.each(function () {
                        var filterElems = $(this).data('filterelem');
                        $(this).css('display', filter === 'nofilter' || filterElems.find(function (elem: any) {
                            return elem === filter;
                        }) ? 'inline-block' : 'none');
                    });

                    getOdds($('.po-position'));
                    wrapperParent.css('min-height', wrapper.height() + 'px');
                    setTimeout(function () {
                        wrapper.css('opacity', 1);
                    }, 400);
                }, 400);
            });

            getOdds($('.po-position'));

            function getOdds(elements: any) {
                positionItems.removeClass('po-odd');

                Array.from(elements).filter(function (el: HTMLElement) {
                    return el.style.display !== 'none';
                }).forEach(function (el, i) {
                    /*
                      Removed classList.toggle and solved differently because the second parameter of .toggle is not supported in IE11.
                      If your application does not have to support IE11, it is recommended that you remove the bottom code, and use the
                      code below in this comment.
                      
                      el.classList.toggle('po-odd', i % 2 === 0);
                    */

                    if (i % 2 === 0)
                        $(el).toggleClass('po-odd');
                });
            }
        });
    }
}
