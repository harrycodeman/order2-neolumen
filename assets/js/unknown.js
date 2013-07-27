(function (e) {
    e.fn.matchHeight = function (f) {
        var a = 0;
        this.each(function () {
            a = Math.max(a, e(this).outerHeight())
        });
        f && (a = Math.max(a, f));
        return this.each(function () {
            var c = e(this), b = c.outerHeight() - c.height();
            c.css("min-height", a - b + "px")
        })
    };
    e.fn.matchWidth = function (f) {
        return this.each(function () {
            var a = e(this), c = a.children(f), b = 0;
            c.width(function (d, f) {
                return d < c.length - 1 ? (b += f, f) : a.width() - b
            })
        })
    };
    e.fn.morph = function (f, a, c, b, d) {
        var h = {duration: 500, transition: "swing", ignore: null}, c = e.extend(h, c), b = e.extend(h, b), g = c.ignore ? e(c.ignore) : null;
        g && (g = g.toArray());
        return this.each(function () {
            var h = e(this);
            if (!(g && e.inArray(this, g) != -1)) {
                var j = d ? h.find(d).css(a) : [h.css(a)];
                h.bind({mouseenter: function () {
                    e(j).each(function () {
                        var b = e(this).stop();
                        f["background-color"] && a["background-color"] && b.attr("background-color") == "transparent" && b.attr("background-color", a["background-color"]);
                        b.animate(f, c.duration, c.transition)
                    })
                }, mouseleave: function () {
                    e(j).each(function () {
                        e(this).stop().animate(a, b.duration, b.transition)
                    })
                }})
            }
        })
    };
    e.fn.smoothScroller = function (f) {
        f = e.extend({duration: 1E3, transition: "easeOutExpo"}, f);
        return this.each(function () {
            e(this).bind("click", function () {
                var a = this.hash, c = e(this.hash).offset().top, b = window.location.href.replace(window.location.hash, ""), d = e.browser.opera ? "html:not(:animated)" : "html:not(:animated),body:not(:animated)";
                if (b + a == this)return e(d).animate({scrollTop: c}, f.duration, f.transition, function () {
                    window.location.hash = a.replace("#", "")
                }), false
            })
        })
    };
    e.fn.backgroundFx = function (f) {
        f = e.extend({duration: 9E3, transition: "swing", colors: ["#FFFFFF", "#999999"]}, f);
        return this.each(function () {
            var a = e(this), c = 0, b = f.colors;
            window.setInterval(function () {
                a.stop().animate({"background-color": b[c]}, f.duration, f.transition);
                c = c + 1 >= b.length ? 0 : c + 1
            }, f.duration * 2)
        })
    }
})(jQuery);
(function (e) {
    function f(c) {
        var b;
        return c && c.constructor == Array && c.length == 3 ? c : (b = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(c)) ? [parseInt(b[1]), parseInt(b[2]), parseInt(b[3])] : (b = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(c)) ? [parseFloat(b[1]) * 2.55, parseFloat(b[2]) * 2.55, parseFloat(b[3]) * 2.55] : (b = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(c)) ? [parseInt(b[1], 16), parseInt(b[2], 16), parseInt(b[3], 16)] : (b = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(c)) ? [parseInt(b[1] + b[1], 16), parseInt(b[2] + b[2], 16), parseInt(b[3] + b[3], 16)] : /rgba\(0, 0, 0, 0\)/.exec(c) ? a.transparent : a[e.trim(c).toLowerCase()]
    }

    e.each("backgroundColor,borderBottomColor,borderLeftColor,borderRightColor,borderTopColor,color,outlineColor".split(","), function (a, b) {
        e.fx.step[b] = function (a) {
            if (!a.colorInit) {
                var c;
                c = a.elem;
                var g = b, i;
                do {
                    i = e.curCSS(c, g);
                    if (i != "" && i != "transparent" || e.nodeName(c, "body"))break;
                    g = "backgroundColor"
                } while (c = c.parentNode);
                c = f(i);
                a.start = c;
                a.end = f(a.end);
                a.colorInit = true
            }
            a.elem.style[b] = "rgb(" + [Math.max(Math.min(parseInt(a.pos * (a.end[0] - a.start[0]) + a.start[0]), 255), 0), Math.max(Math.min(parseInt(a.pos * (a.end[1] - a.start[1]) + a.start[1]), 255), 0), Math.max(Math.min(parseInt(a.pos * (a.end[2] - a.start[2]) + a.start[2]), 255), 0)].join(",") + ")"
        }
    });
    var a = {aqua: [0, 255, 255], azure: [240, 255, 255], beige: [245, 245, 220], black: [0, 0, 0], blue: [0, 0, 255], brown: [165, 42, 42], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgrey: [169, 169, 169], darkgreen: [0, 100, 0], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkviolet: [148, 0, 211], fuchsia: [255, 0, 255], gold: [255, 215, 0], green: [0, 128, 0], indigo: [75, 0, 130], khaki: [240, 230, 140], lightblue: [173, 216, 230], lightcyan: [224, 255, 255], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightyellow: [255, 255, 224], lime: [0, 255, 0], magenta: [255, 0, 255], maroon: [128, 0, 0], navy: [0, 0, 128], olive: [128, 128, 0], orange: [255, 165, 0], pink: [255, 192, 203], purple: [128, 0, 128], violet: [128, 0, 128], red: [255, 0, 0], silver: [192, 192, 192], white: [255, 255, 255], yellow: [255, 255, 0], transparent: [255, 255, 255]}
})(jQuery);
(function (e) {
    e.easing.jswing = e.easing.swing;
    e.extend(e.easing, {def: "easeOutQuad", swing: function (f, a, c, b, d) {
        return e.easing[e.easing.def](f, a, c, b, d)
    }, easeInQuad: function (f, a, c, b, d) {
        return b * (a /= d) * a + c
    }, easeOutQuad: function (f, a, c, b, d) {
        return-b * (a /= d) * (a - 2) + c
    }, easeInOutQuad: function (f, a, c, b, d) {
        return(a /= d / 2) < 1 ? b / 2 * a * a + c : -b / 2 * (--a * (a - 2) - 1) + c
    }, easeInCubic: function (f, a, c, b, d) {
        return b * (a /= d) * a * a + c
    }, easeOutCubic: function (f, a, c, b, d) {
        return b * ((a = a / d - 1) * a * a + 1) + c
    }, easeInOutCubic: function (f, a, c, b, d) {
        return(a /= d / 2) < 1 ? b / 2 * a * a * a + c : b / 2 * ((a -= 2) * a * a + 2) + c
    }, easeInQuart: function (f, a, c, b, d) {
        return b * (a /= d) * a * a * a + c
    }, easeOutQuart: function (f, a, c, b, d) {
        return-b * ((a = a / d - 1) * a * a * a - 1) + c
    }, easeInOutQuart: function (f, a, c, b, d) {
        return(a /= d / 2) < 1 ? b / 2 * a * a * a * a + c : -b / 2 * ((a -= 2) * a * a * a - 2) + c
    }, easeInQuint: function (f, a, c, b, d) {
        return b * (a /= d) * a * a * a * a + c
    }, easeOutQuint: function (f, a, c, b, d) {
        return b * ((a = a / d - 1) * a * a * a * a + 1) + c
    }, easeInOutQuint: function (f, a, c, b, d) {
        return(a /= d / 2) < 1 ? b / 2 * a * a * a * a * a + c : b / 2 * ((a -= 2) * a * a * a * a + 2) + c
    }, easeInSine: function (f, a, c, b, d) {
        return-b * Math.cos(a / d * (Math.PI / 2)) + b + c
    }, easeOutSine: function (f, a, c, b, d) {
        return b * Math.sin(a / d * (Math.PI / 2)) + c
    }, easeInOutSine: function (f, a, c, b, d) {
        return-b / 2 * (Math.cos(Math.PI * a / d) - 1) + c
    }, easeInExpo: function (f, a, c, b, d) {
        return a == 0 ? c : b * Math.pow(2, 10 * (a / d - 1)) + c
    }, easeOutExpo: function (f, a, c, b, d) {
        return a == d ? c + b : b * (-Math.pow(2, -10 * a / d) + 1) + c
    }, easeInOutExpo: function (f, a, c, b, d) {
        return a == 0 ? c : a == d ? c + b : (a /= d / 2) < 1 ? b / 2 * Math.pow(2, 10 * (a - 1)) + c : b / 2 * (-Math.pow(2, -10 * --a) + 2) + c
    }, easeInCirc: function (f, a, c, b, d) {
        return-b * (Math.sqrt(1 - (a /= d) * a) - 1) + c
    }, easeOutCirc: function (f, a, c, b, d) {
        return b * Math.sqrt(1 - (a = a / d - 1) * a) + c
    }, easeInOutCirc: function (f, a, c, b, d) {
        return(a /= d / 2) < 1 ? -b / 2 * (Math.sqrt(1 - a * a) - 1) + c : b / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + c
    }, easeInElastic: function (f, a, c, b, d) {
        var f = 1.70158, h = 0, e = b;
        if (a == 0)return c;
        if ((a /= d) == 1)return c + b;
        h || (h = d * 0.3);
        e < Math.abs(b) ? (e = b, f = h / 4) : f = h / (2 * Math.PI) * Math.asin(b / e);
        return-(e * Math.pow(2, 10 * (a -= 1)) * Math.sin((a * d - f) * 2 * Math.PI / h)) + c
    }, easeOutElastic: function (f, a, c, b, d) {
        var f = 1.70158, e = 0, g = b;
        if (a == 0)return c;
        if ((a /= d) == 1)return c + b;
        e || (e = d * 0.3);
        g < Math.abs(b) ? (g = b, f = e / 4) : f = e / (2 * Math.PI) * Math.asin(b / g);
        return g * Math.pow(2, -10 * a) * Math.sin((a * d - f) * 2 * Math.PI / e) + b + c
    }, easeInOutElastic: function (f, a, c, b, d) {
        var f = 1.70158, e = 0, g = b;
        if (a == 0)return c;
        if ((a /= d / 2) == 2)return c + b;
        e || (e = d * 0.3 * 1.5);
        g < Math.abs(b) ? (g = b, f = e / 4) : f = e / (2 * Math.PI) * Math.asin(b / g);
        return a < 1 ? -0.5 * g * Math.pow(2, 10 * (a -= 1)) * Math.sin((a * d - f) * 2 * Math.PI / e) + c : g * Math.pow(2, -10 * (a -= 1)) * Math.sin((a * d - f) * 2 * Math.PI / e) * 0.5 + b + c
    }, easeInBack: function (f, a, c, b, d, e) {
        e == void 0 && (e = 1.70158);
        return b * (a /= d) * a * ((e + 1) * a - e) + c
    }, easeOutBack: function (f, a, c, b, d, e) {
        e == void 0 && (e = 1.70158);
        return b * ((a = a / d - 1) * a * ((e + 1) * a + e) + 1) + c
    }, easeInOutBack: function (f, a, c, b, d, e) {
        e == void 0 && (e = 1.70158);
        return(a /= d / 2) < 1 ? b / 2 * a * a * (((e *= 1.525) + 1) * a - e) + c : b / 2 * ((a -= 2) * a * (((e *= 1.525) + 1) * a + e) + 2) + c
    }, easeInBounce: function (f, a, c, b, d) {
        return b - e.easing.easeOutBounce(f, d - a, 0, b, d) + c
    }, easeOutBounce: function (e, a, c, b, d) {
        return(a /= d) < 1 / 2.75 ? b * 7.5625 * a * a + c : a < 2 / 2.75 ? b * (7.5625 * (a -= 1.5 / 2.75) * a + 0.75) +
            c : a < 2.5 / 2.75 ? b * (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) + c : b * (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375) + c
    }, easeInOutBounce: function (f, a, c, b, d) {
        return a < d / 2 ? e.easing.easeInBounce(f, a * 2, 0, b, d) * 0.5 + c : e.easing.easeOutBounce(f, a * 2 - d, 0, b, d) * 0.5 + b * 0.5 + c
    }})
})(jQuery);
(function (c) {
    var a = function () {
    };
    c.extend(a.prototype, {name: "accordionMenu", options: {mode: "default", display: null, collapseall: false}, initialize: function (a, b) {
        var b = c.extend({}, this.options, b), f = a.find("ul.accordion"), g = a.find("li.toggler");
        if (g.length) {
            var i = [];
            g.each(function (a) {
                var h = c(this), e = h.find("span:first"), d = c(f[a]).parent().css("overflow", "hidden"), j = d.height();
                i.push(d);
                h.hasClass("active") || a == b.display ? d.show() : d.hide().css("height", 0);
                e.bind("click", function () {
                    b.collapseall && (c(i).each(function () {
                        c(this).hide().css("height", 0)
                    }), g.each(function (b) {
                        b != a && c(this).removeClass("active").find("span:first").removeClass("active")
                    }));
                    b.mode == "slide" ? h.hasClass("active") ? d.stop().animate({height: 0}, function () {
                        d.hide()
                    }) : d.stop().show().animate({height: j}) : h.hasClass("active") ? d.hide().css("height", 0) : d.show().css("height", j);
                    e.toggleClass("active");
                    h.toggleClass("active")
                })
            })
        }
    }});
    c.fn[a.prototype.name] = function () {
        var e = arguments, b = e[0] ? e[0] : null;
        return this.each(function () {
            var f = c(this);
            if (a.prototype[b] && f.data(a.prototype.name) && b != "initialize")f.data(a.prototype.name)[b].apply(f.data(a.prototype.name), Array.prototype.slice.call(e, 1)); else if (!b || c.isPlainObject(b)) {
                var g = new a;
                a.prototype.initialize && g.initialize.apply(g, c.merge([f], e));
                f.data(a.prototype.name, g)
            } else c.error("Method " + b + " does not exist on jQuery." + a.name)
        })
    }
})(jQuery);
(function (a) {
    var f = function () {
    };
    a.extend(f.prototype, {name: "dropdownMenu", options: {mode: "default", itemSelector: "li", firstLevelSelector: "li.level1", dropdownSelector: "ul", duration: 600, remainTime: 800, remainClass: "remain", transition: "easeOutExpo", withopacity: true, centerDropdown: false, reverseAnimation: false, fixWidth: false, fancy: null}, initialize: function (c, d) {
        this.options = a.extend({}, this.options, d);
        var b = this, h = null, f = false;
        this.menu = c;
        this.dropdowns = [];
        this.options.withopacity = a.browser.msie && parseFloat(a.browser.version) < 9 ? false : this.options.withopacity;
        if (this.options.fixWidth) {
            var p = 5;
            this.menu.children().each(function () {
                p += a(this).width()
            });
            this.menu.css("width", p)
        }
        this.menu.find(this.options.firstLevelSelector).each(function (d) {
            var k = a(this), g = k.find(b.options.dropdownSelector).css({overflow: "hidden"});
            if (g.length) {
                g.css("overflow", "hidden");
                var e = a("<div>").data("dpwidth", parseFloat(g.width())).data("dpheight", parseFloat(g.height())).css({overflow: "hidden"}).append("<div></div>"), c = e.find("div:first").css({"min-width": e.data("dpwidth"), "min-height": e.data("dpheight")});
                g.children().appendTo(c);
                e.appendTo(g);
                b.options.centerDropdown && g.css("margin-left", (parseFloat(g.css("width")) / 2 - k.width() / 2) * -1);
                b.dropdowns.push({dropdown: g, div: e, innerdiv: c})
            }
            k.bind({mouseenter: function () {
                f = true;
                b.menu.trigger("menu:enter", [k, d]);
                if (h) {
                    if (h.index == d)return;
                    h.item.removeClass(b.options.remainClass);
                    h.div.hide()
                }
                if (g.length) {
                    k.addClass(b.options.remainClass);
                    e.stop().show();
                    var a = e.data("dpwidth"), c = e.data("dpheight");
                    switch (b.options.mode) {
                        case"diagonal":
                            var i = {width: 0, height: 0}, a = {width: a, height: c};
                            if (b.options.withopacity)i.opacity = 0, a.opacity = 1;
                            e.css(i).animate(a, b.options.duration, b.options.transition);
                            break;
                        case"height":
                            i = {width: a, height: 0};
                            a = {height: c};
                            if (b.options.withopacity)i.opacity = 0, a.opacity = 1;
                            e.css(i).animate(a, b.options.duration, b.options.transition);
                            break;
                        case"width":
                            i = {width: 0, height: c};
                            a = {width: a};
                            if (b.options.withopacity)i.opacity = 0, a.opacity = 1;
                            e.css(i).animate(a, b.options.duration, b.options.transition);
                            break;
                        case"slide":
                            g.css({width: a, height: c});
                            e.css({width: a, height: c, "margin-top": c * -1}).animate({"margin-top": 0}, b.options.duration, b.options.transition);
                            break;
                        default:
                            i = {width: a, height: c};
                            a = {};
                            if (b.options.withopacity)i.opacity = 0, a.opacity = 1;
                            e.css(i).animate(a, b.options.duration, b.options.transition)
                    }
                    h = {item: k, div: e, index: d}
                } else h = active = null
            }, mouseleave: function (c) {
                if (c.srcElement && a(c.srcElement).hasClass("module"))return false;
                f = false;
                g.length ? window.setTimeout(function () {
                    if (!(f || e.css("display") == "none")) {
                        b.menu.trigger("menu:leave", [k, d]);
                        var a = function () {
                            k.removeClass(b.options.remainClass);
                            h = null;
                            e.hide()
                        };
                        if (b.options.reverseAnimation)switch (b.options.mode) {
                            case"diagonal":
                                var c = {width: 0, height: 0};
                                if (b.options.withopacity)c.opacity = 0;
                                e.stop().animate(c, b.options.duration, b.options.transition, function () {
                                    a()
                                });
                                break;
                            case"height":
                                c = {height: 0};
                                if (b.options.withopacity)c.opacity = 0;
                                e.stop().animate(c, b.options.duration, b.options.transition, function () {
                                    a()
                                });
                                break;
                            case"width":
                                c = {width: 0};
                                if (b.options.withopacity)c.opacity = 0;
                                e.stop().animate(c, b.options.duration, b.options.transition, function () {
                                    a()
                                });
                                break;
                            case"slide":
                                e.stop().animate({"margin-top": parseFloat(e.data("dpheight")) * -1}, b.options.duration, b.options.transition, function () {
                                    a()
                                });
                                break;
                            default:
                                c = {};
                                if (b.options.withopacity)c.opacity = 0;
                                e.stop().animate(c, b.options.duration, b.options.transition, function () {
                                    a()
                                })
                        } else a()
                    }
                }, b.options.remainTime) : b.menu.trigger("menu:leave")
            }})
        });
        if (this.options.fancy) {
            var j = a.extend({mode: "move", transition: "easeOutExpo", duration: 500, onEnter: null, onLeave: null}, this.options.fancy), l = this.menu.append('<div class="fancy bg1"><div class="fancy-1"><div class="fancy-2"><div class="fancy-3"></div></div></div></div>').find(".fancy:first").hide(), m = this.menu.find(".active:first"), n = null, o = function (b, a) {
                if (!a || !(n && b.get(0) == n.get(0)))l.stop().show().css("visibility", "visible"), j.mode == "move" ? !m.length && !a ? l.hide() : l.animate({left: b.position().left + "px", width: b.width() + "px"}, j.duration, j.transition) : a ? l.css({opacity: m ? 0 : 1, left: b.position().left + "px", width: b.width() + "px"}).animate({opacity: 1}, j.duration) : l.animate({opacity: 0}, j.duration), n = a ? b : null
            };
            this.menu.bind({"menu:enter": function (b, a, c) {
                o(a, true);
                if (j.onEnter)j.onEnter(a, c, l)
            }, "menu:leave": function (b, a, c) {
                o(m, false);
                if (j.onLeave)j.onLeave(a, c, l)
            }});
            m.length && j.mode == "move" && o(m, true)
        }
    }, matchHeight: function () {
        this.menu && (this.menu.find("li.level2 div.sub.htm"/*tpa=http://www.yootheme.com/demo/themes/wordpress/2011/spark/wp-content/themes/yoo_spark_wp/cache/li.level2 div.sub*/).each(function () {
            var c = a(this), d = c.parent().find("div.hover-box4:first"), b = Math.max(c.height(), d.height());
            a([c, d]).each(function () {
                this.css("height", b)
            })
        }), this._updateDimensions())
    }, matchUlHeight: function () {
        this.menu && (this.menu.find("div.dropdown-3").each(function () {
            var c = a(this).children(), d = 0;
            a(c).each(function () {
                d = Math.max(a(this).height(), d)
            });
            a(c).each(function () {
                a(this).css("height", d)
            })
        }), this._updateDimensions())
    }, _updateDimensions: function () {
        a(this.dropdowns).each(function (a, d) {
            d.div.stop().show().data({dpwidth: d.innerdiv.width(), dpheight: d.innerdiv.height()}).hide();
            d.dropdown.css({"min-width": d.div.data("dpwidth"), "min-height": d.div.data("dpheight")})
        })
    }});
    a.fn[f.prototype.name] = function () {
        var c = arguments, d = c[0] ? c[0] : null;
        return this.each(function () {
            var b = a(this);
            if (f.prototype[d] && b.data(f.prototype.name) && d != "initialize")b.data(f.prototype.name)[d].apply(b.data(f.prototype.name), Array.prototype.slice.call(c, 1)); else if (!d || a.isPlainObject(d)) {
                var h = new f;
                f.prototype.initialize && h.initialize.apply(h, a.merge([b], c));
                b.data(f.prototype.name, h)
            } else a.error("Method " + d + " does not exist on jQuery." + f.name)
        })
    }
})(jQuery);
(function (d) {
    var b = function () {
    };
    d.extend(b.prototype, {name: "follower", options: {activeClass: "active", hoveredClass: "isfollowing", slider: {"class": "fancyfollower", html: "<div></div>"}, effect: {transition: "easeOutBack", duration: 200}}, initialize: function (a, e) {
        this.options = d.extend({}, this.options, e);
        var c = this;
        a.css("position", "relative");
        this.current = null;
        d(a.children()).each(function () {
            d(this).bind({mouseenter: function () {
                c.slider.stop();
                c.slideTo(d(this), "enter")
            }, mouseleave: function () {
                c.slideTo(c.current, "leave")
            }, click: function () {
                c.setCurrent(d(this), true)
            }}).css({position: "relative"})
        });
        var b = a.children()[0].tagName.toLowerCase();
        a.append(d("<" + b + ">").addClass(this.options.slider["class"]).html(this.options.slider.html));
        this.slider = a.find(">" + b + ":last");
        this.setCurrent(a.find("." + this.options.activeClass + ":first"));
        if (this.current)this.startElement = this.current
    }, setCurrent: function (a, b) {
        if (a.length && !this.current) {
            var c = a.position();
            this.slider.css({left: c.left, width: a.width(), height: a.height(), top: c.top, opacity: 1});
            b ? this.slider.fadeIn() : this.slider.show()
        }
        this.current && this.current.removeClass(this.options.hoveredClass);
        if (a.length)this.current = a.addClass(this.options.hoveredClass);
        return this
    }, slideTo: function (a, b) {
        this.current || this.setCurrent(a);
        this.slider.stop().animate({left: a.position().left + "px", width: a.outerWidth() + "px", top: a.position().top + "px", height: a.outerHeight() + "px"}, this.options.effect.duration, this.options.effect.transition);
        this.isHovered = b == "leave" ? false : true;
        if (b == "leave" && !this.startElement) {
            var c = this;
            window.setTimeout(function () {
                if (!c.isHovered)c.slider.fadeOut(), c.current = false
            }, 200)
        } else this.slider.css("opacity", 1).fadeIn();
        return this
    }});
    d.fn[b.prototype.name] = function () {
        var a = arguments, e = a[0] ? a[0] : null;
        return this.each(function () {
            var c = d(this);
            if (b.prototype[e] && c.data(b.prototype.name) && e != "initialize")c.data(b.prototype.name)[e].apply(c.data(b.prototype.name), Array.prototype.slice.call(a, 1)); else if (!e || d.isPlainObject(e)) {
                var f = new b;
                b.prototype.initialize && f.initialize.apply(f, d.merge([c], a));
                c.data(b.prototype.name, f)
            } else d.error("Method " + e + " does not exist on jQuery." + b.name)
        })
    }
})(jQuery);
(function (d) {
    var c = function () {
    };
    d.extend(c.prototype, {name: "warpspotlight", options: {effect: "fade", duration: 300, transition: "swing", right: 300, left: 300, top: 300, bottom: 300, fade: 300}, initialize: function (c, e) {
        this.options = d.extend({}, this.options, e);
        var a = this;
        d(String(c.attr("class")).split(" ")).each(function (b, c) {
            if (d.inArray(c, ["right", "left", "top", "bottom", "fade"]) != -1)a.options.effect = c, a.options.duration = a.options[a.options.effect];
            if (c.match(/duration\-/gi))a.options.duration = c.split("-")[1]
        });
        this.element = c;
        this.slides = this.element.children();
        this.slides.each(function () {
            d(this).wrap("<div>")
        });
        this.slides = this.element.children();
        this.slides.each(function (a) {
            d(this).css({position: "absolute", width: "100%", visibility: a == 0 ? "visible" : "hidden"}).addClass("spotlight" + a)
        });
        this.element.css({position: "relative", overflow: "hidden", height: d(a.slides[0]).height()});
        var b = d(a.slides[1]);
        this.element.bind({mouseenter: function () {
            b.stop().css("visibility", "visible");
            switch (a.options.effect) {
                case"right":
                    b.css({right: b.width() * -1}).animate({right: 0}, a.options.duration, a.options.transition);
                    break;
                case"left":
                    b.css({left: b.width() * -1}).animate({left: 0}, a.options.duration, a.options.transition);
                    break;
                case"top":
                    b.css({left: 0, top: b.height() * -1}).animate({top: 0}, a.options.duration, a.options.transition);
                    break;
                case"bottom":
                    b.css({left: 0, bottom: b.height() * -1}).animate({bottom: 0});
                    break;
                default:
                    b.show().css({opacity: 0}).animate({opacity: 1}, a.options.duration, a.options.transition, function () {
                        if (d.browser.msie)b.get(0).filter = "", b.attr("style", String(b.attr("style")).replace(/alpha\(opacity=([\d.]+)\)/i, ""))
                    })
            }
        }, mouseleave: function () {
            b.stop();
            switch (a.options.effect) {
                case"right":
                    b.animate({right: b.width() * -1}, a.options.duration, a.options.transition);
                    break;
                case"left":
                    b.animate({left: b.width() * -1}, a.options.duration, a.options.transition);
                    break;
                case"top":
                    b.animate({top: b.height() * -1}, a.options.duration, a.options.transition);
                    break;
                case"bottom":
                    b.animate({bottom: b.height() * -1}, a.options.duration, a.options.transition);
                    break;
                default:
                    b.animate({opacity: 0}, a.options.duration, a.options.transition, function () {
                        b.hide()
                    })
            }
        }})
    }});
    d.fn[c.prototype.name] = function () {
        var f = arguments, e = f[0] ? f[0] : null;
        return this.each(function () {
            var a = d(this);
            if (c.prototype[e] && a.data(c.prototype.name) && e != "initialize")a.data(c.prototype.name)[e].apply(a.data(c.prototype.name), Array.prototype.slice.call(f, 1)); else if (!e || d.isPlainObject(e)) {
                var b = new c;
                c.prototype.initialize && b.initialize.apply(b, d.merge([a], f));
                a.data(c.prototype.name, b)
            } else d.error("Method " + e + " does not exist on jQuery." +
                c.name)
        })
    }
})(jQuery);
(function ($) {
    (function () {
        if (parseFloat(jQuery.fn.jquery) < 1.5)return;
        var $div = $('<div style="background-position: 3px 5px">');
        $.support.backgroundPosition = $div.css('backgroundPosition') === "3px 5px" ? true : false;
        $.support.backgroundPositionXY = $div.css('backgroundPositionX') === "3px" ? true : false;
        $div = null;
        var xy = ["X", "Y"];

        function parseBgPos(bgPos) {
            var parts = bgPos.split(/\s/), values = {"X": parts[0], "Y": parts[1]};
            return values;
        }

        if (!$.support.backgroundPosition && $.support.backgroundPositionXY) {
            $.cssHooks.backgroundPosition = {get: function (elem, computed, extra) {
                return $.map(xy,function (l, i) {
                    return $.css(elem, "backgroundPosition" + l);
                }).join(" ");
            }, set: function (elem, value) {
                $.each(xy, function (i, l) {
                    var values = parseBgPos(value);
                    elem.style["backgroundPosition" + l] = values[l];
                });
            }};
        }
        if ($.support.backgroundPosition && !$.support.backgroundPositionXY) {
            $.each(xy, function (i, l) {
                $.cssHooks["backgroundPosition" + l] = {get: function (elem, computed, extra) {
                    var values = parseBgPos($.css(elem, "backgroundPosition"));
                    return values[l];
                }, set: function (elem, value) {
                    var values = parseBgPos($.css(elem, "backgroundPosition")), isX = l === "X";
                    elem.style.backgroundPosition = (isX ? value : values["X"]) + " " +
                        (isX ? values["Y"] : value);
                }};
                $.fx.step["backgroundPosition" + l] = function (fx) {
                    $.cssHooks["backgroundPosition" + l].set(fx.elem, fx.now + fx.unit);
                };
            });
        }
    })();
    $(document).bind('ready', function () {
        $('.menu-accordion').accordionMenu({mode: 'slide'});
        $('div.mod-line ul.menu.htm'/*tpa=http://www.yootheme.com/demo/themes/wordpress/2011/spark/wp-content/themes/yoo_spark_wp/cache/div.mod-line ul.menu*/).follower({effect: {transition: 'linear', duration: 200}})
        $('a[href="#page"]').smoothScroller({duration: 500});
        $('.warpspotlight').warpspotlight({fade: 300});
        var matchHeight = function () {
            $('#top > .horizontal div.deepest').matchHeight(20);
            $('#bottom > .horizontal div.deepest').matchHeight(20);
            $('#maintop > .horizontal div.deepest').matchHeight(20);
            $('#mainbottom > .horizontal div.deepest').matchHeight(20);
            $('#contenttop > .horizontal div.deepest').matchHeight(20);
            $('#contentbottom > .horizontal div.deepest').matchHeight(20);
            $('#middle, #left, #right').matchHeight(20);
            $('#mainmiddle, #contentleft, #contentright').matchHeight(20);
        };
        var animateBackgroungPos = function (selector, options) {
            if ((navigator.userAgent.match(/(iPhone|iPod|iPad)/i))) {
                return;
            }
            var elements = $(selector);
            var options = $.extend({transition: 'linear', repeat: 5, duration: 5000, direction: 1, width: 558}, options);
            var timer = false;

            function animate() {
                if (options.repeat == -1) {
                    clearInterval(timer);
                    return;
                }
                $(elements).each(function (i) {
                    $(this).stop().css({'background-position-x': "0px", 'background-position-y': "0px"}).animate({'background-position-x': (options.direction * options.width) + "px", 'background-position-y': "0px"}, options.duration, options.transition);
                });
                options.repeat--;
                if (options.repeat == 0) {
                    options.transition = 'easeOutSine';
                    options.duration = 2 * options.duration;
                }
            }

            if (options.repeat) {
                timer = window.setInterval(animate, options.duration);
                animate();
            }
        }
        var bgwidth = 558;
        var bgduration = 5000;
        switch (Warp.Settings.background) {
            case'disco':
                repeat = 2;
                bgduration = 12500;
                bgwidth = 759;
                break;
            case'jellyfish':
                repeat = 2;
                bgduration = 12500;
                bgwidth = 1028;
                break;
            case'nebula':
                repeat = 2;
                bgduration = 20000;
                bgwidth = 556;
                break;
            case'spotlights':
                repeat = 2;
                bgduration = 12500;
                bgwidth = 556;
                break;
        }
        $('#menu').css("visibility", "hidden");
        $(window).bind("load", function () {
            matchHeight();
            $('#menu').dropdownMenu({mode: 'slide', dropdownSelector: 'div.dropdown:first', centerDropdown: true, fixWidth: true}).css("visibility", "visible");
            if (Warp.Settings.bganimation == 1) {
                animateBackgroungPos('div#page-body', {direction: -1, width: bgwidth, duration: bgduration});
            }
        })
    });
})(jQuery);