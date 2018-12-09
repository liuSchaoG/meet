function loadCss(e) {
    var t = document.createElement("link");
    t.type = "text/css",
    t.rel = "stylesheet",
    t.href = e,
    document.getElementsByTagName("head")[0].appendChild(t)
}
function seriesLoadScripts(e, t) {
    if ("object" != typeof e) var e = [e];
    var i = document.getElementsByTagName("head").item(0) || document.documentElement,
    n = new Array,
    s = e.length - 1,
    a = function(o) {
        n[o] = document.createElement("script"),
        n[o].setAttribute("type", "text/javascript"),
        n[o].setAttribute("charset", "UTF-8"),
        n[o].onload = n[o].onreadystatechange = function() {
            this.onload = this.onreadystatechange = null,
            this.parentNode.removeChild(this),
            o != s ? a(o + 1) : "function" == typeof t && t()
        },
        n[o].setAttribute("src", e[o]),
        i.appendChild(n[o])
    };
    a(0)
}
function isVisiable(e) {
    if (e) {
        var t = e.getBoundingClientRect();
        return t.top > 0 && window.innerHeight - t.top > 0 || t.top <= 0 && t.bottom >= 0
    }
}
function isEmptyObject(e) {
    var t;
    for (t in e) return ! 1;
    return ! 0
}
function getQueryString(e) {
    var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),
    i = window.location.search.substr(1).match(t);
    return null != i ? unescape(i[2]) : null
}
function localStorageInstance(e, t) {
    try {
        if (window.localStorage) if ("" === t) window.localStorage.removeItem(e);
        else {
            if (0 != t && !t) return window.localStorage[e];
            window.localStorage[e] = t
        } else if ("" === t) cookie.clearcookie(e);
        else {
            if (0 != t && !t) return cookie.get(e);
            cookie.set(e, t, 1e4)
        }
    } catch(e) {}
}
function getUuid(e, t) {
    var i, n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
    s = [];
    if (t = t || n.length, e) for (i = 0; i < e; i++) s[i] = n[0 | Math.random() * t];
    else {
        var a;
        for (s[8] = s[13] = s[18] = s[23] = "-", s[14] = "4", i = 0; i < 36; i++) s[i] || (a = 0 | 16 * Math.random(), s[i] = n[19 == i ? 3 & a | 8 : a])
    }
    return s.join("")
}
function filterXss(e) {
    return e ? e.replace(/\</g, "&lt;").replace(/\>/g, "&gt;") : e
}
function bindObjOutsiteClick(e, t, i) {
    var n = "doc_" + (new Date).getTime(),
    s = "doc_" + (new Date).getTime() + 1;
    e.attr("class") && e.attr("class", e.attr("class").replace(/doc_(\d+)/g, "")),
    e.addClass(n),
    t && (t.attr("class", t.attr("class").replace(/doc_(\d+)/g, "")), t.addClass(s)),
    setTimeout(function() {
        $(document).bind("click",
        function(t) {
            $(t.target).hasClass(s) || $(t.target).parents(".showErrorBox").length || 0 == $(t.target).parents("." + n).length && (e.hide(), "function" == typeof i && i(), $(document).unbind("click"))
        })
    },
    200)
}
function unbindObjOutsiteClick(e, t) {
    "function" == typeof t && t(),
    $(document).unbind("click")
}
function Utemplate(e, t) {
    function i(e, t) {
        return a += t ? e.match(s) ? e + "\n": "arr.push(" + e + ");\n": "" != e ? "arr.push('" + e.replace(/"/g, '\\"') + "');\n": "",
        arguments.callee
    }
    for (var n = /<%([^%>]+)?%>/g,
    s = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g,
    a = "var arr = []; \n",
    o = 0; match = n.exec(e);) i(e.slice(o, match.index))(match[1], !0),
    o = match.index + match[0].length;
    return i(e.substr(o, e.length - o)),
    a += "return arr.join('')",
    new Function(a.replace(/[\r\t\n]/g, "")).apply(t)
}
function __conversion(e) {
    try {
        _T.sendEvent(e)
    } catch(e) {}
}
function Utemplate(e, t) {
    function i(e, t) {
        return a += t ? e.match(s) ? e + "\n": "arr.push(" + e + ");\n": "" != e ? "arr.push('" + e.replace(/"/g, '\\"') + "');\n": "",
        arguments.callee
    }
    for (var n = /<%([^%>]+)?%>/g,
    s = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g,
    a = "var arr = []; \n",
    o = 0; match = n.exec(e);) i(e.slice(o, match.index))(match[1], !0),
    o = match.index + match[0].length;
    return i(e.substr(o, e.length - o)),
    a += "return arr.join('')",
    new Function(a.replace(/[\r\t\n]/g, "")).apply(t)
}
function placeholderSupport() {
    return "placeholder" in document.createElement("input")
}
function __conversion(e) {
    try {
        _T.sendEvent(e)
    } catch(e) {}
}
function EventManger() {
    var e = {};
    this.subscribe = function(t, i) {
        void 0 === e[t] && (e[t] = []),
        e[t].push({
            context: this,
            callback: i
        })
    },
    this.publish = function(t) {
        if (void 0 === e[t]) return ! 1;
        for (var i = Array.prototype.slice.call(arguments, 1), n = 0, s = e[t].length; n < s; n++) {
            var a = e[t][n];
            a.callback.apply(a.context, i)
        }
    }
}
function getsec(e) {
    var t = 1 * e.substring(1, e.length),
    i = e.substring(0, 1);
    return "s" == i ? 1e3 * t: "h" == i ? 60 * t * 60 * 1e3: "d" == i ? 24 * t * 60 * 60 * 1e3: void 0
}
function appendTopBanner() {
    $(".home-body #siderbar .siderbar-top,#siderbar  .sider-detail").css({
        "padding-top": parseInt($("#siderbar .siderbar-top").css("padding-top")) + 120 + "px"
    }),
    $(".home-body #header").before('<div class="top-active-box" style="height:0; overflow:hidden;background-image: url(https://z.zhipin.com/web/activity/2018/staff-book/pc/images/top-banner.gif); background-color: #6d8beb;"><div class="active-close"></div><a href="https://www.zhipin.com/activity/custom/zhirenbook/index.html" target="_blank"></a></div>'),
    $(".home-body .top-active-box").animate({
        height: 120
    })
}
var DEBUG = !0,
UA = window.navigator.userAgent,
isIE, isWebkit, isZpdesk, ipcRenderer, isTouch = !1; (UA.indexOf("Edge/") > -1 || UA.indexOf("MSIE ") > -1 || UA.indexOf("Trident/") > -1) && (isIE = !0);
var supportsCalcVh = !!window.CSS && CSS.supports("height", "calc(100vh - 0px)");
if (UA.indexOf("ZhipinDesktop/") > -1 && (isZpdesk = !0, ipcRenderer = window.top.ipcRenderer), isZpdesk && ipcRenderer.send("messageLogout"), "ontouchstart" in window) {
    var isTouch = !0;
    document.addEventListener("touchstart",
    function() {},
    !1)
}
var loadScript = function(e) {
    var t, i;
    if (e && "" != e) for (t = e.split(","), i = 0; i < t.length; i++) $.getScript(t[i])
};
$(function() {
    "undefined" != typeof loginjson && 1 == loginjson.act && ($(".sign-register .form-btn .btn").html("" == loginjson.btnValue ? "登录": loginjson.btnValue), $(".sign-register .sign-tab").hide(), $(".sign-register .title").html(loginjson.titleValue))
});
var Cookie = {
    get: function(e) {
        var t, i = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
        return (t = document.cookie.match(i)) ? unescape(t[2]) : null
    },
    getObj: function() {
        for (var e = document.cookie.split(";"), t = "{", i = 0; i < e.length; i++) {
            var n = e[i].split("=");
            t += '"' + n[0].replace(/\s+/g, "") + '":"' + decodeURIComponent(n[1]) + '",'
        }
        return t = t.slice(0, -1),
        t += "}",
        JSON.parse(t)
    },
    set: function(e, t, i, n, s) {
        var a = e + "=" + encodeURIComponent(t);
        if (i) {
            a += ";expires=" + new Date(i).toGMTString()
        }
        a = n ? a + ";domain=" + n: a,
        a = s ? a + ";path=" + s: a,
        document.cookie = a
    },
    del: function(e, t, i) {
        var n = new Date("1970-01-01"),
        s = e + "=null;expires=" + n.toGMTString();
        s = t ? s + ";domain=" + t: s,
        s = i ? s + ";path=" + i: s,
        document.cookie = s
    }
},
cookie = {
    get: function(e) {
        var t, i = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
        return (t = document.cookie.match(i)) ? unescape(t[2]) : null
    },
    set: function(e, t, i) {
        if (i) {
            var n = new Date;
            n.setMinutes(i),
            document.cookie = e + "=" + encodeURIComponent(t) + ";expires=" + n.toGMTString()
        } else document.cookie = e + "=" + encodeURIComponent(t)
    },
    clearcookie: function(e, t, i) {
        cookie.get(e) && (document.cookie = e + "=" + (t ? ";path=" + t: "") + (i ? ";domain=" + i: "") + ";expires=Thu,01-Jan-1970 00:00:01 GMT")
    }
},
PAGE_ACTIVITY = !0; !
function() {
    function e(e) {
        var i = {
            focus: !0,
            focusin: !0,
            pageshow: !0,
            blur: !1,
            focusout: !1,
            pagehide: !1
        };
        e = e || window.event,
        PAGE_ACTIVITY = e.type in i ? i[e.type] : !this[t]
    }
    var t = "hidden";
    t in document ? document.addEventListener("visibilitychange", e) : (t = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", e) : (t = "webkitHidden") in document ? document.addEventListener("webkitvisibilitychange", e) : (t = "msHidden") in document ? document.addEventListener("msvisibilitychange", e) : "onfocusin" in document ? document.onfocusin = document.onfocusout = e: window.onpageshow = window.onpagehide = window.onfocus = window.onblur = e
} (),
window.INTERFACE_URLS = {
    homeUrl: "/",
    logoutUrl: "/logout/",
    chatProtoUrl: "/v2/web/boss/js/module/chat.proto"
},
function() {
    $(".nav-figure").length && ($(".standard").length || ($(".user-nav a").eq(0).attr("disabled", "disabled"), $(".user-nav a").eq(0).on("click",
    function(e) {
        alert("请升级您的浏览器才能使用聊天功能"),
        e.preventDefault()
    })))
} ();
var KZ = KZ || {};
KZ = {
    form: {
        Prompt: function(e, t) {
            var i = $('<div class="kz_tishi" style="position:absolute;z-index:9999;"/>').html(e);
            0 == $(".kz_tishi").length && (i.appendTo("body").delay(1500).fadeOut(500,
            function() {
                $(this).remove()
            }), i.css({
                left: 1 == t ? ($(window).width() - i.outerWidth()) / 2 : 0,
                top: 1 == t ? ($(window).height() - i.outerHeight()) / 2 : 0,
                width: 1 == t ? "auto": "100%",
                position: "fixed"
            }))
        }
    },
    pageLock: {
        show: function(e, t, i, n, s) {
            var a;
            if (a = $(".guide").length ? $(window.document) : $(window.parent.document), 0 == a.find(t.selector).length) {
                a.width(),
                $(t).outerWidth(),
                $(window).height(),
                $(t).outerHeight()
            } else {
                a.width(),
                a.find(t.selector).outerWidth(),
                $(window).height(),
                a.find(t.selector).outerHeight()
            }
            if (!a.find("#lockpage").length > 0) {
                $("<div id='lockpage'/>").css({
                    position: "fixed",
                    zIndex: e || 20,
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%",
                    background: "#000",
                    opacity: .8
                }).appendTo(a.find("body"))
            }
            a.find("#lockpage").css("height", $(document).height() + "px"),
            0 == a.find(t.selector).length ? ($(t).appendTo(a.find("body")), a.find(t).css({
                position: "fixed",
                zIndex: e + 1,
                left: "50%",
                top: "50%",
                "margin-left": "-" + $(t).outerWidth() / 2 + "px",
                "margin-top": "-" + $(t).outerHeight() / 2 + "px",
                display: "block"
            })) : a.find(t.selector).css({
                position: "fixed",
                zIndex: e + 1,
                left: "50%",
                top: "50%",
                "margin-left": "-" + $(t.selector).outerWidth() / 2 + "px",
                "margin-top": "-" + $(t.selector).outerHeight() / 2 + "px",
                display: "block"
            }),
            KZ.pageLock.hide(i, t, s),
            "function" == typeof n && n()
        },
        hide: function(e, t, i) {
            var n;
            n = $(".guide").length ? $(window.document) : $(window.parent.document),
            n.find(e).click(function(e) {
                void 0 === i && n.find(t).appendTo("body"),
                $(t).hide(),
                n.find("#lockpage").remove(),
                e.preventDefault()
            })
        },
        runHide: function(e) {
            var t;
            t = $(".guide").length ? $(window.document) : $(window.parent.document),
            t.find(e.selector).length > 0 ? setTimeout(function() {
                t.find(e).remove()
            },
            100) : t.find(e).hide(),
            t.find("#lockpage").remove()
        },
        runRemove: function(e) {
            var t;
            t = $(".guide").length ? $(window.document) : $(window.parent.document),
            t.find(e).appendTo("body"),
            $(e).hide(),
            t.find("#lockpage").remove()
        }
    }
};
var explorer = window.navigator.userAgent;
if (explorer.indexOf("MSIE") >= 0) {
    var b_version = navigator.appVersion,
    version = b_version.split(";");
    window.IE = parseInt(version[1].replace(/[^\d\.]/g, "")),
    $("html").addClass("ie")
} else window.IE = 0;
window.IE > 0 && window.IE < 9 && !Array.prototype.indexOf && (Array.prototype.indexOf = function(e) {
    for (var t = 0; t < this.length; t++) if (e === this[t]) return t;
    return - 1
}),
$(function() {
    $.extend({
        initUploadPortrait: function(e) {
            var t = $.extend({
                title: "上传照片",
                url: "uploadURL=/companyugc/upload/logo.json?c=uploadPortrit&amp;jsCallback=uploadOk",
                callback: null
            },
            e),
            i = "";
            i += '<section class="p_dialog uploadPortrait"><div class="dialog_con"><a href="#" rel="nofollow" class="dialog_close"></a><div id="uploadLogoFlash"><h3>' + t.title + '</h3><object id="FlashID" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="550" height="440"><param name="movie" value="/v2/web/geek/images/portrait.swf" /><param name="quality" value="high" /><param name="wmode" value="transparent" /><param name="flashVars" value="' + t.url + '" />\x3c!--[if !IE]>--\x3e<object type="application/x-shockwave-flash" data="/v2/web/geek/images/portrait.swf" width="550" height="440">\x3c!--<![endif]--\x3e<param name="quality" value="high" /><param name="wmode" value="transparent" /><param name="flashVars" value="' + t.url + '" />\x3c!--[if !IE]>--\x3e</object>\x3c!--<![endif]--\x3e</object></div></div></section>',
            $(".p_dialog").length <= 0 && $(i).appendTo("body"),
            KZ.pageLock.show(1e3, ".uploadPortrait", ".uploadPortrait .dialog_close"),
            top.uploadOk = function(e) {
                var i = "string" == typeof e ? $.parseJSON(e) : e;
                if (i && 1 == i.rescode) {
                    var n = i.url || [];
                    t.callback && (t.callback(n, i), KZ.pageLock.runHide(".uploadPortrait"))
                } else alert("图片上传失败")
            }
        }
    })
});
var crop = {
    cWidth: 350,
    cHeight: 350,
    cR: 175,
    show: function(e) {
        this.opts = e,
        crop.uploadEl = e.element,
        this.inited || (this.bindFileInput(e.defaultAvatarHtml), this.inited = !0),
        e.title && this.html.find(".hd span").text(e.title),
        KZ.pageLock.show(1e3, ".avatar_layer_html5", ".avatar_layer_html5 .close"),
        this.selected = !1
    },
    hide: function() {
        this.html.find(".close").click()
    },
    bindFileInput: function(e) {
        var t = this;
        this.html || (this.html = e || $('<div class="avatar_layer avatar_layer_html5">\t\t\t\t\t\t\t\t<div class="hd"><span/><i class="close"/></div>\t\t\t\t\t\t\t\t<div class="main">\t\t\t\t\t\t\t\t\t<div class="selectpic">\t\t\t\t\t\t\t\t\t\t<div class="sbox">\t\t\t\t\t\t\t\t\t\t\t<a class="btns" href="#">选择图片</a>\t\t\t\t\t\t\t\t\t\t\t<input type="file" class="selectfile">\t\t\t\t\t\t\t\t\t\t\t<p>只支持JPG、PNG，大小不超过2M</p>\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t<div class="editbox">\t\t\t\t\t\t\t\t\t\t\t<canvas></canvas>\t\t\t\t\t\t\t\t\t\t\t<div class="pop"><i></i></div>\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t<div class="layer_btns">\t\t\t\t\t\t\t\t\t\t<span class="change">更换图片<input type="file" class="selectfile"></span>\t\t\t\t\t\t\t\t\t\t<a class="cancel close" href="#">取 消</a>\t\t\t\t\t\t\t\t\t\t<a class="sure"  href="#" ka="avatar_layer_html5_button_sure">确 定</a>\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t</div>'), this.html.appendTo("body"), e ? (t.html.find(".img-box").on("click",
        function() {
            $(this).addClass("img-checked").siblings().removeClass("img-checked")
        }), this.html.find(".sure").on("click",
        function(e) {
            if (t.selected)"function" == typeof t.opts.callback && crop.getCropData(t.opts.callback),
            t.hide(),
            t.clear(),
            e.preventDefault();
            else {
                if (!t.html.find(".img-checked").length) return alert("请选择图片"),
                !1;
                $.ajax({
                    url: $("[upload-base64-url]").attr("upload-base64-url"),
                    type: "post",
                    data: {
                        headImg: t.html.find(".img-checked img").attr("data-id")
                    },
                    dataType: "json",
                    success: function(i) {
                        if (i.rescode) {
                            var n = $(".avatar_box .avatar img");
                            n.attr("src", i.url[0]),
                            n.closest("dd").find("input:hidden[name=tiny]").val(i.url[0]),
                            n.closest("dd").find("input:hidden[name=large]").val(i.url[1]),
                            t.hide(),
                            t.clear(),
                            e.preventDefault(),
                            crop.uploadEl.find(".tip-text").remove(),
                            "function" == typeof t.opts.sysImgCallback && t.opts.sysImgCallback(i.url)
                        } else alert("图片保存失败")
                    }
                })
            }
        })) : this.html.find(".sure").on("click",
        function(e) {
            if (!t.selected) return alert("请选择图片"),
            !1;
            "function" == typeof t.opts.callback && crop.getCropData(t.opts.callback),
            t.hide(),
            t.clear(),
            e.preventDefault()
        }), this.html.find(".cancel").bind("click",
        function(e) {
            t.clear(),
            e.preventDefault()
        })),
        this.html.find(".selectfile,.layer_btns .selectfile").change(function(t) {
            if (t.target.files.length) {
                e && crop.uploadEl.find(".tip-text").remove();
                var i = t.target.files[0];
                if (!/image\/\w+/.test(i.type)) return alert("请确保文件为图像类型"),
                !1;
                if (window.FileReader) {
                    var n = new FileReader;
                    n.onloadstart = function(e) {},
                    n.onloadend = function(e) {
                        var t = new Image;
                        t.onload = function() {
                            crop.resetImg(t)
                        },
                        t.src = e.target.result
                    },
                    n.readAsDataURL(i)
                }
            }
        })
    },
    clear: function() {
        this.editbox && (this.html.find(".selectfile").val(""), this.editbox.css({
            backgroundImage: "none"
        }).hide(), this.html.find(".selectpic").find(".sbox").show(), this.msk.clearRect(0, 0, this.cWidth, this.cHeight), this.html.find(".layer_btns .change").hide())
    },
    resetImg: function(e) {
        this.selected = !0;
        var t = this,
        i = this.html.find(".selectpic").find(".sbox").hide().end().find(".editbox").show();
        this.html.find(".layer_btns .change").css("display", "inline-block"),
        this.editbox = i;
        var n = this.compress(e, 1);
        this.img = n,
        i.css({
            backgroundImage: "url(" + n + ")"
        }),
        this.circle = {
            x: this.cWidth / 2,
            y: this.cHeight / 2,
            r: 75
        },
        this.popbox = i.find(".pop"),
        this.pop = i.find(".pop i"),
        this.popbox.css({
            left: this.circle.x - this.circle.r,
            top: this.circle.y - this.circle.r,
            width: 2 * this.circle.r,
            height: 2 * this.circle.r
        }),
        this.popbox.bind("mousedown",
        function(e) {
            var i = {
                x: crop.circle.x,
                y: crop.circle.y,
                r: crop.circle.r
            },
            n = {
                x: e.clientX,
                y: e.clientY,
                left: $(this).position().left,
                top: $(this).position().top
            };
            t.html.bind("mousemove",
            function(e) {
                var t = e.clientX - n.x,
                s = e.clientY - n.y;
                crop.circle.x = i.x + t,
                crop.circle.y = i.y + s,
                crop.popbox.css({
                    left: crop.circle.x - crop.circle.r,
                    top: crop.circle.y - crop.circle.r,
                    width: 2 * crop.circle.r,
                    height: 2 * crop.circle.r
                }),
                crop.draw(crop.circle)
            }),
            t.html.bind("mouseup",
            function(e) {
                crop.circle.x - crop.circle.r < 0 && (crop.circle.x = crop.circle.r),
                crop.circle.x + crop.circle.r > t.cWidth && (crop.circle.x = t.cWidth - crop.circle.r),
                crop.circle.y - crop.circle.r < 0 && (crop.circle.y = crop.circle.r),
                crop.circle.y + crop.circle.r > t.cHeight && (crop.circle.y = t.cHeight - crop.circle.r),
                crop.popbox.css({
                    left: crop.circle.x - crop.circle.r,
                    top: crop.circle.y - crop.circle.r,
                    width: 2 * crop.circle.r,
                    height: 2 * crop.circle.r
                }),
                crop.draw(crop.circle),
                t.html.unbind("mousemove mouseup")
            })
        }),
        this.pop.bind("mousedown",
        function(e) {
            var i = {
                x: crop.circle.x,
                y: crop.circle.y,
                r: crop.circle.r
            },
            n = {
                x: e.clientX,
                y: e.clientY,
                left: $(this).position().left,
                top: $(this).position().top
            };
            t.html.bind("mousemove",
            function(e) {
                var t = e.clientX - n.x,
                s = e.clientY - n.y,
                a = Math.max(t, s);
                crop.circle.r = i.r + a,
                crop.popbox.css({
                    left: crop.circle.x - crop.circle.r,
                    top: crop.circle.y - crop.circle.r,
                    width: 2 * crop.circle.r,
                    height: 2 * crop.circle.r
                }),
                crop.draw(crop.circle)
            }),
            t.html.bind("mouseup",
            function() {
                crop.circle.r < 75 && (crop.circle.r = 75),
                crop.circle.r > t.cR && (crop.circle.r = t.cR),
                crop.circle.x - crop.circle.r < 0 && (crop.circle.x = crop.circle.r),
                crop.circle.x + crop.circle.r > t.cWidth && (crop.circle.x = t.cWidth - crop.circle.r),
                crop.circle.y - crop.circle.r < 0 && (crop.circle.y = crop.circle.r),
                crop.circle.y + crop.circle.r > t.cHeight && (crop.circle.y = t.cHeight - crop.circle.r),
                crop.popbox.css({
                    left: crop.circle.x - crop.circle.r,
                    top: crop.circle.y - crop.circle.r,
                    width: 2 * crop.circle.r,
                    height: 2 * crop.circle.r
                }),
                crop.draw(crop.circle),
                t.html.unbind("mousemove mouseup")
            }),
            e.preventDefault(),
            e.stopPropagation(),
            e.stopImmediatePropagation()
        }),
        this.mask = this.html.find(".selectpic canvas").get(0),
        this.msk = this.mask.getContext("2d"),
        this.mask.width = this.cWidth,
        this.mask.height = this.cHeight,
        this.draw(this.circle)
    },
    draw: function(e) {
        var t = this.msk;
        t.clearRect(0, 0, this.cWidth, this.cHeight),
        t.globalCompositeOperation = "source-over",
        t.beginPath(),
        t.fillStyle = "#000000",
        t.rect(0, 0, this.cWidth, this.cHeight),
        t.globalAlpha = .6,
        t.fill(),
        t.closePath(),
        t.globalCompositeOperation = "destination-out",
        t.beginPath(),
        t.fillStyle = "",
        t.arc(e.x, e.y, e.r, 0, 2 * Math.PI, !1),
        t.fill(),
        t.closePath()
    },
    getCropData: function(e) {
        var t = this.circle,
        i = new Image;
        i.crossOrigin = "Anonymous",
        i.onload = function() {
            var n = document.createElement("canvas");
            n.width = 2 * t.r,
            n.height = 2 * t.r;
            var s = n.getContext("2d");
            s.clearRect(0, 0, n.width, n.height),
            s.fillStyle = "#fff",
            s.fillRect(0, 0, n.width, n.height),
            s.drawImage(i, -1 * (t.x - t.r), -1 * (t.y - t.r));
            var a = n.toDataURL("image/jpeg", 1);
            e(a)
        },
        i.src = this.img
    },
    compress: function(e, t) {
        var i = this.cWidth,
        n = this.cHeight;
        e.width > e.height ? (imageWidth = i, imageHeight = Math.round(n * (e.height / e.width))) : e.width < e.height ? (imageHeight = n, imageWidth = Math.round(i * (e.width / e.height))) : (imageWidth = i, imageHeight = n),
        t = imageWidth / e.width;
        var s = document.createElement("canvas");
        s.width = i,
        s.height = n;
        var a = s.getContext("2d");
        return a.clearRect(0, 0, s.width, s.height),
        imageWidth < s.width ? a.drawImage(e, (s.width - imageWidth) / 2, 0, imageWidth, imageHeight) : a.drawImage(e, 0, (s.height - imageHeight) / 2, imageWidth, imageHeight),
        s.toDataURL("image/png", t)
    }
};
if (function(e) {
    function t() {
        return new Date(Date.UTC.apply(Date, arguments))
    }
    var i = function(t, i) {
        var a = this;
        this.element = e(t),
        this.container = i.container || "body",
        this.inDate = i.inDate || [],
        this.language = i.language || this.element.data("date-language") || "en",
        this.language = this.language in n ? this.language: "en",
        this.isRTL = n[this.language].rtl || !1,
        this.formatType = i.formatType || this.element.data("format-type") || "standard",
        this.format = s.parseFormat(i.format || this.element.data("date-format") || n[this.language].format || s.getDefaultFormat(this.formatType, "input"), this.formatType),
        this.isInline = !1,
        this.isVisible = !1,
        this.isInput = this.element.is("input"),
        this.bootcssVer = this.isInput ? this.element.is(".form-control") ? 3 : 2 : this.bootcssVer = this.element.is(".input-group") ? 3 : 2,
        this.component = !!this.element.is(".date") && (3 == this.bootcssVer ? this.element.find(".input-group-addon .glyphicon-th, .input-group-addon .glyphicon-time, .input-group-addon .glyphicon-calendar").parent() : this.element.find(".add-on .icon-th, .add-on .icon-time, .add-on .icon-calendar").parent()),
        this.componentReset = !!this.element.is(".date") && (3 == this.bootcssVer ? this.element.find(".input-group-addon .glyphicon-remove").parent() : this.element.find(".add-on .icon-remove").parent()),
        this.hasInput = this.component && this.element.find("input").length,
        this.component && 0 === this.component.length && (this.component = !1),
        this.linkField = i.linkField || this.element.data("link-field") || !1,
        this.linkFormat = s.parseFormat(i.linkFormat || this.element.data("link-format") || s.getDefaultFormat(this.formatType, "link"), this.formatType),
        this.minuteStep = i.minuteStep || this.element.data("minute-step") || 5,
        this.pickerPosition = i.pickerPosition || this.element.data("picker-position") || "bottom-right",
        this.showMeridian = i.showMeridian || this.element.data("show-meridian") || !1,
        this.initialDate = i.initialDate || new Date,
        this.minLimitYear = i.minLimitYear || !1,
        this._attachEvents(),
        this.formatViewType = "datetime",
        "formatViewType" in i ? this.formatViewType = i.formatViewType: "formatViewType" in this.element.data() && (this.formatViewType = this.element.data("formatViewType")),
        this.minView = 0,
        "minView" in i ? this.minView = i.minView: "minView" in this.element.data() && (this.minView = this.element.data("min-view")),
        this.minView = s.convertViewMode(this.minView),
        this.maxView = s.modes.length - 1,
        "maxView" in i ? this.maxView = i.maxView: "maxView" in this.element.data() && (this.maxView = this.element.data("max-view")),
        this.maxView = s.convertViewMode(this.maxView),
        this.wheelViewModeNavigation = !1,
        "wheelViewModeNavigation" in i ? this.wheelViewModeNavigation = i.wheelViewModeNavigation: "wheelViewModeNavigation" in this.element.data() && (this.wheelViewModeNavigation = this.element.data("view-mode-wheel-navigation")),
        this.wheelViewModeNavigationInverseDirection = !1,
        "wheelViewModeNavigationInverseDirection" in i ? this.wheelViewModeNavigationInverseDirection = i.wheelViewModeNavigationInverseDirection: "wheelViewModeNavigationInverseDirection" in this.element.data() && (this.wheelViewModeNavigationInverseDirection = this.element.data("view-mode-wheel-navigation-inverse-dir")),
        this.wheelViewModeNavigationDelay = 100,
        "wheelViewModeNavigationDelay" in i ? this.wheelViewModeNavigationDelay = i.wheelViewModeNavigationDelay: "wheelViewModeNavigationDelay" in this.element.data() && (this.wheelViewModeNavigationDelay = this.element.data("view-mode-wheel-navigation-delay")),
        this.startViewMode = 2,
        "startView" in i ? this.startViewMode = i.startView: "startView" in this.element.data() && (this.startViewMode = this.element.data("start-view")),
        this.startViewMode = s.convertViewMode(this.startViewMode),
        this.viewMode = this.startViewMode,
        this.viewSelect = this.minView,
        "viewSelect" in i ? this.viewSelect = i.viewSelect: "viewSelect" in this.element.data() && (this.viewSelect = this.element.data("view-select")),
        this.viewSelect = s.convertViewMode(this.viewSelect),
        this.forceParse = !0,
        "forceParse" in i ? this.forceParse = i.forceParse: "dateForceParse" in this.element.data() && (this.forceParse = this.element.data("date-force-parse")),
        this.picker = e(3 == this.bootcssVer ? s.templateV3: s.template).appendTo(this.isInline ? this.element: this.container).on({
            click: e.proxy(this.click, this),
            mousedown: e.proxy(this.mousedown, this)
        }),
        this.wheelViewModeNavigation && (e.fn.mousewheel ? this.picker.on({
            mousewheel: e.proxy(this.mousewheel, this)
        }) : console.log("Mouse Wheel event is not supported. Please include the jQuery Mouse Wheel plugin before enabling this option")),
        this.isInline ? this.picker.addClass("datetimepicker-inline") : this.picker.addClass("datetimepicker-dropdown-" + this.pickerPosition),
        this.isRTL && (this.picker.addClass("datetimepicker-rtl"), 3 == this.bootcssVer ? this.picker.find(".prev span, .next span").toggleClass("glyphicon-arrow-left glyphicon-arrow-right") : this.picker.find(".prev i, .next i").toggleClass("icon-arrow-left icon-arrow-right")),
        this.minLimitYear && this.picker.addClass("date-showminyear"),
        e(document).on("click",
        function(t) {
            0 === e(t.target).closest(".datetimepicker").length && a.hide()
        }),
        this.autoclose = !1,
        "autoclose" in i ? this.autoclose = i.autoclose: "dateAutoclose" in this.element.data() && (this.autoclose = this.element.data("date-autoclose")),
        this.keyboardNavigation = !0,
        "keyboardNavigation" in i ? this.keyboardNavigation = i.keyboardNavigation: "dateKeyboardNavigation" in this.element.data() && (this.keyboardNavigation = this.element.data("date-keyboard-navigation")),
        this.todayBtn = i.todayBtn || this.element.data("date-today-btn") || !1,
        this.todayHighlight = i.todayHighlight || this.element.data("date-today-highlight") || !1,
        this.weekStart = (i.weekStart || this.element.data("date-weekstart") || n[this.language].weekStart || 0) % 7,
        this.weekEnd = (this.weekStart + 6) % 7,
        this.startDate = -1 / 0,
        this.endDate = 1 / 0,
        this.daysOfWeekDisabled = [],
        this.setStartDate(i.startDate || this.element.data("date-startdate")),
        this.setEndDate(i.endDate || this.element.data("date-enddate")),
        this.setDaysOfWeekDisabled(i.daysOfWeekDisabled || this.element.data("date-days-of-week-disabled")),
        this.fillDow(),
        this.fillMonths(),
        this.update(),
        this.showMode(),
        this.timer = null,
        this.isInline && this.show()
    };
    i.prototype = {
        constructor: i,
        _events: [],
        _attachEvents: function() {
            this._detachEvents(),
            this.isInput ? this._events = [[this.element, {
                click: e.proxy(this.show, this),
                keyup: e.proxy(this.update, this),
                keydown: e.proxy(this.keydown, this)
            }]] : this.component && this.hasInput ? (this._events = [[this.element.find("input"), {
                click: e.proxy(this.show, this),
                keyup: e.proxy(this.update, this),
                keydown: e.proxy(this.keydown, this)
            }], [this.component, {
                click: e.proxy(this.show, this)
            }]], this.componentReset && this._events.push([this.componentReset, {
                click: e.proxy(this.reset, this)
            }])) : this.element.is("div") ? this.isInline = !0 : this._events = [[this.element, {
                click: e.proxy(this.show, this)
            }]];
            for (var t, i, n = 0; n < this._events.length; n++) t = this._events[n][0],
            i = this._events[n][1],
            t.on(i)
        },
        _detachEvents: function() {
            for (var e, t, i = 0; i < this._events.length; i++) e = this._events[i][0],
            t = this._events[i][1],
            e.off(t);
            this._events = []
        },
        show: function(t) {
            if (this.picker.is(":visible")) return void this.picker.hide();
            e(".datetimepicker").hide(),
            e(".dropdown-select-open").removeClass("dropdown-select-open"),
            e(".dropdown-menu-open").removeClass("dropdown-menu-open"),
            this.element.closest(".dropdown-select").addClass("dropdown-select-open"),
            this.element.closest(".dropdown-wrap").addClass("dropdown-menu-open"),
            this.picker.show(),
            this.height = this.component ? this.component.outerHeight() : this.element.outerHeight(),
            this.forceParse && this.update(),
            this.place(),
            e(window).on("resize", e.proxy(this.place, this)),
            t && (t.stopPropagation(), t.preventDefault()),
            this.isVisible = !0,
            this.element.trigger({
                type: "show",
                date: this.date
            })
        },
        hide: function(t) {
            this.isVisible && (this.isInline || (this.element.closest(".dropdown-select").removeClass("dropdown-select-open"), this.picker.hide(), e(window).off("resize", this.place), this.viewMode = this.startViewMode, this.showMode(), this.isInput || e(document).off("mousedown", this.hide), this.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val()) && this.setValue(), this.isVisible = !1, this.element.trigger({
                type: "hide",
                date: this.date
            })))
        },
        remove: function() {
            this._detachEvents(),
            this.picker.remove(),
            delete this.picker,
            delete this.element.data().datetimepicker
        },
        getDate: function() {
            var e = this.getUTCDate();
            return new Date(e.getTime() + 6e4 * e.getTimezoneOffset())
        },
        getUTCDate: function() {
            return this.date
        },
        setDate: function(e) {
            this.setUTCDate(new Date(e.getTime() - 6e4 * e.getTimezoneOffset()))
        },
        setUTCDate: function(e) {
            e >= this.startDate && e <= this.endDate ? (this.date = e, this.setValue(), this.viewDate = this.date, this.fill()) : this.element.trigger({
                type: "outOfRange",
                date: e,
                startDate: this.startDate,
                endDate: this.endDate
            })
        },
        setFormat: function(e) {
            this.format = s.parseFormat(e, this.formatType);
            var t;
            this.isInput ? t = this.element: this.component && (t = this.element.find("input")),
            t && t.val() && this.setValue()
        },
        setValue: function() {
            var t = this.getFormattedDate();
            this.isInput ? this.element.val(t) : (this.component && this.element.find("input").val(t), this.element.data("date", t)),
            this.linkField && e("#" + this.linkField).val(this.getFormattedDate(this.linkFormat))
        },
        getFormattedDate: function(e) {
            return void 0 == e && (e = this.format),
            s.formatDate(this.date, e, this.language, this.formatType)
        },
        setStartDate: function(e) {
            this.startDate = e || -1 / 0,
            this.startDate !== -1 / 0 && (this.startDate = s.parseDate(this.startDate, this.format, this.language, this.formatType)),
            this.update(),
            this.updateNavArrows()
        },
        setEndDate: function(e) {
            this.endDate = e || 1 / 0,
            this.endDate !== 1 / 0 && (this.endDate = s.parseDate(this.endDate, this.format, this.language, this.formatType)),
            this.update(),
            this.updateNavArrows()
        },
        setDaysOfWeekDisabled: function(t) {
            this.daysOfWeekDisabled = t || [],
            e.isArray(this.daysOfWeekDisabled) || (this.daysOfWeekDisabled = this.daysOfWeekDisabled.split(/,\s*/)),
            this.daysOfWeekDisabled = e.map(this.daysOfWeekDisabled,
            function(e) {
                return parseInt(e, 10)
            }),
            this.update(),
            this.updateNavArrows()
        },
        place: function() {
            if (!this.isInline) {
                var t = 0;
                e("div").each(function() {
                    var i = parseInt(e(this).css("zIndex"), 10);
                    i > t && (t = i)
                });
                var i, n, s, a, o = t + 10;
                a = this.container instanceof e ? this.container.offset() : e(this.container).offset(),
                this.component ? (i = this.component.offset(), s = i.left, "bottom-left" != this.pickerPosition && "top-left" != this.pickerPosition || (s += this.component.outerWidth() - this.picker.outerWidth())) : (i = this.element.offset(), s = i.left),
                s + 220 > document.body.clientWidth && (s = document.body.clientWidth - 220),
                n = "top-left" == this.pickerPosition || "top-right" == this.pickerPosition ? i.top - this.picker.outerHeight() : i.top + this.height,
                n -= a.top,
                s -= a.left,
                this.picker.css({
                    top: n,
                    left: s,
                    zIndex: o
                })
            }
        },
        update: function() {
            var e, t = !1;
            arguments && arguments.length && ("string" == typeof arguments[0] || arguments[0] instanceof Date) ? (e = arguments[0], t = !0) : ("string" == typeof(e = (this.isInput ? this.element.val() : this.element.find("input").val()) || this.element.data("date") || this.initialDate) || e instanceof String) && (e = e.replace(/^\s+|\s+$/g, "")),
            e || (e = new Date, t = !1),
            this.date = s.parseDate(e, this.format, this.language, this.formatType),
            t && this.setValue(),
            this.date < this.startDate ? this.viewDate = new Date(this.startDate) : this.date > this.endDate ? this.viewDate = new Date(this.endDate) : this.viewDate = new Date(this.date),
            this.fill()
        },
        fillDow: function() {
            for (var e = this.weekStart,
            t = "<tr>"; e < this.weekStart + 7;) t += '<th class="dow">' + n[this.language].daysMin[e++%7] + "</th>";
            t += "</tr>",
            this.picker.find(".datetimepicker-days thead").append(t)
        },
        fillMonths: function() {
            for (var e = "",
            t = 0; t < 12;) e += '<span class="month">' + n[this.language].monthsShort[t++] + "</span>";
            this.picker.find(".datetimepicker-months td").html(e)
        },
        fill: function() {
            if (null != this.date && null != this.viewDate) {
                var i = new Date(this.viewDate),
                a = i.getUTCFullYear(),
                o = i.getUTCMonth(),
                r = i.getUTCDate(),
                l = i.getUTCHours(),
                c = i.getUTCMinutes(),
                d = this.startDate !== -1 / 0 ? this.startDate.getUTCFullYear() : -1 / 0,
                u = this.startDate !== -1 / 0 ? this.startDate.getUTCMonth() : -1 / 0,
                p = this.endDate !== 1 / 0 ? this.endDate.getUTCFullYear() : 1 / 0,
                h = this.endDate !== 1 / 0 ? this.endDate.getUTCMonth() : 1 / 0,
                f = new t(this.date.getUTCFullYear(), this.date.getUTCMonth(), this.date.getUTCDate()).valueOf(),
                m = new Date;
                if (this.picker.find(".datetimepicker-days thead th:eq(1)").text(n[this.language].months[o] + " " + a), "time" == this.formatViewType) {
                    var g = l % 12 ? l % 12 : 12,
                    v = (g < 10 ? "0": "") + g,
                    y = (c < 10 ? "0": "") + c,
                    w = n[this.language].meridiem[l < 12 ? 0 : 1];
                    this.picker.find(".datetimepicker-hours thead th:eq(1)").text(v + ":" + y + " " + (w ? w.toUpperCase() : "")),
                    this.picker.find(".datetimepicker-minutes thead th:eq(1)").text(v + ":" + y + " " + (w ? w.toUpperCase() : ""))
                } else this.picker.find(".datetimepicker-hours thead th:eq(1)").text(r + " " + n[this.language].months[o] + " " + a),
                this.picker.find(".datetimepicker-minutes thead th:eq(1)").text(r + " " + n[this.language].months[o] + " " + a);
                this.picker.find("tfoot th.today").html('<div class="today-btn">' + n[this.language].today + "</div>").toggle(!1 !== this.todayBtn),
                this.fillMonths();
                var b = t(a, o - 1, 28, 0, 0, 0, 0),
                $ = s.getDaysInMonth(b.getUTCFullYear(), b.getUTCMonth());
                b.setUTCDate($),
                b.setUTCDate($ - (b.getUTCDay() - this.weekStart + 7) % 7);
                var x = new Date(b);
                x.setUTCDate(x.getUTCDate() + 42),
                x = x.valueOf();
                for (var C, k = [], T = ""; b.valueOf() < x;) {
                    var _ = "";
                    if (b.getUTCDay() == this.weekStart && k.push("<tr>"), C = "", T = b.getUTCDate(), b.getUTCFullYear() < a || b.getUTCFullYear() == a && b.getUTCMonth() < o ? C += " old": (b.getUTCFullYear() > a || b.getUTCFullYear() == a && b.getUTCMonth() > o) && (C += " new"), this.todayHighlight && b.getUTCFullYear() == m.getFullYear() && b.getUTCMonth() == m.getMonth() && T == m.getDate() && (C += " today", T = "今日"), b.valueOf() == f && (C += " active"), b.valueOf() + 864e5 <= this.startDate || b.valueOf() > this.endDate || -1 !== e.inArray(b.getUTCDay(), this.daysOfWeekDisabled)) C += " disabled";
                    else {
                        var S = "" + b.getUTCFullYear() + b.getUTCMonth() + b.getUTCDate();
                        this.inDate.filter(function(e) {
                            return "" + e.year + e.month + e.day === S
                        }).length && (_ = '<i class="indate-dot"></i>')
                    }
                    k.push('<td class="day' + C + '"><em>' + b.getUTCDate() + "</em>" + _ + "</td>"),
                    b.getUTCDay() == this.weekEnd && k.push("</tr>"),
                    b.setUTCDate(b.getUTCDate() + 1)
                }
                this.picker.find(".datetimepicker-days tbody").empty().append(k.join("")),
                k = [];
                for (var D = "",
                E = "",
                I = "",
                j = 0; j < 24; j++) {
                    var P = t(a, o, r, j);
                    C = "",
                    P.valueOf() + 36e5 <= this.startDate || P.valueOf() > this.endDate ? C += " disabled": l == j && (C += " active"),
                    this.showMeridian && 2 == n[this.language].meridiem.length ? (E = j < 12 ? n[this.language].meridiem[0] : n[this.language].meridiem[1], E != I && ("" != I && k.push("</fieldset>"), k.push('<fieldset class="hour"><legend>' + E.toUpperCase() + "</legend>")), I = E, D = j % 12 ? j % 12 : 12, k.push('<span class="hour' + C + " hour_" + (j < 12 ? "am": "pm") + '">' + D + "</span>"), 23 == j && k.push("</fieldset>")) : (D = j + ":00", k.push('<span class="hour' + C + '">' + D + "</span>"))
                }
                this.picker.find(".datetimepicker-hours td").html(k.join("")),
                k = [],
                D = "",
                E = "",
                I = "";
                for (var j = 0; j < 60; j += this.minuteStep) {
                    var P = t(a, o, r, l, j, 0);
                    C = "",
                    P.valueOf() < this.startDate || P.valueOf() > this.endDate ? C += " disabled": Math.floor(c / this.minuteStep) == Math.floor(j / this.minuteStep) && (C += " active"),
                    this.showMeridian && 2 == n[this.language].meridiem.length ? (E = l < 12 ? n[this.language].meridiem[0] : n[this.language].meridiem[1], E != I && ("" != I && k.push("</fieldset>"), k.push('<fieldset class="minute"><legend>' + E.toUpperCase() + "</legend>")), I = E, D = l % 12 ? l % 12 : 12, k.push('<span class="minute' + C + '">' + D + ":" + (j < 10 ? "0" + j: j) + "</span>"), 59 == j && k.push("</fieldset>")) : (D = j + ":00", k.push('<span class="minute' + C + '">' + l + ":" + (j < 10 ? "0" + j: j) + "</span>"))
                }
                this.picker.find(".datetimepicker-minutes td").html(k.join(""));
                var A = this.date.getUTCFullYear(),
                U = this.picker.find(".datetimepicker-months").find("th:eq(1)").text(a).end().find("span").removeClass("active");
                A == a && U.eq(this.date.getUTCMonth()).addClass("active"),
                (a < d || a > p) && U.addClass("disabled"),
                a == d && U.slice(0, u).addClass("disabled"),
                a == p && U.slice(h + 1).addClass("disabled"),
                k = "",
                a = 10 * parseInt(a / 10, 10);
                var M = this.picker.find(".datetimepicker-years").find("th:eq(1)").text(a + "-" + (a + 9)).end().find("td");
                a -= 1;
                for (var j = -1; j < 11; j++) {
                    var O = a;
                    if (this.minLimitYear && a < this.minLimitYear) return;
                    this.minLimitYear && a == this.minLimitYear && (O = a + 1 + "以前"),
                    k += '<span class="year' + ( - 1 == j || 10 == j ? " old": "") + (A == a ? " active": "") + (a < d || a > p ? " disabled": "") + '" data-year="' + a + '">' + O + "</span>",
                    a += 1
                }
                M.html(k),
                this.place(),
                this.updateNavArrows()
            }
        },
        updateNavArrows: function() {
            var e = new Date(this.viewDate),
            t = e.getUTCFullYear(),
            i = e.getUTCMonth(),
            n = e.getUTCDate(),
            s = e.getUTCHours(),
            a = this.picker.find(".datetimepicker-years").find(".year").last().hasClass("disabled");
            switch (this.viewMode) {
            case 0:
                this.startDate !== -1 / 0 && t <= this.startDate.getUTCFullYear() && i <= this.startDate.getUTCMonth() && n <= this.startDate.getUTCDate() && s <= this.startDate.getUTCHours() ? this.picker.find(".prev").css({
                    visibility: "hidden"
                }) : this.picker.find(".prev").css({
                    visibility: "visible"
                }),
                this.endDate !== 1 / 0 && t >= this.endDate.getUTCFullYear() && i >= this.endDate.getUTCMonth() && n >= this.endDate.getUTCDate() && s >= this.endDate.getUTCHours() ? this.picker.find(".next").css({
                    visibility: "hidden"
                }) : this.picker.find(".next").css({
                    visibility: "visible"
                });
                break;
            case 1:
                this.startDate !== -1 / 0 && t <= this.startDate.getUTCFullYear() && i <= this.startDate.getUTCMonth() && n <= this.startDate.getUTCDate() ? this.picker.find(".prev").css({
                    visibility: "hidden"
                }) : this.picker.find(".prev").css({
                    visibility: "visible"
                }),
                this.endDate !== 1 / 0 && t >= this.endDate.getUTCFullYear() && i >= this.endDate.getUTCMonth() && n >= this.endDate.getUTCDate() ? this.picker.find(".next").css({
                    visibility: "hidden"
                }) : this.picker.find(".next").css({
                    visibility: "visible"
                });
                break;
            case 2:
                this.startDate !== -1 / 0 && t <= this.startDate.getUTCFullYear() && i <= this.startDate.getUTCMonth() ? this.picker.find(".prev").css({
                    visibility: "hidden"
                }) : this.picker.find(".prev").css({
                    visibility: "visible"
                }),
                this.endDate !== 1 / 0 && t >= this.endDate.getUTCFullYear() && i >= this.endDate.getUTCMonth() ? this.picker.find(".next").css({
                    visibility: "hidden"
                }) : this.picker.find(".next").css({
                    visibility: "visible"
                });
                break;
            case 3:
            case 4:
                this.startDate !== -1 / 0 && t <= this.startDate.getUTCFullYear() ? this.picker.find(".prev").css({
                    visibility: "hidden"
                }) : this.picker.find(".prev").css({
                    visibility: "visible"
                }),
                this.endDate !== 1 / 0 && t >= this.endDate.getUTCFullYear() ? this.picker.find(".next").css({
                    visibility: "hidden"
                }) : a ? this.picker.find(".next").css({
                    visibility: "hidden"
                }) : this.picker.find(".next").css({
                    visibility: "visible"
                })
            }
        },
        mousewheel: function(t) {
            if (t.preventDefault(), t.stopPropagation(), !this.wheelPause) {
                this.wheelPause = !0;
                var i = t.originalEvent,
                n = i.wheelDelta,
                s = n > 0 ? 1 : 0 === n ? 0 : -1;
                this.wheelViewModeNavigationInverseDirection && (s = -s),
                this.showMode(s),
                setTimeout(e.proxy(function() {
                    this.wheelPause = !1
                },
                this), this.wheelViewModeNavigationDelay)
            }
        },
        click: function(i) {
            i.stopPropagation(),
            i.preventDefault();
            var n = e(i.target).closest("span, td, th, legend");
            if (n.is(".glyphicon") && (n = e(n).parent().closest("span, td, th, legend")), 1 == n.length) {
                if (n.is(".disabled")) return void this.element.trigger({
                    type: "outOfRange",
                    date: this.viewDate,
                    startDate: this.startDate,
                    endDate: this.endDate
                });
                switch (n[0].nodeName.toLowerCase()) {
                case "th":
                    switch (n[0].className) {
                    case "switch":
                        this.showMode(1);
                        break;
                    case "prev":
                    case "next":
                        this.picker.find(".prev").css({
                            visibility:
                            "hidden"
                        }),
                        this.picker.find(".next").css({
                            visibility: "hidden"
                        }),
                        this.throttle(function() {
                            var e = s.modes[this.viewMode].navStep * ("prev" == n[0].className ? -1 : 1);
                            switch (this.viewMode) {
                            case 0:
                                this.viewDate = this.moveHour(this.viewDate, e);
                                break;
                            case 1:
                                this.viewDate = this.moveDate(this.viewDate, e);
                                break;
                            case 2:
                                this.viewDate = this.moveMonth(this.viewDate, e);
                                break;
                            case 3:
                            case 4:
                                this.viewDate = this.moveYear(this.viewDate, e)
                            }
                            this.fill(),
                            this.element.trigger({
                                type: n[0].className + ":" + this.convertViewModeText(this.viewMode),
                                date: this.viewDate,
                                startDate: this.startDate,
                                endDate: this.endDate
                            })
                        },
                        300);
                        break;
                    case "today":
                        var a = new Date;
                        a = t(a.getFullYear(), a.getMonth(), a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds(), 0),
                        a < this.startDate ? a = this.startDate: a > this.endDate && (a = this.endDate),
                        this.viewMode = this.startViewMode,
                        this.showMode(0),
                        this._setDate(a),
                        this.fill(),
                        this.autoclose && this.hide()
                    }
                    break;
                case "span":
                    if (!n.is(".disabled")) {
                        var o = this.viewDate.getUTCFullYear(),
                        r = this.viewDate.getUTCMonth(),
                        l = this.viewDate.getUTCDate(),
                        c = this.viewDate.getUTCHours(),
                        d = this.viewDate.getUTCMinutes(),
                        u = this.viewDate.getUTCSeconds();
                        if (n.is(".month") ? (this.viewDate.setUTCDate(1), r = n.parent().find("span").index(n), l = this.viewDate.getUTCDate(), this.viewDate.setUTCMonth(r), this.element.trigger({
                            type: "changeMonth",
                            date: this.viewDate
                        }), this.viewSelect >= 3 && this._setDate(t(o, r, l, c, d, u, 0))) : n.is(".year") ? (this.viewDate.setUTCDate(1), o = parseInt(n.text(), 10) || 0, n.text().indexOf("以前") > -1 && (o -= 1), this.viewDate.setUTCFullYear(o), this.element.trigger({
                            type: "changeYear",
                            date: this.viewDate
                        }), this.viewSelect >= 4 && this._setDate(t(o, r, l, c, d, u, 0)), this.minLimitYear && this.minLimitYear == o && (this.viewMode = this.startViewMode, this.showMode(0), this._setDate(t(o, 0, l, c, d, u, 0)), this.fill(), this.hide())) : n.is(".hour") ? (c = parseInt(n.text(), 10) || 0, (n.hasClass("hour_am") || n.hasClass("hour_pm")) && (12 == c && n.hasClass("hour_am") ? c = 0 : 12 != c && n.hasClass("hour_pm") && (c += 12)), this.viewDate.setUTCHours(c), this.element.trigger({
                            type: "changeHour",
                            date: this.viewDate
                        }), this.viewSelect >= 1 && this._setDate(t(o, r, l, c, d, u, 0))) : n.is(".minute") && (d = parseInt(n.text().substr(n.text().indexOf(":") + 1), 10) || 0, this.viewDate.setUTCMinutes(d), this.element.trigger({
                            type: "changeMinute",
                            date: this.viewDate
                        }), this.viewSelect >= 0 && this._setDate(t(o, r, l, c, d, u, 0))), 0 != this.viewMode) {
                            var p = this.viewMode;
                            this.minLimitYear && this.minLimitYear == o ? this.showMode(0) : this.showMode( - 1),
                            this.fill(),
                            p == this.viewMode && this.autoclose && this.hide()
                        } else this.fill(),
                        this.autoclose && this.hide()
                    }
                    break;
                case "td":
                    if (n.is(".day") && !n.is(".disabled")) {
                        var l = parseInt(n.text(), 10) || 1,
                        o = this.viewDate.getUTCFullYear(),
                        r = this.viewDate.getUTCMonth(),
                        c = this.viewDate.getUTCHours(),
                        d = this.viewDate.getUTCMinutes(),
                        u = this.viewDate.getUTCSeconds();
                        n.is(".old") ? 0 === r ? (r = 11, o -= 1) : r -= 1 : n.is(".new") && (11 == r ? (r = 0, o += 1) : r += 1),
                        this.viewDate.setUTCFullYear(o),
                        this.viewDate.setUTCMonth(r, l),
                        this.element.trigger({
                            type: "changeDay",
                            date: this.viewDate
                        }),
                        this.viewSelect >= 2 && this._setDate(t(o, r, l, c, d, u, 0))
                    }
                    var p = this.viewMode;
                    this.showMode( - 1),
                    this.fill(),
                    p == this.viewMode && this.autoclose && this.hide()
                }
            }
        },
        throttle: function(e, t) {
            var i = this;
            clearTimeout(this.timer),
            this.timer = setTimeout(function() {
                e.call(i)
            },
            t)
        },
        _setDate: function(e, t) {
            t && "date" != t || (this.date = e),
            t && "view" != t || (this.viewDate = e),
            this.fill(),
            this.setValue();
            var i;
            this.isInput ? i = this.element: this.component && (i = this.element.find("input")),
            i && (i.change(), this.autoclose),
            this.element.trigger({
                type: "changeDate",
                date: this.date
            })
        },
        moveMinute: function(e, t) {
            if (!t) return e;
            var i = new Date(e.valueOf());
            return i.setUTCMinutes(i.getUTCMinutes() + t * this.minuteStep),
            i
        },
        moveHour: function(e, t) {
            if (!t) return e;
            var i = new Date(e.valueOf());
            return i.setUTCHours(i.getUTCHours() + t),
            i
        },
        moveDate: function(e, t) {
            if (!t) return e;
            var i = new Date(e.valueOf());
            return i.setUTCDate(i.getUTCDate() + t),
            i
        },
        moveMonth: function(e, t) {
            if (!t) return e;
            var i, n, s = new Date(e.valueOf()),
            a = s.getUTCDate(),
            o = s.getUTCMonth(),
            r = Math.abs(t);
            if (t = t > 0 ? 1 : -1, 1 == r) n = -1 == t ?
            function() {
                return s.getUTCMonth() == o
            }: function() {
                return s.getUTCMonth() != i
            },
            i = o + t,
            s.setUTCMonth(i),
            (i < 0 || i > 11) && (i = (i + 12) % 12);
            else {
                for (var l = 0; l < r; l++) s = this.moveMonth(s, t);
                i = s.getUTCMonth(),
                s.setUTCDate(a),
                n = function() {
                    return i != s.getUTCMonth()
                }
            }
            for (; n();) s.setUTCDate(--a),
            s.setUTCMonth(i);
            return s
        },
        moveYear: function(e, t) {
            return this.moveMonth(e, 12 * t)
        },
        dateWithinRange: function(e) {
            return e >= this.startDate && e <= this.endDate
        },
        keydown: function(e) {
            if (this.picker.is(":not(:visible)")) return void(27 == e.keyCode && this.show());
            var t, i, n, s = !1;
            switch (e.keyCode) {
            case 27:
                this.hide(),
                e.preventDefault();
                break;
            case 37:
            case 39:
                if (!this.keyboardNavigation) break;
                t = 37 == e.keyCode ? -1 : 1,
                viewMode = this.viewMode,
                e.ctrlKey ? viewMode += 2 : e.shiftKey && (viewMode += 1),
                4 == viewMode ? (i = this.moveYear(this.date, t), n = this.moveYear(this.viewDate, t)) : 3 == viewMode ? (i = this.moveMonth(this.date, t), n = this.moveMonth(this.viewDate, t)) : 2 == viewMode ? (i = this.moveDate(this.date, t), n = this.moveDate(this.viewDate, t)) : 1 == viewMode ? (i = this.moveHour(this.date, t), n = this.moveHour(this.viewDate, t)) : 0 == viewMode && (i = this.moveMinute(this.date, t), n = this.moveMinute(this.viewDate, t)),
                this.dateWithinRange(i) && (this.date = i, this.viewDate = n, this.setValue(), this.update(), e.preventDefault(), s = !0);
                break;
            case 38:
            case 40:
                if (!this.keyboardNavigation) break;
                t = 38 == e.keyCode ? -1 : 1,
                viewMode = this.viewMode,
                e.ctrlKey ? viewMode += 2 : e.shiftKey && (viewMode += 1),
                4 == viewMode ? (i = this.moveYear(this.date, t), n = this.moveYear(this.viewDate, t)) : 3 == viewMode ? (i = this.moveMonth(this.date, t), n = this.moveMonth(this.viewDate, t)) : 2 == viewMode ? (i = this.moveDate(this.date, 7 * t), n = this.moveDate(this.viewDate, 7 * t)) : 1 == viewMode ? this.showMeridian ? (i = this.moveHour(this.date, 6 * t), n = this.moveHour(this.viewDate, 6 * t)) : (i = this.moveHour(this.date, 4 * t), n = this.moveHour(this.viewDate, 4 * t)) : 0 == viewMode && (i = this.moveMinute(this.date, 4 * t), n = this.moveMinute(this.viewDate, 4 * t)),
                this.dateWithinRange(i) && (this.date = i, this.viewDate = n, this.setValue(), this.update(), e.preventDefault(), s = !0);
                break;
            case 13:
                if (0 != this.viewMode) {
                    var a = this.viewMode;
                    this.showMode( - 1),
                    this.fill(),
                    a == this.viewMode && this.autoclose && this.hide()
                } else this.fill(),
                this.autoclose && this.hide();
                e.preventDefault();
                break;
            case 9:
                this.hide()
            }
            if (s) {
                var o;
                this.isInput ? o = this.element: this.component && (o = this.element.find("input")),
                o && o.change(),
                this.element.trigger({
                    type: "changeDate",
                    date: this.date
                })
            }
        },
        showMode: function(e) {
            if (e) {
                var t = Math.max(0, Math.min(s.modes.length - 1, this.viewMode + e));
                t >= this.minView && t <= this.maxView && (this.element.trigger({
                    type: "changeMode",
                    date: this.viewDate,
                    oldViewMode: this.viewMode,
                    newViewMode: t
                }), this.viewMode = t)
            }
            this.picker.find(">div").hide().filter(".datetimepicker-" + s.modes[this.viewMode].clsName).css("display", "block"),
            this.updateNavArrows()
        },
        reset: function(e) {
            this._setDate(null, "date")
        },
        convertViewModeText: function(e) {
            switch (e) {
            case 4:
                return "decade";
            case 3:
                return "year";
            case 2:
                return "month";
            case 1:
                return "day";
            case 0:
                return "hour"
            }
        }
    },
    e.fn.datetimepicker = function(t) {
        var n = Array.apply(null, arguments);
        n.shift();
        var s;
        return this.each(function() {
            var a = e(this),
            o = a.data("datetimepicker"),
            r = "object" == typeof t && t;
            if (o || a.data("datetimepicker", o = new i(this, e.extend({},
            e.fn.datetimepicker.defaults, r))), "string" == typeof t && "function" == typeof o[t] && void 0 !== (s = o[t].apply(o, n))) return ! 1
        }),
        void 0 !== s ? s: this
    },
    e.fn.datetimepicker.defaults = {},
    e.fn.datetimepicker.Constructor = i;
    var n = e.fn.datetimepicker.dates = {
        en: {
            days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
            daysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六", "周日"],
            daysMin: ["日", "一", "二", "三", "四", "五", "六", "日"],
            months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            monthsShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            today: "至今",
            suffix: [],
            meridiem: ["上午", "下午"]
        }
    },
    s = {
        modes: [{
            clsName: "minutes",
            navFnc: "Hours",
            navStep: 1
        },
        {
            clsName: "hours",
            navFnc: "Date",
            navStep: 1
        },
        {
            clsName: "days",
            navFnc: "Month",
            navStep: 1
        },
        {
            clsName: "months",
            navFnc: "FullYear",
            navStep: 1
        },
        {
            clsName: "years",
            navFnc: "FullYear",
            navStep: 10
        }],
        isLeapYear: function(e) {
            return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
        },
        getDaysInMonth: function(e, t) {
            return [31, s.isLeapYear(e) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t]
        },
        getDefaultFormat: function(e, t) {
            if ("standard" == e) return "input" == t ? "yyyy-mm-dd hh:ii": "yyyy-mm-dd hh:ii:ss";
            if ("php" == e) return "input" == t ? "Y-m-d H:i": "Y-m-d H:i:s";
            throw new Error("Invalid format type.")
        },
        validParts: function(e) {
            if ("standard" == e) return /hh?|HH?|p|P|ii?|ss?|dd?|DD?|mm?|MM?|yy(?:yy)?/g;
            if ("php" == e) return /[dDjlNwzFmMnStyYaABgGhHis]/g;
            throw new Error("Invalid format type.")
        },
        nonpunctuation: /[^ -\/:-@\[-`{-~\t\n\rTZ]+/g,
        parseFormat: function(e, t) {
            var i = e.replace(this.validParts(t), "\0").split("\0"),
            n = e.match(this.validParts(t));
            if (!i || !i.length || !n || 0 == n.length) throw new Error("Invalid date format.");
            return {
                separators: i,
                parts: n
            }
        },
        parseDate: function(s, a, o, r) {
            if (s instanceof Date) {
                var l = new Date(s.valueOf() - 6e4 * s.getTimezoneOffset());
                return l.setMilliseconds(0),
                l
            }
            if (/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(s) && (a = this.parseFormat("yyyy-mm-dd", r)), /^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}$/.test(s) && (a = this.parseFormat("yyyy-mm-dd hh:ii", r)), /^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}\:\d{1,2}[Z]{0,1}$/.test(s) && (a = this.parseFormat("yyyy-mm-dd hh:ii:ss", r)), /^[-+]\d+[dmwy]([\s,]+[-+]\d+[dmwy])*$/.test(s)) {
                var c, d, u = /([-+]\d+)([dmwy])/,
                p = s.match(/([-+]\d+)([dmwy])/g);
                s = new Date;
                for (var h = 0; h < p.length; h++) switch (c = u.exec(p[h]), d = parseInt(c[1]), c[2]) {
                case "d":
                    s.setUTCDate(s.getUTCDate() + d);
                    break;
                case "m":
                    s = i.prototype.moveMonth.call(i.prototype, s, d);
                    break;
                case "w":
                    s.setUTCDate(s.getUTCDate() + 7 * d);
                    break;
                case "y":
                    s = i.prototype.moveYear.call(i.prototype, s, d)
                }
                return t(s.getUTCFullYear(), s.getUTCMonth(), s.getUTCDate(), s.getUTCHours(), s.getUTCMinutes(), s.getUTCSeconds(), 0)
            }
            var f, m, c, p = s && s.match(this.nonpunctuation) || [],
            s = new Date(0, 0, 0, 0, 0, 0, 0),
            g = {},
            v = ["hh", "h", "ii", "i", "ss", "s", "yyyy", "yy", "M", "MM", "m", "mm", "D", "DD", "d", "dd", "H", "HH", "p", "P"],
            y = {
                hh: function(e, t) {
                    return e.setUTCHours(t)
                },
                h: function(e, t) {
                    return e.setUTCHours(t)
                },
                HH: function(e, t) {
                    return e.setUTCHours(12 == t ? 0 : t)
                },
                H: function(e, t) {
                    return e.setUTCHours(12 == t ? 0 : t)
                },
                ii: function(e, t) {
                    return e.setUTCMinutes(t)
                },
                i: function(e, t) {
                    return e.setUTCMinutes(t)
                },
                ss: function(e, t) {
                    return e.setUTCSeconds(t)
                },
                s: function(e, t) {
                    return e.setUTCSeconds(t)
                },
                yyyy: function(e, t) {
                    return e.setUTCFullYear(t)
                },
                yy: function(e, t) {
                    return e.setUTCFullYear(2e3 + t)
                },
                m: function(e, t) {
                    for (t -= 1; t < 0;) t += 12;
                    for (t %= 12, e.setUTCMonth(t); e.getUTCMonth() != t;) {
                        if (isNaN(e.getUTCMonth())) return e;
                        e.setUTCDate(e.getUTCDate() - 1)
                    }
                    return e
                },
                d: function(e, t) {
                    return e.setUTCDate(t)
                },
                p: function(e, t) {
                    return e.setUTCHours(1 == t ? e.getUTCHours() + 12 : e.getUTCHours())
                }
            };
            if (y.M = y.MM = y.mm = y.m, y.dd = y.d, y.P = y.p, s = t(s.getFullYear(), s.getMonth(), s.getDate(), s.getHours(), s.getMinutes(), s.getSeconds()), p.length == a.parts.length) {
                for (var h = 0,
                w = a.parts.length; h < w; h++) {
                    if (f = parseInt(p[h], 10), c = a.parts[h], isNaN(f)) switch (c) {
                    case "MM":
                        m = e(n[o].months).filter(function() {
                            var e = this.slice(0, p[h].length);
                            return e == p[h].slice(0, e.length)
                        }),
                        f = e.inArray(m[0], n[o].months) + 1;
                        break;
                    case "M":
                        m = e(n[o].monthsShort).filter(function() {
                            var e = this.slice(0, p[h].length),
                            t = p[h].slice(0, e.length);
                            return e.toLowerCase() == t.toLowerCase()
                        }),
                        f = e.inArray(m[0], n[o].monthsShort) + 1;
                        break;
                    case "p":
                    case "P":
                        f = e.inArray(p[h].toLowerCase(), n[o].meridiem)
                    }
                    g[c] = f
                }
                for (var b, h = 0; h < v.length; h++)(b = v[h]) in g && !isNaN(g[b]) && y[b](s, g[b])
            }
            return s
        },
        formatDate: function(t, i, a, o) {
            if (null == t) return "";
            var r;
            if ("standard" == o) r = {
                yy: t.getUTCFullYear().toString().substring(2),
                yyyy: t.getUTCFullYear(),
                m: t.getUTCMonth() + 1,
                M: n[a].monthsShort[t.getUTCMonth()],
                MM: n[a].months[t.getUTCMonth()],
                d: t.getUTCDate(),
                D: n[a].daysShort[t.getUTCDay()],
                DD: n[a].days[t.getUTCDay()],
                p: 2 == n[a].meridiem.length ? n[a].meridiem[t.getUTCHours() < 12 ? 0 : 1] : "",
                h: t.getUTCHours(),
                i: t.getUTCMinutes(),
                s: t.getUTCSeconds()
            },
            2 == n[a].meridiem.length ? r.H = r.h % 12 == 0 ? 12 : r.h % 12 : r.H = r.h,
            r.HH = (r.H < 10 ? "0": "") + r.H,
            r.P = r.p.toUpperCase(),
            r.hh = (r.h < 10 ? "0": "") + r.h,
            r.ii = (r.i < 10 ? "0": "") + r.i,
            r.ss = (r.s < 10 ? "0": "") + r.s,
            r.dd = (r.d < 10 ? "0": "") + r.d,
            r.mm = (r.m < 10 ? "0": "") + r.m;
            else {
                if ("php" != o) throw new Error("Invalid format type.");
                r = {
                    y: t.getUTCFullYear().toString().substring(2),
                    Y: t.getUTCFullYear(),
                    F: n[a].months[t.getUTCMonth()],
                    M: n[a].monthsShort[t.getUTCMonth()],
                    n: t.getUTCMonth() + 1,
                    t: s.getDaysInMonth(t.getUTCFullYear(), t.getUTCMonth()),
                    j: t.getUTCDate(),
                    l: n[a].days[t.getUTCDay()],
                    D: n[a].daysShort[t.getUTCDay()],
                    w: t.getUTCDay(),
                    N: 0 == t.getUTCDay() ? 7 : t.getUTCDay(),
                    S: t.getUTCDate() % 10 <= n[a].suffix.length ? n[a].suffix[t.getUTCDate() % 10 - 1] : "",
                    a: 2 == n[a].meridiem.length ? n[a].meridiem[t.getUTCHours() < 12 ? 0 : 1] : "",
                    g: t.getUTCHours() % 12 == 0 ? 12 : t.getUTCHours() % 12,
                    G: t.getUTCHours(),
                    i: t.getUTCMinutes(),
                    s: t.getUTCSeconds()
                },
                r.m = (r.n < 10 ? "0": "") + r.n,
                r.d = (r.j < 10 ? "0": "") + r.j,
                r.A = r.a.toString().toUpperCase(),
                r.h = (r.g < 10 ? "0": "") + r.g,
                r.H = (r.G < 10 ? "0": "") + r.G,
                r.i = (r.i < 10 ? "0": "") + r.i,
                r.s = (r.s < 10 ? "0": "") + r.s
            }
            for (var t = [], l = e.extend([], i.separators), c = 0, d = i.parts.length; c < d; c++) l.length && t.push(l.shift()),
            t.push(r[i.parts[c]]);
            return l.length && t.push(l.shift()),
            t.join("")
        },
        convertViewMode: function(e) {
            switch (e) {
            case 4:
            case "decade":
                e = 4;
                break;
            case 3:
            case "year":
                e = 3;
                break;
            case 2:
            case "month":
                e = 2;
                break;
            case 1:
            case "day":
                e = 1;
                break;
            case 0:
            case "hour":
                e = 0
            }
            return e
        },
        headTemplate: '<thead><tr><th class="prev"><i class="fz fz-arrow-left"></i></th><th colspan="5" class="switch"></th><th class="next"><i class="fz fz-arrow-right"></i></th></tr></thead>',
        headTemplateV3: '<thead><tr><th class="prev"><span class="glyphicon glyphicon-arrow-left"></span> </th><th colspan="5" class="switch"></th><th class="next"><span class="glyphicon glyphicon-arrow-right"></span> </th></tr></thead>',
        contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
        footTemplate: '<tfoot class="tfoot"><tr><th colspan="7" class="today"></th></tr></tfoot>'
    };
    s.template = '<div class="datetimepicker"><div class="datetimepicker-minutes"><table class="table-condensed">' + s.headTemplate + s.contTemplate + s.footTemplate + '</table></div><div class="datetimepicker-hours"><table class="table-condensed">' + s.headTemplate + s.contTemplate + s.footTemplate + '</table></div><div class="datetimepicker-days"><table class="table-condensed">' + s.headTemplate + "<tbody></tbody>" + s.footTemplate + '</table></div><div class="datetimepicker-months"><table class="table-condensed">' + s.headTemplate + s.contTemplate + s.footTemplate + '</table></div><div class="datetimepicker-years"><table class="table-condensed">' + s.headTemplate + s.contTemplate + s.footTemplate + "</table></div></div>",
    s.templateV3 = '<div class="datetimepicker"><div class="datetimepicker-minutes"><table class=" table-condensed">' + s.headTemplateV3 + s.contTemplate + s.footTemplate + '</table></div><div class="datetimepicker-hours"><table class=" table-condensed">' + s.headTemplateV3 + s.contTemplate + s.footTemplate + '</table></div><div class="datetimepicker-days"><table class=" table-condensed">' + s.headTemplateV3 + "<tbody></tbody>" + s.footTemplate + '</table></div><div class="datetimepicker-months"><table class="table-condensed">' + s.headTemplateV3 + s.contTemplate + s.footTemplate + '</table></div><div class="datetimepicker-years"><table class="table-condensed">' + s.headTemplateV3 + s.contTemplate + s.footTemplate + "</table></div></div>",
    e.fn.datetimepicker.DPGlobal = s,
    e.fn.datetimepicker.noConflict = function() {
        return e.fn.datetimepicker = old,
        this
    },
    e(document).on("focus.datetimepicker.data-api click.datetimepicker.data-api", '[data-provide="datetimepicker"]',
    function(t) {
        var i = e(this);
        i.data("datetimepicker") || (t.preventDefault(), i.datetimepicker("show"))
    }),
    e(function() {
        e('[data-provide="datetimepicker-inline"]').datetimepicker()
    })
} (window.jQuery),
function(e) {
    var t = 0,
    i = Array.prototype.slice;
    e.cleanData = function(t) {
        return function(i) {
            var n, s, a;
            for (a = 0; null != (s = i[a]); a++) try { (n = e._data(s, "events")) && n.remove && e(s).triggerHandler("remove")
            } catch(e) {}
            t(i)
        }
    } (e.cleanData),
    e.widget = function(t, i, n) {
        var s, a, o, r, l = {},
        c = t.split(".")[0];
        return t = t.split(".")[1],
        s = c + "-" + t,
        n || (n = i, i = e.Widget),
        e.expr[":"][s.toLowerCase()] = function(t) {
            return !! e.data(t, s)
        },
        e[c] = e[c] || {},
        a = e[c][t],
        o = e[c][t] = function(e, t) {
            return this._createWidget ? void(arguments.length && this._createWidget(e, t)) : new o(e, t)
        },
        e.extend(o, a, {
            version: n.version,
            _proto: e.extend({},
            n),
            _childConstructors: []
        }),
        r = new i,
        r.options = e.widget.extend({},
        r.options),
        e.each(n,
        function(t, n) {
            return e.isFunction(n) ? void(l[t] = function() {
                var e = function() {
                    return i.prototype[t].apply(this, arguments)
                },
                s = function(e) {
                    return i.prototype[t].apply(this, e)
                };
                return function() {
                    var t, i = this._super,
                    a = this._superApply;
                    return this._super = e,
                    this._superApply = s,
                    t = n.apply(this, arguments),
                    this._super = i,
                    this._superApply = a,
                    t
                }
            } ()) : void(l[t] = n)
        }),
        o.prototype = e.widget.extend(r, {
            widgetEventPrefix: a ? r.widgetEventPrefix || t: t
        },
        l, {
            constructor: o,
            namespace: c,
            widgetName: t,
            widgetFullName: s
        }),
        a ? (e.each(a._childConstructors,
        function(t, i) {
            var n = i.prototype;
            e.widget(n.namespace + "." + n.widgetName, o, i._proto)
        }), delete a._childConstructors) : i._childConstructors.push(o),
        e.widget.bridge(t, o),
        o
    },
    e.widget.extend = function(t) {
        for (var n, s, a = i.call(arguments, 1), o = 0, r = a.length; r > o; o++) for (n in a[o]) s = a[o][n],
        a[o].hasOwnProperty(n) && void 0 !== s && (t[n] = e.isPlainObject(s) ? e.isPlainObject(t[n]) ? e.widget.extend({},
        t[n], s) : e.widget.extend({},
        s) : s);
        return t
    },
    e.widget.bridge = function(t, n) {
        var s = n.prototype.widgetFullName || t;
        e.fn[t] = function(a) {
            var o = "string" == typeof a,
            r = i.call(arguments, 1),
            l = this;
            return o ? this.each(function() {
                var i, n = e.data(this, s);
                return "instance" === a ? (l = n, !1) : n ? e.isFunction(n[a]) && "_" !== a.charAt(0) ? (i = n[a].apply(n, r), i !== n && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + a + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + a + "'")
            }) : (r.length && (a = e.widget.extend.apply(null, [a].concat(r))), this.each(function() {
                var t = e.data(this, s);
                t ? (t.option(a || {}), t._init && t._init()) : e.data(this, s, new n(a, this))
            })),
            l
        }
    },
    e.Widget = function() {},
    e.Widget._childConstructors = [],
    e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(i, n) {
            n = e(n || this.defaultElement || this)[0],
            this.element = e(n),
            this.uuid = t++,
            this.eventNamespace = "." + this.widgetName + this.uuid,
            this.bindings = e(),
            this.hoverable = e(),
            this.focusable = e(),
            n !== this && (e.data(n, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(e) {
                    e.target === n && this.destroy()
                }
            }), this.document = e(n.style ? n.ownerDocument: n.document || n), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)),
            this.options = e.widget.extend({},
            this.options, this._getCreateOptions(), i),
            this._create(),
            this._trigger("create", null, this._getCreateEventData()),
            this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function() {
            this._destroy(),
            this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"),
            this.bindings.unbind(this.eventNamespace),
            this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function() {
            return this.element
        },
        option: function(t, i) {
            var n, s, a, o = t;
            if (0 === arguments.length) return e.widget.extend({},
            this.options);
            if ("string" == typeof t) if (o = {},
            n = t.split("."), t = n.shift(), n.length) {
                for (s = o[t] = e.widget.extend({},
                this.options[t]), a = 0; a < n.length - 1; a++) s[n[a]] = s[n[a]] || {},
                s = s[n[a]];
                if (t = n.pop(), 1 === arguments.length) return void 0 === s[t] ? null: s[t];
                s[t] = i
            } else {
                if (1 === arguments.length) return void 0 === this.options[t] ? null: this.options[t];
                o[t] = i
            }
            return this._setOptions(o),
            this
        },
        _setOptions: function(e) {
            var t;
            for (t in e) this._setOption(t, e[t]);
            return this
        },
        _setOption: function(e, t) {
            return this.options[e] = t,
            "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))),
            this
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _on: function(t, i, n) {
            var s, a = this;
            "boolean" != typeof t && (n = i, i = t, t = !1),
            n ? (i = s = e(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, s = this.widget()),
            e.each(n,
            function(n, o) {
                function r() {
                    return t || !0 !== a.options.disabled && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? a[o] : o).apply(a, arguments) : void 0
                }
                "string" != typeof o && (r.guid = o.guid = o.guid || r.guid || e.guid++);
                var l = n.match(/^([\w:-]*)\s*(.*)$/),
                c = l[1] + a.eventNamespace,
                d = l[2];
                d ? s.delegate(d, c, r) : i.bind(c, r)
            })
        },
        _off: function(t, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
            t.unbind(i).undelegate(i),
            this.bindings = e(this.bindings.not(t).get()),
            this.focusable = e(this.focusable.not(t).get()),
            this.hoverable = e(this.hoverable.not(t).get())
        },
        _delay: function(e, t) {
            function i() {
                return ("string" == typeof e ? n[e] : e).apply(n, arguments)
            }
            var n = this;
            return setTimeout(i, t || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t),
            this._on(t, {
                mouseenter: function(t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t),
            this._on(t, {
                focusin: function(t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(t, i, n) {
            var s, a, o = this.options[t];
            if (n = n || {},
            i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t: this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent) for (s in a) s in i || (i[s] = a[s]);
            return this.element.trigger(i, n),
            !(e.isFunction(o) && !1 === o.apply(this.element[0], [i].concat(n)) || i.isDefaultPrevented())
        }
    },
    e.each({
        show: "fadeIn",
        hide: "fadeOut"
    },
    function(t, i) {
        e.Widget.prototype["_" + t] = function(n, s, a) {
            "string" == typeof s && (s = {
                effect: s
            });
            var o, r = s ? !0 === s || "number" == typeof s ? i: s.effect || i: t;
            s = s || {},
            "number" == typeof s && (s = {
                duration: s
            }),
            o = !e.isEmptyObject(s),
            s.complete = a,
            s.delay && n.delay(s.delay),
            o && e.effects && e.effects.effect[r] ? n[t](s) : r !== t && n[r] ? n[r](s.duration, s.easing, a) : n.queue(function(i) {
                e(this)[t](),
                a && a.call(n[0]),
                i()
            })
        }
    }),
    e.widget
} (jQuery),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : window.jQuery)
} (function(e) {
    "use strict";
    var t = 0,
    i = e,
    n = "parseJSON";
    "JSON" in window && "parse" in JSON && (i = JSON, n = "parse"),
    e.ajaxTransport("iframe",
    function(i) {
        if (i.async) {
            var n, s, a, o = i.initialIframeSrc || "javascript:false;";
            return {
                send: function(r, l) {
                    n = e('<form style="display:none;"></form>'),
                    n.attr("accept-charset", i.formAcceptCharset),
                    a = /\?/.test(i.url) ? "&": "?",
                    "DELETE" === i.type ? (i.url = i.url + a + "_method=DELETE", i.type = "POST") : "PUT" === i.type ? (i.url = i.url + a + "_method=PUT", i.type = "POST") : "PATCH" === i.type && (i.url = i.url + a + "_method=PATCH", i.type = "POST"),
                    t += 1,
                    s = e('<iframe src="' + o + '" name="iframe-transport-' + t + '"></iframe>').bind("load",
                    function() {
                        var t, a = e.isArray(i.paramName) ? i.paramName: [i.paramName];
                        s.unbind("load").bind("load",
                        function() {
                            var t;
                            try {
                                if (t = s.contents(), !t.length || !t[0].firstChild) throw new Error
                            } catch(e) {
                                t = void 0
                            }
                            l(200, "success", {
                                iframe: t
                            }),
                            e('<iframe src="' + o + '"></iframe>').appendTo(n),
                            window.setTimeout(function() {
                                n.remove()
                            },
                            0)
                        }),
                        n.prop("target", s.prop("name")).prop("action", i.url).prop("method", i.type),
                        i.formData && e.each(i.formData,
                        function(t, i) {
                            e('<input type="hidden"/>').prop("name", i.name).val(i.value).appendTo(n)
                        }),
                        i.fileInput && i.fileInput.length && "POST" === i.type && (t = i.fileInput.clone(), i.fileInput.after(function(e) {
                            return t[e]
                        }), i.paramName && i.fileInput.each(function(t) {
                            e(this).prop("name", a[t] || i.paramName)
                        }), n.append(i.fileInput).prop("enctype", "multipart/form-data").prop("encoding", "multipart/form-data"), i.fileInput.removeAttr("form")),
                        n.submit(),
                        t && t.length && i.fileInput.each(function(i, n) {
                            var s = e(t[i]);
                            e(n).prop("name", s.prop("name")).attr("form", s.attr("form")),
                            s.replaceWith(n)
                        })
                    }),
                    n.append(s).appendTo(document.body)
                },
                abort: function() {
                    s && s.unbind("load").prop("src", o),
                    n && n.remove()
                }
            }
        }
    }),
    e.ajaxSetup({
        converters: {
            "iframe text": function(t) {
                return t && e(t[0].body).text()
            },
            "iframe json": function(t) {
                return t && i[n](e(t[0].body).text())
            },
            "iframe html": function(t) {
                return t && e(t[0].body).html()
            },
            "iframe xml": function(t) {
                var i = t && t[0];
                return i && e.isXMLDoc(i) ? i: e.parseXML(i.XMLDocument && i.XMLDocument.xml || e(i.body).html())
            },
            "iframe script": function(t) {
                return t && e.globalEval(e(t[0].body).text())
            }
        }
    })
}),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery", "jquery-ui/ui/widget"], e) : "object" == typeof exports ? e(require("jquery"), require("./vendor/jquery.ui.widget")) : e(window.jQuery)
} (function(e) {
    "use strict";
    function t(t) {
        var i = "dragover" === t;
        return function(n) {
            n.dataTransfer = n.originalEvent && n.originalEvent.dataTransfer;
            var s = n.dataTransfer;
            s && -1 !== e.inArray("Files", s.types) && !1 !== this._trigger(t, e.Event(t, {
                delegatedEvent: n
            })) && (n.preventDefault(), i && (s.dropEffect = "copy"))
        }
    }
    e.support.fileInput = !(new RegExp("(Android (1\\.[0156]|2\\.[01]))|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)|(w(eb)?OSBrowser)|(webOS)|(Kindle/(1\\.0|2\\.[05]|3\\.0))").test(window.navigator.userAgent) || e('<input type="file"/>').prop("disabled")),
    e.support.xhrFileUpload = !(!window.ProgressEvent || !window.FileReader),
    e.support.xhrFormDataFileUpload = !!window.FormData,
    e.support.blobSlice = window.Blob && (Blob.prototype.slice || Blob.prototype.webkitSlice || Blob.prototype.mozSlice),
    e.widget("blueimp.fileupload", {
        options: {
            dropZone: e(document),
            pasteZone: void 0,
            fileInput: void 0,
            replaceFileInput: !0,
            paramName: void 0,
            singleFileUploads: !0,
            limitMultiFileUploads: void 0,
            limitMultiFileUploadSize: void 0,
            limitMultiFileUploadSizeOverhead: 512,
            sequentialUploads: !1,
            limitConcurrentUploads: void 0,
            forceIframeTransport: !1,
            redirect: void 0,
            redirectParamName: void 0,
            postMessage: void 0,
            multipart: !0,
            maxChunkSize: void 0,
            uploadedBytes: void 0,
            recalculateProgress: !0,
            progressInterval: 100,
            bitrateInterval: 500,
            autoUpload: !0,
            messages: {
                uploadedBytes: "Uploaded bytes exceed file size"
            },
            i18n: function(t, i) {
                return t = this.messages[t] || t.toString(),
                i && e.each(i,
                function(e, i) {
                    t = t.replace("{" + e + "}", i)
                }),
                t
            },
            formData: function(e) {
                return e.serializeArray()
            },
            add: function(t, i) {
                if (t.isDefaultPrevented()) return ! 1; (i.autoUpload || !1 !== i.autoUpload && e(this).fileupload("option", "autoUpload")) && i.process().done(function() {
                    i.submit()
                })
            },
            processData: !1,
            contentType: !1,
            cache: !1,
            timeout: 0
        },
        _specialOptions: ["fileInput", "dropZone", "pasteZone", "multipart", "forceIframeTransport"],
        _blobSlice: e.support.blobSlice &&
        function() {
            return (this.slice || this.webkitSlice || this.mozSlice).apply(this, arguments)
        },
        _BitrateTimer: function() {
            this.timestamp = Date.now ? Date.now() : (new Date).getTime(),
            this.loaded = 0,
            this.bitrate = 0,
            this.getBitrate = function(e, t, i) {
                var n = e - this.timestamp;
                return (!this.bitrate || !i || n > i) && (this.bitrate = (t - this.loaded) * (1e3 / n) * 8, this.loaded = t, this.timestamp = e),
                this.bitrate
            }
        },
        _isXHRUpload: function(t) {
            return ! t.forceIframeTransport && (!t.multipart && e.support.xhrFileUpload || e.support.xhrFormDataFileUpload)
        },
        _getFormData: function(t) {
            var i;
            return "function" === e.type(t.formData) ? t.formData(t.form) : e.isArray(t.formData) ? t.formData: "object" === e.type(t.formData) ? (i = [], e.each(t.formData,
            function(e, t) {
                i.push({
                    name: e,
                    value: t
                })
            }), i) : []
        },
        _getTotal: function(t) {
            var i = 0;
            return e.each(t,
            function(e, t) {
                i += t.size || 1
            }),
            i
        },
        _initProgressObject: function(t) {
            var i = {
                loaded: 0,
                total: 0,
                bitrate: 0
            };
            t._progress ? e.extend(t._progress, i) : t._progress = i
        },
        _initResponseObject: function(e) {
            var t;
            if (e._response) for (t in e._response) e._response.hasOwnProperty(t) && delete e._response[t];
            else e._response = {}
        },
        _onProgress: function(t, i) {
            if (t.lengthComputable) {
                var n, s = Date.now ? Date.now() : (new Date).getTime();
                if (i._time && i.progressInterval && s - i._time < i.progressInterval && t.loaded !== t.total) return;
                i._time = s,
                n = Math.floor(t.loaded / t.total * (i.chunkSize || i._progress.total)) + (i.uploadedBytes || 0),
                this._progress.loaded += n - i._progress.loaded,
                this._progress.bitrate = this._bitrateTimer.getBitrate(s, this._progress.loaded, i.bitrateInterval),
                i._progress.loaded = i.loaded = n,
                i._progress.bitrate = i.bitrate = i._bitrateTimer.getBitrate(s, n, i.bitrateInterval),
                this._trigger("progress", e.Event("progress", {
                    delegatedEvent: t
                }), i),
                this._trigger("progressall", e.Event("progressall", {
                    delegatedEvent: t
                }), this._progress)
            }
        },
        _initProgressListener: function(t) {
            var i = this,
            n = t.xhr ? t.xhr() : e.ajaxSettings.xhr();
            n.upload && (e(n.upload).bind("progress",
            function(e) {
                var n = e.originalEvent;
                e.lengthComputable = n.lengthComputable,
                e.loaded = n.loaded,
                e.total = n.total,
                i._onProgress(e, t)
            }), t.xhr = function() {
                return n
            })
        },
        _deinitProgressListener: function(t) {
            var i = t.xhr ? t.xhr() : e.ajaxSettings.xhr();
            i.upload && e(i.upload).unbind("progress")
        },
        _isInstanceOf: function(e, t) {
            return Object.prototype.toString.call(t) === "[object " + e + "]"
        },
        _initXHRData: function(t) {
            var i, n = this,
            s = t.files[0],
            a = t.multipart || !e.support.xhrFileUpload,
            o = "array" === e.type(t.paramName) ? t.paramName[0] : t.paramName;
            t.headers = e.extend({},
            t.headers),
            t.contentRange && (t.headers["Content-Range"] = t.contentRange),
            a && !t.blob && this._isInstanceOf("File", s) || (t.headers["Content-Disposition"] = 'attachment; filename="' + encodeURI(s.uploadName || s.name) + '"'),
            a ? e.support.xhrFormDataFileUpload && (t.postMessage ? (i = this._getFormData(t), t.blob ? i.push({
                name: o,
                value: t.blob
            }) : e.each(t.files,
            function(n, s) {
                i.push({
                    name: "array" === e.type(t.paramName) && t.paramName[n] || o,
                    value: s
                })
            })) : (n._isInstanceOf("FormData", t.formData) ? i = t.formData: (i = new FormData, e.each(this._getFormData(t),
            function(e, t) {
                i.append(t.name, t.value)
            })), t.blob ? i.append(o, t.blob, s.uploadName || s.name) : e.each(t.files,
            function(s, a) { (n._isInstanceOf("File", a) || n._isInstanceOf("Blob", a)) && i.append("array" === e.type(t.paramName) && t.paramName[s] || o, a, a.uploadName || a.name)
            })), t.data = i) : (t.contentType = s.type || "application/octet-stream", t.data = t.blob || s),
            t.blob = null
        },
        _initIframeSettings: function(t) {
            var i = e("<a></a>").prop("href", t.url).prop("host");
            t.dataType = "iframe " + (t.dataType || ""),
            t.formData = this._getFormData(t),
            t.redirect && i && i !== location.host && t.formData.push({
                name: t.redirectParamName || "redirect",
                value: t.redirect
            })
        },
        _initDataSettings: function(e) {
            this._isXHRUpload(e) ? (this._chunkedUpload(e, !0) || (e.data || this._initXHRData(e), this._initProgressListener(e)), e.postMessage && (e.dataType = "postmessage " + (e.dataType || ""))) : this._initIframeSettings(e)
        },
        _getParamName: function(t) {
            var i = e(t.fileInput),
            n = t.paramName;
            return n ? e.isArray(n) || (n = [n]) : (n = [], i.each(function() {
                for (var t = e(this), i = t.prop("name") || "files[]", s = (t.prop("files") || [1]).length; s;) n.push(i),
                s -= 1
            }), n.length || (n = [i.prop("name") || "files[]"])),
            n
        },
        _initFormSettings: function(t) {
            t.form && t.form.length || (t.form = e(t.fileInput.prop("form")), t.form.length || (t.form = e(this.options.fileInput.prop("form")))),
            t.paramName = this._getParamName(t),
            t.url || (t.url = t.form.prop("action") || location.href),
            t.type = (t.type || "string" === e.type(t.form.prop("method")) && t.form.prop("method") || "").toUpperCase(),
            "POST" !== t.type && "PUT" !== t.type && "PATCH" !== t.type && (t.type = "POST"),
            t.formAcceptCharset || (t.formAcceptCharset = t.form.attr("accept-charset"))
        },
        _getAJAXSettings: function(t) {
            var i = e.extend({},
            this.options, t);
            return this._initFormSettings(i),
            this._initDataSettings(i),
            i
        },
        _getDeferredState: function(e) {
            return e.state ? e.state() : e.isResolved() ? "resolved": e.isRejected() ? "rejected": "pending"
        },
        _enhancePromise: function(e) {
            return e.success = e.done,
            e.error = e.fail,
            e.complete = e.always,
            e
        },
        _getXHRPromise: function(t, i, n) {
            var s = e.Deferred(),
            a = s.promise();
            return i = i || this.options.context || a,
            !0 === t ? s.resolveWith(i, n) : !1 === t && s.rejectWith(i, n),
            a.abort = s.promise,
            this._enhancePromise(a)
        },
        _addConvenienceMethods: function(t, i) {
            var n = this,
            s = function(t) {
                return e.Deferred().resolveWith(n, t).promise()
            };
            i.process = function(t, a) {
                return (t || a) && (i._processQueue = this._processQueue = (this._processQueue || s([this])).then(function() {
                    return i.errorThrown ? e.Deferred().rejectWith(n, [i]).promise() : s(arguments)
                }).then(t, a)),
                this._processQueue || s([this])
            },
            i.submit = function() {
                return "pending" !== this.state() && (i.jqXHR = this.jqXHR = !1 !== n._trigger("submit", e.Event("submit", {
                    delegatedEvent: t
                }), this) && n._onSend(t, this)),
                this.jqXHR || n._getXHRPromise()
            },
            i.abort = function() {
                return this.jqXHR ? this.jqXHR.abort() : (this.errorThrown = "abort", n._trigger("fail", null, this), n._getXHRPromise(!1))
            },
            i.state = function() {
                return this.jqXHR ? n._getDeferredState(this.jqXHR) : this._processQueue ? n._getDeferredState(this._processQueue) : void 0
            },
            i.processing = function() {
                return ! this.jqXHR && this._processQueue && "pending" === n._getDeferredState(this._processQueue)
            },
            i.progress = function() {
                return this._progress
            },
            i.response = function() {
                return this._response
            }
        },
        _getUploadedBytes: function(e) {
            var t = e.getResponseHeader("Range"),
            i = t && t.split("-"),
            n = i && i.length > 1 && parseInt(i[1], 10);
            return n && n + 1
        },
        _chunkedUpload: function(t, i) {
            t.uploadedBytes = t.uploadedBytes || 0;
            var n, s, a = this,
            o = t.files[0],
            r = o.size,
            l = t.uploadedBytes,
            c = t.maxChunkSize || r,
            d = this._blobSlice,
            u = e.Deferred(),
            p = u.promise();
            return ! (! (this._isXHRUpload(t) && d && (l || ("function" === e.type(c) ? c(t) : c) < r)) || t.data) && ( !! i || (l >= r ? (o.error = t.i18n("uploadedBytes"), this._getXHRPromise(!1, t.context, [null, "error", o.error])) : (s = function() {
                var i = e.extend({},
                t),
                p = i._progress.loaded;
                i.blob = d.call(o, l, l + ("function" === e.type(c) ? c(i) : c), o.type),
                i.chunkSize = i.blob.size,
                i.contentRange = "bytes " + l + "-" + (l + i.chunkSize - 1) + "/" + r,
                a._trigger("chunkbeforesend", null, i),
                a._initXHRData(i),
                a._initProgressListener(i),
                n = (!1 !== a._trigger("chunksend", null, i) && e.ajax(i) || a._getXHRPromise(!1, i.context)).done(function(n, o, c) {
                    l = a._getUploadedBytes(c) || l + i.chunkSize,
                    p + i.chunkSize - i._progress.loaded && a._onProgress(e.Event("progress", {
                        lengthComputable: !0,
                        loaded: l - i.uploadedBytes,
                        total: l - i.uploadedBytes
                    }), i),
                    t.uploadedBytes = i.uploadedBytes = l,
                    i.result = n,
                    i.textStatus = o,
                    i.jqXHR = c,
                    a._trigger("chunkdone", null, i),
                    a._trigger("chunkalways", null, i),
                    l < r ? s() : u.resolveWith(i.context, [n, o, c])
                }).fail(function(e, t, n) {
                    i.jqXHR = e,
                    i.textStatus = t,
                    i.errorThrown = n,
                    a._trigger("chunkfail", null, i),
                    a._trigger("chunkalways", null, i),
                    u.rejectWith(i.context, [e, t, n])
                }).always(function() {
                    a._deinitProgressListener(i)
                })
            },
            this._enhancePromise(p), p.abort = function() {
                return n.abort()
            },
            s(), p)))
        },
        _beforeSend: function(e, t) {
            0 === this._active && (this._trigger("start"), this._bitrateTimer = new this._BitrateTimer, this._progress.loaded = this._progress.total = 0, this._progress.bitrate = 0),
            this._initResponseObject(t),
            this._initProgressObject(t),
            t._progress.loaded = t.loaded = t.uploadedBytes || 0,
            t._progress.total = t.total = this._getTotal(t.files) || 1,
            t._progress.bitrate = t.bitrate = 0,
            this._active += 1,
            this._progress.loaded += t.loaded,
            this._progress.total += t.total
        },
        _onDone: function(t, i, n, s) {
            var a = s._progress.total,
            o = s._response;
            s._progress.loaded < a && this._onProgress(e.Event("progress", {
                lengthComputable: !0,
                loaded: a,
                total: a
            }), s),
            o.result = s.result = t,
            o.textStatus = s.textStatus = i,
            o.jqXHR = s.jqXHR = n,
            this._trigger("done", null, s)
        },
        _onFail: function(e, t, i, n) {
            var s = n._response;
            n.recalculateProgress && (this._progress.loaded -= n._progress.loaded, this._progress.total -= n._progress.total),
            s.jqXHR = n.jqXHR = e,
            s.textStatus = n.textStatus = t,
            s.errorThrown = n.errorThrown = i,
            this._trigger("fail", null, n)
        },
        _onAlways: function(e, t, i, n) {
            this._trigger("always", null, n)
        },
        _onSend: function(t, i) {
            i.submit || this._addConvenienceMethods(t, i);
            var n, s, a, o, r = this,
            l = r._getAJAXSettings(i),
            c = function() {
                return r._sending += 1,
                l._bitrateTimer = new r._BitrateTimer,
                n = n || ((s || !1 === r._trigger("send", e.Event("send", {
                    delegatedEvent: t
                }), l)) && r._getXHRPromise(!1, l.context, s) || r._chunkedUpload(l) || e.ajax(l)).done(function(e, t, i) {
                    r._onDone(e, t, i, l)
                }).fail(function(e, t, i) {
                    r._onFail(e, t, i, l)
                }).always(function(e, t, i) {
                    if (r._deinitProgressListener(l), r._onAlways(e, t, i, l), r._sending -= 1, r._active -= 1, l.limitConcurrentUploads && l.limitConcurrentUploads > r._sending) for (var n = r._slots.shift(); n;) {
                        if ("pending" === r._getDeferredState(n)) {
                            n.resolve();
                            break
                        }
                        n = r._slots.shift()
                    }
                    0 === r._active && r._trigger("stop")
                })
            };
            return this._beforeSend(t, l),
            this.options.sequentialUploads || this.options.limitConcurrentUploads && this.options.limitConcurrentUploads <= this._sending ? (this.options.limitConcurrentUploads > 1 ? (a = e.Deferred(), this._slots.push(a), o = a.then(c)) : (this._sequence = this._sequence.then(c, c), o = this._sequence), o.abort = function() {
                return s = [void 0, "abort", "abort"],
                n ? n.abort() : (a && a.rejectWith(l.context, s), c())
            },
            this._enhancePromise(o)) : c()
        },
        _onAdd: function(t, i) {
            var n, s, a, o, r = this,
            l = !0,
            c = e.extend({},
            this.options, i),
            d = i.files,
            u = d.length,
            p = c.limitMultiFileUploads,
            h = c.limitMultiFileUploadSize,
            f = c.limitMultiFileUploadSizeOverhead,
            m = 0,
            g = this._getParamName(c),
            v = 0;
            if (!u) return ! 1;
            if (h && void 0 === d[0].size && (h = void 0), (c.singleFileUploads || p || h) && this._isXHRUpload(c)) if (c.singleFileUploads || h || !p) if (!c.singleFileUploads && h) for (a = [], n = [], o = 0; o < u; o += 1) m += d[o].size + f,
            (o + 1 === u || m + d[o + 1].size + f > h || p && o + 1 - v >= p) && (a.push(d.slice(v, o + 1)), s = g.slice(v, o + 1), s.length || (s = g), n.push(s), v = o + 1, m = 0);
            else n = g;
            else for (a = [], n = [], o = 0; o < u; o += p) a.push(d.slice(o, o + p)),
            s = g.slice(o, o + p),
            s.length || (s = g),
            n.push(s);
            else a = [d],
            n = [g];
            return i.originalFiles = d,
            e.each(a || d,
            function(s, o) {
                var c = e.extend({},
                i);
                return c.files = a ? o: [o],
                c.paramName = n[s],
                r._initResponseObject(c),
                r._initProgressObject(c),
                r._addConvenienceMethods(t, c),
                l = r._trigger("add", e.Event("add", {
                    delegatedEvent: t
                }), c)
            }),
            l
        },
        _replaceFileInput: function(t) {
            var i = t.fileInput,
            n = i.clone(!0),
            s = i.is(document.activeElement);
            t.fileInputClone = n,
            e("<form></form>").append(n)[0].reset(),
            i.after(n).detach(),
            s && n.focus(),
            e.cleanData(i.unbind("remove")),
            this.options.fileInput = this.options.fileInput.map(function(e, t) {
                return t === i[0] ? n[0] : t
            }),
            i[0] === this.element[0] && (this.element = n)
        },
        _handleFileTreeEntry: function(t, i) {
            var n, s = this,
            a = e.Deferred(),
            o = [],
            r = function(e) {
                e && !e.entry && (e.entry = t),
                a.resolve([e])
            },
            l = function(e) {
                s._handleFileTreeEntries(e, i + t.name + "/").done(function(e) {
                    a.resolve(e)
                }).fail(r)
            },
            c = function() {
                n.readEntries(function(e) {
                    e.length ? (o = o.concat(e), c()) : l(o)
                },
                r)
            };
            return i = i || "",
            t.isFile ? t._file ? (t._file.relativePath = i, a.resolve(t._file)) : t.file(function(e) {
                e.relativePath = i,
                a.resolve(e)
            },
            r) : t.isDirectory ? (n = t.createReader(), c()) : a.resolve([]),
            a.promise()
        },
        _handleFileTreeEntries: function(t, i) {
            var n = this;
            return e.when.apply(e, e.map(t,
            function(e) {
                return n._handleFileTreeEntry(e, i)
            })).then(function() {
                return Array.prototype.concat.apply([], arguments)
            })
        },
        _getDroppedFiles: function(t) {
            t = t || {};
            var i = t.items;
            return i && i.length && (i[0].webkitGetAsEntry || i[0].getAsEntry) ? this._handleFileTreeEntries(e.map(i,
            function(e) {
                var t;
                return e.webkitGetAsEntry ? (t = e.webkitGetAsEntry(), t && (t._file = e.getAsFile()), t) : e.getAsEntry()
            })) : e.Deferred().resolve(e.makeArray(t.files)).promise()
        },
        _getSingleFileInputFiles: function(t) {
            t = e(t);
            var i, n;
            t.prop("webkitEntries") || t.prop("entries");
            if (i = e.makeArray(t.prop("files")), i.length) void 0 === i[0].name && i[0].fileName && e.each(i,
            function(e, t) {
                t.name = t.fileName,
                t.size = t.fileSize
            });
            else {
                if (! (n = t.prop("value"))) return e.Deferred().resolve([]).promise();
                i = [{
                    name: n.replace(/^.*\\/, "")
                }]
            }
            return e.Deferred().resolve(i).promise()
        },
        _getFileInputFiles: function(t) {
            return t instanceof e && 1 !== t.length ? e.when.apply(e, e.map(t, this._getSingleFileInputFiles)).then(function() {
                return Array.prototype.concat.apply([], arguments)
            }) : this._getSingleFileInputFiles(t)
        },
        _onChange: function(t) {
            var i = this,
            n = {
                fileInput: e(t.target),
                form: e(t.target.form)
            };
            this._getFileInputFiles(n.fileInput).always(function(s) {
                n.files = s,
                i.options.replaceFileInput && i._replaceFileInput(n),
                !1 !== i._trigger("change", e.Event("change", {
                    delegatedEvent: t
                }), n) && i._onAdd(t, n)
            })
        },
        _onPaste: function(t) {
            var i = t.originalEvent && t.originalEvent.clipboardData && t.originalEvent.clipboardData.items,
            n = {
                files: []
            };
            i && i.length && (e.each(i,
            function(e, t) {
                var i = t.getAsFile && t.getAsFile();
                i && n.files.push(i)
            }), !1 !== this._trigger("paste", e.Event("paste", {
                delegatedEvent: t
            }), n) && this._onAdd(t, n))
        },
        _onDrop: function(t) {
            t.dataTransfer = t.originalEvent && t.originalEvent.dataTransfer;
            var i = this,
            n = t.dataTransfer,
            s = {};
            n && n.files && n.files.length && (t.preventDefault(), this._getDroppedFiles(n).always(function(n) {
                s.files = n,
                !1 !== i._trigger("drop", e.Event("drop", {
                    delegatedEvent: t
                }), s) && i._onAdd(t, s)
            }))
        },
        _onDragOver: t("dragover"),
        _onDragEnter: t("dragenter"),
        _onDragLeave: t("dragleave"),
        _initEventHandlers: function() {
            this._isXHRUpload(this.options) && (this._on(this.options.dropZone, {
                dragover: this._onDragOver,
                drop: this._onDrop,
                dragenter: this._onDragEnter,
                dragleave: this._onDragLeave
            }), this._on(this.options.pasteZone, {
                paste: this._onPaste
            })),
            e.support.fileInput && this._on(this.options.fileInput, {
                change: this._onChange
            })
        },
        _destroyEventHandlers: function() {
            this._off(this.options.dropZone, "dragenter dragleave dragover drop"),
            this._off(this.options.pasteZone, "paste"),
            this._off(this.options.fileInput, "change")
        },
        _destroy: function() {
            this._destroyEventHandlers()
        },
        _setOption: function(t, i) {
            var n = -1 !== e.inArray(t, this._specialOptions);
            n && this._destroyEventHandlers(),
            this._super(t, i),
            n && (this._initSpecialOptions(), this._initEventHandlers())
        },
        _initSpecialOptions: function() {
            var t = this.options;
            void 0 === t.fileInput ? t.fileInput = this.element.is('input[type="file"]') ? this.element: this.element.find('input[type="file"]') : t.fileInput instanceof e || (t.fileInput = e(t.fileInput)),
            t.dropZone instanceof e || (t.dropZone = e(t.dropZone)),
            t.pasteZone instanceof e || (t.pasteZone = e(t.pasteZone))
        },
        _getRegExp: function(e) {
            var t = e.split("/"),
            i = t.pop();
            return t.shift(),
            new RegExp(t.join("/"), i)
        },
        _isRegExpOption: function(t, i) {
            return "url" !== t && "string" === e.type(i) && /^\/.*\/[igm]{0,3}$/.test(i)
        },
        _initDataAttributes: function() {
            var t = this,
            i = this.options,
            n = this.element.data();
            e.each(this.element[0].attributes,
            function(e, s) {
                var a, o = s.name.toLowerCase();
                /^data-/.test(o) && (o = o.slice(5).replace(/-[a-z]/g,
                function(e) {
                    return e.charAt(1).toUpperCase()
                }), a = n[o], t._isRegExpOption(o, a) && (a = t._getRegExp(a)), i[o] = a)
            })
        },
        _create: function() {
            this._initDataAttributes(),
            this._initSpecialOptions(),
            this._slots = [],
            this._sequence = this._getXHRPromise(!0),
            this._sending = this._active = 0,
            this._initProgressObject(this),
            this._initEventHandlers()
        },
        active: function() {
            return this._active
        },
        progress: function() {
            return this._progress
        },
        add: function(t) {
            var i = this;
            t && !this.options.disabled && (t.fileInput && !t.files ? this._getFileInputFiles(t.fileInput).always(function(e) {
                t.files = e,
                i._onAdd(null, t)
            }) : (t.files = e.makeArray(t.files), this._onAdd(null, t)))
        },
        send: function(t) {
            if (t && !this.options.disabled) {
                if (t.fileInput && !t.files) {
                    var i, n, s = this,
                    a = e.Deferred(),
                    o = a.promise();
                    return o.abort = function() {
                        return n = !0,
                        i ? i.abort() : (a.reject(null, "abort", "abort"), o)
                    },
                    this._getFileInputFiles(t.fileInput).always(function(e) {
                        if (!n) {
                            if (!e.length) return void a.reject();
                            t.files = e,
                            i = s._onSend(null, t),
                            i.then(function(e, t, i) {
                                a.resolve(e, t, i)
                            },
                            function(e, t, i) {
                                a.reject(e, t, i)
                            })
                        }
                    }),
                    this._enhancePromise(o)
                }
                if (t.files = e.makeArray(t.files), t.files.length) return this._onSend(null, t)
            }
            return this._getXHRPromise(!1, t && t.context)
        }
    })
}), "undefined" == typeof jQuery) throw new Error("jquery-confirm requires jQuery");
var jconfirm, Jconfirm; !
function(e) {
    "use strict";
    e.fn.confirm = function(t, i) {
        return void 0 === t && (t = {}),
        "string" == typeof t && (t = {
            content: t,
            title: i || !1
        }),
        e(this).each(function() {
            var i = e(this);
            i.on("click",
            function(n) {
                n.preventDefault();
                var s = e.extend({},
                t);
                i.attr("data-title") && (s.title = i.attr("data-title")),
                i.attr("data-content") && (s.content = i.attr("data-content")),
                s.$target = i,
                i.attr("href") && !t.confirm && (s.confirm = function() {
                    location.href = i.attr("href")
                }),
                e.confirm(s)
            })
        }),
        e(this)
    },
    e.confirm = function(e, t) {
        return void 0 === e && (e = {}),
        "string" == typeof e && (e = {
            content: e,
            title: t || !1
        }),
        jconfirm(e)
    },
    e.alert = function(e, t) {
        return void 0 === e && (e = {}),
        "string" == typeof e && (e = {
            content: e,
            title: t || !1
        }),
        e.cancelButton = !1,
        jconfirm(e)
    },
    jconfirm = function(t) {
        void 0 === t && (t = {}),
        jconfirm.defaults && e.extend(jconfirm.pluginDefaults, jconfirm.defaults);
        var t = e.extend({},
        jconfirm.pluginDefaults, t);
        return new Jconfirm(t)
    },
    Jconfirm = function(t) {
        e.extend(this, t),
        this._init()
    },
    Jconfirm.prototype = {
        _init: function() {
            var e = this;
            this._rand = Math.round(99999 * Math.random()),
            this._buildHTML(),
            this._bindEvents(),
            setTimeout(function() {
                e.open(),
                e._watchContent()
            },
            0)
        },
        _buildHTML: function() {
            var t = this;
            this.animation = "anim-" + this.animation.toLowerCase(),
            this.closeAnimation = "anim-" + this.closeAnimation.toLowerCase(),
            this.theme = "jconfirm-" + this.theme.toLowerCase(),
            "anim-none" == this.animation && (this.animationSpeed = 0),
            this._lastFocused = e("body").find(":focus"),
            this.$el = e(this.template).appendTo(this.container).addClass(this.theme),
            this.$el.find(".jconfirm-box-container").addClass(this.columnClass),
            this.$el.find(".jconfirm-bg").css(this._getCSS(this.animationSpeed, 1)),
            this.$el.find(".jconfirm-bg").css("opacity", this.opacity),
            this.$b = this.$el.find(".jconfirm-box").css(this._getCSS(this.animationSpeed, this.animationBounce)).addClass(this.animation),
            this.$body = this.$b,
            this.rtl && this.$el.addClass("rtl"),
            this._contentReady = e.Deferred(),
            this._modalReady = e.Deferred(),
            this.$title = this.$el.find(".title"),
            this.contentDiv = this.$el.find("div.content"),
            this.$content = this.contentDiv,
            this.$contentPane = this.$el.find(".content-pane"),
            this.$icon = this.$el.find(".icon-c"),
            this.$closeIcon = this.$el.find(".closeIcon"),
            this.$contentPane.css(this._getCSS(this.animationSpeed, 1)),
            this.setTitle(),
            this.setIcon(),
            this._setButtons(),
            this.closeIconClass && this.$closeIcon.html('<i class="' + this.closeIconClass + '"></i>'),
            t._contentHash = this._hash(t.$content.html()),
            e.when(this._contentReady, this._modalReady).then(function() {
                t.setContent(),
                t.setTitle(),
                t.setIcon()
            }),
            this._getContent(),
            this._imagesLoaded(),
            this.autoClose && this._startCountDown()
        },
        _unwatchContent: function() {
            clearInterval(this._timer)
        },
        _hash: function() {
            if ("function" == typeof btoa) return btoa(encodeURIComponent(this.$content.html()))
        },
        _watchContent: function() {
            var e = this;
            this._timer = setInterval(function() {
                var t = e._hash(e.$content.html());
                e._contentHash != t && (e._contentHash = t, e.setDialogCenter(), e._imagesLoaded())
            },
            this.watchInterval)
        },
        _bindEvents: function() {
            var t = this,
            i = !1;
            this.$el.find(".jconfirm-scrollpane").click(function(e) {
                i || t.backgroundDismiss && (t.cancel(), t.close()),
                i = !1
            }),
            this.$el.find(".jconfirm-box").click(function(e) {
                i = !0
            }),
            this.$confirmButton && this.$confirmButton.click(function(e) {
                e.preventDefault();
                var i = t.confirm(t.$b);
                t._stopCountDown(),
                t.onAction("confirm"),
                (void 0 === i || i) && t.close()
            }),
            this.$cancelButton && this.$cancelButton.click(function(e) {
                e.preventDefault();
                var i = t.cancel(t.$b);
                t._stopCountDown(),
                t.onAction("cancel"),
                (void 0 === i || i) && t.close()
            }),
            this.$closeButton && this.$closeButton.click(function(e) {
                e.preventDefault(),
                t._stopCountDown(),
                t.cancel(),
                t.onAction("close"),
                t.close()
            }),
            this.keyboardEnabled && setTimeout(function() {
                e(window).on("keyup." + this._rand,
                function(e) {
                    t.reactOnKey(e)
                })
            },
            500),
            e(window).on("resize." + this._rand,
            function() {
                t.setDialogCenter(!0)
            })
        },
        _getCSS: function(e, t) {
            return {
                "-webkit-transition-duration": e / 1e3 + "s",
                "transition-duration": e / 1e3 + "s",
                "-webkit-transition-timing-function": "cubic-bezier(.36,1.1,.2, " + t + ")",
                "transition-timing-function": "cubic-bezier(.36,1.1,.2, " + t + ")"
            }
        },
        _imagesLoaded: function() {
            var t = this;
            e.each(this.$content.find("img:not(.loaded)"),
            function(i, n) {
                var s = setInterval(function() {
                    "0px" !== e(n).css("height") && (e(n).addClass("loaded"), t.setDialogCenter(), clearInterval(s))
                },
                40)
            })
        },
        _setButtons: function() {
            this.$btnc = this.$el.find(".buttons"),
            this.confirmButton && "" !== e.trim(this.confirmButton) && (this.$confirmButton = e('<button type="button" class="btn">' + this.confirmButton + "</button>").appendTo(this.$btnc).addClass(this.confirmButtonClass)),
            this.cancelButton && "" !== e.trim(this.cancelButton) && (this.buttonsReverse ? this.$cancelButton = e('<button type="button" class="btn">' + this.cancelButton + "</button>").prependTo(this.$btnc).addClass(this.cancelButtonClass) : this.$cancelButton = e('<button type="button" class="btn">' + this.cancelButton + "</button>").appendTo(this.$btnc).addClass(this.cancelButtonClass)),
            this.buttonOther && "" !== e.trim(this.buttonOther) && e(this.buttonOther).prependTo(this.$btnc),
            this.confirmButton || this.cancelButton || this.$btnc.hide(),
            this.confirmButton || this.cancelButton || null !== this.closeIcon || (this.$closeButton = this.$b.find(".closeIcon").show()),
            !0 === this.closeIcon && (this.$closeButton = this.$b.find(".closeIcon").show())
        },
        setTitle: function(e) {
            this.title = void 0 !== e ? e: this.title,
            this.$title.html(this.title || "")
        },
        setIcon: function(e) {
            this.title = "undefined" != typeof string ? e: this.title,
            this.$icon.html(this.icon ? '<i class="' + this.icon + '"></i>': "")
        },
        setContent: function(e) {
            this.content = void 0 === e ? this.content: e,
            "" == this.content ? (this.$content.html(this.content), this.$contentPane.hide()) : (this.$content.html(this.content), this.$contentPane.show()),
            this.$content.hasClass("loading") && (this.$content.removeClass("loading"), this.$btnc.find("button").prop("disabled", !1))
        },
        _getContent: function(t) {
            var i = this;
            if (t = t || this.content, this._isAjax = !1, this.content) if ("string" == typeof this.content) if ("url:" === this.content.substr(0, 4).toLowerCase()) {
                this._isAjax = !0,
                this.$content.addClass("loading"),
                this.$btnc.find("button").prop("disabled", !0);
                var n = this.content.substring(4, this.content.length);
                e.get(n).done(function(e) {
                    i.content = e,
                    i._contentReady.resolve()
                }).always(function(e, t, n) {
                    "function" == typeof i.contentLoaded && i.contentLoaded(e, t, n)
                })
            } else this.setContent(this.content),
            this._contentReady.reject();
            else if ("function" == typeof this.content) {
                this.$content.addClass("loading"),
                this.$btnc.find("button").attr("disabled", "disabled");
                var s = this.content(this);
                "object" != typeof s ? console.error("The content function must return jquery promise.") : "function" != typeof s.always ? console.error("The object returned is not a jquery promise.") : (this._isAjax = !0, s.always(function(e, t) {
                    i._contentReady.resolve()
                }))
            } else console.error("Invalid option for property content, passed: " + typeof this.content);
            else this.content = "",
            this.setContent(this.content),
            this._contentReady.reject();
            this.setDialogCenter()
        },
        _stopCountDown: function() {
            clearInterval(this.timerInterval),
            this.$cd && this.$cd.remove()
        },
        _startCountDown: function() {
            var t = this.autoClose.split("|");
            if (/cancel/.test(t[0]) && "alert" === this.type) return ! 1;
            if (/confirm|cancel/.test(t[0])) {
                this.$cd = e('<span class="countdown"></span>').appendTo(this["$" + t[0] + "Button"]);
                var i = this;
                i.$cd.parent().click();
                var n = t[1] / 1e3;
                this.timerInterval = setInterval(function() {
                    i.$cd.html(" (" + (n -= 1) + ")"),
                    0 === n && (i.$cd.html(""), i.$cd.parent().trigger("click"), clearInterval(i.timerInterval))
                },
                1e3)
            } else console.error("Invalid option " + t[0] + ", must be confirm/cancel")
        },
        reactOnKey: function(t) {
            var i = e(".jconfirm");
            if (i.eq(i.length - 1)[0] !== this.$el[0]) return ! 1;
            var n = t.which;
            if (this.contentDiv.find(":input").is(":focus") && /13|32/.test(n)) return ! 1; - 1 !== e.inArray(n, this.cancelKeys) && (this.$cancelButton ? this.$cancelButton.click() : this.close()),
            -1 !== e.inArray(n, this.confirmKeys) && this.$confirmButton && this.$confirmButton.click()
        },
        setDialogCenter: function() {
            if ("none" == this.$contentPane.css("display")) var t = 0,
            i = 0;
            else {
                var t = this.$content.outerHeight(),
                i = this.$contentPane.height();
                0 == i && (i = t)
            }
            var n = this.$content.outerWidth();
            this.$content.css({
                clip: "rect(0px " + (100 + n) + "px " + t + "px -100px)"
            }),
            this.$contentPane.css({
                height: t
            });
            var s = e(window).height(),
            a = this.$b.outerHeight() - i + t,
            o = (s - a) / 2;
            if (a > s - 100) {
                var r = {
                    "margin-top": 50,
                    "margin-bottom": 50
                };
                e("body").addClass("jconfirm-noscroll")
            } else {
                var r = {
                    "margin-top": o
                };
                e("body").removeClass("jconfirm-noscroll")
            }
            this.$b.css(r)
        },
        close: function() {
            var t = this;
            if (this.isClosed()) return ! 1;
            "function" == typeof this.onClose && this.onClose(),
            this._unwatchContent(),
            t._lastFocused.focus(),
            e(window).unbind("resize." + this._rand),
            this.keyboardEnabled && e(window).unbind("keyup." + this._rand),
            t.$el.find(".jconfirm-bg").removeClass("seen"),
            e("body").removeClass("jconfirm-noscroll"),
            this.$b.addClass(this.closeAnimation);
            var i = "anim-none" == this.closeAnimation ? 0 : this.animationSpeed;
            return setTimeout(function() {
                t.$el.remove()
            },
            25 * i / 100),
            jconfirm.record.closed += 1,
            jconfirm.record.currentlyOpen -= 1,
            !0
        },
        open: function() {
            var e = this;
            if (this.isClosed()) return ! 1;
            e.$el.find(".jconfirm-bg").addClass("seen"),
            this.$b.removeClass(this.animation),
            this.$b.find("input[autofocus]:visible:first").focus(),
            jconfirm.record.opened += 1,
            jconfirm.record.currentlyOpen += 1,
            "function" == typeof this.onOpen && this.onOpen();
            var t = "jconfirm-box" + this._rand;
            return this.$b.attr("aria-labelledby", t).attr("tabindex", -1).focus(),
            this.$title ? this.$title.attr("id", t) : this.$content && this.$content.attr("id", t),
            setTimeout(function() {
                e.$b.css({
                    "transition-property": e.$b.css("transition-property") + ", margin"
                }),
                e._modalReady.resolve()
            },
            this.animationSpeed),
            !0
        },
        isClosed: function() {
            return "" === this.$el.css("display")
        }
    },
    jconfirm.pluginDefaults = {
        template: '<div class="jconfirm"><div class="jconfirm-bg"></div><div class="jconfirm-scrollpane"><div class="container"><div class="row"><div class="jconfirm-box-container"><div class="jconfirm-box" role="dialog" aria-labelledby="labelled" tabindex="-1"><div class="closeIcon">&times;</div><div class="title-c"><span class="icon-c"></span><span class="title"></span></div><div class="content-pane"><div class="content"></div></div><div class="buttons"></div><div class="jquery-clear"></div></div></div></div></div></div></div>',
        title: "提示",
        content: "确定吗",
        contentLoaded: function() {},
        icon: "",
        opacity: null,
        confirmButton: "确定",
        cancelButton: "取消",
        confirmButtonClass: "btn",
        cancelButtonClass: "btn btn-slight",
        buttonsReverse: !1,
        theme: "white",
        animation: "scale",
        closeAnimation: "none",
        animationSpeed: 500,
        animationBounce: 1.2,
        keyboardEnabled: !1,
        rtl: !1,
        confirmKeys: [13],
        cancelKeys: [27],
        container: "body",
        confirm: function() {},
        cancel: function() {},
        backgroundDismiss: !0,
        autoClose: !1,
        closeIcon: null,
        closeIconClass: !1,
        watchInterval: 100,
        columnClass: "pop-container",
        onOpen: function() {},
        onClose: function() {},
        onAction: function() {}
    },
    jconfirm.record = {
        opened: 0,
        closed: 0,
        currentlyOpen: 0
    }
} (jQuery),
function(e, t, i) {
    "use strict";
    var n = (e(t), e(document), !-[1] && t.XMLHttpRequest, !1),
    s = function(t) {
        this.settings = e.extend({},
        s.defaults, t),
        this.init()
    };
    s.defaults = {
        bind: !1,
        wrapClass: "",
        content: "请稍等...",
        title: "提示",
        onCancel: null,
        onOpen: null,
        onConfirm: null,
        onClose: null,
        closeText: !0,
        confirmText: "确定",
        cancelText: "取消",
        position: "center",
        inline: !1,
        isSelecter: !1,
        element: null,
        preKa: "",
        autoTime: null,
        lock: !0,
        closeLayer: !0,
        opacityLock: !1
    },
    s.prototype = {
        init: function() {
            this.create()
        },
        create: function() {
            var t = "",
            i = "",
            n = "",
            s = "",
            a = "",
            o = "",
            r = "";
            this.settings.type && (t = '<i class="icon-dialog icon-dialog-' + this.settings.type + '"></i>'),
            this.settings.lock && (n = '<div class="dialog-layer"></div>', this.settings.opacityLock && (n = '<div class="dialog-layer dialog-opacity-layer"></div>')),
            this.settings.preKa && (s = this.settings.preKa + "_"),
            ("around" == this.settings.position || this.settings.inline) && (a = '<span class="icon-dialog-arrow"></span>'),
            this.settings.closeText && (o = '<a href="javascript:;" class="close" ka="' + s + 'dialog_close"><i class="icon-close"></i></a>'),
            (this.settings.confirmText || this.settings.cancelText) && (r = '<div class="dialog-footer"><div class="btns"></div></div>'),
            i = '<div class="dialog-wrap">' + n + '<div class="dialog-container">' + a + '<div class="dialog-title">' + t + '<h3 class="title">' + this.settings.title + "</h3>" + o + '</div><div class="dialog-con">' + this.settings.content + "</div>" + r + "</div></div>",
            e(".dialog-wrap").length && !this.settings.inline && e(".dialog-wrap").remove(),
            this.settings.inline && this.settings.element ? this.dialog = e(i).appendTo(e(this.settings.element).parent()) : this.dialog = e(i).appendTo("body"),
            (this.settings.onConfirm || this.settings.confirmText) && this.onConfirm(),
            (this.settings.onCancel && !1 !== this.settings.cancelText || this.settings.cancelText) && this.onCancel(),
            this.settings.wrapClass && this.dialog.addClass(this.settings.wrapClass),
            this.settings.type && this.dialog.addClass("dialog-icons-default"),
            this.settings.position && this.position(),
            this.bindEvent(),
            e("body").addClass("dialog-open"),
            e.isFunction(this.settings.onOpen) && (this.settings.bind ? this.settings.onOpen.apply(this, this.dialog) : this.settings.onOpen(this.dialog)),
            this.settings.lock && this.lock(),
            this.autoInter && clearInterval(this.autoInter),
            e.isNumeric(this.settings.autoTime) && this.autoCloseTimer()
        },
        onConfirm: function() {
            var t = this,
            i = this.dialog.find(".dialog-footer .btns");
            e("<span>", {
                ClASS: "btn btn-sure",
                text: t.settings.confirmText,
                ka: (t.settings.preKa ? t.settings.preKa + "_": "") + "dialog_confirm",
                click: function() {
                    e.isFunction(t.settings.onConfirm) ? t.settings.bind ? t.settings.onConfirm.apply(t, t.dialog) : t.settings.onConfirm(t.dialog) : t.close("confirm")
                }
            }).prependTo(i)
        },
        onCancel: function() {
            var t = this,
            i = this.dialog.find(".dialog-footer .btns");
            e("<span>", {
                ClASS: "btn btn-outline btn-cancel",
                text: t.settings.cancelText,
                ka: (t.settings.preKa ? t.settings.preKa + "_": "") + "dialog_cancel",
                click: function() {
                    e.isFunction(t.settings.onCancel) ? t.settings.bind ? t.settings.onCancel.apply(t, t.dialog) : t.settings.onCancel(t.dialog) : t.close("cancel")
                }
            }).prependTo(i)
        },
        size: function() {
            var e = this.dialog.find(".dialog-con");
            this.dialog.find(".dialog-container");
            e.css({
                width: this.settings.width,
                height: this.settings.height
            })
        },
        position: function() {
            if (this.settings.element) {
                var i = this,
                n = i.settings.element,
                s = i.dialog.find(".dialog-container").outerWidth(),
                a = e(n).offset(),
                o = a.left + n.width() / 2;
                o < s && (o = s / 2),
                i.settings.inline || "around" != i.settings.position || i.dialog.css({
                    left: o + "px",
                    top: a.top + "px"
                }),
                i.settings.inline && (i.dialog.get(0).getBoundingClientRect().top > 330 && t.innerHeight - i.dialog.get(0).getBoundingClientRect().top < 280 && i.dialog.addClass("dialog-up-default"), i.settings.isSelecter && e(document).on("click",
                function(t) {
                    t.target == n.get(0) || t.target.parentNode == n.get(0) || e(t.target).closest(".dialog-selecter-default").length || (i.dialog.closest(".dropdown-wrap").removeClass("dropdown-menu-open"), i.close())
                }))
            }
        },
        lock: function() {
            if (!n) {
                var e = this;
                e.dialog.find(".dialog-container");
                this.settings.closeLayer && e.dialog.find(".dialog-layer").on("click",
                function() {
                    e.close()
                })
            }
        },
        unLock: function() {
            this.settings.lock && n && (e("html,body").css("overflow", "visible"), n = !1)
        },
        close: function(t) {
            e.isFunction(this.settings.onClose) && this.settings.onClose(this.dialog, t || ""),
            this.dialog.remove(),
            this.unLock(),
            this.autoInter && clearInterval(this.autoInter),
            e("body").removeClass("dialog-open")
        },
        hide: function(t) {
            e.isFunction(this.settings.onClose) && this.settings.onClose(this.dialog, t || ""),
            this.dialog.hide(),
            this.unLock(),
            e("body").removeClass("dialog-open")
        },
        autoCloseTimer: function() {
            var e = this,
            t = e.dialog.find(".btn-sure"),
            i = e.settings.autoTime,
            n = t.text();
            i && (e.autoInter && clearInterval(e.autoInter), e.autoInter = setInterval(function() {
                i <= 1 ? (clearInterval(e.autoInter), e.close("timer")) : (i--, t.text(n + "(" + i + "s)"))
            },
            1e3))
        },
        bindEvent: function() {
            var i = this;
            this.dialog.find(".close").on("click",
            function() {
                i.close("")
            }),
            e(t).on("resize.dialog",
            function() {
                i.settings.onResize && i.settings.onResize(i.dialog)
            })
        }
    },
    e.dialog = function(e) {
        return new s(e)
    }
} (jQuery, window),
function(e) {
    "use strict";
    Array.prototype.indexOf || (Array.prototype.indexOf = function(e, t) {
        var i;
        if (null == this) throw new TypeError('"this" is null or not defined');
        var n = Object(this),
        s = n.length >>> 0;
        if (0 === s) return - 1;
        var a = +t || 0;
        if (Math.abs(a) === 1 / 0 && (a = 0), a >= s) return - 1;
        for (i = Math.max(a >= 0 ? a: s - Math.abs(a), 0); i < s;) {
            if (i in n && n[i] === e) return i;
            i++
        }
        return - 1
    });
    var t = function(t, i) {
        var i = i || {};
        this.selected = [],
        this.$body = e(document.body),
        this.$element = e(t),
        this.option = e.extend({},
        i),
        this.init()
    },
    i = {
        category: function() {
            var t = e.Deferred();
            return e.get("/common/data/industry.json",
            function(e) {
                t.resolve(e.data)
            }),
            t
        }
    },
    n = {
        container: function() {
            return '<div class="industry-tip"><div class="industry-tip-item fl"></div><span class="fl gray">最多可选3个行业</span><a class="confirm" href="javascript:;">确定</a></div><div class="industry-panel"><div class="data-tips"><div class="spinner spinner-circle"><div class="loader"></div><span>正在加载数据...</span></div></div></div>'
        },
        industry: function(t, i) {
            var n = "<table>",
            s = [];
            i && e.each(i,
            function(e, t) {
                s.push(parseInt(t.code, 10))
            });
            var a = function(t) {
                var i = "";
                return e.each(t,
                function(e, t) {
                    var n = s.indexOf(t.code) > -1 ? "selected": "";
                    i += '<p><span class="' + n + '" data-code="' + t.code + '">' + t.name + "</span></p>"
                }),
                i
            };
            return e.each(t,
            function(e, t) {
                n += "<tr>",
                n += '<td class="industry-category" data-code="' + t.code + '">' + t.name + "</td>",
                n += "<td>",
                n += a(t.subLevelModelList),
                n += "</td>",
                n += "</tr>"
            }),
            n += "</table>"
        }
    };
    t.prototype.init = function() {
        var t = this,
        i = this.$element;
        if (i.hasClass("disabled")) return ! 1;
        i.off("click").on("click",
        function() {
            e(".industry-wrapper").length || t.show()
        })
    },
    t.prototype.toggleSelected = function() {
        var t = this,
        i = "";
        t.selected = [],
        e(".industry-multiple-wrapper .selected").each(function(i, n) {
            t.selected.push({
                name: e(n).text(),
                code: e(n).attr("data-code")
            })
        }),
        e.each(t.selected,
        function(e, t) {
            i += '<p data-code="' + t.code + '"><span class="text">' + t.name + '</span><i class="i-close"></i></p>'
        }),
        e(".industry-multiple-wrapper .industry-tip-item").html(i)
    },
    t.prototype.show = function() {
        var t = this,
        s = t.option.multiple ? "industry-multiple-wrapper ": "";
        t.$dialog = e.dialog({
            bind: !0,
            title: "请选择行业类别",
            content: n.container(),
            closeText: !0,
            confirmText: !1,
            cancelText: !1,
            inline: !0,
            wrapClass: s + "industry-wrapper",
            lock: !0,
            onOpen: function(s) {
                var a = (new Date).getTime();
                e(s).on("click.industry", "table span",
                function() {
                    var i = {
                        name: e(this).text(),
                        code: e(this).attr("data-code")
                    };
                    t.option.multiple ? (t.selected.length < 3 ? e(this).addClass("selected") : e(this).hasClass("selected") || e.toast({
                        type: "warning",
                        content: "最多可选择3个行业"
                    }), t.toggleSelected()) : (t.$element.trigger("selected.industry", i), t.$element.data("selected", [i]), t.close())
                }),
                e(s).on("click.industry", ".industry-tip .i-close",
                function() {
                    var i = e(this).parent("p").attr("data-code");
                    e(s).find(".selected[data-code=" + i + "]").removeClass("selected"),
                    t.toggleSelected()
                }),
                e(s).on("click.industry", ".industry-tip .confirm",
                function() {
                    t.$element.data("selected", t.selected),
                    t.selected.length ? t.$element.trigger("selected.industry", [t.selected]) : t.$element.trigger("selected.industry", [{
                        name: "不限",
                        code: 0
                    }]),
                    t.close()
                }),
                i.category().then(function(i) {
                    var o = (new Date).getTime() - a,
                    r = o > 500 ? o: 500 - o;
                    setTimeout(function() {
                        e(s).find(".industry-panel").html(n.industry(i, t.$element.data("selected"))),
                        t.toggleSelected()
                    },
                    r)
                })
            },
            onClose: function(t) {
                e(t).off("click.industry")
            }
        })
    },
    t.prototype.close = function() {
        this.$dialog && this.$dialog.close()
    };
    var s = function(i) {
        return this.each(function() {
            var n = e(this),
            s = n.data("boss.industry");
            s || n.data("boss.industry", s = new t(this, i)),
            "string" == typeof i && s[i].call(n)
        })
    },
    a = e.fn.industry;
    e.fn.industry = s,
    e.fn.industry.Constructor = t,
    e.fn.industry.noConflict = function() {
        return e.fn.industry = a,
        this
    }
} (jQuery),
function(e, t, i) {
    "use strict";
    var n = (e(t), e(document), !1),
    s = function(t) {
        if ("string" == typeof t) var t = {
            content: t
        };
        this.settings = e.extend({},
        s.defaults, t),
        this.init()
    };
    s.defaults = {
        content: "提示",
        lock: !1,
        wrapClass: null,
        type: null,
        position: "top",
        parentWrap: "body",
        time: 2300
    },
    s.prototype = {
        init: function() {
            this.create(),
            this.settings.lock && this.lock()
        },
        create: function() {
            var t = "",
            i = "",
            n = this;
            this.settings.type && (t = '<i class="icon-toast-' + this.settings.type + '"></i>'),
            i = '<div id="toast"><div class="toast-con">' + t + this.settings.content + "</div></div>",
            e("#toast").length && e("#toast").remove(),
            this.toast = e(i).appendTo(this.settings.parentWrap),
            this.settings.wrapClass && this.toast.addClass(this.settings.wrapClass),
            this.settings.position && this.position(),
            this.time(),
            this.toast.on("click",
            function() {
                n.close()
            })
        },
        position: function() {
            "top" == this.settings.position && this.toast.css("top", 0),
            "center" == this.settings.position && this.toast.css("bottom", 0),
            "bottom" == this.settings.position && this.toast.css("bottom", 0)
        },
        lock: function() {
            n || (e("html,body").css("overflow", "hidden"), n = !0)
        },
        unLock: function() {
            this.settings.lock && n && (e("html,body").css("overflow", "visible"), n = !1)
        },
        close: function() {
            var e = this;
            e.toast.addClass("slideup"),
            setTimeout(function() {
                e.toast.removeClass("slideup").remove()
            },
            500),
            e.unLock()
        },
        time: function() {
            var e = this;
            this.settings.time && "loading" != this.settings.type && (this.closeTimer = setTimeout(function() {
                e.close()
            },
            this.settings.time))
        }
    },
    e.toast = function(e) {
        new s(e)
    }
} (jQuery, window),
function(e, t, i) {
    function n() {
        this.defaultData = [{
            code: "100000",
            name: "技术"
        },
        {
            code: "",
            name: ""
        },
        {
            code: "",
            name: ""
        }],
        this.list = this.defaultData,
        this.active = "active"
    }
    n.prototype = {
        init: function(t) {
            return this.positionType = e('<div class="common-position-type"></div>'),
            this.callback = t.callback,
            this.hasSearch = !!t.hasSearch,
            "object" != typeof t.data ? this.getData(t) : (this.json = t.data, this.addHtml()),
            this.list
        },
        getData: function(t) {
            var i = this;
            e.get(t.data,
            function(e) {
                i.json = e.data,
                i.addHtml()
            })
        },
        addEvent: function() {
            var t = this,
            i = e(".js-dialog-position"),
            n = e(".js-common-position");
            this.$search = i.find(".js-position-search"),
            this.$searchLists = this.$search.find(".position-lists .normal ul"),
            this.$searchBlank = this.$search.find(".position-lists .blank"),
            this.$searchInput = this.$search.find(".position-input input"),
            this.$searchSearchbtn = this.$search.find(".position-input .icon-p-search"),
            this.currentSelection = -1,
            n.off("click"),
            n.on("click", ".js-type li",
            function() {
                t.list[0].code = e(this).attr("data-code"),
                t.list[0].name = e(this).text(),
                t.setOneList(this),
                t.appendTwoList(e(this).attr("data-code"))
            }),
            n.on("click", ".js-content .js-li",
            function() {
                t.list[1].code = e(this).attr("data-code"),
                t.list[1].name = e(this).text(),
                t.getValue(this)
            }),
            n.on("click", ".js-content .js-ol-li",
            function() {
                t.setPop(this),
                t.removeNode(e(".js-dialog-position"))
            }),
            this.$searchInput.on("input focus",
            function() {
                var i = e(this).val().trim();
                t.getSearchList(i)
            }),
            this.$searchInput.on("keydown",
            function(e) {
                t.suggestSelected(e, t)
            }),
            this.$searchSearchbtn.on("click",
            function() {
                var i = e(this).siblings(".ipt").val().trim();
                t.getSearchList(i)
            }),
            this.$searchLists.on("click", "li",
            function() {
                t.setPop(this),
                t.removeNode(e(".js-dialog-position"));
                try {
                    _T.sendEvent("position_keyword_click")
                } catch(e) {}
            }),
            i.on("click",
            function(i) {
                e(i.target).parents(".js-position-search").length || (t.$searchLists.addClass("hide"), t.$searchBlank.addClass("hide"))
            })
        },
        getSearchList: function(e) {
            var t = this,
            i = (t.$search, t.$searchLists),
            n = t.$searchBlank;
            if (!e) return i.html("").addClass("hide"),
            void n.addClass("hide");
            var s = function(e) {
                for (var i = t.json,
                n = [], s = 0; s < i.length; s++) {
                    var a = i[s].name,
                    o = i[s].subLevelModelList || i[s].children;
                    if (o.length) for (var r = 0; r < o.length; r++) {
                        var l = o[r].name,
                        c = o[r].subLevelModelList || o[r].children;
                        if (c.length) for (var d = 0; d < c.length; d++) {
                            var u = c[d].name,
                            p = c[d].code || c[d].id,
                            h = e.toLowerCase(),
                            f = u.toLowerCase();
                            f.indexOf(h) >= 0 && n.push({
                                name: u,
                                code: p,
                                text: a + "-" + l
                            })
                        }
                    }
                }
                return n
            } (e);
            try {
                _T.sendEvent("position_keyword_search")
            } catch(e) {}
            s.length ?
            function(e, s) {
                i.html("");
                for (var a = 0; a < e.length; a++) {
                    var o = e[a].name.toLowerCase(),
                    r = s.toLowerCase(),
                    l = o.indexOf(r),
                    c = r.length,
                    d = e[a].name.substring(0, l) + '<span class="h">' + e[a].name.substring(l, l + c) + "</span>" + e[a].name.substring(l + c);
                    i.append('<li data-code="' + e[a].code + '" data-text="' + e[a].name + '"><p class="p-name">' + d + '</p><span class="p-des">' + e[a].text + "</span></li>")
                }
                i.removeClass("hide"),
                n.addClass("hide"),
                t.currentSelection = -1,
                t.$searchLists.scrollTop(0)
            } (s, e) : (i.html("").addClass("hide"), n.removeClass("hide"))
        },
        suggestSelected: function(t, i) {
            var n = i,
            s = n.$searchLists.find("li");
            if ("" != n.$searchInput.val().trim()) switch (t.which) {
            case 38:
                s.removeClass("selected"),
                -1 == n.currentSelection || 0 == n.currentSelection ? (n.currentSelection = -1, n.currentSelection = s.length - 1) : n.currentSelection--,
                s.eq(n.currentSelection).addClass("selected"),
                n.scrollVisiable(s.eq(n.currentSelection), "up");
                break;
            case 40:
                t.preventDefault(),
                s.removeClass("selected"),
                n.currentSelection > s.length - 2 && (n.currentSelection = -1),
                n.currentSelection++,
                s.eq(n.currentSelection).addClass("selected"),
                n.scrollVisiable(s.eq(n.currentSelection), "down");
                break;
            case 13:
                n.currentSelection = -1;
                var a = n.$searchLists.find("li.selected"),
                o = a.get(0);
                if (a.length) {
                    n.setPop(o),
                    n.removeNode(e(".js-dialog-position"));
                    try {
                        _T.sendEvent("position_keyword_click")
                    } catch(t) {}
                }
                break;
            case 27:
                n.currentSelection = -1,
                n.$searchInput.val(""),
                n.$searchLists.html("").addClass("hide"),
                n.$searchBlank.addClass("hide")
            }
        },
        scrollVisiable: function(t, i) {
            var t = t,
            n = this.$searchLists;
            if (!t) return ! 1;
            var s = n.find("li").length,
            a = e(t).index(),
            o = a > 4 ? a - 4 : 0,
            r = "down" == i && (o < s - 4 || 0 === a),
            l = "up" == i && (a < s - 5 || a == s - 1);
            "up" == i && (o = a),
            (l || r) && n.scrollTop(o * e(t).height())
        },
        addHtml: function() {
            var e = ['<div class="common-position js-common-position">', '<ul class="type js-type"></ul>', '<div class="content js-content"></div>', "</div>"];
            this.positionType.html(e.join("")),
            this.positionType.find(".js-type").append(this.getOneData(this.json)),
            this.appendTwoList(1e5),
            this.dialog(),
            this.addEvent()
        },
        appendTwoList: function(t) {
            var i = this.joinTwoData(this.getTwoData(t)),
            n = e(".js-common-position");
            n = n.length ? n: this.positionType,
            n.find(".js-content").html(i)
        },
        getValue: function(t) {
            var i = e(t).parents(".js-two"),
            n = e(".js-two"),
            s = e(".js-li"),
            a = this.joinThreeData(this.getThreeData(e(t).attr("data-code")));
            this.resetHTML(n, s),
            e(t).addClass(this.active),
            i.append(a)
        },
        getOneData: function(t) {
            var i = this,
            n = "";
            return e.each(t,
            function(e, t) {
                var s = t.name,
                a = i.getCode(t);
                n += 0 === e ? '<li class="active" title="' + s + '" data-code="' + a + '">' + s + "</li>": '<li title="' + s + '" data-code="' + a + '"">' + s + "</li>"
            }),
            n
        },
        getTwoData: function(t) {
            var i = "",
            n = this;
            return e.each(this.json,
            function(e, s) {
                var a = n.getCode(s);
                parseInt(t, 10) === a && (i = s.subLevelModelList || s.children)
            }),
            i
        },
        getThreeData: function(t) {
            var i = "",
            n = this;
            return e.each(this.json,
            function(s, a) {
                var o = a.subLevelModelList || a.children;
                e.each(o,
                function(e, s) {
                    if (n.getCode(s) == t) return i = s.subLevelModelList || s.children,
                    !1
                })
            }),
            i
        },
        removeNode: function(e) {
            e.remove()
        },
        setOneList: function(t) {
            var i = this;
            e(".js-type li").map(function(t, n) {
                e(n).removeClass(i.active)
            }),
            e(t).addClass(this.active)
        },
        joinTwoData: function(t) {
            var i = "",
            n = 0,
            s = this,
            a = t.length || 0;
            return e.each(t,
            function(e, t) {
                var o = s.getCode(t),
                r = t.name;
                e % 4 == 0 && (i += '<div class="js-two"><ul class="navs" data-eq=' + n+++">"),
                i += '<li class="js-li" data-code="' + o + '">' + r + "</li>",
                e % 4 != 3 && e !== a - 1 || (i += "</ul></div>")
            }),
            i
        },
        joinThreeData: function(t) {
            var i = this,
            n = '<ol class="list block">';
            return e.each(t,
            function(e, t) {
                var s = i.getCode(t),
                a = t.name;
                n += '<li class="js-ol-li" data-code="' + s + '">' + a + "</li>"
            }),
            n += "</ol>"
        },
        getCode: function(e) {
            return e.code || e.id
        },
        setPop: function(t) {
            e(".js-dialog-position").hide(),
            this.list[2].code = e(t).attr("data-code"),
            this.list[2].name = e(t).attr("data-text") || e(t).text(),
            this.callback(this.list),
            this.list = this.defaultData
        },
        resetHTML: function(t, i) {
            var n = this;
            t.map(function(t, i) {
                e(i).find("ol").remove()
            }),
            i.map(function(t, i) {
                e(i).removeClass(n.active)
            })
        },
        getDialogTitleView: function() {
            if (this.hasSearch) {
                return '<div class="position-search js-position-search s-position-search"><div class="position-input"><input class="ipt" placeholder="请输入职位关键词" type="text" name=""><i class="icon-p-search"></i></div><div class="position-lists"><div class="normal"><ul class="hide"></ul></div><div class="blank hide">暂无匹配职位，请自行在下方选择添加</div></div></div>'
            }
            return ""
        },
        dialog: function() {
            e.dialog({
                title: "请选择职类" + this.getDialogTitleView(),
                content: this.positionType.html(),
                closeText: !0,
                confirmText: "",
                cancelText: "",
                wrapClass: "layer-position js-dialog-position",
                preKa: "",
                inline: !1
            })
        }
    },
    e.Position = n
} (jQuery, window),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(window.jQuery)
} (function(e) {
    "use strict";
    var t = "dmUploader",
    i = {
        PENDING: 0,
        UPLOADING: 1,
        COMPLETED: 2,
        FAILED: 3,
        CANCELLED: 4
    },
    n = {
        auto: !0,
        queue: !0,
        dnd: !0,
        hookDocument: !0,
        multiple: !0,
        url: document.URL,
        method: "POST",
        extraData: {},
        headers: {},
        dataType: null,
        fieldName: "file",
        maxFileSize: 0,
        allowedTypes: "*",
        extFilter: null,
        onInit: function() {},
        onComplete: function() {},
        onFallbackMode: function() {},
        onNewFile: function() {},
        onBeforeUpload: function() {},
        onUploadProgress: function() {},
        onUploadSuccess: function() {},
        onUploadCanceled: function() {},
        onUploadError: function() {},
        onUploadComplete: function() {},
        onFileTypeError: function() {},
        onFileSizeError: function() {},
        onFileExtError: function() {},
        onDragEnter: function() {},
        onDragLeave: function() {},
        onDocumentDragEnter: function() {},
        onDocumentDragLeave: function() {}
    },
    s = function(e, t) {
        this.data = e,
        this.widget = t,
        this.jqXHR = null,
        this.status = i.PENDING,
        this.id = Math.random().toString(36).substr(2)
    };
    s.prototype.upload = function() {
        var t = this;
        if (!t.canUpload()) return t.widget.queueRunning && t.status !== i.UPLOADING && t.widget.processQueue(),
        !1;
        var n = new FormData;
        n.append(t.widget.settings.fieldName, t.data);
        var s = t.widget.settings.extraData;
        return "function" == typeof s && (s = s.call(t.widget.element, t.id)),
        e.each(s,
        function(e, t) {
            n.append(e, t)
        }),
        t.status = i.UPLOADING,
        t.widget.activeFiles++,
        t.widget.settings.onBeforeUpload.call(t.widget.element, t.id),
        t.jqXHR = e.ajax({
            url: t.widget.settings.url,
            type: t.widget.settings.method,
            dataType: t.widget.settings.dataType,
            data: n,
            headers: t.widget.settings.headers,
            cache: !1,
            contentType: !1,
            processData: !1,
            forceSync: !1,
            xhr: function() {
                return t.getXhr()
            },
            success: function(e) {
                t.onSuccess(e)
            },
            error: function(e, i, n) {
                t.onError(e, i, n)
            },
            complete: function() {
                t.onComplete()
            }
        }),
        !0
    },
    s.prototype.onSuccess = function(e) {
        this.status = i.COMPLETED,
        this.widget.settings.onUploadSuccess.call(this.widget.element, this.id, e)
    },
    s.prototype.onError = function(e, t, n) {
        this.status !== i.CANCELLED && (this.status = i.FAILED, this.widget.settings.onUploadError.call(this.widget.element, this.id, e, t, n))
    },
    s.prototype.onComplete = function() {
        this.widget.activeFiles--,
        this.status !== i.CANCELLED && this.widget.settings.onUploadComplete.call(this.widget.element, this.id),
        this.widget.queueRunning ? this.widget.processQueue() : this.widget.settings.queue && 0 === this.widget.activeFiles && this.widget.settings.onComplete.call(this.element)
    },
    s.prototype.getXhr = function() {
        var t = this,
        i = e.ajaxSettings.xhr();
        return i.upload && i.upload.addEventListener("progress",
        function(e) {
            var i = 0,
            n = e.loaded || e.position,
            s = e.total || e.totalSize;
            e.lengthComputable && (i = Math.ceil(n / s * 100)),
            t.widget.settings.onUploadProgress.call(t.widget.element, t.id, i)
        },
        !1),
        i
    },
    s.prototype.cancel = function(e) {
        e = void 0 !== e && e;
        var t = this.status;
        return !! (t === i.UPLOADING || e && t === i.PENDING) && (this.status = i.CANCELLED, this.widget.settings.onUploadCanceled.call(this.widget.element, this.id), t === i.UPLOADING && this.jqXHR.abort(), !0)
    },
    s.prototype.canUpload = function() {
        return this.status === i.PENDING || this.status === i.FAILED
    };
    var a = function(t, i) {
        return this.element = e(t),
        this.settings = e.extend({},
        n, i),
        this.checkSupport() ? (this.init(), this) : (alert("您的浏览器版本太低，不支持上传文件"), e.error("Browser not supported by jQuery.dmUploader"), this.settings.onFallbackMode.call(this.element), !1)
    };
    a.prototype.checkSupport = function() {
        return void 0 !== window.FormData && (!new RegExp("/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle/(1.0|2.0|2.5|3.0))/").test(window.navigator.userAgent) && !e('<input type="file" />').prop("disabled"))
    },
    a.prototype.init = function() {
        var t = this;
        this.queue = [],
        this.queuePos = -1,
        this.queueRunning = !1,
        this.activeFiles = 0,
        this.draggingOver = 0,
        this.draggingOverDoc = 0;
        var i = t.element.is("input[type=file]") ? t.element: t.element.find("input[type=file]");
        return i.length > 0 && (i.prop("multiple", this.settings.multiple), i.on("change.dmUploader",
        function(i) {
            var n = i.target && i.target.files;
            n && n.length && (t.addFiles(n), e(this).val(""))
        })),
        this.settings.dnd && this.initDnD(),
        0 !== i.length || this.settings.dnd ? (this.settings.onInit.call(this.element), this) : (e.error("Markup error found by jQuery.dmUploader"), null)
    },
    a.prototype.initDnD = function() {
        var t = this;
        t.element.on("drop.dmUploader",
        function(e) {
            e.preventDefault(),
            t.draggingOver > 0 && (t.draggingOver = 0, t.settings.onDragLeave.call(t.element));
            var i = e.originalEvent && e.originalEvent.dataTransfer;
            if (i && i.files && i.files.length) {
                var n = [];
                t.settings.multiple ? n = i.files: n.push(i.files[0]),
                t.addFiles(n)
            }
        }),
        t.element.on("dragenter.dmUploader",
        function(e) {
            e.preventDefault(),
            0 === t.draggingOver && t.settings.onDragEnter.call(t.element),
            t.draggingOver++
        }),
        t.element.on("dragleave.dmUploader",
        function(e) {
            e.preventDefault(),
            0 === --t.draggingOver && t.settings.onDragLeave.call(t.element)
        }),
        t.settings.hookDocument && (e(document).off("drop.dmUploader").on("drop.dmUploader",
        function(e) {
            e.preventDefault(),
            t.draggingOverDoc > 0 && (t.draggingOverDoc = 0, t.settings.onDocumentDragLeave.call(t.element))
        }), e(document).off("dragenter.dmUploader").on("dragenter.dmUploader",
        function(e) {
            e.preventDefault(),
            0 === t.draggingOverDoc && t.settings.onDocumentDragEnter.call(t.element),
            t.draggingOverDoc++
        }), e(document).off("dragleave.dmUploader").on("dragleave.dmUploader",
        function(e) {
            e.preventDefault(),
            0 === --t.draggingOverDoc && t.settings.onDocumentDragLeave.call(t.element)
        }), e(document).off("dragover.dmUploader").on("dragover.dmUploader",
        function(e) {
            e.preventDefault()
        }))
    },
    a.prototype.releaseEvents = function() {
        this.element.off(".dmUploader"),
        this.element.find("input[type=file]").off(".dmUploader"),
        this.settings.hookDocument && e(document).off(".dmUploader")
    },
    a.prototype.validateFile = function(t) {
        if (this.settings.maxFileSize > 0 && t.size > this.settings.maxFileSize) return this.settings.onFileSizeError.call(this.element, t),
        !1;
        if ("*" !== this.settings.allowedTypes && !t.type.match(this.settings.allowedTypes)) return this.settings.onFileTypeError.call(this.element, t),
        !1;
        if (null !== this.settings.extFilter) {
            var i = t.name.toLowerCase().split(".").pop();
            if (e.inArray(i, this.settings.extFilter) < 0) return this.settings.onFileExtError.call(this.element, t),
            !1
        }
        return new s(t, this)
    },
    a.prototype.addFiles = function(e) {
        for (var t = 0,
        i = 0; i < e.length; i++) {
            var n = this.validateFile(e[i]);
            if (n) { ! 1 !== this.settings.onNewFile.call(this.element, n.id, n.data) && (this.settings.auto && !this.settings.queue && n.upload(), this.queue.push(n), t++)
            }
        }
        return 0 === t ? this: (this.settings.auto && this.settings.queue && !this.queueRunning && this.processQueue(), this)
    },
    a.prototype.processQueue = function() {
        return++this.queuePos >= this.queue.length ? (0 === this.activeFiles && this.settings.onComplete.call(this.element), this.queuePos = this.queue.length - 1, this.queueRunning = !1, !1) : (this.queueRunning = !0, this.queue[this.queuePos].upload())
    },
    a.prototype.restartQueue = function() {
        this.queuePos = -1,
        this.queueRunning = !1,
        this.processQueue()
    },
    a.prototype.findById = function(e) {
        for (var t = !1,
        i = 0; i < this.queue.length; i++) if (this.queue[i].id === e) {
            t = this.queue[i];
            break
        }
        return t
    },
    a.prototype.cancelAll = function() {
        var e = this.queueRunning;
        this.queueRunning = !1;
        for (var t = 0; t < this.queue.length; t++) this.queue[t].cancel();
        e && this.settings.onComplete.call(this.element)
    },
    a.prototype.startAll = function() {
        if (this.settings.queue) this.restartQueue();
        else for (var e = 0; e < this.queue.length; e++) this.queue[e].upload()
    },
    a.prototype.methods = {
        start: function(t) {
            if (this.queueRunning) return ! 1;
            var n = !1;
            return void 0 === t || (n = this.findById(t)) ? n ? (n.status === i.CANCELLED && (n.status = i.PENDING), n.upload()) : (this.startAll(), !0) : (e.error("File not found in jQuery.dmUploader"), !1)
        },
        cancel: function(t) {
            var i = !1;
            return void 0 === t || (i = this.findById(t)) ? i ? i.cancel(!0) : (this.cancelAll(), !0) : (e.error("File not found in jQuery.dmUploader"), !1)
        },
        reset: function() {
            return this.cancelAll(),
            this.queue = [],
            this.queuePos = -1,
            this.activeFiles = 0,
            !0
        },
        destroy: function() {
            this.cancelAll(),
            this.releaseEvents(),
            this.element.removeData(t)
        }
    },
    e.fn.dmUploader = function(i) {
        var n = arguments;
        if ("string" != typeof i) return this.each(function() {
            e.data(this, t) || e.data(this, t, new a(this, i))
        });
        this.each(function() {
            var s = e.data(this, t);
            s instanceof a ? "function" == typeof s.methods[i] ? s.methods[i].apply(s, Array.prototype.slice.call(n, 1)) : e.error("Method " + i + " does not exist in jQuery.dmUploader") : e.error("Unknown plugin data found by jQuery.dmUploader")
        })
    }
});
var Payment = function() {
    function e(e) {
        var e = $.extend({
            article: "",
            text: "",
            confirmText: "确定",
            close: function() {},
            confirm: function() {}
        },
        e),
        t = function() {
            var t = this.$content,
            i = this;
            t.on("click", ".success-confirm",
            function() {
                i.close(),
                e.confirm("confirm")
            }),
            t.on("click", ".success-cancel",
            function() {
                i.close(),
                e.confirm("close")
            })
        };
        $.confirm({
            backgroundDismiss: !1,
            content: o.success(e),
            confirmButton: !1,
            cancelButton: !1,
            buttonsReverse: !0,
            closeIcon: !1,
            columnClass: "pop-payment",
            title: !1,
            onOpen: t,
            onClose: e.close,
            ononfirm: e.confirm
        })
    }
    function t(e, t, i) {
        var n, s = !0,
        o = {
            orderNo: e.orderNo,
            detailNo: e.detailNo
        };
        e.query && (o = $.extend(o, e.query));
        var t = $.extend({
            success: function() {},
            fail: function() {}
        },
        t),
        r = function(i) {
            s && (n.close(), i.ptype = e.data.payType, t.success(i))
        },
        l = function() {
            $(".pop-payment .PaymentCheck").html('<i class="loader-gray-17"></i>正在查询支付结果，请稍后'),
            a.get.queryStatus(o).then(function(e) {
                if (1 != e.state) {
                    $(".pop-payment .PaymentCheck").html('<span class="gray">未支付成功，请您扫码完成支付。</span><a class="PayCheckBtn" href="javascript:">重新查询</a>')
                } else s = !1,
                r(e)
            })
        },
        c = function() {
            a.get.queryStatus(o).then(function(e) {
                1 == e.state ? (s && r(e), s = !1) : s && setTimeout(c, 3e3)
            })
        },
        d = function() {
            var e = this.$content;
            n = this,
            setTimeout(c, 1500),
            e.on("click", ".PayCheckBtn", l)
        },
        u = function() {
            s = !1,
            t.close && t.close()
        },
        p = function() {}; !
        function(e) {
            $.confirm({
                content: e,
                confirmButton: !1,
                cancelButton: !1,
                buttonsReverse: !0,
                closeIcon: !1,
                columnClass: "pop-payment",
                title: !1,
                onOpen: d,
                onClose: u,
                confirm: p
            })
        } (i)
    }
    function i(e, t) {
        var i, r = {
            success: function() {},
            cancel: function() {},
            fail: function() {}
        },
        t = $.extend(r, t),
        e = $.extend({
            recharge: !1
        },
        e),
        l = function(e, t) {
            a.post.purchase(e, t).then(function(a) {
                var o = !!e.condition && e.condition(a);
                return 1 != a.rescode ? ($.toast({
                    type: "error",
                    content: a.resmsg
                }), !1) : o ? e.success(a) : 1 == e.data.payType ? (i && i.close("confirm"), t.buy && t.buy({
                    pay: e.amount,
                    orderNo: a.orderNo,
                    balance: e.balance,
                    payType: e.data.payType
                }), e.success(a)) : (e.qrCode = a.qrUrl, e.orderNo = a.orderNo, e.detailNo = a.detailNo, 2 == e.data.payType ? n(e, t) : s(e, t), t.buy && t.buy({
                    pay: e.amount,
                    balance: e.balance,
                    payType: e.data.payType,
                    orderNo: a.orderNo
                }), void(i && i.close("confirm")))
            },
            function() {})
        },
        c = function() {
            var n = this.$content;
            i = this,
            n.on("click", ".prop-order-type p",
            function() {
                if ($(this).hasClass("selected") || $(this).hasClass("disabled")) return ! 1;
                n.find(".prop-order-type .selected").addClass("disabled").removeClass("selected"),
                $(this).addClass("selected").addClass("disabled"),
                e.data.payType = $(this).attr("data-payType"),
                l(e, t)
            }),
            n.on("click", ".btn-block",
            function() {
                if ($(this).hasClass("disabled")) return ! 1;
                e.data.payType = 1,
                $(this).addClass("disabled"),
                l(e, t)
            }),
            n.on("click", ".item-coupon-list span",
            function() {
                $(this).hasClass("selected") ? $(this).removeClass("selected") : ($(".item-coupon-list .selected").removeClass("selected"), $(this).addClass("selected"));
                var t = $(this).index(),
                i = e.userCouponList[t];
                $(this).hasClass("selected") ? (e.coupon = i.offBean, e.data.userCouponId = i.encryptId, n.find(".coupon-left").hide(), n.find(".coupon-selected").text("-" + e.coupon + "直豆").show()) : (e.coupon = 0, e.data.userCouponId = "", n.find(".coupon-left").show(), n.find(".coupon-selected").hide());
                var s = 1e3 * e.amount,
                a = 1e3 * e.coupon;
                e.pay = s > a ? (s - a) / 1e3: 0,
                e.pay <= e.balance ? (e.data.payType = 1, e.cost = 0) : (e.pay = e.pay - e.balance, e.cost = e.pay),
                n.find(".pay-amount").text(e.pay + "直豆"),
                e.cost > 0 || e.recharge ? (n.find(".prop-order-type").show(), n.find(".btn-block").hide()) : (n.find(".btn-block").show(), n.find(".prop-order-type").hide())
            }),
            n.on("click", ".coupon-left",
            function() {
                n.find(".item-coupon").toggleClass("unfold")
            }),
            n.on("click", ".coupon-selected",
            function() {
                n.find(".item-coupon").toggleClass("unfold")
            }),
            n.on("click", ".bead-close",
            function() {
                i.close(),
                t.cancel && t.cancel()
            })
        },
        d = function() {
            return t.fail()
        },
        u = function() {},
        p = function(e) {
            $.confirm({
                backgroundDismiss: !1,
                content: e,
                confirmButton: !1,
                cancelButton: !1,
                buttonsReverse: !0,
                closeIcon: !1,
                columnClass: "pop-payment",
                title: !1,
                onOpen: c,
                onClose: d,
                confirm: u
            })
        };
        if ($(".pop-payment").length) return ! 1;
        if (e.recharge) p(o.recharge(e));
        else {
            var h = e.itemId || "",
            f = $.extend(e.data, {
                itemId: h
            }),
            m = e.prePayUrl || "";
            a.get.detail(f, m).then(function(i) {
                var n = i.data,
                s = parseInt(n.remainBean, 10),
                a = {
                    couponId: "",
                    itemIcon: n.itemIcon,
                    balance: s,
                    amount: n.payBean,
                    pay: n.payBean,
                    userCouponList: n.userCouponList,
                    description: n.itemDesc ? n.itemDesc: e.description
                },
                r = n.userCouponList.filter(function(e) {
                    return e.selected
                });
                e = $.extend(e, a),
                r.length ? (e.coupon = r[0].offBean, e.pay = e.pay > e.coupon ? e.pay - e.coupon: 0, e.data.userCouponId = r[0].encryptId) : e.coupon = 0,
                e.pay <= s ? (e.data.payType = 1, e.cost = 0) : (e.pay = e.pay - s, e.cost = e.pay),
                0 == e.amount ? l(e, t) : p(o.purchase(e))
            })
        }
    }
    function n(e, i) {
        var n = {
            type: "wx",
            name: "微信支付",
            pay: e.pay,
            qrCode: e.qrCode
        };
        t(e, i, o.pay(n)),
        __conversion("payment_wx")
    }
    function s(e, i) {
        var n = {
            type: "zfb",
            name: "支付宝",
            pay: e.pay,
            qrCode: e.qrCode
        };
        t(e, i, o.pay(n)),
        __conversion("payment_zfb")
    }
    var a = {},
    o = {},
    r = {};
    return a.get = {},
    a.post = {},
    a.get.detail = function(e, t) {
        var i = $.Deferred(),
        n = "/boss/item/prepay.json";
        return e.priceId && (n = "/boss/block/prepay.json"),
        t && (n = t),
        r.query = $.get(n, e).success(function(e) {
            if (1011 == e.code) return window.location.href = "/user/login.html?ka=header-login",
            !1;
            1 == e.rescode ? i.resolve(e) : $.toast({
                type: "error",
                content: e.resmsg
            })
        }),
        i
    },
    a.get.queryStatus = function(e) {
        var t = $.Deferred();
        return $.ajax({
            method: "post",
            url: "/bean/orderAliSync",
            data: e,
            cache: !1,
            success: function(e) {
                1 == e.rescode ? t.resolve(e) : $.toast({
                    type: "error",
                    content: e.resmsg
                })
            }
        }),
        t
    },
    a.post.purchase = function(e, t) {
        var i = $.Deferred();
        return $.ajax({
            method: "post",
            url: e.url,
            data: e.data,
            cache: !1,
            success: function(e) {
                if (1 != e.rescode) return $.toast({
                    type: "error",
                    content: e.resmsg
                }),
                i.reject(e),
                t.fail();
                i.resolve(e)
            },
            error: function() {
                return t.fail()
            }
        }),
        i
    },
    o.pay = function(e) {
        return Utemplate('<div class="mb-payment"><p class="mb-payment-title"><img src="/v2/web/boss/images/icon-shield.png" />安全支付</p><div class="mb-pay-info"><i class="icon-<%this.type%>"></i><%this.name%><i class="currency">￥</i><i class="amount"><%this.pay%></i></div><div class="qr-code"><img src="<%this.qrCode%>" /></div><div class="mb-payment-result PaymentCheck"><span class="gray">使用<%this.name%>扫码支付</span><a class="PayCheckBtn" href="javascript:">我已支付</a></div></div>', e)
    },
    o.purchase = function(e) {
        return Utemplate('<div class="mb-payment"><p class="mb-payment-title"><img src="/v2/web/boss/images/icon-shield.png" /><%if(this.article){%><%this.article%><%}else{%>确认支付<%}%><i class="bead-close"></i></p><dl class="order-detail"><dt><img src="<%this.itemIcon%>"><span class="item-name"><%this.description%></span><span class="fr"><%this.amount%>直豆</span></dt><%if (0 < this.userCouponList.length) {%><dd class="item-coupon <%if(0 < this.coupon){%>unfold<%}%>"><p>优惠券<span class="fr coupon-selected" <%if(0 < this.coupon){%>style="display: block;"<%}%>>-<%this.coupon%>直豆</span><span class="fr coupon-left" <%if(0 < this.coupon){%>style="display: none;"<%}%>><%this.userCouponList.length%>张可用</span></p><div class="item-coupon-list"><%for(var i=0;i<this.userCouponList.length;i++){%><span data-id="<%this.userCouponList[i].encryptId%>" <%if(this.userCouponList[i].selected){%>class="selected"<%}%>>减<%this.userCouponList[i].offBean%>直豆</span><%}%></div></dd><%}%><dd>直豆余额<span class="fr"><%this.balance%>直豆</span></dd><dd>还需支付<span class="fr pay-amount"><%this.pay%>直豆</span></dd></dl><div class="prop-order"><div class="prop-order-type" <%if(0 == this.cost){%>style="display: none;"<%}%>> <div class="prop-type-article">直豆余额不足，请选择支付方式：</div> <p class="fl payment-wx" data-type="wx" data-payType="2"><i class="icon-wx"></i>微信支付</p> <p class="fr payment-zfb" data-type="zfb" data-payType="3"><i class="icon-zfb"></i>支付宝</p> </div><div class="prop-buttons"><button class="btn btn-block"  <%if(0 != this.cost){%>style="display: none;"<%}%>>立即支付</button></div></div></div>', e)
    },
    o.recharge = function(e) {
        return Utemplate('<div class="mb-payment"><p class="mb-payment-title"><img src="/v2/web/boss/images/icon-shield.png" />确认支付<i class="bead-close"></i></p><dl class="order-detail"><dt><img src="/v2/web/boss/images/prop/icon-bean.png" /><span class="item-name"><%this.description%></span><span class="fr"><%this.amount%>直豆</span></dt><dd>支付金额<span class="fr pay-amount">￥<%this.pay%></span></dd></dl><div class="prop-order"><div class="prop-order-type"> <div class="prop-type-article">请选择支付方式：</div> <p class="fl payment-wx" data-type="wx" data-payType="2"><i class="icon-wx"></i>微信支付</p> <p class="fr payment-zfb" data-type="zfb" data-payType="3"><i class="icon-zfb"></i>支付宝</p> </div></div></div>', e)
    },
    o.success = function(e) {
        return Utemplate('<div class="mb-payment"><p class="mb-payment-title"><img src="/v2/web/boss/images/icon-shield.png" />安全支付</p><div class="pay-info-text"><img src="/v2/web/boss/images/layer/succ.png" /><p class="article"><%this.article%></p><div class="text gray"><%this.text%></div><p><%if(this.cancelText){%><a href="javascript:" class="success-cancel btn"><%this.cancelText%></a><%}%><a href="javascript:" class="success-confirm btn"><%this.confirmText%></a></p></div></div>', e)
    },
    {
        wx: n,
        zfb: s,
        success: e,
        purchase: i,
        balance: a.get.balance
    }
} (),
Purchase = function() {
    function e(e, t, i) {
        Payment.success({
            article: e || "购买成功",
            text: t || "",
            confirm: function() {
                i.confirm && i.confirm()
            },
            close: function() {
                i.close && i.close()
            }
        })
    }
    function t(t, i, n) {
        "-1" == n.item.view ? n.item.view = "不限": n.item.view = (n.item.view + "").replace("人", "") + "人";
        var s = n.action ? n.action: "发布",
        a = {
            ordinary: {
                1 : "火爆职位普通版" + s + "成功！可保持职位在线<%this.description%>，期间每日查看牛人上限<%this.view%>，开聊上限<%this.employ%>。",
                2 : "",
                3 : "火爆职位普通版" + n.action + "成功！可保持职位在线<%this.description%>，期间每日查看牛人上限<%this.view%>，开聊上限<%this.employ%>。",
                4 : "已成功升级至火爆职位畅聊版！当前剩余有效期<%this.restDays%>天，期间每日查看牛人<%this.view%>，开聊<%this.employ%>人。"
            },
            carefree: {
                1 : "火爆职位畅聊版发布成功！可保持职位在线<%this.description%>，期间每日查看牛人<%this.view%>，开聊牛人<%this.employ%>。",
                2 : "",
                3 : "火爆职位畅聊版" + n.action + "成功！可保持职位在线<%this.description%>，期间每日查看牛人<%this.view%>，开聊牛人<%this.employ%>。",
                4 : "已成功升级至火爆职位畅聊版！当前剩余有效期<%this.restDays%>天，期间每日查看牛人<%this.view%>，开聊<%this.employ%>人。"
            },
            experience: {
                1 : "火爆职位普通版发布成功！该职位可免费在线<%this.expiredays%>天，为避免影响招聘，请及时延长招聘时长。",
                2 : "火爆职位普通版发布成功！该职位可免费在线<%this.expiredays%>天，为避免影响招聘，请及时延长招聘时长。",
                3 : "火爆职位普通版发布成功！该职位可免费在线<%this.expiredays%>天，为避免影响招聘，请及时延长招聘时长。",
                4 : "火爆职位普通版发布成功！该职位可免费在线<%this.expiredays%>天，为避免影响招聘，请及时延长招聘时长。",
                5 : "火爆职位普通版发布成功！该职位可免费在线<%this.expiredays%>天，为避免影响招聘，请及时延长招聘时长。"
            }
        },
        o = {
            ordinary: {
                1 : "火爆职位-普通版",
                2 : "",
                3 : "火爆职位-普通版",
                4 : "火爆职位-普通版"
            },
            carefree: {
                1 : "火爆职位-畅聊版",
                2 : "",
                3 : "火爆职位-畅聊版",
                4 : "火爆职位-畅聊版"
            },
            experience: {
                1 : "火爆职位",
                2 : "",
                3 : "",
                4 : "",
                5 : "火爆职位"
            }
        },
        r = {
            0 : {
                1 : "block_sendjob_purchase_hot_",
                2 : "block_extendjob_purchase_hot_",
                3 : "block_openjob_purchase_hot_",
                4 : "block_upgradejob_purchase_hot_"
            },
            1 : {
                1 : "block_sendjob_purchase_super_",
                2 : "block_extendjob_purchase_super_",
                3 : "block_openjob_purchase_super_",
                4 : "block_upgradejob_purchase_super_"
            }
        };
        try {
            var l = r[i.hotJobType][i.action] + i.priceId;
            _T.sendEvent(l)
        } catch(e) {}
        var s = n.item.type || "ordinary",
        c = Utemplate(a[s][i.action], n.item),
        d = o[s][i.action],
        u = n.action ? n.action + "成功": "发布成功",
        p = function(t) {
            e(u, c, n),
            "function" == typeof n.success && n.success(t)
        },
        h = {
            url: t,
            data: i,
            description: d,
            amount: n.item.pay,
            success: p
        },
        f = {
            success: function(e) {
                var t = {
                    1 : "bean",
                    2 : "wx",
                    3 : "zfb"
                };
                window.top.__conversion(r[i.hotJobType][i.action] + t[e.ptype] + "_" + i.priceId),
                p(e)
            }
        };
        Payment.purchase(h, f)
    }
    return {
        vip: function(e, t) {
            var i = t || {},
            n = function() {
                $.toast({
                    type: "success",
                    content: "您已成功购买VIP账号，可在VIP权益页面查看使用明细"
                }),
                i.success && i.success()
            },
            s = {
                url: "/boss/item/pay/vipaccount.json",
                data: e,
                description: "购买道具：「VIP账号」- 1个月",
                amount: parseInt(e.amount, 10),
                success: n
            },
            a = {
                success: n
            };
            Payment.purchase(s, a)
        },
        position: t,
        commercial: function(t, i) {
            var n = 11 == i.item.business ? "普通职位": "火爆职位",
            s = "";
            i.item && i.item.categoryList && i.item.categoryList.filter(function(e) {
                return e.name && e.name.indexOf("道具购买折扣") > -1
            }).length && (s = "（VIP道具专享价目前只支持6.12以上版本和网页版使用，暂不支持iOS）");
            var a = {
                1 : "免费试用火爆职位",
                2 : n + "-<%this.priceName%>",
                3 : "升级VIP账号",
                4 : "购买聊天加油包",
                5 : "升级VIP账号",
                6 : n + "-<%this.priceName%>",
                7 : "",
                8 : ""
            },
            o = {
                1 : "火爆职位发布成功！该职位可<%this.title%>，为避免影响招聘，请及时延长招聘时长。",
                2 : n + "<%this.priceName%>发布成功！可保持职位在线一个月，期间可<%this.descList[1].bottomDesc%>牛人<%this.descList[1].count%><%this.descList[1].unitDesc%>，<%this.descList[0].bottomDesc%><%this.descList[0].count%><%this.descList[0].unitDesc%>。",
                3 : "您已成功购买VIP账号，可在VIP权益页面查看使用明细" + s,
                4 : "您已成功购买「聊天加油包」，<%this.inDate%>内，每日主动沟通人数<%this.chat%>，赠送主动查看人数<%this.view%>。",
                5 : "您已成功购买VIP账号，可在VIP权益页面查看使用明细" + s,
                6 : n + "<%this.priceName%>发布成功！可保持职位在线<%this.expireName%>，期间可<%this.descList[1].bottomDesc%>牛人<%this.descList[1].count%><%this.descList[1].unitDesc%>，<%this.descList[0].bottomDesc%><%this.descList[0].count%><%this.descList[0].unitDesc%>。",
                7 : "",
                8 : ""
            };
            4 == i.item.cardId && (i.item.chat = i.item.chatDescList[0], i.item.inDate = i.item.chatDescList[1], i.item.view = "+" + 2 * parseInt(i.item.chat, 10) + "次");
            var r = i.item,
            l = r.cardId,
            c = Utemplate(a[l], r),
            d = Utemplate(o[l], r),
            u = function() {
                var t = function() {};
                i.success ? t = i.success: i.confirm && (t = i.confirm),
                e(c, d, {
                    confirm: t
                })
            },
            p = {
                url: "/boss/block/pay.json",
                data: t,
                tid: r.p || "",
                description: c,
                amount: parseInt(r.beanCount, 10),
                success: u
            };
            i.item.article && (p.article = i.item.article);
            var h = {
                buy: function(e) {
                    var t = {
                        action: "confirm-payment",
                        p: "",
                        p2: r.beanCount,
                        p3: e.balance,
                        p4: e.pay,
                        p5: e.pay
                    };
                    Block.action(t)
                },
                success: u
            };
            Payment.purchase(p, h)
        }
    }
} (),
Recharge = function() {
    function e(e) {
        var t = {
            recharge: !0,
            url: e.url || "/boss/item/rechargebean.json",
            amount: e.amount,
            pay: e.pay,
            description: "直豆充值：" + e.amount + "个",
            data: {
                beanCount: e.amount
            }
        },
        i = {
            success: function(t) {
                e.save ? Payment.success({
                    article: "直豆充值成功",
                    text: "本次充值为您节省了" + e.save + "元"
                }) : Payment.success({
                    article: "直豆充值成功",
                    text: "你可以在 BOSS直聘 APP「钱包」中查看充值明细"
                }),
                "function" == e.callback && e.callback({
                    pay: e.pay,
                    save: e.save,
                    amount: e.amount
                })
            }
        };
        Payment.purchase(t, i)
    }
    function t(t) {
        var i = function(e) {
            var e = $(".recharge-beans-rebate .selected").length ? parseInt($(".recharge-beans-rebate .selected").attr("data-amount"), 10) : $(".recharge-beans-rebate .ipt").val();
            if ($(".recharge-beans-rebate .order-info").remove(), e > 0) {
                $(".recharge-beans-rebate .btn-sure").removeClass("disabled");
                var t = a(e, n(e)),
                i = '<div class="order-info">支付金额<span class="order-amount">￥' + t.pay + '</span><span class="gray">(已减' + t.save + "元）</span></div>";
                $(i).insertBefore($(".recharge-beans-rebate .btns"))
            } else $(".recharge-beans-rebate .btn-sure").addClass("disabled")
        },
        n = function(e) {
            var i = 0;
            for (var n in t.discountInfo.rangeDiscount) {
                e >= parseInt(n, 10) && (i = t.discountInfo.rangeDiscount[n])
            }
            return i
        },
        o = function(e) {
            $(e).on("input", ".ipt-amount",
            function() {
                var t = $(this).val().replace(/\D+/g, "");
                t.length && (t = parseInt($(this).val(), 10)),
                $(this).val(t),
                $(e).find(".recharge-rebate-panel .selected").removeClass("selected"),
                i()
            }),
            $(e).on("click", ".recharge-rebate-panel li",
            function() {
                $(e).find(".recharge-rebate-panel .selected").removeClass("selected"),
                $(this).addClass("selected"),
                i()
            }),
            i()
        },
        r = function(i) {
            if ($(i).find(".btn-sure").hasClass("disabled")) return ! 1;
            var s = $(".recharge-beans-rebate .selected").length ? parseInt($(".recharge-beans-rebate .selected").attr("data-amount"), 10) : $(".recharge-beans-rebate .ipt").val();
            e($.extend({
                url: t.url,
                callback: t.success
            },
            a(s, n(s)))),
            $(i).remove()
        };
        $.dialog({
            title: "直豆充值",
            content: s.rebate(function() {
                return [100, 200, 300, 500, 1e3].map(function(e) {
                    return {
                        amount: e,
                        save: a(e, n(e)).save
                    }
                })
            } ()),
            confirmText: "确定充值",
            cancelText: !1,
            wrapClass: "recharge-beans-rebate",
            onOpen: o,
            onConfirm: r
        })
    }
    function i(t) {
        var i = t.discount ? .9 : 1,
        n = function(e) {
            var t = function(t) {
                var t = parseInt(t, 10),
                n = a(t, i);
                $(e).find(".order-save").text("-￥" + n.save),
                $(e).find(".order-pay").text("￥" + n.pay),
                t ? $(e).find(".btn-sure").removeClass("disabled") : $(e).find(".btn-sure").addClass("disabled")
            };
            $(e).on("input", ".ipt-amount",
            function() {
                var e = $(this).val().replace(/\D+/g, "");
                e.length && (e = parseInt($(this).val(), 10)),
                $(this).val(e),
                t(e)
            }),
            t(100)
        },
        o = function(n) {
            if ($(n).find(".btn-sure").hasClass("disabled")) return ! 1;
            var s = $(n).find(".ipt-amount").val();
            e($.extend({
                callback: t.success,
                url: t.url
            },
            a(s, i))),
            $(n).remove()
        };
        $.dialog({
            title: "直豆充值",
            content: s.original(t),
            confirmText: "确定充值",
            cancelText: !1,
            wrapClass: "recharge-beans-original",
            onOpen: n,
            onConfirm: o
        })
    }
    var n = {
        get: {}
    };
    n.get.discount = function() {
        var e = $.Deferred();
        return $.get("/boss/item/recharge/discount/check.json",
        function(t) {
            1 == t.rescode ? e.resolve(t) : $.toast({
                type: "error",
                content: t.resmsg
            })
        }),
        e
    };
    var s = {
        rebate: function(e) {
            return Utemplate('<p class="gray ios-off">ios用户独享充值折扣（仅限网页版）</p><div><p class="pull-left">直豆充值</p><div class="recharge-rebate-panel"><ul><%for(var i=0; i<this.list.length; i++){%><li ka="selected_amount_<%this.list[i].amount%>" <%if(this.list[i].amount==500){%> class="selected"<%}%> data-amount="<%this.list[i].amount%>"><p class="rebate-item"><%this.list[i].amount%>直豆<span class="rebate-off">减<%this.list[i].save%>元</span><span class="interval"></span></p></li><%}%></ul><input class="ipt ipt-amount" maxlength="4" placeholder="输入任意直豆数"></div></div>', {
                list: e
            })
        },
        original: function(e) {
            return Utemplate('<ul><li><span class="pull-left">充值直豆个数</span><p><input type="text" value="100" maxlength="4" class="ipt-amount"></p></li><%if(this.discount){%><li><span class="pull-left">iOS用户9折优惠</span><p class="order-save"></p></li><%}%><li><span class="pull-left">金额</span><p  class="order-pay"></p></li></ul>', e)
        }
    },
    a = function(e, t) {
        if (!e) return {
            amount: 0,
            save: 0,
            pay: 0
        };
        var i = 100 * e,
        n = Math.floor(i * t);
        return {
            amount: e,
            save: (i - n) / 100,
            pay: n / 100
        }
    };
    return function(e) {
        n.get.discount().then(function(n) {
            var s = $.extend(e || {},
            n);
            return n.discountInfo && n.discountInfo.rangeDiscount && !isEmpty(n.discountInfo.rangeDiscount) ? t(s) : i(s)
        })
    }
} (),
Salary = function() {
    function e() {
        return function(e, t) {
            for (var n = e,
            s = [], a = i.unit(n); n <= t;) s.push(n),
            a = i.unit(n),
            n += a;
            return s
        } (1, 250)
    }
    function t(e) {
        for (var t = i.max(e), n = i.unit(e), s = Math.floor(e / n) * n, a = [], o = i.unit(s); s < t;) o = i.unit(s),
        (s += o) <= t && a.push(s);
        return a
    }
    var i = {};
    return i.number = function(e) {
        var t = this;
        if (! (this instanceof i.number)) return new i.number(e);
        t.number = e,
        this.between = function(e, i) {
            return e <= t.number && t.number <= i
        }
    },
    i.unit = function(e) {
        var t = i.number(e);
        return t.between(1, 29) ? 1 : t.between(30, 99) ? 5 : e >= 100 ? 10 : 1
    },
    i.max = function(e) {
        return e <= 10 ? e + 5 : e <= 30 ? 2 * e: e <= 99 ? Math.min(120, e + 30) : Math.min(260, 2 * e)
    },
    {
        min: e,
        max: t
    }
} (),
Auxiliary = function() {
    var e = function(e) {
        var t = 0,
        e = e;
        len = e.length,
        charCode = -1;
        for (var i = 0; i < len; i++) charCode = e.charCodeAt(i),
        charCode >= 0 && charCode <= 128 ? t += .5 : t += 1;
        return Math.round(t)
    };
    return {
        getByteLength: function(e) {
            for (var t = 0,
            i = e.length,
            n = -1,
            s = 0; s < i; s++) n = e.charCodeAt(s),
            t += n >= 0 && n <= 128 ? 1 : 2;
            return t
        },
        getHybridLength: e
    }
} (); !
function(e) {
    "use strict";
    var t = function(t, i) {
        this.$body = e(document.body),
        this.$element = e(t),
        this.page = 1,
        this.isShowBefore = "false" !== this.$element.attr("isShowBefore"),
        this.isShowNow = "false" !== this.$element.attr("isShowNow"),
        this.isShowToday = "false" !== this.$element.attr("isShowToday"),
        this.order = this.$element.attr("order") || "desc",
        this.init()
    };
    t.prototype.init = function() {
        if (!this.$element.hasClass("disabled")) {
            var t = this;
            this.dates = this.date(),
            t.render(),
            t.$wrap.on("click", ".year",
            function() {
                t.selectYear(e(this))
            }),
            t.$wrap.on("click", ".month",
            function() {
                t.selectMonth(e(this))
            }),
            t.$wrap.on("click", ".prev",
            function(e) {
                t.prev(),
                e.stopPropagation()
            }),
            t.$wrap.on("click", ".next",
            function(e) {
                t.next(),
                e.stopPropagation()
            }),
            this.$element.on("click",
            function() {
                t.$wrap.is(":visible") ? t.hide() : t.show()
            }),
            e(document).on("click.workStart",
            function(e) { ! t.$wrap.is(":visible") || t.$wrap[0].contains(e.target) || t.$element[0].contains(e.target) || t.hide()
            })
        }
    },
    t.prototype.getFill = function() {
        var t;
        return t = this.$element.attr("data-fill") ? e("input[name=" + this.$element.attr("data-fill") + "]").val().split("-") : this.$element.val().split("-"),
        {
            year: t.length ? t[0] : "",
            month: t.length > 1 ? t[1] : ""
        }
    },
    t.prototype.render = function() {
        this.$wrap = e('<div class="workstartpicker-wrap"><div class="year-wrap"></div><div class="month-wrap"></div></div>');
        var t = this.template();
        this.$wrap.find(".year-wrap").html(t),
        e("body").append(this.$wrap)
    },
    t.prototype.date = function() {
        var e = parseInt(this.$element.attr("data-min"), 10),
        t = parseInt(this.$element.attr("data-max"), 10),
        i = [];
        if (this.isShowBefore && i.push({
            name: e + "前",
            value: e - 1
        }), "desc" === this.order) for (var n = e; n <= t; n++) i.push({
            name: n,
            value: n,
            hasChild: !0
        });
        else for (var n = e; n <= t; n++) i.unshift({
            name: n,
            value: n,
            hasChild: !0
        });
        return this.isShowNow && i.push({
            name: "应届生",
            value: 0
        }),
        i.reverse(),
        i
    },
    t.prototype.template = function() {
        for (var e = 12 * (this.page - 1), t = 12 * this.page, i = this.dates.slice(e, t), n = "desc" === this.order ? i[i.length - 1].name + " - " + i[0].name: i[0].name + " - " + i[i.length - 1].name, s = this.getFill().year, a = '<div class="title"><i class="prev"></i><i class="next"></i><p class="text">' + n + '</p></div><div class="content"><ul>', o = 0; o < i.length; o++) {
            a += '<li class="year ' + (s == i[o].value ? "selected": "") + '" data-val="' + i[o].value + '">' + i[o].name + "</li>"
        }
        return a += "</ul></div>"
    },
    t.prototype.month = function(e) {
        for (var t = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], i = '<div class="title"><p class="text">' + e + '</p></div><div class="content"><ul>', n = this.getFill(), s = 0; s < 12; s++) {
            i += '<li class="month ' + (n.year == e && parseInt(n.month, 10) == s + 1 ? "selected": "") + '">' + t[s] + "</li>"
        }
        return i += "</ul></div>"
    },
    t.prototype.prev = function() {
        if (this.page > 1) {
            this.page--;
            var e = this.template();
            this.$wrap.find(".year-wrap").html(e)
        }
    },
    t.prototype.next = function() {
        var e = Math.ceil(this.dates.length / 12);
        if (this.page < e) {
            this.page++;
            var t = this.template();
            this.$wrap.find(".year-wrap").html(t)
        }
    },
    t.prototype.selectMonth = function(e) {
        var t = this.$wrap.find(".month-wrap .text").text(),
        i = e.index() >= 9 ? e.index() + 1 : "0" + (e.index() + 1);
        this.fill(t, i)
    },
    t.prototype.selectYear = function(e) {
        var t = e.attr("data-val"),
        i = this.dates.filter(function(e) {
            return e.value == t
        });
        if (i[0] && i[0].hasChild) {
            var n = this.month(t);
            this.$wrap.find(".month-wrap").html(n),
            this.$wrap.addClass("month-panel")
        } else this.fill(t)
    },
    t.prototype.fill = function(t, i) {
        var t = this.dates.filter(function(e) {
            return e.value == t
        })[0],
        n = t.value,
        s = t.name,
        a = this.$element.attr("data-fill"),
        o = e("input[name=" + a + "]");
        i && (n += "-" + i, s += "-" + i),
        this.$element.val(s),
        o && o.val(n),
        this.hide()
    },
    t.prototype.show = function() {
        var e = this.$element.offset();
        this.$wrap.css({
            left: e.left + "px",
            top: this.$element.outerHeight() + e.top + "px"
        });
        var t = this.getFill();
        this.$wrap.find(".selected").removeClass("selected"),
        "" !== t.year && this.$wrap.find(".year-wrap li[data-val=" + t.year + "]").addClass("selected"),
        this.$wrap.show()
    },
    t.prototype.hide = function() {
        this.$wrap.hide(),
        this.$wrap.removeClass("month-panel")
    };
    var i = function(i) {
        return this.each(function() {
            var n = e(this),
            s = n.data("boss.date");
            s || n.data("boss.date", s = new t(this, i)),
            "string" == typeof i && s[i].call(n)
        })
    },
    n = e.fn.workstartpicker;
    e.fn.workstartpicker = i,
    e.fn.workstartpicker.Constructor = t,
    e.fn.workstartpicker.noConflict = function() {
        return e.fn.chosen = n,
        this
    }
} (jQuery),
function(e, t) {
    "use strict";
    "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"],
    function(e) {
        return t(e)
    }) : t(e.jQuery)
} (this,
function(e) {
    "use strict";
    var t = function(i, n) {
        this.$element = e(i),
        this.options = e.extend({},
        t.defaults, n),
        this.matcher = this.options.matcher || this.matcher,
        this.sorter = this.options.sorter || this.sorter,
        this.select = this.options.select || this.select,
        this.autoSelect = "boolean" != typeof this.options.autoSelect || this.options.autoSelect,
        this.highlighter = this.options.highlighter || this.highlighter,
        this.render = this.options.render || this.render,
        this.updater = this.options.updater || this.updater,
        this.displayText = this.options.displayText || this.displayText,
        this.source = this.options.source,
        this.delay = this.options.delay,
        this.$menu = e(this.options.menu),
        this.$appendTo = this.options.appendTo ? e(this.options.appendTo) : null,
        this.fitToElement = "boolean" == typeof this.options.fitToElement && this.options.fitToElement,
        this.shown = !1,
        this.listen(),
        this.showHintOnFocus = ("boolean" == typeof this.options.showHintOnFocus || "all" === this.options.showHintOnFocus) && this.options.showHintOnFocus,
        this.afterSelect = this.options.afterSelect,
        this.addItem = !1,
        this.emptyItem = !1,
        this.value = this.$element.val() || this.$element.text(),
        this.keyPressed = !1
    };
    t.prototype = {
        constructor: t,
        select: function() {
            var e = this.$menu.find(".active").data("value");
            if (this.$element.data("active", e), this.autoSelect || e) {
                var t = this.updater(e);
                t || (t = ""),
                this.$element.val(this.displayText(t) || t).text(this.displayText(t) || t).change(),
                this.afterSelect(t)
            }
            return this.hide()
        },
        updater: function(e) {
            return e
        },
        setSource: function(e) {
            this.source = e
        },
        show: function() {
            var t, i = e.extend({},
            this.$element.position(), {
                height: this.$element[0].offsetHeight
            }),
            n = "function" == typeof this.options.scrollHeight ? this.options.scrollHeight.call() : this.options.scrollHeight;
            this.shown ? t = this.$menu: this.$appendTo ? (t = this.$menu.appendTo(this.$appendTo), this.hasSameParent = this.$appendTo.is(this.$element.parent())) : (t = this.$menu.insertAfter(this.$element), this.hasSameParent = !0);
            var s = e(t).parent().hasClass("dropup"),
            a = (s || (i.top, i.height), e(t).hasClass("dropdown-menu-right"));
            a || i.left;
            return t.show(),
            !0 === this.options.fitToElement && t.css("width", this.$element.outerWidth() + "px"),
            this.shown = !0,
            this
        },
        hide: function() {
            return this.$menu.hide(),
            this.shown = !1,
            this
        },
        lookup: function(t) {
            if (this.query = void 0 !== t && null !== t ? t: this.$element.val() || this.$element.text() || "", this.query.length < this.options.minLength && !this.options.showHintOnFocus) return this.shown ? this.hide() : this;
            var i = e.proxy(function() {
                e.isFunction(this.source) && 3 === this.source.length ? this.source(this.query, e.proxy(this.process, this), e.proxy(this.process, this)) : e.isFunction(this.source) ? this.source(this.query, e.proxy(this.process, this)) : this.source && this.process(this.source)
            },
            this);
            clearTimeout(this.lookupWorker),
            this.lookupWorker = setTimeout(i, this.delay)
        },
        process: function(t) {
            var i = this;
            return t = e.grep(t,
            function(e) {
                return void 0 !== e && i.matcher(e)
            }),
            t = this.sorter(t),
            t.length || this.options.addItem || this.options.emptyItem ? (t.length > 0 ? this.$element.data("active", t[0]) : (this.$element.data("active", null), this.options.emptyItem && (t.push(i.query), this.map[t[0]] = t[0])), "all" != this.options.items && (t = t.slice(0, this.options.items)), this.options.addItem && t.push(this.options.addItem), this.render(t).show()) : this.shown ? this.hide() : this
        },
        matcher: function(e) {
            return~this.displayText(e).toLowerCase().indexOf(this.query.toLowerCase())
        },
        sorter: function(e) {
            for (var t, i = [], n = [], s = []; t = e.shift();) {
                var a = this.displayText(t);
                a.toLowerCase().indexOf(this.query.toLowerCase()) ? ~a.indexOf(this.query) ? n.push(t) : s.push(t) : i.push(t)
            }
            return i.concat(n, s)
        },
        highlighter: function(e) {
            var t = this.query;
            if ("" === t) return e;
            var i, n = e.match(/(>)([^<]*)(<)/g),
            s = [],
            a = [];
            if (n && n.length) for (i = 0; i < n.length; ++i) n[i].length > 2 && s.push(n[i]);
            else s = [],
            s.push(e);
            t = t.replace(/[\(\)\/\.\*\+\?\[\]]/g,
            function(e) {
                return "\\" + e
            });
            var o, r = new RegExp(t, "g");
            for (i = 0; i < s.length; ++i)(o = s[i].match(r)) && o.length > 0 && a.push(s[i]);
            for (i = 0; i < a.length; ++i) e = e.replace(a[i], a[i].replace(r, "<strong>$&</strong>"));
            return e
        },
        render: function(t) {
            var i = this,
            n = this,
            s = !1,
            a = [],
            o = i.options.separator;
            return e.each(t,
            function(e, i) {
                e > 0 && i[o] !== t[e - 1][o] && a.push({
                    __type: "divider"
                }),
                !i[o] || 0 !== e && i[o] === t[e - 1][o] || a.push({
                    __type: "category",
                    name: i[o]
                }),
                a.push(i)
            }),
            t = e(a).map(function(t, a) {
                if ("category" == (a.__type || !1)) return e(i.options.headerHtml).text(a.name)[0];
                if ("divider" == (a.__type || !1)) return e(i.options.headerDivider)[0];
                var o = n.displayText(a);
                return t = e(i.options.item).data("value", a),
                t.find("a").html(i.highlighter(o, a)),
                o == n.$element.val() && (t.addClass("active"), n.$element.data("active", a), s = !0),
                t[0]
            }),
            1 == t.length && i.options.emptyItem && t.eq(0).addClass("empty").find("a").prepend("<span>回车添加标签</span>"),
            t.length && n.$menu.parent().find(".skills-pannel").hide(),
            this.autoSelect && !s && (t.filter(":not(.dropdown-header)").first().addClass("active"), this.$element.data("active", t.first().data("value"))),
            this.$menu.html(t),
            this
        },
        displayText: function(e) {
            return void 0 !== e && void 0 !== e.name ? e.name: e
        },
        next: function(t) {
            var i = this.$menu.find(".active").removeClass("active"),
            n = i.next();
            n.length || (n = e(this.$menu.find("li")[0])),
            n.addClass("active"),
            n.hasClass("empty") || this.$element.val(n.text())
        },
        prev: function(e) {
            var t = this.$menu.find(".active").removeClass("active"),
            i = t.prev();
            i.length || (i = this.$menu.find("li").last()),
            i.addClass("active"),
            i.hasClass("empty") || this.$element.val(i.text())
        },
        listen: function() {
            this.$element.on("focus", e.proxy(this.focus, this)).on("blur", e.proxy(this.blur, this)).on("keypress", e.proxy(this.keypress, this)).on("propertychange input", e.proxy(this.input, this)).on("keyup", e.proxy(this.keyup, this)),
            this.eventSupported("keydown") && this.$element.on("keydown", e.proxy(this.keydown, this)),
            this.$menu.on("click", e.proxy(this.click, this)).on("mouseenter", "li", e.proxy(this.mouseenter, this)).on("mouseleave", "li", e.proxy(this.mouseleave, this)).on("mousedown", e.proxy(this.mousedown, this))
        },
        destroy: function() {
            this.$element.data("typeahead", null),
            this.$element.data("active", null),
            this.$element.off("focus").off("blur").off("keypress").off("propertychange input").off("keyup"),
            this.eventSupported("keydown") && this.$element.off("keydown"),
            this.$menu.remove(),
            this.destroyed = !0
        },
        eventSupported: function(e) {
            var t = e in this.$element;
            return t || (this.$element.setAttribute(e, "return;"), t = "function" == typeof this.$element[e]),
            t
        },
        move: function(e) {
            if (this.shown) switch (e.keyCode) {
            case 9:
            case 13:
            case 27:
                e.preventDefault();
                break;
            case 38:
                if (e.shiftKey) return;
                e.preventDefault(),
                this.prev();
                break;
            case 40:
                if (e.shiftKey) return;
                e.preventDefault(),
                this.next()
            }
        },
        keydown: function(t) {
            this.keyPressed = !0,
            this.suppressKeyPressRepeat = ~e.inArray(t.keyCode, [40, 38, 9, 13, 27]),
            this.shown || 40 != t.keyCode ? this.move(t) : this.lookup()
        },
        keypress: function(e) {
            this.suppressKeyPressRepeat || this.move(e)
        },
        input: function(e) {
            var t = this.$element.val() || this.$element.text();
            this.value !== t && (this.value = t, this.lookup())
        },
        keyup: function(e) {
            if (!this.destroyed) switch (e.keyCode) {
            case 40:
            case 38:
            case 16:
            case 17:
            case 18:
                break;
            case 9:
                if (!this.shown || this.showHintOnFocus && !this.keyPressed) return;
                this.select();
                break;
            case 13:
                if (!this.shown) return;
                this.select();
                break;
            case 27:
                if (!this.shown) return;
                this.hide()
            }
        },
        focus: function(e) {
            this.focused || (this.focused = !0, this.keyPressed = !1, this.options.showHintOnFocus && !0 !== this.skipShowHintOnFocus && ("all" === this.options.showHintOnFocus ? this.lookup("") : this.lookup())),
            this.skipShowHintOnFocus && (this.skipShowHintOnFocus = !1)
        },
        blur: function(e) {
            this.mousedover || this.mouseddown || !this.shown ? this.mouseddown && (this.skipShowHintOnFocus = !0, this.$element.focus(), this.mouseddown = !1) : (this.hide(), this.focused = !1, this.keyPressed = !1)
        },
        click: function(e) {
            e.preventDefault(),
            this.skipShowHintOnFocus = !0,
            this.select(),
            this.$element.focus(),
            this.hide()
        },
        mouseenter: function(t) {
            this.mousedover = !0,
            this.$menu.find(".active").removeClass("active"),
            e(t.currentTarget).addClass("active")
        },
        mouseleave: function(e) {
            this.mousedover = !1,
            !this.focused && this.shown && this.hide()
        },
        mousedown: function(e) {
            this.mouseddown = !0,
            this.$menu.one("mouseup",
            function(e) {
                this.mouseddown = !1
            }.bind(this))
        }
    };
    var i = e.fn.typeahead;
    e.fn.typeahead = function(i) {
        var n = arguments;
        return "string" == typeof i && "getActive" == i ? this.data("active") : this.each(function() {
            var s = e(this),
            a = s.data("typeahead"),
            o = "object" == typeof i && i;
            a || s.data("typeahead", a = new t(this, o)),
            "string" == typeof i && a[i] && (n.length > 1 ? a[i].apply(a, Array.prototype.slice.call(n, 1)) : a[i]())
        })
    },
    t.defaults = {
        source: [],
        items: 8,
        menu: '<ul class="typeahead dropdown-menu" role="listbox"></ul>',
        item: '<li><a class="dropdown-item" href="javascript:;" role="option"></a></li>',
        minLength: 1,
        scrollHeight: 0,
        autoSelect: !0,
        afterSelect: e.noop,
        addItem: !1,
        delay: 0,
        separator: "category",
        headerHtml: '<li class="dropdown-header"></li>',
        headerDivider: '<li class="divider" role="separator"></li>'
    },
    e.fn.typeahead.Constructor = t,
    e.fn.typeahead.noConflict = function() {
        return e.fn.typeahead = i,
        this
    },
    e(document).on("focus.typeahead.data-api", '[data-provide="typeahead"]',
    function(t) {
        var i = e(this);
        i.data("typeahead") || i.typeahead(i.data())
    })
}),
function(e) {
    "use strict";
    function t(t, i) {
        this.isInit = !0,
        this.itemsArray = [],
        this.$element = e(t),
        this.$element.hide(),
        this.isSelect = "SELECT" === t.tagName,
        this.multiple = this.isSelect && t.hasAttribute("multiple"),
        this.objectItems = i && i.itemValue,
        this.placeholderText = t.hasAttribute("placeholder") ? this.$element.attr("placeholder") : "",
        this.inputSize = Math.max(1, this.placeholderText.length),
        this.$container = e('<div class="bootstrap-tagsinput"></div>'),
        this.$input = e('<input type="text" placeholder="' + this.placeholderText + '"/>').appendTo(this.$container),
        this.$element.before(this.$container),
        this.build(i),
        this.isInit = !1
    }
    function i(e, t) {
        if ("function" != typeof e[t]) {
            var i = e[t];
            e[t] = function(e) {
                return e[i]
            }
        }
    }
    function n(e, t) {
        if ("function" != typeof e[t]) {
            var i = e[t];
            e[t] = function() {
                return i
            }
        }
    }
    function s(e) {
        return e ? l.text(e).html() : ""
    }
    function a(e) {
        var t = 0;
        if (document.selection) {
            e.focus();
            var i = document.selection.createRange();
            i.moveStart("character", -e.value.length),
            t = i.text.length
        } else(e.selectionStart || "0" == e.selectionStart) && (t = e.selectionStart);
        return t
    }
    function o(t, i) {
        var n = !1;
        return e.each(i,
        function(e, i) {
            if ("number" == typeof i && t.which === i) return n = !0,
            !1;
            if (t.which === i.which) {
                var s = !i.hasOwnProperty("altKey") || t.altKey === i.altKey,
                a = !i.hasOwnProperty("shiftKey") || t.shiftKey === i.shiftKey,
                o = !i.hasOwnProperty("ctrlKey") || t.ctrlKey === i.ctrlKey;
                if (s && a && o) return n = !0,
                !1
            }
        }),
        n
    }
    var r = {
        tagClass: function(e) {
            return "label label-info"
        },
        focusClass: "focus",
        itemValue: function(e) {
            return e ? e.toString() : e
        },
        itemText: function(e) {
            return this.itemValue(e)
        },
        itemTitle: function(e) {
            return null
        },
        freeInput: !0,
        addOnBlur: !0,
        maxTags: void 0,
        maxChars: void 0,
        confirmKeys: [13, 44],
        delimiter: ",",
        delimiterRegex: null,
        cancelConfirmKeysOnEmpty: !1,
        onTagExists: function(e, t) {
            t.hide().fadeIn()
        },
        trimValue: !1,
        allowDuplicates: !1,
        triggerChange: !0,
        listTags: !1,
        showListTags: null
    };
    t.prototype = {
        constructor: t,
        add: function(t, i, n) {
            var a = this;
            if (! (a.options.maxTags && a.itemsArray.length >= a.options.maxTags) && (!1 === t || t)) {
                if ("string" == typeof t && a.options.trimValue && (t = e.trim(t)), "object" == typeof t && !a.objectItems) throw "Can't add objects when itemValue option is not set";
                if (!t.toString().match(/^\s*$/)) {
                    if (a.isSelect && !a.multiple && a.itemsArray.length > 0 && a.remove(a.itemsArray[0]), "string" == typeof t && "INPUT" === this.$element[0].tagName) {
                        var o = a.options.delimiterRegex ? a.options.delimiterRegex: a.options.delimiter,
                        r = t.split(o);
                        if (r.length > 1) {
                            for (var l = 0; l < r.length; l++) this.add(r[l], !0);
                            return void(i || a.pushVal(a.options.triggerChange))
                        }
                    }
                    var c = a.options.itemValue(t),
                    d = a.options.itemText(t),
                    u = a.options.tagClass(t),
                    p = a.options.itemTitle(t),
                    h = e.grep(a.itemsArray,
                    function(e) {
                        return a.options.itemValue(e) === c
                    })[0];
                    if (!h || a.options.allowDuplicates) {
                        if (! (a.items().toString().length + t.length + 1 > a.options.maxInputLength)) {
                            var f = e.Event("beforeItemAdd", {
                                item: t,
                                cancel: !1,
                                options: n
                            });
                            if (a.$element.trigger(f), !f.cancel) {
                                a.itemsArray.push(t);
                                var m = e('<span class="tag ' + s(u) + (null !== p ? '" title="' + p: "") + '">' + s(d) + '<span data-role="remove"></span></span>');
                                m.data("item", t),
                                a.findInputWrapper().before(m),
                                m.after(" ");
                                var g = e('option[value="' + encodeURIComponent(c) + '"]', a.$element).length || e('option[value="' + s(c) + '"]', a.$element).length;
                                if (a.isSelect && !g) {
                                    var v = e("<option selected>" + s(d) + "</option>");
                                    v.data("item", t),
                                    v.attr("value", c),
                                    a.$element.append(v)
                                }
                                i || a.pushVal(a.options.triggerChange),
                                a.options.maxTags !== a.itemsArray.length && a.items().toString().length !== a.options.maxInputLength || a.$container.addClass("bootstrap-tagsinput-max"),
                                e(".typeahead, .twitter-typeahead", a.$container).length && a.$input.typeahead("val", ""),
                                this.isInit ? a.$element.trigger(e.Event("itemAddedOnInit", {
                                    item: t,
                                    options: n
                                })) : a.$element.trigger(e.Event("itemAdded", {
                                    item: t,
                                    options: n
                                }))
                            }
                        }
                    } else if (a.options.onTagExists) {
                        var y = e(".tag", a.$container).filter(function() {
                            return e(this).data("item") === h
                        });
                        a.options.onTagExists(t, y)
                    }
                }
            }
        },
        remove: function(t, i, n) {
            var s = this;
            if (s.objectItems && (t = "object" == typeof t ? e.grep(s.itemsArray,
            function(e) {
                return s.options.itemValue(e) == s.options.itemValue(t)
            }) : e.grep(s.itemsArray,
            function(e) {
                return s.options.itemValue(e) == t
            }), t = t[t.length - 1]), t) {
                var a = e.Event("beforeItemRemove", {
                    item: t,
                    cancel: !1,
                    options: n
                });
                if (s.$element.trigger(a), a.cancel) return;
                e(".tag", s.$container).filter(function() {
                    return e(this).data("item") === t
                }).remove(),
                e("option", s.$element).filter(function() {
                    return e(this).data("item") === t
                }).remove(),
                -1 !== e.inArray(t, s.itemsArray) && s.itemsArray.splice(e.inArray(t, s.itemsArray), 1)
            }
            i || s.pushVal(s.options.triggerChange),
            s.options.maxTags > s.itemsArray.length && s.$container.removeClass("bootstrap-tagsinput-max"),
            s.$element.trigger(e.Event("itemRemoved", {
                item: t,
                options: n
            })),
            s.options.itemRemoved && s.options.itemRemoved(t)
        },
        removeAll: function() {
            var t = this;
            for (e(".tag", t.$container).remove(), e("option", t.$element).remove(); t.itemsArray.length > 0;) t.itemsArray.pop();
            t.pushVal(t.options.triggerChange)
        },
        refresh: function() {
            var t = this;
            e(".tag", t.$container).each(function() {
                var i = e(this),
                n = i.data("item"),
                a = t.options.itemValue(n),
                o = t.options.itemText(n),
                r = t.options.tagClass(n);
                if (i.attr("class", null), i.addClass("tag " + s(r)), i.contents().filter(function() {
                    return 3 == this.nodeType
                })[0].nodeValue = s(o), t.isSelect) {
                    e("option", t.$element).filter(function() {
                        return e(this).data("item") === n
                    }).attr("value", a)
                }
            })
        },
        items: function() {
            return this.itemsArray
        },
        pushVal: function() {
            var t = this,
            i = e.map(t.items(),
            function(e) {
                return t.options.itemValue(e).toString()
            });
            t.$element.val(i, !0),
            t.options.triggerChange && t.$element.trigger("change")
        },
        build: function(t) {
            var s = this;
            if (s.options = e.extend({},
            r, t), s.objectItems && (s.options.freeInput = !1), i(s.options, "itemValue"), i(s.options, "itemText"), n(s.options, "tagClass"), s.options.listTags && e(s.options.listTags).on("click", "li",
            function() {
                s.add(e(this).text()),
                s.options.showListTags(e(this).text(), s)
            }), s.options.typeahead) {
                var l = s.options.typeahead || {};
                n(l, "source"),
                s.$input.typeahead(e.extend({},
                l, {
                    source: function(t, i) {
                        function n(e) {
                            for (var t = [], n = 0; n < e.length; n++) {
                                var o = s.options.itemText(e[n]);
                                a[o] = e[n],
                                t.push(o)
                            }
                            i(t)
                        }
                        this.map = {};
                        var a = this.map,
                        o = l.source(t);
                        e.isFunction(o.success) ? o.success(n) : e.isFunction(o.then) ? o.then(n) : e.when(o).then(n)
                    },
                    updater: function(e) {
                        return s.add(this.map[e]),
                        this.map[e]
                    },
                    matcher: function(e) {
                        return - 1 !== e.toLowerCase().indexOf(this.query.trim().toLowerCase())
                    },
                    sorter: function(e) {
                        return e.sort()
                    },
                    highlighter: function(e) {
                        var t, i = this.query.replace(/(^\s*)|(\s*$)/g, "");
                        if ("" == i) return e;
                        i = i.replace(/[\(\)\/\.\*\+\?\[\]]/g,
                        function(e) {
                            return "\\" + e
                        });
                        try {
                            t = new RegExp("(" + i + ")", "ig")
                        } catch(e) {}
                        return e.replace(t, '<u class="h">$1</u>')
                    }
                }))
            }
            if (s.options.typeaheadjs) {
                var c = s.options.typeaheadjs;
                e.isArray(c) || (c = [null, c]),
                e.fn.typeahead.apply(s.$input, c).on("typeahead:selected", e.proxy(function(e, t, i) {
                    var n = 0;
                    c.some(function(e, t) {
                        return e.name === i && (n = t, !0)
                    }),
                    c[n].valueKey ? s.add(t[c[n].valueKey]) : s.add(t),
                    s.$input.typeahead("val", "")
                },
                s))
            }
            s.$container.on("click", e.proxy(function(e) {
                s.$element.attr("disabled") || s.$input.removeAttr("disabled"),
                s.$input.focus()
            },
            s)),
            s.options.addOnBlur && s.options.freeInput && s.$input.on("focusout", e.proxy(function(t) {
                0 === e(".typeahead, .twitter-typeahead", s.$container).length && (s.add(s.$input.val()), s.$input.val(""))
            },
            s)),
            s.$container.on({
                focusin: function() {
                    s.$container.addClass(s.options.focusClass)
                },
                focusout: function() {
                    s.$container.removeClass(s.options.focusClass)
                }
            }),
            s.$container.on("keydown", "input", e.proxy(function(t) {
                var i = e(t.target),
                n = s.findInputWrapper();
                if (s.$element.attr("disabled")) return void s.$input.attr("disabled", "disabled");
                switch (t.which) {
                case 8:
                    if (0 === a(i[0])) {
                        var o = n.prev();
                        o.length && s.remove(o.data("item"))
                    }
                    break;
                case 46:
                    if (0 === a(i[0])) {
                        var r = n.next();
                        r.length && s.remove(r.data("item"))
                    }
                    break;
                case 37:
                    var l = n.prev();
                    0 === i.val().length && l[0] && (l.before(n), i.focus());
                    break;
                case 39:
                    var c = n.next();
                    0 === i.val().length && c[0] && (c.after(n), i.focus())
                }
                var d = i.val().length;
                Math.ceil(d / 5);
                i.attr("size", Math.max(this.inputSize, i.val().length))
            },
            s)),
            s.$container.on("keypress", "input", e.proxy(function(t) {
                var i = e(t.target);
                if (s.$element.attr("disabled")) return void s.$input.attr("disabled", "disabled");
                var n = i.val(),
                a = s.options.maxChars && n.length >= s.options.maxChars;
                s.options.freeInput && (o(t, s.options.confirmKeys) || a) && (0 !== n.length && (s.add(a ? n.substr(0, s.options.maxChars) : n), i.val("")), !1 === s.options.cancelConfirmKeysOnEmpty && t.preventDefault());
                var r = i.val().length;
                Math.ceil(r / 5);
                i.attr("size", Math.max(this.inputSize, i.val().length))
            },
            s)),
            s.$container.on("click", "[data-role=remove]", e.proxy(function(t) {
                s.$element.attr("disabled") || s.remove(e(t.target).closest(".tag").data("item"))
            },
            s)),
            s.options.itemValue === r.itemValue && ("INPUT" === s.$element[0].tagName ? s.add(s.$element.val()) : e("option", s.$element).each(function() {
                s.add(e(this).attr("value"), !0)
            })),
            s.options.onReady && s.options.onReady(s)
        },
        destroy: function() {
            var e = this;
            e.$container.off("keypress", "input"),
            e.$container.off("click", "[role=remove]"),
            e.$container.remove(),
            e.$element.removeData("tagsinput"),
            e.$element.show()
        },
        focus: function() {
            this.$input.focus()
        },
        input: function() {
            return this.$input
        },
        findInputWrapper: function() {
            for (var t = this.$input[0], i = this.$container[0]; t && t.parentNode !== i;) t = t.parentNode;
            return e(t)
        }
    },
    e.fn.tagsinput = function(i, n, s) {
        var a = [];
        return this.each(function() {
            var o = e(this).data("tagsinput");
            if (o) if (i || n) {
                if (void 0 !== o[i]) {
                    if (3 === o[i].length && void 0 !== s) var r = o[i](n, null, s);
                    else var r = o[i](n);
                    void 0 !== r && a.push(r)
                }
            } else a.push(o);
            else o = new t(this, i),
            e(this).data("tagsinput", o),
            a.push(o),
            "SELECT" === this.tagName && e("option", e(this)).attr("selected", "selected"),
            e(this).val(e(this).val())
        }),
        "string" == typeof i ? a.length > 1 ? a: a[0] : a
    },
    e.fn.tagsinput.Constructor = t;
    var l = e("<div />");
    e(function() {
        e("input[data-role=tagsinput], select[multiple][data-role=tagsinput]").tagsinput()
    })
} (window.jQuery),
function(e, t, i) {
    "use strict";
    function n(e, t) {
        return e.replace(/\$\w+\$/gi,
        function(e) {
            var i = t[e.replace(/\$/g, "")];
            return i + "" == "undefined" ? "": i
        })
    }
    function s(e, t, n) {
        return function(s) {
            "function" == typeof e && e.call(n, s && s.length > 0 ? s: i, t)
        }
    }
    var a = t,
    o = a.document;
    e.fn.suggestion = function(t) {
        var i = this,
        a = t.throttleTime || 150,
        r = void 0 === t.focusSugges || !!t.focusSugges,
        l = t.onRequest ||
        function() {
            return ""
        },
        c = '<div class="suggestion" style="display: none;"><ul class="suggestion-list"></ul>';
        t.blankHTML && (c += '<div class="suggestion-blank">', c += n(t.blankHTML, {
            searchText: '<span class="suggestion-text"></span>'
        }), c += "</div>"),
        c += "</div>",
        this.each(function(n, d) {
            function u(e) {
                b(e, f),
                g.trigger("suggestion.hide")
            }
            function p(t, i) {
                "" !== e.trim(m.val()) && g.trigger("suggestion.show");
                var n = e(t || "");
                D = -1,
                S = 0,
                n.length > 0 ? (S = n.length, n.each(function(t, s) {
                    var a = e(this);
                    a.text() === i && (n.removeClass("active"), a.addClass("active"), D = t)
                }), v.show(), y.length > 0 && y.hide()) : (v.hide(), y.length > 0 && (w.text(i), y.show())),
                v.html(n)
            }
            function h() {
                var t = e.trim(m.val());
                if (t) {
                    var i = l(t,
                    function(e) {
                        p(e, t)
                    });
                    i && p(i, t)
                } else v.html(""),
                g.trigger("suggestion.hide")
            }
            var f = e(d);
            t.wrap || t.list || f.append(c);
            var m = e(t.input || ".suggestion-ipt", f).length > 0 ? e(t.input || ".suggestion-ipt", f) : e(".suggestion-ipt", f),
            g = e(t.wrap || ".suggestion", f).length > 0 ? e(t.wrap || ".suggestion", f) : e(".suggestion", f),
            v = e(t.list, g).length > 0 ? e(t.list, g) : e(".suggestion-list", g),
            y = e(t.blank, g).length > 0 ? e(t.blank, g) : e(".suggestion-blank", g),
            w = e(".suggestion-text", y),
            b = s(t.onChecked, f, i),
            $ = s(t.onHover, f, i),
            x = s(t.onShow, f, i),
            C = s(t.onHide, f, i),
            k = 0,
            T = !1,
            _ = !0,
            S = 0,
            D = -1;
            g.bind("suggestion.show",
            function() {
                g.show(),
                x()
            }),
            g.bind("suggestion.hide",
            function() {
                g.hide(),
                C()
            }),
            m.on("focus",
            function() {
                r && e.trim(e(this).val()) && h()
            }),
            m.on("blur",
            function() {
                var t = e.trim(m.val());
                if (_ && g.is(":visible")) if (e("li.active", v).length > 0) u(e("li.active", v));
                else {
                    var i = -1;
                    e("li", v).each(function(n) {
                        e.trim(e(this).val()) === t && (i = n)
                    }),
                    i > -1 ? u(e("li", v).eq(i)) : u()
                }
            }),
            m.on("compositionstart",
            function() {
                T = !0
            }),
            m.on("compositionend",
            function() {
                T = !1,
                h()
            }),
            m.on("input",
            function(t) {
                if (!T) {
                    var i = e.trim(m.val());
                    clearTimeout(k),
                    "" === i ? g.trigger("suggestion.hide") : k = setTimeout(function() {
                        h()
                    },
                    a)
                }
            }),
            m.on("keydown",
            function(t) {
                if (! (g.is(":hidden") || 0 == S || T || 13 != t.keyCode && 38 != t.keyCode && 40 != t.keyCode)) {
                    switch (t.preventDefault(), t.keyCode) {
                    case 13:
                        return e("li.active", v).trigger("click"),
                        void m.blur();
                    case 38:
                        --D,
                        -2 == D && (D = e("li", v).length - 1);
                        break;
                    case 40:
                        ++D,
                        D == e("li", v).length && (D = -1)
                    }
                    e("li", v).removeClass("active"),
                    -1 != D && e("li", v).eq(D).addClass("active");
                    var i; - 1 == D ? 38 == t.keyCode ? i = e("li", v).last() : 40 == t.keyCode && (i = e("li", v).first()) : i = e("li", v).eq(D);
                    var n = e(".suggestion", f),
                    s = n.height(),
                    a = n.offset().top,
                    o = i.height(),
                    r = i.offset().top,
                    l = v.parent().scrollTop();
                    r < a ? v.parent().scrollTop(l - (a - r)) : r + o > a + s && v.parent().scrollTop(l + (r + o - (a + s))),
                    $(e("li.active", v), f)
                }
            }),
            v.on("mouseenter", "li",
            function(t) {
                e(this).addClass("hover"),
                $(e(this), f)
            }),
            v.on("mouseleave", "li",
            function(t) {
                e(this).removeClass("hover")
            }),
            v.on("mouseleave",
            function() {
                $(e("li.active", this), f)
            }),
            g.on("mousedown",
            function(e) {
                _ = !1
            }),
            e(o).on("click",
            function(t) {
                e(t.target).closest(g).length && u(e(t.target).closest(e("li", g)))
            }),
            e(o).on("mouseup",
            function(t) {
                _ = !0,
                0 == e(t.target).closest(m).length && m.trigger("blur")
            })
        }),
        t.ready && t.ready.call(this, this)
    }
} (jQuery, window),
function(e, t, i) {
    "use strict";
    function n(e, t) {
        return e.replace(/\$\w+\$/gi,
        function(e) {
            var i = t[e.replace(/\$/g, "")];
            return i + "" == "undefined" ? "": i
        })
    }
    function s(e, t) {
        for (var i = t.length,
        s = "",
        a = 0; a < i; a++) s += n(e, t[a]);
        return s
    }
    function a(e, t, n) {
        return function(s) {
            "function" == typeof e && e.call(n, s && s.length > 0 ? s: i, t)
        }
    }
    function o(e) {
        var t = e || m;
        return function(e) {
            return s(t, d[e].subLevelModelList)
        }
    }
    function r(t) {
        if (v) return void t();
        y.push(t),
        w || e.ajax({
            url: "/common/data/city.json",
            type: "get",
            dataType: "json",
            success: function(e) {
                if (1 == e.rescode) {
                    e.data.hotCityList.splice(0, 1);
                    var t = e.data.cityList,
                    i = t.length,
                    s = e.data.hotCityList,
                    a = s.length,
                    o = {
                        code: 1e8,
                        name: "热门",
                        subLevelModelList: s,
                        firstChar: "a",
                        rank: 0,
                        index: 0
                    };
                    e.data.locationCity && (f = e.data.locationCity),
                    d.push(o),
                    p[o.code] = o,
                    p[o.name] = o,
                    g += n(m, o);
                    for (var r = 0; r < i; r++) {
                        var l = t[r].subLevelModelList.length;
                        t[r].index = r + 1,
                        d.push(t[r]),
                        p[t[r].name] = t[r],
                        p[t[r].code] = t[r],
                        g += n(m, t[r]);
                        for (var c = 0; c < l; c++) t[r].subLevelModelList[c].index = c,
                        t[r].subLevelModelList[c].provinceCode = t[r].code,
                        t[r].subLevelModelList[c].province = t[r].name,
                        t[r].subLevelModelList[c].provinceIndex = t[r].index,
                        u[t[r].subLevelModelList[c].code] = t[r].subLevelModelList[c],
                        u[t[r].subLevelModelList[c].name] = t[r].subLevelModelList[c]
                    }
                    for (var b, $ = 0; $ < a; $++) s[$].index = $,
                    b = 1e4 * parseInt(s[$] / 1e4),
                    p[b] && (s[$].provinceCode = p[b].code, s[$].province = p[b].name, s[$].provinceIndex = p[b].index),
                    h[s[$].code] = s[$],
                    h[s[$].name] = s[$];
                    v = !0,
                    w = !0;
                    for (var x; x = y.shift();) x()
                }
            }
        })
    }
    var l = t,
    c = l.document,
    d = [],
    u = {},
    p = {},
    h = {},
    f = null,
    m = '<li data-code="$code$" data-name="$name$">$name$</li>',
    g = "",
    v = !1,
    y = [],
    w = !1;
    e.fn.citySelector = function(t) {
        var i = this,
        n = o(t.cityItemTemp),
        l = t.suggestItemHtml || '<li data-code="$code$" data-name="$name$"><span>$province$</span>$name$</li>';
        r(function() {
            var o = t.provinceItemTemp ? s(t.provinceItemTemp, d) : g;
            i.each(function() {
                function r(e, t) {
                    var i = w.height(),
                    n = w.offset().top,
                    s = e.height(),
                    a = e.offset().top,
                    o = t.height(),
                    r = t.offset().top,
                    l = b.scrollTop(),
                    c = $.scrollTop();
                    a < n ? b.scrollTop(l - (n - a)) : a + s > n + i && b.scrollTop(l + (a + s - (n + i))),
                    r < n ? $.scrollTop(c - (n - r)) : r + o > n + i && $.scrollTop(c + (r + o - (n + i)))
                }
                function d() {
                    var t = e("li", b).removeClass("active").eq(x).addClass("active"),
                    i = e("li", $).removeClass("active").eq(C).addClass("active");
                    0 === k ? ($.removeClass("city-selector-cur"), b.addClass("city-selector-cur")) : (b.removeClass("city-selector-cur"), $.addClass("city-selector-cur")),
                    r(t, i)
                }
                function p() {
                    $.html(n(x)),
                    d()
                }
                function m(t) {
                    var i = e.trim(t);
                    if (i) {
                        var n = u[i];
                        n && (h[n.code] ? (x = 0, C = h[n.code].index) : (x = n.provinceIndex, C = n.index), k = 1, p())
                    }
                }
                var g = e(this);
                g.append('<div class="city-selector"><ul class="city-selector-province"></ul><ul class="city-selector-citys"></ul></div>'),
                f && t.onLocation && "function" == typeof t.onLocation && t.onLocation.call(this, f);
                var v = e(t.input || ".suggestion-ipt", g).length > 0 ? e(t.input || ".suggestion-ipt", g) : e(".suggestion-ipt", g),
                y = (e(t.input || ".suggestion-ipt", g).length > 0 ? e(t.input || ".suggestion-ipt", g) : e(".suggestion-ipt", g), e.trim(v.val())),
                w = e(".city-selector", g),
                b = e(".city-selector-province", g),
                $ = e(".city-selector-citys", g),
                x = 0,
                C = 0,
                k = 0,
                T = !0,
                _ = !1,
                S = a(t.onChecked, g, i),
                D = a(t.onHover, g, i),
                E = a(t.onShow, g, i),
                I = a(t.onHide, g, i);
                w.bind("selector.show",
                function() {
                    w.is(":hidden") && (w.show(), E())
                }),
                w.bind("selector.hide",
                function() {
                    w.is(":visible") && (w.hide(), I())
                }),
                b.html(o),
                p(),
                y && m(y),
                v.is(":focus") && w.trigger("selector.show"),
                b.on("mouseenter",
                function(e) {
                    k = 0,
                    d()
                }),
                $.on("mouseenter",
                function(e) {
                    k = 1,
                    d()
                }),
                e("li", b).on("mouseenter",
                function(t) {
                    var i = e("li", b).index(this);
                    i != x && (x = i, C = 0, p(), D(e("li.active", $)))
                }),
                e($).on("mouseenter", "li",
                function(t) {
                    var i = e("li", $).index(this);
                    i != C && (C = i, d(), D(e("li.active", $)))
                }),
                e($).on("click", "li",
                function(t) {
                    S(e(this)),
                    w.trigger("selector.hide")
                }),
                e("li", b).on("click",
                function(t) {
                    S(e("li.active", $)),
                    w.trigger("selector.hide")
                }),
                v.on("focus",
                function() {
                    g.find(".dropdown-select").addClass("dropdown-select-open"),
                    w.trigger("selector.show")
                }),
                v.on("blur",
                function() {
                    g.find(".dropdown-select").removeClass("dropdown-select-open"),
                    T && w.is(":visible") && w.trigger("selector.hide")
                }),
                v.on("input",
                function(t) {
                    "" === e.trim(t.target.value) ? w.trigger("selector.show") : w.trigger("selector.hide")
                }),
                v.on("keydown",
                function(t) {
                    var i = t.keyCode;
                    if (! (w.is(":hidden") || 13 != i && 37 != i && 38 != i && 39 != i && 40 != i)) {
                        t.preventDefault();
                        var n = !1;
                        switch (i) {
                        case 13:
                            e("li.active", $).trigger("click"),
                            v.blur();
                            break;
                        case 38:
                            0 === k ? (--x, C = 0, n = !0) : --C;
                            break;
                        case 40:
                            0 === k ? (++x, C = 0, n = !0) : ++C;
                            break;
                        case 37:
                            k = 0;
                            break;
                        case 39:
                            k = 1
                        }
                        var s = e("li", b).length - 1,
                        a = e("li", $).length - 1;
                        x < 0 ? x = s: x > s && (x = 0),
                        C < 0 ? C = a: C > a && (C = 0),
                        n ? p() : d()
                    }
                }),
                w.on("mousedown",
                function(e) {
                    T = !1
                }),
                e(c).on("mouseup",
                function(t) {
                    T = !0,
                    0 == e(t.target).closest(v).length && w.trigger("selector.hide")
                }),
                g.suggestion({
                    input: v,
                    focusSugges: !1,
                    blankHTML: '无此城市<a href="javascript:;">去选择</a>',
                    ready: function() {
                        e(".suggestion-blank", this).on("click",
                        function() {
                            w.trigger("selector.show")
                        })
                    },
                    onShow: function() {
                        _ = !0
                    },
                    onHide: function() {
                        _ = !1
                    },
                    onRequest: function(t, i) {
                        if (!t) return void i("");
                        e.ajax({
                            url: "/autocomplete/city.json",
                            data: {
                                query: t || ""
                            },
                            type: "get",
                            dataType: "json",
                            success: function(t) {
                                if (t && t.data instanceof Array) {
                                    for (var n = t.data,
                                    a = n.length,
                                    o = [], r = 0; r < a; r++) o.push(u[n[r].code]);
                                    i(e(s(l, o)))
                                }
                            }
                        })
                    },
                    onChecked: function(e, t) {
                        e && e.length > 0 && m(e.text()),
                        S(e, g)
                    },
                    onHover: function(e, t) {
                        D(e, g)
                    }
                })
            })
        })
    }
} (jQuery, window),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
} (function(e) {
    var t, i = {
        get: function(e) {
            return n[t].get.apply(this, [e])
        },
        set: function(e, i) {
            var s, a = parseInt(e),
            o = parseInt(i);
            return void 0 === e ? a = 0 : e < 0 && (a = this[0].value.length + a),
            void 0 !== i && (s = i >= 0 ? a + o: this[0].value.length + o),
            n[t].set.apply(this, [a, s]),
            this
        },
        setcursor: function(e) {
            return this.textrange("set", e, 0)
        },
        replace: function(e) {
            return n[t].replace.apply(this, [String(e)]),
            this
        },
        insert: function(e) {
            return this.textrange("replace", e)
        }
    },
    n = {
        xul: {
            get: function(e) {
                var t = {
                    position: this[0].selectionStart,
                    start: this[0].selectionStart,
                    end: this[0].selectionEnd,
                    length: this[0].selectionEnd - this[0].selectionStart,
                    text: this.val().substring(this[0].selectionStart, this[0].selectionEnd)
                };
                return void 0 === e ? t: t[e]
            },
            set: function(e, t) {
                void 0 === t && (t = this[0].value.length),
                this[0].selectionStart = e,
                this[0].selectionEnd = t
            },
            replace: function(e) {
                var t = this[0].selectionStart,
                i = this[0].selectionEnd,
                n = this.val();
                this.val(n.substring(0, t) + e + n.substring(i, n.length)),
                this[0].selectionStart = t,
                this[0].selectionEnd = t + e.length
            }
        },
        msie: {
            get: function(e) {
                var t = document.selection.createRange();
                if (void 0 === t) {
                    var i = {
                        position: 0,
                        start: 0,
                        end: this.val().length,
                        length: this.val().length,
                        text: this.val()
                    };
                    return void 0 === e ? i: i[e]
                }
                var n = 0,
                s = 0,
                a = this[0].value.length,
                o = this[0].value.replace(/\r\n/g, "\n"),
                r = this[0].createTextRange(),
                l = this[0].createTextRange();
                r.moveToBookmark(t.getBookmark()),
                l.collapse(!1),
                -1 === r.compareEndPoints("StartToEnd", l) ? (n = -r.moveStart("character", -a), n += o.slice(0, n).split("\n").length - 1, -1 === r.compareEndPoints("EndToEnd", l) ? (s = -r.moveEnd("character", -a), s += o.slice(0, s).split("\n").length - 1) : s = a) : (n = a, s = a);
                var i = {
                    position: n,
                    start: n,
                    end: s,
                    length: a,
                    text: t.text
                };
                return void 0 === e ? i: i[e]
            },
            set: function(e, t) {
                var i = this[0].createTextRange();
                if (void 0 !== i) {
                    void 0 === t && (t = this[0].value.length);
                    var n = e - (this[0].value.slice(0, e).split("\r\n").length - 1),
                    s = t - (this[0].value.slice(0, t).split("\r\n").length - 1);
                    i.collapse(!0),
                    i.moveEnd("character", s),
                    i.moveStart("character", n),
                    i.select()
                }
            },
            replace: function(e) {
                document.selection.createRange().text = e
            }
        }
    };
    e.fn.extend({
        textrange: function(n) {
            var s = "get",
            a = {};
            return void 0 === this[0] ? this: ("string" == typeof n ? s = n: "object" == typeof n && (s = n.method || s, a = n), void 0 === t && (t = "selectionStart" in this[0] ? "xul": document.selection ? "msie": "unknown"), "unknown" === t ? this: (a.nofocus || document.activeElement === this[0] || this[0].focus(), "function" == typeof i[s] ? i[s].apply(this, Array.prototype.slice.call(arguments, 1)) : void e.error("Method " + s + " does not exist in jQuery.textrange")))
        }
    })
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
} (function(e) {
    function t(e, t, i) {
        return e.start >= t && e.start <= t + i.length && e.end >= t ? 1 : e.end >= t && e.end <= t + i.length ? 2 : e.start <= t && t + i.length <= e.end ? 3 : 0
    }
    function i(e) {
        return l.test(e)
    }
    function n(e) {
        return c.test(e)
    }
    function s(e) {
        return e.replace(d, "")
    }
    function a(t, i) {
        return e.trim(t) + " " + s(i)
    }
    function o(e, i) {
        for (var n = e.split(/[\n\r]/g), s = 0, a = -1, o = 0, r = 0, l = 0, c = 0, d = 0, u = 0; u < n.length; u++) d = t(i, s, n[u]),
        d && (1 == d ? (a = u, r = i.start - c) : 2 == d && (l = i.end - c), o++),
        c += n[u].length + 1,
        s += n[u].length + 1;
        return 0 == l && (l = r),
        {
            startLine: a,
            startLineIndex: r,
            lineCount: o,
            endLineIndex: l
        }
    }
    function r(e, t) {
        for (var r, l, d, u = e.val(), p = e.textrange("get"), h = p.start, f = 0, m = u.split(/[\n\r]/g), g = o(u, p), v = g.startLine, y = g.startLineIndex, w = g.endLineIndex, b = g.lineCount, $ = t ? n(m[v]) : i(m[v]), x = m[Math.max(v - 1, 0)].match(c), C = t ? x && x[4] ? x[4] : ".": "●", k = x && x[3] ? parseInt(x[3]) : 0, T = 0, _ = 0; _ < b; _++) l = _ + v,
        r = m[l],
        T = r.length,
        $ ? r = s(r) : (k++, r = a((t ? k: "") + C, r)),
        d = r.length - T,
        l === v ? (h += y + d < 0 ? -1 * y: d, h = Math.max(h, 0), f += 1 == b ? w - y: r.length - Math.max(y + d, 0)) : f += _ == b - 1 ? Math.max(w + d, 1) : r.length,
        _ > 0 && f++,
        m[l] = r;
        e.val(m.join("\n")).textrange("set", h, f).focus().trigger("input")
    }
    var l = /^((\s+)?●(\s+)?)/,
    c = /^((\s+)?(\d+)([\.|、])(\s+)?)/,
    d = /^((\s+)?(((\d+)([\.|、]))|●))(\s+)?/;
    e.fn.extend({
        textarealist: function(t) {
            var a = e.extend({
                wrapClass: ".serial-wrap",
                btnNum: ".serial-btn-num",
                btnBullet: ".serial-btn-bullet"
            });
            this.each(function() {
                if (!this.__textareaListInited) {
                    this.__textareaListInited = !0;
                    var t = e(this),
                    l = t.closest(a.wrapClass).length > 0 ? t.closest(a.wrapClass) : t.parent(),
                    c = e(a.btnNum, l);
                    e(a.btnBullet, l).on("click",
                    function() {
                        r(t, !1)
                    }),
                    c.on("click",
                    function() {
                        r(t, 1)
                    }),
                    t.on("keyup",
                    function(a) {
                        if (13 == a.keyCode) {
                            var l = t.val(),
                            c = t.textrange("get"),
                            d = l.split(/[\n\r]/g),
                            u = o(l, c),
                            p = d[Math.max(u.startLine - 1, 0)];
                            e.trim(s(p)) && (n(p) ? r(t, 1) : i(p) && r(t, !1))
                        }
                    })
                }
            })
        }
    })
});
var isEmpty = function(e) {
    return Array.isArray(e) && 0 === e.length || Object.prototype.isPrototypeOf(e) && 0 === Object.keys(e).length
};
Date.prototype.Format = function(e) {
    var t = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        S: this.getMilliseconds()
    };
    /(y+)/.test(e) && (e = e.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
    for (var i in t) new RegExp("(" + i + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? t[i] : ("00" + t[i]).substr(("" + t[i]).length)));
    return e
},
Array.prototype.unique = function(e) {
    if (this.length < 2) return [this[0]] || [];
    for (var t = {},
    i = [], n = 0; n < this.length; n++) {
        var s = this[n],
        a = !!e && typeof t[s] != typeof s; (void 0 === t[s] || a) && (t[s] = s, i.push(s))
    }
    return i
},
Array.prototype.indexOf = function(e) {
    for (var t = 0; t < this.length; t++) if (this[t] == e) return t;
    return - 1
},
Array.prototype.remove = function(e) {
    var t = this.indexOf(e);
    t > -1 && this.splice(t, 1)
},
Array.prototype.filter || (Array.prototype.filter = function(e) {
    "use strict";
    if (void 0 === this || null === this) throw new TypeError;
    var t = Object(this),
    i = t.length >>> 0;
    if ("function" != typeof e) throw new TypeError;
    for (var n = [], s = arguments.length >= 2 ? arguments[1] : void 0, a = 0; a < i; a++) if (a in t) {
        var o = t[a];
        e.call(s, o, a, t) && n.push(o)
    }
    return n
}),
Array.prototype.map || (Array.prototype.map = function(e, t) {
    var i, n, s;
    if (null == this) throw new TypeError(" this is null or not defined");
    var a = Object(this),
    o = a.length >>> 0;
    if ("[object Function]" != Object.prototype.toString.call(e)) throw new TypeError(e + " is not a function");
    for (t && (i = t), n = new Array(o), s = 0; s < o;) {
        var r, l;
        s in a && (r = a[s], l = e.call(i, r, s, a), n[s] = l),
        s++
    }
    return n
}),
Array.prototype.indexOf || (Array.prototype.indexOf = function(e, t) {
    var i;
    if (null == this) throw new TypeError('"this" is null or not defined');
    var n = Object(this),
    s = n.length >>> 0;
    if (0 === s) return - 1;
    var a = 0 | t;
    if (a >= s) return - 1;
    for (i = Math.max(a >= 0 ? a: s - Math.abs(a), 0); i < s;) {
        if (i in n && n[i] === e) return i;
        i++
    }
    return - 1
}),
Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
    value: function(e) {
        if (null == this) throw new TypeError('"this" is null or not defined');
        var t = Object(this),
        i = t.length >>> 0;
        if ("function" != typeof e) throw new TypeError("predicate must be a function");
        for (var n = arguments[1], s = 0; s < i;) {
            var a = t[s];
            if (e.call(n, a, s, t)) return a;
            s++
        }
    }
}),
"function" != typeof Array.prototype.reduce && (Array.prototype.reduce = function(e, t) {
    "use strict";
    if (null === this || void 0 === this) throw new TypeError("Array.prototype.reduce called on null or undefined");
    if ("function" != typeof e) throw new TypeError(e + " is not a function");
    var i, n, s = this.length >>> 0,
    a = !1;
    for (1 < arguments.length && (n = t, a = !0), i = 0; s > i; ++i) this.hasOwnProperty(i) && (a ? n = e(n, this[i], i, this) : (n = this[i], a = !0));
    if (!a) throw new TypeError("Reduce of empty array with no initial value");
    return n
}),
function(e, t, n, s) {
    var a = function(t, i) {
        var n = this;
        n.$element = t,
        n.defaults = {
            width: 840,
            height: 256,
            start: 1,
            speed: 400,
            interval: 3e3,
            autoPlay: !1,
            dotShow: !0,
            navShow: !0,
            arrShow: !0,
            touch: !0,
            effect: "slide",
            fadeOut: !0,
            afterSlider: function() {}
        },
        n.clickable = !0,
        n.options = e.extend({},
        n.defaults, i)
    };
    a.prototype = {
        init: function() {
            var n = this,
            s = n.$element,
            a = s.children("ul"),
            o = a.children("li"),
            r = o.length,
            l = n.options.start,
            c = 0,
            d = 0;
            if (n.options.arrShow) {
                s.append('<a href="javascript:;" class="btn-direction btn-prev prev"></a><a href="javascript:;" class="btn-direction btn-next next"></a>')
            }
            for (i = 1; i <= r; i++) l == i && o.eq(l - 1).addClass("cur");
            if (n.options.dotShow) {
                var u = "";
                for (i = 1; i <= r; i++) l == i ? u += '<i data-index="' + i + '" class="cur"></i>': u += '<i data-index="' + i + '"></i>';
                var p = '<div class="slider-dot">' + u + "</div>";
                s.append(p)
            }
            var h = function() {
                var e = s.width(),
                t = n.options.height / n.options.width * e;
                s.css("height", t)
            };
            if (s.css("height", n.options.height), h(), e(t).resize(function() {
                h()
            }), n.options.arrShow && (s.find(".next").on("click",
            function(e) {
                e.preventDefault(),
                n.clickable && (l >= r ? l = 1 : l += 1, n.moveTo(l, "next"))
            }), s.find(".prev").on("click",
            function(e) {
                e.preventDefault(),
                n.clickable && (1 == l ? l = r: l -= 1, n.moveTo(l, "prev"))
            })), n.options.dotShow && s.find(".slider-dot i").on("mouseover",
            function(t) {
                if (t.preventDefault(), void 0 !== f && clearInterval(f), n.clickable) {
                    var i = e(this).data("index");
                    dir = i > l ? "next": "prev",
                    i != l && (l = i, n.moveTo(l, dir))
                }
            }), n.options.navShow && s.parent().find(".slider-nav a").on("mouseover",
            function(t) {
                if (t.preventDefault(), n.clickable) {
                    var i = e(this).data("index");
                    dir = i > l ? "next": "prev",
                    i != l && (l = i, n.moveTo(l, dir))
                }
            }), n.options.autoPlay) {
                var f, m = function() {
                    l++,
                    l > r && (l = 1),
                    n.moveTo(l, "next")
                };
                f = setInterval(m, n.options.interval),
                s.hover(function() {
                    f = clearInterval(f)
                },
                function() {
                    f = setInterval(m, n.options.interval)
                })
            }
            n.options.touch && o.on({
                touchstart: function(e) {
                    c = e.originalEvent.touches[0].clientY,
                    d = e.originalEvent.touches[0].clientX
                },
                touchend: function(e) {
                    var t = e.originalEvent.changedTouches[0].clientY,
                    i = e.originalEvent.changedTouches[0].clientX,
                    s = c - t,
                    a = d - i;
                    Math.abs(a) > Math.abs(s) && (a > 5 ? (l >= r ? l = 1 : l += 1, n.moveTo(l, "next")) : (1 == l ? l = r: l -= 1, n.moveTo(l, "prev"))),
                    c = null,
                    d = null
                },
                touchmove: function(e) {
                    e.preventDefault && e.preventDefault()
                }
            })
        },
        moveTo: function(t, i) {
            var n = this,
            s = n.$element,
            a = n.clickable,
            o = s.find(".slider-dot i"),
            r = s.parent().find(".slider-nav a"),
            l = s.children("ul"),
            c = l.children("li");
            if (!a) return ! 1;
            if (n.clickable = !1, "fade" == n.options.effect) 1 == n.options.fadeOut ? l.children(".cur").fadeOut(function() {
                e(this).removeClass("cur")
            }) : l.children(".cur").hide().removeClass("cur"),
            c.eq(t - 1).fadeIn(function() {
                e(this).addClass("cur"),
                n.clickable = !0
            });
            else {
                var d = s.width();
                "prev" == i && (d *= -1),
                l.children(".cur").stop().animate({
                    left: -d
                },
                n.options.speed,
                function() {
                    e(this).removeClass("cur")
                }),
                c.eq(t - 1).css("left", d + "px").addClass("cur").stop().animate({
                    left: 0
                },
                n.options.speed,
                function() {
                    n.clickable = !0
                })
            }
            n.options.afterSlider.call(n),
            o.removeClass("cur"),
            o.eq(t - 1).addClass("cur"),
            r.removeClass("cur"),
            r.eq(t - 1).addClass("cur")
        }
    },
    e.fn.hwSlider = function(e) {
        var t = new a(this, e);
        return this.each(function() {
            t.init()
        })
    }
} (jQuery, window, document);
var PlaceholderCheck = {
    init: function(e) {
        if (!placeholderSupport()) {
            var t;
            t = e ? e.find("[placeholder]") : $("[placeholder]"),
            t.focus(function() {
                var e = $(this);
                e.val() == e.attr("placeholder") && (e.val(""), e.removeClass("placeholder"))
            }).blur(function() {
                var e = $(this);
                "" != e.val() && e.val() != e.attr("placeholder") || (e.addClass("placeholder"), e.val(e.attr("placeholder")))
            }).blur()
        }
    }
};
$(function() {
    PlaceholderCheck.init()
});
var Storage = {
    get: function(e) {
        var t = this._getStorage(),
        i = "";
        if (t) return (i = t.getItem(e)) && JSON.parse(i)
    },
    set: function(e, t) {
        var i = this._getStorage();
        e && void 0 !== t && i.setItem(e, JSON.stringify(t))
    },
    del: function(e, t) {
        var i = this._getStorage();
        if (i) if (e && t) for (var e in i) 0 === e.indexOf(prefix) && i.removeItem(e);
        else e ? i.removeItem(e) : i.clear()
    },
    _getStorage: function() {
        var e;
        try {
            e = window.localStorage
        } catch(e) {}
        return e
    }
},
Report = {
    init: function() {
        Report.uploadCount = 0,
        Report.setContent()
    },
    setContent: function() {
        var e = function(e) {
            e.remove(),
            Report.uploadCount--
        };
        $("body").on("click", ".icon-report,.link-report",
        function() {
            try {
                _T.sendEvent("report_geek_" + $(".icon-report").siblings(".icon-coop").attr("data-uid"))
            } catch(e) {}
            var t = $(this).attr("data-uid") || "",
            i = $(this).attr("data-expect") || "";
            $.get("/user/report/form.json",
            function(n) {
                n.rescode ? $.dialog({
                    content: n.html,
                    title: "举报",
                    inline: !0,
                    cancelButton: "取消",
                    confirmButton: "确认",
                    wrapClass: "pop-report",
                    onOpen: function(t) {
                        "FormsUI" in window && FormsUI.dropSelect(t),
                        "DropDown" in window && DropDown.init(t),
                        t.find(".verify-box img").on("click",
                        function() {
                            $(this).attr("src", "/captcha/?randomKey=" + $(this).siblings(".randomkey").val() + "&_r=" + (new Date).getTime())
                        }),
                        t.find("#fileupload").on("click",
                        function(e) {
                            $(this).next(".verify-box") ? Report.checkForm($(".verify-box")) ? Report.uploadPictures($(this), t) : e.preventDefault() : Report.uploadPictures($(this), t)
                        }),
                        t.on("click", ".link-close",
                        function() {
                            e($(this).parents("li"))
                        })
                    },
                    onConfirm: function(e) {
                        return Report.submitForm(e, t, i)
                    }
                }) : 1011 == n.code && void 0 !== Detail ? Detail.showSign(1011) : $.toast({
                    content: n.resmsg,
                    type: "error"
                })
            })
        })
    },
    uploadPictures: function(el, popContent) {
        var url = "/faqfeedback/pc/upload/picture.json",
        typeRule = /(\.|\/)(png|jpg|jpeg)$/i,
        maxSize = 3e6,
        el = el,
        previewEl = el.siblings(".preview"),
        uploadContainer = el.closest(".upload"),
        vertifyEl = popContent.find(".verify-box .ipt");
        el.fileupload({
            method: "POST",
            url: url,
            dataType: "text",
            acceptFileTypes: typeRule,
            maxChunkSize: maxSize,
            formData: {
                token: window.top._PAGE.token ? window.top._PAGE.token.split("|")[0] : ""
            },
            add: function(e, t) {
                var i = t.files[0],
                n = i.name,
                s = i.size;
                return fileInfo = i,
                typeRule.test(n) ? s > maxSize ? void $.toast({
                    content: "请上传3M以内的文件",
                    type: "error"
                }) : Report.uploadCount >= 6 ? void popContent.find(".preview").siblings(".text-error").html("最多可以上传6张照片") : (popContent.find(".preview").siblings(".text-error").html(""), uploadContainer.find("a").html('上传图片<i class="icon-toast-loading"></i>'), t.formData = {
                    randomKey: popContent.find(".randomkey").val() || "",
                    captcha: popContent.find(".verify-box input").val() || ""
                },
                void t.submit()) : void $.toast({
                    content: "请上传png、jpg、jpeg 格式的文件",
                    type: "error"
                })
            },
            done: function(e, data) {
                var result = data.result;
                "string" == typeof result && (result = eval("(" + result + ")")),
                1 == result.rescode ? (Report.uploadCount++, setTimeout(function() {
                    previewEl.find("ul").append('<li><img src="' + result.url[0] + '" data-img="' + result.url[1] + '"/><i class="link-close"></i></li>'),
                    popContent.addClass("upload-complate"),
                    uploadContainer.find("a").html("上传图片")
                },
                500), popContent.addClass("upload-complate")) : (uploadContainer.find("a").html("上传图片"), $.toast({
                    content: result.resmsg,
                    type: "error"
                }), "验证码错误" == result.resmsg && (vertifyEl.val("").focus(), popContent.find(".verify-box img").click()))
            },
            fail: function(e, t) {
                uploadContainer.find("a").html("上传图片"),
                $.toast({
                    content: "上传失败",
                    type: "error"
                })
            }
        })
    },
    submitForm: function(e, t, i) {
        var n = e,
        s = $.trim(n.find("textarea").val()),
        a = !1,
        o = this,
        r = "",
        l = "",
        c = "";
        if (n.find(".ipt-wrap").each(function() {
            return a = o.checkForm($(this)),
            o.checkForm($(this))
        }), a && !n.find(".preview img").length) return e.find(".preview").siblings(".text-error").html("请上传照片！"),
        !1;
        n.find(".preview img").each(function() {
            r += $(this).attr("data-img") + ","
        }),
        r = r.substring(0, r.length - 1),
        "" != t ? (l = t, c = i) : "_reportData" in window ? (l = _reportData.reportedId, c = _reportData.targetId) : (l = Chat.curUserData.uid, c = Chat.curUserData.infoData.expectId);
        var d = {
            reportedId: l,
            reasonCode: $('input[name="reasonCode"]').val(),
            content: s,
            targetId: c,
            imgUrl: r || "",
            randomKey: n.find(".randomkey").val(),
            captcha: $(".verify-box input").val()
        };
        return a && (a = !1, $.ajax({
            url: "/user/report/save.json",
            type: "POST",
            data: d,
            dataType: "JSON",
            timeout: 3e4,
            success: function(t) {
                t.rescode ? ($.toast({
                    content: "发送成功，感谢您的反馈 ：）",
                    type: "success"
                }), Report.uploadCount = 0, e.remove()) : ($.toast({
                    content: t.resmsg,
                    type: "error"
                }), "验证码错误" == t.resmsg && (n.find(".verify-box .ipt").val("").focus(), n.find(".verify-box img").click()))
            },
            error: function(e) {}
        })),
        !1
    },
    checkForm: function(e) {
        var t, i = e.find(".ipt").val();
        if (void 0 != e.find(".ipt").attr("data-range")) {
            if (t = e.find(".ipt").attr("data-range").split(",")[1], i.length > t) return e.next(".text-error").html("请输入" + t + "个字以内的内容"),
            !1;
            e.next(".text-error").html("")
        }
        if ("" == i) {
            var n = e.find(".ipt").attr("data-blank");
            return e.find(".ipt").focus(),
            e.next(".text-error").html(n),
            !1
        }
        return e.next(".text-error").html(""),
        !0
    }
};
$(function() {
    Report.init()
});
var Block = function() {
    function e(e, t) {
        var i = e,
        n = $.confirm({
            content: t,
            title: !1,
            closeIcon: !0,
            cancelButton: !!i.cancelText && i.cancelText,
            confirmButton: i.confirmText || "确定",
            confirmButtonClass: "fr",
            columnClass: "pop-block " + i.style,
            onOpen: function() {
                i.ka && this.$confirmButton.attr("ka", i.ka),
                i.vka && __conversion(i.vka),
                i.open && i.open(this)
            },
            confirm: function() {
                if (i.next && i.next(this.$content), !i.next && i.confirm && i.confirm(), 0 == i.autoClose) return ! 1
            },
            cancel: function(e) {
                i.cancel && e && i.cancel()
            },
            onClose: function(e) {
                i.close && i.close()
            }
        });
        return $(document).on("_BEFORE_UNLOAD",
        function() {
            n.close()
        }),
        n
    }
    function t(t) {
        var i = t,
        n = t.content || a({
            title: i.title,
            description: i.description
        });
        i.style = "pop-block-alert",
        e(i, n)
    }
    function i(t, i) {
        var n = {},
        s = function(e, t) {
            var n = i.isEdit ? "延长": "发布";
            e.text("付费" + n + "职位：￥" + t)
        },
        o = function() {
            if ("vip" == $(".hot-list-tab .checked").attr("data-cls")) return n.vip.type = "vip",
            n.vip;
            var e = $("input[name=ordinary]").filter(":checked"),
            t = e.attr("data-type"),
            i = e.attr("data-index");
            return selected = n[t][i],
            selected.type = t,
            selected.ba = n.ba,
            selected
        },
        r = {
            open: function(e) {
                var t = e.$content;
                if (t.on("change", "input[name='ordinary']",
                function() {
                    var i = $(this).attr("data-type"),
                    a = $(this).attr("data-index"),
                    o = n[i][a];
                    s(e.$confirmButton, o.pay),
                    t.find("." + i + "-view").text(o.view),
                    t.find("." + i + "-employ").text(o.employ)
                }), t.on("click", ".hot-list-tab li",
                function() {
                    $(".hot-list-tab .checked").removeClass("checked"),
                    $(this).addClass("checked"),
                    t.find(".block-storm").removeClass("combination-ord").removeClass("combination-vip").addClass("combination-" + $(this).attr("data-cls")),
                    "ord" == $(this).attr("data-cls") ? (e.$confirmButton.removeClass("btn-vip-rose"), t.find("input[name=ordinary]").filter(":checked").trigger("change")) : e.$confirmButton.addClass("btn-vip-rose").text("开通VIP帐号")
                }), $(".hot-list-tab li.checked").length ? $(".hot-list-tab li.checked").trigger("click") : t.find("input[name=ordinary]").filter(":checked").trigger("change"), e.$btnc.on("click", ".trial a",
                function() {
                    var t = n.experience;
                    t.type = "experience",
                    i.confirm(t),
                    e.close(),
                    __conversion("block_sendjob_purchase_trial")
                }), n.experience) {
                    e.$btnc.append(Utemplate('<p class="trial">您有一次免费体验机会，可免费试用火爆职位普通版<%this.expiredays%>天，<a href="javascript:">点击免费使用</a></p>', n.experience))
                }
            },
            next: function() {
                var e = o();
                i.confirm && i.confirm(e)
            }
        };
        i.canBuyVip ?
        function() {
            $.when(p({
                sf: i.sf || "",
                vipPriceId: i.vipPriceId
            }), h(t)).then(function(t, s) {
                n = s,
                n.vip = {
                    ba: t.detailPage.ba,
                    vipPriceId: i.vipPriceId,
                    pay: t.detailPage.currentPriceDesc.replace(/[^\d.]/g, "")
                };
                var o = $.extend(r, i);
                e(o, a({
                    title: o.title,
                    description: o.description
                }) + c.storm(t.detailPage, s))
            })
        } () : function() {
            var s = function(t) {
                n = t;
                var s = $.extend(r, i);
                e(s, a({
                    title: s.title,
                    description: s.description
                }) + l.storm(t))
            };
            t.combos ? s(t.combos) : h(t).then(function(e) {
                s(e)
            })
        } ()
    }
    function n(t, i) {
        var n, s = function(t) {
            n = t;
            var s = i,
            r = a({
                title: s.title,
                description: s.description
            }) + o(t);
            s.next = function() {
                var e = $("input[name=super]").filter(":checked").attr("data-index"),
                t = n.prices[e];
                s.confirm(t)
            },
            s.open = function(e) {
                var s = e.$content,
                a = function(e, t) {
                    var n = i.isEdit ? "延长": "发布";
                    e.text("付费" + n + "职位：￥" + t)
                },
                o = i.isEdit ? "付费延长职位": "付费发布职位";
                if (e.$confirmButton.text(o + "：￥" + t.pay), e.$btnc.on("click", ".trial a",
                function() {
                    var t = n.experience;
                    t.type = "experience",
                    i.confirm(t),
                    e.close(),
                    __conversion("block_sendjob_purchase_trial")
                }), s.on("change", "input[name='super']",
                function() {
                    var t = $(this).attr("data-index"),
                    i = n.prices[t];
                    a(e.$confirmButton, i.pay);
                    var o = "可保持职位在线" + i.expiredays + "天，期间每日查看详情" + i.view + "，开聊上限为" + i.employ + "。";
                    s.find(".hot-intro").text(o)
                }), s.find("input[name=super]").filter(":checked").trigger("change"), n.experience) {
                    e.$btnc.append(Utemplate('<p class="trial">你有一次免费体验机会，可以免费试用火爆职位限制版 <%this.expiredays%> 天，<a ka="block_sendjob_purchase_super_trial" href="javascript:">点击免费使用</a></p>', n.experience))
                }
            },
            e(s, r)
        };
        t.combos ? s(t.combos) : u(t).then(function(e) {
            s(e)
        })
    }
    function s(t, i) {
        var n = i,
        s = n.content || r(t);
        n.style = "pop-block-upgrade",
        n.open = function(e) {
            e.$confirmButton.text("付费升级职位：" + t.currentPriceDesc)
        },
        e(n, s)
    }
    var a = function(e) {
        return Utemplate(' <div class="block-intro"><img src="/v2/web/boss/images/icon-lock-24.png"><dl><dt><%this.title%></dt><dd class="gray"><%this.description%></dd></dl><div class="clear"></div></div>', e)
    },
    o = function(e) {
        return - 1 == e.view ? e.view = "无上限": e.view = e.view,
        Utemplate('<div class="hot-list hot-list"><p class="hot-intro">可保持职位在线<%this.description%>，期间每日查看详情<%this.view%>，开聊上限为<%this.employ%>。</p><ul class="ordinary"><%for(var i=0;i<this.prices.length;i++){%><li><label class="radio"><input data-index="<%i%>" type="radio" <%if(i == 0){%>checked<%}%> name="super" value="<%i%>"><span>普通版，<%this.prices[i].description%><%if(this.prices[i].discount){%><em class="discount"><%this.prices[i].discount%></em><%}%><em class="pay">￥<%this.prices[i].pay%>/职位</em></span></label></li><%}%></ul></div>', e)
    },
    r = function(e) {
        return e.hlShortDesc.name = function() {
            var t = e.hlShortDesc,
            i = t.name;
            return t.highlightList && t.highlightList.length && $.each(t.highlightList,
            function(e, t) {
                var n = i.substr(t.startIndex, t.endIndex);
                i = i.replace(n, "<b>" + n + "</b>")
            }),
            i
        } (),
        Utemplate('<div class="super-upgrade-panel"><div  class="super-upgrade-description"><span class="icon-lock"></span><div class="description"><h4><%this.title%>普通版，<%this.animationTitle%></h4><p><%this.shortDesc.name%></p><p><%this.hlShortDesc.name%></p></div></div><dl class="super-upgrade-list"><dt>畅聊版<span class="icon-upgrade">升级</span></dt><%for(var i=0;i<this.descList.length;i++){%><dd><%this.descList[i]%><i class="icon-check"></i></dd><%}%><dd><b>升级所需价格：</b><span class="bean-number"><%this.currentPriceDesc%></span><span class="upgrade-discount">限时折扣</span><span class="annotation"><%this.upgradeDesc%></span></dd></dl><p class="notice">*以上价格均为单个职位价格，不同城市不同职类价格有所波动</p></div>', e)
    },
    l = {
        vip: function(e) {
            var t = {
                pay: e.currentPriceDesc,
                list: e.lineList
            };
            return Utemplate('<table class="vip-grid"><thead><tr><th>账号权益</th><th style="width: 90px;">认证账号</th><th style="width: 70px;">VIP账号</th></tr></thead><tbody><%for (var i=0;i<this.list.length;i++){%><tr><td><div class="cut-off"><%this.list[i].itemDesc%><i class="gray"><%this.list[i].itemDescHint%></i></div></td><td class="gray"><%this.list[i].curDesc%></td><td class="primrose"><%this.list[i].totalDesc%></td></tr><%}%></tbody></table><div class="vip-counter"><p class="fl">权益总价值<i>限时折扣</i></p><p class="fr primrose">¥<%this.pay%></p></div>', t)
        },
        storm: function(e) {
            return Utemplate('<div class="hot-list"><p class="hot-intro ordinary">火爆职位普通版，每日查看详情<span class="ordinary-view"><%this.ordinary[0].view%></span>，开聊<span class="ordinary-employ"><%this.ordinary[0].employ%></span></p><ul class="ordinary"><%for(var i=0;i<this.ordinary.length;i++){%><li><label class="radio"><input data-index="<%i%>" data-type="ordinary" type="radio" <%if(i == 0){%>checked<%}%> name="ordinary" value="0"><span>普通版，<%this.ordinary[i].description%><%if(this.ordinary[i].discount){%><em class="discount"><%this.ordinary[i].discount%></em><%}%><em class="pay">￥<%this.ordinary[i].pay%>/职位</em></span></label></li><%}%></ul><p class="hot-intro ordinary" style="padding-top: 9px;">火爆职位畅聊版，每日查看详情<span class="carefree-view"><%this.carefree[0].view%></span>，开聊<span class="carefree-employ"><%this.carefree[0].employ%></span></p><ul class="ordinary"><%for(var j=0;j<this.carefree.length;j++){%><li><label class="radio"><input data-index="<%j%>" type="radio" data-type="carefree" name="ordinary" value="0"><span>畅聊版，<%this.carefree[j].description%><%if(this.carefree[j].discount){%><em class="discount"><%this.carefree[j].discount%></em><%}%><em class="pay">￥<%this.carefree[j].pay%>/职位</em></span></label></li><%}%></ul>', e)
        }
    },
    c = {
        vip: function(e) {
            return '<div class="vip-ordinary-grid">' + l.vip(e) + "</div>"
        },
        storm: function(e, t) {
            return '<div class="block-storm combination-vip"><div class="hot-list-tab"><ul><li data-cls="vip" class="checked">开通VIP</li><li data-cls="ord">单独发布</li></ul></div><div class="vip-wrap">' + l.vip(e) + '</div><div class="ordinary-wrap">' + l.storm(t) + "</div></div>"
        }
    },
    d = function(e) {
        var e = e;
        return $.isArray(e) ? $.each(e,
        function(t, i) { - 1 == i.view ? e[t].view = "无上限": e[t].view = i.view + "人",
            -1 == i.employ ? e[t].employ = "无上限": e[t].employ = i.employ + "人"
        }) : ( - 1 == e.view ? e.view = "无上限": e.view = e.view + "人", -1 == e.employ ? e.employ = "无上限": e.employ = e.employ + "人"),
        e
    },
    u = function(e) {
        var t = $.Deferred();
        return $.get("/bossweb/job/superprice.json", e).success(function(e) {
            1 == e.rescode && (e.prices = d(e.prices), e.experience && (e.experience = d(e.experience)), t.resolve(e))
        }),
        t
    },
    p = function(e) {
        var t = $.Deferred();
        return $.get("/bossweb/job/vipaccountprice.json", e).success(function(e) {
            1 == e.rescode && t.resolve(e)
        }),
        t
    },
    h = function(e) {
        var t = $.Deferred();
        return e.combos ? t.resolve(e.combos) : $.get("/bossweb/job/price.json", e).success(function(e) {
            if (1 == e.rescode) {
                var i = {};
                i.ordinary = d(e.ordinary),
                i.carefree = d(e.carefree),
                e.experience && (i.experience = d(e.experience)),
                t.resolve(e)
            }
        }),
        t
    },
    f = function(t, i) {
        p(t).then(function(n) {
            var s = i,
            o = a({
                title: s.title || "发布普通职位个数已达上限",
                description: s.description
            }) + c.vip(n.detailPage);
            s.style = "pop-vip",
            s.cancelText = "我再想想",
            s.confirmText = "开通VIP帐号",
            s.next = function() {
                i.confirm({
                    ba: n.detailPage.ba,
                    vipPriceId: t.vipPriceId,
                    pay: n.detailPage.currentPriceDesc.replace(/[^\d.]/g, "")
                })
            },
            e(s, o)
        })
    },
    m = function(e) {
        var t = e;
        return e && "[object Object]" !== Object.prototype.toString.call(e) && (t = JSON.parse(decodeURIComponent(e))),
        t
    };
    return {
        confirm: t,
        purchase: i,
        super: n,
        upgrade: s,
        vip: f,
        action: function(e, t) {
            var t = t || {},
            i = $.extend(e, t);
            $.ajax({
                method: "post",
                url: "/actionLog/common.json",
                data: {
                    ba: JSON.stringify(i)
                },
                cache: !1,
                success: function(e) {},
                error: function() {}
            })
        },
        formatBA: m
    }
} (),
Upgrade = function() {
    var e = function(e, t) {
        window.top.Purchase.position("/boss/block/pay.json", {
            priceId: t.priceId,
            action: 4,
            hotJobType: 0,
            business: t.business || "",
            targetId: t.targetId,
            targetType: t.targetType
        },
        {
            item: t,
            success: e.success,
            confirm: function() {}
        })
    };
    return {
        render: function(t, i) {
            var n = {
                cancelText: "我再想想",
                vka: "block_upgradejob_purchase_hot",
                cancel: function() {},
                confirm: function() {
                    i.ba && Block.action(Block.formatBA(i.ba), {
                        p4: 4,
                        p5: i.priceId,
                        action: "user-block-biz-button"
                    }),
                    e({
                        success: function() {}
                    },
                    i)
                }
            };
            window.top.Block.upgrade(t, $.extend(n, i))
        }
    }
} (),
DirectAccessCard = function() {
    var e = {},
    t = {
        prop: function(e) {
            var t = $.Deferred();
            return $.get("/boss/item/quicktop/selposition.json?jobId=" + e).success(function(e) {
                1 == e.rescode ? t.resolve(e) : $.toast({
                    type: "error",
                    content: e.resmsg
                })
            }),
            t
        }
    },
    i = {
        notice: function(e) {
            return Utemplate('<div class="free-notice-panel"><h4 class="subhead">保存成功</h4><p>您使用免费权益发布了一个普通职位，</p><p>该职位价值50元/月，</p><p>剩余可免费在线普通职位数：<%this.unPubCount%>个。</p><i class="bead-close"></i></div>', e)
        },
        recommend: function(e, t) {
            return (t.title ? i.notice(t) : Utemplate('<div class="brief-panel"><p class="icon-brief icon-success"></p><div class="brief-description"><p class="heading">保存成功</p><p class="position gray"><span class="position-name"><%this.positionName%></span><em class="vline"></em><%this.locationName%><em class="vline"></em><%this.lowSalary%>K-<%this.highSalary%>K</p></div><i class="bead-close"></i></div>', e)) + Utemplate('<div class="introduce-panel"><img src="/v2/web/boss/images/prop/promotion.png"><p class="slogan">急聘直通卡限时专享</p><p class="intro-text">置顶职位+邀约投递，立即提升职位招聘效率</p><p class="notice">职位发布24小时内限时购买</p><button class="btn">立即体验</button></div>', e)
        },
        card: function(e) {
            return Utemplate('<div class="brief-panel"><p class="icon-brief icon-card"></p><div class="brief-description"><p class="heading">急聘直通卡购买</p><p class="position gray">置顶职位+邀约投递，立即提升职位招聘效率</p></div><i class="card-discount"></i></div><div class="card-description"><p class="position gray">使用职位：<span class="position-name"><%this.job.positionName%></span><em class="vline"></em><%this.job.locationName%><em class="vline"></em><%this.job.lowSalary%>K-<%this.job.highSalary%>K</p><div class="position-category"><div class="position-tip">置顶职类<p class="fr gray">选择更多职类置顶，提升招聘效果，可享额外折扣</p></div><%if(1 < this.positionList.length){%><dl><dt><%this.positionList[0].name%></dt><%for(var i=1; i<this.positionList.length;i++){%><dd><%this.positionList[i].name%></dd><%}%></dl><%}%></div></div>', e)
        }
    },
    n = function() {
        setTimeout(function() {
            window.top.location.href = "/chat/im?mu=/bossweb/joblist.html"
        },
        1e3)
    },
    s = function() {
        var t = $(".direct-card-pop .position-category .selected"),
        i = t.length > 0 ? t.length: 0,
        n = Math.min(i, e.positionDiscount.length - 1),
        s = e.positionDiscount[n],
        a = 1e3 * e.positionList[0].price;
        t.each(function(t, i) {
            var t = $(this).index();
            a += 1e3 * e.positionList[t].price
        });
        var o = Math.floor(a * (1 - s) / 1e3);
        return {
            amount: a / 1e3,
            discount: s,
            save: t.length > 0 ? Math.ceil(a / 1e3 - o) : 0,
            pay: o
        }
    },
    a = function() {
        var e = s(),
        t = "选择更多职类置顶，提升招聘效果，可享额外折扣";
        if (e.discount > 0) {
            t = "招聘效果提升" + ($(".direct-card-pop .position-category .selected").length + 1) + "倍 额外立减" + 100 * e.discount + "% ",
            $(".direct-card-pop .position-tip .gray").addClass("discount-tip").text(t)
        } else $(".direct-card-pop .discount-tip").removeClass("discount-tip").text(t);
        $(".direct-card-pop .dialog-footer  .prop-total").remove();
        var i = '<p class="prop-total">￥<em>' + e.pay;
        e.save > 0 && (i += "</em><span>(已省" + e.save + ")</span>"),
        i += "</p>",
        $(".direct-card-pop .dialog-footer .btns").append(i)
    },
    o = function(e) {
        var t = s(),
        i = function() {
            Payment.success({
                article: "购买成功",
                text: "即刻置顶职位24小时，邀约匹配牛人投递,可在BOSS直聘APP「我的道具」中查看使用效果",
                confirm: function() {
                    n()
                }
            })
        },
        a = {
            url: "/boss/item/pay/quicktop.json",
            data: e,
            description: "购买简历直通卡",
            amount: t.pay,
            itemId: "b6ed128ee1b8d2841HI~",
            success: i,
            close: function() {},
            cancel: function() {}
        },
        o = {
            success: i,
            cancel: n,
            close: n
        };
        Payment.purchase(a, o)
    },
    r = function(t) {
        e = $.extend({},
        t);
        $.dialog({
            bind: !0,
            title: "",
            closeLayer: !1,
            content: i.card(t),
            wrapClass: "direct-card-pop",
            confirmText: "购买并使用",
            cancelText: "取消",
            onOpen: function(e) {
                $(e).on("click", ".position-category dd",
                function() {
                    $(this).toggleClass("selected"),
                    a()
                }),
                a()
            },
            onConfirm: function() {
                var t = [];
                $(".direct-card-pop .position-category .selected").each(function(i, n, s) {
                    var a = $(this).index();
                    t.push(e.positionList[a].code)
                });
                var i = {
                    jobId: e.job.jobId,
                    positionCode: t.join(","),
                    userCouponId: ""
                };
                o(i),
                this.close(),
                __conversion("ermergency_buy")
            },
            onClose: function(e) {
                $(e).off("click")
            },
            onCancel: function() {
                n()
            }
        })
    },
    l = function(e, s) {
        var s = s || {};
        $.dialog({
            bind: !0,
            title: "",
            closeLayer: !1,
            content: i.recommend(e, s),
            wrapClass: "direct-card-pop",
            confirmText: !1,
            cancelText: !1,
            onOpen: function(i) {
                var s = this;
                $(i).on("click", ".bead-close",
                function() {
                    s.close(),
                    n()
                }),
                $(i).on("click", ".introduce-panel .btn",
                function() {
                    s.close(),
                    t.prop(e.jobId).then(function(e) {
                        r(e)
                    }),
                    __conversion("ermergency_edit")
                }),
                __conversion("ermergency_card")
            },
            onClose: function(e) {
                $(e).off("click")
            }
        })
    };
    return {
        show: r,
        notice: function(e) {
            $.dialog({
                bind: !0,
                title: "",
                closeLayer: !1,
                content: i.notice(e),
                wrapClass: "direct-card-pop",
                confirmText: !1,
                cancelText: !1,
                onOpen: function(e) {
                    var t = this;
                    $(e).on("click", ".bead-close",
                    function() {
                        t.close(),
                        n()
                    })
                },
                onClose: function(e) {
                    $(e).off("click")
                }
            })
        },
        recommend: l
    }
} (),
Feedback = {
    _picCount: 0,
    _limitPicCount: 3,
    getContent: function() {
        var e = this;
        $.get("/faqfeedback/pc/create.json").success(function(t) {
            $.dialog({
                content: t.html,
                title: '意见反馈<span class="tips">（登录用户，提交反馈后可在App端查看客服回复的消息）</span>',
                closeText: !0,
                cancelButton: "取消",
                confirmButton: "确认",
                inline: !0,
                wrapClass: "pop-feedback",
                closeLayer: !1,
                onOpen: function(t) {
                    var i = t.find(".upload-pics"),
                    n = t.find(".upload-pic-btn"),
                    s = t.find(".upload-pic-btn-wrapper"),
                    a = t.find(".verify-box");
                    Feedback._picCount = 0,
                    a.find("img").on("click",
                    function() {
                        $(this).attr("src", "/captcha/?randomKey=" + $(this).siblings(".randomkey").val() + "&_r=" + (new Date).getTime())
                    }),
                    n.on("click",
                    function(n) {
                        if (i.children(".upload-pic").length >= Feedback._limitPicCount) return $.toast({
                            content: "最多上传" + Feedback._limitPicCount + "张图片",
                            type: "error"
                        }),
                        n.preventDefault(),
                        !1;
                        a ? e.checkForm(a) ? e.uploadPicture(i, t) : n.preventDefault() : e.uploadPicture(i, t)
                    }),
                    i.on("click", ".remove-pic",
                    function(e) {
                        $(this).closest(".upload-pic").remove(),
                        --Feedback._picCount,
                        i.children(".upload-pic").length < Feedback._limitPicCount && s.show()
                    })
                },
                onConfirm: function(t) {
                    return e.submitForm(t)
                },
                onCancel: function(e) {
                    try {
                        _T.sendEvent("feedback_cancel")
                    } catch(e) {}
                    e.remove()
                }
            })
        })
    },
    uploadPicture: function(elPicsWrap, popContent) {
        var vertifyEl = popContent.find(".verify-box .ipt"),
        uploadWaringTimer = null,
        reg = /(\.|\/)(png|jpg|jpeg)$/i;
        elPicsWrap.fileupload({
            method: "POST",
            url: "/faqfeedback/pc/upload/picture.json",
            dataType: "text",
            acceptFileTypes: reg,
            maxChunkSize: 2e6,
            formData: {
                randomKey: popContent.find(".randomkey").val() || "",
                captcha: popContent.find(".verify-box input").val() || ""
            },
            add: function(e, t) {
                var i = t.files[0],
                n = i.name,
                s = i.size;
                return reg.test(n) ? s > 2e6 ? void $.toast({
                    content: "上传文件过大(最大2M)",
                    type: "error"
                }) : Feedback._picCount >= Feedback._limitPicCount ? (clearTimeout(uploadWaringTimer), uploadWaringTimer = setTimeout(function() {
                    $.toast({
                        type: "warning",
                        content: "最多上传3张图片"
                    })
                },
                100), !1) : (++Feedback._picCount, void t.submit()) : void $.toast({
                    content: "请上传png、jpg、jpeg 格式的文件",
                    type: "error"
                })
            },
            done: function(e, data) {
                var result = data.result;
                if ("string" == typeof result && (result = eval("(" + result + ")")), 1 == result.rescode) {
                    elPicsWrap.find(".upload-pic-btn-wrapper").before('<div class="upload-pic"><div class="remove-pic"></div><img src="' + result.url[0] + '" data-img="' + result.url[1] + '"/></div>'),
                    elPicsWrap.find(".upload-pic").length >= Feedback._limitPicCount && elPicsWrap.find(".upload-pic-btn-wrapper").hide();
                    try {
                        _T.sendEvent("feedback_pic")
                    } catch(e) {}
                } else clearTimeout(uploadWaringTimer),
                $.toast({
                    content: result.resmsg ? result.resmsg: result.message ? result.message: "上传失败",
                    type: "error"
                }),
                "验证码错误" == result.resmsg && (vertifyEl.val("").focus(), popContent.find(".verify-box img").click()),
                --Feedback._picCount
            },
            fail: function(e, t) {
                clearTimeout(uploadWaringTimer),
                $.toast({
                    content: "上传失败",
                    type: "error"
                }),
                --Feedback._picCount
            }
        })
    },
    submitForm: function(e) {
        var t, i = e,
        n = i.find("textarea").val(),
        s = this;
        i.find(".ipt-wrap").each(function() {
            return t = s.checkForm($(this)),
            s.checkForm($(this))
        });
        var a = {
            content: n,
            imgurl: i.find(".upload-pic img").map(function(e, t) {
                return $(t).data("img")
            }).get() || null,
            screen: $(window).width() + "*" + $(window).height(),
            pk: $("#page_key_name").val(),
            randomKey: i.find(".randomkey").val(),
            captcha: $(".verify-box input").val()
        };
        return t && (t = !1, $.ajax({
            url: "/faqfeedback/pc/save.json",
            type: "POST",
            data: a,
            traditional: !0,
            dataType: "JSON",
            timeout: 3e4,
            success: function(t) {
                if (t.rescode) {
                    $.toast({
                        content: "反馈成功！我们会尽快核实处理",
                        type: "success"
                    });
                    try {
                        _T.sendEvent("feedback_success")
                    } catch(e) {}
                    e.remove()
                } else {
                    $.toast({
                        content: t.resmsg || "提交失败，请稍后再试",
                        type: "error"
                    }),
                    i.find(".verify-box .ipt").val(""),
                    i.find(".verify-box img").click();
                    try {
                        _T.sendEvent("feedback_fail")
                    } catch(e) {}
                }
            },
            error: function(e) {
                $.toast({
                    content: "提交失败，请稍后再试",
                    type: "error"
                });
                try {
                    _T.sendEvent("feedback_fail")
                } catch(e) {}
            }
        })),
        !1
    },
    checkForm: function(e) {
        var t, i, n = e.find(".ipt").val();
        if (void 0 != e.find(".ipt").attr("data-range")) {
            var s = e.find(".ipt").attr("data-range").split(",");
            if (i = s[0], t = s[1], n.length > t) return e.next(".text-error").html("请输入" + t + "个字以内的内容"),
            !1;
            if (e.next(".text-error").html(""), n.length < i) return e.next(".text-error").html("内容描述至少" + i + "个字"),
            !1;
            e.next(".text-error").html("")
        }
        if ("" == n) {
            var a = e.find(".ipt").attr("data-blank");
            return e.find(".ipt").focus(),
            e.next(".text-error").html(a),
            !1
        }
        return e.next(".text-error").html(""),
        !0
    }
};
"_PAGE" in window && _PAGE.token ? $.ajaxSettings.beforeSend = function(e, t) {
    e.setRequestHeader("token", _PAGE.token.split("|")[0])
}: "_PAGE" in window.top && window.top._PAGE.token && ($.ajaxSettings.beforeSend = function(e, t) {
    e.setRequestHeader("token", window.top._PAGE.token.split("|")[0])
}),
$.ajaxSettings.statusCode = {
    200 : function() {},
    602 : function() {
        window.location.href = "/logout/"
    },
    603 : function() {
        window.location.href = "/geek/complete/guide.html"
    }
};
var browser = {
    versions: function() {
        var e = navigator.userAgent;
        navigator.appVersion;
        return {
            trident: e.indexOf("Trident") > -1,
            presto: e.indexOf("Presto") > -1,
            webKit: e.indexOf("AppleWebKit") > -1,
            gecko: e.indexOf("Gecko") > -1 && -1 == e.indexOf("KHTML"),
            mobile: !!e.match(/AppleWebKit.*Mobile.*/),
            ios: !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
            android: e.indexOf("Android") > -1 || e.indexOf("Adr") > -1,
            iPhone: e.indexOf("iPhone") > -1,
            iPad: e.indexOf("iPad") > -1,
            webApp: -1 == e.indexOf("Safari"),
            weixin: e.indexOf("MicroMessenger") > -1,
            qq: " qq" == e.match(/\sQQ/i)
        }
    } (),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
},
VerrifyCode = window.VerrifyCode ||
function() {
    var e = new Date,
    t = e.getFullYear() + "" + e.getMonth() + e.getDay(),
    i = function(e, i) {
        seriesLoadScripts("//g.alicdn.com/sd/ncpc/nc.js?t=" + t,
        function() {
            var t = ["BOSS_PC", (new Date).getTime(), Math.random().toString(16)].join(":"),
            n = {
                renderTo: "#" + e.id,
                appkey: e.appkey || "FFFF0N00000000006DC1",
                scene: e.scene || "nc_login",
                token: t,
                customWidth: i.find(".row-code").width(),
                trans: {
                    position: "sign-sms"
                },
                elementID: ["sign-sms"],
                is_Opt: 0,
                language: "cn",
                isEnabled: !0,
                timeout: 3e3,
                times: 5,
                apimap: {},
                callback: function(e) {
                    i.find("input[name=csig]").length || (i.find("form").append('<input type="hidden" name="csig" />'), i.find("form").append('<input type="hidden" name="ctoken" />'), i.find("form").append('<input type="hidden" name="csessionId" />'), i.find("form").append('<input type="hidden" value="FFFF0N00000000006DC1" name="cappKey" />'), i.find("form").append('<input type="hidden" value="nc_login" name="cscene" />')),
                    i.find("input[name=csig]").val(e.sig),
                    i.find("input[name=ctoken]").val(t),
                    i.find("input[name=csessionId]").val(e.csessionid)
                }
            };
            setTimeout(function() {
                new noCaptcha(n).upLang("cn", {
                    _startTEXT: "请按住滑块，拖动到最右边",
                    _yesTEXT: "验证通过",
                    _error300: '哎呀，出错了，点击<a href="javascript:__nc.reset()">刷新</a>再来一次',
                    _errorNetwork: '网络不给力，请<a href="javascript:__nc.reset()">点击刷新</a>'
                })
            },
            1)
        })
    },
    n = function(e, i) {
        seriesLoadScripts("//g.alicdn.com/sd/nch5/index.js?t=" + t,
        function() {
            var t = ["BOSS_H5", (new Date).getTime(), Math.random().toString(16)].join(":"),
            n = NoCaptcha.init({
                renderTo: "#" + e.id,
                appkey: e.appkey || "FFFF0N00000000006DC1",
                scene: "nc_login_h5",
                token: t,
                customWidth: "100%",
                trans: {
                    position: "sign-h5"
                },
                elementID: ["sign-h5"],
                is_Opt: 0,
                language: "cn",
                timeout: 1e4,
                retryTimes: 5,
                errorTimes: 5,
                inline: !1,
                apimap: {},
                bannerHidden: !1,
                initHidden: !1,
                callback: function(e) {
                    i.find("input[name=csig]").length || (i.find("form").append('<input type="hidden" name="csig" />'), i.find("form").append('<input type="hidden" name="ctoken" />'), i.find("form").append('<input type="hidden" name="csessionId" />'), i.find("form").append('<input type="hidden" value="FFFF0N00000000006DC1" name="cappKey" />'), i.find("form").append('<input type="hidden" value="nc_login" name="cscene" />')),
                    i.find("input[name=csig]").val(e.sig),
                    i.find("input[name=ctoken]").val(t),
                    i.find("input[name=csessionId]").val(e.csessionid)
                },
                error: function(e) {}
            });
            NoCaptcha.setEnabled(!0),
            n.reset(),
            NoCaptcha.upLang("cn", {
                LOADING: "加载中...",
                SLIDER_LABEL: "请向右滑动验证",
                CHECK_Y: "验证通过",
                CHECK_N: "验证未通过"
            })
        })
    },
    s = function(e, t) {
        var s = e || {},
        a = t || $(".sign-form:visible");
        if (e || (s.id = a.find(".row-code").attr("id"), s.scene = a.find("input[name=cscene]").val(), s.appkey = a.find("input[name=cappKey]").val()), !s.id) return ! 1;
        browser.versions.mobile ? n(s, a) : i(s, a)
    },
    a = function(e) {
        if (!e || !e.length) return ! 1;
        var t = e.parents(".sign-form").length ? e.parents(".sign-form") : e.parents("form"),
        i = "verrify" + Math.random().toString(32).substr( - 6, 6);
        e.empty(),
        e.attr("id", i),
        t.find("input[name=csig]").length ? (t.find("input[name=csig]").val(""), t.find("input[name=ctoken]").val(""), t.find("input[name=csessionId]").val("")) : (t.find("form").append('<input type="hidden" value="" name="csig" />'), t.find("form").append('<input type="hidden" value="" name="ctoken" />'), t.find("form").append('<input type="hidden" value="" name="csessionId" />'), t.find("form").append('<input type="hidden" value="FFFF0N00000000006DC1" name="cappKey" />'), t.find("form").append('<input type="hidden" value="nc_login" name="cscene" />')),
        s({
            id: i,
            scene: t.find("input[name=cscene]").val(),
            appkey: t.find("input[name=cappKey]").val()
        },
        t)
    },
    o = function() {
        $(".sign-form .row-code").each(function() {
            a($(this))
        })
    };
    return o(),
    {
        build: o,
        reset: a
    }
} ();
Array.prototype.filter || (Array.prototype.filter = function(e) {
    "use strict";
    if (void 0 === this || null === this) throw new TypeError;
    var t = Object(this),
    i = t.length >>> 0;
    if ("function" != typeof e) throw new TypeError;
    for (var n = [], s = arguments.length >= 2 ? arguments[1] : void 0, a = 0; a < i; a++) if (a in t) {
        var o = t[a];
        e.call(s, o, a, t) && n.push(o)
    }
    return n
});
var EventBus = new EventManger,
myCookie = {};
myCookie.getCookie = function(e) {
    var t, i = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
    return (t = document.cookie.match(i)) ? unescape(t[2]) : null
},
myCookie.setCookie = function(e, t, i) {
    var n = getsec(i),
    s = new Date;
    s.setTime(s.getTime() + 1 * n),
    document.cookie = e + "=" + escape(t) + ";expires=" + s.toGMTString()
},
myCookie.delCookie = function(e) {
    var t = new Date;
    t.setTime(t.getTime() - 1);
    var i = myCookie.getCookie(e);
    null != i && (document.cookie = e + "=" + i + ";expires=" + t.toGMTString())
},
window.myCookie = myCookie,
$(function() {
    function e() {
        var e = arguments;
        d <= c - 1 && (l.eq(d).stop(!0).animate({
            width: "300px"
        },
        500).siblings().stop(!0).animate({
            width: "98px"
        },
        500), ++d == c && (d = 0)),
        r = setTimeout(e.callee, 5e3)
    }
    function t() {
        var e = (u.offset().top, $(window).scrollTop(), $("body").outerHeight(), f.height(), $(window).height() - ($("#footer").offset().top - $(document).scrollTop()));
        e > 0 ? p.css("bottom", e) : p.css("bottom", 0)
    }
    function i(e) {
        e.find("img").each(function(e, t) {
            "" == $(this).attr("src") && $(this).attr("src", $(this).attr("data-src"))
        })
    }
    var n = {
        init: function(e) {
            this.tabName = e,
            this.siderTab = {
                interest: {
                    title: "感兴趣的职位",
                    url: "/geek/tag/interest/",
                    index: 1
                },
                contact: {
                    title: "沟通过的职位",
                    url: "/geek/tag/contact/",
                    index: 2
                },
                deliver: {
                    title: "投递过的职位",
                    url: "/geek/tag/deliver/",
                    index: 3
                },
                interview: {
                    title: "面试日程",
                    url: "/geek/tag/interview/",
                    index: 4
                }
            },
            this.curTab = this.siderTab[this.tabName],
            this.interviewData = {},
            this.showSlideList()
        },
        showSlideList: function() {
            var e = this,
            t = n.loadFun();
            $("#siderbar .sider-detail").remove();
            var i = '<div class="sider-detail">            <p class="sider-title">' + this.curTab.title + '<a href="javascript:;">查看全部</a></p>            ' + t + "            </div>";
            $("#siderbar").append(i),
            this.tabTemplate(function(t) {
                var i = "";
                i = '<p class="sider-title">' + e.curTab.title + '<a href="javascript:;">查看全部</a></p>                ' + t + " ",
                $("#siderbar .sider-detail").html(i)
            })
        },
        tabCheckall: function() {
            if (!_PAGE.uid) return void Detail.showSign(1011);
            location.href = this.curTab.url
        },
        getTagData: function() {
            var e = $.Deferred();
            return $.get("/geek/tag/data.json?tag=" + this.curTab.index).success(function(t) {
                1 == t.rescode || 1e4 == t.rescode ? e.resolve(t) : $.toast({
                    content: t.resmsg,
                    type: "error"
                })
            }),
            e
        },
        tabTemplate: function(e) {
            var t = this,
            i = "";
            this.getTagData().then(function(s) {
                if (1 == s.rescode) {
                    var a = s.data;
                    if (0 == a.length) return i = t.errorTips("notHave"),
                    void e(i);
                    i = 4 == t.curTab.index ? n.getInterviewTemplate(a) : n.getOtherTemplate(a)
                } else 1e4 == s.rescode && (i = t.errorTips("notLogin"));
                e(i)
            })
        },
        getOtherTemplate: function(e) {
            var t, i = this,
            n = "",
            s = "",
            a = "",
            o = "";
            return $.each(e,
            function(e, r) {
                a = "",
                o = "/job_detail/" + r.jobIdStr + ".html",
                t = r.jobSalary,
                2 == r.jobValidStatus && (a = "opacity", o = "javascript:;", t = "停止招聘"),
                1 == i.curTab.index && (n = '<button class="btn btn-sider-interest"  data-jobid="' + r.jobIdStr + '">不感兴趣</button>'),
                s += '                         <li class="' + a + '">                            <a href="' + o + '">                                <h4><span class="sider-degree">' + t + '</span><span class="sider-position-title">' + r.jobName + '</span></h4>                                <p class="company-info">                                    <span>' + r.brandName + '</span>                                    <span class="vline"></span>                                    <span>' + r.brandStageName + '</span>                                </p>                                <p>                                    <img class="user-avatar" src="' + r.bossAvatar + '" alt=""/>                                    <span class="user-text">' + r.bossName + '<span class="vline"></span>' + r.bossTitle + "</span>                                    " + n + "                                </p>                            </a>                        </li>"
            }),
            '                    <ul class="sider-template">                        ' + s + '                      </ul>                    <a class="siderbar-more" href="' + this.curTab.url + '">查看更多</a>'
        },
        getInterviewTemplate: function(e) {
            var t = "",
            i = "";
            btnstr = "";
            var s = n.getInterviewData(e);
            this.interviewData = s;
            for (var a in s) {
                var o = new Date(s[a][0].appointmentTime),
                r = o.getDate(),
                l = +o.getMonth() + 1;
                i = "",
                $.each(s[a],
                function(e, t) {
                    btnstr = "",
                    0 == t.statusCode && (btnstr = '                        <span class="btns-sider-interview">                            <a href="javascript:;" class="btn btn-cancel">拒绝</a>                            <a href="javascript:;" class="btn btn-submit">接受</a>                        </span>'),
                    i += '                    <li data-interviewId="' + t.interviewIdStr + '">                        <div class="interview-container">                            <h4 class="sub-title"><span class="interview-status">' + t.statusDesc + '</span><span class="company-name">' + t.brandName + '</span></h4>                            <p class="interview-info">                                时间：<span>' + t.appointmentTime.split(" ")[1] + "</span><br>                                职位：<span>" + t.jobName + "</span><br>                                薪资：<span>" + t.jobSalary + '</span><br>                            </p>                            <p class="interview-user-info">                                <img src="' + t.bossAvatar + '"  alt=""/>                                <span class="user-text">' + t.bossName + '<span class="vline"></span>' + t.bossTitle + "</span>                                " + btnstr + "                            </p>                        </div>                     </li>"
                }),
                t += '                <div class="oneday-wrap ' + a + '" data-value = "' + a + '">                <p class="interview-time"> ' + s[a][0].appointmentWeekDesc + " <span>" + l + "月" + r + '日</span></p>                <ul class="interview-list">                ' + i + "                </ul>                </div>"
            }
            return t += '<a class="siderbar-more" href="/geek/tag/interview/">查看更多</a>'
        },
        getInterviewData: function(e) {
            var t = {};
            return $.each(e,
            function(e, i) {
                var n = new Date(i.appointmentTime.split(" ")[0]).getTime();
                t[n] || (t[n] = []),
                t[n].push(i)
            }),
            t
        },
        errorTips: function(e) {
            return "notHave" == e ? '                <div class="sider-error-tip">                    <i class="not-have"></i>                    <p>暂时没有' + this.curTab.title + '</p>                    <a href="/job_detail" class="btn btn-sider-more">查看更多职位</a>                </div>': '                <div class="sider-error-tip">                    <i class="not-login"></i>                    <p>登录后查看' + this.curTab.title + '</p>                    <a href="javascript:;" class="btn btn-login">去登录</a>                </div>'
        },
        loadFun: function() {
            return '            <div class="sider-load">                <i></i>                <p>加载中，请稍等</p>            </div>'
        },
        interviewDefer: function(e, t) {
            var i = $.Deferred();
            return $.get("/geek/new/interview/operate.json", {
                interviewId: e,
                status: t
            },
            function(e) {
                1 == e.rescode ? i.resolve(e) : $.toast({
                    content: e.resmsg,
                    type: "error"
                })
            }),
            i
        },
        showInviteTip: function(e) {
            $.dialog({
                content: '<div class="text">· 面试前一天18点前，双方都可以申请取消。<br>· 如不取消，请按时出席面试，不要爽约。<br>· 对方爽约，约定时间30分钟可以投诉。<br>· 爽约一方，平台回加【不良记录】并公示。<br>· 为了方便联系，邀请面试成功后，双方自动交换手机联系方式。<br>· 对方将自动获取你的简历附件。</div>',
                title: "约面试诚信守则",
                closeText: !1,
                cancelText: "我再想想",
                confirmText: "保证不爽约",
                wrapClass: "interview-pop",
                onOpen: function(e) {},
                onConfirm: function(t) {
                    e(),
                    t.remove()
                }
            })
        },
        eventHander: function() {
            var e = this;
            $("#siderbar .siderbar-top li a").on("click",
            function(e) {
                e.preventDefault()
            }),
            $("#siderbar .siderbar-top li").on("click",
            function(e) {
                e.preventDefault();
                var t = $(this),
                i = t.attr("data-value");
                t.addClass("active").siblings().removeClass("active"),
                n.init(i),
                $("#siderbar .sider-detail").width("310px")
            }),
            $("#siderbar").on("click", ".btn-login",
            function() {
                Detail.showSign(1011)
            }),
            $("body").on("click",
            function(e) {
                var t = e.target;
                0 == $(t).closest("#siderbar ").length && ($("#siderbar .sider-detail").width("0px"), $("#siderbar .siderbar-top li").removeClass("active"))
            }),
            $("#siderbar").on("click", ".sider-template li",
            function(e) {
                var t = e.target;
                if ($(t).hasClass("btn-sider-interest")) {
                    e.preventDefault();
                    var i = $(this);
                    $.post("/geek/tag/jobtagupdate.json", {
                        jobId: $(t).attr("data-jobid"),
                        tag: "4",
                        flag: "0"
                    },
                    function() {
                        i.slideUp(300,
                        function() {
                            i.remove()
                        })
                    })
                }
            }),
            $("#siderbar").on("click", ".btns-sider-interview ",
            function(t) {
                var i = $(this),
                s = i.closest("li").index(),
                a = i.closest(".oneday-wrap").attr("data-value"),
                o = t.target;
                return $(o).hasClass("btn-submit") ? n.showInviteTip(function() {
                    n.interviewDefer(i.closest("li").attr("data-interviewId"), 1).then(function() {
                        i.closest("li").find(".interview-status").html("即将面试").end().find(".btns-sider-interview").remove()
                    })
                }) : n.interviewDefer(i.closest("li").attr("data-interviewId"), 2).then(function() {
                    e.interviewData[a].splice(s, 1),
                    i.closest("li").find(".interview-status").html("已拒绝").end().slideUp(300,
                    function() {
                        $(this).remove(),
                        0 == e.interviewData[a].length && $("." + a).remove()
                    })
                }),
                !1
            }),
            $("#siderbar").on("click", ".sider-title a",
            function() {
                n.tabCheckall()
            })
        }
    };
    $(window).scroll(function() {
        var e = $(window).scrollTop(),
        t = 50 - e > 0 ? 50 - e: 0;
        $("#siderbar").css("top", t + "px")
    }),
    n.eventHander();
    var s = new Date("2018-10-22 00:00:00".replace(/-/g, "/")),
    a = new Date("2018-11-05 23:59:59".replace(/-/g, "/")),
    o = new Date;
    if (o >= s && o <= a && !myCookie.getCookie("bannerClose_zrzs") && appendTopBanner(), $(".active-close").on("click",
    function() {
        $(".top-active-box").hide(),
        $(".home-body #siderbar .siderbar-top").css({
            "padding-top": parseInt($("#siderbar .siderbar-top").css("padding-top")) - 120 + "px"
        }),
        document.cookie = "bannerClose_zrzs=false",
        myCookie.setCookie("bannerClose_zrzs", "true", "d30")
    }), myCookie.getCookie("linkSignResumeNew") || $(".user-nav .link-sign-resume .new").show(), $(".user-nav .link-sign-resume").on("click",
    function() {
        myCookie.setCookie("linkSignResumeNew", "true", "d180")
    }), $.fn.hoverDelay = function(e) {
        var t, i, n = {
            hoverDuring: 200,
            outDuring: 200,
            hoverEvent: function() {
                $.noop()
            },
            outEvent: function() {
                $.noop()
            }
        },
        s = $.extend(n, e || {});
        return $(this).each(function() {
            $(this).hover(function() {
                clearTimeout(i),
                t = setTimeout(s.hoverEvent, s.hoverDuring)
            },
            function() {
                clearTimeout(t),
                i = setTimeout(s.outEvent, s.outDuring)
            })
        })
    },
    $(".city-page-btn.next").on("click",
    function() {
        $(".slider-city-li").animate({
            left: "-504px"
        }),
        $(".city-page-btn.next").hide(),
        $(".city-page-btn.prev").show()
    }), $(".city-page-btn.prev").on("click",
    function() {
        $(".slider-city-li").animate({
            left: "0px"
        }),
        $(".city-page-btn.next").show(),
        $(".city-page-btn.prev").hide()
    }), $(".home-box .slider-main").length && ($(".home-box .slider-main").hwSlider({
        autoPlay: !0,
        arrShow: !0,
        dotShow: !0,
        navShow: !0,
        touch: !0,
        height: 240,
        interval: 5e3,
        effect: "fade"
    }), $(".slider-box .pic-all").length)) {
        var r, l = $(".slider-box .pic-all a"),
        c = l.length,
        d = 0;
        l.hover(function() {
            clearTimeout(r),
            300 != $(this).width() && $(this).stop(!0).animate({
                width: "300px"
            },
            500).siblings().stop(!0).animate({
                width: "98px"
            },
            500)
        },
        function() {
            d = $(this).index(),
            e()
        }),
        e()
    }
    if ($(".semwrap .slider-main").length) {
        if ($(".semwrap .slider-main").hasClass("disabled")) return;
        $(".slider-main").hwSlider({
            autoPlay: !0,
            arrShow: !0,
            dotShow: !1,
            navShow: !0,
            touch: !0,
            interval: 5e3,
            width: 582,
            speed: 1e3,
            height: 426
        })
    }
    if ($(".manager-list .manager-inner").length && $(".manager-list li").length > 1 && ($(".manager-list h3").css("background", "none"), $(".manager-list .manager-inner").hwSlider({
        autoPlay: !0,
        arrShow: !1,
        dotShow: !0,
        interval: 5e3,
        speed: 500,
        width: 330,
        height: 163,
        navShow: !0,
        touch: !0,
        effect: "fade",
        fadeOut: !1,
        afterSlider: function() {
            $(".manager-list .fold-text").removeAttr("style"),
            $(".manager-list .more-view").removeAttr("style").html('...展开<i class="fz fz-slidedown"></i></a>').show()
        }
    })), $(".picture-list .slider-main").length && $(".picture-list li").length > 1 && $(".picture-list .slider-main").hwSlider({
        autoPlay: !0,
        arrShow: !0,
        dotShow: !0,
        interval: 5e3,
        speed: 500,
        width: 330,
        height: 165,
        navShow: !0,
        touch: !0
    }), $(".job-menu dl").each(function(e) {
        var t = $(this);
        t.hoverDelay({
            hoverDuring: 100,
            outDuring: 100,
            hoverEvent: function() {
                switch (t.addClass("cur"), e) {
                case 0:
                    break;
                case 1:
                    t.children(".menu-sub").css({
                        top:
                        "-42px"
                    })
                }
                var i = 0,
                n = 0,
                s = 0;
                if ($(".top-sign-box").length && (n = 130), $(".top-active-box").length && (s = 120), i = n + s, 0 != e && 1 != e || 10 == e && $(".ie7").length) {
                    var a = t.get(0).getBoundingClientRect().top - i,
                    o = t.find(".menu-sub");
                    o.height() < a ? o.css({
                        "margin-top": 53 - o.height() + "px"
                    }) : a < 70 && a > 0 ? o.css({
                        "margin-top": "-1px"
                    }) : a < 0 ? o.css({
                        "margin-top": a + "px"
                    }) : o.css({
                        "margin-top": 47 - a + "px"
                    })
                }
            },
            outEvent: function() {
                t.removeClass("cur").children(".menu-sub")
            }
        })
    }), $(".show-all").hover(function() {
        $(".show-all").hide(),
        $(".all-box").show()
    },
    function() {}), $(".job-menu").hover(function() {},
    function() {
        $(".show-all").show(),
        $(".all-box").hide()
    }), $(".menu-all .sub-tab li").eq(0).css({
        "border-top-color": "#fff",
        "padding-top": "15px",
        "padding-bottom": "14px"
    }), $(".menu-all .sub-tab li").eq(1).css({
        "margin-top": "-1px"
    }), $(".menu-all .sub-tab li").on("click",
    function() {
        var e = $(this).index(),
        t = $(this).parent().find("li"),
        i = $(this).closest(".menu-sub").find(".sub-content ul");
        t.removeClass("cur"),
        $(this).addClass("cur"),
        i.removeClass("show"),
        i.eq(e).addClass("show"),
        0 == e && $(this).css("border-top-color", "#fff"),
        e == t.length - 1 ? $(this).css({
            "border-bottom-color": "#fff",
            "margin-top": "-1px",
            "padding-top": "1px"
        }) : t.eq(t.length - 1).css({
            "border-bottom-color": "#FDFDFE",
            "margin-top": "0",
            "padding-top": "0"
        })
    }), $(".link-recruit").on("click",
    function() {
        $(this).parent().find(".recruit-tip").fadeIn()
    }), $(".nav-figure").on("mouseover",
    function() {
        $(this).addClass("selected").find(".dropdown").show(),
        $(this).find(".recruit-tip").hide()
    }).on("mouseout",
    function() {
        $(this).removeClass("selected").find(".dropdown").hide(),
        $(this).find(".recruit-tip").hide()
    }), $(".condition-insdustry .btn-all").on("click",
    function() {
        $(this).parent().toggleClass("show-all-insdustry")
    }), $(".condition-city .link-district").on("click",
    function() {
        $(".condition-district").addClass("show-condition-district"),
        $(".condition-area").removeClass("show-condition-area"),
        $(".condition-city .selected").removeClass("selected"),
        $(this).addClass("selected")
    }), $(".condition-city .link-area").on("click",
    function() {
        $(".condition-area").addClass("show-condition-area"),
        $(".condition-district").removeClass("show-condition-district"),
        $(".condition-city .selected").removeClass("selected"),
        $(this).addClass("selected")
    }), $(".siderbar-back-top").on("click",
    function() {
        $("html,body").animate({
            scrollTop: "0px"
        },
        400)
    }), ($(".home-box").length || $(".condition-box").length) && ($(".job-list").on("click", "li",
    function(e) {
        var t = $(this),
        i = t.find(".info-primary a"),
        n = i.attr("href"),
        s = $(".job-tab"),
        a = s.attr("data-keyword"),
        o = s.attr("data-l3code"),
        r = s.attr("data-filter"),
        l = s.attr("data-rescount"),
        c = s.attr("data-page"),
        d = i.attr("data-index"),
        u = i.attr("data-lid"),
        p = i.attr("data-itemid"),
        h = s.attr("data-lid"),
        f = i.attr("data-jobid");
        if ("A" != e.target.nodeName && !$(e.target).closest("a").length && 0 === $(e.target).parents(".detail-top-right").length) {
            t.wrap('<form action="' + n + '" method="get" target="_blank"></form>'),
            t.append('<input type="hidden" name="ka" value="' + i.attr("ka") + '_blank" />'),
            t.append('<input type="hidden" name="lid" value="' + u + '" />'),
            t.closest("form").submit();
            try {
                _T.sendEvent(i.attr("ka") + "_job")
            } catch(e) {}
            t.find('input[name="ka"]').remove(),
            t.find('input[name="lid"]').remove(),
            t.unwrap("form")
        }
        var m = {
            keyword: a,
            l3code: o,
            filter: r,
            rescount: l,
            page: c,
            index: d,
            lid: u,
            itemid: p,
            source: h,
            jobid: f
        };
        "A" == e.target.nodeName && 0 != $(e.target).parents(".company-text").length && (m = {
            keyword: a,
            l3code: o,
            filter: r,
            rescount: l,
            page: c,
            index: d,
            lid: u,
            itemid: 0,
            source: h,
            jobid: f,
            brand_id: i.attr("brand-id")
        }),
        $.ajax({
            type: "POST",
            url: "/actionLog/search.json",
            data: m,
            dataType: "json",
            success: function(e) {}
        })
    }), $(".job-list").on("click", ".company-item",
    function(e) {
        var t = $(this),
        i = t.parents(".job-list").find("li").first().find(".info-primary a"),
        n = (i.attr("href"), $(".job-tab")),
        s = n.attr("data-keyword"),
        a = n.attr("data-l3code"),
        o = n.attr("data-filter"),
        r = n.attr("data-rescount"),
        l = n.attr("data-page"),
        c = i.attr("data-index"),
        d = i.attr("data-lid"),
        u = (i.attr("data-itemid"), n.attr("data-lid"));
        i.attr("data-jobid");
        $.ajax({
            type: "POST",
            url: "/actionLog/search.json",
            data: {
                keyword: s,
                l3code: a,
                filter: o,
                rescount: r,
                page: l,
                index: c,
                lid: d,
                itemid: 0,
                source: u
            },
            dataType: "json",
            success: function(e) {}
        })
    }), $(".job-list .company-item").find('a[href="/gongsi/c76ab226aa5051ec03By3dQ~.html"]').attr("href", "https://www.zhipin.com/activity/custom/booking/index.html"), $(".job-list .info-primary h3.name").each(function(e) {
        var t = $(this),
        i = t.find("a").first().attr("data-jid"),
        n = t.find("a").first().attr("data-lid"),
        s = ""; (i || n) && t.hoverDelay({
            hoverDuring: 400,
            hoverEvent: function() {
                var e = document.documentElement.clientHeight - t.get(0).getBoundingClientRect().top;
                if ("" === t.find(".info-detail").text()) $.ajax({
                    type: "GET",
                    url: "/view/job/card.json?jid=" + i + "&lid=" + n,
                    data: {},
                    dataType: "json",
                    success: function(n) {
                        var a = n.html;
                        t.find(".info-detail").html(a);
                        var o = t.find(".info-detail").height();
                        e < o + 18 && t.find(".info-detail").css("top", -(o - e + 18) + "px"),
                        t.find("a").addClass("cur"),
                        s = setTimeout(function() {
                            try {
                                _T.sendEvent("show_popjob_" + i)
                            } catch(e) {}
                        },
                        1e3)
                    }
                });
                else {
                    var a = t.find(".info-detail").height();
                    e < a + 18 && t.find(".info-detail").css("top", -(a - e + 18) + "px"),
                    t.find("a").addClass("cur"),
                    s = setTimeout(function() {
                        try {
                            _T.sendEvent("show_popjob_" + i)
                        } catch(e) {}
                    },
                    1e3)
                }
            },
            outEvent: function() {
                clearTimeout(s),
                t.find("a").removeClass("cur"),
                t.find(".info-detail").css("top", 0)
            }
        })
    })), $(".info-primary").on("click", ".link-like",
    function(e) {
        e.preventDefault(),
        Detail.setInterest($(this))
    }), $(".info-primary").on("click", ".btn-startchat",
    function(e) {
        e.preventDefault()
    }), $(".filter-select-box .dropdown-select").each(function(e) {
        var t = $(this);
        t.hover(function(e) {
            t.parent().addClass("cur")
        },
        function() {
            t.parent().removeClass("cur")
        })
    }), $(".now-city-pos .dropdown-wrap").each(function(e) {
        var t = $(this);
        t.hoverDelay({
            hoverDuring: 100,
            outDuring: 100,
            hoverEvent: function() {
                t.addClass("cur")
            },
            outEvent: function() {
                t.removeClass("cur")
            }
        })
    }), $(".footer-scan").length) {
        $("#siderbar").css({
            bottom: "304px",
            transition: "all 0.2s"
        });
        var u = $("#footer"),
        p = $(".footer-scan"),
        h = $(".home-box .job-list"),
        f = $(window);
        h.css("margin-bottom", "105px"),
        t(),
        $(window).scroll(function() {
            t()
        }),
        p.find(".footer-scan-close").click(function() {
            p.fadeOut(300,
            function() {
                h.css({
                    "margin-bottom": "15px",
                    transition: "all 0.2s"
                }),
                $("#siderbar").css({
                    bottom: "214px",
                    transition: "all 0.2s"
                })
            })
        })
    }
    $(window).width() < 1348 && $(".footer-scan .btns").css("margin-right", "84px"),
    $(window).resize(function() {
        $(window).width() < 1348 ? $(".footer-scan .btns").css("margin-right", "84px") : $(".footer-scan .btns").css("margin-right", "0")
    }),
    setTimeout(function() {
        if (window._T) {
            var e = window.screen.width,
            t = window.screen.height,
            i = window.innerWidth,
            n = window.innerHeight;
            try {
                _T.sendTracking("screen_geek_" + e + "_" + t + "_avail_" + i + "_" + n)
            } catch(e) {}
        }
    },
    2e3),
    $("body").on("click", "#siderbar .siderbar-feedback",
    function() {
        Feedback.getContent()
    }),
    $("#footer").on("click", ".footer-feedback",
    function() {
        Feedback.getContent()
    }),
    $(".common-tab-box").on("click", "h3 span",
    function() {
        var e = $(this).index(),
        t = $(this).parents(".common-tab-box").first();
        $(this).parents("h3").first().find("span").removeClass("cur"),
        $(this).addClass("cur"),
        $(t).find("ul").removeClass("cur"),
        $(t).find("ul").eq(e).addClass("cur"),
        i($(t).find("ul").eq(e))
    }),
    i($(".common-tab-box ul.cur"))
}),
function() {
    "_PAGE" in window && _PAGE.ws && !isIE && seriesLoadScripts(["/v2/web/geek/chat/mqtt.js", staticPath + "/web/geek/js/socket.js"],
    function() {
        EventBus.subscribe("MESSAGE_STATISTIVS",
        function(e) {
            0 != e ? $(".nav-chat-num").show().text(e) : $(".nav-chat-num").hide().text("")
        })
    })
} (),
function() {
    var e = new Date,
    t = e.getFullYear() + "" + (e.getMonth() + 1) + e.getDate(),
    i = parseInt(t, 10);
    20181014 < i && i < 20181029 && $("input.ipt-search").length && $("input.ipt-search").attr("placeholder", "48°chen，优质雇主等你来")
} ();
var Search = {
    init: function() {
        Search.searchBox = $(".search-box"),
        Search.isLoading = !1,
        $(".bottom-banner .closeIcon").on("click",
        function() {
            $(this).parents(".bottom-banner").hide()
        }),
        Search.searchBox.find(".city-sel").on("click",
        function(e) {
            if ($(e.target).closest(".city-box").length) return void($(e.target).attr("data-val") && ($(this).find(".label-text b").attr("data-val", $(e.target).attr("data-val")).text($(e.target).text()), Search.searchBox.removeClass("show-city")));
            Search.searchBox.toggleClass("show-city")
        }),
        Search.searchBox.find(".industry-sel").on("click",
        function(e) {
            Search.searchBox.toggleClass("show-industry")
        }),
        Search.searchBox.find(".position-sel").on("click",
        function(e) {
            Search.searchBox.toggleClass("show-position")
        }),
        Search.searchBox.find(".dorpdown-province").on("mouseover", "li",
        function() {
            var e = $(this).index(),
            t = $(this).parent().find("li"),
            i = Search.searchBox.find(".dorpdown-city ul");
            t.removeClass("cur"),
            $(this).addClass("cur"),
            i.removeClass("show"),
            i.eq(e).addClass("show");
            var n = i.eq(e).find("li");
            n.length > 0 && i.eq(e).find("li.cur").length < 1 && n.eq(0).addClass("cur")
        }),
        Search.searchBox.find(".dorpdown-province").on("click", "li",
        function() {
            var e = $(this).index(),
            t = Search.searchBox.find(".dorpdown-city ul"),
            i = t.eq(e);
            i.find("li").length > 0 && i.find("li").eq(0).trigger("click")
        }),
        Search.searchBox.find(".dorpdown-city").on("click", "li",
        function() {
            var e = Search.searchBox.find(".city-sel").find(".label-text b"),
            t = Search.searchBox.find(".city-code"),
            i = Search.searchBox.find(".city-name");
            e.text($(this).text()),
            t.val($(this).attr("data-val")),
            i.val($(this).text()),
            Search.searchBox.find(".dorpdown-city ul .cur").removeClass("cur"),
            $(this).addClass("cur")
        }),
        Search.searchBox.length && (Search.loadIndustryData(Search.renderIndustry), Search.loadCityData(Search.renderCity)),
        Search.searchBox.find(".dropdown-menu").each(function() {
            function e(e) {
                a.length && (3 == a.attr("data-level") && a.html('<ul class="tree-1"></ul><ul class="tree-2"></ul><ul class="tree-3"></ul>'), 2 == a.attr("data-level") && a.html('<ul class="tree-1"></ul><ul class="tree-2"></ul>'), Search.getTreeData(a, e)),
                o.length && Resume.getTag(formEl, !0),
                t.on("mouseenter", "li",
                function() {
                    if ($(this).closest(".select-tree").length) {
                        var t = $(this).closest(".select-tree").attr("data-level");
                        if ($(this).parent().find("li").removeClass("selected"), $(this).addClass("selected"), 3 == t) {
                            if ($(this).closest(".tree-1").length) return $(this).closest(".select-tree").find(".tree-3").hide(),
                            Search.getTreeData(a, e, $(this).attr("data-id")),
                            !1;
                            if ($(this).closest(".tree-2").length) return $(this).closest(".select-tree").find(".tree-3").show(),
                            s.attr("level2", $(this).attr("data-id")),
                            Search.getTreeData(a, e, $(this).closest(".select-tree").find(".tree-1 .selected").attr("data-id"), $(this).attr("data-id")),
                            !1
                        }
                        if (2 == t) {
                            if ($(this).closest(".tree-1").length) return $(this).closest(".select-tree").find(".tree-3").hide(),
                            Search.getTreeData(a, e, $(this).attr("data-id")),
                            !1;
                            if ($(this).closest(".tree-2").length) return $(this).closest(".select-tree").find(".tree-3").show(),
                            s.attr("level2", $(this).attr("data-id")),
                            Search.getTreeData(a, e, $(this).closest(".select-tree").find(".tree-1 .selected").attr("data-id"), $(this).attr("data-id")),
                            !1
                        }
                    }
                }),
                t.on("click", "li",
                function() {
                    var e = $(this).closest(".select-tree").attr("data-level");
                    if (3 != e || $(this).closest(".tree-1").length || $(this).closest(".tree-2").length) {
                        if (3 != e || !$(this).closest(".tree-1").length) return ! 1;
                        0 == $(this).attr("data-id") && (n.text("职位类型"), s.val($(this).attr("")), Search.searchBox.removeClass("show-position"))
                    } else n.text($(this).text()),
                    s.val($(this).attr("data-val")),
                    Search.searchBox.removeClass("show-position")
                })
            }
            var t = $(this),
            i = Search.searchBox.find(".position-sel"),
            n = i.find(".label-text b"),
            s = Search.searchBox.find(".position-code"),
            a = t.find(".select-tree"),
            o = t.find(".tags-cells");
            Search.loadPositionData(e)
        }),
        Search.searchBox.find("form").on("submit",
        function(e) {
            var t = $(this),
            i = t.find(".ipt-search"),
            n = i.val().replace(/\</g, "&lt;").replace(/\>/g, "&gt;");
            if ("搜索职位、公司" == n && i.val(""), "" != n && window.localStorage) {
                var s = Storage.get("_Search_History");
                if (s) if ( - 1 === s.indexOf(n)) s.unshift(n),
                Storage.set("_Search_History", s);
                else {
                    var a = [];
                    $(s).each(function(e, t) {
                        e >= 3 || t != n && a.push(t)
                    }),
                    a.unshift(n),
                    Storage.set("_Search_History", a)
                } else Storage.set("_Search_History", [n])
            }
        }),
        $(document).on("click",
        function(e) {
            $(e.target).closest(".city-sel").length || $(e.target).closest(".dorpdown-province").length || Search.searchBox.removeClass("show-city"),
            $(e.target).closest(".position-sel").length || $(e.target).closest(".position-box").length || Search.searchBox.removeClass("show-position"),
            $(e.target).closest(".industry-sel").length || Search.searchBox.removeClass("show-industry"),
            $(e.target).closest(".suggest-result").length || $(e.target).closest(".ipt-search").length || Search.searchBox.find(".suggest-result").hide()
        }),
        Search.searchBox.find(".industry-box").on("click", " li a",
        function(e) {
            return "不限" == $(this).text() ? Search.searchBox.find(".industry-sel").find(".label-text b").text("行业不限") : Search.searchBox.find(".industry-sel").find(".label-text b").text($(this).text()),
            Search.searchBox.find(".industry-code").val($(this).parent().attr("data-val")),
            Search.searchBox.find(".industry-box ul .cur").removeClass("cur"),
            $(this).parent().addClass("cur"),
            e.preventDefault(),
            Search.searchBox.toggleClass("show-industry"),
            !1
        }),
        Search.searchBox.find(".ipt-search").on("paste keyup",
        function(e) {
            if (13 != e.which && 27 != e.which && 38 != e.which && 40 != e.which) {
                Search.suggestTimer && clearTimeout(Search.suggestTimer);
                var t = $(this);
                Search.suggestTimer = setTimeout(function() {
                    Search.suggest(t)
                },
                200)
            }
        }),
        $(".geek-inside").length || Search.fillHistory(),
        Search.searchBox.find(".ipt-search").on("focus",
        function(e) {
            $(".geek-inside").length || (Search.fillHistory(), $(this).closest(".search-box").find(".suggest-result").show())
        }),
        Search.searchBox.find(".ipt-search").focus(function() {
            $(this).closest("form").addClass("search-form-shadow"),
            $(this).closest(".ipt-wrap").addClass("ipt-wrap-hover"),
            $(this).closest("form").find(".city-sel").addClass("city-sel-hover"),
            $(this).closest("form").find(".industry-sel").addClass("industry-sel-hover"),
            $(this).closest("form").find(".position-sel").addClass("position-sel-hover")
        }),
        Search.searchBox.find(".ipt-search").blur(function() {
            $(this).closest("form").removeClass("search-form-shadow"),
            $(this).closest(".ipt-wrap").removeClass("ipt-wrap-hover"),
            $(this).closest("form").find(".city-sel").removeClass("city-sel-hover"),
            $(this).closest("form").find(".industry-sel").removeClass("industry-sel-hover"),
            $(this).closest("form").find(".position-sel").removeClass("position-sel-hover")
        }),
        Search.searchBox.find(".suggest-result").on("click", "li",
        function() {
            Search.addInput($(this))
        });
        var e = -1;
        if (Search.searchBox.find(".ipt-search").keydown(function(t) {
            var i = Search.searchBox.find(".suggest-result li");
            switch (t.which) {
            case 38:
                i.removeClass("selected"),
                -1 == e ? (e = -1, e = i.length - 1) : e--,
                i.eq(e).addClass("selected"),
                Search.addInput(i.eq(e), !0),
                Search.scrollVisiable(i.eq(e), "up");
                break;
            case 40:
                t.preventDefault(),
                i.removeClass("selected"),
                e > i.length - 2 && (e = -1),
                e++,
                i.eq(e).addClass("selected"),
                Search.addInput(i.eq(e), !0),
                Search.scrollVisiable(i.eq(e), "down");
                break;
            case 13:
                e = -1;
                break;
            case 27:
                e = -1,
                Search.searchBox.find(".ipt-search").val("")
            }
        }), Search.searchBox.length && 0 == $(".company-detail-grab").length && $(".job-list .company-card a").on("click",
        function() {
            var e = $(this),
            t = e.closest(".job-list");
            $.ajax({
                type: "POST",
                url: "/actionLog/search.json",
                dataType: "JSON",
                data: {
                    keyword: t.attr("data-keyword"),
                    l3code: t.attr("data-l3code"),
                    filter: t.attr("data-filter"),
                    rescount: t.attr("data-rescount"),
                    page: t.attr("data-page"),
                    index: e.attr("data-index"),
                    lid: e.attr("data-lid"),
                    itemid: e.attr("data-itemid"),
                    jobid: e.attr("data-jobid"),
                    source: t.attr("data-source")
                }
            })
        }), $(".company-card").on("click",
        function(e) {
            $(e.target).hasClass("btn") || ($(e.target).closest(".company-card").find(".btn").eq(0).click(), window.location.href = $(this).find(".btn").eq(0).attr("href"))
        }), $(".condition-box .btn-allcity").on("click",
        function() {
            Search.renderCityDialog()
        }), Search.loadSubscribeModule(), $(".company-search").length) {
            var t = $(".select-city-wrapper").html(),
            i = $(".filter-box .expect").offset().top,
            n = $(".top-filter-bar");
            $(".filter-condition a").on("click",
            function() {
                $(this).toggleClass("selected")
            }),
            $(".dropdown-wrap").on("mouseover",
            function() {
                $(this).addClass("dropdown-menu-open")
            }).on("mouseout",
            function() {
                $(this).removeClass("dropdown-menu-open")
            }).on("click",
            function() {
                $(this).toggleClass("dropdown-menu-open")
            }),
            $(".all-city").on("click",
            function() {
                $.dialog({
                    content: t,
                    title: "",
                    closeText: !0,
                    cancelText: "",
                    confirmText: "",
                    wrapClass: "company-city-dialog city-dialog",
                    onOpen: function(e) {
                        var t = e.find(".section-province li");
                        t.on("click",
                        function() {
                            t.removeClass("active"),
                            $(this).addClass("active"),
                            e.find(".section-city").removeClass("cur").eq($(this).index()).addClass("cur")
                        }),
                        t.first().click()
                    },
                    onConfirm: function(e) {}
                })
            }),
            $(window).scrollTop() > i && n.addClass("show"),
            $(window).on("scroll",
            function() {
                $(this).scrollTop() > i ? n.addClass("show") : n.removeClass("show")
            }),
            $(".expect-filter").on("click",
            function(e) {
                _PAGE.uid || (Detail.showSign(1011), e.preventDefault())
            })
        }
    },
    loadSubscribeModule: function() {
        if ($(".subscribe-wechat-wrapper").length) {
            var e = $(".subscribe-wechat-wrapper");
            if (window.localStorage) {
                var t = Storage.get("wechat_subscribe_job");
                if (t) { ((new Date).getTime() - t) / 36e5 < 24 || Search.showSubScribeModule(e)
                } else Search.showSubScribeModule(e)
            } else Search.showSubScribeModule(e),
            e.find(".close").attr("title", "");
            e.find(".close").on("click",
            function() {
                e.fadeOut("fast"),
                window.localStorage && Storage.set("wechat_subscribe_job", (new Date).getTime())
            })
        }
    },
    showSubScribeModule: function(e) {
        $.ajax({
            url: "/qrcode/job/subscribe.json",
            type: "GET",
            data: {
                sceneStr: e.find("input[name=sceneStr]").val(),
                filter: decodeURI(e.find("input[name=filter]").val())
            },
            dataType: "json",
            success: function(t) {
                if (1 == t.rescode) {
                    e = e || $(".subscribe-wechat-wrapper"),
                    e.find("img").attr("src", t.qrUrl),
                    e.fadeIn("fast");
                    try {
                        _T.sendEvent("subscription_pop")
                    } catch(e) {}
                }
            },
            error: function() {}
        })
    },
    fillHistory: function() {
        try {
            if (window.localStorage) {
                var e = Storage.get("_Search_History");
                $(".suggest-result ul").empty(),
                $(e).each(function(e, t) {
                    e >= 3 || $(".suggest-result ul").append("<li>" + t + "</li>")
                })
            }
        } catch(e) {}
    },
    loadIndustryData: function(e) {
        $.ajax({
            type: "GET",
            url: "/common/data/oldindustry.json",
            data: {},
            dataType: "json",
            success: function(t) {
                e(t.data)
            }
        })
    },
    renderIndustry: function(e) {
        var t = $(".industry-box").find("ul");
        t.empty(),
        t.append('<li data-val=""><a href="javascript:;">不限</a></li>'),
        $(e).each(function(e, i) {
            t.append('<li data-val="' + i.code + '" ka="sel-industry-' + (e + 1) + '"><a href="javascript:;">' + i.name + "</a></li>")
        })
    },
    loadCityData: function(e) {
        $.ajax({
            type: "GET",
            url: "/common/data/city.json",
            data: {},
            dataType: "json",
            success: function(t) {
                e(t.data),
                Search.cityData = t.data
            }
        })
    },
    renderCity: function(e) {
        if (!$(".dorpdown-province").parents(".geek-inside").length) {
            $(".dorpdown-province").empty(),
            $(".dorpdown-city").empty();
            var t = e.hotCityList,
            i = e.cityList;
            $(".dorpdown-province").append('<li class="">热门</li>');
            var n = $("<ul></ul>");
            $(t).each(function(e, t) {
                $(n).append('<li ka="hot-city-' + t.code + '" data-val="' + t.code + '" class="cur">' + t.name + "</li>")
            }),
            $(".dorpdown-city").append(n),
            $(i).each(function(e, t) {
                $(".dorpdown-province").append('<li ka="sel-province-' + (e + 1) + '" class="">' + t.name + "</li>");
                var i = $("<ul></ul>"),
                n = t.subLevelModelList;
                $(n).each(function(e, t) {
                    $(i).append('<li ka="hot-city-' + t.code + '" data-val="' + t.code + '" class="cur">' + t.name + "</li>")
                }),
                $(".dorpdown-city").append(i)
            })
        }
    },
    loadPositionData: function(e) {
        $.ajax({
            type: "GET",
            url: "/common/data/position.json",
            data: {},
            dataType: "json",
            success: function(t) {
                e(t.data)
            }
        })
    },
    getTreeData: function(e, t, i, n) {
        var s, a, o, r = "",
        l = "",
        c = "";
        for (s = 0; s < t.length; s++) {
            var d = t[s].subLevelModelList;
            if (r += '<li data-id="' + t[s].code + '">' + t[s].name + "</li>", d && i && t[s].code == i) for (a = 0; a < d.length; a++) {
                var u = d[a].subLevelModelList;
                if (l += '<li data-id="' + d[a].code + '">' + d[a].name + "</li>", u && n && d[a].code == n) for (o = 0; o < u.length; o++) c += '<li data-val="' + u[o].code + '">' + u[o].name + "</li>"
            }
        }
        i || (e.find(".tree-1").html('<li data-id="0" class="">不限</li>' + r), e.find(".tree-2").html('<li class="blank">选择职类</li>')),
        n ? e.find(".tree-3").html(c) : i && e.find(".tree-2").html(l)
    },
    suggest: function(e) {
        var e = e,
        t = e.val().replace(/(^\s*)|(\s*$)/g, ""),
        i = e.closest(".search-box").find(".suggest-result"),
        n = i.find("ul");
        if ("" == t) return void i.hide();
        $.ajax({
            type: "GET",
            url: "/autocomplete/query.json",
            dataType: "JSON",
            cache: !1,
            data: {
                query: t
            },
            success: function(e) {
                var t, s, e = e,
                a = "";
                if (e.data && e.data.length) {
                    for (t = e.data, s = 0; s < t.length; s++) a += "<li>" + t[s].hlname + "</li>";
                    n.html(a),
                    i.show()
                } else n.html('<li class="blank-data">暂无匹配结果</li>');
                Search.isLoading = !1
            },
            error: function(e) {
                Search.isLoading = !1
            }
        })
    },
    hightLight: function(e, t) {
        var t = t.replace(/(^\s*)|(\s*$)/g, "");
        if ("" == t) return e;
        var i = t;
        return e.replace(t.toLowerCase(), '<em class="text-blue">' + i + "</em>").replace(t.toUpperCase(), '<em class="text-blue">' + i + "</em>")
    },
    addInput: function(e, t) {
        var e = e,
        i = e.text().replace('<u class="h">', "").replace("</u>", "");
        Search.searchBox.find(".ipt-search").val(i),
        t || (Search.searchBox.find(".suggest-result").hide(), Search.searchBox.find("form").submit())
    },
    scrollVisiable: function(e, t) {
        var e = e,
        i = Search.searchBox.find(".suggest-result ul");
        if (!e) return ! 1;
        var n = i.find("li").length,
        s = $(e).index(),
        a = s > 4 ? s - 4 : 0,
        o = "down" == t && (a < n - 4 || 0 === s),
        r = "up" == t && (s < n - 5 || s == n - 1);
        "up" == t && (a = s),
        (r || o) && i.scrollTop(a * $(e).height())
    },
    renderCityDialog: function() {
        var e = [];
        Search.cityData.cityList.forEach(function(t, i) { - 1 === ["北京", "上海", "天津", "重庆"].indexOf(t.name) && e.push(t)
        }),
        e.unshift({
            name: "热门城市",
            subLevelModelList: Search.cityData.hotCityList
        });
        var t = e.map(function(e, t) {
            return 0 == t ? "<li>" + e.name + "</li>": '<li ka="sel-province-' + t + '">' + e.name + "</li>"
        }).join(""),
        i = '<h4>请选择城市</h4><div class="city-wrapper"><ul class="section-province">' + t + '</ul><ul class="section-city"></ul>';
        $.dialog({
            content: i,
            title: "",
            closeText: !0,
            cancelText: "",
            confirmText: "",
            wrapClass: "city-dialog",
            onOpen: function(t) {
                var i = t.find(".section-province li");
                i.on("click",
                function() {
                    i.removeClass("active"),
                    $(this).addClass("active");
                    var n = e[$(this).index()].subLevelModelList.map(function(e, t) {
                        return '<li><a href="/c' + e.code + '/" ka="sel-city-' + e.code + '">' + e.name + "</a></li>"
                    }).join("");
                    t.find(".section-city").html(n)
                }),
                i.first().click()
            },
            onConfirm: function(e) {}
        })
    }
};
$(function() {
    Search.init()
});
var Filter = {
    init: function() {
        Filter.filterBox = $(".filter-select-box"),
        Filter.filterBox.on("click", "ul li",
        function() {
            var e = $(this).find(".sub-list");
            e.hasClass("show-sub") ? e.removeClass("show-sub") : (Filter.filterBox.find(".show-sub").removeClass("show-sub"), e.addClass("show-sub"))
        }),
        $(document).on("click",
        function(e) {
            $(e.target).closest(".filter-select-box").length || Filter.filterBox.find(".show-sub").removeClass("show-sub")
        }),
        $(window).on("scroll",
        function() {
            $(this).scrollTop() > 300 ? $("#filter-box").length && ($("#filter-box").addClass("show-top"), $(".job-box").addClass("show-top")) : ($("#filter-box").removeClass("show-top"), $(".job-box").removeClass("show-top"))
        })
    }
};
$(function() {
    Filter.init()
});
var PositionHistory = {
    init: function() {
        if ($(".job-box .sider-list").length && window.localStorage) {
            var e = Storage.get("_Job_History");
            e && PositionHistory.renderList(e)
        }
    },
    renderList: function(e) {
        if ($(".job-box").find(".nomargin").html(this.showPersonalityText()), 0 !== e.length) {
            var t = $(".job-box .sider-list").first();
            $(e).each(function(e, i) {
                e > 4 || $(t).append('<li>\n    <a href="/job_detail/' + i.job_id + '.html" ka="viewed_list_' + (e + 1) + '">\n        <h4>' + i.job_name + ' <span class="salary">' + i.job_salary + "</span></h4>\n        <p>" + i.company + "</p>\n    </a>\n</li>")
            }),
            $(t).show()
        }
    },
    showPersonalityText: function() {
        return testHtml = '<ul class="resume-refresh"> <li class="refresh-test"><h4>五维职业性格测评</h4><i class="refresh-test-img"></i><p>专业分析职场优势</p><a class="btn refresh-btn" target="_blank" href="/activity/personality/index.html?ka=rcmd-list-personality">立即测试</a></li></ul>',
        testHtml
    }
};
$(function() {
    PositionHistory.init()
});
var Detail = {
    init: function(e) {
        function t() {
            $(this).scrollTop() >= $(".job-box").offset().top - 80 ? l || (l = !0, r.slideDown(300,
            function() {
                l = !1
            })) : r.hide()
        }
        function i(e, t, i) {
            var n = e.find(".info-detail"),
            s = document.documentElement.clientHeight - t.get(0).getBoundingClientRect().top,
            a = n.height();
            s < a + 18 && n.css("top", -(a - s + 18) + "px"),
            e.addClass("cur"),
            c = setTimeout(function() {
                try {
                    _T.sendEvent("show_popjob_" + i)
                } catch(e) {}
            },
            1e3)
        }
        Detail.firstIn = !0,
        $(".links").css("height", "70px"),
        $(".links label").each(function() {
            var e = $(this).closest(".links"),
            t = !1,
            i = e.hasClass("links-friends");
            $(this).click(function() {
                t ? (i ? e.css("height", "30px") : e.css("height", "70px"), t = !1, $(this).html('<span>展开</span><i class="fz fz-slidedown"></i>')) : (e.css("height", "auto"), t = !0, $(this).html('<span>收起</span><i class="fz fz-slideup"></i>'))
            })
        }),
        $(".links-friends").css("height", "27px");
        var n = $(".links-friends label"),
        s = 0,
        a = $(".links-friends dd").width();
        if ($(".links-friends a").each(function() {
            s += $(this).width() + 26
        }), s > a ? n.show() : n.hide(), $(".business-detail").css("height", "46px"), $(".business-detail label").on("click",
        function() {
            var e = $(this).closest(".business-detail");
            e.toggleClass("show-business-all"),
            e.hasClass("show-business-all") ? ($(this).find("span").text("收起"), $(this).find(".fz").removeClass("fz-slidedown").addClass("fz-slideup")) : ($(this).find("span").text("展开"), $(this).find(".fz").removeClass("fz-slideup").addClass("fz-slidedown"))
        }), $(".btn-signup").on("click",
        function() {
            $(this).parents(".bottom-banner").length ? Detail.showSign(5) : Detail.showSign(1)
        }), $(".fold-text .more-view").on("click",
        function() {
            $(this).find(".fz-slidedown").length ? ($(this).parent().css({
                "max-height": "none",
                overflow: "visible"
            }), $(this).css("bottom", "-20px"), $(this).html('收起<i class="fz fz-slideup"></i></a>').show()) : ($(this).parent().removeAttr("style"), $(this).removeAttr("style"), $(this).html('...展开<i class="fz fz-slidedown"></i></a>').show())
        }), $(".company-card").on("click",
        function(e) {
            $(e.target).hasClass("btn") || (window.location.href = $(this).find(".btn").eq(0).attr("href"))
        }), $(".detail-content .job-sec .fold-text").text().length > 175 && $(".detail-content .job-sec .more-view").show(), $(".manager-list .fold-text").each(function() {
            $(this).text().length > 69 ? $(this).find(".more-view").show() : $(this).find(".more-view").remove()
        }), $(".company-info").length && $(".company-info .text").text().length < 250 && $(".company-info .look-all span").remove(), $(".detail-op").on("click", ".btn",
        function(e) {
            var t = $(this);
            if (t.hasClass("btn-outline")) {
                if ($(".detail-grab").length || $(".company-detail-grab").length && !t.hasClass("btn-disabled")) Detail.startChat(t);
                else {
                    if (t.hasClass("btn-loading") || t.hasClass("btn-disabled")) return;
                    Attachment.getAttachmentList(function(e) {
                        var i = {};
                        if (1 == e.rescode && e.data && (i = e.data), 1 == e.rescode) if (i = e.data, i.resumeCount > 1) Attachment.showResumeSelecter(i, {
                            callbackConfirm: function(e) {
                                Detail.deliveResume(t, "", e)
                            }
                        });
                        else if (0 == i.resumeCount) Attachment.showUploadWarning({
                            title: "请您上传附件简历，即可完成投递",
                            confirmText: "立即上传",
                            cancelText: "取消",
                            callbackUpload: function() {
                                t.click()
                            }
                        });
                        else {
                            var n = i.resumeList[0] ? i.resumeList[0].encryptId: "";
                            Detail.deliveResume(t, "", n)
                        } else 1011 == e.code && Detail.showSign(1011)
                    })
                }
                e.preventDefault()
            } else t.hasClass("btn-startchat") && ("立即沟通" == t.text() ? (e.preventDefault(), Detail.startChat(t)) : Detail.startChat(t))
        }), $(".link-like").on("click",
        function() {
            "感兴趣" == $(this).text() ? Detail.dialogInterest($(this)) : Detail.setInterest($(this))
        }), $(".link-wechat-share").on("click",
        function(e) {
            if ("A" != e.target.nodeName) return ! 1;
            var t = $(this),
            i = $('<div id="wechat-qrcode-wrap">\n    <div class="arrow">\n        <span class="arrow-shadow"></span>\n        <span class="arrow-noumenon"></span>\n    </div>\n    <div class="qrcode">\n        <div class="qrcode-inner">\n           <img class="qrcode-img" src="" alt=""/>\n           <img class="brand-logo" src="" alt=""/>\n        </div>\n    </div>\n</div>');
            i.find(".qrcode-inner").hide(),
            i.appendTo(t).show(),
            $("<div id='wechat-qrcode-layer'></div>").appendTo(t.closest("body")),
            $("#wechat-qrcode-layer:not(#wechat-qrcode-wrap)").on("click",
            function(e) {
                $("#wechat-qrcode-wrap").remove(),
                $("#wechat-qrcode-layer").off("click").remove(),
                e.stopPropagation(),
                e.preventDefault()
            }),
            $.ajax({
                url: t.data("url"),
                type: "GET",
                dataType: "JSON"
            }).success(function(e) {
                if (1 == e.rescode) {
                    i.find(".qrcode-img").attr("src", e.qrUrl);
                    var n = "https://img.bosszhipin.com/beijin/mcs/banner/20180813/4b1a485efe4a8c3cad3e25f33b0118fc81bc5d36f26f00574e0187ae0298df1a.jpg?x-oss-process=image/resize,l_69,image/circle,r_69/format,png";
                    _jobInfo && _jobInfo.brand_logo && "" != _jobInfo.brand_logo && (n = _jobInfo.brand_logo + "?x-oss-process=image/resize,l_69,image/circle,r_69/format,png"),
                    i.find(".brand-logo").attr("src", n),
                    i.find(".qrcode-inner").show(),
                    _T.sendEvent("mini_share_" + t.data("url").substring(t.data("url").indexOf("jobId=") + 6))
                } else $("#wechat-qrcode-wrap").remove(),
                $("#wechat-qrcode-layer").off("click").remove(),
                $.toast({
                    type: "error",
                    content: e.resmsg
                })
            }).error(function() {
                $("#wechat-qrcode-wrap").remove(),
                $("#wechat-qrcode-layer").off("click").remove(),
                $.toast({
                    type: "error",
                    content: "获取分享码失败"
                })
            })
        }), this.companyDetail(), this.detailMap(), $(".location-item").on("click",
        function() {
            $(this).parent().find(".location-item").removeClass("show-map"),
            $(this).addClass("show-map")
        }), $(".chat-history .btn-accept").on("click",
        function() {
            Detail.checkAcceptInvite($(this))
        }), $(".chat-history .btn-refuse").on("click",
        function() {
            Detail.refuseInvite($(this))
        }), $(".chat-history .btn-like").on("click",
        function() {
            Detail.setInterest($(this))
        }), $(".chat-history .btn-startchat").on("click",
        function() {
            Detail.startChat($(this))
        }), $(".job-list").on("click", ".btn-startchat",
        function() {
            var e = $(this).data("url").split("?")[1].split("&")[0].split("=")[1];
            Detail.startChat($(this), "",
            function(t) {
                _T.sendEvent((1011 == t.code ? "hoverjob_greet_tosign_": "hoverjob_greet_") + e)
            },
            function() {
                _T.sendEvent("hoverjob_greet_" + e)
            })
        }), $(".company-detail-grab").length && $(".company-detail-grab .load-more").on("click",
        function() {
            var e = $(".company-detail-grab").find(".job-list"),
            t = e.find(".load-more"),
            i = parseInt(e.attr("data-page")),
            n = e.attr("data-companyid");
            "false" != e.attr("data-hasmore") && ($(this).find(".more").text("加载中..."), $.ajax({
                type: "GET",
                url: "/gongsi/ljobdata.json",
                data: {
                    companyId: n,
                    page: i + 1
                },
                dataType: "json",
                success: function(n) {
                    e.attr("data-page", i + 1),
                    e.find("ul").append(n.html),
                    n.hasMore || t.hide(),
                    t.find(".more").text("点击加载更多")
                },
                error: function(e) {}
            }))
        }), "undefined" != typeof _userInfo) {
            this.showMes();
            var o = this;
            if (_userInfo.isLogin) {
                if (!_userInfo.isPerfect) {
                    $(".container-tip");
                    setTimeout(function() {
                        Detail.canClick = !0,
                        $(".avatar img").on("click",
                        function() {
                            o.showGuide()
                        })
                    },
                    4e3),
                    $(".tip-box a").attr("href", "/geek/complete/guide.html")
                }
            } else {
                $(".container-tip");
                setTimeout(function() {
                    Detail.canClick = !0,
                    $(".avatar img").on("click",
                    function() {
                        $(".jconfirm").length && $(".jconfirm").remove(),
                        Detail.canClick && o.showGuide()
                    })
                },
                4e3),
                $(".container-tip .tip-box>a").on("click",
                function() {
                    if ($(".jconfirm").length && $(".jconfirm").remove(), 1 != $(this).data("load")) {
                        var e = $(this);
                        e.data("load", !0),
                        $(".container-tip").fadeOut(function() {
                            $.confirm({
                                content: $("#pop-hide-container").html(),
                                title: !1,
                                confirmButton: !1,
                                cancelButton: !1,
                                closeIcon: !0,
                                columnClass: "pop-sign-box",
                                onOpen: function() {
                                    Singup.init()
                                },
                                onClose: function() {
                                    Singup.cdAni && (clearInterval(Singup.cdAni), Singup.cdAni = null),
                                    o.showMes()
                                }
                            }),
                            e.data("load", !1)
                        })
                    }
                })
            }
            if (_userInfo.hasKaAnotherS) try {
                _T.sendEvent("detail_with_another_s_from_same_boss")
            } catch(e) {}
        }
        $(".job-detail .slider-main").length && $(".slider-main").hwSlider({
            autoPlay: !1,
            arrShow: !0,
            dotShow: !0,
            navShow: !0,
            touch: !0,
            width: 646,
            height: 386
        }),
        Detail.pushJobLocal();
        var r = ($(".job-banner"), $(".smallbanner")),
        l = !1;
        if ($(document).height() - $(window).height() < 260 || 0 == $(".job-banner").length || (t(), $(window).scroll(function() {
            t()
        })), $(".job-select").length > 0) {
            $(".job-select");
            $(".job-select").on("mouseenter",
            function() {
                $(this).addClass("open");
                var e = $(this).attr("data-ka");
                if (e) try {
                    _T.sendEvent(e)
                } catch(e) {}
            }).on("mouseleave",
            function() {
                $(this).removeClass("open")
            })
        }
        if ($("#jobFilter").length > 0 && $(".job-filter").length > 0 && $("#jobFilter").on("click",
        function() {
            if ($(this).parent().toggleClass("job-filter-show").hasClass("job-filter-show")) try {
                _T.sendEvent("comp_filter")
            } catch(e) {}
        }), $(".company-job").length > 0) {
            var c = "";
            $(".job-list .info-primary h3.name").each(function(e) {
                var t = $(this),
                n = t.closest("[data-jid]").attr("data-jid"),
                s = t.closest("[data-lid]").attr("data-lid");
                t.hoverDelay({
                    hoverDuring: 400,
                    hoverEvent: function() {
                        var e = t.find(".info-detail");
                        "" == $.trim(e.text()) ? $.ajax({
                            type: "GET",
                            url: "/view/job/card.json",
                            data: {
                                jid: n,
                                lid: s,
                                type: 2
                            },
                            dataType: "json",
                            success: function(s) {
                                if (1 == s.rescode) {
                                    var a = s.html;
                                    e.html(a),
                                    i(t, t.closest("li"), n)
                                }
                            }
                        }) : i(t, t.closest("li"), n)
                    },
                    outEvent: function() {
                        clearTimeout(c),
                        t.removeClass("cur"),
                        t.find(".info-detail").css("top", 0)
                    }
                })
            })
        }
    },
    checkAcceptInvite: function(e, t) {
        $.ajax({
            type: "GET",
            url: "/geek/new/interview/accept/precheck.json",
            dataType: "json",
            data: {
                bossId: e.data("boss")
            },
            success: function(i) {
                1 == i.rescode && (Attachment.attachmentList = i, i.hasInterviewed || t ? Detail.beforeAcceptInvite(e, i) : Detail.showInviteTip(e, i))
            }
        })
    },
    beforeAcceptInvite: function(e, t) {
        if (t.hasSend) Detail.acceptInvite(e);
        else if (t.resumeCount > 1) Attachment.showResumeSelecter(t, {
            callbackConfirm: function(t) {
                Detail.acceptInvite(e, t)
            }
        });
        else if (0 == t.resumeCount) Attachment.showUploadWarning({
            title: "您还没有上传附件简历",
            confirmText: "立即上传",
            cancelText: "取消",
            callbackUpload: function() {
                Detail.checkAcceptInvite(e, !0)
            }
        });
        else {
            var i = t.resumeList[0] ? t.resumeList[0].encryptId: "";
            Detail.acceptInvite(e, i)
        }
    },
    pushJobLocal: function() {
        if ("undefined" != typeof _jobInfo && window.localStorage && _jobInfo) {
            var e = Storage.get("_Job_History");
            if (e) if ( - 1 === JSON.stringify(e).indexOf(JSON.stringify(_jobInfo))) e.unshift(_jobInfo),
            Storage.set("_Job_History", e);
            else {
                var t = [];
                $(e).each(function(e, i) {
                    e >= 5 || i.job_id != _jobInfo.job_id && t.push(i)
                }),
                t.unshift(_jobInfo),
                Storage.set("_Job_History", t)
            } else Storage.set("_Job_History", [_jobInfo])
        }
    },
    showGrabTip: function(e) {
        $.dialog({
            content: '<div class="tip-text">抱歉，该职位当前无法投递</div>',
            title: "提示",
            type: "warning",
            closeText: !1,
            cancelText: "取消",
            confirmText: "查看推荐职位",
            wrapClass: "",
            onOpen: function(e) {},
            onConfirm: function(e) {
                window.location.href = "/job_detail/"
            }
        }),
        e.text("投递简历").removeClass("btn-loading")
    },
    postDeliveResume: function(e, t) {
        var i = t;
        e.attr("data-url");
        $.ajax({
            url: "/gchat/deliveryResume.json",
            data: i,
            type: "post",
            dataType: "json",
            success: function(n) {
                var n = n;
                n.rescode ? 11 == n.rescode ? ($.extend(i, {
                    cid: 1
                }), Detail.showBlockDialog(n.chatRemindDialog, e, 17, t.resumeId, i)) : 1 == n.rescode ? $.dialog({
                    content: '<div class="tip-text">您的附件简历已经发送给Boss，请静候佳音。</div>',
                    title: "投递成功",
                    type: "success",
                    cancelText: "",
                    autoTime: 4,
                    confirmText: "确定",
                    wrapClass: "",
                    onOpen: function(e) {
                        $(".btn-sendresume").text("已投递").removeClass("btn-loading").addClass("btn-disabled")
                    },
                    onConfirm: function(e) {
                        e.remove()
                    }
                }) : 3 == n.rescode || 4 == n.rescode ? Detail.showSign(n.rescode) : 5 == n.rescode ? $.toast({
                    content: "投递成功",
                    type: "success"
                }) : 6 == n.rescode ? Attachment.showUploadWarning({
                    title: "您还没有上传附件简历",
                    confirmText: "立即上传",
                    cancelText: "取消",
                    callbackUpload: function() {
                        e.click()
                    }
                }) : 7 == n.rescode ? $.dialog({
                    content: '<div class="tip-text">' + n.resmsg + "</div>",
                    title: "您不太符合该boss的要求",
                    type: "warning",
                    closeText: !1,
                    cancelText: "再看看",
                    confirmText: "继续投递",
                    onConfirm: function(t) {
                        $.extend(i, {
                            isSureSend: 1
                        }),
                        Detail.postDeliveResume(e, i),
                        t.remove()
                    }
                }) : 8 == n.rescode ? $.dialog({
                    content: '<div class="tip-text">此职位不支持投递，请与Boss直接沟通</div>',
                    title: "提示",
                    type: "warning",
                    cancelText: ""
                }) : 10 == n.rescode ? (alert("您的账号当前处于不可使用状态，请登录BOSS直聘手机APP查看详情"), window.location.href = "/logout/?toUrl=/user/security/blocktip.html") : 12 == n.rescode ? ($.toast({
                    content: n.resmsg,
                    type: "error"
                }), location.reload()) : $.toast({
                    content: n.resmsg,
                    type: "error"
                }) : 1011 == n.code ? Detail.showSign(1011) : $.toast({
                    content: n.resmsg,
                    type: "error"
                })
            },
            error: function(e) {
                $.toast({
                    content: "请稍后再试",
                    type: "error"
                })
            }
        })
    },
    deliveResume: function(e, t, i) {
        var n = t || e.attr("data-url");
        e.attr("redirect-url");
        e.hasClass("btn-loading") || e.hasClass("btn-disabled") || (e.html('<i class="icon-loading"></i>投递中').addClass("btn-loading"), $.ajax({
            url: n + "&resumeId=" + i,
            type: "post",
            dataType: "json",
            success: function(t) {
                var t = t;
                t.rescode ? 11 == t.rescode ? (Detail.showBlockDialog(t.chatRemindDialog, e, 2, i), e.text("投递简历").removeClass("btn-loading")) : 1 == t.rescode ? $.dialog({
                    content: '<div class="tip-text">您的附件简历已经发送给Boss，请静候佳音。</div>',
                    title: "投递成功",
                    type: "success",
                    cancelText: "",
                    autoTime: 4,
                    confirmText: "确定",
                    wrapClass: "",
                    onOpen: function(e) {
                        $(".btn-sendresume").text("已投递").removeClass("btn-loading").addClass("btn-disabled")
                    },
                    onConfirm: function(e) {
                        e.remove()
                    }
                }) : 3 == t.rescode || 4 == t.rescode ? (Detail.showSign(t.rescode), e.text("投递简历").removeClass("btn-loading")) : 5 == t.rescode ? e.text("已投递").removeClass("btn-loading").addClass("btn-disabled") : 6 == t.rescode ? (Attachment.showUploadWarning({
                    title: "您还没有上传附件简历",
                    confirmText: "立即上传",
                    cancelText: "取消",
                    callbackUpload: function() {
                        e.click()
                    }
                }), e.text("投递简历").removeClass("btn-loading")) : 7 == t.rescode ? ($.dialog({
                    content: '<div class="tip-text">' + t.resmsg + "</div>",
                    title: "您不太符合该boss的要求",
                    type: "warning",
                    closeText: !1,
                    cancelText: "再看看",
                    confirmText: "继续投递",
                    wrapClass: "",
                    onOpen: function(t) {
                        t.find(".btn-sure").attr("data-url", n + "&isSureSend=1").attr("redirect-url", e.attr("redirect-url"))
                    },
                    onConfirm: function(e) {
                        Detail.deliveResume(e.find(".btn-sure"), "", i),
                        e.remove()
                    }
                }), e.text("投递简历").removeClass("btn-loading")) : 8 == t.rescode ? ($.dialog({
                    content: '<div class="tip-text">此职位不支持投递，请与Boss直接沟通</div>',
                    title: "提示",
                    type: "warning",
                    cancelText: ""
                }), e.text("投递简历").removeClass("btn-loading")) : 10 == t.rescode && (alert("您的账号当前处于不可使用状态，请登录BOSS直聘手机APP查看详情"), window.location.href = "/logout/?toUrl=/user/security/blocktip.html") : 1011 == t.code ? (Detail.showSign(1011), e.text("投递简历").removeClass("btn-loading")) : 12 == t.rescode ? (alert(t.resmsg), location.reload()) : (alert(t.resmsg), e.text("投递简历").removeClass("btn-loading"))
            },
            error: function(t) {
                e.text("投递简历").removeClass("btn-loading")
            }
        }))
    },
    startChat: function(e, t, i, n) {
        var e = e,
        s = t || e.attr("data-url"),
        a = e.attr("redirect-url");
        "javascript:;" == e.attr("href") && (e.addClass("btn-disabled"), $.ajax({
            type: "POST",
            url: s,
            dataType: "JSON",
            data: null,
            success: function(t) {
                2 == t.rescode ? (Detail.showBlockDialog(t.chatRemindDialog, e, 1), e.removeClass("btn-disabled")) : 9 == t.rescode ? Detail.showGrabTip(e) : 1 == t.rescode ? ("立即沟通" == e.text() && t.greeting ? $.dialog({
                    content: '<div class="greet-con" id="greet">' + t.greeting + "</div><span>如需修改打招呼内容，请在【账号设置-设置招呼语】页面修改</span>",
                    title: "已向BOSS发送消息",
                    closeText: !1,
                    cancelText: "取消",
                    confirmText: "继续沟通",
                    inline: !0,
                    wrapClass: "greet-pop",
                    closeLayer: !1,
                    onOpen: function(e) {
                        e.find(".verify-box img").on("click",
                        function() {
                            $(this).attr("src", "/captcha/?randomKey=" + $(this).siblings(".randomkey").val() + "&_r=" + (new Date).getTime())
                        }),
                        e.find("#fileupload").on("click",
                        function(t) {
                            $(this).next(".verify-box") ? _this.checkForm($(".verify-box")) ? _this.uploadPicture($(this), e) : t.preventDefault() : _this.uploadPicture($(this), e)
                        })
                    },
                    onConfirm: function(e) {
                        window.location.href = a
                    }
                }) : window.location.href = a, e.attr("href", e.attr("redirect-url")).text("继续沟通"), e.removeClass("btn-disabled")) : 3 == t.rescode || 4 == t.rescode ? (Detail.showSign(t.rescode), e.removeClass("btn-disabled")) : 10 == t.rescode ? (alert("您的账号当前处于不可使用状态，请登录BOSS直聘手机APP查看详情"), window.location.href = "/logout/?toUrl=/user/security/blocktip.html") : 1011 == t.code ? (Detail.showSign(1011), e.removeClass("btn-disabled")) : ($.toast({
                    content: t.resmsg,
                    type: "error"
                }), e.removeClass("btn-disabled")),
                i && i(t)
            },
            error: function(t) {
                e.removeClass("btn-disabled"),
                n && n()
            }
        }))
    },
    sendEventAction: function(e, t) {
        $.ajax({
            type: "POST",
            url: "/actionLog/geek/chatremind.json",
            data: {
                ba: e.ba,
                action: t
            },
            dataType: "JSON",
            success: function(e) {}
        })
    },
    showBlockDialog: function(e, t, i, n, s) {
        Detail.sendEventAction(e, "addf-limit-popup-c");
        var a = e.title,
        o = e.content,
        r = e.buttonList,
        l = e.remindType,
        c = "";
        e.showNotRemind && (c = "<div class='remindType'><label><input type='checkbox'>不再提醒</label></div>");
        var d = {
            content: "<p>" + o + "</p>" + c,
            title: a,
            closeText: !1,
            cancelText: 2 === r.length && r[0].text,
            confirmText: 2 === r.length ? r[1].text: r[0].text,
            inline: !0,
            wrapClass: "greet-pop",
            closeLayer: !1,
            onOpen: function(e) {},
            onConfirm: function(a) {
                if (Detail.sendEventAction(e, "addf-limit-popup-connect"), e.showNotRemind && $(".remindType input:checked").length && Detail.sendRemindType(l), u.close(), 2 == l) return void(1 == i ? Detail.startChat(t, r[1].webUrl) : 17 == i ? Detail.postDeliveResume(t, s) : Detail.deliveResume(t, r[1].webUrl, n));
                2 === r.length ? window.open(r[1].webUrl) : r[0].url && window.open(r[0].webUrl)
            }
        };
        2 === r.length && (d.onCancel = function() {
            if (Detail.sendEventAction(e, "addf-limit-popup-connect"), u.close(), 2 === r.length) {
                if (4 == l) return void(17 == i ? Detail.postDeliveResume(t, s) : Detail.startChat(t, r[0].webUrl));
                r[0].url && window.open(r[0].webUrl)
            }
        });
        var u = $.dialog(d)
    },
    sendRemindType: function(e) {
        $.ajax({
            type: "POST",
            url: " /gchat/noMoreChatRemind.json",
            data: {
                remindType: e
            },
            dataType: "json",
            success: function(e) {}
        })
    },
    showSign: function(e) {
        $.confirm({
            content: $(".sign-wrap:hidden").html(),
            title: !1,
            confirmButton: !1,
            cancelButton: !1,
            closeIcon: !0,
            backgroundDismiss: !1,
            columnClass: "pop-sign-box",
            onOpen: function() {
                var t = this;
                Sign.init(t.$content),
                4 == e ? (t.$content.find(".sign-form").hide(), t.$content.find(".sign-welcome").show(), Sign.countDown(t.$content.find(".sign-welcome .welcome-box .count-down"),
                function() {
                    window.location.href = t.$content.find(".sign-welcome .welcome-box .btn").attr("href")
                })) : 5 == e && (t.$content.find(".sign-register").show(), t.$content.find(".sign-register").find(".verifyimg").click());
                var i = "verrify" + Math.random().toString(32).substr( - 10, 6),
                n = this.$content.find(".sign-form:visible").find(".row-code");
                n.attr("id", i),
                VerrifyCode.reset(n)
            },
            onClose: function() {
                Sign.interCount && (clearInterval(Sign.interCount), Sign.interCount = null)
            }
        })
    },
    showMes: function() {
        if (!_userInfo.isLogin || !_userInfo.isPerfect) {
            var e = $(".message");
            Detail.canClick = !1,
            $.each(_userInfo.text,
            function(t, i) {
                e.find(".text").eq(t).html(i)
            }),
            Detail.firstIn ? (setTimeout(function() {
                $(".container-mes").fadeIn(),
                $(".container-mes").find(".avatar").css("display", "block")
            },
            1e3), setTimeout(function() {
                e.css("top", "40px"),
                e.fadeIn(),
                e.find("li").eq(0).fadeIn()
            },
            1800), setTimeout(function() {
                e.find("li").eq(1).fadeIn()
            },
            2600), setTimeout(function() {
                e.find("li").eq(2).fadeIn(),
                Detail.canClick = !0
            },
            3400), Detail.firstIn = !1) : (e.css("top", "40px"), e.fadeIn(200), $(".container-mes").find(".avatar").fadeIn(200), Detail.canClick = !0)
        }
    },
    showTip: function() {
        if ((!_userInfo.isLogin || !_userInfo.isPerfect) && _userInfo.showTip) {
            var e = $(".avatar img");
            Detail.canClick = !1,
            setTimeout(function() {
                $(".message").css("z-index", "101"),
                $(".aladingtip").fadeIn(),
                e.addClass("avatar-ani"),
                e.mouseover(function() {
                    $(this).removeClass("avatar-ani")
                }),
                e.mouseout(function() {
                    $(this).addClass("avatar-ani")
                })
            },
            3400),
            $(".aladingtip").click(function() {
                $(this).fadeOut(function() {
                    e.removeClass("avatar-ani"),
                    e.unbind("mouseover mouseout")
                })
            })
        }
    },
    showGuide: function() {
        var e = $(".container-tip"),
        t = $(".container-mes"),
        i = this;
        t.find(".message").css({
            top: "20px",
            "-webkit-transition": "all linear .2s",
            transition: "all linear .2s"
        }).fadeOut(),
        t.find(".avatar").fadeOut(),
        $(".aladingtip").fadeOut(),
        e.fadeIn(200),
        e.find(".tip-box").css({
            "margin-bottom": "35px",
            "-webkit-transition": "all linear .2s",
            transition: "all linear .2s"
        }),
        e.find(".trangle").css({
            bottom: "69px",
            "-webkit-transition": "all linear .2s",
            transition: "all linear .2s"
        }),
        e.find("a.close").click(function() {
            e.find(".tip-box").css({
                "margin-bottom": "15px",
                "-webkit-transition": "all linear .2s",
                transition: "all linear .2s"
            }),
            e.find(".trangle").css({
                bottom: "49px",
                "-webkit-transition": "all linear .2s",
                transition: "all linear .2s"
            }),
            $(".message").css("top", "160px"),
            e.fadeOut(function() {
                i.showMes()
            }),
            $(".jconfirm").length && $(".jconfirm").remove()
        })
    },
    getQueryString: function(e, t) {
        var i = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"),
        n = t.split("?")[1].match(i);
        return null != n ? unescape(n[2]) : null
    },
    getIntersetStatus: function(e) {
        var t = Detail.getQueryString("jobId", e.attr("data-url")),
        i = $.Deferred();
        return $.ajax({
            type: "POST",
            url: "/boss/item/deal/precheck.json",
            data: {
                jobId: t
            },
            dataType: "json",
            success: function(t) {
                1 == t.rescode ? Detail.setInterest(e) : 1011 == t.code ? Detail.showSign(1011) : i.resolve(t)
            },
            error: function(e) {
                $.toast({
                    content: e.resmsg,
                    type: "error"
                })
            }
        }),
        i
    },
    interestGeekDel: function(e, t) {
        var i = Detail.getQueryString("jobId", e.attr("data-url"));
        $.ajax({
            type: "POST",
            url: "/boss/item/geekinforight/feedback.json",
            data: {
                jobId: i,
                usedId: t.usedId,
                flag: 1
            },
            dataType: "json",
            success: function(e) {
                1 == e.rescode ? $.toast({
                    content: "感兴趣成功",
                    type: "success"
                }) : $.toast({
                    content: e.resmsg,
                    type: "error"
                })
            },
            error: function() {
                $.toast({
                    content: data.resmsg,
                    type: "error"
                })
            }
        })
    },
    interestGeekBomb: function(e) {
        var t = $.Deferred(),
        i = Detail.getQueryString("jobId", e.attr("data-url"));
        return $.ajax({
            type: "POST",
            url: "/boss/item/geekbomb/interest.json",
            data: {
                jobId: i
            },
            dataType: "json",
            success: function(e) {
                1 == e.rescode && e.data.interestResult ? t.resolve(e) : t.reject(e.resmsg)
            },
            error: function() {
                t.reject("道具使用失败，请稍后再试！")
            }
        }),
        t
    },
    interestGeekOther: function(e, t) {
        var i = Detail.getQueryString("jobId", e.attr("data-url")),
        n = {
            jobId: i,
            oneKeyType: t.oneKeyType ? t.oneKeyType: "4"
        };
        Attachment.getAttachmentList(function(t) {
            var i = {};
            1 == t.rescode && t.data && (i = t.data),
            i.resumeCount > 1 ? (Attachment.showResumeSelecter(i, {
                callbackConfirm: function(t) {
                    $.extend(n, {
                        resumeId: t
                    }),
                    Detail.postDeliveResume(e.closest(".btns").find(".btn-sendresume"), n)
                }
            }), Detail.setInterest(e)) : 0 == i.resumeCount ? Attachment.showUploadWarning({
                title: "您还没有上传附件简历",
                confirmText: "立即上传",
                cancelText: "取消",
                callbackUpload: function() {
                    e.click()
                }
            }) : 1 == i.resumeCount && ($.extend(n, {
                resumeId: i.resumeList[0].encryptId
            }), Detail.postDeliveResume(e.closest(".btns").find(".btn-sendresume"), n), Detail.setInterest(e))
        })
    },
    dialogInterest: function(e) {
        Detail.getIntersetStatus(e).then(function(t) {
            var i = t.data;
            cancelText = "不, 只感兴趣",
            confirmText = "感兴趣",
            4 === t.rescode && (confirmText = "要, 发简历");
            var n = "";
            n += '<i class="arrow-noumenon"></i>',
            n += "<p>" + t.resmsg + "</p>",
            n += '<div class="btn-wrap">',
            n += "</div>";
            var s = $.dialog({
                content: n,
                title: "",
                closeText: !1,
                confirmText: confirmText,
                cancelText: cancelText,
                element: e,
                inline: !0,
                opacityLock: !0,
                wrapClass: "dialog-interes",
                onOpen: function(e) {},
                onConfirm: function(n) {
                    2 == t.rescode ? Detail.interestGeekDel(e, i) : 3 == t.rescode ? (Detail.interestGeekBomb(e).then(function(t) {
                        Detail.startChat(e.parents(".op-links").siblings(".btn-startchat"))
                    }).fail(function(e) {
                        $.toast({
                            content: e,
                            type: "error"
                        })
                    }), Detail.setInterest(e)) : Detail.interestGeekOther(e, i),
                    n.remove()
                },
                onCancel: function(t) {
                    Detail.setInterest(e),
                    s.close()
                }
            })
        })
    },
    uploadResume: function(e) {
        var t = $.dialog({
            content: '<p>上传附件简历，让BOSS更快更全面的了解你<br>支持DOC，DOCX，PDF，JPG，PNG格式附件，文件大小不超过10M</p><input id="fileupload"  type="file" name="file" ka="user-resume-upload-file">',
            title: "您还没有上传附件简历",
            closeText: !1,
            confirmText: "确定",
            cancelText: "取消",
            wrapClass: "dialog-uploadResume",
            onOpen: function(e) {},
            onConfirm: function(i) {
                Resume.beforeResumeUpload(function() {
                    $("#fileupload").click(),
                    Resume.fileUpload(e,
                    function() {
                        t.close()
                    })
                })
            }
        })
    },
    setInterest: function(e) {
        var t = e.attr("data-url"),
        i = null;
        e.hasClass("disabled") || (i = "感兴趣" == e.text() ? 1 : 0, e.addClass("disabled"), $.ajax({
            type: "POST",
            url: t,
            data: {
                flag: i
            },
            dataType: "json",
            success: function(t) {
                1 == t.rescode ? 1 == i ? e.attr("job-id") ? e.text("取消感兴趣").addClass("active").attr("ka", "popjob_notinterest_" + e.attr("job-id")) : e.text("取消感兴趣").addClass("active").attr("ka", "job_detail_unlike") : e.attr("job-id") ? e.text("感兴趣").removeClass("active").attr("ka", "popjob_interest_" + e.attr("job-id")) : e.text("感兴趣").removeClass("active").attr("ka", "job_detail_like") : 1011 == t.code ? ($(".jconfirm").length && $(".jconfirm").remove(), Detail.showSign(1011)) : $.toast({
                    content: t.resmsg,
                    type: "error"
                }),
                e.removeClass("disabled")
            },
            error: function() {
                $.toast({
                    content: "网络或服务故障，请稍后再试",
                    type: "error"
                }),
                e.removeClass("disabled")
            }
        }))
    },
    showInviteTip: function(e, t) {
        $.dialog({
            content: '<div class="text">· 面试前一天18点前，双方都可以申请取消。<br>· 如不取消，请按时出席面试，不要爽约。<br>· 对方爽约，约定时间30分钟可以投诉。<br>· 爽约一方，平台回加【不良记录】并公示。<br>· 为了方便联系，邀请面试成功后，双方自动交换手机联系方式。<br>· 对方将自动获取你的简历附件。</div>',
            title: "约面试诚信守则",
            closeText: !1,
            cancelText: "我再想想",
            confirmText: "保证不爽约",
            wrapClass: "interview-pop",
            onOpen: function(e) {},
            onConfirm: function(i) {
                Detail.beforeAcceptInvite(e, t),
                i.remove()
            }
        })
    },
    acceptInvite: function(e, t) {
        var i = e.attr("data-url") + "&resumeId=" + (t || "");
        $.ajax({
            type: "POST",
            url: i,
            data: null,
            dataType: "json",
            success: function(e) {
                1 == e.rescode ? ($.toast({
                    content: "已接受邀请",
                    type: "success"
                }), setTimeout(function() {
                    window.location.reload()
                },
                1500)) : 1011 == e.code ? Detail.showSign(1011) : 0 == e.rescode ? (alert(e.message), location.reload()) : ($.toast({
                    content: e.message,
                    type: "error"
                }), setTimeout(function() {
                    window.location.reload()
                },
                1500))
            },
            error: function() {
                $.toast({
                    content: "网络或服务故障，请稍后再试",
                    type: "error"
                })
            }
        })
    },
    refuseInvite: function(e) {
        var t = e.attr("data-url");
        e.hasClass("disabled") || (e.addClass("disabled"), $.ajax({
            type: "POST",
            url: t,
            data: null,
            dataType: "json",
            success: function(t) {
                1 == t.rescode ? $.dialog({
                    content: '<div class="text">已拒绝面试邀请</div>',
                    title: "",
                    closeText: !1,
                    cancelText: "",
                    confirmText: "确定",
                    wrapClass: "refuse-pop",
                    onOpen: function(e) {},
                    onConfirm: function(e) {
                        e.remove(),
                        setTimeout(function() {
                            window.location.reload()
                        },
                        1500)
                    },
                    onClose: function() {
                        setTimeout(function() {
                            window.location.reload()
                        },
                        1500)
                    }
                }) : 1011 == t.code ? Detail.showSign(1011) : ($.toast({
                    content: t.resmsg,
                    type: "error"
                }), setTimeout(function() {
                    window.location.reload()
                },
                1500)),
                e.removeClass("disabled")
            },
            error: function() {
                $.toast({
                    content: "网络或服务故障，请稍后再试",
                    type: "error"
                }),
                e.removeClass("disabled")
            }
        }))
    },
    companyDetail: function() {
        $(".js-open-map").on("click",
        function() {
            var e = $(this).find("img").attr("src").match(/:([^&]+)/g),
            t = e[1].replace(":", ""),
            i = $(this).attr("data-content"),
            n = ['<div class="job-location job-location-width">', '<div class="location-address">' + i + "</div>", '<div id="map-container" class="map-container" data-long-lat="' + t + '"></div>', "</div>"];
            $.dialog({
                content: n.join(""),
                title: "",
                closeText: !0,
                cancelText: "",
                confirmText: "",
                wrapClass: "map-pop",
                onOpen: function(e) {
                    var n = t.split(","),
                    s = new AMap.Map("map-container", {
                        resizeEnable: !0,
                        scrollWheel: !0,
                        center: [n[0], n[1]],
                        zoom: 16
                    }),
                    a = (s.on("click",
                    function() {}), s.on("mouseout",
                    function() {}), new AMap.Marker({
                        map: s,
                        position: [n[0], n[1]],
                        icon: new AMap.Icon({
                            size: new AMap.Size(42, 50),
                            image: "https://static.zhipin.com/zhipin/v40//web/geek/images/icon-poi.png",
                            imageOffset: new AMap.Pixel(0, -60)
                        })
                    }));
                    AMap.event.addListener(a, "click",
                    function() {
                        infoWindow.open(s, a.getPosition())
                    }),
                    AMap.plugin(["AMap.ToolBar", "AMap.Scale"],
                    function() {
                        var e = new AMap.ToolBar,
                        t = new AMap.Scale;
                        s.addControl(e),
                        s.addControl(t)
                    }),
                    infoWindow = new AMap.InfoWindow({
                        content: i,
                        offset: new AMap.Pixel(5, -25)
                    }),
                    infoWindow.open(s, s.getCenter()),
                    e.find(".dialog-container").css({
                        margin: "-250px 0 0 -330px"
                    })
                }
            })
        })
    },
    detailMap: function() {
        $(".js-open-detail").on("click",
        function() {
            var e = $(this).attr("data-id"),
            t = $(this).attr("data-lat"),
            i = $(this).attr("data-content"),
            n = ['<div class="location-item show-map location-item-pop">', '<div class="location-address"><a href="javascript:;" class="more-view><i class="fz fz-slidedown"></i></a>' + i + "</div>", '<div class="map-container js-map-container" id="' + e + '" data-long-lat="' + t + '"></div>', "</div>"];
            $.dialog({
                content: n.join(""),
                title: "",
                closeText: !0,
                cancelText: "",
                confirmText: "",
                wrapClass: "map-pop",
                onOpen: function(e) {
                    $(".js-map-container").each(function() {
                        var e = $(this).attr("id"),
                        t = $(this).attr("data-long-lat").split(","),
                        n = new AMap.Map(e, {
                            resizeEnable: !0,
                            scrollWheel: !0,
                            center: [t[0], t[1]],
                            zoom: 16
                        }),
                        s = (n.on("click",
                        function() {}), n.on("mouseout",
                        function() {}), new AMap.Marker({
                            map: n,
                            position: [t[0], t[1]],
                            icon: new AMap.Icon({
                                size: new AMap.Size(42, 50),
                                image: "https://static.zhipin.com/zhipin/v40//web/geek/images/icon-poi.png",
                                imageOffset: new AMap.Pixel(0, -60)
                            })
                        }));
                        AMap.event.addListener(s, "click",
                        function() {
                            infoWindow.open(n, s.getPosition())
                        }),
                        infoWindow = new AMap.InfoWindow({
                            content: i,
                            offset: new AMap.Pixel(5, -25)
                        }),
                        infoWindow.open(n, n.getCenter()),
                        AMap.plugin(["AMap.ToolBar", "AMap.Scale"],
                        function() {
                            var e = new AMap.ToolBar,
                            t = new AMap.Scale;
                            n.addControl(e),
                            n.addControl(t)
                        })
                    }),
                    $(".dialog-container").css({
                        margin: "-250px 0 0 -325px"
                    })
                }
            }),
            $(".dialog-container").css({
                margin: "-250px 0 0 -325px"
            })
        })
    },
    showPropDetail: function() {
        var e = $(".prop-item"),
        t = e.find(".prop-container"),
        i = e.find(".prop-detail");
        if ("undefined" != typeof _jobInfo) {
            $.get("/geek/item/competitive/jobdetail.json", {
                jobId: _jobInfo.job_id
            },
            function(n) {
                1 == n.rescode ? (e.find(".prop-default").removeClass("prop-default"), e.find("h3").append("<span>已开启</span>"), t.find(".level-" + (n.data.position + 1)).prepend('<p class="text-position icon-position">您的位置</p>'), i.find(".pull-right").siblings().html("个人综合排名：<span>在<em>" + n.data.totalNum + "</em>人中排名第<em>" + n.data.rank + "</em></span>"), i.find(".pull-right").html('<a href="javascript:;" class="link-detail" ka="check_personal_competitive_detail">查看完整个人竞争力</a>')) : (e.find(".prop-default").removeClass("prop-default"), t.prepend('<p class="text-position">你在？位置</p>'), i.find(".pull-right").html('<a href="javascript:;" class="link-detail" ka="check_personal_competitive_detail">查看完整个人竞争力</a>'))
            });
            var n = function() {
                var e = $.Deferred();
                return $.get("/geek/item/competitive/usestatus.json", {
                    jobId: _jobInfo.job_id
                },
                function(t) {
                    e.resolve(t)
                }),
                e
            },
            s = function(e, t) {
                $.ajax({
                    url: "/geek/item/competitive/useitem.json",
                    data: {
                        targetId: e.targetId
                    },
                    type: "post",
                    success: function(e) {
                        1 == e.rescode ? window.location.href = e.jumpUrl: 2 == e.rescode ? Detail.showPop({
                            title: "温馨提示",
                            content: "您的道具次数已用完<br />请先购买竞争力分析器，助你提高求职胜算",
                            confirmText: "去购买",
                            callback: function(e) {
                                e.find(".btn-sure").on("click",
                                function() {
                                    try {
                                        _T.sendEvent("to_buy_warm_tips")
                                    } catch(e) {}
                                    e.remove(),
                                    ItemShop.analyzer()
                                })
                            }
                        }) : 3 == e.rescode ? Detail.showPop({
                            title: "温馨提示",
                            content: "您的简历未完善，无法使用竞争力分析器<br />完善简历后，道具使用效果会更好哦",
                            confirmText: "立即完善",
                            callback: function(t) {
                                t.find(".btn-sure").on("click",
                                function() {
                                    try {
                                        _T.sendEvent("complete_immediately_resume_uncompleted")
                                    } catch(e) {}
                                    window.location.href = e.jumpUrl
                                })
                            }
                        }) : 4 == e.rescode && Detail.showPop({
                            title: "温馨提示",
                            content: "该职位已停止招聘，暂时无法使用道具<br />去看看其他职位",
                            confirmText: "我知道啦",
                            callback: function(e) {
                                e.find(".btn-sure").on("click",
                                function() {
                                    e.remove();
                                    try {
                                        _T.sendEvent("to_buy_warm_tips")
                                    } catch(e) {}
                                })
                            }
                        })
                    }
                })
            },
            a = function() {
                n().then(function(e) {
                    if (1011 == e.code) return void Detail.showSign();
                    if (0 == e.rescode) $.toast({
                        content: "您好，切换到牛人身份，即可查看个人竞争力分析",
                        type: "error"
                    });
                    else if (1 == e.rescode) {
                        try {
                            _T.sendEvent("show_personal_competitive_detail")
                        } catch(e) {}
                        window.location.href = e.data.jumpUrl
                    } else if (0 != e.data.itemLeftCount) $.dialog({
                        title: "",
                        content: "确定对该职位使用竞争力分析器？",
                        confirmText: "使用1/" + e.data.itemLeftCount,
                        cancelText: "我再想想",
                        wrapClass: "dialog-icons-default dialog-alert-default dialog-around-default dialog-opacity-layer",
                        position: "around",
                        opacityLock: !0,
                        element: i.find(".link-detail"),
                        inline: !0,
                        onConfirm: function(t) {
                            try {
                                _T.sendEvent("use_item_tips")
                            } catch(e) {}
                            var i = {
                                targetId: e.data.targetId
                            };
                            s(i)
                        },
                        onCancel: function(e) {
                            try {
                                _T.sendEvent("on_second_thought_item_tips")
                            } catch(e) {}
                            e.remove()
                        }
                    });
                    else {
                        var t = function() {
                            try {
                                _T.sendEvent("item_pay_buy_competitive_detail")
                            } catch(e) {}
                            Payment.success({
                                article: "购买成功",
                                text: "是否确定对该职位使用竞争分析器？",
                                cancelText: "我再想想",
                                confirmText: "立即使用",
                                confirm: function(e) {
                                    if ("confirm" == e) {
                                        try {
                                            _T.sendEvent("use_immediately_purchase_success")
                                        } catch(e) {}
                                        n().then(function(e) {
                                            if (2 == e.rescode) {
                                                var t = {
                                                    targetId: e.data.targetId
                                                };
                                                s(t, wrap)
                                            } else $.toast({
                                                content: e.resmsg,
                                                type: "error"
                                            })
                                        })
                                    } else try {
                                        _T.sendEvent("on_second_thought_purchase_success")
                                    } catch(e) {}
                                }
                            })
                        };
                        ItemShop.analyzer(t)
                    }
                })
            };
            i.on("click", ".link-detail",
            function() {
                a()
            })
        }
    },
    showPop: function(e) {
        $.dialog({
            title: e.title,
            content: e.content,
            confirmText: e.confirmText,
            wrapClass: "layer-prop-tip",
            cancelText: !1,
            onOpen: function(t) {
                "function" == typeof e.callback && e.callback(t)
            }
        })
    }
};
$(function() {
    Detail.init(),
    Detail.showPropDetail()
});
var Deliver = {
    init: function() {
        0 != $(".deliver-list").length && (Deliver.isLoading = !1, Deliver.type = "list", Deliver.listContainer = $(".job-box"), Deliver.listWrap = Deliver.listContainer.find(".deliver-list"), Deliver.tipsContainer = Deliver.listWrap.find(".data-tips"), Deliver.listCon = Deliver.listWrap.find("ul"), Deliver.listMoreEl = Deliver.listWrap.find(".loadmore"), Deliver.para = {
            page: 0
        },
        Deliver.getData(1, !0), Deliver.listMoreEl.on("click",
        function() {
            Deliver.isLoading || Deliver.listMoreEl.hasClass("disabled") || Deliver.getData()
        }), Deliver.listCon.on("click", ".btn",
        function(e) {
            var t = $(this);
            Detail.startChat(t),
            e.preventDefault()
        }))
    },
    getData: function(e, t) {
        e && (Deliver.para.page = 0, Deliver.listCon.html(""), Deliver.listWrap.find(".user-list").hide(), Deliver.listWrap.find(".detail-box").hide()),
        Deliver.para.page++,
        Deliver.isLoading = !0,
        Deliver.para.page > 1 && (Deliver.listMoreEl.addClass("disabled"), Deliver.listMoreEl.text("正在加载中...")),
        $.ajax({
            type: "GET",
            url: "/geek/deliveryinfo.json",
            dataType: "JSON",
            cache: !1,
            data: Deliver.para,
            success: function(t) {
                var t = t,
                i = "";
                1 == t.rescode && (1 == t.hasMore ? Deliver.listMoreEl.removeClass("disabled").text("加载更多").show() : Deliver.para.page > 1 && Deliver.listMoreEl.addClass("disabled").text("没有更多了").show(), "" == t.html ? e && Deliver.tipsContainer.html('<div class="data-blank"><i class="tip-nodata"></i><b>没有相关数据</b></div>').show() : (i += t.html, Deliver.listCon.append(i), Deliver.tipsContainer.html("").hide()), e && Deliver.listCon.find("li").length < 10 && Deliver.listMoreEl.text("没有更多了").addClass("disabled").hide()),
                Deliver.isLoading = !1
            },
            error: function(t) {
                Deliver.para.page > 1 && Deliver.listMoreEl.removeClass("disabled").text("数据加载出错").show(),
                Deliver.isLoading = !1,
                e && (Deliver.listMoreEl.hide(), Deliver.tipsContainer.html('<div class="data-blank"><i class="tip-errordata"></i><b>数据加载出错</b></div>').show())
            }
        })
    }
};
$(function() {
    Deliver.init()
}),
$(function() {
    $(".ie").length && (window.IE = !0);
    var e = function() {
        $.dialog({
            type: "info",
            title: "新头像已提交审核",
            content: '<div class="tip-text">头像修改已提交审核，审核通过后自动更新您的信息</div>',
            closeText: !0,
            confirmText: "知道了",
            cancelText: "",
            closeLayer: !1,
            preKa: "",
            wrapClass: "dialog-icons-default dialog-avatar-tip",
            lock: !0,
            onOpen: function(e) {},
            onConfirm: function(e) {
                e.remove()
            },
            onClose: function(e) {}
        })
    };
    $(".avatar_box").on("click",
    function() {
        if ($(".profile_form").length) window.IE ? $.initUploadPortrait({
            title: "上传照片",
            url: $("[upload]").attr("upload"),
            callback: function(t, i) {
                var n = $(".profile_form .avatar_line img.avatar");
                if ($("#user_info").length > 0 && $(window.parent.document).find(".aside_nav_bar .avatar img").attr("src", t[0]), $(".resume-box").length) {
                    var s = n.closest("form");
                    $.ajax({
                        type: "POST",
                        url: s.attr("action"),
                        dataType: "JSON",
                        data: {
                            tiny: t[0],
                            large: t[1]
                        },
                        success: function(t) {
                            1 == t.rescode && (n.attr("src", t.url[1]), n.closest("dd").find("input:hidden[name=large]").val(t.url[1]), n.closest("dd").find("input:hidden[name=tiny]").val(t.url[0]), n.closest("dd").find(".error_hint").html("").hide(), t.verifyTip && e())
                        },
                        error: function(e) {}
                    })
                }
            }
        }) : crop.show({
            callback: function(t) {
                t && $.post($("[upload-base64-url]").attr("upload-base64-url"), {
                    data: t
                },
                function(t) {
                    if (t.rescode) {
                        var i = $(".profile_form .avatar_line img.avatar");
                        i.attr("src", t.url[0]),
                        i.closest("dd").find("input:hidden[name=tiny]").val(t.url[0]),
                        i.closest("dd").find("input:hidden[name=large]").val(t.url[1]),
                        $("#user_info").length > 0 && $(window.parent.document).find(".aside_nav_bar .avatar img").attr("src", t.url[0]),
                        t.verifyTip && e()
                    } else alert("图片保存失败")
                },
                "json")
            }
        });
        else if (window.IE) $.initUploadPortrait({
            title: "上传照片",
            url: $("[upload]").attr("upload"),
            callback: function(t, i) {
                var n = $(".profile_form .avatar_line img.avatar");
                n.attr("src", t[1]),
                n.closest("dd").find("input:hidden[name=large]").val(t[1]),
                n.closest("dd").find("input:hidden[name=tiny]").val(t[0]),
                n.closest("dd").find(".error_hint").html("").hide(),
                i && i.verifyTip && e()
            }
        });
        else {
            var t = $(".avatar_layer"),
            i = $(this);
            crop.show({
                element: i,
                defaultAvatarHtml: t,
                callback: function(t) {
                    t && $.post($("[upload-base64-url]").attr("upload-base64-url"), {
                        data: t
                    },
                    function(t) {
                        if (t.rescode) {
                            var n = $(".avatar_box .avatar img");
                            n.attr("src", t.url[0]),
                            n.closest("dd").find("input:hidden[name=tiny]").val(t.url[0]),
                            n.closest("dd").find("input:hidden[name=large]").val(t.url[1]),
                            i.find(".tip-text").remove(),
                            t.verifyTip && e()
                        } else alert("图片保存失败")
                    },
                    "json")
                }
            })
        }
    })
});
var Validate = {
    init: function(e, t, i) {
        var n = e,
        s = n.find("input,textarea");
        n.on("submit",
        function(e) {
            var a = !1;
            if (s.each(function() {
                if (!$(this).attr("disabled") && ($(this).hasClass("required") || $(this).attr("data-range")) && !Validate.check($(this), !0)) return a = !1,
                !1;
                a = !0
            }), a) {
                if (n.find("input[name=name]").length && !n.find("input[name=name]").hasClass("disabled")) {
                    var o = $("input[name=name]").val();
                    if (Auxiliary.getByteLength(o) < 4) return $.toast({
                        type: "error",
                        content: "姓名应为2-12个汉字或4-24个字母"
                    }),
                    !1
                }
                i ? Guide.postData(n, t) : (Resume.postData(n, t), Resume.formStatus = !1)
            } else {
                var r = $(".tip-text");
                r.length && $("body,html").stop().animate({
                    scrollTop: r.offset().top - r.closest("dl").height()
                })
            }
            e.preventDefault()
        }),
        s.each(function() {
            var e = $(this).closest("dd").find(".count-num");
            $(this).attr("disabled") || !$(this).hasClass("required") && !$(this).attr("data-range") || (t || Validate.check($(this), !1, e), $(this).bind("input keyup",
            function() {
                Validate.check($(this), !1, e)
            }))
        }),
        n.find(".form-btns .btn-back").on("click",
        function() {
            n.closest(".resume-item").removeClass("resume-item-open")
        }),
        n.find('input[name="locationName"]').on("blur",
        function() {
            "" != $(this).val() && "" == $(this).parent().find('input[name="location"]').val() ? ($(this).val(""), Validate.showError($(this), "请输入正确的城市")) : Validate.hideError($(this))
        }),
        n.find('input[name="degree"]').closest("dd").find(".dropdown-menu li").on("click",
        function() {
            "206" == $(this).attr("data-val") || "209" == $(this).attr("data-val") ? (n.find('input[name="major"]').addClass("disabled").val("").attr("disabled", "disabled"), Validate.hideError(n.find('input[name="major"]'))) : n.find('input[name="major"]').removeClass("disabled").removeAttr("disabled"),
            n.find('.ipt-range, input[name="startDateCode"], input[name="endDateCode"]').val("")
        })
    },
    getLength: function(e) {
        var t = 0,
        e = e;
        len = e.length,
        charCode = -1;
        for (var i = 0; i < len; i++) charCode = e.charCodeAt(i),
        charCode >= 0 && charCode <= 128 || charCode >= 65248 && charCode <= 65373 || 12288 == charCode || 12289 == charCode || 12290 == charCode ? t += .5 : t += 1;
        return Math.round(t)
    },
    check: function(e, t, i) {
        var e = e,
        n = e.attr("data-range"),
        s = Validate.getLength(e.val().trim()),
        a = e.val().replace(/(\s*$)/g, "");
        if (e.hasClass("required") && "" == a) {
            if (t) return Validate.showError(e, e.attr("data-blank")),
            !1;
            Validate.hideError(e)
        } else Validate.hideError(e);
        if ("locationName" == e.attr("name") && "" != a && "" == e.parent().find('input[name="location"]').val()) return Validate.showError(e, "请输入正确的城市"),
        !1;
        if (t && "gender" == e.attr("name") && Number(a) < 0) return Validate.showError(e, e.attr("data-blank")),
        !1;
        if (n) {
            if (n = n.split(","), i && i.length && i.html("<em" + (s > n[1] ? ' class="red"': "") + ">" + s + "</em>/" + n[1]), s > n[1] || s < n[0]) return Validate.showError(e, "请输入 " + n[0] + "-" + n[1] + " 个字"),
            !1;
            Validate.hideError(e)
        }
        return ! 0
    },
    showError: function(e, t) {
        var i = '<div class="tip-text">' + t + "</div>",
        n = e.closest("dd").length ? e.closest("dd") : e.closest(".form-row");
        Validate.hideError(e),
        n.find(".tip-text").remove(),
        $(i).appendTo(n),
        e.addClass("ipt-error")
    },
    hideError: function(e) {
        e.closest("dd").find(".tip-text").remove(),
        e.removeClass("ipt-error")
    }
};
$(function() {
    $(".form-resume").each(function() {
        Validate.init($(this))
    })
});
var FormsUI = {
    eq: 0,
    init: function(e) {
        var t = e || $(document);
        if (this.dropSelect(t), this.prettyRadio(t), this.formEl = t, t.find(".ipt-datetimepicker").length) {
            var i = new Date;
            nowYear = i.getFullYear(),
            nowMonth = i.getMonth() + 1,
            nowThisDate = i.getDate(),
            t.find(".ipt-datetimepicker").each(function(e) {
                var t = $(this),
                i = e,
                n = t.attr("data-format") || "yyyy-mm-dd",
                s = t.hasClass("date-range"),
                a = t.attr("data-today"),
                o = t.attr("data-type"),
                r = t.attr("data-minYear") || !1,
                l = 2,
                c = 2; (o && "y-m-d" == o || "y-m" == o) && (l = 4),
                "yyyy-mm" == n && (c = 3),
                t.datetimepicker({
                    format: n,
                    startView: l,
                    minView: c,
                    autoclose: 1,
                    weekStart: 1,
                    minLimitYear: r,
                    todayHighlight: !0,
                    container: _PAGE && _PAGE.isGeekChat ? "#resume-history": "body",
                    endDate: nowYear + "-" + nowMonth + "-" + nowThisDate,
                    todayBtn: a ? 1 : 0
                }).on("changeDate",
                function(e) {
                    t.closest("dd").find(".tip-text").hide();
                    var i = t.closest(".form-row").find(".date-range").eq(0);
                    if (a) {
                        if (new Date(e.date) < new Date(i.val())) return alert("结束时间不能小于开始时间"),
                        !1
                    } else if (s && "startDate" == t.attr("name")) {
                        var n = t.closest(".form-row").find(".date-range").eq(1);
                        new Date(e.date).getFullYear() == (new Date).getFullYear() && new Date(e.date).getMonth() == (new Date).getMonth() ? (n.parent().addClass("show-prefix-today"), n.parent().find('input[name="now"]').val("1"), n.removeClass("required")) : (n.parent().removeClass("show-prefix-today"), n.parent().find('input[name="now"]').val(""), n.addClass("required")),
                        "1989-01" == t.val() ? n.datetimepicker("setStartDate", "1990-01") : n.datetimepicker("setStartDate", t.val())
                    }
                    s && "endDate" == t.attr("name") && (new Date(e.date).getFullYear() == (new Date).getFullYear() && new Date(e.date).getMonth() == (new Date).getMonth() ? (t.parent().addClass("show-prefix-today"), t.parent().find('input[name="now"]').val("1"), t.removeClass("required")) : (t.parent().removeClass("show-prefix-today"), t.parent().find('input[name="now"]').val(""), t.addClass("required"))),
                    $(e.target).attr("data-minyear") && (new Date(e.date).getFullYear() <= 1989 ? i.parent().addClass("show-prefix-minyear") : i.parent().removeClass("show-prefix-minyear"))
                }),
                "birthday" == t.attr("name") && (t.datetimepicker("setStartDate", "1950-01"), t.datetimepicker("setEndDate", nowYear - 15 + "-12")),
                s && "startDate" == t.attr("name") && t.datetimepicker("setStartDate", "1989-01"),
                s && "endDate" == t.attr("name") && ("" == t.val() && "" == t.closest(".form-row").find(".date-range").eq(0).val() ? t.datetimepicker("setStartDate", "1990-01") : t.datetimepicker("setStartDate", t.closest(".form-row").find(".date-range").eq(0).val())),
                t.parent().find(".prefix-minyear,.prefix-today").on("click",
                function(e) {
                    if (!$(".datetimepicker").eq(i).is(":visible")) return setTimeout(function() {
                        t.datetimepicker("show")
                    },
                    1),
                    !1;
                    t.datetimepicker("hide")
                }),
                t.on("click",
                function() {
                    $(".workstartpicker-wrap").hide().removeClass("month-panel")
                })
            })
        }
        t.find(".ipt-workyear").length && t.find(".ipt-workyear").workstartpicker(),
        t.find(".start-salary").on("click", "li",
        function() {
            FormsUI.changeSalary($(this).attr("data-val"))
        }),
        FormsUI.setMinSlary(),
        t.find(".select-industry .industry-cells").on("click", "span",
        function() {
            var e = $(this).closest("dd");
            if ($(this).hasClass("selected")) $(this).removeClass("selected"),
            e.find(".select-industry .industry-title h3").removeClass("red"),
            e.find(".select-industry .industry-title p.gray").removeClass("red").text("最多可选 3 个技能标签");
            else {
                if (e.find(".select-industry .industry-cells .selected").length > 2) return e.find(".select-industry .industry-title h3").addClass("red"),
                void e.find(".select-industry .industry-title p.gray").addClass("red").text("最多可选 3 个技能标签");
                $(this).addClass("selected")
            }
        }),
        t.find(".select-industry .industry-title").on("click", ".btn",
        function(e) {
            e.preventDefault();
            var t = $(this).closest("dd"),
            i = t.find(".industry-title .ipt"),
            n = !1;
            if ("确定" == $(this).text()) {
                var s = [],
                a = [];
                t.find(".select-industry .industry-cells .selected").each(function() {
                    s.push($(this).text()),
                    a.push($(this).attr("data-val") || $(this).text())
                }),
                s.length || (s.push("不限"), a.push("0")),
                t.find(".select-industry").closest("dd").find(".dropdown-select .ipt").val(s.join("·")),
                t.find(".select-industry").closest("dd").find('.dropdown-select input[type="hidden"]').val(a.join("·")),
                t.find(".select-industry").closest("dd").find(".dropdown-select").removeClass("dropdown-select-open"),
                t.find(".select-industry").closest("dd").find(".dropdown-menu").removeClass("dropdown-menu-open")
            } else if ("取消" == $(this).text()) t.find(".select-industry").closest("dd").find(".dropdown-select").removeClass("dropdown-select-open"),
            t.find(".select-industry").closest("dd").find(".dropdown-menu").removeClass("dropdown-menu-open");
            else if ($(this).hasClass("btn-addtag")) {
                var o = Validate.getLength(i.val()),
                r = t.find(".select-industry .industry-title p.gray");
                if ("" == i.val().replace(/(\s*$)/g, "")) return r.text("请输入标签名称").addClass("red"),
                void i.val("");
                if (o > 6) return void r.text("请输入不超过6个字的标签名称").addClass("red");
                if (t.find(".select-industry .industry-cells span").each(function() {
                    if ($(this).text() == i.val()) return void(n = !0);
                    n = !1
                }), n) r.addClass("red").text("该标签已存在");
                else {
                    if (t.find(".industry-cells .blank-tag").remove(), r.text("最多可选 3 个技能标签"), t.find(".select-industry .industry-cells .selected").length > 2) return void r.addClass("red");
                    r.removeClass("red"),
                    t.find(".industry-cells").prepend('<span class="selected">' + i.val() + "</span>"),
                    i.val("")
                }
            }
        }),
        t.find(".ipt-autocomplete").on("input keyup",
        function() {
            var e = $(this);
            FormsUI.suggestTimer && clearTimeout(FormsUI.suggestTimer),
            FormsUI.suggestTimer = setTimeout(function() {
                e.parent().find('input[type="hidden"]').val(""),
                FormsUI.getSuggest(e)
            },
            200)
        }),
        t.find(".suggest-complete").on("click", "li",
        function() {
            FormsUI.setSuggest($(this))
        }),
        FormsUI.initIndustry(t)
    },
    initIndustry: function(e) {
        var t = e.find("input[name=industryStr]").length ? e.find("input[name=industryStr]") : e.find("input[name=industryCategory]"),
        i = e.find("input[name=industryCodes]").length ? e.find("input[name=industryCodes]") : e.find("input[name=industryCode]");
        if (t.length) {
            var n = [],
            s = t.val().split("·"),
            a = i.val().split("·");
            $.each(a,
            function(e, t) {
                n.push({
                    name: s[e],
                    code: a[e]
                })
            }),
            t.industry({
                multiple: !e.find("input[name=industryCategory]").length
            }).data("selected", n).on("selected.industry",
            function(e, n) {
                t.closest("dd").find(".tip-text").hide();
                var s = [],
                a = [];
                $.isArray(n) ? ($.each(n,
                function(e, t) {
                    s.push(t.name),
                    a.push(t.code)
                }), t.val(s.join("·")), i.val(a.join("·"))) : (t.val(n.name), i.val(n.code))
            })
        }
    },
    prettyRadio: function(e) {
        var t = this,
        e = e || $(document);
        e && e.find(".radio-list").each(function() {
            var e = t.hasJsResumeRadioSelect($(this)),
            i = $(this),
            n = i.find('input[type="hidden"]');
            i.on("click", "label",
            function() {
                $(this).hasClass("ipt-disabled") || (e ? t.notSelectRadio() : t.selectRadio(i, n, $(this)), i.find("label").removeClass("radio-checked"), $(this).addClass("radio-checked"), n.val($(this).attr("data-val")))
            })
        })
    },
    notSelectRadio: function() {
        $.toast("已实名认证用户不可修改性别", "warning")
    },
    selectRadio: function(e, t, i) {
        e.find("label").removeClass("radio-checked"),
        i.addClass("radio-checked"),
        t.val(i.attr("data-val"))
    },
    hasJsResumeRadioSelect: function(e) {
        return !! e.hasClass("js-resume-radio-select")
    },
    dropSelect: function(e) {
        function t(e) {
            return {
                209 : 6,
                208 : 5,
                206 : 6,
                202 : 5,
                203 : 8,
                204 : 5,
                205 : 8
            } [e]
        }
        function i(i, n, s) {
            if (n.hasClass("ipt-range") && "start" == n.attr("data-range")) {
                var a, o = n.closest(".form-row"),
                r = n.closest("dd").find(".dropdown-menu ul"),
                l = (r.find("li").last().attr("data-val"), o.find('.ipt-range[data-range="end"]')),
                c = l.parent().find('input[type="hidden"]'),
                d = l.closest("dd").find(".dropdown-menu ul"),
                u = e.find('input[name="degree"]').val(),
                p = parseInt(i.attr("data-val"), 10) || parseInt(i.val(), 10),
                h = t(u),
                f = p + h,
                m = ""; (new Date).getFullYear(),
                parseInt(p);
                if (!p) return;
                if (!u) return $.toast({
                    type: "error",
                    content: "请先选择学历"
                }),
                !1;
                if (1989 == p) m = '<li data-val="1989" ka="edu-end-' + a + '">1990年以前</li>';
                else for (var a = f; a > p; a--) m += '<li data-val="' + a + '" ka="edu-end-' + a + '">' + a + "</li>";
                d.html(m),
                s || (l.val(d.find("li:last").text()), c.val(d.find("li:last").attr("data-val")))
            }
        }
        var e = e || $(document);
        if (e) {
            if (0 === FormsUI.eq) {
                var n = new $.Position;
                $(document).on("click", 'input[placeholder="选择期望职位"]',
                function() {
                    var e = $(this);
                    n.init({
                        data: jobData,
                        callback: function(t) {
                            e.val(t[2].name),
                            e.next().val(t[2].code)
                        },
                        hasSearch: !0
                    })
                }),
                $(document).on("click", 'input[placeholder="选择职位类型"], input[placeholder="您的职位"]',
                function() {
                    var e = $(this);
                    n.init({
                        data: jobData,
                        callback: function(t) {
                            e.val(t[2].name),
                            e.next().val(t[2].code),
                            e.next().attr("level2", t[1].code),
                            e.next().attr("level3", t[2].code),
                            $('input[placeholder="选择技能标签"]').val(""),
                            $('input[placeholder="选择技能标签"]').next().val(""),
                            $(".select-tags .industry-cells").html(""),
                            Resume.getSkillsData({
                                p1: t[2].code,
                                p2: t[1].code
                            },
                            !0),
                            e.closest("dd").find(".tip-text").hide(),
                            "选择职位类型" == e.attr("placeholder") && e.closest(".form-row").find('input[name="positionName"]').val(t[2].name),
                            "guide" == e.data("type") && Guide.showSugSkillTag(t[2].code)
                        },
                        hasSearch: !0
                    })
                }),
                FormsUI.eq = 1
            }
            e.find(".dropdown-select").each(function() {
                var t = $(this),
                n = t.find('.ipt-range[data-range="start"]'),
                s = t.find('input[name="highSalary"]');
                t.on("click",
                function() {
                    $(this).hasClass("dropdown-disabled") || ($(this).hasClass("dropdown-select-open") || (e.find(".dropdown-select-open").removeClass("dropdown-select-open"), e.find(".dropdown-menu-open").removeClass("dropdown-menu-open")), $(this).toggleClass("dropdown-select-open"), t.next(".dropdown-menu").toggleClass("dropdown-menu-open"))
                }),
                t.find('.ipt-range[data-range="end"]') && i(n, n, !0),
                "" == s.val() && (s.closest(".dropdown-select").addClass("dropdown-disabled"), s.closest(".dropdown-select").find(".ipt").attr("disabled", "disabled"))
            }),
            e.find(".dropdown-menu").each(function() {
                var t = $(this),
                n = t.prev(".dropdown-select"),
                s = n.find("input[readonly]"),
                a = n.find('input[type="hidden"]'),
                o = t.find(".select-tree"),
                r = t.find(".tags-cells");
                o.length && (3 == o.attr("data-level") && o.html('<ul class="tree-1"></ul><ul class="tree-2"></ul><ul class="tree-3"></ul>'), 2 == o.attr("data-level") && o.html('<ul class="tree-1"></ul><ul class="tree-2"></ul>'), FormsUI.getTreeData(o, jobData)),
                r.length && void 0 !== Resume && Resume.getTag(e, !0),
                t.on("click", "li",
                function() {
                    if ($(this).closest(".select-tree").length) {
                        var e = $(this).closest(".select-tree").attr("data-level");
                        if ($(this).parent().find("li").removeClass("selected"), $(this).addClass("selected"), 3 == e) {
                            if ($(this).closest(".tree-1").length) return $(this).closest(".select-tree").find(".tree-3").hide(),
                            FormsUI.getTreeData(o, jobData, $(this).attr("data-id")),
                            !1;
                            if ($(this).closest(".tree-2").length) return $(this).closest(".select-tree").find(".tree-3").show(),
                            a.attr("level2", $(this).attr("data-id")),
                            FormsUI.getTreeData(o, jobData, $(this).closest(".select-tree").find(".tree-1 .selected").attr("data-id"), $(this).attr("data-id")),
                            !1
                        }
                        if (2 == e) {
                            if ($(this).closest(".tree-1").length) return $(this).closest(".select-tree").find(".tree-3").hide(),
                            FormsUI.getTreeData(o, jobData, $(this).attr("data-id")),
                            !1;
                            if ($(this).closest(".tree-2").length) return $(this).closest(".select-tree").find(".tree-3").show(),
                            a.attr("level2", $(this).attr("data-id")),
                            FormsUI.getTreeData(o, jobData, $(this).closest(".select-tree").find(".tree-1 .selected").attr("data-id"), $(this).attr("data-id")),
                            !1
                        }
                    }
                    if (i($(this), s), s.val($(this).text()), void 0 !== $(this).data("val") && a.val($(this).attr("data-val")), a.closest("dd").find(".tip-text").remove(), t.removeClass("dropdown-menu-open"), n.removeClass("dropdown-select-open"), "position" == a.attr("name")) {
                        var r = $(this).closest(".form-resume").find(".select-tags");
                        r.closest("dd").find(".ipt").val(""),
                        r.closest("dd").find('input[type="hidden"]').val(""),
                        Resume.getTag(r.closest(".form-resume"))
                    }
                    if ("position" == a.attr("name") && $(this).closest(".form-work")) {
                        var r = $(this).closest(".form-work").find(".select-tags");
                        r.closest("dd").find(".ipt").val(""),
                        r.closest("dd").find('input[type="hidden"]').val(""),
                        Resume.getTag(r.closest(".form-work"))
                    }
                })
            }),
            $(document).on("click",
            function(t) {
                $(t.target).closest(".dropdown-menu").length || $(t.target).closest(".dropdown-select").length || (e.find(".dropdown-select").removeClass("dropdown-select-open"), e.find(".dropdown-menu").removeClass("dropdown-menu-open"))
            })
        }
    },
    getTreeData: function(e, t, i, n) {
        var s, a, o, r = "",
        l = "",
        c = "";
        for (s = 0; s < t.length; s++) {
            var d = t[s].children;
            if (r += '<li data-id="' + t[s].id + '">' + t[s].name + "</li>", d && i && t[s].id == i) for (a = 0; a < d.length; a++) {
                var u = d[a].children;
                if (l += '<li data-id="' + d[a].id + '">' + d[a].name + "</li>", u && n && d[a].id == n) for (o = 0; o < u.length; o++) c += '<li data-val="' + u[o].id + '">' + u[o].name + "</li>"
            }
        }
        i || (e.find(".tree-1").html(r), e.find(".tree-2").html('<li class="blank">选择职类</li>')),
        n ? e.find(".tree-3").html(c) : i && e.find(".tree-2").html(l)
    },
    setMinSlary: function() {
        var e = Salary.min(),
        t = '<li data-val="面议">面议</li>';
        $.each(e,
        function(e, i) {
            t += '<li data-val="' + i + '">' + i + "K</li>"
        }),
        FormsUI.formEl.find(".start-salary .dropdown-menu ul").html(t),
        FormsUI.changeSalary(FormsUI.formEl.find("input[name=lowSalary]").val(), !0)
    },
    changeSalary: function(e, t) {
        if (e) {
            var i = $(".end-salary"),
            n = i.find(".ipt"),
            s = i.find('input[type="hidden"]'),
            a = i.find("ul"),
            e = e,
            o = 0;
            if (e && (n.closest(".dropdown-select").removeClass("dropdown-disabled").parent().parent().find(".range-devide").show(), n.removeAttr("disabled")), "面议" == e) n.val("面议").parent().hide().parent().parent().find(".range-devide").hide(),
            s.val("面议");
            else {
                e = parseInt(e, 10),
                n.val(n.val() + "K").parent().show();
                var r = Salary.max(parseInt(e, 10)),
                l = "";
                $.each(r,
                function(e, t) {
                    l += '<li data-val="' + t + '">' + t + "K</li>"
                }),
                a.html(l),
                o = r[0]
            }
            t && 0 == e && 0 == s.val() && n.parent().hide(),
            t || (n.val(o + "K"), s.val(o))
        }
    },
    getSuggest: function(el) {
        var el = el,
        url = el.attr("data-url"),
        keyword = el.val(),
        resultPannel = el.parent().find(".suggest-complete");
        if ("" == keyword) return void resultPannel.removeClass("dropdown-menu-open");
        resultPannel.html("<ul></ul>").addClass("dropdown-menu");
        var resultCon = resultPannel.find("ul");
        $.ajax({
            type: "POST",
            url: url,
            dataType: "JSON",
            data: {
                query: keyword
            },
            success: function(result) {
                var result = result.data,
                str = "",
                i;
                if ("string" == typeof result && (result = eval("(" + result + ")")), result && result.length) {
                    for (i = 0; i < result.length; i++) str += '<li data-val="' + result[i].code + '">' + (result[i].country ? '<span class="ignore">' + result[i].country + "</span>": "") + result[i].hlname + "</li>";
                    resultCon.html(str),
                    resultPannel.addClass("dropdown-menu-open")
                }
            },
            error: function(e) {}
        })
    },
    setSuggest: function(e) {
        var t = e.closest("dd").find(".ipt"),
        i = e.closest("dd").find('input[name="location"]'),
        n = e.closest("dd").find('input[type="hidden"]'),
        s = e.clone();
        s.find(".ignore").remove(),
        t.val(s.text()),
        i.val(e.attr("data-val")),
        n.val(e.attr("data-val")),
        e.closest(".suggest-complete").removeClass("dropdown-menu-open"),
        t.parent().find(".tip-text").remove()
    }
};
$(function() { ($(".resume").length || $(".job-detail").length) && FormsUI.init()
});
var ResumeEditor = {
    init: function() {}
},
Resume = {
    ownerTags: [],
    skillsData: [],
    formStatus: !1,
    init: function() {
        if (0 != $(".progress-score").length) {
            var e = $(".progress-score").text();
            $(".progress p").css("width", e)
        }
        Resume.canSubmit = !1,
        $(".resume-item").on("click", ".link-add",
        function(e) {
            Resume.getData($(this)),
            e.preventDefault()
        }),
        $(".resume-item:not('#resume-history')").on("click", ".userinfo-con, .summary-con, .purpose-list>li, .history-project>li, .social-account>li",
        function(e) {
            Resume.getData($(this).find(".link-edit"))
        }),
        $("#resume-history").on("click", ".userinfo-con, .summary-con, .purpose-list>li, .history-project>li .item-form-list, .social-account>li",
        function(e) {
            return Resume.bookJobData($(this).find(".link-edit")),
            !1
        }),
        $(".resume-item").on("click", ".link-delete",
        function(e) {
            Resume.removeData($(this)),
            e.preventDefault(),
            e.stopPropagation()
        }),
        $(".resume-nav .link-edit").on("click",
        function(e) {
            var t = $(this).attr("data-target");
            Resume.getData($("#" + t).find(".link-edit")),
            e.preventDefault()
        }),
        $(".resume-nav .link-add").on("click",
        function(e) {
            var t = $(this).attr("data-target");
            Resume.getData($("#" + t).find(".link-add")),
            e.preventDefault()
        }),
        $(".prv-view-btn").on("click",
        function() {
            Resume.showPreviewResume()
        }),
        "undefined" != typeof editItem && (1 == editItem ? $("#resume-purpose .link-add").click() : 2 == editItem && $(".userinfo-con").click())
    },
    showPreviewResume: function() {
        $.dialog({
            title: "",
            content: '<div class="frame-preview-resume"><iframe src="/geek/resume/preview"></iframe></div>',
            closeText: !0,
            confirmText: "",
            cancelText: "",
            wrapClass: "dialog-layer-full dialog-resume-full",
            lock: !0,
            onOpen: function(e) {
                $("body").css("overflow", "hidden")
            },
            onClose: function() {
                $("body").css("overflow", "visible")
            }
        })
    },
    unique: function(e, t) {
        if (e.length < 2) return [e[0]] || [];
        for (var i = {},
        n = [], s = 0; s < e.length; s++) {
            var a = e[s],
            o = !!t && typeof i[a] != typeof a; (void 0 === i[a] || o) && (i[a] = a, n.push(a))
        }
        return n
    },
    selectMajorInit: function() {
        $(".dropmajor").suggestion({
            onRequest: function(e, t) {
                if (!e) return void t("");
                $.ajax({
                    url: "/autocomplete/major.json",
                    data: {
                        query: e || ""
                    },
                    type: "get",
                    dataType: "json",
                    success: function(e) {
                        if (e && e.data instanceof Array) {
                            var i = e.data.map(function(e) {
                                return "<li data-code=" + e.id + ">" + e.hlname + "</li>"
                            }).join("");
                            t(i)
                        }
                    }
                })
            },
            onChecked: function(e, t) {
                e && e.length && $(".dropmajor").find(".suggestion-ipt").val(e.text())
            }
        })
    },
    selectSchoolInit: function() {
        $(".dropschool").suggestion({
            onRequest: function(e, t) {
                if (!e) return void t("");
                $.ajax({
                    url: "/autocomplete/school.json",
                    data: {
                        query: e || ""
                    },
                    type: "get",
                    dataType: "json",
                    success: function(e) {
                        if (e && e.data instanceof Array) {
                            var i = e.data.map(function(e) {
                                return "<li data-code=" + e.code + "><i>" + e.country + "</i><em>" + e.hlname + "</em></li>"
                            }).join("");
                            t(i)
                        }
                    }
                })
            },
            onChecked: function(e, t) {
                e && e.length && ($(".dropschool").find(".suggestion-ipt").val(e.find("em").text()), $(".dropschool").find("input[type=hidden]").val(e.data("code")))
            }
        })
    },
    selectCompanyInit: function(e) {
        $(".dropcompany").suggestion({
            onRequest: function(e, t) {
                if (!e) return void t("");
                $.ajax({
                    url: "/autocomplete/company.json",
                    data: {
                        comName: e || ""
                    },
                    type: "get",
                    dataType: "json",
                    success: function(e) {
                        if (e && e.companyList instanceof Array) {
                            var i = e.companyList.map(function(e) {
                                return "<li data-code=" + e.id + ">" + e.highlightItem.hlname + "</li>"
                            }).join("");
                            t(i)
                        }
                    }
                })
            },
            onChecked: function(t, i) {
                t && t.length && ($(".dropcompany").find(".suggestion-ipt").val(t.text()), e && e(t.data("code")))
            }
        })
    },
    getCompanyIndustry: function(e, t) {
        $.ajax({
            url: "/autocomplete/industry.json",
            data: {
                comId: e
            },
            type: "get",
            dataType: "json",
            success: function(e) {
                1 == e.rescode && (t.find('input[name="industryCategory"]').val(e.data.name), t.find('input[name="industryCode"]').val(e.data.code || ""))
            }
        })
    },
    selectCityInit: function() {
        var e = $('[name="locationName"]').val(),
        t = $('[name="location"]').val();
        $(".dropcity").citySelector({
            onLocation: function(e, t) {
                Resume.autoLocation = e.name;
                var i = $(this),
                n = i.find(".suggestion-ipt");
                e.name && !n.val() && (n.val(e.name).next().val(e.code), i.addClass("auto-location"), n.on("focus",
                function() {
                    i.removeClass("auto-location")
                }))
            },
            onChecked: function(i, n) {
                i && i.length && (e = i.data("name"), t = i.data("code")),
                $('[name="locationName"]', n).val(e),
                $('[name="location"]', n).val(t)
            }
        })
    },
    renderSkills: function(e) {
        var t, e = e,
        i = "";
        if (Resume.owerSkillData && Resume.owerSkillData.length && (e = Resume.unique(e.concat(Resume.owerSkillData))), e.length) {
            for (t = 0; t < e.length; t++) i += "<li><span>" + e[t] + "</span></li>";
            Resume.tagsPannel.find("ul").html(i)
        } else Resume.tagsPannel.find("ul").html('<div class="empty">输入标签名称，按回车添加</div>')
    },
    getLength: function(e) {
        for (var t = 0,
        e = e,
        i = e.length,
        n = -1,
        s = 0; s < i; s++) n = e.charCodeAt(s),
        t += n >= 0 && n <= 128 || n >= 65248 && n <= 65373 || 12288 == n || 12289 == n || 12290 == n ? .5 : 1;
        return Math.round(t)
    },
    listenSkills: function() {
        Resume.skillsContainer = $(".dropdown-skills"),
        Resume.tagsPannel = Resume.skillsContainer.find(".skills-pannel");
        var e = $(".ipt-tagsinput"),
        t = [];
        e.length && (e.removeAttr("readonly"), "" != e.val() && (t = e.val().split("·"), e.val(t.join(",")), Resume.owerSkillData = t), e.tagsinput({
            tagClass: "",
            maxTags: 3,
            confirmKeys: [13],
            addOnBlur: !1,
            itemText: function(e) {
                return this.itemValue(e)
            },
            typeahead: {
                autoSelect: !1,
                source: function(e) {
                    return Resume.unique(Resume.skillsData.concat(t))
                },
                menu: '<div class="result-selecter"></div>',
                appendTo: $(".dropdown-skills .dropdown-menu"),
                emptyItem: !0,
                afterSelect: function(e) {
                    this.$element.val(""),
                    Resume.tagsPannel.show(),
                    Resume.skillsContainer.addClass("dropdown-menu-open"),
                    Resume.skillsContainer.find(".result-selecter").hide()
                }
            },
            listTags: ".dropdown-skills .skills-pannel, .work-skill-tips",
            showListTags: function(e, t) {
                t.options.maxTags && t.itemsArray.length >= t.options.maxTags && Resume.skillsContainer.removeClass("dropdown-menu-open")
            }
        }), Resume.skillsContainer.find(".dropdown-select .tag").length > 2 && Resume.skillsContainer.find(".bootstrap-tagsinput input").attr("placeholder", "").css("width", "60px"), e.on("itemAdded",
        function(t) {
            var i = !0,
            n = !1,
            s = t.item.replace(/</g, "&lt;").replace(/>/g, "&gt;");
            if (Resume.getLength(s) > 6 && (n = !0), Resume.tagsPannel.find("li").each(function() {
                $(this).text() == s && (i = !1, n = !1)
            }), n && (Resume.skillsContainer.find(".bootstrap-tagsinput .tag:last").find('span[data-role="remove"]').click(), Validate.showError(e, "最多允许输入6个中文字符")), i && !n && (Resume.tagsPannel.find("div.empty").remove(), Resume.tagsPannel.find("ul").append("<li><span>" + s + "</span></li>"), Resume.tagsPannel.show(), Resume.skillsContainer.find(".result-selecter").hide(), Resume.skillsData = Resume.unique(Resume.skillsData), Resume.skillsData.push(s)), !n) {
                return Resume.skillsContainer.find("input").last().val($(this).val().split(",").join("·")),
                Validate.hideError(e),
                void(Resume.skillsContainer.find(".dropdown-select .tag").length > 2 && Resume.skillsContainer.find(".bootstrap-tagsinput input").attr("placeholder", "").css("width", "60px"))
            }
            Resume.skillsContainer.find(".bootstrap-tagsinput input").css("width", "130px")
        }), e.on("itemRemoved",
        function(e) {
            Resume.skillsContainer.find(".result-selecter").hide(),
            Resume.skillsContainer.find("input").last().val($(this).val().split(",").join("·")),
            Resume.skillsContainer.find(".dropdown-select .tag").length || Resume.skillsContainer.find(".bootstrap-tagsinput input").attr("placeholder", "选择或输入技能标签").css("width", "130px"),
            setTimeout(function() {
                Resume.tagsPannel.parent().addClass("dropdown-menu-open")
            },
            0)
        }), Resume.skillsContainer.find(".dropdown-select .bootstrap-tagsinput input").attr("maxLength", "12"), Resume.tagsPannel.on("click", "li",
        function() {
            return ! 1
        }))
    },
    getSkillsData: function(e, t) {
        $.ajax({
            url: "/common/data/positionSkill",
            type: "GET",
            data: {
                positonLv2: e.p2,
                position: e.p1
            },
            dataType: "JSON",
            timeout: 3e4,
            success: function(e) {
                Resume.skillsData = e || [],
                Resume.renderSkills(e),
                $(".dropdown-skills .dropdown-select").css("pointer-events", "auto"),
                t && Resume.skillsContainer.find('.tag span[data-role="remove"]').trigger("click")
            }
        })
    },
    getTag: function(e, t) {
        var i = e,
        n = i.find(".tags-cells"),
        s = "",
        a = "",
        o = (n.closest("dd").find(".ipt"), i.find('input[name="position"]').attr("level2")),
        r = i.find('input[name="position"]').attr("level3");
        o && $.ajax({
            type: "GET",
            url: " /common/data/positionSkill",
            dataType: "JSON",
            data: {
                positonLv2: o,
                position: r
            },
            success: function(e) {
                var i, e = e,
                o = "",
                r = n.closest("dd").find(".ipt").val().split("·"),
                l = [];
                if (e.length > 0) {
                    for (i = 0; i < e.length; i++) o = $.inArray(e[i], r) > -1 ? ' class="selected"': "",
                    a += "<span" + o + ' ka="tag-' + e[i] + '">' + e[i] + "</span>",
                    l.push(e[i]);
                    if (t) for (var c = 0; c < r.length; c++) - 1 == $.inArray(r[c], l) && (Resume.ownerTags.push(r[c]), s += '<span class="selected" ka="tag-' + r[c] + '">' + r[c] + "</span>")
                } else a = '<div class="blank-tag">还未添加标签</div>';
                n.html(s + a)
            },
            error: function(e) {}
        })
    },
    getFormStatus: function(e) {
        $.dialog({
            content: '<div class="tip-text">退出编辑后，更新的内容不会自动保存</div>',
            title: "有内容没有保存，确定退出编辑吗？",
            type: "warning",
            closeText: !0,
            confirmText: "确定",
            cancelText: "取消",
            onConfirm: function(t) {
                e(),
                t.remove()
            },
            error: function() {}
        })
    },
    bookJobData: function(e) {
        var t = this; ($(".resume-item").hasClass("resume-item-open") || $(".resume-item").hasClass("resume-list-wrap-open")) && t.formStatus ? t.getFormStatus(function() {
            $(".resume-item").removeClass("resume-item-open").siblings(".resume-item").removeClass(".resume-item-open").removeClass(".resume-list-wrap-open"),
            e.hasClass("link-add") ? t.getDataShow(e) : t.EditDataForm(e),
            t.formStatus = !1
        }) : e.hasClass("link-add") ? t.getDataShow(e) : t.EditDataForm(e)
    },
    getData: function(e) {
        var t = this; ($(".resume-item").hasClass("resume-item-open") || $(".resume-item").hasClass("resume-list-wrap-open")) && t.formStatus ? t.getFormStatus(function() {
            t.getDataShow(e),
            t.formStatus = !1
        }) : t.getDataShow(e)
    },
    EditDataForm: function(el) {
        var self = this,
        el = el,
        url = el.data("url"),
        nowResumeItem = el.closest("li"),
        formCon = nowResumeItem.find(".edit-form-list"),
        moduleName = nowResumeItem.attr("id");
        $(".resume-item").attr("class", "resume-item"),
        el.closest(".resume-item").addClass("resume-list-wrap-open"),
        nowResumeItem.removeClass("resume-list-open").siblings("li").removeClass("resume-list-open"),
        $.ajax({
            type: "POST",
            url: url,
            dataType: "JSON",
            data: null,
            success: function(result) {
                var result = result;
                if ("string" == typeof result && (result = eval("(" + result + ")")), 1 == result.rescode) {
                    formCon.html(result.html),
                    formCon = nowResumeItem.find(".edit-form-list"),
                    nowResumeItem.addClass("resume-list-open"),
                    formCon.find(".form-btns .btn-back").on("click",
                    function(e) {
                        return el.closest(".resume-item").removeClass("resume-list-wrap-open"),
                        nowResumeItem.removeClass("resume-list-open"),
                        $("html,body").animate({
                            scrollTop: nowResumeItem.offset().top + "px"
                        },
                        500),
                        !1
                    }),
                    formCon.find(".form-btns .btn-delete").unbind("click").on("click",
                    function(e) {
                        Resume.removeData(el, $(this)),
                        e.preventDefault()
                    });
                    var isAdd = !1;
                    if (result.resoper || (isAdd = !0), FormsUI.init(formCon.find("form"), isAdd), Validate.init(formCon.find("form"), isAdd), PlaceholderCheck.init(formCon.find("form")), $(".ipt-workyear").length && $(".ipt-workyear").workstartpicker(), formCon.find(".dropcity").length && (formCon.find(".dropcity .dropdown-select").off("click"), Resume.selectCityInit()), formCon.find(".dropdown-skills").length) {
                        Resume.listenSkills();
                        var $position = formCon.find('input[name="position"]'),
                        p2 = $position.attr("level2"),
                        p1 = $position.attr("level3");
                        p1 && p2 && Resume.getSkillsData({
                            p1: p1,
                            p2: p2
                        });
                        var $position = formCon.find('input[name="position"]');
                        $position.val() || (formCon.find(".dropdown-skills .dropdown-select").css("pointer-events", "none"), Resume.skillsContainer.on("click",
                        function() {
                            $position.val() || Validate.showError(formCon.find('input[name="position"]'), "请先选择职位类型")
                        }))
                    }
                    formCon.find(".dropcompany").length && Resume.selectCompanyInit(function(e) {
                        Resume.getCompanyIndustry(e, formCon)
                    }),
                    formCon.find(".dropschool").length && (Resume.selectSchoolInit(), Resume.selectMajorInit()),
                    formCon.find(".serial-toolbar").length && $(".serial-area", formCon).textarealist(),
                    "resume-userinfo" == moduleName && Resume.userinfoEvtInit(formCon),
                    formCon.find("form").find("input,textarea").on("focus",
                    function() {
                        self.formStatus = !0
                    })
                } else Resume.showError(result.resmsg);
                $("html,body").animate({
                    scrollTop: formCon.offset().top + "px"
                },
                500),
                $(".ipt-workyear").length && $(".ipt-workyear").workstartpicker()
            },
            error: function(e) {
                Resume.showError()
            }
        })
    },
    getDataShow: function(el) {
        var self = this,
        el = el,
        url = el.data("url"),
        nowResumeItem = el.closest(".resume-item"),
        formCon = nowResumeItem.find(".item-form"),
        moduleName = nowResumeItem.attr("id");
        $(".resume-item").attr("class", "resume-item"),
        $.ajax({
            type: "POST",
            url: url,
            dataType: "JSON",
            data: null,
            success: function(result) {
                var result = result;
                if ("string" == typeof result && (result = eval("(" + result + ")")), 1 == result.rescode) {
                    formCon.html(result.html),
                    nowResumeItem.addClass("resume-item-open"),
                    formCon.find(".form-btns .btn-back").on("click",
                    function() {
                        nowResumeItem.removeClass("resume-item-open"),
                        $("html,body").animate({
                            scrollTop: nowResumeItem.offset().top + "px"
                        },
                        500)
                    }),
                    formCon.find(".form-btns .btn-delete").unbind("click").on("click",
                    function(e) {
                        Resume.removeData(el, $(this)),
                        e.preventDefault()
                    });
                    var isAdd = !1;
                    if (result.resoper || (isAdd = !0), FormsUI.init(formCon.find("form"), isAdd), Validate.init(formCon.find("form"), isAdd), PlaceholderCheck.init(formCon.find("form")), $(".ipt-workyear").length && $(".ipt-workyear").workstartpicker(), formCon.find(".dropcity").length && (formCon.find(".dropcity .dropdown-select").off("click"), Resume.selectCityInit()), formCon.find(".dropdown-skills").length) {
                        Resume.listenSkills();
                        var $position = formCon.find('input[name="position"]'),
                        p2 = $position.attr("level2"),
                        p1 = $position.attr("level3");
                        p1 && p2 && Resume.getSkillsData({
                            p1: p1,
                            p2: p2
                        });
                        var $position = formCon.find('input[name="position"]');
                        $position.val() || (formCon.find(".dropdown-skills .dropdown-select").css("pointer-events", "none"), Resume.skillsContainer.on("click",
                        function() {
                            $position.val() || Validate.showError(formCon.find('input[name="position"]'), "请先选择职位类型")
                        }))
                    }
                    formCon.find(".dropcompany").length && Resume.selectCompanyInit(function(e) {
                        Resume.getCompanyIndustry(e, formCon)
                    }),
                    formCon.find(".dropschool").length && (Resume.selectSchoolInit(), Resume.selectMajorInit()),
                    formCon.find(".serial-toolbar").length && $(".serial-area", formCon).textarealist(),
                    "resume-userinfo" == moduleName && Resume.userinfoEvtInit(formCon),
                    formCon.find("form").find("input,textarea").on("focus",
                    function() {
                        self.formStatus = !0
                    })
                } else Resume.showError(result.resmsg);
                $("html,body").animate({
                    scrollTop: formCon.offset().top + "px"
                },
                500),
                $(".ipt-workyear").length && $(".ipt-workyear").workstartpicker()
            },
            error: function(e) {
                Resume.showError()
            }
        })
    },
    userinfoEvtInit: function(e) {
        $("dl", e).on("mouseenter",
        function() {
            $(this).find(".tip-text-hover").show()
        }).on("mouseleave",
        function() {
            $(this).find(".tip-text-hover").hide()
        }).on("click", ".name-tip li",
        function() {
            $(this).closest(".tip-text-hover").hide()
        }).on("click", ".radio-square",
        function() {
            if (!$(this).hasClass("ipt-disabled")) {
                var t = $("#resume-userinfo .name-tip ul li:last strong"),
                i = t.html(),
                n = i.substr(0, i.length - 2) + (1 == $(this).data("val") ? "先生": "女士");
                t.html(n),
                1 == $(".name-tip input:checked").val() && $('input[name="name"]', e).prev().val(n)
            }
        }).on("change", ".name-tip input",
        function() {
            var e = $(this).parent().find("strong").text();
            $(this).closest("dd").find(".ipt:first").val(e)
        }),
        $('input[name="name"]', e).prev().on("change",
        function() {
            $(this).next().val($(this).val())
        })
    },
    postData: function(form, isAdd) {
        var formEl = form,
        url = formEl.attr("action"),
        primaryWrap = formEl.closest(".resume-item"),
        primaryCon = primaryWrap.find(".item-primary"),
        primaryModule = primaryWrap.attr("id"),
        submitBtn = formEl.find("button[type=submit]");
        formEl.find(".show-prefix-today").length && (formEl.find('input[name="endDate"]').val(""), formEl.find('input[name="now"]').val("1"));
        var subData = formEl.serialize();
        $("input[name=birthday]").length && $("input[name=birthday]").is(":disabled") && (subData += "&birthday=" + $("input[name=birthday]").val()),
        submitBtn.addClass("btn-disabled"),
        $.ajax({
            type: "POST",
            url: url,
            dataType: "JSON",
            data: subData,
            success: function(result) {
                var result = result,
                str = "",
                resultId = "",
                itemEl;
                if ("string" == typeof result && (result = eval("(" + result + ")")), result.forceFace && (alert("您的账号当前处于不可使用状态，请登录BOSS直聘手机APP查看详情"), window.location.href = "/logout/"), 1 == result.rescode) {
                    if (primaryWrap.removeClass("resume-item-open"), str = result.html, resultId = $(str).attr("id"), "resume-userinfo" == primaryModule) if (primaryCon.find(".userinfo-con").html(str), result.isAudit) $.dialog({
                        content: '<div class="tip-text">修改已提交审核，审核通过后，将更新您的信息</div>',
                        title: "温馨提示",
                        closeText: !0,
                        type: "warning",
                        confirmText: "关闭",
                        cancelText: "",
                        onConfirm: function(e) {
                            e.remove()
                        }
                    });
                    else {
                        var $resumeHistory = $("#resume-history");
                        "0" == formEl.find('input[name="startWorkYearCode"]').val() ? ($resumeHistory.find("h3.title").html("实习经历").next().attr("data-role", "practice"), $resumeHistory.find(".link-add").html('<i class="fz-resume fz-add-2"></i>添加实习经历'), $resumeHistory.find(".link-delete").show()) : ($resumeHistory.find("h3.title").html("工作经历").next().attr("data-role", ""), $resumeHistory.find(".link-add").html('<i class="fz-resume fz-add-2"></i>添加工作经历'), $resumeHistory.find(".history-project li").length < 2 && $resumeHistory.find(".link-delete").hide())
                    }
                    if ("resume-summary" == primaryModule && (primaryCon.find(".text p").remove(), primaryCon.find(".text").prepend(str)), "resume-purpose" == primaryModule && (primaryWrap.find('li[id="' + resultId + '"]').length ? primaryWrap.find('li[id="' + resultId + '"]').after(str).remove() : (primaryCon.find(".purpose-list").append(str), primaryWrap.find(".purpose-list li").length > 1 && primaryWrap.find(".purpose-list .link-delete").show(), primaryWrap.find(".purpose-list li").length > 2 && primaryWrap.find(".link-add").hide())), "resume-history" == primaryModule || "resume-project" == primaryModule || "resume-education" == primaryModule) {
                        var limitLength = 0;
                        "resume-history" == primaryModule && (limitLength = 10),
                        "resume-project" == primaryModule && (limitLength = 15),
                        "resume-education" == primaryModule && (limitLength = 10),
                        isAdd ? (Resume.rankHistoryItem(primaryCon.find(".history-project"), result.html), (primaryCon.find(".history-project li").length > 1 || "practice" == primaryCon.find(".history-project").data("role")) && primaryWrap.find(".history-project .link-delete").show(), primaryCon.find(".history-project li").length > limitLength - 1 && primaryCon.find(".link-add").hide()) : (primaryCon.find('li[id="' + resultId + '"]').remove(), Resume.rankHistoryItem(primaryCon.find(".history-project"), result.html))
                    }
                    "resume-social" == primaryModule && (primaryCon.find('li[id="' + resultId + '"]').length ? primaryCon.find('li[id="' + resultId + '"]').after(str).remove() : (primaryCon.find(".social-account").append(str), primaryCon.find("ul li").length > 2 && primaryCon.find(".link-add").hide())),
                    $("html,body").animate({
                        scrollTop: primaryWrap.offset().top + "px"
                    },
                    500)
                } else result.bizcode ? 1156 == result.bizcode ? Resume.showError("工作经历数量已达上限，可删除部分经历再添加") : 1157 == result.bizcode ? Resume.showError("教育经历数量已达上限，可删除部分经历再添加") : 1158 == result.bizcode && Resume.showError("项目经验数量已达上限，可删除部分经历再添加") : Resume.showError(result.resmsg);
                submitBtn.removeClass("btn-disabled"),
                Resume.canSubmit = !0
            },
            error: function() {
                submitBtn.removeClass("btn-disabled"),
                Resume.canSubmit = !0,
                Resume.showError()
            }
        }),
        Resume.canSubmit = !1
    },
    transformPeriod: function(e) {
        return "至今" == e[1] ? e[1] = 9999 : "1990以前" == e[1] && (e[1] = 1e3),
        "1990以前" == e[0] && (e[0] = 1e3),
        e
    },
    rankHistoryItem: function(e, t) {
        var i = [];
        e.find(".period").each(function(e, t) {
            if (t.innerHTML) {
                var n = t.innerHTML.split("-");
                i.push(Resume.transformPeriod(n))
            }
        });
        var n = $(t).find(".period").html();
        n && (n = n.split("-"), n = Resume.transformPeriod(n));
        for (var s = !0,
        a = 0; a < i.length; a++) {
            if (n[1] > i[a][1]) {
                e.find("li").eq(a).before(t),
                s = !1;
                break
            }
            if (n[1] == i[a][1] && n[0] > i[a][0]) {
                e.find("li").eq(a).before(t),
                s = !1;
                break
            }
        }
        s && e.append(t)
    },
    removeData: function(el, btn) {
        var el = el,
        url = el.attr("data-url"),
        primaryWrap = el.closest(".resume-item"),
        primaryCon = primaryWrap.find(".item-primary"),
        primaryModule = primaryWrap.attr("id"),
        formCon = el.closest(".resume-item").find(".item-form");
        btn && (url = btn.attr("data-url")),
        $.dialog({
            content: '<div class="tip-text">删除后不可恢复，确认删除吗？</div>',
            title: "温馨提示",
            type: "warning",
            closeText: !0,
            onConfirm: function(wrap) {
                var _self = this;
                return $.ajax({
                    type: "POST",
                    url: url,
                    dataType: "JSON",
                    data: {},
                    success: function(result) {
                        el.closest(".item-primary").find(".link-add").show();
                        var result = result;
                        if ("string" == typeof result && (result = eval("(" + result + ")")), result.rescode) {
                            var $ul = el.closest(".history-project").length ? el.closest(".history-project") : el.closest(".purpose-list");
                            el.closest("li").remove(),
                            el.closest(".resume-item").removeClass("resume-item-open"),
                            "resume-purpose" != primaryModule && "resume-history" != primaryModule && "resume-education" != primaryModule || "practice" != $ul.data("role") && 1 == $ul.find("li").length && $ul.find("li .link-delete").hide(),
                            $("html,body").animate({
                                scrollTop: primaryWrap.closest(".resume-item").offset().top + "px"
                            },
                            500)
                        } else Resume.showError(result.resmsg);
                        wrap.remove()
                    }
                }),
                !1
            },
            error: function() {
                Resume.showError()
            }
        })
    },
    showError: function(e) {
        $.dialog({
            content: '<div class="tip-text">' + (e || "服务器错误，请稍后再试") + "</div>",
            title: "温馨提示",
            closeText: !0,
            confirmText: "确定",
            cancelText: "",
            type: "error"
        })
    },
    resumeFresh: function(e) {
        function t(e) {
            0 != $(".resume-refresh").length && $(".resume-refresh").remove();
            var t = '<ul class="resume-refresh"> <li class="refresh-lines"><h4>简历活跃度</h4><div class="resume-refresh-tip"><i></i><p>刷新简历提升活跃度，提升活跃度<br>可提高简历排名，每天只能刷新1次</p></div><div class="resume-refresh-loading"></a><i></i><p>加载中</p></div></ul>';
            "user" == this.type ? $("#async-sider").append(t) : $(".deliver-sider").append(t),
            c(e,
            function(e, t) {
                var i = '<li class="refresh-lines"><div class="svg-sub"><span class="svg-my">我的</span><span class="svg-other">同行</span></div><h4>简历活跃度</h4><div class="resume-refresh-tip"><i></i><p>刷新简历提升活跃度，提升活跃度<br>可提高简历排名，每天只能刷新1次</p></div>' + t;
                "user" == this.type ? $("#async-sider .resume-refresh").html(i) : $(".deliver-sider .resume-refresh").html(i)
            })
        }
        function i() {
            return "user" == this.type ? '<li class="refresh-test"><h4>五维职业性格测评</h4><i class="refresh-test-img"></i><p>专业分析职场优势</p><a class="btn refresh-btn-test"  target="_blank"  href="/activity/personality/index.html?ka=rcmd-list-personality">立即测试</a></li>': ""
        }
        function n(e) {
            var t = this,
            i = (t.baseLine, e.data.resumeActiveness),
            n = i.recentActiveness,
            s = n,
            a = i.similarGeekRecentActiveness,
            l = s.concat(a),
            c = i.date8Arr,
            d = 0 == Math.max.apply({},
            l) ? 100 : Math.max.apply({},
            l);
            t.baseLine = t.highBase / d;
            for (var u = [], p = [], h = n.length / 3 - 1; h >= 0; h--) {
                u = [];
                for (var f = 2; f >= 0; f--) u.push({
                    xAxis: o(c[3 * h + f]),
                    series: [r("", n, h, f), r("", a, h, f)],
                    yAxis: [r(t.baseLine, n, h, f), r(t.baseLine, a, h, f)]
                });
                p.push(u)
            }
            return p
        }
        function s(e) {
            var t = "",
            i = "",
            s = n(e),
            t = "";
            return $.each(s,
            function(e, n) {
                i = "",
                9 == e && (i = "active"),
                t += '                <li class="' + i + '"><svg class="refesh-svg"  width="168" height="130"><g><line x1="8" y1="104" x2="140" y2="104" class="x-axis"/><line x1="8" y1="84" x2="140" y2="84" class="x-axis"/><line x1="8" y1="64" x2="140" y2="64" class="x-axis"/><line x1="8" y1="44" x2="140" y2="44" class="x-axis"/><line x1="8" y1="24" x2="140" y2="24" class="x-axis"/></g><g></g>' + a(e, n) + "</svg></li>"
            }),
            t
        }
        function a(e, t) {
            var i = "",
            n = "";
            this.xAxisDot = this.xAxisWidth / t.length;
            var s, a = "",
            o = "",
            r = "",
            l = "",
            c = [[], []];
            return $.each(t,
            function(t, s) {
                n = "",
                a = parseInt(xAxisDot * t + 20),
                2 == t && (r = "dn"),
                9 == e && (2 == t ? (s.xAxis = "今天", n = "degree", l = '<text class="today-dots ' + n + ' dn" x="137" y="' + s.yAxis[1] + '" > +' + s.series[0] + "</text>") : 1 == t && (s.xAxis = "昨天")),
                o += '<g class="bg-x' + t + ' " transform="translate(5,20)"><line x1="' + a + '" y2="84"  x2="' + a + '" y2="84" class="bg-axis" data-value="' + t + '"/></g>',
                i += '<g class=" refresh-x  x' + t + ' " data-value="' + t + '" transform="translate(5,20)"><text x="' + (a - 10) + '" y="104" class="fresh-day" width="30" >' + s.xAxis + '</text><text class="similar-series" x="' + a + '" y="' + (s.yAxis[1] - 5) + '" >' + s.series[1] + '</text><text class="my-series ' + r + " " + n + '" x="' + a + '" y="' + (s.yAxis[0] - 5) + '" >' + s.series[0] + '</text><circle class="similar-yaxis" cx="' + a + '" cy=" ' + s.yAxis[1] + '" r="2"/><circle class="my-yaxis ' + n + '" cx="' + a + '" cy=" ' + s.yAxis[0] + '" r="2"/></g>',
                c[0].push(s.yAxis[1]),
                c[1].push(s.yAxis[0])
            }),
            $.each(c,
            function(t, i) {
                s = 9 == e && 1 == t ? "degree": "",
                c += '<g  transform="translate(5,20)"><polyline  class="refesh-line  refesh-line' + t + " " + s + '"   points="20,' + Math.abs(i[0]) + " 70," + Math.abs(i[1]) + " 120," + Math.abs(i[2]) + '" fill="none"/></g>'
            }),
            o + l + c + i
        }
        function o(e) {
            return parseInt(e.toString().substring(6, 8)) + "日"
        }
        function r(e, t, i, n) {
            return "" == e ? t[3 * i + n] : parseInt(100 - e * t[3 * i + n] - 16)
        }
        function l() {
            var e = this,
            t = e.resData,
            i = (e.freshBtn, t.data.resumeActiveness),
            n = i.recentActiveness;
            if (0 == i.leftCount && 0 == i.refreshed) {
                p();
                f({
                    action: "refresh-resume-pop-up",
                    p: _PAGE.uid,
                    p2: 1
                })
            } else {
                var s = {
                    from: "resume" == this.type ? 2 : 1
                };
                1 == !i.free && i.leftCount > 0 && $.extend(s, {
                    userItemId: i.encryptUserItemId
                }),
                u("/geek/item/resumerefresh/useitem.json", "post", s).then(function(t) {
                    if (1 == t.rescode) {
                        d();
                        var i = $(".refresh-free-count").find("span"),
                        s = parseInt(i.text()),
                        a = s >= 1 ? s - 1 : s;
                        i.html(a);
                        var o = e.baseLine,
                        r = t.data,
                        l = 100 - o * n[2] - 16,
                        c = 100 - o * n[1] - 16,
                        u = r - n[0];
                        e.refeshBase = 100 - o * r - 16,
                        e.refeshBase < 0 ? e.refeshBase = 0 : e.refeshBase > 84 && (e.refeshBase = 84),
                        e.refeshBase = e.refeshBase >= 0 ? e.refeshBase: 0,
                        $(".resume-refresh .degree").attr("y", e.refeshBase + "px").attr("cy", e.refeshBase + "px").attr("y1", e.refeshBase + 5 + "px").attr("points", "20," + l + " 70," + c + " 120," + e.refeshBase).text(r),
                        $(".resume-refresh .my-series.degree").attr("y", e.refeshBase - 1 + "px").text(r),
                        $(".resume-refresh .today-dots.degree").attr("y", e.refeshBase + 13 + "px").html("+" + u).show(300).hide(3e3),
                        $(".resume-refresh .refresh-btn").removeClass("refresh-btn").addClass("refresh-bt-grey")
                    } else h(t)
                }).fail(function(e) {
                    h(e)
                })
            }
        }
        function c(e, t) {
            var n = this;
            u("/geek/item/resumerefresh/activeness.json", "get", {}).then(function(a) {
                if (n.resData = a, a.data.resumeActiveness) {
                    if (resumeActiveness = a.data.resumeActiveness, list = resumeActiveness.recentActiveness, 0 == resumeActiveness.refreshed) var o = '<a class="btn refresh-btn" href="javascript:;">刷新简历</a>';
                    else if (resumeActiveness.refreshDays > 1) var o = '<a class="btn refresh-bt-grey" href="javascript:;">已连续刷新' + resumeActiveness.refreshDays + " 天</a>";
                    else var o = '<a class="btn refresh-bt-grey" href="javascript:;">今日已刷新</a>';
                    var r = 0 == resumeActiveness.free ? "剩余次数": "剩余免费次数",
                    c = 0;
                    1 == resumeActiveness.free && 2 == resumeActiveness.leftCount && (c = 1);
                    var u = '<div class="resume-refresh-hwslider"></a><ul>' + s(a) + '</ul> <a href="javascript:;"  class="arrow-prev"></a><a href="javascript:;"  class="arrow-next"></a></div>' + o + '<p class="refresh-text"><span class="refresh-free-count"><span>' + resumeActiveness.leftCount + "</span>次</span><span>" + r + "</span></p></li>" + i();
                    t(c, u),
                    1 == e && l();
                    var p = $(".resume-refresh");
                    p.on("click", ".refresh-btn",
                    function() {
                        n.freshBtn = $(this),
                        l()
                    });
                    var h = $(".refresh-x");
                    $(".refresh-x, .bg-axis").hover(function() {
                        $(".bg-x" + $(this).attr("data-value")).find(".bg-axis").addClass("axis-hover"),
                        $(".refresh-x.x" + $(this).attr("data-value")).addClass("axis-active"),
                        h.find(".dn").hide()
                    },
                    function() {
                        $(".bg-axis").removeClass("axis-hover"),
                        h.removeClass("axis-active").find(".dn").show()
                    }),
                    $(".similar-yaxis").hover(function() {
                        h.addClass("my-series-grey")
                    },
                    function() {
                        h.removeClass("my-series-grey")
                    }),
                    p.find(".my-yaxis").hover(function() {
                        $(this).attr("r", 3)
                    },
                    function() {
                        $(this).attr("r", 2)
                    }),
                    d()
                }
            })
        }
        function d() {
            var e = this,
            t = $(".resume-refresh-hwslider"),
            i = $(".resume-refresh-hwslider .arrow-prev"),
            n = $(".resume-refresh-hwslider .arrow-next"),
            s = t.children("ul"),
            a = s.children("li"),
            o = a.length,
            r = 10,
            l = !0,
            c = function(e, i) {
                if (!l) return ! 1;
                l = !1;
                var n = t.width();
                "prev" == i && (n *= -1),
                s.children(".active").stop().animate({
                    left: -n
                },
                400,
                function() {
                    $(this).removeClass("active")
                }),
                a.eq(e - 1).css("left", n + "px").addClass("active").stop().animate({
                    left: 0
                },
                400,
                function() {
                    l = !0
                })
            };
            10 == r && n.hide(300),
            10 != e.hwIndex && (c(10, "next"), e.hwIndex = 10),
            n.on("click",
            function(t) {
                t.preventDefault(),
                i.show(300),
                l && (r >= o ? r = o: (r += 1, e.hwIndex = r, c(r, "next"), r == o ? n.hide(300) : n.show(300)))
            }),
            i.on("click",
            function(t) {
                t.preventDefault(),
                n.show(300),
                l && (1 == r ? r = 1 : (r -= 1, e.hwIndex = r, c(r, "prev"), 1 == r ? i.hide(300) : i.show(300)))
            })
        }
        function u(e, t, i) {
            var n = $.Deferred();
            return $.ajax({
                type: t,
                url: e,
                dataType: "JSON",
                data: i,
                success: function(e) {
                    e.rescode ? n.resolve(e) : $.toast({
                        content: e.resmsg,
                        type: "error"
                    })
                },
                error: function() {}
            }),
            n
        }
        function p() {
            u("/business/item/sellunit.json", "get", {
                itemType: "b5799fd5b0d1ce3b1XU~"
            }).then(function(e) {
                for (var t = e.itemSellUnit,
                i = t.itemSellItemList,
                n = "",
                s = 0; s < i.length; s++) {
                    var a = "",
                    o = "",
                    r = "",
                    l = i.length - 1;
                    a = 0 == i[s].decreaseAmount ? "": "（节省¥" + i[s].decreaseAmount + "）",
                    s == l && (o = "item-hot selected"),
                    r = i[l].beanAmount - e.beanCount > 0 ? i[l].beanAmount - e.beanCount: 0,
                    n += '<li data-id="' + i[s].encryptBeanItemId + '" class="' + o + '" data-money ="' + i[s].beanAmount + '">                                <div class="pull-right"><span class="text-orange">￥' + i[s].beanAmount + "</span></div>                                <p>" + i[s].specDesc + '<span class="text-gray">' + a + "</span></p>                             </li>"
                }
                return '<div class="title">                                    <img src="' + t.itemIcon + '">                                    <p>' + t.itemName + '</p>                                    <p class="sub-title">每日最多使用1次</p>                                </div>                                <ul class="purchase-container">' + n + ' </ul>                                <div class="sells-pay">                                    <p class="pull-left"><span class="prop-sells-total">金额：¥<span>' + i[l].beanAmount + '</span></span><span class="prop-sells-banlance">余额：¥<span>' + e.beanCount + '</span></span></p>                                    <p class="pull-right">需要支付：<em class="text-orange prop-sells-pay">金额：¥<span>' + r + "</span></em></p>                                </div>"
            }).then(function(e) {
                $.dialog({
                    title: "",
                    wrapClass: "layer-prop-purchase",
                    content: e,
                    confirmText: "立即支付",
                    cancelText: !1,
                    onOpen: function(e) {
                        e.find(".purchase-container li").on("click",
                        function() {
                            var t = e.find(".prop-sells-total span"),
                            i = e.find(".prop-sells-banlance span"),
                            n = e.find(".prop-sells-pay span");
                            $(this).siblings().removeClass("selected"),
                            $(this).addClass("selected"),
                            t.text($(this).attr("data-money")),
                            t.text() - i.text() > 0 ? n.text(t.text() - i.text()) : n.text(0)
                        })
                    },
                    onConfirm: function(e) {
                        var i = function(e) {
                            Payment.success({
                                article: "购买成功",
                                confirmText: "立即刷新",
                                cancelText: "稍后刷新",
                                text: '<p class="resume-pay-success">使用说明：1.每天最多可刷新1次，提升简历排名；<br> 2.剩余次数，可在简历活跃度页面查看</p>',
                                confirm: function(e) {
                                    "close" == e ? window.location.reload() : t(1);
                                    try {
                                        _T.sendEvent("use_immediately_purchase_success")
                                    } catch(e) {}
                                }
                            })
                        },
                        n = e.find(".purchase-container li.selected").attr("data-id"),
                        s = {
                            url: "/geek/item/pay.json",
                            prePayUrl: "/geek/item/prepay.json",
                            data: {
                                itemId: n
                            },
                            itemId: n,
                            success: i
                        },
                        a = {
                            success: i,
                            buy: function(e) {
                                f({
                                    action: "confirm-payment",
                                    p: parseInt(e.payType) - 1,
                                    p2: _PAGE.uid
                                })
                            }
                        };
                        setTimeout(function() {
                            Payment.purchase(s, a),
                            e.remove()
                        },
                        100),
                        f({
                            action: "payment-immediately",
                            p: n,
                            p2: _PAGE.uid,
                            p3: e.find(".purchase-container li.selected").index()
                        })
                    }
                })
            })
        }
        function h(e) {
            var t = "立即完善",
            i = "稍后完善";
            4 == e.rescode ? (t = "我知道啦", i = !1) : 3 == e.rescode && (t = "取消隐藏", i = "稍后处理"),
            $.dialog({
                title: "暂时无法刷新简历",
                wrapClass: "dialog-icons-default",
                content: '<div class="tip-text">' + e.resmsg + "</div>",
                confirmText: t,
                cancelText: i,
                type: "warning",
                onConfirm: function(t) {
                    4 != e.rescode ? window.location.href = e.jumpUrl: t.remove()
                }
            }),
            f({
                action: "refresh-resume-pop-up",
                p: _PAGE.uid,
                p2: e.rescode
            })
        }
        function f(e) {
            var t = $.extend({},
            e);
            $.ajax({
                method: "post",
                url: "/actionLog/common.json",
                data: {
                    ba: JSON.stringify(t)
                },
                cache: !1,
                success: function(e) {},
                error: function() {}
            })
        } !
        function(e) {
            this.baseLine = .074,
            this.highBase = 64,
            this.refeshBase = 10,
            this.type = e,
            this.resData = {},
            this.freshBtn = "",
            this.hwIndex = 10,
            this.xAxisWidth = 150,
            this.xAxisDot = 0,
            t(0)
        } (e)
    }
},
Attachment = {
    init: function(e) {
        var t = $(".position-manage").length,
        i = $(".user-center").length;
        Attachment.previewErrorNum = 0,
        Attachment.attachmentList = {},
        t && Attachment.getResumeSider(),
        i && Attachment.getUcenterSider(),
        Attachment.getAttachmentList()
    },
    initEvents: function(e) {
        var t = e;
        t.find("#fileupload-trigger").on("click",
        function() {
            1 == Attachment.attachmentList.resumeCount && Attachment.attachmentList.addResumeTip ? Attachment.showVersionDialog() : Attachment.showUploadWarning()
        });
        var i = null;
        t.find(".annex-list li").on("mouseenter",
        function() {
            i && clearTimeout(i),
            t.find(".annex-card").stop(!0).hide(),
            $(this).find(".annex-card").stop(!0).show()
        }),
        t.find(".annex-list").on("mouseleave",
        function() {
            i = setTimeout(function() {
                t.find(".annex-card").stop(!0).hide()
            },
            500)
        }),
        t.find(".annex-card").on("click", ".del-btn",
        function() {
            Attachment.deleteResume($(this))
        }),
        t.find(".annex-card").on("click", ".rename-btn",
        function() {
            Attachment.renameResume($(this))
        }),
        t.find(".annex-card").on("click", ".load-btn",
        function() {
            var e = $(this).parent().parent().parent().index() + 1;
            try {
                _T.sendEvent("download_resume_" + e)
            } catch(e) {}
        })
    },
    getResumeSider: function(e) {
        var t = $(".sider");
        $.ajax({
            url: "/geek/resume/sidebar.json",
            type: "get",
            success: function(e) {
                1 == e.rescode ? (t.html(e.html), Attachment.initEvents(t)) : t.html('<p class="gray">数据加载出错</p>'),
                Resume.resumeFresh("resume")
            },
            error: function() {
                t.html('<p class="gray">数据加载出错</p>')
            }
        })
    },
    getUcenterSider: function() {
        var e = $(".sider");
        $.ajax({
            type: "GET",
            url: "/geek/infodata.json",
            data: null,
            dataType: "json",
            success: function(t) {
                1 == t.rescode ? (e.html(t.html), Attachment.initMember(e), Attachment.initEvents(e)) : e.html('<p class="gray">数据加载出错</p>'),
                Resume.resumeFresh("user")
            },
            error: function() {
                e.html('<p class="gray">数据加载出错</p>')
            }
        })
    },
    initMember: function(e) {
        var t = e;
        t.find(".userinfo-box  .dropdown-select").on("click",
        function() {
            $(this).toggleClass("dropdown-select-open")
        }),
        $(document).on("click",
        function(e) {
            $(e.target).closest(".now-state").length || t.find(".userinfo-box  .dropdown-select").removeClass("dropdown-select-open")
        }),
        t.find(".filter-select-box .dropdown-select").on("click", "a",
        function(e) {
            e.stopPropagation()
        }),
        t.find(".sider-recommend li").eq(0).find(".red-dot").length ? $(".chat-history .job-tab a").eq(0).attr("ka", "personal_top_added_1") : $(".chat-history .job-tab a").eq(0).attr("ka", "personal_top_added_0"),
        t.find(".sider-recommend li").eq(1).find(".red-dot").length ? $(".chat-history .job-tab a").eq(1).attr("ka", "personal_top_sawme_1") : $(".chat-history .job-tab a").eq(1).attr("ka", "personal_top_sawme_0"),
        t.find(".now-state .dropdown-menu").on("click", "li",
        function() {
            var e = $(this).attr("data-val");
            t.find(".now-state input").val($(this).text()),
            Attachment.changeApplyStatus(e, t)
        })
    },
    changeApplyStatus: function(e, t) {
        $.ajax({
            type: "POST",
            url: "/geek/saveApplyStatus.json",
            data: {
                applyStatus: e
            },
            dataType: "json",
            success: function(i) {
                1 == i.rescode && (t.find(".now-state input").attr("ka", "base_info_status_from_" + e), $.toast({
                    content: "修改成功",
                    type: "success"
                }))
            }
        })
    },
    getAttachmentList: function(e) {
        $.ajax({
            type: "GET",
            url: "/geek/attresume/checkbox.json",
            dataType: "json",
            success: function(t) {
                1 == t.rescode && t.data && (Attachment.attachmentList = t.data),
                e && e(t)
            }
        })
    },
    showVersionDialog: function(e) {
        $.dialog({
            content: '<div class="tip-text"><p>系统检测到您的BOSS直聘APP版本过低，无法使用多附件简历功能。</p><p>默认附件简历为最新上传的简历，请及时升级APP版本。</p></div>',
            title: "APP最新版本提供多份附件简历功能",
            type: "warning",
            closeText: !0,
            cancelText: "",
            confirmText: "继续上传",
            onConfirm: function(e) {
                e.remove(),
                Attachment.showUploadWarning()
            }
        })
    },
    getResumeAccept: function() {
        var e = "image/jpg,image/jpeg,image/png,application/vnd.ms-powerpoint,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.presentationml.presentation";
        return UA.indexOf("Windows NT 6.1") > -1 && (e = "*"),
        e
    },
    showUploadWarning: function(e) {
        var t = {
            title: "",
            confirmText: "上传附件简历",
            cancelText: "",
            callbackChat: null,
            callbackUpload: null
        },
        e = $.extend(t, e),
        i = "",
        n = "upload-dialog-box",
        s = "dialog_cancel";
        e.cancelText && ("先聊聊" == e.cancelText && (s = "dialog_upload_deliver_chat"), i = '<button type="button" class="btn btn-outline" ka="' + s + '">' + e.cancelText + "</button>", n = "upload-dialog-deliver"),
        $.dialog({
            content: '<div class="' + n + '"><p class="gray">支持DOC、DOCX、PDF、JPG、PNG格式附件</p><p>文件大小不超过10M</p><div class="btns">' + i + '<a href="javascript:;" class="btn btn-file">' + e.confirmText + '<input id="fileupload" type="file" name="file" ka="user-resume-upload-file" title="" accept="' + Attachment.getResumeAccept() + '"></a></div></div>',
            title: e.title,
            closeText: !0,
            confirmText: "",
            cancelText: "",
            wrapClass: "dialog-primary-default",
            onOpen: function(t) {
                t.find(".btn-file").on("click",
                function() {
                    Attachment.bindUploadEvent($(this), t, e)
                }),
                t.find(".btn-outline").on("click",
                function() {
                    e && e.callbackChat ? e.callbackChat() : t.remove()
                })
            }
        })
    },
    bindUploadEvent: function(el, wrap, params) {
        var fileInfo = {},
        reg = /(\.|\/)(ppt|pptx|doc|docx|pdf|png|jpg|jpeg)$/i;
        Attachment.previewErrorNum = 0,
        el.fileupload({
            method: "POST",
            url: "/geek/attresume/upload.json",
            dataType: "text",
            acceptFileTypes: reg,
            maxChunkSize: 1e7,
            formData: {
                token: window.top._PAGE.token ? window.top._PAGE.token.split("|")[0] : ""
            },
            add: function(e, t) {
                var i = t.files[0],
                n = i.name,
                s = i.size;
                if (fileInfo = i, reg.test(n)) if (s > 1e7) {
                    Attachment.fileUploadError("上传文件超过10兆，请重新选择");
                    try {
                        _T.sendEvent("user_resume_size_limit")
                    } catch(e) {}
                } else t.submit(),
                Attachment.showResumeStatusDialog("added", fileInfo);
                else {
                    Attachment.fileUploadError("选择的文件无效，请重新选择");
                    try {
                        _T.sendEvent("user_resume_size_notsupport")
                    } catch(e) {}
                }
            },
            done: function(e, data) {
                var result = data.result;
                if ("string" == typeof result && (result = eval("(" + result + ")")), 1 == result.rescode) Attachment.preLoadResume($.extend(result, fileInfo), params);
                else {
                    Attachment.showResumeStatusDialog("fail", fileInfo);
                    try {
                        _T.sendEvent("user_resume_upload_error")
                    } catch(e) {}
                }
            },
            fail: function(e, t) {
                Attachment.showResumeStatusDialog("fail", fileInfo);
                try {
                    _T.sendEvent("user_resume_upload_error")
                } catch(e) {}
            }
        })
    },
    preLoadResume: function(e, t) {
        if (e.previewUrl) {
            var i = new Image;
            i.src = "/resume/pic4Owner/" + e.previewUrl,
            i.onload = function() {
                Attachment.showResumeStatusDialog("success", e, t),
                Attachment.consoleSuccessLog(e)
            },
            i.onerror = function() {
                Attachment.previewErrorNum++,
                Attachment.previewErrorNum < 3 ? Attachment.preLoadResume(e) : Attachment.showResumeStatusDialog("preview", e),
                Attachment.consoleLog(e)
            }
        }
    },
    showResumeStatusDialog: function(e, t, i) {
        var n = Attachment.getResumeTemplate(e, t);
        $.dialog({
            title: "",
            content: n,
            closeText: !0,
            confirmText: "",
            cancelText: "",
            wrapClass: "dialog-layer-full dialog-resume-full",
            lock: !0,
            onOpen: function(e) {
                $("body").css("overflow", "hidden"),
                supportsCalcVh || e.find(".img-box").css("height", window.innerHeight - 92 + "px"),
                $("html").hasClass("ie") && e.find(".resume-wrap").css("height", window.innerHeight - 40 + "px"),
                e.find("#fileupload").on("click",
                function() {
                    Attachment.bindUploadEvent($(this))
                }),
                e.find(".btn-sure").on("click",
                function() {
                    Attachment.postSaveResume($(this), t, i)
                }),
                e.find(".link-refresh").on("click",
                function() {
                    Attachment.preLoadResume(t)
                })
            },
            onClose: function() {
                $("body").css("overflow", "visible")
            }
        })
    },
    getResumeTemplate: function(e, t) {
        var t = t || {},
        i = "",
        n = "",
        s = "";
        switch (t.name && (i = t.name.split(".")[length - 1]), e) {
        case "added":
            n = '<div class="data-tips"><div class="tip-inner"><p><i class="icon-upload-resume"></i></p><p class="gray"><i class="icon-loading-chrysanthemum"></i>正在上传中</p></div></div>',
            s = '<h3 class="title">简历状态</h3>' + (t.name ? "<p>简历名称：" + t.name + "</p>": "") + '<p class="gray">附件简历只能预览10页，且有一定压缩，但不影响Boss看到简历的质量</p>';
            break;
        case "success":
            n = '<div class="img-box"><img src="/resume/pic4Owner/' + t.previewUrl + '"/></div>',
            s = '<h3 class="title">简历确认</h3>' + (t.name ? "<p>简历名称：" + t.name + "</p>": "") + (t.size ? "<p>简历大小：" + parseInt(t.size / 1024) + " KB</p>": "") + (i ? "<p>简历格式：" + i + "</p>": "") + '<p class="gray">附件简历只能预览10页，且有一定压缩，但不影响Boss看到简历的质量</p><div class="btns"><a href="javascript:;" class="btn btn-file btn-outline">重新选择<input id="fileupload" type="file" name="file" ka="user_resume_add_reupload" title="" accept="' + Attachment.getResumeAccept() + '"></a><button type="button" class="btn btn-sure" ka="user_resume_add_sure">确定添加</button></div>';
            break;
        case "preview":
            n = '<div class="data-tips"><div class="tip-inner"><p><i class="icon-upload-resume"></i></p><p class="gray">预览失败</p><p class="gray">点击 <a href="javascript:;" class="link-refresh text-blue" ka="user-resume-refresh">刷新</a> 重新预览</p></div></div>',
            s = '<h3 class="title">简历状态</h3><p>附件简历将在投递后被Boss预览查看，请确认显示正确（预览只展示前10页）</p>' + (t.name ? '<p class="gray">简历名称：' + t.name + "</p>": "") + '<div class="btns"><a href="javascript:;" class="btn btn-through btn-file">重新选择<input id="fileupload" type="file" name="file" ka="user-resume-upload-fail-reupload" title="" accept="' + Attachment.getResumeAccept() + '"></a></div><p class="gray">支持doc，docx，pdf，jpg，png格式附件，文件大小不超过10M</p>';
            break;
        case "fail":
            n = '<div class="data-tips"><div class="tip-inner"><p><i class="icon-upload-resume"></i></p><p class="gray">上传失败</p><p class="gray">请重新上传，如仍然无法成功，可尝试更改文件格式</p></div></div>',
            s = '<h3 class="title">简历状态</h3><p>附件简历将在投递后被Boss预览查看，请确认显示正确（预览只展示前10页）</p>' + (t.name ? '<p class="gray">简历名称：' + t.name + "</p>": "") + '<div class="btns"><a href="javascript:;" class="btn btn-through btn-file">重新选择<input id="fileupload" type="file" name="file" ka="user-resume-upload-fail-reupload" title="" accept="' + Attachment.getResumeAccept() + '"></a></div><p class="gray">支持doc，docx，pdf，jpg，png格式附件，文件大小不超过10M</p>'
        }
        return '<div class="pop-resume-box"><div class="resume-wrap"><h3 class="title">上传简历</h3>' + n + '</div><div class="resume-sider">' + s + "</div></div>"
    },
    fileUploadError: function(e) {
        $.dialog({
            content: '<div class="tip-text">' + e + "</div>",
            title: "提示",
            type: "error",
            closeText: !0,
            confirmText: "确定",
            cancelText: "",
            wrapClass: "",
            onOpen: function(e) {}
        })
    },
    postSaveResume: function(e, t, i) {
        $.ajax({
            type: "POST",
            url: "/geek/attresume/save.json?previewUrl=" + t.previewUrl,
            dataType: "JSON",
            data: {},
            success: function(t) {
                1 == t.rescode ? ($.toast({
                    type: "success",
                    content: "上传成功"
                }), e.closest(".dialog-wrap").remove(), i && i.callbackUpload && i.callbackUpload(), Attachment.reflushSider(), $("body").css("overflow", "visible")) : $.toast({
                    type: "error",
                    content: "保存失败"
                })
            },
            error: function() {
                $.toast({
                    type: "error",
                    content: "保存失败，请稍后再试"
                })
            }
        })
    },
    consoleLog: function(e) {
        $.ajax({
            type: "POST",
            url: "/actionLog/previewFail.json",
            dataType: "JSON",
            data: {
                previewUrl: e.previewUrl
            },
            success: function(e) {}
        })
    },
    consoleSuccessLog: function(e) {
        $.ajax({
            type: "POST",
            url: "/actionLog/previewSuccess.json",
            dataType: "JSON",
            data: {
                previewUrl: e.previewUrl
            },
            success: function(e) {}
        })
    },
    deleteResume: function(e) {
        var t = e.closest(".annex-list").find("li").length,
        i = e.parent().attr("data-id"),
        n = "确定删除该附件简历吗？删除后将无法向BOSS投递简历。";
        t > 1 && (n = "确认删除该附件简历吗？已发送给Boss的附件简历不受删除影响。"),
        $.dialog({
            content: '<div class="tip-text">' + n + "</div>",
            title: "温馨提示",
            type: "warning",
            onConfirm: function(t) {
                var n = e.closest("li").index() + 1;
                $.ajax({
                    type: "POST",
                    url: "/geek/attresume/delete.json",
                    data: {
                        resumeId: i
                    },
                    dataType: "json",
                    success: function(e) {
                        1 == e.rescode ? ($.toast({
                            content: "删除成功",
                            type: "success"
                        }), Attachment.reflushSider()) : $.toast({
                            content: e.resmsg,
                            type: "error"
                        })
                    }
                });
                try {
                    _T.sendEvent("delete_resume_" + n)
                } catch(e) {}
                t.remove()
            }
        })
    },
    renameResume: function(e, t) {
        var i = e.closest("li").find(".basis").text(),
        n = i.replace(/\s/g, "").split("."),
        s = n.splice(0, n.length - 1),
        a = n.splice(n.length - 1, 1);
        $.dialog({
            content: '<div class="pop-resume-rename"><p>请输入你确定要修改的简历名称</p><p><input maxlength="30" placeholder="请输入简历名称" value="' + s + '" class="ipt" /></p></div>',
            title: "修改附件简历名称",
            wrapClass: "dialog-primary-default",
            onOpen: function(e) {
                e.find(".ipt").on("keyup",
                function() {
                    $(this).val().replace(/\s/g, "") ? e.find(".btn-sure").removeClass("btn-disabled") : e.find(".btn-sure").addClass("btn-disabled")
                })
            },
            onConfirm: function(t) {
                var i = e.parent().attr("data-id"),
                n = e.closest("li").index() + 1,
                s = t.find(".ipt").val().replace(/\s/g, "");
                if (s.length) {
                    s.length > 30 ? $.toast({
                        content: "字数不能超过30",
                        type: "warning"
                    }) : ($.ajax({
                        type: "POST",
                        url: "/geek/attresume/update/resumename.json",
                        data: {
                            resumeId: i,
                            customName: s + "." + a
                        },
                        dataType: "json",
                        success: function(e) {
                            1 == e.rescode ? ($.toast({
                                content: "重命名成功",
                                type: "success"
                            }), Attachment.reflushSider()) : $.toast({
                                content: e.resmsg,
                                type: "error"
                            })
                        },
                        error: function() {
                            $.toast({
                                content: "重命名失败，请稍后再试",
                                type: "error"
                            })
                        }
                    }), t.remove());
                    try {
                        _T.sendEvent("rename_resume_" + n)
                    } catch(e) {}
                }
            }
        })
    },
    reflushSider: function() {
        $(".user-center").length && Attachment.getUcenterSider($("#async-sider")),
        $(".position-manage").length && (Attachment.getResumeSider(), Attachment.getAttachmentList())
    },
    showUploadDeliver: function(e) {
        $.dialog({
            content: '<div class="upload-dialog-deliver"><p class="gray">支持DOC、DOCX、PDF、JPG、PNG格式附件</p><p>文件大小不超过10M</p><div class="btns"><a href="javascript:;" class="btn btn-file">上传附件简历<input id="fileupload" type="file" name="file" ka="user-resume-upload-file" title="" accept="' + Attachment.getResumeAccept() + '"></a><button type="button" class="btn btn-outline">先聊聊</button></div></div>',
            title: "您还没有上传附件简历",
            confirmText: "",
            cancelText: "",
            wrapClass: "dialog-primary-default",
            onOpen: function(t) {
                t.find(".btn-file").on("click",
                function() {
                    Attachment.bindUploadEvent($(this), t)
                }),
                t.find(".btn-outline").on("click",
                function() {
                    e && e.callbackChat && e.callbackChat()
                })
            }
        })
    },
    showResumeSelecter: function(e, t) {
        for (var i = "",
        n = 0,
        s = "",
        a = e.resumeList || [], o = 0; o < a.length; o++) s += '<li><div class="side">' + a[o].uploadTime + '<span class="size">' + a[o].resumeSizeDesc + '</span><input type="radio" value="' + a[o].encryptId + '" /></div><img src="' + staticPath + "/web/geek/images/icon-" + a[o].suffixName.toLowerCase() + '.png" alt="" />' + (a[o].customName || a[o].originalName) + "</li>";
        s = '<ul class="resume-list">' + s + "</ul>",
        $.dialog({
            content: s,
            title: "请选择需要投递的附件简历",
            confirmText: "确定",
            cancelText: "",
            wrapClass: "choose-resume-dialog",
            onOpen: function(e) {
                var t = e.find(".btn-sure");
                t.addClass("btn-disabled"),
                e.find(".dialog-container").on("click", ".resume-list li",
                function() {
                    var e = $(this);
                    e.parent().find("input").prop("checked", !1),
                    e.find("input").prop("checked", !0),
                    t.removeClass("btn-disabled"),
                    i = e.find("input:checked").val(),
                    n = e.index()
                });
                try {
                    _T.sendEvent("show_select_resume_dialog")
                } catch(e) {}
            },
            onConfirm: function(e) {
                if (!e.find(".btn-sure").hasClass("btn-disabled")) {
                    if (t && t.callbackConfirm) {
                        t.callbackConfirm(i);
                        try {
                            _T.sendEvent("select_resume_" + n)
                        } catch(e) {}
                    }
                    e.remove()
                }
            }
        })
    }
};
$(function() {
    var e = $(".position-manage").length,
    t = $(".user-center").length;
    e && Resume.init(),
    (e || t) && Attachment.init()
});
var Guide = {
    init: function() {
        Resume.listenSkills(),
        Resume.selectCompanyInit(),
        Resume.selectCityInit();
        var e = $(".experience-info input[name=position]");
        e.length && e.val() && e.attr("level2") && Resume.getSkillsData({
            p1: e.val(),
            p2: e.attr("level2")
        },
        !1),
        $(".guide .container form").each(function() {
            FormsUI.init($(this)),
            "" != $(this).find(".required").val() ? Validate.init($(this), !1, !0) : Validate.init($(this), !0, !0)
        }),
        $(".position-info .sub-title span").text(this.setBossCount),
        $(".btn-footer .prev").on("click",
        function() {
            Guide.showPrevForms($(this))
        }),
        $(".guide .change-identity").on("click",
        function() {
            Guide.changeIdentity()
        }),
        $(".base-info").hasClass("hide") ? $(".change-identity").addClass("hide") : $(".change-identity").removeClass("hide"),
        Guide.$skipExpInfoEl = $(".experience-info .hide"),
        Guide.$workSkillTipsEl = $(".experience-info .work-skill-tips"),
        Guide.$iptTagsinputEl = $(".experience-info .ipt-tagsinput"),
        Guide.$infoBoxEl = $(".info-box"),
        Guide.$progressEl = $(".progress-box li"),
        $(".skip").on("click",
        function() {
            Guide.showNextForms($(this))
        }),
        $(".base-info").find('input[name="startWorkYearCode"]').length && 0 == $(".base-info").find('input[name="startWorkYearCode"]').val() ? Guide.$skipExpInfoEl.removeClass("hide") : Guide.$skipExpInfoEl.addClass("hide"),
        $(".ipt-tagsinput").on("itemAdded",
        function(e) {
            Guide.$workSkillTipsEl.find("li").each(function(t, i) {
                if (i.innerHTML == e.item) return $(this).addClass("selected"),
                !0
            })
        }).on("itemRemoved",
        function(e) {
            Guide.$workSkillTipsEl.find("li").each(function(t, i) {
                if (i.innerHTML == e.item) return $(this).removeClass("selected"),
                !0
            })
        }),
        $(".serial-area").textarealist(),
        $("body").hasClass("guide") && $(window).on("beforeunload",
        function() {
            return "内容尚未保存，离一份好工作仅仅差最后一步，确认离开当前页面吗？"
        }),
        "undefined" != typeof _CV_PARSER && _CV_PARSER.validParser && $.toast({
            wrapClass: "sign-resume-tips",
            time: !1,
            content: '已将简历转换为电子档，请您在百忙中确定内容正确，方便Boss了解您<i class="close"></i>'
        })
    },
    changeIdentity: function() {
        $.dialog({
            content: '<div style="padding:10px 0;">你当前正在进行牛人身份的信息完善，确定要切换到BOSS身份么？</div>',
            title: "操作提示",
            closeText: !0,
            confirmText: "确定",
            cancelText: "取消",
            wrapClass: "dialog-prop-default",
            onConfirm: function(e) {
                $(window).off("beforeunload"),
                $.toast({
                    type: "loading",
                    content: "切换中"
                }),
                $.ajax({
                    type: "POST",
                    url: "/user/identity/switch.json",
                    dataType: "JSON",
                    data: {
                        identity: 1
                    },
                    success: function(e) {
                        $("#toast").remove(),
                        1 == e.rescode ? e.toUrl ? ($.toast({
                            type: "success",
                            content: "切换成功，正在跳转"
                        }), setTimeout(function() {
                            window.location.href = e.toUrl
                        },
                        500)) : $.toast({
                            type: "error",
                            content: "切换失败"
                        }) : $.toast({
                            type: "error",
                            content: e.resmsg
                        })
                    },
                    error: function() {
                        $("#toast").remove(),
                        $.toast({
                            type: "error",
                            content: "切换失败"
                        })
                    }
                });
                try {
                    _T.sendEvent("switch_recruit_ok")
                } catch(e) {}
                e.remove()
            },
            onCancel: function(e) {
                try {
                    _T.sendEvent("switch_recruit_cancel")
                } catch(e) {}
                e.remove()
            }
        })
    },
    __conversion: function(e) {
        try {
            _T.sendEvent(e)
        } catch(e) {}
    },
    setBossCount: function() {
        return Math.round(4e3 * Math.random() + 1e3)
    },
    showPrevForms: function(e) {
        var t = e.closest(".info-box");
        t.addClass("hide").prev(".info-box").removeClass("hide").hasClass("base-info") ? $(".change-identity").removeClass("hide") : $(".change-identity").addClass("hide"),
        Guide.$progressEl.eq(Guide.$infoBoxEl.index(t)).removeClass("cur").prev().addClass("cur")
    },
    showNextForms: function(e) {
        var t = e.closest(".info-box");
        t.addClass("hide").next(".info-box").removeClass("hide").hasClass("base-info") ? $(".change-identity").removeClass("hide") : $(".change-identity").addClass("hide"),
        Guide.$progressEl.eq(Guide.$infoBoxEl.index(t)).removeClass("incomplete cur").addClass("completed").next().addClass("cur")
    },
    postData: function(form, isAdd) {
        var formEl = form,
        formWrap = formEl.parents(".info-box"),
        formIndex = formWrap.index(),
        url = formEl.attr("action"),
        btnEl = formEl.find('.btn[type="submit"]'),
        oldText = btnEl.text(),
        ka = "complete-" + formEl.find('button[type="submit"]').attr("ka"),
        subData = formEl.serialize();
        btnEl.addClass("btn-disabled").text("请稍后").css("pointer-events", "none"),
        $("input[name=birthday]").length && $("input[name=birthday]").is(":disabled") && (subData += "&birthday=" + $("input[name=birthday]").val()),
        $(".base-info").find('input[name="startWorkYearCode"]').length && 0 == $(".base-info").find('input[name="startWorkYearCode"]').val() ? Guide.$skipExpInfoEl.removeClass("hide") : Guide.$skipExpInfoEl.addClass("hide"),
        $.ajax({
            type: "POST",
            url: url,
            dataType: "JSON",
            data: subData,
            success: function(result) {
                if ("string" == typeof result && (result = eval("(" + result + ")")), result.forceFace && (alert("您的账号当前处于不可使用状态，请登录BOSS直聘手机APP查看详情"), window.location.href = "/logout/"), 1 == result.rescode) {
                    if (Guide.__conversion(ka), result.toUrl) $(window).off("beforeunload"),
                    $.toast({
                        content: "资料已完善",
                        type: "success"
                    }),
                    setTimeout(function() {
                        window.location.href = result.toUrl
                    },
                    1e3);
                    else {
                        if (formEl.data("url")) return void Guide.postAnother(formEl);
                        Guide.showNextForms(formWrap)
                    }
                    result.encryptId && (formEl.find('input[name ="id"]').length ? formEl.find('input[name ="id"]').val(result.encryptId) : formEl.find('input[name ="expectedJobId"]').val(result.encryptId))
                } else Resume.showError(result.resmsg);
                btnEl.removeClass("btn-disabled").text(oldText).css("pointer-events", "auto")
            },
            error: function() {
                Resume.showError(),
                btnEl.removeClass("btn-disabled").text(oldText).css("pointer-events", "auto")
            }
        })
    },
    postAnother: function(form) {
        var formEl = form,
        formWrap = formEl.parents(".info-box"),
        url = formEl.data("url"),
        btnEl = formEl.find('.btn[type="submit"]'),
        oldText = btnEl.text(),
        ka = "complete-" + formEl.find('button[type="submit"]').attr("ka"),
        subData = formEl.serialize();
        btnEl.addClass("btn-disabled").text("请稍后").css("pointer-events", "none"),
        $("input[name=birthday]").length && $("input[name=birthday]").is(":disabled") && (subData += "&birthday=" + $("input[name=birthday]").val()),
        $.ajax({
            type: "POST",
            url: url,
            dataType: "JSON",
            data: subData,
            success: function(result) {
                "string" == typeof result && (result = eval("(" + result + ")")),
                result.forceFace && (alert("您的账号当前处于不可使用状态，请登录BOSS直聘手机APP查看详情"), window.location.href = "/logout/"),
                1 == result.rescode ? (Guide.__conversion(ka), result.toUrl ? ($(window).off("beforeunload"), $.toast({
                    content: "资料已完善",
                    type: "success"
                }), setTimeout(function() {
                    window.location.href = result.toUrl
                },
                1e3)) : Guide.showNextForms(formWrap), result.encryptId && (formEl.find('input[name ="id"]').length ? formEl.find('input[name ="id"]').val(result.encryptId) : formEl.find('input[name ="expectedJobId"]').val(result.encryptId))) : Resume.showError(result.resmsg),
                btnEl.removeClass("btn-disabled").text(oldText).css("pointer-events", "auto")
            },
            error: function() {
                Resume.showError(),
                btnEl.removeClass("btn-disabled").text(oldText).css("pointer-events", "auto")
            }
        })
    },
    showSugSkillTag: function(e) {
        $.ajax({
            type: "GET",
            url: "/common/data/skill/recommendbyposition.json",
            dataType: "JSON",
            data: {
                position: e
            },
            success: function(e) {
                if (1 == e.rescode) {
                    var t = "<ul>";
                    $.each(e.data,
                    function(e, i) {
                        t += "<li>" + i + "</li>"
                    }),
                    t += "</ul>",
                    Guide.$workSkillTipsEl.html(t)
                }
            },
            error: function() {}
        })
    }
};
$(function() {
    Guide.init()
});
var UserCheck = {
    checkPhone: function(e, t, i, n, s) {
        s = s || (i ? i.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2") : "***********"),
        t = t || "/registe/sendSms.json";
        var a = "";
        a += '<div class="sign-form check-phone"><form action="' + e + '" method="post">',
        a += '<div class="form-row"><span class="cell-title">当前登录账号</span><span>' + s + "</span>",
        a += i ? '<input name="phone" value="' + i + '" type="hidden"/>': "",
        a += n ? '<input name="regionCode" value="' + n + '" type="hidden"/></div>': "",
        a += '<div class="form-row">',
        a += '<span class="cell-title" style="vertical-align: top;line-height: 40px;">滑动完成验证</span><div class="row-code ipt-wrap" style="width: 324px; height: 42px;"></div>',
        a += '<div class="verifyimg-error red"></div>',
        a += "</div>",
        a += '<div class="form-row row-sms">',
        a += '<span class="cell-title">短信验证码</span>',
        a += '<span class="ipt-wrap">',
        a += '<i class="icon-sign-sms"></i><input type="text" class="ipt ipt-sms required" placeholder="短信验证码" name="phoneCode" maxlength="6" autocomplete="off"/>',
        a += '<input type="hidden" name="smsType" value="1" /><button type="button" class="btn btn-sms" data-url="' + t + '">获取验证码</button>',
        a += '</span><div class="phonecode-error red"></div></div>',
        a += '<div class="form-footer">',
        a += '<div class="btns"><button class="btn btn-outline btn-cancel" type="button">取消</button><button class="btn btn-sure" type="submit">确定</button></div>',
        a += "</div>",
        a += '<input type="hidden" name="randomKey" class="randomkey" value=""/>',
        a += "</form></div>",
        $.dialog({
            content: a,
            title: "请验证手机号",
            cancelButton: "取消",
            confirmButton: "确认",
            wrapClass: "dialog-prop-default check-phone-wrap",
            onOpen: function(e) {
                UserCheck.getRandomkey(e),
                e.find(".sign-form").data("flow", "sincodeck"),
                UserCheck.initEvent(e),
                VerrifyCode.reset(e.find(".row-code"))
            }
        })
    },
    initEvent: function(e) {
        e.find("form").on("submit",
        function(t) {
            UserCheck.checkForm($(this)) && UserCheck.submitForm($(this), !1, e),
            t.preventDefault()
        }),
        e.find(".form-footer .btn-cancel").on("click",
        function() {
            e.find(".dialog-footer .btn-cancel").click()
        }),
        e.find(".btn-sms").on("click",
        function() {
            UserCheck.checkForm(e.find("form"), !0) && UserCheck.submitForm(e.find("form"), !0, e)
        }),
        e.find(".ipt").on("focus",
        function(e) {
            $(this).parent().addClass("focus-wrap")
        }).on("blur",
        function() {
            $(this).parent().removeClass("focus-wrap")
        }),
        e.find(".verifyimg").on("click",
        function() {
            $(this).attr("src", "/captcha/?randomKey=" + $(this).closest(".form-row").find(".randomkey").val() + "&_r=" + (new Date).getTime());
            try {
                _T.sendEvent("signin_verify_code")
            } catch(e) {}
        })
    },
    checkForm: function(e, t) {
        var i = $(".check-phone-wrap input[name=csessionId]"),
        n = e.find(".ipt-sms");
        if (!i.length || "" == i.val()) return UserCheck.showError(e, $(".verifyimg-error"), "请滑动完成验证", !0),
        i.focus(),
        !1;
        if ($(".verifyimg-error").text(""), !t) {
            if ("" == n.val()) return UserCheck.showError(e, $(".phonecode-error"), "请填写短信验证码", !0),
            n.focus(),
            !1;
            if (!n.val().match(/^.{4,6}$/)) return UserCheck.showError(e, $(".phonecode-error"), "请填写正确的短信验证码", !0),
            n.focus(),
            !1;
            if (n.val().match(/\D+/)) return UserCheck.showError(e, $(".phonecode-error"), "请填写正确的短信验证码", !0),
            n.val(""),
            n.focus(),
            !1;
            $(".phonecode-error").text("")
        }
        return ! 0
    },
    submitForm: function(e, t, i) {
        var n = e.find(".btn-sms"),
        s = e.find(".btn-sure"),
        a = t ? n.data("url") : e.attr("action");
        t || s.html("提交中...").addClass("btn-disabled"),
        $.ajax({
            url: a,
            type: "post",
            dataType: "json",
            data: e.serialize(),
            success: function(a) {
                var o = e.attr("action");
                if (VerrifyCode.reset(e.find(".row-code")), t) if (2 == a.type) {
                    if (n.html('已发送(<em class="num">60s</em>)').addClass("count-down btn-disabled"), UserCheck.countDown(n,
                    function() {
                        n.html("发送验证码").removeClass("count-down btn-disabled")
                    }), n.parent().find(".ipt-sms").focus(), 4 == a.errorType) try {
                        _T.sendEvent("signin_sms_send_lot")
                    } catch(e) {} else try {
                        _T.sendEvent("signin_sms_send_sms")
                    } catch(e) {}
                    $.toast({
                        type: "error",
                        content: "获取验证码过于频繁，请稍后再试"
                    })
                } else $.toast({
                    type: "error",
                    content: a.resmsg
                }),
                n.html("发送验证码").removeClass("count-down btn-disabled");
                else setTimeout(function() {
                    s.html("确定").removeClass("btn-disabled")
                },
                500),
                "/login/phone.json" == o ? 1 == a.rescode ? (Sign.callbackSms(e, a), i.remove()) : (i.remove(), Sign.dealSignFail($(".sign-pwd").find("form"), n, t, a)) : "/wechat/account/unbind.json" == o && (1 == a.rescode ? (i.remove(), $.toast({
                    type: "success",
                    content: "解绑成功"
                }), Account.elSideNav.find("li").eq(Account.convertTypeToIndex(5)).click()) : $.toast({
                    type: "error",
                    content: a.resmsg
                }))
            },
            error: function() {
                $.toast({
                    type: "error",
                    content: "服务器异常"
                })
            }
        })
    },
    showError: function(e, t, i, n) {
        if (t.text(i), i.indexOf("短信验证码") >= 0 ? e.find(".ipt-sms").focus().val("") : n && e.find(".verifyimg").length && (e.find(".ipt-code").val(""), e.find(".verifyimg").click()), n) try {
            _T.sendEvent(e.closest(".sign-form").data("flow") + "_error")
        } catch(e) {}
        $(window).width() < 800 && UserCheck.showToast(i)
    },
    countDown: function(e, t) {
        var i = parseInt(e.find(".num").text().replace("s"), 10);
        UserCheck.interCount = setInterval(function() {
            i--,
            e.find(".num").text(i + "s"),
            i <= 0 && (t(), clearInterval(UserCheck.interCount), UserCheck.interCount = null)
        },
        1e3)
    },
    showToast: function(e) {
        var t = $('<div class="toast"><p>' + e + "</p></div>");
        $(".toast").length && $(".toast").remove(),
        UserCheck.timerToast && clearTimeout(UserCheck.timerToast),
        $("body").append(t),
        $(".toast").show(),
        UserCheck.timerToast = setTimeout(function() {
            UserCheck.hideToast(t)
        },
        2e3)
    },
    hideToast: function() {
        $(".toast").fadeOut(function() {
            $(".toast").remove()
        })
    },
    getRandomkey: function(e) {
        var t = e.find(".ipt-code"),
        i = t.attr("data-url");
        "" == e.find(".randomkey").val() && $.ajax({
            url: i,
            type: "POST",
            dataType: "json",
            data: {
                pk: $("#page_key_name").val()
            },
            success: function(t) {
                1 == t.rescode && (e.find(".randomkey").val(t.randomKey), e.find(".verifyimg").click())
            },
            error: function(e) {}
        })
    }
},
browser = {
    versions: function() {
        var e = navigator.userAgent;
        navigator.appVersion;
        return {
            trident: e.indexOf("Trident") > -1,
            presto: e.indexOf("Presto") > -1,
            webKit: e.indexOf("AppleWebKit") > -1,
            gecko: e.indexOf("Gecko") > -1 && -1 == e.indexOf("KHTML"),
            mobile: !!e.match(/AppleWebKit.*Mobile.*/),
            ios: !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
            android: e.indexOf("Android") > -1 || e.indexOf("Adr") > -1,
            iPhone: e.indexOf("iPhone") > -1,
            iPad: e.indexOf("iPad") > -1,
            webApp: -1 == e.indexOf("Safari"),
            weixin: e.indexOf("MicroMessenger") > -1,
            qq: " qq" == e.match(/\sQQ/i)
        }
    } (),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
},
ka_pr = ""; (browser.versions.mobile || browser.versions.android || browser.versions.ios) && (ka_pr = "wap_");
var VerrifyCode = window.VerrifyCode ||
function() {
    var e = new Date,
    t = e.getFullYear() + "" + e.getMonth() + e.getDay(),
    i = function(e, i) {
        seriesLoadScripts("//g.alicdn.com/sd/ncpc/nc.js?t=" + t,
        function() {
            var t = ["BOSS_PC", (new Date).getTime(), Math.random().toString(16)].join(":"),
            n = {
                renderTo: "#" + e.id,
                appkey: e.appkey || "FFFF0N00000000006DC1",
                scene: e.scene || "nc_login",
                token: t,
                customWidth: i.find(".row-code").width(),
                trans: {
                    position: "sign-sms"
                },
                elementID: ["sign-sms"],
                is_Opt: 0,
                language: "cn",
                isEnabled: !0,
                timeout: 3e3,
                times: 5,
                apimap: {},
                callback: function(e) {
                    i.find("input[name=csig]").length || (i.find("form").append('<input type="hidden" name="csig" />'), i.find("form").append('<input type="hidden" name="ctoken" />'), i.find("form").append('<input type="hidden" name="csessionId" />'), i.find("form").append('<input type="hidden" value="FFFF0N00000000006DC1" name="cappKey" />'), i.find("form").append('<input type="hidden" value="nc_login" name="cscene" />')),
                    i.find("input[name=csig]").val(e.sig),
                    i.find("input[name=ctoken]").val(t),
                    i.find("input[name=csessionId]").val(e.csessionid)
                }
            };
            setTimeout(function() {
                new noCaptcha(n).upLang("cn", {
                    _startTEXT: "请按住滑块，拖动到最右边",
                    _yesTEXT: "验证通过",
                    _error300: '哎呀，出错了，点击<a href="javascript:__nc.reset()">刷新</a>再来一次',
                    _errorNetwork: '网络不给力，请<a href="javascript:__nc.reset()">点击刷新</a>'
                })
            },
            1)
        })
    },
    n = function(e, i) {
        seriesLoadScripts("//g.alicdn.com/sd/nch5/index.js?t=" + t,
        function() {
            var t = ["BOSS_H5", (new Date).getTime(), Math.random().toString(16)].join(":"),
            n = NoCaptcha.init({
                renderTo: "#" + e.id,
                appkey: e.appkey || "FFFF0N00000000006DC1",
                scene: "nc_login_h5",
                token: t,
                customWidth: "100%",
                trans: {
                    position: "sign-h5"
                },
                elementID: ["sign-h5"],
                is_Opt: 0,
                language: "cn",
                timeout: 1e4,
                retryTimes: 5,
                errorTimes: 5,
                inline: !1,
                apimap: {},
                bannerHidden: !1,
                initHidden: !1,
                callback: function(e) {
                    i.find("input[name=csig]").length || (i.find("form").append('<input type="hidden" name="csig" />'), i.find("form").append('<input type="hidden" name="ctoken" />'), i.find("form").append('<input type="hidden" name="csessionId" />'), i.find("form").append('<input type="hidden" value="FFFF0N00000000006DC1" name="cappKey" />'), i.find("form").append('<input type="hidden" value="nc_login" name="cscene" />')),
                    i.find("input[name=csig]").val(e.sig),
                    i.find("input[name=ctoken]").val(t),
                    i.find("input[name=csessionId]").val(e.csessionid)
                },
                error: function(e) {}
            });
            NoCaptcha.setEnabled(!0),
            n.reset(),
            NoCaptcha.upLang("cn", {
                LOADING: "加载中...",
                SLIDER_LABEL: "请向右滑动验证",
                CHECK_Y: "验证通过",
                CHECK_N: "验证未通过"
            })
        })
    },
    s = function(e, t) {
        var s = e || {},
        a = t || $(".sign-form:visible");
        if (e || (s.id = a.find(".row-code").attr("id"), s.scene = a.find("input[name=cscene]").val(), s.appkey = a.find("input[name=cappKey]").val()), !s.id) return ! 1;
        browser.versions.mobile ? n(s, a) : i(s, a)
    },
    a = function(e) {
        if (!e || !e.length) return ! 1;
        var t = e.parents(".sign-form"),
        i = "verrify" + Math.random().toString(32).substr( - 6, 6);
        t.find("input[name=csig]").val(""),
        t.find("input[name=ctoken]").val(""),
        t.find("input[name=csessionId]").val(""),
        e.empty(),
        e.attr("id", i),
        s({
            id: i,
            scene: t.find("input[name=cscene]").val(),
            appkey: t.find("input[name=cappKey]").val()
        },
        t)
    },
    o = function() {
        $(".sign-form .row-code").each(function() {
            a($(this))
        })
    };
    return o(),
    {
        build: o,
        reset: a
    }
} (),
Sign = {
    init: function(e) {
        e && void 0 !== PlaceholderCheck && PlaceholderCheck.init(),
        void 0 !== localStorageInstance && localStorageInstance("hasEnterJob", "");
        var t = e || $(".sign-wrap");
        Sign.source = getQueryString("s"),
        Sign.source && (Sign.directUrls = {
            recharge: "/weixin/official/toPay",
            actRecharge: "/special3SignUp/home?signUpId=" + getQueryString("signUpId"),
            wapSem: "/",
            url: getQueryString("jumpUrl") ? decodeURIComponent(getQueryString("jumpUrl")) : "/"
        }),
        function() {
            $(".sign-scan .qrcode-box").length && ($(".scan-help-down li").eq(1).hide(), $(".scan-help-top li").eq(0).css({
                "border-top-left-radius": "20px",
                "border-bottom-left-radius": "20px"
            }), $(".scan-help-top li").eq(1).css({
                "border-top-right-radius": "20px",
                "border-bottom-right-radius": "20px"
            }), $(".sign-scan .qrcode-box").hover(function() {
                $(this).children(".sign-scan-help").show().stop().animate({
                    "margin-left": "0px",
                    opacity: 1
                },
                200)
            },
            function() {
                var e = $(this).children(".sign-scan-help");
                $(this).children(".sign-scan-help").stop().animate({
                    "margin-left": "-10px",
                    opacity: 0
                },
                200,
                function() {
                    e.hide()
                })
            })),
            $(".sign-scan .scan-help-top ul li").on("click",
            function() {
                var e = $(this).index();
                $(this).addClass("active").siblings().removeClass("active"),
                $(".scan-help-down li").eq(e).show().siblings().hide()
            })
        } (),
        t.find(".sign-tab").on("click", "span",
        function() {
            var e = $(this);
            e.hasClass("cur") || (e.hasClass("link-signin") && Sign.showPannel(t, "signin"), e.hasClass("link-sms") && Sign.showPannel(t, "sms"), e.hasClass("link-scan") && Sign.showPannel(t, "scan"))
        }),
        t.find(".purpose-row").on("click", "span",
        function() {
            var e = $(this).index();
            $(this).closest("form").find('input[name="purpose"]').val(e),
            $(this).addClass("cur").siblings().removeClass("cur"),
            VerrifyCode.reset($(this).parents(".sign-form").find(".row-code"))
        }),
        t.find(".text-tip .link-signup").on("click",
        function() {
            Sign.showPannel(t, "register")
        }),
        t.find(".text-tip .link-signin").on("click",
        function() {
            t.find(".sign-pwd").length ? Sign.showPannel(t, "signin") : Sign.showPannel(t, "sms")
        }),
        t.find(".phone-switch").on("click",
        function() {
            Sign.showPannel(t, "register"),
            _T.sendEvent("signup_switch_phone")
        }),
        t.find(".ewm-switch").on("click",
        function() {
            Sign.showPannel(t, "miniapp"),
            _T.sendEvent("signup_switch_ewm")
        }),
        t.find(".text-tip .link-sms").on("click",
        function() {
            Sign.showPannel(t, "sms")
        }),
        t.find(".link-bind-wechat-signin").on("click",
        function() {
            Sign.showPannel(t, "bind-wechat-signin")
        }),
        t.find(".link-bind-wechat-signup").on("click",
        function() {
            Sign.showPannel(t, "bind-wechat-signup")
        }),
        Sign.dropSelect(t),
        t.find("form").on("submit",
        function(e) {
            Sign.checkForm($(this)),
            e.preventDefault()
        }),
        t.find(".btn-sms").on("click",
        function() {
            var e = $(this).closest("form");
            Sign.checkForm(e, !0)
        }),
        t.find(".ipt").on("focus",
        function(e) {
            $(this).parent().addClass("focus-wrap")
        }).on("blur",
        function() {
            $(this).parent().removeClass("focus-wrap")
        }),
        t.find(".ipt-phone").removeAttr("ka").on("click",
        function() {
            try {
                _T.sendEvent(ka_pr + $(this).closest(".sign-form").data("flow") + "_mobileck")
            } catch(e) {}
        }),
        t.find(".verifyimg").on("click",
        function() {
            $(this).attr("src", "/captcha/?randomKey=" + $(this).closest(".form-row").find(".randomkey").val() + "&_r=" + (new Date).getTime());
            try {
                _T.sendEvent("signin_verify_code")
            } catch(e) {}
        }),
        t.find(".sign-form").each(function() {
            $(this).find("form").length && !$(this).find('form input[name="pk"]').length && $(this).find("form").prepend('<input type="hidden" name="pk" value="' + $("#page_key_name").val() + '" />');
            var e = "";
            if ($(this).hasClass("sign-pwd") && (e = "sincode"), $(this).hasClass("sign-sms") && (e = "sinsms"), $(this).hasClass("sign-scan") && (e = "sinqr"), $(this).hasClass("sign-register") && (e = "sup"), $(this).data("flow", ka_pr + e), $(this).is(":visible")) try {
                _T.sendEvent(e + "_load")
            } catch(e) {}
            if ($(this).find(".randomkey").length && "" == $(this).find(".randomkey").val()) return Sign.getRandomkey(t, $(this)),
            !1
        }),
        $(".invalid-box .btn").on("click",
        function() {
            var t = $(this).closest(".sign-form");
            t.find(".invalid-box").hide(),
            t.hasClass("sign-scan") ? (Sign.scanPending(e), Sign.scanValid()) : (Sign.checkIsScanned(t), Sign.RegScanValid(t))
        }),
        $(".sign-scan").is(":visible") && ($(".sign-scan").find(".qrcodeimg-box img").attr("src") || $(".sign-scan .qrcodeimg-box img").attr("src", "/qrcode/" + $(".sign-scan .uuid").val()), Sign.scanPending(t), Sign.scanValid()),
        $(".sign-miniapp").is(":visible") && ($(".sign-miniapp").find(".qrcodeimg-box img").attr("src") || $(".sign-miniapp .qrcodeimg-box img").attr("src", "/qrcode/miniapp/" + $(".sign-miniapp .scene").val()), Sign.checkIsScanned($(".sign-miniapp")), Sign.RegScanValid($(".sign-miniapp"))),
        cookie.get("hasShowLoginTip") ? t.find(".qrcode-tip").hide() : t.find(".qrcode-tip").show(),
        t.find(".qrcode-tip .gray").on("click",
        function() {
            t.find(".qrcode-tip").hide(),
            cookie.set("hasShowLoginTip", "1", 3e4)
        }),
        Sign.initWechatBind(t)
    },
    initWechatBind: function(e) {
        "undefined" != typeof wxBindData && seriesLoadScripts("https://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js",
        function() {
            e.find(".link-wechat-login").on("click",
            function() {
                $.dialog({
                    title: "",
                    content: '<div class="wechat-login-dialog-layer"></div><div class="wechat-login-wrap"><div id="wechat-login"></div><div class="overdue"><span>二维码已过期</span><button class="btn btn-refresh">点击刷新</button></div></div>',
                    closeText: !0,
                    confirmText: !1,
                    cancelText: !1,
                    wrapClass: "dialog-layer-full dialog-wechat-login",
                    onOpen: function(e) {
                        var t = (new WxLogin({
                            id: "wechat-login",
                            appid: wxBindData.appid,
                            scope: wxBindData.scope,
                            redirect_uri: wxBindData.redirect_uri,
                            state: wxBindData.state,
                            style: "white",
                            href: window.location.origin + "/v2/web/geek/css/wechat-scan.css"
                        }), $(".wechat-login-wrap .overdue"));
                        setTimeout(function() {
                            t.is(":visible") || t.show()
                        },
                        6e4),
                        t.find(".btn-refresh").on("click",
                        function() {
                            setTimeout(function() {
                                t.is(":visible") || t.show()
                            },
                            6e4),
                            t.hide();
                            new WxLogin({
                                id: "wechat-login",
                                appid: wxBindData.appid,
                                scope: wxBindData.scope,
                                redirect_uri: wxBindData.redirect_uri,
                                state: wxBindData.state,
                                style: "white",
                                href: window.location.origin + "/v2/web/geek/css/wechat-scan.css"
                            })
                        }),
                        $(".wechat-login-dialog-layer").on("click",
                        function() {
                            e.remove()
                        })
                    },
                    onConfirm: function(e) {
                        e.remove()
                    },
                    onClose: function(e) {
                        try {
                            _T.sendEvent("wx_qr_off")
                        } catch(e) {}
                    }
                })
            })
        }),
        e.hasClass("sign-resume-wrapper") && Sign.initUploadResume()
    },
    initUploadResume: function() {
        var uploadWrapperEl = $(".upload-resume"),
        pageLoadingEl = $(".page-loading");
        $("#fileupload").dmUploader({
            method: "POST",
            url: "/geek/attresume/parser/upload.json",
            multiple: !1,
            dataType: "text",
            extFilter: ["doc", "docx", "pdf"],
            maxFileSize: 8388608,
            onNewFile: function(e, t) {
                uploadWrapperEl.addClass("hide"),
                pageLoadingEl.removeClass("hide")
            },
            onUploadSuccess: function(e, result) {
                switch ("string" == typeof result && (result = eval("(" + result + ")")), result.rescode) {
                case 1:
                    result.data.key && "" != result.data.key.trim() ? ($(".analysis-result").find("span").eq(0).text(result.data.validUserBaseInfoNum).end().eq(1).text(result.data.validWorkExpNum).end().eq(2).text(result.data.validEduExpNum).end().eq(3).text(result.data.validExpectNum).end().closest(".sign-resume-box").find("input[name=cvpk]").val(result.data.key).end().find("input[name=phone]").val(result.data.phone ? result.data.phone: ""), pageLoadingEl.addClass("hide"), $(".sign-resume-box").removeClass("hide")) : ($.dialog({
                        title: "",
                        content: '<div style="padding: 4px 0 30px;">暂且无法解析，您可以选择其他文件或者尝试直接注册。</div>',
                        type: "error",
                        closeText: !0,
                        confirmText: "确定",
                        cancelText: !1,
                        preKa: "",
                        wrapClass: "dialog-icons-default",
                        lock: !0
                    }), pageLoadingEl.addClass("hide"), uploadWrapperEl.removeClass("hide"));
                    break;
                case 10001:
                    $.toast({
                        content:
                        "您已登录，即将为你跳转个人中心页",
                        type: "info"
                    }),
                    setTimeout(function() {
                        result.jumpUrl ? window.location.href = result.jumpUrl: window.location.href = window.location.host
                    },
                    1e3);
                    break;
                case 100005:
                    $.dialog({
                        title:
                        "",
                        content: '<div style="padding: 4px 0 30px;">服务器未获取到上传文件，请更换文件或稍后重试</div>',
                        type: "error",
                        closeText: !0,
                        confirmText: "确定",
                        cancelText: !1,
                        preKa: "",
                        wrapClass: "dialog-icons-default",
                        lock: !0
                    });
                    break;
                case 100006:
                    $.dialog({
                        title:
                        "",
                        content: '<div style="padding: 4px 0 30px;">您上传的文件超过8M，请重新选择</div>',
                        type: "warning",
                        closeText: !0,
                        confirmText: "确定",
                        cancelText: !1,
                        preKa: "",
                        wrapClass: "dialog-icons-default",
                        lock: !0
                    });
                    break;
                case 100007:
                    $.dialog({
                        title:
                        "",
                        content: '<div style="padding: 4px 0 30px;">仅支持DOC、DOCX、PDF格式简历文件，请重新选择</div>',
                        type: "warning",
                        closeText: !0,
                        confirmText: "确定",
                        cancelText: !1,
                        preKa: "",
                        wrapClass: "dialog-icons-default",
                        lock: !0
                    });
                    break;
                default:
                    $.dialog({
                        title:
                        "",
                        content: '<div style="padding: 4px 0 30px;">服务器异常，请稍后重试</div>',
                        type: "error",
                        closeText: !0,
                        confirmText: "确定",
                        cancelText: !1,
                        preKa: "",
                        wrapClass: "dialog-icons-default",
                        lock: !0
                    })
                }
                if (1 != result.rescode) {
                    pageLoadingEl.addClass("hide"),
                    uploadWrapperEl.removeClass("hide");
                    try {
                        _T.sendEvent("nlp_resume_upload_fail")
                    } catch(e) {}
                }
            },
            onUploadError: function(e, t) {
                $.dialog({
                    title: "",
                    content: '<div style="padding: 4px 0 30px;">服务器异常，请稍后重试</div>',
                    type: "error",
                    closeText: !0,
                    confirmText: "确定",
                    cancelText: !1,
                    preKa: "",
                    wrapClass: "dialog-icons-default",
                    lock: !0
                }),
                pageLoadingEl.addClass("hide"),
                uploadWrapperEl.removeClass("hide");
                try {
                    _T.sendEvent("nlp_resume_upload_fail")
                } catch(e) {}
            },
            onFileExtError: function(e) {
                $.dialog({
                    title: "",
                    content: '<div style="padding: 4px 0 30px;">仅支持DOC、DOCX、PDF格式简历文件，请重新选择</div>',
                    type: "warning",
                    closeText: !0,
                    confirmText: "确定",
                    cancelText: !1,
                    preKa: "",
                    wrapClass: "dialog-icons-default",
                    lock: !0,
                    onConfirm: function(e) {
                        e.remove(),
                        $("#fileupload").click()
                    }
                }),
                pageLoadingEl.addClass("hide"),
                uploadWrapperEl.removeClass("hide");
                try {
                    _T.sendEvent("nlp_resume_upload_fail")
                } catch(e) {}
            },
            onFileSizeError: function(e) {
                $.dialog({
                    title: "",
                    content: '<div style="padding: 4px 0 30px;">您上传的文件超过8M，请重新选择</div>',
                    type: "warning",
                    closeText: !0,
                    confirmText: "确定",
                    cancelText: !1,
                    preKa: "",
                    wrapClass: "dialog-icons-default",
                    lock: !0
                }),
                pageLoadingEl.addClass("hide"),
                uploadWrapperEl.removeClass("hide");
                try {
                    _T.sendEvent("nlp_resume_upload_fail")
                } catch(e) {}
            }
        })
    },
    showPannel: function(e, t) {
        e.find(".sign-form").hide();
        var i, n;
        switch (t) {
        case "signin":
            i = e.find(".sign-pwd"),
            n = "sincodeck";
            break;
        case "sms":
            i = e.find(".sign-sms"),
            n = "sinsmsck";
            break;
        case "scan":
            i = e.find(".sign-scan"),
            n = "sinqrck";
            break;
        case "register":
            i = e.find(".sign-register"),
            n = "supck";
            break;
        case "welcome":
            i = e.find(".sign-welcome");
            break;
        case "history":
            i = e.find(".sign-history");
            break;
        case "deliver":
            i = e.find(".sign-deliver");
            break;
        case "validate":
            i = e.find(".sign-validate");
            break;
        case "miniapp":
            i = e.find(".sign-miniapp");
            break;
        case "bind-wechat-signin":
            i = e.find(".sign-bind-wechat-signin");
            break;
        case "bind-wechat-signup":
            i = e.find(".sign-bind-wechat-signup")
        }
        if (n) {
            i.data("flow", n);
            try {
                _T.sendEvent(ka_pr + n + "_load")
            } catch(e) {}
        }
        i.show(),
        i.find(".verifyimg").click(),
        "scan" == t && Sign.getRandomkey(e, i,
        function(t) {
            Sign.scanPending(e),
            Sign.scanValid()
        }),
        "miniapp" == t && (Sign.checkIsScanned(i), Sign.RegScanValid(i), i.find(".qrcodeimg-box img").attr("src") || i.find(".qrcodeimg-box img").attr("src", "/qrcode/miniapp/" + i.find(".scene").val()));
        var s = "verrify" + Math.random().toString(32).substr( - 10, 6),
        a = e.find(".sign-form:visible").find(".row-code");
        a.attr("id", s),
        VerrifyCode.reset(a)
    },
    dropSelect: function(e) {
        e.find(".dropdown-select").each(function() {
            $(this).on("click",
            function() {
                $(this).hasClass("dropdown-disabled") || ($(this).toggleClass("dropdown-select-open"), $(this).closest(".form-row").find(".dropdown-menu").toggleClass("dropdown-menu-open"))
            })
        }),
        e.find(".dropdown-menu").each(function() {
            var e = $(this),
            t = e.closest(".form-row").find(".dropdown-select"),
            i = t.find(".text-select"),
            n = t.find('input[type="hidden"]');
            e.on("click", "li",
            function() {
                i.text($(this).attr("data-val")),
                n.val($(this).attr("data-val")),
                n.closest("dd").find(".tip-text").remove(),
                e.removeClass("dropdown-menu-open"),
                t.removeClass("dropdown-select-open")
            })
        }),
        $(document).on("touchend click",
        function(t) {
            $(t.target).closest(".dropdown-menu").length || $(t.target).closest(".dropdown-select").length || (e.find(".dropdown-select").removeClass("dropdown-select-open"), e.find(".dropdown-menu").removeClass("dropdown-menu-open"))
        })
    },
    getRandomkey: function(e, t, i) {
        var n = "",
        s = null,
        a = null;
        t.find(".ipt-code").length ? (s = t.find(".ipt-code"), n = s.attr("data-url"), a = t.find(".randomkey")) : n = "/captcha/randkey.json",
        a && "" != a.val() || $.ajax({
            url: n,
            type: "POST",
            dataType: "json",
            data: {
                pk: $("#page_key_name").val()
            },
            success: function(t) {
                1 == t.rescode && (e.find(".randomkey").val(t.randomKey), e.find(".verifyimg").click(), e.find(".sign-scan .qrcodeimg-box img").attr("src", "/qrcode/" + t.qrId), e.find(".uuid").val(t.qrId), i && i(t))
            },
            error: function(e) {}
        })
    },
    checkForm: function(e, t) {
        var i, e = e,
        n = e.find(".ipt-phone"),
        s = e.find('input[name="regionCode"]'),
        a = e.find(".ipt-pwd"),
        o = e.find("input[name=csessionId]"),
        r = e.find(".ipt-sms"),
        l = (e.closest(".sign-form").find(".tip-error"), e.find(".agreement-tip input"));
        if (n.length) {
            if (i = n.closest(".form-row").find(".row-tip-error"), "" == n.val()) {
                Sign.showError(e, "请填写手机号", !1, i),
                n.focus();
                try {
                    _T.sendEvent(n.closest(".sign-form").data("flow") + "_mobile")
                } catch(e) {}
                return ! 1
            }
            if (/^\D+$/.test(n.val())) return n.val(""),
            !1;
            if ("+86" == s.val() && !/^(1[3456789][0-9]{9})$/.test(n.val())) {
                Sign.showError(e, "请正确填写手机号", !1, i),
                n.focus();
                try {
                    _T.sendEvent(n.closest(".sign-form").data("flow") + "_mobile")
                } catch(e) {}
                return ! 1
            }
            if (!/^(\d{6,11})$/.test(n.val())) {
                Sign.showError(e, "请正确填写手机号", !1, i),
                n.focus();
                try {
                    _T.sendEvent(n.closest(".sign-form").data("flow") + "_mobile")
                } catch(e) {}
                return ! 1
            }
            if (l.length && !l.is(":checked")) return alert("请阅读并同意BOSS直聘用户协议，方可注册"),
            !1;
            Sign.hideError(e, i)
        }
        if (a.length) {
            if (i = a.closest(".form-row").find(".row-tip-error"), "" == a.val()) return Sign.showError(e, "请填写密码", !1, i),
            a.focus(),
            !1;
            Sign.hideError(e, i)
        }
        if (o.length) {
            if (i = e.find(".row-code").closest(".form-row").find(".row-tip-error"), "" == o.val()) return Sign.showError(e, "请滑动完成验证", !1, i),
            o.focus(),
            !1;
            Sign.hideError(e, i)
        }
        if (r.length && !t) {
            if (i = r.closest(".form-row").find(".row-tip-error"), "" == r.val()) return Sign.showError(e, "请填写短信验证码", !1, i),
            r.focus(),
            !1;
            if (!r.val().match(/^.{4,6}$/)) return Sign.showError(e, "请填写正确的短信验证码", !1, i),
            r.focus(),
            !1;
            if (r.val().match(/\D+/)) return Sign.showError(e, "请填写正确的短信验证码", !1, i),
            r.val(""),
            r.focus(),
            !1;
            Sign.hideError(e, i)
        }
        Sign.postData(e, t)
    },
    postData: function(formEl, isSms) {
        var formEl = formEl,
        formType = formEl.closest(".sign-form"),
        btnSms = formEl.find(".btn-sms"),
        url = formEl.attr("action"),
        btnEl = formEl.find(".form-btn .btn");
        if (isSms) {
            if (btnSms.hasClass("btn-disabled")) return;
            url = btnSms.attr("data-url"),
            btnSms.addClass("btn-disabled").html("请稍后")
        } else {
            if (btnEl.hasClass("btn-disabled")) return;
            btnEl.addClass("btn-disabled")
        }
        $.ajax({
            url: url,
            type: "post",
            dataType: "json",
            data: formEl.serialize(),
            success: function(result) {
                var result = result;
                "string" == typeof result && (result = eval("(" + result + ")"));
                var isReg = "/registe/headhunter/save.json" == formEl.attr("action") || "/registe/save.json" == formEl.attr("action");
                if ((1 != result.rescode && 6 != result.rescode || 2 == result.type && isReg || 4 == result.type) && VerrifyCode.reset(formEl.find(".row-code")), 1 == result.rescode) {
                    if (formType.hasClass("sign-pwd") && Sign.callbackPwd(formEl, result), formType.hasClass("sign-sms")) if (isSms) if (2 == result.type) if (btnSms.html('已发送(<em class="num">60s</em>)').addClass("count-down btn-disabled"), Sign.countDown(btnSms,
                    function() {
                        btnSms.html("发送验证码").removeClass("count-down btn-disabled")
                    }), btnSms.parent().find(".ipt-sms").focus(), 4 == result.errorType) {
                        Sign.showError(formEl, "获取验证码过于频繁，请稍后再试", !0);
                        try {
                            _T.sendEvent("signin_sms_send_lot")
                        } catch(e) {}
                    } else try {
                        _T.sendEvent("signin_sms_send_sms")
                    } catch(e) {} else Sign.showError(formEl, result.resmsg, !0),
                    btnSms.html("发送验证码").removeClass("count-down btn-disabled");
                    else Sign.callbackSms(formEl, result);
                    if (formType.hasClass("sign-register")) if (isSms) if (2 == result.type) Sign.showError(formEl, result.resmsg, !0),
                    btnSms.html("发送验证码").removeClass("count-down btn-disabled");
                    else {
                        btnSms.html('已发送(<em class="num">60s</em>)').addClass("count-down btn-disabled"),
                        Sign.countDown(btnSms,
                        function() {
                            btnSms.html("发送验证码").removeClass("count-down btn-disabled")
                        }),
                        btnSms.parent().find(".ipt-sms").focus(),
                        formEl.append('<input type="hidden" name="rescode" value="1" />');
                        try {
                            _T.sendEvent("signin_register_send_sms")
                        } catch(e) {}
                    } else "function" == typeof _PAGE.RegisterCallback ? _PAGE.RegisterCallback() : Sign.callbackRegister(formEl, result);
                    if (formType.hasClass("sign-bind-wechat-signin")) if (isSms) if (2 == result.type) if (btnSms.html('已发送(<em class="num">60s</em>)').addClass("count-down btn-disabled"), Sign.countDown(btnSms,
                    function() {
                        btnSms.html("发送验证码").removeClass("count-down btn-disabled")
                    }), btnSms.parent().find(".ipt-sms").focus(), 4 == result.errorType) {
                        Sign.showError(formEl, "获取验证码过于频繁，请稍后再试", !0);
                        try {
                            _T.sendEvent("signin_sms_send_lot")
                        } catch(e) {}
                    } else try {
                        _T.sendEvent("signin_sms_send_sms")
                    } catch(e) {} else Sign.showError(formEl, result.resmsg, !0),
                    btnSms.html("发送验证码").removeClass("count-down btn-disabled");
                    else Sign.callbackWechatBind(formEl, result);
                    if (formType.hasClass("sign-bind-wechat-signup")) if (isSms) if (2 == result.type) Sign.showError(formEl, result.resmsg, !0),
                    btnSms.html("发送验证码").removeClass("count-down btn-disabled");
                    else {
                        btnSms.html('已发送(<em class="num">60s</em>)').addClass("count-down btn-disabled"),
                        Sign.countDown(btnSms,
                        function() {
                            btnSms.html("发送验证码").removeClass("count-down btn-disabled")
                        }),
                        btnSms.parent().find(".ipt-sms").focus();
                        try {
                            _T.sendEvent("signin_register_send_sms")
                        } catch(e) {}
                    } else Sign.callbackWechatBindRegister(formEl, result);
                    formType.hasClass("sign-resume") && (isSms ? (btnSms.html('已发送(<em class="num">60s</em>)').addClass("count-down btn-disabled"), Sign.countDown(btnSms,
                    function() {
                        btnSms.html("发送验证码").removeClass("count-down btn-disabled")
                    }), btnSms.parent().find(".ipt-sms").focus()) : AnalysisResume.signOrRegisterCallback(formEl, result))
                } else Sign.dealSignFail(formEl, btnSms, isSms, result);
                isSms || btnEl.removeClass("btn-disabled")
            },
            error: function(e) {
                Sign.showError(formEl, "服务器错误，请稍后再试", !0),
                isSms ? btnSms.html("发送验证码").removeClass("btn-disabled") : btnEl.removeClass("btn-disabled")
            }
        })
    },
    dealSignFail: function(e, t, i, n) {
        if (0 == n.rescode) {
            var s = {
                content: n.resmsg,
                confirmButton: "知道了",
                openCallback: function(e) {
                    e.$confirmButton.parent().css("text-align", "center")
                }
            };
            Sign.showConfirm(s),
            i && t.html("发送验证码").removeClass("btn-disabled"),
            e.find(".ipt-code").val(""),
            e.find(".verifyimg").click()
        } else if (7 == n.rescode || 8 == n.rescode) {
            if (7 == n.rescode && 2 == n.bizcode) {
                var s = {
                    content: '<div class="sign-hunter-gray">如果您是猎头，请请拨打客服电话：400-0655-799进行申诉。同事已经注册成功Boss直聘猎头版，请将TA的手机号提供给客服。</div>',
                    title: "此账号在BOSS直聘被多次举报，暂不支持使用",
                    confirmButton: "知道了",
                    columnClass: "pop-sign-hunter"
                };
                Sign.showConfirm(s)
            } else if (7 != n.rescode || 3 != n.bizcode && 4 != n.bizcode) if (7 == n.rescode && 5 == n.bizcode) {
                var s = {
                    content: '<div class="sign-hunter-gray">如果您是猎头，请请拨打客服电话：400-0655-799进行申诉。同事已经注册成功Boss直聘猎头版，请将TA的手机号提供给客服。</div>',
                    title: "此账号在BOSS直聘被多次举报，暂不支持使用",
                    confirmButton: "知道了",
                    columnClass: "pop-sign-hunter"
                };
                Sign.showConfirm(s)
            } else if (7 == n.rescode && 11 == n.bizcode) {
                try {
                    _T.sendEvent("hunter_account_freeze")
                } catch(e) {}
                var s = {
                    content: '<div class="sign-hunter-gray">由于您的账号涉及违规，暂不支持使用。</div>',
                    title: "账号锁定",
                    confirmButton: "知道了",
                    columnClass: "pop-sign-hunter"
                };
                Sign.showConfirm(s)
            } else if (7 == n.rescode && 12 == n.bizcode) {
                try {
                    _T.sendEvent("hunter_account_locked")
                } catch(e) {}
                var s = {
                    content: '<div class="sign-hunter-gray">                            <i class="icon-fail"></i>                            <div class="freeze-container"><p class="reject-title">非常抱歉，您的账号已被冻结</p>                            <p class="reject-reason">' + n.resmsg + '</p>                            <p>您可以通过以下方式申诉</p>                            <div class="reject-content">                            请使用邮箱：' + n.userEmail + "<br />发送邮件至boss@kanzhun.com<br />                            邮件标题格式：冻结申诉+您的注册手机号<br />                            邮件内容请填写您的公司全称和其他申诉内容                            </div></div>                            </div>",
                    title: "",
                    closeIcon: !0,
                    confirmButton: "知道了",
                    columnClass: "pop-sign-hunter sign-freeze"
                };
                Sign.showConfirm(s)
            } else {
                var s = {
                    content: n.resmsg,
                    confirmButton: "知道了",
                    openCallback: function(e) {
                        e.$confirmButton.parent().css("text-align", "center")
                    }
                };
                Sign.showConfirm(s)
            } else {
                var s = {
                    content: '<div class="sign-hunter-gray">您的BOSS直聘账户中有未使用的道具，或钱包中有零钱，切换为猎头身份后将无法使用。<br />\t\t\t\t\t\t\t请先登录APP将付费产品消耗或提现零钱，再重新登录猎头端。</div>',
                    title: "请您先清空付费产品或提现零钱",
                    confirmButton: "知道了",
                    columnClass: "pop-sign-hunter"
                };
                Sign.showConfirm(s)
            }
            i && t.html("发送验证码").removeClass("btn-disabled"),
            e.find(".ipt-code").val(""),
            e.find(".verifyimg").click()
        } else if (9 == n.rescode) {
            if (1 == n.bizcode || 0 == n.bizcode) {
                var s = {
                    content: '<p>您当前身份为BOSS，是否切换为猎头？</p><ul class="pop-content"><li>为牛人服务，严禁猎头冒充BOSS</li><li>切换为猎头身份后，您将获得BOSS直聘的高端牛人简历，享有更具竞争力的猎头会员服务。</li><li>猎头身份生效后，您不能以BOSS身份登录APP</li></ul>',
                    title: "您将要切换为猎头身份",
                    cancelButton: "取消",
                    confirmButton: "切换为猎头",
                    columnClass: "pop-sign-hunter",
                    openCallback: function(e) {
                        e.$confirmButton.parent().css("text-align", "center")
                    },
                    confirmCallback: function() {
                        window.location.href = "/user/transto/headhunter.html?token=" + n.token
                    },
                    cancelCallback: function() {
                        window.location.href = "https://www.zhipin.com/logoutToUrl/?toUrl=https://lie.zhipin.com"
                    }
                };
                Sign.showConfirm(s)
            } else if (7 == n.bizcode) {
                var s = {
                    content: '<p>您当前系统身份为牛人，是否切换为猎头？</p><ul class="pop-content"><li>切换为猎头身份后，您将获得BOSS直聘的高端牛人简历，享有更具竞争力的猎头会员服务。</li><li>猎头身份生效后，您不能以牛人身份登录APP</li></ul>',
                    title: "您将要切换为猎头身份",
                    cancelButton: "取消",
                    confirmButton: "切换为猎头",
                    columnClass: "pop-sign-hunter",
                    openCallback: function(e) {
                        e.$confirmButton.parent().css("text-align", "center")
                    },
                    confirmCallback: function() {
                        window.location.href = "/user/transto/headhunter.html?token=" + n.token
                    },
                    cancelCallback: function() {
                        window.location.href = "https://www.zhipin.com/logoutToUrl/?toUrl=https://lie.zhipin.com"
                    }
                };
                Sign.showConfirm(s)
            } else if (6 == n.bizcode || 8 == n.bizcode) {
                var s = {
                    content: '<p>您已注册过BOSS直聘，是否切换为猎头身份？</p><ul class="pop-content"><li>为牛人服务，严禁猎头冒充BOSS</li><li>切换为猎头身份后，您将获得BOSS直聘的高端牛人简历，享有更具竞争力的猎头会员服务。</li><li class="bold">您的BOSS直聘账户中剩余' + n.beancount + "个直豆，切换为猎头身份后无法使用。但直豆仍会保留。</li><li>猎头身份生效后，您不能以牛人或BOSS身份登录APP</li></ul>",
                    title: "您将要切换为猎头身份",
                    cancelButton: "取消",
                    confirmButton: "切换为猎头",
                    columnClass: "pop-sign-hunter",
                    openCallback: function(e) {
                        e.$confirmButton.parent().css("text-align", "center")
                    },
                    confirmCallback: function() {
                        window.location.href = "/user/transto/headhunter.html?token=" + n.token
                    },
                    cancelCallback: function() {
                        window.location.href = "https://www.zhipin.com/logoutToUrl/?toUrl=https://lie.zhipin.com"
                    }
                };
                Sign.showConfirm(s)
            } else if ( - 1 == n.rescode) Sign.showError(e, n.resmsg);
            else {
                var s = {
                    content: '<p>您当前身份为BOSS，请选择是否将身份切换为猎头</p><ul class="pop-content"><li>选择猎头身份后，您将以猎头身份发布职位、搜索查看\t简历、更高效的联系牛人</li><li>猎头身份与BOSS身份只可选择一个，选择猎头身份后，不能再以Boss身份登录</li></ul>',
                    title: "选择身份",
                    cancelButton: "取消",
                    confirmButton: "切换为猎头",
                    columnClass: "pop-sign-hunter",
                    openCallback: function(e) {
                        e.$confirmButton.parent().css("text-align", "center")
                    },
                    confirmCallback: function() {
                        window.location.href = "/user/transto/headhunter.html?token=" + n.token
                    },
                    cancelCallback: function() {
                        window.location.href = "https://www.zhipin.com/logoutToUrl/?toUrl=https://lie.zhipin.com"
                    }
                };
                Sign.showConfirm(s)
            }
            i && t.html("发送验证码").removeClass("btn-disabled"),
            e.find(".ipt-code").val(""),
            e.find(".verifyimg").click()
        } else if (6 == n.rescode) Sign.showError(e, "短信验证码错误", !0);
        else if (10002 == n.rescode) $.dialog({
            title: "",
            content: '<div style="padding: 4px 0 30px;">请切换至牛人身份，再重新尝试</div>',
            type: "error",
            closeText: !0,
            confirmText: "确定",
            cancelText: !1,
            preKa: "",
            wrapClass: "dialog-icons-default",
            lock: !0
        });
        else if (10004 == n.rescode) $.dialog({
            title: "",
            content: '<div style="padding: 4px 0 30px;">您的简历信息已完善，直接去登录即可 </div>',
            type: "error",
            closeText: !0,
            confirmText: "确定",
            cancelText: !1,
            preKa: "",
            wrapClass: "dialog-icons-default",
            lock: !0
        });
        else if (400023 == n.rescode) UserCheck.checkPhone("/login/phone.json", null, e.find("input[name=account]").val(), e.find("input[name=regionCode]").val());
        else if (400046 == n.rescode) $.dialog({
            title: "绑定失败",
            content: "您当前使用的微信号已绑定过BOSS直聘账号，请登录其他微信号再重试",
            closeText: !0,
            cancelText: "",
            confirmText: "知道了",
            wrapClass: "dialog-prop-default pop-sign-wechat",
            onConfirm: function(e) {
                e.remove()
            }
        }),
        i && t.html("发送验证码").removeClass("btn-disabled"),
        e.find(".ipt-code").val(""),
        e.find(".verifyimg").click();
        else if (400041 == n.rescode) $.dialog({
            title: "绑定失败",
            content: "当前BOSS直聘账号已绑定过微信，可直接使用关联的微信扫码登录",
            closeText: !0,
            cancelText: "",
            confirmText: "知道了",
            wrapClass: "dialog-prop-default pop-sign-wechat",
            onConfirm: function(e) {
                e.remove()
            }
        }),
        i && t.html("发送验证码").removeClass("btn-disabled"),
        e.find(".ipt-code").val(""),
        e.find(".verifyimg").click();
        else if (n.rescode > 4e5 && n.rescode < 401e3) if (400031 == n.rescode) Sign.showError(e, n.resmsg, !0);
        else {
            var a = "";
            switch (n.rescode) {
            case 400026:
                a = "根据相关法律规定，因您未满16周岁，暂不支持使用，直至您年满16周岁账号自动解冻！";
                break;
            case 400027:
                a = "账号已冻结，请登录BOSS直聘 APP 按照提示完成解冻操作。";
                break;
            case 400021:
                a = "该手机号已注销，无法注册";
                break;
            case 400033:
            case 400034:
                a = "您的账户存在安全隐患，请使用短信验证码登录。";
                break;
            default:
                a = n.resmsg
            }
            $.dialog({
                title: "提示",
                content: a,
                closeText: !0,
                cancelText: "",
                confirmText: "知道了",
                wrapClass: "dialog-prop-default",
                onConfirm: function(e) {
                    e.remove()
                }
            }),
            i && t.html("发送验证码").removeClass("btn-disabled"),
            e.find(".ipt-code").val("")
        } else Sign.showError(e, n.resmsg, !0),
        i && t.html("发送验证码").removeClass("btn-disabled"),
        e.find(".ipt-code").val("")
    },
    callbackPwd: function(e, t) {
        try {
            _T.sendEvent(e.closest(".sign-form").data("flow") + "_done")
        } catch(e) {}
        return Sign.source ? void(window.location.href = Sign.directUrls[Sign.source]) : isZpdesk && 1 != t.identity ? void Sign.showDeskGeekTip() : void(t.toUrl ? window.location.href = decodeURIComponent(t.toUrl) : 1 == t.identity ? window.location.href = "https://www.zhipin.com/chat/im": $(".page-sign").length ? window.location.href = "https://www.zhipin.com/": window.location.reload())
    },
    callbackSms: function(e, t) {
        e.closest(".sign-form").find(".tip-error");
        try {
            _T.sendEvent(e.closest(".sign-form").data("flow") + "_done")
        } catch(e) {}
        return Sign.source ? void(window.location.href = Sign.directUrls[Sign.source]) : isZpdesk && 1 != t.identity ? void Sign.showDeskGeekTip() : void(t.toUrl ? window.location.href = decodeURIComponent(t.toUrl) : 1 == t.identity ? window.location.href = "https://www.zhipin.com/chat/im": $(".page-sign").length ? window.location.href = "https://www.zhipin.com/": window.location.reload())
    },
    callbackWechatBind: function(e, t) {
        try {
            _T.sendEvent(e.closest(".sign-form").data("flow") + "_done")
        } catch(e) {}
        return Sign.source ? void(window.location.href = Sign.directUrls[Sign.source]) : isZpdesk && 1 != t.identity ? void Sign.showDeskGeekTip() : void(t.toUrl ? window.location.href = decodeURIComponent(t.toUrl) : 1 == t.identity ? window.location.href = "https://www.zhipin.com/chat/im": $(".page-sign").length ? window.location.href = "https://www.zhipin.com/": window.location.reload())
    },
    callbackWechatBindRegister: function(e, t) {
        var i = $(".sign-wrap"),
        n = e.find('input[name="purpose"]').val(),
        s = "g";
        "1" == n && (s = "b");
        try {
            _T.sendEvent(e.closest(".sign-form").data("flow") + "_done_" + s)
        } catch(e) {}
        if (e.closest(".pop-sign-box").length && (i = e.closest(".pop-sign-box")), t.toUrl) {
            $.toast({
                content: "注册成功，3s后自动跳转完善页面",
                type: "success"
            });
            var a = "";
            a = -1 != t.toUrl.indexOf("http") ? t.toUrl: "https://www.zhipin.com" + t.toUrl,
            setTimeout(function() {
                window.location.href = decodeURIComponent(a)
            },
            3e3)
        } else Sign.source ? ($.toast({
            content: "注册成功",
            type: "success"
        }), setTimeout(function() {
            window.location.href = Sign.directUrls[Sign.source]
        },
        3e3)) : Sign.showPannel(i, "welcome")
    },
    callbackRegister: function(e, t) {
        var i = $(".sign-wrap"),
        n = e.find('input[name="purpose"]').val(),
        s = "g";
        "1" == n && (s = "b");
        try {
            _T.sendEvent(e.closest(".sign-form").data("flow") + "_done_" + s)
        } catch(e) {}
        if (e.closest(".pop-sign-box").length && (i = e.closest(".pop-sign-box")), t.toUrl) {
            $.toast({
                content: "注册成功，3s后自动跳转完善页面",
                type: "success"
            });
            var a = "";
            a = -1 != t.toUrl.indexOf("http") ? t.toUrl: "https://www.zhipin.com" + t.toUrl,
            setTimeout(function() {
                window.location.href = decodeURIComponent(a)
            },
            3e3)
        } else Sign.source ? ($.toast({
            content: "注册成功",
            type: "success"
        }), setTimeout(function() {
            window.location.href = Sign.directUrls[Sign.source]
        },
        3e3)) : Sign.showPannel(i, "welcome")
    },
    callbackCheckRegister: function(e, t) {
        try {
            _T.sendEvent(e.closest(".sign-form").data("flow") + "_done")
        } catch(e) {}
        var i = e.parents(".login-wechat").find(".bind-box"),
        n = i.find("form"),
        s = i.find('form .btn[type="submit"]');
        e.parents(".login-wechat .register-box").addClass("hide"),
        i.removeClass("hide"),
        i.find(".ipt-phone").val(t.account),
        Sign.init(i),
        t.isRegistered ? (n.attr("action", "/login/headhunter/phone.json"), n.find('input[name="smsType"]').val(4), s.text("登录，并绑定手机号")) : (n.attr("action", "/registe/headhunter/save.json"), n.parents(".sign-form").removeClass(".sign-sms"), n.find('input[name="smsType"]').val(5), s.text("注册"), n.parents(".sign-form").removeClass("sign-sms").addClass("sign-register"))
    },
    showConfirm: function(e) {
        $.confirm({
            content: e.content,
            title: e.title,
            closeIcon: !!e.closeIcon && e.closeIcon,
            cancelButton: !!e.cancelButton && e.cancelButton,
            confirmButton: !!e.confirmButton && e.confirmButton,
            columnClass: e.columnClass || "defaultConfirm",
            backgroundDismiss: !1,
            onOpen: function() {
                e.openCallback && e.openCallback(this)
            },
            confirm: function() {
                e.confirmCallback && e.confirmCallback()
            },
            cancel: function() {
                e.cancelCallback && e.cancelCallback()
            }
        })
    },
    showError: function(e, t, i, n) {
        var s = e.closest(".sign-form");
        if (n && n.length || (n = s.find(".tip-error")), n.text(t), "短信验证码错误" == t ? e.find(".ipt-sms").focus().val("") : i && e.find(".verifyimg").length && (e.find(".ipt-code").val(""), e.find(".verifyimg").click()), i) try {
            _T.sendEvent(e.closest(".sign-form").data("flow") + "_error")
        } catch(e) {}
        isTouch && $(window).width() < 800 && Sign.showToast(t),
        (s.hasClass("sign-bind-wechat-signin") || s.hasClass("sign-bind-wechat-signup")) && $.toast({
            type: "error",
            content: t
        })
    },
    hideError: function(e, t) {
        t = t || e.closest(".sign-form").find(".tip-error"),
        t.text("")
    },
    showToast: function(e) {
        var t = $('<div class="toast"><p>' + e + "</p></div>");
        $(".toast").length && $(".toast").remove(),
        Sign.timerToast && clearTimeout(Sign.timerToast),
        $("body").append(t),
        $(".toast").show(),
        Sign.timerToast = setTimeout(function() {
            Sign.hideToast(t)
        },
        2e3)
    },
    hideToast: function() {
        $(".toast").fadeOut(function() {
            $(".toast").remove()
        })
    },
    countDown: function(e, t) {
        var i = parseInt(e.find(".num").text().replace("s"), 10);
        Sign.interCount = setInterval(function() {
            i--,
            e.find(".num").text(i + "s"),
            i <= 0 && (t(), clearInterval(Sign.interCount), Sign.interCount = null)
        },
        1e3)
    },
    scanValid: function() {
        setTimeout(function() {
            $(".sign-scan .invalid-box").show()
        },
        18e4)
    },
    scanPending: function(e) {
        var t = e.find(".sign-scan .uuid").val(),
        i = e.find(".sign-scan .qrcodeimg-box img").data("url");
        t && e.find(".sign-scan").is(":visible") && $.ajax({
            type: "GET",
            url: "/scan?uuid=" + t,
            dataType: "json",
            cache: !1,
            timeout: 1e5,
            success: function(n) {
                if (n.scaned) {
                    var s = e.find(".sign-scan").length ? e.find(".sign-scan").data("flow") : "web";
                    "validate" in n && n.validate ? (Sign.sendKaEvent(s + "_done"), isZpdesk ? Sign.checkDeskIsBoss(function(e) {
                        1 == e ? window.location.href = i + t: Sign.showDeskGeekTip()
                    }) : window.location.href = i + t) : "allweb" in n && n.allweb ? (Sign.sendKaEvent(s + "_done"), isZpdesk ? Sign.checkDeskIsBoss(function(e) {
                        1 == e ? window.location.href = i + t: Sign.showDeskGeekTip()
                    }) : window.location.href = i + t) : ("validate" in n && n.validate, Sign.sendKaEvent(s + "_error"), setTimeout("window.location.reload()", 3e3))
                } else e.find(".sign-scan").is(":visible") && "none" == $(".sign-scan .invalid-box").css("display") && Sign.scanPending(e)
            },
            error: function() {
                e.find(".sign-scan").is(":visible") && "none" == $(".sign-scan .invalid-box").css("display") && setTimeout(function() {
                    Sign.scanPending(e)
                },
                5e3)
            }
        })
    },
    showDeskGeekTip: function() {
        $.confirm({
            content: "你当前是牛人身份，请在 BOSS直聘 APP 的『设置』选项中切换身份后重试",
            title: "请切换为 Boss 身份后登录",
            closeIcon: !1,
            cancelButton: !1,
            confirmButton: "确定",
            columnClass: "",
            backgroundDismiss: !1,
            onOpen: function() {
                this.$confirmButton.parent().css("text-align", "center")
            },
            confirm: function() {},
            error: function(e) {}
        }),
        Cookie.del("t", ".zhipin.com", "/"),
        Cookie.del("wt", ".zhipin.com", "/")
    },
    checkDeskIsBoss: function(e) {
        $.ajax({
            type: "post",
            url: "/user/identity/check.json",
            dataType: "json",
            success: function(t) {
                1 == t.rescode ? e(t.identity) : alert("登录失败，请稍后再试")
            },
            error: function() {
                alert("登录失败，请稍后再试")
            }
        })
    },
    checkIsScanned: function(e) {
        var t = e.find(".scene").val(),
        i = e.find(".qrcodeimg-box img").data("url");
        t && e.is(":visible") && $.ajax({
            type: "GET",
            url: "/scan?uuid=" + t,
            dataType: "json",
            cache: !1,
            timeout: 1e5,
            success: function(n) {
                n.scaned ? (_T.sendEvent("wx_sao_success_" + t), $(".sign-wrap .sign-form").hide(), $(".sign-succ").show(), setTimeout(function() {
                    window.location.href = i
                },
                3e3)) : e.is(":visible") && "none" == e.find(".invalid-box").css("display") && Sign.checkIsScanned(e)
            },
            error: function() {
                e.is(":visible") && "none" == e.find(".invalid-box").css("display") && setTimeout(function() {
                    Sign.checkIsScanned(e)
                },
                5e3)
            }
        })
    },
    RegScanValid: function(e) {
        setTimeout(function() {
            e.find(".invalid-box").show()
        },
        18e4)
    },
    sendKaEvent: function(e) {
        try {
            _T.sendEvent(e)
        } catch(e) {}
    }
};
$(function() {
    $(".sign-wrap").length && $(".sign-wrap").is(":visible") && Sign.init($(".sign-wrap:visible")),
    void 0 !== PlaceholderCheck && PlaceholderCheck.init(),
    $(".sign-resume-wrapper").length && Sign.init($(".sign-resume-wrapper"))
});
var hunterSign = {
    init: function() { ($(".hunter-index").length || $(".hunter-register").length) && ($(".hunter-index .btn-sign").on("click",
        function() {
            hunterSign.showPop($(this))
        }), $(".hunter-register").length && Sign.dropSelect($(this).find(".sign-form")), hunterSign.setErcode(), $(".hunter-index").find(".sign-form .tab span").on("click",
        function() {
            hunterSign.switchTab($(this))
        }), $(".hunter-register").find(".register-op").on("click",
        function() {
            hunterSign.switchRegister($(this))
        }), hunterSign.elAnimate(), $(window).scroll(function() {
            hunterSign.elAnimate(),
            $(window).scrollTop() >= 50 ? $(".fix-container").slideDown() : $(".fix-container").slideUp()
        }), $(window).scrollTop() >= 50 ? $(".fix-container").slideDown() : $(".fix-container").slideUp())
    },
    showPop: function(e) {
        $.confirm({
            content: $(".sign-wrap").html(),
            title: !1,
            confirmButton: !1,
            cancelButton: !1,
            closeIcon: !0,
            columnClass: "pop-sign-box",
            onOpen: function() {
                var t = this;
                e.hasClass("btn-register") && (t.$content.find(".sign-form").hide(), t.$content.find(".sign-register").show()),
                Sign.init(t.$content)
            }
        })
    },
    switchTab: function(e) {
        var t = e.index(),
        i = e.parents(".sign-form");
        e.addClass("cur").siblings().removeClass("cur"),
        i.find(".tab-container").eq(t).show().siblings(".tab-container").hide(),
        0 == t && ($(".code-container .overdue").hide(), hunterSign.setErcode()),
        i.find(".tip-error").html("")
    },
    switchRegister: function(e) {
        var t = e.parents(".login-container").index(),
        i = e.parents(".login-wechat");
        i.find(".login-container").eq(t).addClass("hide").siblings().removeClass("hide"),
        Sign.init(),
        i.find(".tip-error").html("")
    },
    isVisible: function(e) {
        return $(window).height() > e.offset().top - $(window).scrollTop() + 100
    },
    elAnimate: function() {
        hunterSign.isVisible($(".hunter-index .info-box").eq(0)) && $(".hunter-index .info-box").eq(0).animate({
            marginTop: "0",
            opacity: "1"
        },
        400),
        hunterSign.isVisible($(".hunter-index .info-box").eq(1)) && $(".hunter-index .info-box").eq(1).animate({
            marginTop: "76px",
            opacity: "1"
        },
        300)
    },
    setErcode: function() {
        if ($("#login_container").length && _PAGE.appid) {
            var e = (new WxLogin({
                id: "login_container",
                appid: _PAGE.appid,
                scope: _PAGE.scope,
                redirect_uri: _PAGE.redirectUri,
                state: "",
                style: "",
                href: window.location.origin + "/v2/web/hunter/css/hunter-index.css"
            }), $(".code-container .overdue"));
            setTimeout(function() {
                e.is(":visible") || e.show()
            },
            6e4),
            e.find(".btn-refresh").on("click",
            function() {
                setTimeout(function() {
                    e.is(":visible") || e.show()
                },
                6e4),
                e.hide();
                new WxLogin({
                    id: "login_container",
                    appid: _PAGE.appid,
                    scope: _PAGE.scope,
                    redirect_uri: _PAGE.redirectUri,
                    state: "",
                    style: "",
                    href: window.location.origin + "/v2/web/hunter/css/hunter-index.css"
                })
            })
        }
    }
};
$(function() {
    hunterSign.init()
});
var GeekAccount = {
    URL: {
        mobile: {
            url: "/user/update/mobile.json",
            method: "POST"
        },
        sendsms: {
            url: "/user/account/sendsms.json",
            method: "POST"
        },
        password: {
            url: "/user/update/password.json",
            method: "POST"
        },
        del: {
            url: "/setting/geek/replyword/del.json",
            method: "get"
        },
        add: {
            url: "/setting/geek/replyword/add.json",
            method: "get"
        },
        greeting: {
            url: "/geek/update/greeting.json",
            method: "POST"
        }
    },
    init: function() {
        this.changeTab(),
        this.requestData($(".account-container .set-page"), $(".account-container .set-page ul li.cur").data("tab"), $(".account-container .set-page ul li.cur").data("url"))
    },
    showModalToast: function(e, t) {
        $.toast({
            content: e,
            lock: !0,
            type: t,
            wrapClass: "",
            position: "top",
            time: 3e3
        })
    },
    appendAccount: function() {
        $(".account-container .set-page .set-nav").prepend('<div class="account-manager">账号设置</div>')
    },
    changeTab: function() {
        var e = this;
        $(".account-container .set-page ul").on("click", "li",
        function() {
            $(this).siblings("li").removeClass("cur"),
            $(this).addClass("cur");
            var t = $(this).data("url"),
            i = $(this).data("tab");
            e.requestData($(".account-container .set-page"), i, t)
        })
    },
    switchGreetingBtn: function() {
        var e = this;
        $(".account-container .sayhello-form").on("click", ".switch-op .op-switch",
        function() {
            var t = $(this);
            t.hasClass("op-switch-on") ? e.submitSwitch(0, t) : e.submitSwitch(1, t)
        })
    },
    submitSwitch: function(e, t) {
        if (!t.hasClass("disabled")) {
            t.addClass("disabled");
            var i = this;
            $.ajax({
                url: i.URL.greeting.url,
                method: i.URL.greeting.method,
                dataType: "json",
                data: {
                    status: e
                },
                success: function(n) {
                    1 == n.rescode ? (i.showModalToast("设置成功", "success"), i.switchSuccessFn(e, t)) : 0 == n.rescode && i.showModalToast(n.resmsg, "error"),
                    t.removeClass("disabled")
                },
                error: function() {
                    t.removeClass("disabled")
                }
            })
        }
    },
    switchSuccessFn: function(e, t) {
        var i = t.parents(".switch-op").siblings("p.gray"),
        n = {
            0 : "招呼语已关闭，系统将不再为您发出打招呼语，您可能会收到更少Boss的回复",
            1 : "选择一个招呼语，在您和Boss发起聊天时，系统为您自动发出"
        };
        if (0 == e) {
            t.removeClass("op-switch-on").addClass("op-switch-off"),
            t.parents(".setting-switch").siblings().remove(),
            i.text(n[0]);
            try {
                _T.sendEvent("icebreaker_off")
            } catch(e) {}
        } else {
            try {
                _T.sendEvent("icebreaker_on")
            } catch(e) {}
            t.parents(".set-content").siblings(".set-nav").find("ul li.cur").trigger("click")
        }
    },
    requestData: function(e, t, i) {
        var n = this;
        $.ajax({
            url: i,
            method: "get",
            dataType: "json",
            success: function(i) {
                i.rescode && (e.find(".set-content").remove(), "" == i.html && e.append('<div class="set-content"></div>'), e.append(i.html));
                var s = $(".account-container .bind-phone .operate-area .phone-num");
                s.html();
                switch (t) {
                case "phone":
                    n.formValidate(),
                    n.confirmChangePhone(),
                    n.randomImage(),
                    n.dropSelect($(".phone-form")),
                    $(".ipt-message-code").attr("maxlength", "6");
                    break;
                case "pwd":
                    n.confirmChangePassword();
                    break;
                case "usalchat":
                    n.chatTabOperate(),
                    n.chatUseSentence();
                    break;
                case "sayhello":
                    n.submitUsal(),
                    n.switchGreetingBtn()
                }
            }
        })
    },
    submitUsal: function() {
        var e = this,
        t = $(".sayhello-form"),
        i = $(".sayhello-form").find(".ipt-area");
        $(".account-container .sayhello-form").on("change", ".radio-list .radio input",
        function() {
            var t = $(this).val();
            $.ajax({
                url: e.URL.greeting.url,
                method: e.URL.greeting.method,
                dataType: "json",
                data: {
                    status: 1,
                    templateId: t
                },
                success: function(e) {
                    if (1 == e.rescode) $.toast({
                        content: "设置成功",
                        lock: !0,
                        type: "success",
                        wrapClass: "",
                        position: "top",
                        time: 3e3
                    });
                    else if (0 == e.rescode) {
                        var t = e.resmsg;
                        $.toast({
                            content: t,
                            lock: !0,
                            type: "error",
                            wrapClass: "",
                            position: "top",
                            time: 3e3
                        })
                    }
                }
            })
        }),
        t.on("click", ".op-sentence .link-add",
        function() {
            t.find(".defined-form").addClass("show-defined-form"),
            t.find(".btn-remove").hide(),
            t.find('.defined-form input[name="templateId"]').val(""),
            t.find(".defined-form .ipt-area").text("").val("").focus(),
            $(window).scrollTop($(".account-container").height()),
            e.countArea(i),
            t.find(".defined-form .tip-text").text("请不要填写手机、QQ、微信等联系方式或广告信息，否则系统将封禁您的账号！")
        }),
        t.on("click", ".link-modify",
        function() {
            var n = $(this).closest("li").find("span").text();
            t.find(".defined-form").addClass("show-defined-form"),
            t.find(".defined-form .ipt-area").focus(),
            i.text(n).val(n),
            t.find('input[name="templateId"]').val($(this).closest("li").find('input[name="sendMsg"]').val()),
            t.find(".btn-remove").show(),
            $(window).scrollTop($(".account-container").height()),
            e.countArea(i),
            t.find(".defined-form .tip-text").text("请不要填写手机、QQ、微信等联系方式或广告信息，否则系统将封禁您的账号！")
        }),
        i.on("input",
        function() {
            e.countArea($(this))
        }),
        t.on("click", ".defined-form .btns .btn",
        function() {
            if ($(this).hasClass("btn-back")) $(this).closest(".defined-form").removeClass("show-defined-form");
            else if ($(this).hasClass("btn-remove")) e.delGreetingword($(this));
            else {
                if ($(this).closest("dl").find(".defined-form .count-num .red").length) return ! 1;
                e.postGreetingWord($(this))
            }
        })
    },
    chatTabOperate: function() {
        var e = this;
        $(".account-container .set-usalbox").on("click", ".op-sentence .link-add",
        function() {
            $(this).closest("dl").find(".defined-form").addClass("show-defined-form"),
            $(this).closest("dl").find(".defined-form .ipt-area").focus(),
            $(this).closest("dl").find(".defined-form .tip-text").text("请不要填写手机、QQ、微信等联系方式或广告信息，否则系统将封禁您的账号！"),
            $(window).scrollTop($(".account-container").height()),
            $(this).closest("dl").find(".count-num").length && e.countArea($(this).closest("dl").find(".ipt-area"))
        }),
        $(".account-container .defined-form .ipt-area").on("input",
        function() {
            e.countArea($(this))
        }),
        $(".set-usalbox").on("click", ".defined-form .btns .btn",
        function() {
            if ($(this).hasClass("btn-back")) $(this).closest("dl").find(".defined-form").removeClass("show-defined-form"),
            $(".account-container .defined-form .ipt-area").val("");
            else {
                if ("" == $(this).closest("dl").find(".defined-form .ipt-area").val().replace(/(\s*$)/g, "")) return $(this).closest("dl").find(".defined-form .tip-text").text("请输入正确的常用语"),
                $(this).closest("dl").find(".defined-form .ipt-area").focus(),
                !1;
                if ($(this).closest("dl").find(".defined-form .count-num .red").length) return $(this).closest("dl").find(".defined-form .tip-text").text("常用语不能超过200个字"),
                $(this).closest("dl").find(".defined-form .ipt-area").focus(),
                !1;
                e.renderList($(".account-container .defined-form .ipt-area").val())
            }
        }),
        $(".set-usalbox .sentence-list").on("click", ".link-remove",
        function() {
            e.delData($(this)),
            e.chatUseSentence()
        })
    },
    delData: function(e) {
        var t = this,
        e = e;
        e.attr("data-url"),
        e.closest(".sentence-list");
        $.dialog({
            title: "",
            content: "确认删除该条常用语吗？",
            confirmText: "确定",
            element: e,
            cancelText: "取消",
            inline: !0,
            opacityLock: !0,
            wrapClass: "dialog-around-default",
            onOpen: function(e) {
                e.find(".dialog-footer .btns .btn-cancel").attr("ka", "chatwords_delete_cancel"),
                e.find(".dialog-footer .btns .btn-sure").attr("ka", "chatwords_delete_sure")
            },
            onConfirm: function(i) {
                $.ajax({
                    url: t.URL.del.url,
                    method: t.URL.del.method,
                    data: {
                        id: e.attr("data-id")
                    },
                    dataType: "json",
                    success: function(i) {
                        if (1 == i.rescode) e.closest("li").fadeOut(function() {
                            e.parent("li").remove(),
                            t.chatUseSentence()
                        });
                        else {
                            var n = i.resmsg;
                            $.toast({
                                content: n,
                                lock: !0,
                                type: "error",
                                wrapClass: "",
                                position: "top",
                                time: 3e3
                            })
                        }
                    }
                })
            },
            onClose: function(e) {}
        })
    },
    postGreetingWord: function(e) {
        var t = e.closest("form"),
        i = t.attr("action"),
        n = t.serialize();
        return "" == t.find(".ipt-area").val().replace(/(\s*$)/g, "") ? (t.find(".tip-text").text("请输入正确的打招呼语"), t.find(".ipt-area").focus(), !1) : t.find(".count-num .red").length ? (t.find(".tip-text").text("打招呼语不能超过60个字"), t.find(".ipt-area").focus(), !1) : !e.hasClass("disabled") && (e.addClass("disabled"), void $.ajax({
            url: i,
            type: "POST",
            data: n,
            dataType: "JSON",
            timeout: 3e4,
            success: function(i) {
                if (i.rescode) {
                    var n = e.closest(".sayhello-form");
                    e.closest(".show-defined-tab").length ? ($.toast({
                        content: "保存成功",
                        type: "success"
                    }), e.closest(".show-defined-tab").find("li.cur").attr("data-text", filterXss(t.find(".ipt-area").val()))) : (n.find(".defined-form").removeClass("show-defined-form"), n.find(".sentence-list").length && n.find(".sentence-list ul").append(i.html), n.find(".sayhello-list").length && (t.find('input[name="templateId"]').val() ? n.find('input[value="' + t.find('input[name="templateId"]').val() + '"]').closest("li").find("span").text(t.find(".ipt-area").val()) : (n.find(".sayhello-list ul").append(i.html), n.find(".op-sentence").hide())))
                } else $.toast({
                    content: i.resmsg,
                    type: "error"
                });
                e.removeClass("disabled"),
                t.find(".tip-text").text("请不要填写手机、QQ、微信等联系方式或广告信息，否则系统将封禁您的账号！")
            },
            error: function(i) {
                e.removeClass("disabled"),
                t.find(".tip-text").text("请不要填写手机、QQ、微信等联系方式或广告信息，否则系统将封禁您的账号！"),
                $.toast({
                    content: "保存失败，请检查网络后重试",
                    type: "error"
                })
            }
        }))
    },
    delGreetingword: function(e) {
        var e = e,
        t = e.closest("form");
        $.dialog({
            title: "确认删除该条打招呼语吗？",
            content: "",
            confirmText: "确定",
            cancelText: "取消",
            wrapClass: "dialog-chat-default dialog-alert-default setting-remove-dialog",
            onOpen: function(e) {},
            onConfirm: function(i) {
                var n = t.find('input[name="templateId"]').val(),
                s = t.closest(".sayhello-form").find('input[name="sendMsg"]').eq(0).val();
                $.ajax({
                    url: "/geek/delete/customgreeting.json",
                    type: "POST",
                    data: {
                        templateId: n,
                        candidateId: s
                    },
                    dataType: "JSON",
                    timeout: 3e4,
                    success: function(s) {
                        s.rescode ? ($.toast({
                            content: "删除成功",
                            type: "success"
                        }), t.closest(".sayhello-form").find('.sayhello-list input[value="' + n + '"]').closest("li").remove(), t.closest(".sayhello-form").find('.sayhello-list input[type="radio"]').eq(0).prop("checked", "checked"), t.find(".ipt-area").text("").val(""), t.find('input[name="templateId"]').val(""), e.closest(".defined-form").removeClass("show-defined-form"), t.closest(".sayhello-form").find(".op-sentence").show()) : $.toast({
                            content: s.resmsg,
                            type: "error"
                        }),
                        i.remove()
                    },
                    error: function(e) {
                        $.toast({
                            content: "删除失败，请稍后再试",
                            type: "error"
                        }),
                        i.remove()
                    }
                })
            },
            onClose: function(e) {}
        })
    },
    renderList: function(e) {
        var t = this;
        $.ajax({
            url: t.URL.add.url,
            method: t.URL.add.method,
            dataType: "json",
            data: {
                word: $(".set-usalbox .ipt-area").val()
            },
            success: function(e) {
                if (1 == e.rescode) $(".account-container .sentence-list ul").append(e.html),
                $(".account-container .defined-form .ipt-area").val(""),
                $(".set-usalbox .op-sentence .link-add").closest("dl").find(".defined-form").removeClass("show-defined-form"),
                t.chatUseSentence();
                else if (0 == e.rescode) {
                    var i = e.resmsg;
                    $.toast({
                        content: i,
                        lock: !0,
                        type: "error",
                        wrapClass: "",
                        position: "top",
                        time: 3e3
                    }),
                    $(".account-container .defined-form .ipt-area").focus()
                }
            }
        })
    },
    getLength: function(e) {
        if (!e) return 0;
        var t = 0,
        e = e;
        len = e.length,
        charCode = -1;
        for (var i = 0; i < len; i++) charCode = e.charCodeAt(i),
        charCode >= 0 && charCode <= 128 ? t += .5 : t += 1;
        return Math.round(t)
    },
    countArea: function(e) {
        var t = this,
        e = e,
        i = e.attr("data-range"),
        n = t.getLength(e.val()),
        s = e.closest(".defined-form").find(".count-num");
        s && s.length && (i = i.split(","), s.html("<em" + (n > i[1] ? ' class="red"': "") + ">" + n + "</em>/" + i[1]))
    },
    phoneNumShow: function(e) {
        var t = e || String(e);
        return t.slice(0, 3) + "****" + t.slice(7)
    },
    dropSelect: function(e) {
        e.find(".dropdown-select").each(function() {
            $(this).on("click",
            function() {
                $(this).hasClass("dropdown-disabled") || ($(this).toggleClass("dropdown-select-open"), $(this).closest(".form-row").find(".dropdown-menu").toggleClass("dropdown-menu-open"))
            })
        }),
        e.find(".dropdown-menu").each(function() {
            var e = $(this),
            t = e.closest(".form-row").find(".dropdown-select"),
            i = t.find(".text-select"),
            n = t.find('input[type="hidden"]');
            e.on("click", "li",
            function() {
                i.text($(this).attr("data-val")),
                n.val($(this).attr("data-val")),
                n.closest("dd").find(".tip-text").remove(),
                e.removeClass("dropdown-menu-open"),
                t.removeClass("dropdown-select-open")
            })
        }),
        $(document).on("touchend click",
        function(t) {
            $(t.target).closest(".dropdown-menu").length || $(t.target).closest(".dropdown-select").length || (e.find(".dropdown-select").removeClass("dropdown-select-open"), e.find(".dropdown-menu").removeClass("dropdown-menu-open"))
        })
    },
    getRandomkey: function(e, t) {
        var t = t,
        i = t.find(".ipt-code"),
        n = i.attr("data-url"),
        s = t.find(".randomkey");
        "" == s.val() && $.ajax({
            url: n,
            type: "POST",
            dataType: "json",
            data: {
                pk: $("#page_key_name").val()
            },
            success: function(t) {
                1 == t.rescode && (e.find(".randomkey").val(t.randomKey), s.parent().find(".verifyimg").click(), e.find(".sign-scan .qrcode-box img").attr("src", "/qrcode/" + t.qrId), e.find(".uuid").val(t.qrId))
            },
            error: function(e) {}
        })
    },
    randomImage: function() {
        var e = this,
        t = $(".phone-form .operate-area");
        if (t.find(".randomkey").length && "" == t.find(".randomkey").val()) return e.getRandomkey(t, $(".phone-form")),
        !1;
        t.find(".verifyimg").on("click",
        function() {
            $(this).attr("src", "/captcha/?randomKey=" + $(this).closest(".form-row").find(".randomkey").val() + "&_r=" + (new Date).getTime())
        })
    },
    formValidate: function() {
        var e = this;
        $(".get-message-code").on("click",
        function() {
            var t = ($(this).closest("form"), e.formPhoneValidate()),
            i = e.formImageCodeValidate();
            if (t && i) {
                var n = $(this);
                $.ajax({
                    url: e.URL.sendsms.url,
                    method: e.URL.sendsms.method,
                    dataType: "json",
                    data: {
                        randomKey: $(".phone-form .randomkey").val(),
                        regionCode: $(".phone-form .text-select").text(),
                        mobile: $(".phone-form .ipt-phone").val(),
                        captcha: $(".phone-form .ipt-image-code").val()
                    },
                    success: function(t) {
                        if (1 == t.rescode) $(".get-message-code").html('<em class="num">60s</em> 后重试').addClass("count-down"),
                        e.countDown($(".count-down"),
                        function() {
                            n.html("重新发送验证码").removeClass("count-down")
                        }),
                        $.toast({
                            content: "验证码短信已发送，请查收",
                            lock: !0,
                            type: "success",
                            wrapClass: "",
                            position: "top",
                            time: 3e3
                        });
                        else if (0 == t.rescode) {
                            var i = t.resmsg;
                            switch (t.errorType) {
                            case 1:
                                e.showError($(".ipt-phone"), i);
                                break;
                            case 2:
                                e.showError($(".ipt-image-code"), i);
                                break;
                            case 4:
                                e.showError($(".ipt-message-code"), i)
                            }
                        }
                    },
                    error: function() {
                        $.toast({
                            content: "网络错误修改失败",
                            lock: !0,
                            type: "error",
                            wrapClass: "",
                            position: "top",
                            time: 3e3
                        })
                    }
                })
            }
        })
    },
    countDown: function(e, t) {
        var i = this,
        n = parseInt(e.find(".num").text().replace("s"), 10);
        i.interCount = setInterval(function() {
            n--,
            e.find(".num").text(n + "s"),
            n <= 0 && (t(), clearInterval(i.interCount), i.interCount = null)
        },
        1e3)
    },
    formPhoneValidate: function() {
        var e = this;
        e.removeError($(".ipt-phone"));
        var t = $(".ipt-phone").val(),
        i = $(".text-select").text();
        return t.length ? /^\D+$/.test(t) ? ($(".ipt-phone").val(""), e.showError($(".ipt-phone"), "请输入正确的手机号"), $(".ipt-phone").focus(), !1) : "+86" != i || /^(1[3456789][0-9]{9})$/.test(t) ? !!/^(\d{6,11})$/.test(t) || (e.showError($(".ipt-phone"), "请输入正确的手机号"), $(".ipt-phone").focus(), !1) : (e.showError($(".ipt-phone"), "请输入正确的手机号"), $(".ipt-phone").focus(), !1) : (e.showError($(".ipt-phone"), "请输入手机号"), !1)
    },
    formMessageCodeValidate: function() {
        var e = this;
        e.removeError($(".ipt-message-code"));
        var t = $(".ipt-message-code").val();
        return t.length ? "" == t ? (e.showError($(".ipt-message-code"), "短信验证码错误"), $(".ipt-message-code").focus(), !1) : t.match(/^.{4,6}$/) ? !t.match(/\D+/) || ($(".ipt-message-code").val(""), e.showError($(".ipt-message-code"), "短信验证码错误"), $(".ipt-message-code").focus(), !1) : (e.showError($(".ipt-message-code"), "短信验证码错误"), $(".ipt-message-code").focus(), !1) : (e.showError($(".ipt-message-code"), "请输入短信验证码"), $(".ipt-message-code").focus(), !1)
    },
    formImageCodeValidate: function() {
        var e = this;
        e.removeError($(".ipt-image-code"));
        var t = $(".ipt-image-code").val();
        return t.length ? "" == t ? (e.showError($(".ipt-image-code"), "图片验证码错误"), $(".ipt-image-code").focus(), !1) : t.match(/^.{4}$/) ? !t.match(/[\u4e00-\u9fa5]/) || ($(".ipt-image-code").val(""), e.showError($(".ipt-image-code"), "图片验证码错误"), $(".ipt-image-code").focus(), !1) : (e.showError($(".ipt-image-code"), "图片验证码错误"), $(".ipt-image-code").focus(), !1) : (e.showError($(".ipt-image-code"), "请输入图片验证码"), $(".ipt-image-code").focus(), !1)
    },
    showError: function(e, t) {
        e.addClass("ipt-error"),
        e.parent(".ipt-wrap").length && e.parent(".ipt-wrap").parent(".form-row").append('<div class="tip-text">' + t + "</div>"),
        e.parent(".cell-wrap").length && (e.parent(".cell-wrap").parent(".form-row").find(".tip-text").remove(), e.parent(".cell-wrap").parent(".form-row").append('<div class="tip-text">' + t + "</div>"))
    },
    lisLength: function() {
        return $(".sentence-list ul li").length
    },
    removeError: function(e) {
        e.removeClass("ipt-error"),
        e.parent(".ipt-wrap").length ? e.parent(".ipt-wrap").parent(".form-row").find(".tip-text").remove() : e.parent(".cell-wrap").parent(".form-row").find(".tip-text").remove()
    },
    confirmChangePhone: function() {
        var e = this;
        $(".phone-form").on("submit",
        function(t) {
            $(this);
            t.preventDefault();
            var i = e.formPhoneValidate(),
            n = e.formMessageCodeValidate(),
            s = e.formImageCodeValidate();
            i && n && s && $.ajax({
                url: e.URL.mobile.url,
                method: e.URL.mobile.method,
                dataType: "json",
                data: {
                    randomKey: $(".phone-form .randomkey").val(),
                    regionCode: $(".phone-form .text-select").html(),
                    mobile: $(".phone-form .ipt-phone").val(),
                    captcha: $(".phone-form .ipt-image-code").val(),
                    smsCode: $(".phone-form .ipt-message-code").val()
                },
                success: function(t) {
                    if (1 == t.rescode) $.toast({
                        content: "手机号修改成功，请重新登录",
                        lock: !0,
                        type: "success",
                        wrapClass: "",
                        position: "top",
                        time: 3e3
                    }),
                    setTimeout(function() {
                        window.location.href = "/logout/"
                    },
                    1e3);
                    else if (0 == t.rescode) {
                        var i = t.resmsg;
                        switch (t.errorType) {
                        case 1:
                            e.showError($(".ipt-phone"), i);
                            break;
                        case 2:
                            e.showError($(".ipt-image-code"), i);
                            break;
                        case 3:
                            e.showError($(".ipt-message-code"), i)
                        }
                    }
                },
                error: function() {
                    $.toast({
                        content: "网络错误修改失败",
                        lock: !0,
                        type: "error",
                        wrapClass: "",
                        position: "top",
                        time: 3e3
                    })
                }
            })
        })
    },
    refreshPage: function(e) {
        setTimeout(function() {
            $(".account-container .set-nav ul li").eq(e).click()
        },
        300)
    },
    confirmChangePassword: function() {
        var e = this;
        $(".pwd-form").on("submit",
        function(t) {
            if (t.preventDefault(), $(this).find(".form-btn .btn-origin-pwd").length) {
                t.preventDefault();
                var i = e.pwdConfirm(),
                n = e.pwdConfirmAgain();
                i && n && $.ajax({
                    url: e.URL.password.url,
                    method: e.URL.password.method,
                    dataType: "json",
                    data: {
                        newPassword: $(".pwd-form .ipt-pwd-orginal").val()
                    },
                    success: function(t) {
                        if (1 == t.rescode) $.toast({
                            content: "密码修改成功，请重新登录",
                            lock: !0,
                            type: "success",
                            wrapClass: "",
                            position: "top",
                            time: 3e3
                        }),
                        setTimeout(function() {
                            window.location.href = "/logout/"
                        },
                        1e3);
                        else {
                            var i = t.resmsg;
                            e.showError($(".ipt-pwd-orginal"), i)
                        }
                    },
                    error: function() {}
                })
            } else $(this).find(".form-btn .btn-confirm-change-pwd").length && (t.preventDefault(), e.changePasswordConfirmSet())
        })
    },
    pwdConfirm: function() {
        var e = this,
        t = $(".ipt-pwd-orginal").val();
        return e.removeError($(".ipt-pwd-orginal")),
        t.length ? !!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(t) || (e.showError($(".ipt-pwd-orginal"), "请设置6-20位数字与字母组合密码"), $(".ipt-pwd-orginal").val(""), $(".ipt-pwd-orginal").focus(), !1) : (e.removeError($(".ipt-pwd-orginal")), e.showError($(".ipt-pwd-orginal"), "请输入密码"), !1)
    },
    pwdConfirmAgain: function() {
        var e = this,
        t = $(".ipt-pwd-orginal-confirm").val(),
        i = $(".ipt-pwd-orginal").val();
        return e.removeError($(".ipt-pwd-orginal-confirm")),
        t.length ? i === t || (e.showError($(".ipt-pwd-orginal-confirm"), "两次输入密码不一致"), $(".ipt-pwd-orginal-confirm").focus(), !1) : (e.removeError($(".ipt-pwd-orginal-confirm")), e.showError($(".ipt-pwd-orginal-confirm"), "请重复输入密码"), !1)
    },
    oldPassword: function() {
        var e = this,
        t = $(".ipt-pwd-old");
        return e.removeError(t),
        !!t.val().length || (e.showError(t, "请输入旧密码"), t.focus(), !1)
    },
    newPassword: function() {
        var e = this,
        t = $(".ipt-pwd-new");
        $(".ipt-pwd-old").val();
        e.removeError(t);
        var i = t.val();
        return i.length ? !!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(i) || (e.showError(t, "请设置6-20位数字与字母组合密码"), t.focus(), !1) : (e.showError(t, "请输入新密码"), t.focus(), !1)
    },
    setConfirmChangePassword: function() {
        var e = this,
        t = $(".ipt-pwd-confirm"),
        i = $(".ipt-pwd-new").val();
        e.removeError(t);
        var n = t.val();
        return n.length ? i === n || (e.showError(t, "两次输入密码不一致"), t.focus(), !1) : (e.showError(t, "请再次输入新密码"), t.focus(), !1)
    },
    changePasswordConfirmSet: function() {
        var e = this,
        t = e.oldPassword(),
        i = e.newPassword(),
        n = e.setConfirmChangePassword();
        t && i && n && $.ajax({
            url: e.URL.password.url,
            method: e.URL.password.method,
            dataType: "json",
            data: {
                oldPassword: $(".pwd-form .ipt-pwd-old").val(),
                newPassword: $(".pwd-form .ipt-pwd-new").val()
            },
            success: function(t) {
                if (1 == t.rescode) $.toast({
                    content: "密码修改成功，请重新登录",
                    lock: !0,
                    type: "success",
                    wrapClass: "",
                    position: "top",
                    time: 3e3
                }),
                setTimeout(function() {
                    window.location.href = "/logout/"
                },
                1e3);
                else if (0 == t.rescode) {
                    var i = t.resmsg;
                    switch (t.errorType) {
                    case 1:
                        e.showError($(".ipt-pwd-old"), i);
                        break;
                    case 2:
                        e.showError($(".ipt-pwd-new"), i)
                    }
                    e.showError($(".ipt-pwd-orginal"), i)
                }
            },
            error: function() {}
        })
    },
    chatUseSentence: function() {
        $(".account-container .sentence-list ul li").length ? $(".set-usalbox .title").length ? ($(".no-chat-wrap").addClass("hide"), $(".set-usalbox .title").removeClass("hide")) : ($(".set-usalbox .set-item").prepend('<h3 class="title">常用语</h3>'), $(".no-chat-wrap").addClass("hide")) : $(".no-chat-wrap").length ? ($(".no-chat-wrap").removeClass("hide"), $(".set-usalbox .title").addClass("hide")) : ($(".account-container .set-usalbox .set-item").prepend('<div class="no-chat-wrap"><h3 class="no-chat">您还没有常用回复语</h3><div class="no-chat-subtitle">设置常用回复语，可在沟通聊天时直接选用，减少重复输入</div></div>'), $(".account-container .set-usalbox .set-item h3.title").addClass("hide"))
    }
};
$(function() {
    window.location.href.indexOf("/geek/account/management") > 0 && GeekAccount.init()
});
var QuickSign = {
    init: function() {
        if ($(".top-sign-box").length) {
            $(".top-sign-box").find(".ipt-code").attr("maxlength", "6");
            var e = $(".top-sign-box");
            $(".show-code-box").on("click",
            function() {
                if (!$(this).hasClass("btn-disabled")) {
                    var t = $(e).find(".ipt-phone").val();
                    "" != t && /^(1[3456789][0-9]{9})$/.test(t) ? ($(".code-form-box").show(), VerrifyCode.reset($(".code-form-box .row-code"))) : $.toast({
                        content: "请输入正确的手机号",
                        type: "warning"
                    })
                }
            }),
            e.find("form").on("submit",
            function(e) {
                $(this).hasClass("btn-disabled") || (QuickSign.checkForm($(this)), e.preventDefault())
            }),
            e.find(".btn-sms").on("click",
            function() {
                var e = $(this).closest("form");
                QuickSign.checkForm(e, !0)
            }),
            e.find(".verifyimg").on("click",
            function() {
                $(this).attr("src", "/captcha/?randomKey=" + $(this).closest(".code-form-content").find(".randomkey").val() + "&_r=" + (new Date).getTime());
                try {
                    _T.sendEvent("signin_verify_code")
                } catch(e) {}
            }),
            QuickSign.getRandomkey(e, e.find("form")),
            $("body").on("click",
            function(e) {
                $(e.target).parents(".step-form").length || $(".code-form-box").hide()
            })
        }
    },
    getRandomkey: function(e, t) {
        var t = t,
        i = t.find(".ipt-code"),
        n = i.attr("data-url"),
        s = t.find(".randomkey");
        "" == s.val() && $.ajax({
            url: n,
            type: "POST",
            dataType: "json",
            data: {
                pk: $("#page_key_name").val()
            },
            success: function(t) {
                1 == t.rescode && (e.find(".randomkey").val(t.randomKey), s.parent().find(".verifyimg").click(), e.find(".sign-scan .qrcode-box img").attr("src", "/qrcode/" + t.qrId), e.find(".uuid").val(t.qrId))
            },
            error: function(e) {}
        })
    },
    callbackRegister: function(e, t) {
        var i = ($(".sign-wrap"), e.find('input[name="purpose"]').val()),
        n = "g";
        "1" == i && (n = "b");
        try {
            _T.sendEvent(e.closest(".sign-form").data("flow") + "_done_" + n)
        } catch(e) {}
        if (t.toUrl) {
            $.toast({
                content: "注册成功，3s后自动跳转完善页面",
                type: "success"
            });
            var s = "";
            s = -1 != t.toUrl.indexOf("http") ? t.toUrl: "https://www.zhipin.com" + t.toUrl,
            setTimeout(function() {
                window.location.href = decodeURIComponent(s)
            },
            3e3)
        }
    },
    countDown: function(e, t) {
        var i = parseInt(e.find(".num").text().replace("s"), 10);
        Sign.interCount = setInterval(function() {
            i--,
            e.find(".num").text(i + "s"),
            i <= 0 && (t(), clearInterval(Sign.interCount), Sign.interCount = null)
        },
        1e3)
    },
    checkForm: function(e, t) {
        var e = e,
        i = e.find(".ipt-phone"),
        n = e.find("input[name=csessionId]"),
        s = e.find(".ipt-sms");
        if (i.length) {
            if ("" == i.val()) {
                $.toast({
                    content: "请输入正确的手机号",
                    type: "warning"
                }),
                i.focus();
                try {
                    _T.sendEvent(i.closest(".sign-form").data("flow") + "_mobile")
                } catch(e) {}
                return ! 1
            }
            if (/^\D+$/.test(i.val())) return i.val(""),
            !1;
            if (!/^(1[3456789][0-9]{9})$/.test(i.val())) {
                $.toast({
                    content: "请输入正确的手机号",
                    type: "warning"
                }),
                i.focus();
                try {
                    _T.sendEvent(i.closest(".sign-form").data("flow") + "_mobile")
                } catch(e) {}
                return ! 1
            }
        }
        if (n.length && "" == n.val()) return $.toast({
            content: "图形验证码错误",
            type: "warning"
        }),
        n.focus(),
        !1;
        if (s.length && !t) {
            if ("" == s.val()) return $.toast({
                content: "请填写短信验证码",
                type: "warning"
            }),
            s.focus(),
            !1;
            if (!s.val().match(/^.{4,6}$/)) return $.toast({
                content: "短信验证码错误",
                type: "warning"
            }),
            s.focus(),
            !1;
            if (s.val().match(/\D+/)) return $.toast({
                content: "短信验证码错误",
                type: "warning"
            }),
            s.val(""),
            s.focus(),
            !1
        }
        QuickSign.postData(e, t)
    },
    postData: function(formEl, isSms) {
        var formEl = formEl,
        btnSms = formEl.find(".show-code-box"),
        url = formEl.attr("action"),
        btnEl = formEl.find(".registe-btn");
        if (isSms) {
            if (btnSms.hasClass("btn-disabled")) return;
            url = btnSms.attr("data-url"),
            btnSms.addClass("btn-disabled").html("稍后")
        } else {
            if (btnEl.hasClass("btn-disabled")) return;
            btnEl.addClass("btn-disabled")
        }
        $.ajax({
            url: url,
            type: "post",
            dataType: "json",
            data: formEl.serialize(),
            success: function(result) {
                var result = result;
                if ("string" == typeof result && (result = eval("(" + result + ")")), 1 == result.rescode) if (isSms) if (2 == result.type) $.toast({
                    content: result.resmsg,
                    type: "warning"
                }),
                btnSms.html("获取").removeClass("count-down btn-disabled");
                else {
                    $.toast({
                        content: "短信验证码已发送",
                        type: "success"
                    }),
                    $(".code-form-box").hide(),
                    btnSms.html('(<em class="num">60s</em>)').addClass("count-down btn-disabled"),
                    QuickSign.countDown(btnSms,
                    function() {
                        btnSms.html("获取").removeClass("count-down btn-disabled")
                    }),
                    btnSms.parent().find(".ipt-sms").focus(),
                    formEl.append('<input type="hidden" name="rescode" value="1" />');
                    try {
                        _T.sendEvent("signin_register_send_sms")
                    } catch(e) {}
                } else QuickSign.callbackRegister(formEl, result);
                else 0 == result.rescode ? ($.toast({
                    content: result.resmsg,
                    type: "warning"
                }), isSms && btnSms.html("获取").removeClass("btn-disabled"), formEl.find(".ipt-code").val(""), formEl.find(".verifyimg").click()) : 6 == result.rescode ? $.toast({
                    content: "短信验证码错误",
                    type: "warning"
                }) : ($.toast({
                    content: result.resmsg,
                    type: "warning"
                }), isSms && btnSms.html("获取").removeClass("btn-disabled"), formEl.find(".ipt-code").val(""), formEl.find(".verifyimg").click());
                isSms || btnEl.removeClass("btn-disabled")
            },
            error: function(e) {
                $.toast({
                    content: "服务器错误，请稍后再试",
                    type: "warning"
                }),
                isSms ? btnSms.html("获取").removeClass("btn-disabled") : btnEl.removeClass("btn-disabled")
            }
        })
    }
};
$(function() {
    QuickSign.init()
});
var Settings = {
    init: function() {
        Settings.post = function(e, t) {
            var i = $.Deferred();
            return $.ajax({
                url: e,
                data: t,
                type: "json",
                method: "post",
                success: function(e) {
                    1 == e.rescode ? i.resolve(e) : ($.toast({
                        type: "error",
                        content: e.resmsg
                    }), i.reject(e))
                }
            }),
            i
        },
        Settings.page = 1;
        var e;
        $(window).on("scroll",
        function() {
            e && clearTimeout(e);
            var t = $(".company-container").find(".loadmore"); ! t.hasClass("disabled") && t.is(":visible") && (e = setTimeout(function() {
                Settings.isVisiable(t.get(0)) && Settings.loadMore(t, $(".company-container .company-list"))
            },
            100))
        })
    },
    showLayer: function(e) {
        var t = e.html();
        $.dialog({
            title: "",
            wrapClass: "layer-privacy",
            confirmText: "",
            cancelText: "",
            content: t,
            onOpen: function(e) {
                e.find(".btn-search").off("click").on("click",
                function() {
                    var t = filterXss($(this).prev(".ipt").val());
                    e.find(".description");
                    "" != t.trim() && Settings.searchCompany(t, e)
                }),
                $(document).off("keydown").on("keydown",
                function(t) {
                    if (13 == t.keyCode) {
                        var i = e.find(".search-box .ipt").val();
                        e.find(".description");
                        if ("" == i.trim()) return;
                        Settings.searchCompany(i, e)
                    }
                })
            }
        })
    },
    setStatus: function(e) {
        var t = 1;
        if (e.hasClass("op-on")) {
            t = 0;
            try {
                _T.sendEvent("unhide_resume")
            } catch(e) {}
        } else try {
            _T.sendEvent("hide_resume")
        } catch(e) {}
        Settings.post("/geek/privacy/resumeStatus/update.json", {
            status: t
        }).then(function(t) {
            $.toast({
                type: "success",
                content: "操作成功"
            }),
            e.hasClass("op-off") ? e.removeClass("op-off").addClass("op-on").prev("span").text("已隐藏简历") : e.removeClass("op-on").addClass("op-off").prev("span").text("已开放简历")
        })
    },
    cancelMask: function(e) {
        var t = e.attr("data-id");
        e.hasClass("disabled") || (e.addClass("disabled"), Settings.post("/geek/privacy/maskCompany/delete.json", {
            comIds: t
        }).then(function() {
            e.parents("li").remove(),
            $.toast({
                type: "success",
                content: "操作成功"
            }),
            Account.setTab($(".set-nav").find("li[data-tab=privacy]")),
            e.removeClass("disabled")
        }))
    },
    searchCompany: function(e, t) {
        var i = t.find(".description");
        Settings.post("/autocomplete/maskcompany.json", {
            searchContent: e
        }).then(function(n) {
            var s = n.suggestList,
            a = "",
            o = "",
            r = "disabled";
            if (s.length) {
                for (var l = 0; l < s.length; l++) s[l].mark ? o += '<li data-id="' + s[l].encryptComId + '">\t\t\t\t\t\t\t<label class="checkbox">\t\t\t\t\t\t\t\t<span class="gray">已屏蔽</span>\t\t\t\t\t\t\t</label>\t\t\t\t\t\t\t<div class="company-name">\t\t\t\t\t\t\t\t<p>' + s[l].company.name + '</p>\t\t\t\t\t\t\t\t<p class="gray">' + (null == s[l].desc ? "": s[l].desc.hlname) + "</p>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t</li>": (o += '<li data-id="' + s[l].encryptComId + '">\t\t\t\t\t\t\t<label class="checkbox">\t\t\t\t\t\t\t\t<input type="checkbox" checked="checked">\t\t\t\t\t\t\t\t<span></span>\t\t\t\t\t\t\t</label>\t\t\t\t\t\t\t<div class="company-name">\t\t\t\t\t\t\t\t<p>' + s[l].company.name + '</p>\t\t\t\t\t\t\t\t<p class="gray">' + (null == s[l].desc ? "": s[l].desc.hlname) + "</p>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t</li>", r = "");
                a = '<div class="search-result"><p class="gray">与“' + e + "”相关的公司，共" + s.length + '个</p>\t\t\t\t\t\t<ul class="result-list">' + o + '</ul></div>\t\t\t\t\t\t<div class="op">\t\t\t\t\t\t\t<div class="pull-right">\t\t\t\t\t\t\t\t<button class="btn ' + r + '">屏蔽所选公司</button>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t<label class="checkbox check-all">\t\t\t\t\t\t\t\t<input type="checkbox" checked="checked" class="disabled">\t\t\t\t\t\t\t\t<span>全选</span>\t\t\t\t\t\t\t</label>\t\t\t\t\t\t</div>'
            } else a = '<div class="search-result"><p class="gray">与“' + e + "”相关的公司，共" + s.length + '个</p><div class="tips"><img src="' + staticPath + '/web/geek/images/settings-tip.png"><p class="gray">没有找到您搜索的公司</p></div></div>';
            i.html(a),
            i.find(".check-all input").on("change",
            function() {
                var e = i.find(".result-list input");
                Settings.selectAll($(this), e)
            }),
            i.find(".checkbox input").on("change",
            function() {
                if (i.find(".check-all input").prop("checked", !0), !$(this).prop("checked")) return void i.find(".check-all input").prop("checked", !1);
                i.find(".checkbox input").each(function() {
                    if (0 == $(this).prop("checked")) return void i.find(".check-all input").prop("checked", !1)
                })
            }),
            i.find(".op .btn").on("click",
            function() {
                if (!$(this).hasClass("disabled")) {
                    var e = [];
                    if (i.find(".result-list li").each(function() {
                        $(this).find("input").is(":checked") && e.push($(this).attr("data-id"))
                    }), e.length) {
                        var n = e.join(",");
                        Settings.post("/geek/privacy/maskCompany/add.json", {
                            comIds: n
                        }).then(function(e) {
                            if (e.rescode) {
                                $.toast({
                                    type: "success",
                                    content: "操作成功"
                                });
                                try {
                                    _T.sendEvent("block_selected_comp")
                                } catch(e) {}
                                Account.setTab($(".set-nav").find("li[data-tab=privacy]"))
                            }
                            t.remove()
                        })
                    } else {
                        $(this).prev("span").remove(),
                        $(this).before("<span>至少选择一个公司</span>")
                    }
                }
            });
            try {
                _T.sendEvent("search_block_comp")
            } catch(e) {}
        })
    },
    selectAll: function(e, t) {
        e[0].checked ? t.prop("checked", !0) : t.prop("checked", !1)
    },
    isVisiable: function(e) {
        var t = e.getBoundingClientRect();
        return t.top > 0 && window.innerHeight - t.top > 0 || t.top < 0 && t.bottom >= 0
    },
    loadMore: function(e, t) {
        var i = e.attr("data-url"),
        n = "";
        Settings.page++,
        $.get(i, {
            page: Settings.page
        },
        function(i) {
            if (i.rescode) {
                for (var s = i.maskCompanyList,
                a = 0; a < s.length; a++) n += '<li><span class="link-cancel" data-id="' + s[a].encryptComId + '">取消屏蔽</span>' + s[a].comName + "</li>";
                i.hasMore || e.text("没有更多了").addClass("disabled"),
                t.append(n)
            }
        })
    }
};
$(function() {
    Settings.init()
});
var preview = {
    doc: $(document),
    init: function() {
        this.expectPos = this.doc.find(".expect-pos"),
        this.optionWrapper = this.doc.find(".pos-select .option-wrapper"),
        this.loadBtn = this.doc.find(".frame-footer .btn"),
        this.positionToggle(),
        this.selectionHide(),
        this.positionChange()
    },
    positionToggle: function() {
        this.expectPos.on("click", ".option-slted",
        function() {
            preview.optionWrapper.toggle()
        })
    },
    changeHref: function(e) {
        var t = this.loadBtn.attr("href");
        t = t.substr(0, t.indexOf("&")) + "&expectId=" + e,
        this.loadBtn.attr("href", t)
    },
    positionChange: function() {
        this.expectPos.on("click", ".option-wrapper li",
        function() {
            $(".option-slted .option-value").html($(this).html()),
            $(".pos-slted").html($(this).html()),
            preview.optionWrapper.hide();
            var e = $(this).data("id");
            preview.changeHref(e)
        })
    },
    selectionHide: function() {
        this.doc.on("click",
        function(e) {
            "option-value" != e.target.className && "pos-tip" != e.target.className && preview.optionWrapper.hide()
        })
    }
};
preview.init(),
$(function() {
    if ($("#competitive-main").length) {
        if (0 == _COMPETITIVE_PAGE.resCode) return $("body").on("click", ".toast-con",
        function() {
            window.location.href = "/"
        }),
        void $.toast({
            lock: !0,
            content: _COMPETITIVE_PAGE.resMsg,
            type: "warning",
            time: 5e6
        });
        var e = [],
        t = [];
        _COMPETITIVE_PAGE.data.General_Market.forEach(function(t) {
            e.push(t.count)
        }),
        _COMPETITIVE_PAGE.data.General.forEach(function(e) {
            t.push(e.count)
        }),
        $("#container").highcharts({
            chart: {
                polar: !0,
                type: "area",
                animation: !1,
                tooltip: !1,
                backgroundColor: "#f9fafc",
                plotBackgroundColor: "#f9fafc"
            },
            plotOptions: {
                series: {
                    animation: !1
                }
            },
            tooltip: {
                enabled: !1
            },
            title: {
                text: null
            },
            credits: {
                enabled: !1
            },
            pane: {
                size: "80%"
            },
            xAxis: {
                labels: {
                    rotation: 0,
                    align: "center",
                    distance: 26,
                    style: {
                        font: "normal 11px Verdana, sans-serif",
                        color: "blank"
                    }
                },
                categories: ["与BOSS沟通情况", "学历", "与该职位匹配度", "工作经验"],
                tickmarkPlacement: "on",
                lineWidth: 0,
                gridLineWidth: 3,
                gridLineDashStyle: "ShortDot",
                gridLineColor: "green",
                gridZIndex: 40
            },
            yAxis: {
                gridLineInterpolation: "polygon",
                lineWidth: 0,
                min: 0
            },
            legend: {
                align: "center",
                verticalAlign: "bottom",
                y: 0,
                x: 90,
                layout: "vertical",
                squareSymbol: !1,
                symbolWidth: 40,
                symbolHeight: 10,
                symbolRadius: 0,
                itemStyle: {
                    fontSize: "11px",
                    fontWeight: "normal"
                }
            },
            animation: !1,
            series: [{
                name: "市场水平",
                data: e,
                pointPlacement: "on",
                color: "rgb(188,249,232)"
            },
            {
                name: "您的情况",
                data: t,
                pointPlacement: "on",
                color: "rgb(103,148,248)"
            }]
        })
    }
}),
$(document).ready(function() {
    function e() {
        c++,
        p++,
        r += .01;
        var e = -Math.sin(r),
        t = Math.cos(r);
        c < i[0] && (l < 1 ? l += l > .03 ? 1 / (2 * i[0]) : 1 / (5 * i[0]) : l = 0, o.save(), o.globalAlpha = c > 1 ? 1 : 0, o.beginPath(), o.fillStyle = "rgba(83,202,195," + l + ")", o.arc(n / 2 + 125 * e, s / 2 + 125 * t, 7, 0, 2 * Math.PI), o.fill(), o.restore()),
        p > 10 && p < i[1] && (u.clearRect(0, 0, n, s), u.save(), u.translate(n / 2, s / 2), u.rotate(p * Math.PI / 320), u.fillStyle = "rgb(83,202,195)", u.beginPath(), u.arc( - 120, 75, 5, 0, 2 * Math.PI, !0), u.closePath(), u.fill(), u.restore())
    }
    if ($("#competitive-main").length && 0 != _COMPETITIVE_PAGE.resCode) {
        var t = _COMPETITIVE_PAGE.position / _COMPETITIVE_PAGE.commNum,
        i = [];
        t <= .25 ? (i = [340, 340], $(".competitive_text").html("极好"), $(".competitive_text").parents(".row-one").find(".chart_title").find("p").eq(1).html("极好")) : t > .25 && t <= .5 ? (i = [260, 260], $(".competitive_text").html("优秀"), $(".competitive_text").parents(".row-one").find(".chart_title").find("p").eq(1).html("优秀")) : t > .5 && t <= .75 ? (i = [160, 160], $(".competitive_text").html("良好"), $(".competitive_text").parents(".row-one").find(".chart_title").find("p").eq(1).html("良好")) : t > .75 && (i = [88, 88], $(".competitive_text").html("一般"), $(".competitive_text").parents(".row-one").find(".chart_title").find("p").eq(1).html("一般"));
        var n, s, a = document.getElementById("canvas"),
        o = a.getContext("2d"),
        r = 1,
        l = 0;
        n = $(".competition_show_chart img").width(),
        s = $(".competition_show_chart img").height();
        var c = 0,
        d = document.getElementById("canvas1"),
        u = d.getContext("2d"),
        p = 0;
        setInterval(e, 10)
    }
});
var text = {
    Job_Hot_Min: "在一大波牛人到来之前，赶紧勾搭Boss，拿下这个职位！",
    Job_Hot_Medium: "该职位备受牛人青睐，值得争取！",
    Job_Hot_Max: "该职位备受牛人青睐，值得争取！",
    Job_Hot_SuperMax: "该职位备受牛人青睐，值得争取！",
    Comm_Boss_Ignore: "再向Boss详细介绍一下自己吧",
    Comm_Comm: "在与Boss的沟通中，让Ta感受到你的认可与期待",
    Comm_Deliver: "在与Boss的沟通中，让Ta感受到你的认可与期待",
    Comm_Exchange: "在与Boss的沟通中，让Ta感受到你的认可与期待",
    Comm_Interview: "Offer距你只有一步之遥！",
    Boss_Active_Min: "多与Boss打招呼，让Ta看到优秀的你终于出现在了Ta的面前",
    Boss_Active_Medium: "Boss对该职位的需求比较紧急，快去勾搭吧！",
    Boss_Active_Max: "Boss对该职位的需求比较紧急，快去勾搭吧！",
    Boss_Active_SuperMax: "Boss对该职位需求非常紧急，快去勾搭吧！",
    CV_30: "简历并不代表全部，告诉Boss你的态度与实力！",
    CV_50: "与Boss保持积极的沟通，才更有可能获得这个机会",
    CV_80: "与Boss保持积极的沟通，才更有可能获得这个机会",
    CV_80_Plus: "你有很大几率被Boss认可，积极展现你自己！"
};
$(document).ready(function() {
    function e() {
        window.ids.forEach(function(e) {
            if (i(e.id) && !e.excute) {
                var t = "#" + e.id;
                e.excute = !0;
                e.width > 0 && ($(t).animate({
                    width: e.width + "px"
                },
                "slow"), $(t).css("overflow", "visible")),
                e.height > 0 && ($(t).animate({
                    height: e.height + "px"
                },
                "slow"), $(t).css("overflow", "visible"))
            }
        })
    }
    function t(e) {
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
    }
    if ($("#competitive-main").length && 0 != _COMPETITIVE_PAGE.resCode) {
        window.ids = [{
            id: "Comm_Interview",
            width: 0,
            height: 0,
            excute: !1
        },
        {
            id: "Comm_Exchange",
            width: 0,
            height: 0,
            excute: !1
        },
        {
            id: "Comm_Deliver",
            width: 0,
            height: 0,
            excute: !1
        },
        {
            id: "Comm_Comm",
            width: 0,
            height: 0,
            excute: !1
        },
        {
            id: "Comm_Boss_Ignore",
            width: 0,
            height: 0,
            excute: !1
        },
        , {
            id: "CV_30",
            width: 0,
            height: 0,
            excute: !1
        },
        , {
            id: "CV_50",
            width: 0,
            height: 0,
            excute: !1
        },
        , {
            id: "CV_80",
            width: 0,
            height: 0,
            excute: !1
        },
        {
            id: "CV_80_Plus",
            width: 0,
            height: 0,
            excute: !1
        },
        {
            id: "Degree_HighScool_And_Below",
            width: 0,
            height: 0,
            excute: !1
        },
        {
            id: "Degree_Junior",
            width: 0,
            height: 0,
            excute: !1
        },
        {
            id: "Degree_Bachelor",
            width: 0,
            height: 0,
            excute: !1
        },
        {
            id: "Degree_Master",
            width: 0,
            height: 0,
            excute: !1
        },
        {
            id: "Degree_Phd",
            width: 0,
            height: 0,
            excute: !1
        },
        {
            id: "Exp_Fresh",
            width: 0,
            height: 0,
            excute: !1
        },
        {
            id: "Exp_Less_1",
            width: 0,
            height: 0,
            excute: !1
        },
        {
            id: "Exp_1_3",
            width: 0,
            height: 0,
            excute: !1
        },
        {
            id: "Exp_3_5",
            width: 0,
            height: 0,
            excute: !1
        },
        {
            id: "Exp_5_10",
            width: 0,
            height: 0,
            excute: !1
        },
        {
            id: "Exp_10_Plus",
            width: 0,
            height: 0,
            excute: !1
        },
        {
            id: "Salary_NO",
            width: 0,
            height: 0,
            excute: !1
        },
        {
            id: "Salary_Min",
            width: 0,
            height: 0,
            excute: !1
        },
        {
            id: "Salary_Medium",
            width: 0,
            height: 0,
            excute: !1
        },
        {
            id: "Salary_Max",
            width: 0,
            height: 0,
            excute: !1
        },
        {
            id: "Salary_SuperMax",
            width: 0,
            height: 0,
            excute: !1
        },
        {
            id: "container",
            width: 0,
            height: 0,
            excute: !1
        }];
        var i = function(e) {
            var e = "#" + e,
            t = $(e),
            i = t.offset(),
            n = $(window);
            return ! (n.scrollTop() > i.top + t.outerHeight() || n.scrollTop() + n.height() < i.top)
        },
        n = function(e, t) {
            var i;
            return function() {
                var n = this,
                s = arguments;
                clearTimeout(i),
                i = setTimeout(function() {
                    t.apply(n, s)
                },
                e)
            }
        };
        $(window).scroll(n(200, e)),
        n(200, e)(),
        _COMPETITIVE_PAGE.data.Communicate.forEach(function(e, t, i) {
            var n = "#" + e.factor,
            s = $(".hoz_bar").width(),
            a = e.rate * s / 100,
            o = 0;
            if (ids.map(function(t) {
                t.id == e.factor && (t.width = a)
            }), $(n).find(".percent").html(e.rate + "%"), e.isCur && ($(n).find(".work_exp").show(), $("#contract-text").html(text[e.factor])), e.isCur && 0 != t) {
                for (var r = t - 1; r >= 0; r--) o += i[r].rate;
                0 == o && $("#contract").html("1%").prev("span").html("超过了"),
                o < 50 && o > 0 && $("#contract").html(parseInt(o) + "%").prev("span").html("超过了"),
                o >= 50 && 100 - o != 0 && $("#contract").html(parseInt(100 - o) + "%").prev("span").html("排名前")
            } else 0 == t && (o = 100);
            100 - o == 0 && $("#contract").html("1%").prev("span").html("超过了")
        }),
        _COMPETITIVE_PAGE.data.CVMatch.forEach(function(e, t, i) {
            var n = "#" + e.factor,
            s = 0,
            a = $(".match_wrap").data("height") * parseInt($("html").css("fontSize"));
            if (height = e.rate * a / 100, ids.map(function(t) {
                t.id == e.factor && (t.height = height)
            }), $(n).find(".percent").html(e.rate + "%"), e.isCur && ($(n).find(".match").show(), $("#CVMatch-text").html(text[e.factor])), e.isCur && 0 != t) {
                for (var o = t - 1; o >= 0; o--) s += i[o].rate;
                0 == s && $("#CVMatch").html("1%").prev("span").html("超过了"),
                s < 50 && s > 0 && $("#CVMatch").html(parseInt(s) + "%").prev("span").html("超过了"),
                s >= 50 && 100 - s != 0 && $("#CVMatch").html( + parseInt(100 - s) + "%").prev("span").html("排名前")
            } else 0 == t && (s = 100);
            100 - s == 0 && $("#CVMatch").html("1%").prev("span").html("超过了")
        }),
        _COMPETITIVE_PAGE.data.Degree.forEach(function(e, t, i) {
            var n = "#" + e.factor,
            s = 0,
            a = $(".qua_wrap").data("height") * parseInt($("html").css("fontSize")),
            o = e.rate * a / 100;
            if (ids.map(function(t) {
                t.id == e.factor && (t.height = o)
            }), $(n).find(".percent").html(e.rate + "%"), e.isCur && $(n).find(".match").show(), e.isCur && 0 != t) {
                for (var r = t - 1; r >= 0; r--) s += i[r].rate;
                0 == s && $("#Degree").html("1%").prev("span").html("超过了"),
                s < 50 && s > 0 && $("#Degree").html( + parseInt(s) + "%").prev("span").html("超过了"),
                s >= 50 && 100 - s != 0 && $("#Degree").html( + parseInt(100 - s) + "%").prev("span").html("排名前")
            } else 0 == t && (s = 100);
            100 - s == 0 && $("#Degree").html("1%").prev("span").html("超过了")
        }),
        _COMPETITIVE_PAGE.data.Experience.forEach(function(e, t, i) {
            var n = "#" + e.factor,
            s = 0,
            a = $(".hoz_bar").width(),
            o = e.rate * a / 100;
            if (ids.map(function(t) {
                t.id == e.factor && (t.width = o)
            }), $(n).find(".percent").html(e.rate + "%"), e.isCur && ($(n).find(".work_exp").show(), $("#Experience + p").html(text[e.factor])), e.isCur && 0 != t) {
                for (var r = t - 1; r >= 0; r--) s += i[r].rate;
                0 == s && $("#Experience").html("1%").prev("span").html("超过了"),
                s < 50 && s > 0 && $("#Experience").html( + parseInt(s) + "%").prev("span").html("超过了"),
                s >= 50 && 100 - s != 0 && $("#Experience").html( + parseInt(100 - s) + "%").prev("span").html("排名前")
            } else 0 == t && (s = 100);
            100 - s == 0 && $("#Experience").html("1%").prev("span").html("超过了")
        }),
        _COMPETITIVE_PAGE.data.Salary_Dynamic.forEach(function(e, t, i) {
            var n = "#" + e.factor,
            s = 0,
            a = $(".sal_wrap").data("height") * parseInt($("html").css("fontSize"));
            if (height = e.rate * a / 100, ids.map(function(t) {
                t.id == e.factor && (t.height = height)
            }), $(".Xtext").children()[t].innerText = e.name, $(n).find(".percent").html(e.rate + "%"), e.isCur && $(n).find(".sal").show(), e.isCur && 0 != t) {
                for (var o = t - 1; o >= 0; o--) s += i[o].rate;
                0 == s && $("#Salary_Dynamic").html("1%").prev("span").html("超过了"),
                s < 50 && s > 0 && $("#Salary_Dynamic").html( + parseInt(s) + "%").prev("span").html("超过了"),
                s >= 50 && 100 - s != 0 && $("#Salary_Dynamic").html( + parseInt(100 - s) + "%").prev("span").html("排名前"),
                $("#Salary_Dynamic + p").html(text[e.factor])
            } else 0 == t && (s = 100);
            100 - s == 0 && $("#Salary_Dynamic").html("1%").prev("span").html("超过了"),
            e.isCur && "Salary_NO" == e.factor && $("#Salary_Dynamic").html(e.rate + "%").prev("span").html("未填写")
        });
        var s = _COMPETITIVE_PAGE.url + "/images/peak_pink.png",
        a = _COMPETITIVE_PAGE.url + "/images/peak_purple.png";
        _COMPETITIVE_PAGE.data.Boss_Active.forEach(function(e, t) {
            var i = "#" + e.factor;
            if (e.isCur) {
                $(i).attr("src", s),
                $(i).hasClass("no_active") && $(i).removeClass("no_active"),
                $(i).hasClass("active") || $(i).addClass("active");
                for (var n = "",
                o = 0; o <= t; o++) n += "<img style='width: 20px; height: 20px; margin-left:10px; '  src='" + _COMPETITIVE_PAGE.url + "/images/icon-top.png' />";
                $("#Boss_Active").html("Boss活跃情况：" + e.name + n),
                $("#Boss_Active-text").html(text[e.factor])
            } else $(i).attr("src", a),
            $(i).hasClass("no_active") || $(i).addClass("no_active"),
            $(i).hasClass("active") && $(i).removeClass("active")
        });
        var s = _COMPETITIVE_PAGE.url + "/images/peak_red.png",
        a = _COMPETITIVE_PAGE.url + "/images/peak_blue.png";
        _COMPETITIVE_PAGE.data.Job_Hot_Degree.forEach(function(e, t) {
            var i = "#" + e.factor;
            if (e.isCur) {
                $(i).attr("src", s),
                $(i).hasClass("no_active") && $(i).removeClass("no_active"),
                $(i).hasClass("active") || $(i).addClass("active");
                for (var n = "",
                o = 0; o <= t; o++) n += "<img style='width: 20px; height: 20px; margin-left:10px; '  src='" + _COMPETITIVE_PAGE.url + "/images/icon-fire.png' />";
                $("#Job_Hot_Degree").html("职位热度：" + e.name + n),
                $("#Job_Hot_Degree-text").html(text[e.factor])
            } else $(i).attr("src", a),
            $(i).hasClass("no_active") || $(i).addClass("no_active"),
            $(i).hasClass("active") && $(i).removeClass("active")
        });
        var o = [[0, 1.46, 2.85, 4.24], [0, 1.26, 2.85, 4.24], [0, 1.46, 2.65, 4.24], [0, 1.46, 2.8, 4.04]];
        _COMPETITIVE_PAGE.data.Boss_Active.forEach(function(e, t, i) {
            e.isCur && o[t].forEach(function(e, t, i) {
                $("#boss_Active img").eq(t).css("left", e + "rem")
            })
        }),
        _COMPETITIVE_PAGE.data.Job_Hot_Degree.forEach(function(e, t, i) {
            e.isCur && o[t].forEach(function(e, t, i) {
                $("#job_Hot img").eq(t).css("left", e + "rem")
            })
        }),
        _COMPETITIVE_PAGE.position / _COMPETITIVE_PAGE.commNum > .5 && 1 - _COMPETITIVE_PAGE.position / _COMPETITIVE_PAGE.commNum != 0 && $("#rank").html("个人综合竞争力：超过了" + parseInt(100 * (1 - _COMPETITIVE_PAGE.position / _COMPETITIVE_PAGE.commNum)) + "%"),
        _COMPETITIVE_PAGE.position / _COMPETITIVE_PAGE.commNum < .5 && _COMPETITIVE_PAGE.position / _COMPETITIVE_PAGE.commNum > 0 && $("#rank").html("个人综合竞争力：排名前" + parseInt(100 * _COMPETITIVE_PAGE.position / _COMPETITIVE_PAGE.commNum) + "%的人"),
        (_COMPETITIVE_PAGE.position / _COMPETITIVE_PAGE.commNum == 0 || 1 - _COMPETITIVE_PAGE.position / _COMPETITIVE_PAGE.commNum == 0) && $("#rank").html("个人综合竞争力：超过了1%的人"),
        $(".work_card").click(function(e) {
            var t = $(this).data("url");
            t && (window.location.href = t)
        }),
        _COMPETITIVE_PAGE.isFriend || ($(".start-chat").show(), $(".sub").html("立即沟通"), $(".start-chat").on("click",
        function() {
            Detail.startChat($(this))
        })),
        $(".competitive-time").html("评估时间：" + (new Date).toISOString().slice(0, 10)),
        $(".evaluate_time").html("评估时间：" + (new Date).toISOString().slice(0, 10)),
        setTimeout(function() {
            $(".competition_show > p").hide()
        },
        2e3),
        $(".tip").click(function(e) {
            $(".tip span").show(),
            t(e)
        }),
        $(document).on("click touchstart",
        function(e) {
            $(".tip span").hide()
        })
    }
});
var ItemShop = function() {
    function e(e) {
        var n, s = function() {
            e && e()
        },
        a = function(e) {
            var t = this,
            i = $(e);
            i.off("click"),
            i.on("click", ".analyzer-combo-list dd",
            function() {
                i.find(".analyzer-combo-list .selected").removeClass("selected"),
                $(this).addClass("selected"),
                i.find(".analyzer-combo-list dt").removeClass("disabled")
            }),
            i.on("click", ".analyzer-combo-list dt",
            function() {
                t.close();
                var e = i.find(".analyzer-combo-list .selected").attr("data-id"),
                n = {
                    url: "/geek/item/pay.json",
                    prePayUrl: "/geek/item/prepay.json",
                    data: {
                        itemId: e
                    },
                    itemId: e,
                    success: s
                },
                a = {
                    success: s,
                    buy: function(e) {}
                };
                setTimeout(function() {
                    Payment.purchase(n, a)
                },
                100)
            })
        };
        t.combo("bf0aaab5053fa3e71nU~").then(function(e) {
            n = e,
            $.dialog({
                bind: !0,
                title: "",
                content: i.analyzer(e),
                closeText: !0,
                confirmText: !1,
                cancelText: !1,
                wrapClass: "prop-analyzer-wrap",
                lock: !0,
                onOpen: a,
                onConfirm: function(e) {}
            })
        })
    }
    var t = {
        combo: function(e) {
            var t = $.Deferred();
            return $.get("/business/item/sellunit.json?itemType=" + e).success(function(e) {
                1 == e.rescode ? t.resolve(e.itemSellUnit) : $.toast({
                    content: e.resmsg,
                    type: "error"
                })
            }),
            t
        }
    },
    i = {
        analyzer: function(e) {
            return Utemplate('<div class="analyzer-head"><i class="icon-logo"></i><div><h4><%this.itemName%></h4><%this.itemNote%></div></div><ul class="analyzer-list"><li><div class="analyzer-item"><p class="icon-item icon-compete"></p><p>知己知彼</p><p class="gray">洞悉求职胜算</p></div><div class="analyzer-item"><p class="icon-item icon-compete-hover"></p></div></li><li><div class="analyzer-item"><p class="icon-item icon-expect"></p><p>了解薪资水平</p><p class="gray">查看期望薪资占比</p></div><div class="analyzer-item"><p class="icon-item icon-expect-hover"></p><p>期望薪资占比</p><p class="gray">让BOSS认可你，才能匹配好的薪资</p></div></li><li><div class="analyzer-item"><p class="icon-item icon-active"></p><p>实时招聘动态</p><p class="gray">了解职位招聘进展</p></div><div class="analyzer-item"><p class="icon-item icon-active-hover"></p><p>BOSS活跃情况</p><p class="gray">BOSS对该职位需求非常紧急</p></div></li></ul><dl class="analyzer-combo-list"><dt ka="item_pay_buy_competitive_chat">立即购买</dt><%for(var i=0;i<this.itemSellItemList.length;i++){%><dd <%if(i== 2){%>class="discount selected"<%}%> data-id="<%this.itemSellItemList[i].encryptBeanItemId%>"><%this.itemSellItemList[i].specDesc%><i class="line"></i><%this.itemSellItemList[i].beanAmount%>直豆</dd><%}%></dl>', e)
        }
    };
    return {
        analyzer: e,
        personality: function(e) {
            var t = function() {
                Payment.success({
                    article: "购买成功",
                    text: "",
                    confirmText: "立即使用",
                    confirm: function(t) {
                        e && e(t)
                    }
                })
            },
            i = {
                url: "/geek/item/pay.json",
                prePayUrl: "/geek/item/prepay.json",
                data: {
                    itemId: "00f22febb3cb14a20HI~"
                },
                itemId: "00f22febb3cb14a20HI~",
                success: t
            },
            n = {
                success: t,
                buy: function(e) {}
            };
            Payment.purchase(i, n)
        }
    }
} ();
$(function() {
    if ($(".satisfaction-feedback").length || $(".satisfaction-feedback .satisfaction").length) {
        var e = $(".satisfaction-feedback");
        e.find("textarea").on("input",
        function() {
            if (Validate.getLength($(this).val()) > 150) return $.toast({
                type: "error",
                content: "不超过150个汉字"
            }),
            !1
        }),
        e.find(".satisfaction").on("click",
        function() {
            $(this).hasClass("selected") ? ($(this).removeClass("selected").siblings(".satisfaction").removeClass("selected"), e.find(".btn").addClass("disabled").prop("disabled", !0), e.find("input[name='level']").val("")) : ($(this).addClass("selected").siblings(".satisfaction").removeClass("selected"), e.find(".btn").removeClass("disabled").prop("disabled", !1), e.find("input[name='level']").val($(this).data("level")))
        }),
        e.on("submit",
        function() {
            if (e.find(".selected").length) return Validate.getLength(e.find("textarea").val()) > 150 ? void $.toast({
                type: "error",
                content: "不超过150个汉字"
            }) : ($.ajax({
                url: "/actionLog/geek/searchjob/feekback.json",
                type: "POST",
                data: e.serialize(),
                dataType: "JSON",
                timeout: 3e4
            }).success(function(t) {
                1 == t.rescode ? ($.toast({
                    type: "success",
                    content: "<span class='icon-toast-content'>感谢反馈</span>",
                    wrapClass: "satisfaction-wrap"
                }), e.remove()) : $.toast({
                    type: "error",
                    content: t.resmsg
                })
            }).error(function() {
                $.toast({
                    type: "error",
                    content: "服务器异常"
                })
            }), !1)
        })
    }
}),
AnalysisResume = {
    init: function() {
        AnalysisResume.initUploadResume()
    },
    initUploadResume: function() {
        var uploadWrapperEl = $(".upload-resume"),
        pageLoadingEl = $(".page-loading"),
        reg = /(\.|\/)(doc|docx|pdf)$/i;
        $("#fileupload").fileupload({
            method: "POST",
            url: "/geek/attresume/parser/upload.json",
            dataType: "text",
            acceptFileTypes: reg,
            maxChunkSize: 8388608,
            add: function(e, t) {
                uploadWrapperEl.addClass("hide"),
                pageLoadingEl.removeClass("hide");
                var i = t.files[0],
                n = i.name,
                s = i.size;
                if (reg.test(n)) if (s > 1e7) {
                    $.dialog({
                        title: "",
                        content: '<div style="padding: 4px 0 30px;">您上传的文件超过8M，请重新选择</div>',
                        type: "warning",
                        closeText: !0,
                        confirmText: "确定",
                        cancelText: !1,
                        preKa: "",
                        wrapClass: "dialog-icons-default",
                        lock: !0
                    }),
                    pageLoadingEl.addClass("hide"),
                    uploadWrapperEl.removeClass("hide");
                    try {
                        _T.sendEvent("nlp_resume_upload_fail")
                    } catch(e) {}
                } else $(this).data("resume", i),
                t.submit();
                else {
                    $.dialog({
                        title: "",
                        content: '<div style="padding: 4px 0 30px;">仅支持DOC、DOCX、PDF格式简历文件，请重新选择</div>',
                        type: "warning",
                        closeText: !0,
                        confirmText: "确定",
                        cancelText: !1,
                        preKa: "",
                        wrapClass: "dialog-icons-default",
                        lock: !0,
                        onConfirm: function(e) {
                            e.remove(),
                            $("#fileupload").click()
                        }
                    }),
                    pageLoadingEl.addClass("hide"),
                    uploadWrapperEl.removeClass("hide");
                    try {
                        _T.sendEvent("nlp_resume_upload_fail")
                    } catch(e) {}
                }
            },
            done: function(e, data) {
                var result = data.result;
                switch ("string" == typeof result && (result = eval("(" + result + ")")), result.rescode) {
                case 1:
                    result.data.key && "" != result.data.key.trim() ? ($(".analysis-result").find("span").eq(0).text(result.data.validUserBaseInfoNum).end().eq(1).text(result.data.validWorkExpNum).end().eq(2).text(result.data.validEduExpNum).end().eq(3).text(result.data.validExpectNum).end().closest(".sign-resume-box").find("input[name=cvpk]").val(result.data.key).end().find("input[name=phone]").val(result.data.phone ? result.data.phone: ""), pageLoadingEl.addClass("hide"), $(".sign-resume-box").removeClass("hide")) : ($.dialog({
                        title: "",
                        content: '<div style="padding: 4px 0 30px;">暂且无法解析，您可以选择其他文件或者尝试直接注册。</div>',
                        type: "error",
                        closeText: !0,
                        confirmText: "确定",
                        cancelText: !1,
                        preKa: "",
                        wrapClass: "dialog-icons-default",
                        lock: !0
                    }), pageLoadingEl.addClass("hide"), uploadWrapperEl.removeClass("hide"));
                    break;
                case 10001:
                    $.toast({
                        content:
                        "您已登录，即将为你跳转个人中心页",
                        type: "info"
                    }),
                    setTimeout(function() {
                        result.jumpUrl ? window.location.href = result.jumpUrl: window.location.href = window.location.host
                    },
                    1e3);
                    break;
                case 100005:
                    $.dialog({
                        title:
                        "",
                        content: '<div style="padding: 4px 0 30px;">服务器未获取到上传文件，请更换文件或稍后重试</div>',
                        type: "error",
                        closeText: !0,
                        confirmText: "确定",
                        cancelText: !1,
                        preKa: "",
                        wrapClass: "dialog-icons-default",
                        lock: !0
                    });
                    break;
                case 100006:
                    $.dialog({
                        title:
                        "",
                        content: '<div style="padding: 4px 0 30px;">您上传的文件超过8M，请重新选择</div>',
                        type: "warning",
                        closeText: !0,
                        confirmText: "确定",
                        cancelText: !1,
                        preKa: "",
                        wrapClass: "dialog-icons-default",
                        lock: !0
                    });
                    break;
                case 100007:
                    $.dialog({
                        title:
                        "",
                        content: '<div style="padding: 4px 0 30px;">仅支持DOC、DOCX、PDF格式简历文件，请重新选择</div>',
                        type: "warning",
                        closeText: !0,
                        confirmText: "确定",
                        cancelText: !1,
                        preKa: "",
                        wrapClass: "dialog-icons-default",
                        lock: !0
                    });
                    break;
                default:
                    $.dialog({
                        title:
                        "",
                        content: '<div style="padding: 4px 0 30px;">服务器异常，请稍后重试</div>',
                        type: "error",
                        closeText: !0,
                        confirmText: "确定",
                        cancelText: !1,
                        preKa: "",
                        wrapClass: "dialog-icons-default",
                        lock: !0
                    })
                }
                if (1 != result.rescode) {
                    pageLoadingEl.addClass("hide"),
                    uploadWrapperEl.removeClass("hide");
                    try {
                        _T.sendEvent("nlp_resume_upload_fail")
                    } catch(e) {}
                }
            },
            fail: function(e, t) {
                $.dialog({
                    title: "",
                    content: '<div style="padding: 4px 0 30px;">服务器异常，请稍后重试</div>',
                    type: "error",
                    closeText: !0,
                    confirmText: "确定",
                    cancelText: !1,
                    preKa: "",
                    wrapClass: "dialog-icons-default",
                    lock: !0
                }),
                pageLoadingEl.addClass("hide"),
                uploadWrapperEl.removeClass("hide");
                try {
                    _T.sendEvent("nlp_resume_upload_fail")
                } catch(e) {}
            }
        })
    },
    signOrRegisterCallback: function(formEl, result) {
        var nextBtn = formEl.find(".form-footer .btn").addClass("btn-waiting"),
        resume = $("#fileupload").data("resume");
        if (!resume || "object" != typeof resume) return void AnalysisResume.callbackDone(nextBtn, result);
        var formData = new FormData;
        formData.append("file", resume),
        formData.append("token", result.t),
        $.ajax({
            url: "/geek/attresume/upload.json",
            type: "POST",
            data: formData,
            contentType: !1,
            processData: !1,
            success: function(data) {
                if ("string" == typeof data && (data = eval("(" + data + ")")), 1 == data.rescode) {
                    var img = new Image;
                    img.onload = function() {
                        $.ajax({
                            type: "POST",
                            url: "/geek/attresume/save.json?previewUrl=" + data.previewUrl,
                            dataType: "JSON",
                            data: {
                                token: result.t
                            },
                            success: function() {
                                AnalysisResume.callbackDone(nextBtn, result)
                            },
                            error: function() {
                                AnalysisResume.callbackDone(nextBtn, result)
                            }
                        })
                    },
                    img.onerror = function() {
                        AnalysisResume.callbackDone(nextBtn, result)
                    },
                    img.src = "/resume/pic4Owner/" + data.previewUrl
                } else AnalysisResume.callbackDone(nextBtn, result)
            },
            error: function() {
                AnalysisResume.callbackDone(nextBtn, result)
            }
        })
    },
    callbackDone: function(e, t) {
        e.removeClass("btn-waiting"),
        window.location.href = t.toUrl
    }
},
$(function() {
    $(".sign-resume-wrapper").length && AnalysisResume.init()
});