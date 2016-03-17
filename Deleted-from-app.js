/* Deleted from app.js to remove unnecessary code but might need to reference later */


    // Manual code the move the first move

    $("#move").on("click", function() {
      var newCP1 =  "polygon(41.319% 62.469%,43.681% 68.148%,40.069% 75.062%,37.847% 68.889%)";
      var newCP2 =  "polygon(43.611% 68.272%,47.153% 73.580%,43.611% 79.753%,40.069% 74.815%)";
      var newCP3 =  "polygon(51.458% 69.753%,53.611% 75.802%,49.375% 79.136%,47.431% 73.580%)";
      var newCP4 =  "polygon(54.861% 66.296%,56.250% 70.000%,53.681% 75.802%,51.458% 69.877%)";
      var newCP5 =  "polygon(44.375% 60.000%,48.542% 67.778%,47.153% 73.580%,43.611% 68.272%)";

      $("#handChanger.beauty .shard-wrap:nth-child(1)").css({"-webkit-clip-path": newCP1,
                                                              "transition": "2s cubic-bezier(.17,.67,.69,1.33)"
                                                              });
      $("#handChanger.beauty .shard-wrap:nth-child(2)").css({"-webkit-clip-path": newCP2,
                                                              "transition": "all 2s ease-in"
                                                              });
      $("#handChanger.beauty .shard-wrap:nth-child(3)").css({"-webkit-clip-path": newCP3,
                                                              "transition": "all 3s ease-in"
                                                              });
      $("#handChanger.beauty .shard-wrap:nth-child(4)").css({"-webkit-clip-path": newCP4,
                                                              "transition": "all 4s ease-in"
                                                              });
      $("#handChanger.beauty .shard-wrap:nth-child(5)").css({"-webkit-clip-path": newCP5,
                                                              "transition": "all 5s ease-in"
                                                              });
      // disable the move button
      // enable the move back button
      $("#move2").prop('disabled', false);
      $("#move").prop('disabled', true);
    });


    var arrFirstPic = [
                        "",
                        "polygon(41.181% 63.827%,45.139% 81.852%,43.819% 89.753%,39.028% 68.395%)",
                        "polygon(57.083% 63.704%,59.167% 67.901%,54.306% 89.506%,52.986% 81.975%)",
                        "polygon(41.181% 63.827%,45.833% 78.642%,45.139% 81.852%)",
                        "polygon(57.083% 63.704%,52.986% 81.975%,52.361% 78.765%)"
                      ];

    // onload the move back button should be disabled because it hasn't moved yet
    $("#move2").prop('disabled', true);

    $("#move2").on("click", function() {
      // $("#handChanger.harmony .shard-wrap:nth-child(121)").css({"display": "none"});
      // $("#handChanger.harmony .shard-wrap:nth-child(122)").css({"display": "none"});
      var easeIn = 0.5,
          easeInValue;

      for (var i = 1; i < 5; i++) {
        easeIn += 0.5;
        easeInValue = "all " + easeIn + "s ease-in";
        var cssString = "#handChanger.beauty .shard-wrap:nth-child(" + i + ")";
        $(cssString).css({"-webkit-clip-path": arrFirstPic[i],
                          "transition": easeInValue,
                          "background-image": "url('handtester.jpg')"});
      }
      // make move enabled
      // disable moved back because we just did
      $("#move2").prop('disabled', true);
      $("#move").prop('disabled', false);

    });