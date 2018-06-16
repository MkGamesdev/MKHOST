var CC = {
    sendHref: function() {
    	if(window.sendNickName) {
        }
    },
    captchaRenderId: false,
    showCaptcha: function() {

        if(window.CC.captchaRenderId) {
            grecaptcha.reset();
        } else {
            window.CC.captchaRenderId  = true;
            grecaptcha.render(jQuery('#captchaDisplay')[0], {
              'sitekey' : '6LcR_xQUAAAAAHKSidDgZQmUeNdXZ091xL_pi0n_',
              'callback' : function(captchaCode) {
                    if(window.CC && window.CC.showCaptcha) {
                        window.sendCaptchaInput(captchaCode);
                    }
                    setTimeout(function() {
                        jQuery('#captchaContainer').hide();
                    }, 300);
              },
              'theme' : 'dark'
            });
        }
        jQuery('#captchaContainer').show();
    },
};