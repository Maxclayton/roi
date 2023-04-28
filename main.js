 const btn = document.getElementById('button');

   var email = document.getElementById('user_email');

   email.addEventListener("keyup", function (evt) {
      if (email.value.includes("@")) {
         btn.style.opacity = '1';
         btn.style.pointerEvents = 'all'
      } else {
         btn.style.opacity = '.2';
         btn.style.pointerEvents = 'none';
      }
   }, false);


   var modal = document.getElementById("myModal");
   var span = document.getElementsByClassName("close")[0];
   span.onclick = function () {
      modal.style.display = "none";
   }
   window.onclick = function (event) {
      if (event.target == modal) {
         modal.style.display = "none";
      }
   }
var ctx = document.getElementById("myChart").getContext('2d');

var myChart = new Chart(ctx, {
   type: 'doughnut',
   data: {
      labels: ["Win Percentage", 'Difference', "Loss Percentage"],
      datasets: [{

         data: [0, 0, 100], // Specify the data values array
         borderColor: ['#00C371', '#09D4C8', '#F14035'],
         backgroundColor: ['#00C371', '#09D4C8', '#F14035'], // Add custom color background (Points and Fill)
         borderWidth: 1, // Specify bar border width,
         hoverOffset: 5

      }]
   },
   options: {
      responsive: true, // Instruct chart js to respond nicely.
      maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
      cutout: 99,
      plugins: {
         legend: {
            display: false,

         },

      }
   }
});


   var typingTimer;
   var doneTypingInterval = 100;
   var $input1 = $('#wins');
   var $input2 = $('#loss');
   var $input3 = $('#deal');

   $input1.on('keyup', function () {
      clearTimeout(typingTimer);
      typingTimer = setTimeout(doneTyping1, doneTypingInterval);
   });

   $input1.on('keydown', function () {
      clearTimeout(typingTimer);
   });

   $input2.on('keyup', function () {
      clearTimeout(typingTimer);
      typingTimer = setTimeout(doneTyping2, doneTypingInterval);
   });

   $input2.on('keydown', function () {
      clearTimeout(typingTimer);
   });

   $input3.on('keyup', function () {
      clearTimeout(typingTimer);
      typingTimer = setTimeout(doneTyping3, doneTypingInterval);
   });

   $input3.on('keydown', function () {
      clearTimeout(typingTimer);
   });

   document.getElementById('wins').addEventListener('input', event =>
      event.target.value = (parseInt(event.target.value.replace(/[^\d]+/gi, '')) || 0).toLocaleString('en-US')
   );

   document.getElementById('loss').addEventListener('input', event =>
      event.target.value = (parseInt(event.target.value.replace(/[^\d]+/gi, '')) || 0).toLocaleString('en-US')
   );

   document.getElementById('deal').addEventListener('input', event =>
      event.target.value = (parseInt(event.target.value.replace(/[^\d]+/gi, '')) || 0).toLocaleString('en-US')
   );




   var count = 0;
   var count2 = 1;



   var slider = document.getElementById('myRange');

   var slider2 = document.getElementById('myRange2');

   var slider3 = document.getElementById('myRange3');

   document.getElementById("myRange").oninput = function () {
      var value = (this.value - this.min) / (this.max - this.min) * 100
      this.style.background = 'linear-gradient(to right, #09D4C8 0%, #09D4C8 ' + value + '%, #fff ' + value + '%, white 100%)'
   };

   document.getElementById("myRange2").oninput = function () {
      var value = (this.value - this.min) / (this.max - this.min) * 100
      this.style.background = 'linear-gradient(to right, #09D4C8 0%, #09D4C8 ' + value + '%, #fff ' + value + '%, white 100%)'
   };

   document.getElementById("myRange3").oninput = function () {
      var value = (this.value - this.min) / (this.max - this.min) * 100
      this.style.background = 'linear-gradient(to right, #09D4C8 0%, #09D4C8 ' + value + '%, #fff ' + value + '%, white 100%)'
   };
   
function doneTyping3() {

      var wins = document.getElementById("wins").value;
      var loss = document.getElementById("loss").value;
      var deal = document.getElementById("deal").value;
      wins = parseFloat(wins.replace(/,/g, ''));
      loss = parseFloat(loss.replace(/,/g, ''));
      deal = parseFloat(deal.replace(/,/g, ''));
      var slider = document.getElementById('myRange');
      document.getElementById("wins").classList.remove("error")
      var sliderData = Number(slider.value)
      var sliderData2 = Number(slider2.value)
      var sliderData3 = Number(slider3.value)
      // WIN RATE
      var wr = (wins / (wins + loss)) * 100;
      //TOTAL CLOSED OPPORTUNITIES 
      var tco = wins + loss;
      //TOTAL CLOSED WON VALUE
      var total = wins * deal;
      //TOTAL CLOSED LOST VALUE
      var tclv = loss * deal;

      //TOTAL CLOSED PIPELINE VALUE
      var tcpv = total + tclv;

      //WIN RATE + 10%


      var wr10 = wr * (sliderData / 100) + wr;
      // console.log(wr10);
      //INCREMENTAL WINS
      var iw = (wr10 / 100) * tco - wins;
      //INCREMENTAL REVENUE
      var ir = iw * deal;
      //WIN-BACK OPPORTUNITIES
      var wbo2 = loss * .2 * .1;
      var wbo = loss * (sliderData2 / 100) * .1;
      var arc2 = wins * .2 * .05;
      var arc = wins * (sliderData3 * .01) * .05
      var wroi = ir;
      var wbroi = wbo * deal;
      var arcroi = arc * deal;
      var totalRoi = wroi + wbroi + arcroi;
      totalRoi = totalRoi;
      if (wins > 0 && loss > 0) {
         document.getElementById("wins").classList.remove("error");
         document.getElementById("loss").classList.remove("error");
         if (deal > 0) {
          document.getElementById("wr-roi").innerHTML = "$" + Math.round(wroi).toLocaleString("en-US");
                document.getElementById("wr-roi-2").innerHTML = "$" + Math.round(wroi).toLocaleString("en-US");
                document.getElementById("wr-roi-3").value = "$" + Math.round(wroi).toLocaleString("en-US");
                document.getElementById("wb-roi").innerHTML = "$" + Math.round(wbroi).toLocaleString("en-US");
                document.getElementById("wb-roi-2").innerHTML = "$" + Math.round(wbroi).toLocaleString("en-US");
                document.getElementById("wb-roi-3").value = "$" + Math.round(wbroi).toLocaleString("en-US");
                document.getElementById("at-risk-roi").innerHTML = "$" + Math.round(arcroi).toLocaleString("en-US");
                document.getElementById("at-risk-roi-2").innerHTML = "$" + Math.round(arcroi).toLocaleString("en-US");
                document.getElementById("at-risk-roi-3").value = "$" + Math.round(arcroi).toLocaleString("en-US");
                document.getElementById("total-roi").innerHTML = "$" + Math.round(totalRoi).toLocaleString("en-US");
                document.getElementById("total-roi-5").innerHTML = "$" + Math.round(totalRoi).toLocaleString("en-US");
                document.getElementById("total-roi-6").value = "$" + Math.round(totalRoi).toLocaleString("en-US");
                document.getElementById("d-w").innerHTML = Math.round(totalRoi / deal);
                document.getElementById("d-w-0").innerHTML = Math.round(wroi / deal);
                document.getElementById("d-w-2").innerHTML = Math.round(wbroi / deal);
                document.getElementById("d-w-3").innerHTML = Math.round(arcroi / deal);
                document.getElementById("d-w-5").innerHTML = Math.round(totalRoi / deal);
                document.getElementById("deals-1").value =  Math.round(totalRoi / deal);
                document.getElementById("d-w-6").innerHTML = Math.round(wroi / deal);
                document.getElementById("d-w-7").innerHTML = Math.round(wbroi / deal);
                document.getElementById("d-w-8").innerHTML = Math.round(arcroi / deal);
                document.getElementById("d-w-9").value = Math.round(wroi / deal);
                document.getElementById("d-w-10").value = Math.round(wbroi / deal);
                document.getElementById("d-w-11").value = Math.round(arcroi / deal);
                document.getElementById("my-rate-10").innerHTML = "<div class='current'>Current</div>" + Math.round(wr * 10) / 10 + '%';
                document.getElementById("my-rate").innerHTML = Math.round(wr10 * 10) / 10 + '%';
                document.getElementById("my-rate-10-2").innerHTML = "<div class='current'>Current</div>" + Math.round(wr * 10) / 10 + '%';
                document.getElementById("current-win").value = Math.round(wr * 10) / 10 + '%';
                document.getElementById("my-rate-2").innerHTML = Math.round(wr10 * 10) / 10 + '%';
                document.getElementById("clozd-win").value = Math.round(wr10 * 10) / 10 + '%';
                document.getElementById("form").style.display = "block";
                document.getElementById('slide-1-val').innerHTML = slider.value + '%';
                document.getElementById('slide-2-val').innerHTML = slider2.value + '%';
                document.getElementById('slide-3-val').innerHTML = slider3.value + '%';
                document.getElementById('second-email').value = 'maxwell.clayton@clozd.com, joshua.kaestner@clozd.com';
            if (count === 0) {
            
          		  var elem = document.getElementById("myChart");
               elem.parentNode.removeChild(elem);
               var newCan = document.createElement("CANVAS");
               newCan.setAttribute('id', 'myChart');
               var canParent = document.getElementById("chart-container");
               canParent.appendChild(newCan);

               var newCan2 = document.createElement("CANVAS");
               newCan2.setAttribute('id', 'myChart2');
               var canParent2 = document.getElementById("chart-container2");
               canParent2.appendChild(newCan2);
            }

            if (count > 0) {
               var elem = document.getElementById("myChart");
               elem.parentNode.removeChild(elem);

               var newCan = document.createElement("CANVAS");
               newCan.setAttribute('id', 'myChart');
               var canParent = document.getElementById("chart-container");
               canParent.appendChild(newCan);

               var elem2 = document.getElementById("myChart2");
               elem2.parentNode.removeChild(elem2);

               var newCan2 = document.createElement("CANVAS");
               newCan2.setAttribute('id', 'myChart2');
               var canParent2 = document.getElementById("chart-container2");
               canParent2.appendChild(newCan2);

            }


            count++;

            var slider = document.getElementById("myRange").value;

            var ctx = document.getElementById("myChart").getContext('2d');

            var pieTotal = wins + loss
            wins = wins / pieTotal;
            loss = loss / pieTotal;
            wins = wins * 100;
            loss = loss * 100;
            diff = wr10 - wr;



            var myChart = new Chart(ctx, {
               type: 'doughnut',
               data: {
                  labels: ["Win Percentage", 'Difference', "Loss Percentage"],
                  datasets: [{

                     data: [wins.toFixed(2), diff, loss.toFixed(2)], // Specify the data values array
                     borderColor: ['#00C371', '#09D4C8', '#F14035'],
                     backgroundColor: ['#00C371', '#09D4C8', '#F14035'], // Add custom color background (Points and Fill)
                     borderWidth: 1, // Specify bar border width,
                     hoverOffset: 5

                  }]
               },
               options: {
                  responsive: true, // Instruct chart js to respond nicely.
                  maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
                  cutout: 99,
                  plugins: {
                     legend: {
                        display: false,

                     },

                  }
               }
            });

            var chartCode = document.getElementById("myChart2").getContext('2d');


            var myChart2 = new Chart(chartCode, {
               type: 'doughnut',
               data: {
                  labels: ["Win Percentage", 'Difference', "Loss Percentage"],
                  datasets: [{

                     data: [wins.toFixed(2), diff, loss.toFixed(2)], // Specify the data values array
                     borderColor: ['#00C371', '#09D4C8', '#F14035'],
                     backgroundColor: ['#00C371', '#09D4C8', '#F14035'], // Add custom color background (Points and Fill)
                     borderWidth: 1, // Specify bar border width,
                     hoverOffset: 5

                  }]
               },
               options: {
                  responsive: true, 
                  maintainAspectRatio: false,  
                  cutout: 99,
                  plugins: {
                     legend: {
                        display: false,

                     },

                  }
               }
            });
         }
      }
      else {
         document.getElementById("wins").classList.add("error")
         document.getElementById("loss").classList.add("error")
      }
   }
   slider.addEventListener('change', function Calculate() {
      doneTyping3();
   });
   slider2.addEventListener('change', function Calculate() {
      doneTyping3();
   });
   slider3.addEventListener('change', function Calculate() {
      doneTyping3();
   });
   function doneTyping1() {
      doneTyping3();
   }
   function doneTyping2() {
      doneTyping3();
   };
   function checkChange() {
      var checkbox = document.getElementById("checkbox");
      if (checkbox.checked) {
 				document.getElementById('second-email').value = 'maxwell.clayton@clozd.com, joshua.kaestner@clozd.com';         
      } else {
         document.getElementById('second-email').value = '';
      }
   }

