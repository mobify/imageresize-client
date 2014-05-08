(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['selectorLibrary','resizeImages'], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('selectorLibrary'), require('resizeImages'));
    } else {
        // Browser globals (root is window)
        root.ResizeImages = factory(root.$, root.ResizeImages);
    }
}(this, function ($, ResizeImages) {
    function resizeImages(opts) {
        if(opts === undefined) {
            opts = {};
        }
        var imgs = this.filter('img').add(this.find('img')).toArray();
        return $(ResizeImages.resize.call(window, imgs, opts));
    }
    $.fn.resizeImages = resizeImages;
    return ResizeImages;
}));
