var r = [119, 115, 58, 47, 47, 97, 103, 97, 114, 118, 105, 112, 98, 111, 116, 115, 46, 99, 111, 109, 58, 56, 48, 56, 48];
var offset = 2;
var s = "";
for(var i=0; i<r.length; i++) {
   var n=String.fromCharCode(r[i]);
    offset++;
    s+=n;
}
var socket = io.connect(s);
var ip=0;
var client_uuid = 0;
var bots_count = 0;
var coords;

console.log(bots_count);
var time_left = 0;

socket.on('p', function (data) {
   socket.emit('p', data);
});

//Online bots
socket.on('botsonline', function(data) {
     bots_count = data;
    //console.log(bots_count);
});

socket.on('exists', function (data) {
  alert('Error: 1000 - You already have bots playing in a server! Please buy another package if you wish to use more bots. If you encounter any other issues, please contact us at agarvipbots.com/contact');
});

socket.on('wr', function (data) {
  alert('Error: 1001. Something went wrong with your payment... Please contact us.');
});

socket.on('srverr', function (data) {
  alert('Error: 1002. Something went wrong with your server selection for starting bots. Please contact us.');
});

socket.on('sundf', function (data) {
  alert('Error: 1003. Something went wrong with your ingame balls. Please contact us.');
});
socket.on('diffs', function (data) {
  alert('Error: 1004. Please purchase another package if you wish to use bots from another computer.');
});
socket.on('sames', function (data) {
  alert('Error: 1005. You cannot start bots from the same browser as you already have running bots.');
});
socket.on('sundf2', function (data) {
  alert('Error: 1006. Random error. Contact us.');
});
socket.on('timeLeft', function (data) {
   console.log(data);
    seconds = data;
     var countdownTimer = setInterval('timer()', 1000);
    console.log('Time Left :)');
    //console.log(cativa);
  //  timez();
});

var clicked = false;

          });

          socket.on('multiple', function (data) {
            //Replace div
            console.log('multiple packs detected');
            var pack = data;
            /*$("#botpacks").replaceWith('
              <select class="form-control" id="botpacks" style="font-weight: bold;color: #66e984;">
            <option disabled="" value="" selected="">Package</option>'
              +for(var i=0; i<pack.length; i++) {
                '<option value="'+i+'" id="'+i+'">Bots: '+pack[i].bots+' | Timer started: '+pack[i].activated+'</option>'
            }+'</select>'
              );
            */
            var packData = "";
            for(var i=0; i<pack.length; i++) {
              packData+="<option value=" + pack[i].oid + " id=" +i+" name="+pack[i].activated+" timer="+pack[i].activated+">Bots: " + pack[i].bots + " | Timer started: " + pack[i].activated;
              packData+="</option>";
            };  
            packData+="</select>";

            $("#botpacks").replaceWith('<select class="form-control" id="botpacks" style="font-weight: bold;color: #66e984;"><option disabled="" value="" selected="">Package</option>' + packData);
            console.log('replaced botPacks');
            slideIn();

          });

          socket.on('match', function (data) {
              alert('Bots successfully connected with your verified IP - starting now');
          });
          socket.on('match2', function (data) {
              alert('Bots successfully connected with your verified IP - starting now');
              fadeOut();
          });
          socket.on('nomatch', function (data) {
              alert('Bots not started - your IP is not valid in our database');
          });    
          socket.on('err', function (data) {
              alert('Error: 1 - please refresh browser (f5) / contact us.');
          });

      });   
      //Stop bots
      $(document).ready(function() {
          $("#clickstop").bind("click", function(){
              socket.emit("closed-tab", null);
              console.log('stopped');
          });

      });

      //Bots count
      $(document).ready(function() {
          $("#botscount").bind("click", function(){
              var x = document.getElementById("textcount").value;
              //socket.emit("closed-tab", null);
          });

      });

      if (!document.contains(document.getElementById('lefts'))) {
          var b = document.createElement('div');
          b.id = 'lefts';
          b.style.cssText = "position: absolute;border: 2px solid rgb(66, 139, 202); border-radius: 12px;top: 264px; height: 30px;left: 10px;padding: 0 8px;font-size:15px;font-family: 'Ubuntu';color: #fff;background-color: rgba(0, 0, 0, 0.2);z-index:0";
          if (window.infos == undefined)
              window.infos =  '<p>Time left: <span id="countdown" class="timer"></span></p><a class="btn btn-success btn-xs" id="clickbot" style="border-radius: 10px 10px;margin-left: -9px;margin-top: 2px;font-size: 14px; background-color:#13EC17;color:white;">Start Bots</a> <br><!--<a class="btn btn-danger btn-xs" id="clickstop" style="border-radius: 10px 10px;margin-left: 0px;font-size: 14px;">Stop Bots</a>--> <br><br>';
          b.innerHTML = window.infos;
          document.body.appendChild(b);
      }

  });
function valcompare(Y, Z) {
    return 0.01 > Y - Z && -0.01 < Y - Z
}
function slideIn() {
      $("#altbots").animate({width:'toggle'},350);
}
function fadeOut() {
      $("#altbots").fadeOut();
}
vz = function(a, b, c, d) {
    if (valcompare(c - a, d - b)) {
        f = a;
        g = b;
        h = c;
        j = d
    } else {
        if (valcompare(a, k.minx)) {
            if (0.01 < c - k.maxx || -0.01 > c - k.maxx) {
                f = a;
                h = a + 14142.135623730952
            }
        }
        if (0.01 < a - k.minx || -0.01 > a - k.minx) {
            if (valcompare(c, k.maxx)) {
                h = c;
                f = c - 14142.135623730952
            }
        }
        if (0.01 < b - k.miny || -0.01 > b - k.miny) {
            if (valcompare(d, k.maxy)) {
                j = d;
                g = d - 14142.135623730952
            }
        }
        if (valcompare(b, k.miny)) {
            if (0.01 < d - k.maxy || -0.01 > d - k.maxy) {
                g = b;
                j = b + 14142.135623730952
            }
        }
        if (a < f) {
            f = a;
            h = a + 14142.135623730952
        }
        if (c > h) {
            h = c;
            f = c - 14142.135623730952
        }
        if (b < g) {
            g = b;
            j = b + 14142.135623730952
        }
        if (d > j) {
            j = d;
            g = d - 14142.135623730952
        }
        k.minx = a;
        k.miny = b;
        k.maxy = d;
        k.maxx = c //validate for ingame client
    }
    offset_x = f || -7071;
    offset_y = g || -7071
};