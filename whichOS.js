$(function () {
            var OS = navigator.platform;            
            var isMobile = {
                Android: function () {
                    return OS.match(/linux|pike/i);
                },
                iOS: function () {
                    return OS.match(/iPhone|iPad|iPod/i);
                },
                Windows: function () {
                    return OS.match(/win/i);
                }
            };
            if (isMobile.Windows()) {
                //win
            }
            else if (isMobile.Android()) {
                //android
            }
            else {
               //ios
            }           
        });