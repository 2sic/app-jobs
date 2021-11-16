// so it can be called from the HTML when content re-initializes dynamically
const winAny = (window as any)
winAny.appJobs2 ??= {}
winAny.appJobs2.init ??= initAppJobs2

function initAppJobs2({ domAttribute } : { domAttribute: string }) {

}

// export class App {
//     constructor(moduleid: number) {
//         this.main(moduleid);
//     }

//     main(moduleid: number) {
//         const _this = this;

//         // First, check if Array.find() is supportet, if not, use a polyfill.
//         new PolyFills();

//         // Build the app-wrapper, so this code only uses elements from this module.
//         const appWrapper = `.app-${moduleid}`;

//         // Define the crucial wrappers, so we can use them later on in the code.
//         const wrapperParent = $(`${appWrapper} .po-wrapper`);
//         const wrapper = $(`${appWrapper} .po-wrapper-inner`);
//         const positionItems = wrapper.find('.po-position');
//         let filter = '';

//         $(`${appWrapper} .po-category-button`).click(function () {
//             // This checks if the current element has an active state.
//             $('.po-category-button').each(function () {
//                 $(this).removeClass('active');
//             });
//             $(this).addClass('active');

//             // This code is responsible for the filtering of the jobs
//             var newFilter = $(this).data('filter');

//             // Stop if clicked on the same filter as the one that is currently active.
//             if (newFilter === filter) return;

//             filter = newFilter;

//             wrapperParent.css('min-height', wrapperParent.height() + 'px');
//             wrapper.css('opacity', 0);

//             setTimeout(function () {
//                 positionItems.each(function () {
//                     var filterElems = $(this).data('filterelem');
//                     $(this).css('display', filter === 'nofilter' || filterElems.find(function (elem: string) {
//                         return elem === filter;
//                     }) ? 'inline-block' : 'none');
//                 });

//                 _this.getOdds($(`${appWrapper} .po-position`), positionItems);

//                 wrapperParent.css('min-height', wrapper.height() + 'px');
//                 setTimeout(() => {
//                     wrapper.css('opacity', 1);
//                 }, 400);
//             }, 400);
//         });

//         _this.getOdds($(`${appWrapper} .po-position`), positionItems);
//     }

//     getOdds(elements: JQuery<HTMLElement>, positionItems: JQuery<HTMLElement>) {
//         positionItems.removeClass('po-odd');

//         Array.from(elements).filter((el: HTMLElement) => {
//             return el.style.display !== 'none';
//         }).forEach((el, i) => {
//             /*
//                 Removed classList.toggle and solved differently because the second parameter of .toggle is not supported in IE11.
//                 If your application does not have to support IE11, it is recommended that you remove the bottom code, and use the
//                 code below in this comment.
                
//                 el.classList.toggle('po-odd', i % 2 === 0);
//             */

//             if (i % 2 === 0)
//                 $(el).toggleClass('po-odd');
//         });
//     }
// }
