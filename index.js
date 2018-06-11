  //时间计算 liangzhimin
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define([], factory);
  } else if (typeof exports === 'object') {
    // Node, CommonJS
    module.exports = factory();
  } else {
    // 浏览器全局变量(root 即 window)
    root.ComputationTime = factory();
  }
}(this, function () {
 var ComputationTime = {
    jsDateDiff: function (strtime) {
        if (!strtime) {
            return false;
        }
        var new_str = strtime.replace(/:/g, '-');
        new_str = new_str.replace(/ /g, '-');
        var arr = new_str.split("-");
        var datum = new Date(Date.UTC(arr[0], arr[1] - 1, arr[2], arr[3] - 8, arr[4], arr[5]));
        var publishTime = datum.getTime();
        var d_minutes, d_hours, d_days;
        var timeNow = parseInt(new Date().getTime() / 1000);
        var d;
        d = timeNow - parseInt(publishTime / 1000);
        d_days = parseInt(d / 86400);
        d_hours = parseInt(d / 3600);
        d_minutes = parseInt(d / 60);
        if (d_days > 0 && d_days < 4) {
            return d_days + "天前";
        } else if (d_days <= 0 && d_hours > 0) {
            return d_hours + "小时前";
        } else if (d_hours <= 0 && d_minutes > 0) {
            return d_minutes + "分钟前";
        } else if (d_minutes == 0) {
            return "刚刚";
        } else {
            var s = new Date(parseInt(publishTime));
            // s.getFullYear()+"年";
            return (s.getMonth() + 1) + "月" + s.getDate() + "日";
        }
    },
    //将秒数如90转换成00:01:30秒的形式
    transSeconds : function(seconds) {
        var hour = 0,
            minute = 0,
            seconds = parseInt(seconds);
        if(seconds > 60){
            minute = parseInt(seconds/60);
            seconds = parseInt(seconds%60);
            if(minute > 60) {
                hour = parseInt(minute/60);
                minute = parseInt(minute%60);
            }
        }
        var zero = function(num){
            return (num>>0)<10?"0"+ num:num;
        };
        return [zero(hour),zero(minute),zero(seconds)].join(":");
    },
    //时间-1秒返回
    reduceOneSeconds : function(strtime) {
        var T = this,
            strtime = T.process(strtime),
            seconds = new Date(strtime).getTime(),
            dateObj = new Date(seconds - 1000);
        return T.dateToLocalString(dateObj);
    },
    //时间+1秒返回
    addOneSeconds : function(strtime) {
        var T = this,
            strtime = T.process(strtime),
            seconds = new Date(strtime).getTime(),
            dateObj = new Date(seconds + 1000);
        return T.dateToLocalString(dateObj);
    },
    //把类似于Tue Nov 20 103827 03:09:09 GMT+0800 (中国标准时间)这种时间格式转换成年月日时分秒的形式输出
    dateToLocalString : function(dateObj) {
        return dateObj.getFullYear() + "-" + (dateObj.getMonth() + 1) + "-" + dateObj.getDate() + " " + dateObj.getHours() + ":" + dateObj.getMinutes() + ":" + dateObj.getSeconds();
    },
    //把2018-05-08 10:04:05转换成new Date(yyyy,mth,dd,hh,mm,ss)可以转换的形式
    process : function(strtime) {
        var new_str = strtime.replace(/:/g, '-'),
            new_str = new_str.replace(/ /g, '-'),
            arr = new_str.split("-"),
            datum = new Date(Date.UTC(arr[0], arr[1] - 1, arr[2], arr[3] - 8, arr[4], arr[5]));
        return datum;
    },
    //init函数用来把2018-09-10 08:30:29这样的时间转换成几天前
    init: function ($timecontainer, strtime) {
        var T = this;
        $timecontainer.each(function () {
            $(this).html(T.jsDateDiff($(this).attr(strtime)))
        })
    }
  }
  return ComputationTime;
}))
