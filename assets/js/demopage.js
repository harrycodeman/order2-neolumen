(function(c){var g=c(window),b=window.Demopage={init:function(){this.header=c("#toolbar");this.iframe=c("#iframe");this.overlay=c("#overlay");this.loadinfo=c("#loadinfo");this.preview=c("#preset-preview");this.previewlinks=c(".showpreview");this.themeselector=c("#theme-selector");this.systemselector=c(".system-selector");this.themebox=c("#themebox");this.links=c(".link");this.themepreview=c("#theme-preview").find(".image:first");this.presets=c(".preset-selector");this.themeselector.bind("click",function(){b.toggleThemebox()});
var a=!1;this.links.bind({mouseenter:function(){a=!0;var h=c(this).data("theme"),d=c(this).data("preset");b.themepreview.find("img:first").attr("src",b.themedb[h].presets[d].thumbnail).show();b.themeInfo.show(h)},mouseleave:function(){a=!1;setTimeout(function(){a||(b.themepreview.find("img:first").hide(),b.themeInfo.showActive())},400)},click:function(){var a=c(this);b.hideThemebox().selectTheme(a.data("theme"),a.data("preset"))}});this.themelist=c("#theme-lists");this.themelistcols=this.themelist.find(".column");
var e=parseFloat(c(b.themelistcols[0]).css("width")),f=c("#columns").css("width",e*this.themelistcols.length);this.themelistcols.length<3?c("#theme-navigation").hide():c("#theme-navigation").find("div").bind("click",function(){var a=Math.abs(parseFloat(f.css("margin-left")))-5,a=c(this).hasClass("previous")?a-e>=0?a-e:0:a+2*e>e*b.themelistcols.length-1?a:a+e;f.stop().animate({"margin-left":-1*a-5})});var d=!1;this.previewlinks.bind({mouseenter:function(){if(!b.themebox.is(":visible")){d=!0;var a=
c(this),e=a.data("theme"),i=a.data("preset"),f={x:parseFloat(b.preview.css("width")),y:parseFloat(b.preview.css("height"))},a=a.position();b.preview.css({top:parseFloat(b.themebox.css("top")),left:a.left-(f.x/2-c(this).width()/2)}).find("img").attr("src",b.themedb[e].presets[i].thumbnail);b.preview.show()}},mouseleave:function(){d=!1;setTimeout(function(){d||b.preview.hide()},500)}});c(".system-selector > div").bind("click",function(){if(!c(this).hasClass("active"))location.href=b.basepath+"/"+(c(this).hasClass("joomla")?
"joomla":"wordpress")+"/"+b.theme+"/"+b.preset});this.iframe.bind("load",function(){b.overlay.hide();b.loadinfo.hide()});c(document).bind("click",function(a){b.themebox.is(":visible")&&!(c(a.target).hasClass("noddclose")||c(a.target).parents(".noddclose").length==1)&&b.hideThemebox()});g.bind("resize",autosize=function(){var a=g.width(),c=b.header.height(),d=g.height()-c,d={top:c,left:0,width:a,height:d};b.iframe.css(d);b.overlay.css(d);b.loadinfo.css({left:a/2-parseFloat(b.loadinfo.css("width"))/
2,top:g.height()/2-parseFloat(b.loadinfo.css("height"))/2});b.themebox.css({top:c+10,left:b.themeselector.position().left-1})});autosize()},hideThemebox:function(){this.themeselector.removeClass("active");this.themebox.hide();this.overlay.hide();return this},showThemebox:function(){this.themeselector.addClass("active");this.themebox.show();this.overlay.show();var a=c("#theme-lists").find(".selected:first");if(a.length){var a=a.parent().parent().data("col"),b=parseFloat(c(this.themelistcols.get(0)).css("width"));
c("#columns").css("margin-left",(a==0?0:a-1)*b*-1)}return this},toggleThemebox:function(){return this[this.themebox.is(":visible")?"hideThemebox":"showThemebox"]()},selectTheme:function(a,e){this.themeselector.html(this.themedb[a].name);this.openUrl(this.themedb[a].presets[e].url);this.themepreview.attr("style","background: url("+this.themedb[a].presets[e].thumbnail+")");this.links.removeClass("selected").each(function(b){b=c(this);b.data("theme")==a&&(b.hasClass("theme")&&b.addClass("selected"),
b.data("preset")==e&&b.addClass("selected"))});this.header.removeClass("no-presets");this.presets.hide().each(function(d){d=c(this);d.data("theme")==a&&(e=="archive"?b.header.addClass("no-presets"):d.show())});this.theme=a;this.preset=e;var f=0;this.systemselector.children("div").hide().each(function(d){d=c(this);b.themedb[a].systems[d.data("system")]==1&&(d.show(),f++)});this.header[f==1?"addClass":"removeClass"]("only-joomla");this.themeInfo.set(a).showActive()},openUrl:function(a){this.iframe.attr("src",
a);this.overlay.show();this.loadinfo.show().css("visibility","visible")},themeInfo:{set:function(a){this.activeTheme=a;return this},show:function(a){c("#theme-preview").find(".name:first").html(Demopage.themedb[a].name).end().find(".framework:first").html("<strong>Framework:</strong> "+Demopage.themedb[a].framework).end().find(".system:first").html("<strong>System:</strong> "+Demopage.themedb[a].system).end().find(".description:first").html(Demopage.themedb[a].description)},showActive:function(){this.show(this.activeTheme)}}};
c(function(){Demopage.init();Demopage.selectTheme(window.$theme,window.$preset)})})(jQuery);