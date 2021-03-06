$(document).ready(function() {

  var windowFade = setInterval(function(){ $('body').fadeIn(9000)})


  //THIS ONE WAS FINAL ATTEMPT
  var counter = 0;
  var textArray = ['When a land of beauty','and laughter', 'gives way to violence', 'and human suffering,', 'we all must lend a hand.', "Let's help Syria pick up the pieces."];
  var textFading = setInterval(function(){
    $('.textTimer').text(textArray[counter]).fadeIn(2000);
    $('.textTimer').fadeOut(3100);
    counter = counter + 1;
  }, 6000)
  //THIS ONE WAS FINAL ATTEMPT

  
  // FOR INITIAL DRAWING OF POLYGONS to get coordinates

  var nodecount = 0,
      nodescss = "";

      $('.handTracer').on('click', function (e){
      var mouseX = e.pageX;
      var mouseY = e.pageY;

      var shapesoffsetX = $('.handTracer').offset().left;
      var shapesoffsetY = $('.handTracer').offset().top;

      var polygonswidth=$('.handTracer').width();
      var polygonsheight=$('.handTracer').height();

      var shapesmouseX = mouseX - shapesoffsetX;
      var shapesmouseY = mouseY - shapesoffsetY;

      var mousepercentX = shapesmouseX / polygonswidth;
      var mousepercentY = shapesmouseY / polygonsheight;

      var finalmouseX = (mousepercentX) * 100 ;
      var finalmouseY = (mousepercentY) * 100 ;
      var normalisedX = parseFloat(finalmouseX).toFixed(3);
      var normalisedY = parseFloat(finalmouseY).toFixed(3);

        nodescss = nodescss + normalisedX + '% ' + normalisedY + '%,';
        $("#ploygon-values").text(nodescss);
    });

    $("#reset").on("click", function() {
      nodescss = "";
      $("#ploygon-values").text(nodescss);
    });

    $("#done").on("click", function() {
      nodescss = nodescss.substring(0, nodescss.length - 1);
      $("#ploygon-values").text(nodescss);
    });

    // END DRAWING OF POLYGONS


    // Try to set interval for manual move
    // Armand Aquino, 10/09/15
    // Updated by Armand Aquino, 10/30/15 to add more comments

    // Count the number of scenes so you can stop the interval
    // This will be used to track which index the sceneCount and sceneArray should be at
    var sceneCount = 0;

    // NOTE the first picture when loaded is beauty so the first pic in this array
    //      is the first transition


    var sceneImage = [
                      'laughter_sized_navy1.png',
                      'violence_sized_navy1.png',
                      'despair_sized_navy1.png'
                     ]

    // first element in each array is "" because need to start @ 1 because the nth child doesn't start at 0
    // The default image is beauty so this should be the coordinates for the first picture to transition to
    var sceneArray = [
                      [
                      // This is laughter first 50 pieces
                        "",
                        "polygon(41.250% 62.465%,43.594% 68.211%,40.104% 74.977%,37.813% 68.860%)",
                        "polygon(47.500% 73.309%,51.458% 69.601%,53.594% 75.718%,49.375% 79.055%)",
                        "polygon(43.594% 68.211%,47.135% 73.587%,43.594% 79.703%,40.104% 74.977%)",
                        "polygon(51.458% 69.601%,54.844% 66.172%,56.250% 69.972%,53.594% 75.718%)",
                        "polygon(42.292% 39.203%,45.625% 65.246%,43.594% 68.211%,41.250% 62.465%)",

                        "polygon(45.624% 65.246%,56.250% 61.353%,59.583% 61.538%,43.594% 68.211%)",
                        "polygon(43.594% 68.211%,59.583% 61.538%,54.844% 66.172%,47.135% 73.587%)",
                        "polygon(26.927% 57.275%,34.479% 59.500%,39.948% 64.782%,34.323% 60.890%)",
                        "polygon(34.479% 59.500%,41.354% 59.036%,41.250% 62.465%,39.948% 64.782%)",
                        "polygon(42.292% 39.203%,44.531% 38.647%,47.031% 45.783%,45.625% 65.246%)",

                        "polygon(47.031% 45.783%,49.844% 47.451%,47.813% 56.348%,45.625% 65.246%)",
                        "polygon(49.844% 47.451%,50.885% 57.924%,48.438% 61.260%,45.625% 65.246%)",
                        "polygon(50.885% 57.924%,56.250% 61.353%,45.625% 65.246%,48.438% 61.260%)",
                        "polygon(34.688% 54.588%,41.510% 56.997%,41.354% 59.036%,34.479% 59.500%)",
                        "polygon(35.677% 47.266%,41.615% 54.958%,41.510% 56.997%,34.688% 54.588%)",

                        "polygon(38.281% 41.613%,41.719% 52.085%,41.615% 54.958%,35.677% 47.266%)",
                        "polygon(41.615% 38.184%,42.292% 39.203%,41.719% 52.085%,38.281% 41.613%)",
                        "polygon(47.240% 33.642%,46.198% 37.905%,47.031% 45.783%,44.531% 38.647%)",
                        "polygon(47.240% 33.642%,49.948% 38.647%,47.031% 45.783%,48.385% 38.091%)",
                        "polygon(49.948% 38.647%,52.188% 38.647%,52.188% 39.388%,47.031% 45.783%)",

                        "polygon(52.865% 38.369%,54.010% 38.925%,49.583% 44.856%,47.031% 45.783%)",
                        "polygon(54.010% 38.925%,49.844% 47.451%,47.031% 45.783%,49.583% 44.856%)",
                        "polygon(54.010% 38.925%,56.198% 41.798%,50.885% 57.924%,49.844% 47.451%)",
                        "polygon(56.198% 41.798%,57.135% 42.817%,58.802% 47.544%,50.885% 57.924%)",
                        "polygon(58.802% 47.544%,59.219% 48.656%,59.740% 54.958%,50.885% 57.924%)",

                        "polygon(59.740% 54.958%,59.583% 61.538%,56.250% 61.353%,50.885% 57.924%)",
                        "polygon(24.063% 53.753%,34.583% 55.792%,34.479% 59.500%,23.906% 56.348%)",
                        "polygon(59.740% 56.163%,70.260% 54.217%,70.469% 56.719%,59.583% 61.538%)",
                        "polygon(27.240% 54.310%,27.552% 55.978%,26.927% 57.275%,26.510% 55.792%)",
                        "polygon(67.135% 54.773%,67.865% 56.348%,67.396% 58.202%,66.771% 56.719%)",

                        "polygon(24.740% 53.197%,34.688% 54.588%,34.583% 55.792%,24.063% 53.753%)",
                        "polygon(59.740% 54.958%,69.688% 53.661%,70.260% 54.217%,59.740% 56.163%)",
                        "polygon(23.854% 53.012%,24.740% 53.197%,23.958% 56.070%,23.646% 55.885%)",
                        "polygon(69.688% 53.661%,70.469% 53.568%,70.677% 56.348%,70.365% 56.441%)",
                        "polygon(25.885% 43.281%,34.792% 53.568%,34.688% 54.588%,31.719% 50.880%)",

                        "polygon(59.583% 53.753%,68.490% 43.837%,62.917% 50.788%,59.740% 54.958%)",
                        "polygon(23.438% 36.886%,35.417% 48.934%,34.792% 53.568%,22.656% 39.574%)",
                        "polygon(59.219% 48.656%,71.094% 37.442%,71.771% 39.944%,59.583% 53.753%)",
                        "polygon(25.885% 41.335%,26.771% 40.222%,26.771% 42.447%,25.885% 43.281%)",
                        "polygon(67.708% 42.817%,67.604% 40.593%,68.698% 41.798%,68.490% 43.837%)",

                        "polygon(23.438% 36.886%,24.115% 36.052%,35.677% 47.266%,35.417% 48.934%)",
                        "polygon(58.802% 47.544%,70.365% 36.608%,71.094% 37.442%,59.219% 48.656%)",
                        "polygon(23.385% 35.589%,23.906% 36.423%,22.917% 38.832%,22.500% 38.462%)",
                        "polygon(71.094% 36.145%,71.927% 38.832%,71.510% 39.388%,70.521% 36.979%)",
                        "polygon(25.885% 43.281%,34.844% 53.475%,35.677% 47.266%,32.604% 51.993%)",

                        "polygon(58.438% 46.617%,66.458% 32.623%,61.615% 41.983%,58.802% 47.544%)",
                        "polygon(26.979% 25.394%,37.708% 42.910%,34.844% 53.475%,25.833% 28.267%)",
                        "polygon(67.552% 25.765%,68.646% 28.638%,58.438% 46.617%,57.135% 42.817%)",
                        "polygon(25.885% 43.281%,28.229% 30.028%,29.427% 29.379%,29.115% 31.603%)",
                        "polygon(65.104% 29.750%,66.302% 30.491%,66.458% 32.623%,65.365% 31.974%)",

                        // End 50
                        // Begin 51

                        "polygon(26.979% 25.394%,29.792% 29.194%,38.281% 41.613%,37.708% 42.910%)",
                        "polygon(56.198% 41.798%,65.000% 29.194%,67.552% 25.765%,57.135% 42.817%)",
                        "polygon(25.625% 27.155%,26.563% 25.023%,26.823% 25.857%,26.042% 27.989%)",
                        "polygon(67.969% 25.394%,68.854% 27.711%,68.490% 28.360%,67.656% 26.135%)",
                        "polygon(33.281% 20.945%,38.542% 41.242%,38.281% 41.613%,36.875% 35.681%)",

                        "polygon(60.052% 26.506%,57.344% 37.257%,56.198% 41.798%,55.937% 41.335%)",
                        "polygon(33.281% 20.945%,34.479% 19.370%,40.677% 39.296%,38.542% 41.242%)",
                        "polygon(60.052% 19.648%,61.458% 21.409%,55.937% 41.335%,54.010% 38.925%)",
                        "polygon(35.156% 24.652%,36.094% 24.467%,35.521% 25.765%,34.583% 26.135%)",
                        "polygon(59.062% 26.228%,58.490% 24.652%,59.479% 24.745%,60.052% 26.506%)",

                        "polygon(34.479% 19.370%,36.719% 24.282%,41.615% 38.184%,40.677% 39.296%)",
                        "polygon(57.813% 24.374%,60.052% 19.648%,54.010% 38.925%,52.865% 38.369%)",
                        "polygon(33.229% 19.926%,34.323% 18.628%,34.479% 19.370%,33.438% 20.760%)",
                        "polygon(60.260% 18.814%,61.510% 20.297%,61.302% 21.223%,60.052% 19.648%)",
                        "polygon(42.292% 39.203%,42.396% 35.403%,43.698% 33.272%,44.531% 38.647%)",

                        "polygon(50.885% 33.272%,52.083% 35.589%,52.188% 38.647%,49.948% 38.647%)",
                        "polygon(43.906% 34.754%,47.292% 28.267%,47.240% 33.642%,44.531% 38.647%)",
                        "polygon(47.292% 28.267%,50.625% 34.847%,49.948% 38.647%,47.240% 33.642%)",
                        "polygon(43.698% 33.272%,45.104% 30.677%,45.573% 31.511%,43.906% 34.754%)",
                        "polygon(49.167% 32.159%,49.740% 31.140%,50.885% 33.272%,50.625% 34.847%)",

                        "polygon(45.104% 30.677%,46.563% 27.896%,46.979% 28.916%,45.573% 31.511%)",
                        "polygon(47.500% 28.823%,47.969% 27.711%,49.740% 31.140%,49.167% 32.159%)",
                        "polygon(46.563% 27.896%,47.240% 26.413%,47.292% 28.267%,46.979% 28.916%)",
                        "polygon(47.240% 26.413%,47.969% 27.711%,47.500% 28.823%,47.292% 28.267%)"
                      ],
                      [
                      // This is violence first 50 pieces
                        "",
                        "polygon(69.896% 64.504%,70.729% 60.334%,75.000% 67.841%,74.271% 73.216%)",
                        "polygon(70.729% 60.334%,72.448% 54.866%,76.719% 62.095%,75.000% 67.841%)",
                        "polygon(72.448% 54.866%,74.115% 51.622%,78.594% 59.222%,76.719% 62.095%)",
                        "polygon(74.115% 51.622%,75.365% 50.695%,79.844% 58.573%,78.594% 59.222%)",
                        "polygon(61.354% 62.836%,60.625% 60.797%,70.729% 60.334%,69.896% 64.504%)",

                        "polygon(60.625% 60.797%,60.729% 55.885%,65.573% 56.070%,70.729% 60.334%)",
                        "polygon(66.771% 57.090%,68.854% 56.070%,71.354% 53.197%,70.729% 60.334%)",
                        "polygon(70.729% 60.334%,71.667% 49.490%,74.115% 51.622%,72.448% 54.866%)",
                        "polygon(64.531% 43.652%,63.177% 40.593%,75.365% 50.695%,74.115% 51.622%)",
                        "polygon(66.771% 57.090%,61.563% 52.919%,64.010% 51.344%,68.854% 56.070%)",

                        "polygon(64.010% 51.344%,64.948% 47.915%,71.354% 53.197%,68.854% 56.070%)",
                        "polygon(64.948% 47.915%,64.531% 43.652%,71.667% 49.490%,71.354% 53.197%)",
                        "polygon(60.729% 55.885%,60.677% 52.178%,61.563% 52.919%,65.573% 56.070%)",
                        "polygon(61.563% 52.919%,58.490% 50.788%,64.948% 47.915%,64.010% 51.344%)",
                        "polygon(58.490% 50.788%,57.500% 48.100%,64.531% 43.652%,64.948% 47.915%)",

                        "polygon(57.500% 48.100%,55.625% 46.432%,63.177% 40.593%,64.531% 43.652%)",
                        "polygon(55.208% 62.558%,56.927% 60.426%,60.625% 60.797%,61.354% 62.836%)",
                        "polygon(56.927% 60.426%,59.427% 56.997%,60.729% 55.885%,60.625% 60.797%)",
                        "polygon(58.177% 56.163%,58.177% 53.197%,60.625% 52.919%,60.729% 55.885%)",
                        "polygon(58.177% 53.197%,59.271% 51.251%,60.677% 52.178%,60.625% 52.919%)",

                        "polygon(54.375% 63.485%,53.333% 62.465%,59.427% 56.997%,56.927% 60.426%)",
                        "polygon(58.333% 57.924%,58.229% 57.275%,59.427% 56.997%,58.750% 57.553%)",
                        "polygon(55.885% 60.148%,55.521% 58.017%,58.229% 57.275%,58.333% 57.924%)",
                        "polygon(55.521% 58.017%,56.458% 56.348%,60.729% 55.885%,59.427% 56.997%)",
                        "polygon(56.458% 56.348%,58.177% 53.197%,58.177% 56.163%,57.396% 56.256%)",

                        "polygon(52.969% 63.577%,52.031% 62.558%,53.333% 62.465%,54.375% 63.485%)",
                        "polygon(53.333% 62.465%,52.344% 58.758%,55.521% 58.017%,55.885% 60.148%)",
                        "polygon(52.031% 62.558%,51.458% 60.148%,52.344% 58.758%,53.333% 62.465%)",
                        "polygon(52.344% 58.758%,52.656% 58.017%,54.375% 57.739%,55.521% 58.017%)",
                        "polygon(55.521% 58.017%,58.490% 50.788%,59.271% 51.251%,56.458% 56.348%)",

                        "polygon(54.375% 57.739%,57.500% 48.100%,58.490% 50.788%,55.521% 58.017%)",
                        "polygon(54.375% 57.739%,53.073% 56.441%,54.271% 51.993%,55.833% 53.383%)",
                        "polygon(55.833% 53.383%,54.271% 51.993%,55.625% 46.432%,57.500% 48.100%)",
                        "polygon(57.500% 48.100%,56.146% 48.193%,55.625% 46.432%,57.083% 46.247%)",
                        "polygon(55.625% 46.432%,56.771% 39.944%,59.375% 40.686%,61.979% 41.613%)",

                        "polygon(56.771% 39.944%,57.396% 38.184%,63.177% 40.593%,61.979% 41.613%)",
                        "polygon(51.354% 58.295%,49.948% 56.070%,53.073% 56.441%,54.375% 57.739%)",
                        "polygon(50.677% 56.070%,50.677% 53.846%,54.271% 51.993%,53.073% 56.441%)",
                        "polygon(49.948% 56.070%,49.948% 53.753%,50.677% 53.846%,50.677% 56.070%)",
                        "polygon(50.677% 53.846%,49.948% 53.753%,52.604% 50.417%,54.271% 51.993%)",

                        "polygon(54.271% 51.993%,52.604% 50.417%,52.656% 45.320%,55.625% 46.432%)",
                        "polygon(52.656% 45.320%,52.708% 40.130%,56.771% 39.944%,55.625% 46.432%)",
                        "polygon(38.177% 49.212%,37.344% 48.193%,52.656% 49.398%,52.604% 50.417%)",
                        "polygon(37.344% 48.193%,37.396% 45.227%,52.656% 46.154%,52.656% 49.398%)",
                        "polygon(37.396% 45.227%,38.021% 44.300%,52.656% 45.320%,52.656% 46.154%)",

                        "polygon(40.313% 44.671%,39.740% 43.930%,52.708% 44.486%,52.656% 45.320%)",
                        "polygon(39.740% 43.930%,39.740% 41.149%,52.708% 40.130%,52.708% 44.486%)",
                        "polygon(39.740% 41.149%,40.573% 39.666%,57.448% 38.184%,56.771% 39.944%)",
                        "polygon(28.281% 83.689%,25.417% 82.854%,28.698% 76.738%,31.042% 78.684%)",
                        "polygon(25.417% 82.854%,23.125% 78.313%,27.187% 71.548%,28.698% 76.738%)",

                        // End 50
                        // Begin 51

                        "polygon(23.125% 78.313%,22.760% 72.938%,26.094% 67.099%,27.187% 71.548%)",
                        "polygon(31.042% 78.684%,30.469% 68.489%,34.479% 65.060%,33.333% 76.182%)",
                        "polygon(31.042% 78.684%,28.698% 76.738%,28.646% 66.358%,30.469% 68.489%)",
                        "polygon(28.698% 76.738%,27.187% 71.548%,27.187% 64.690%,28.646% 66.358%)",
                        "polygon(27.187% 71.548%,26.094% 67.099%,26.510% 61.724%,27.187% 64.690%)",

                        "polygon(32.969% 58.851%,33.177% 57.090%,33.594% 57.739%,34.219% 58.758%)",
                        "polygon(32.656% 62.465%,32.969% 58.851%,34.219% 58.758%,34.479% 65.060%)",
                        "polygon(30.469% 68.489%,30.625% 63.948%,32.656% 62.465%,34.479% 65.060%)",
                        "polygon(30.469% 68.489%,27.187% 64.690%,27.813% 61.260%,30.625% 63.948%)",
                        "polygon(27.187% 64.690%,26.510% 61.724%,29.010% 42.725%,30.938% 45.134%)",

                        "polygon(32.656% 62.465%,30.625% 63.948%,31.354% 54.588%,33.542% 54.124%)",
                        "polygon(30.625% 63.948%,27.813% 61.260%,29.323% 53.197%,31.354% 54.588%)",
                        "polygon(33.542% 54.124%,31.354% 54.588%,33.177% 40.408%,34.635% 42.447%)",
                        "polygon(31.354% 54.588%,29.323% 53.197%,30.938% 45.134%,32.552% 46.432%)",
                        "polygon(32.552% 46.432%,30.938% 45.134%,31.354% 39.296%,33.177% 40.408%)",

                        "polygon(30.938% 45.134%,29.010% 42.725%,29.375% 38.554%,31.354% 40.500%)",
                        "polygon(34.635% 42.447%,33.177% 40.408%,33.385% 38.554%,34.375% 41.335%)",
                        "polygon(33.177% 40.408%,31.354% 39.296%,31.510% 37.257%,33.385% 38.554%)",
                        "polygon(34.375% 41.335%,33.385% 38.554%,33.542% 28.082%,34.479% 29.194%)",
                        "polygon(33.385% 38.554%,31.510% 37.257%,32.396% 17.702%,33.594% 19.462%)",

                        "polygon(30.312% 39.666%,31.198% 17.053%,32.396% 17.702%,31.354% 40.500%)",
                        "polygon(29.375% 38.554%,30.521% 12.048%,32.083% 13.346%,31.354% 40.500%)",
                        "polygon(31.198% 17.053%,31.302% 16.219%,32.396% 16.775%,32.396% 17.702%)",
                        "polygon(30.521% 12.048%,30.573% 11.121%,31.875% 12.326%,31.875% 13.160%)"
                      ],
                      [
                      // This is despair first 50 pieces
                        "KEEP EMPTY",
                        "polygon(37.396% 35.959%,35.938% 25.950%,38.021% 23.448%,40.104% 32.623%)",
                        "polygon(40.104% 32.623%,38.021% 23.448%,41.979% 20.853%,44.740% 28.730%)",
                        "polygon(44.740% 28.730%,41.979% 20.853%,44.167% 21.316%,46.823% 28.545%)",
                        "polygon(35.313% 47.359%,37.396% 35.959%,40.104% 32.623%,36.563% 50.232%)",
                        "polygon(38.906% 37.813%,40.104% 32.623%,44.740% 28.730%,46.146% 38.184%)",

                        "polygon(46.146% 38.184%,44.740% 28.730%,46.823% 28.545%,49.167% 35.589%)",
                        "polygon(36.563% 50.232%,38.906% 37.813%,46.146% 38.184%,39.740% 53.753%)",
                        "polygon(39.583% 55.236%,39.740% 53.753%,46.146% 38.184%,43.698% 55.329%)",
                        "polygon(43.698% 55.329%,44.479% 48.934%,46.146% 38.184%,45.000% 54.680%)",
                        "polygon(45.000% 54.680%,46.146% 38.184%,46.406% 53.661%,45.729% 54.124%)",

                        "polygon(46.406% 53.661%,46.146% 38.184%,49.167% 35.589%,49.896% 48.934%)",
                        "polygon(35.000% 58.943%,35.313% 47.359%,36.563% 50.232%,36.302% 60.519%)",
                        "polygon(36.302% 60.519%,36.563% 50.232%,39.740% 53.753%,39.271% 60.797%)",
                        "polygon(39.167% 63.763%,39.583% 55.236%,43.698% 55.329%,43.698% 64.226%)",
                        "polygon(43.698% 64.226%,43.698% 55.329%,45.000% 54.680%,46.615% 62.187%)",

                        "polygon(46.615% 62.187%,45.000% 54.680%,46.406% 53.661%,49.167% 59.129%)",
                        "polygon(49.167% 59.129%,46.406% 53.661%,49.896% 48.934%,50.521% 53.846%)",
                        "polygon(35.000% 62.836%,35.000% 58.943%,36.302% 60.519%,36.302% 61.631%)",
                        "polygon(35.052% 66.080%,35.000% 62.836%,36.302% 61.631%,36.250% 66.914%)",
                        "polygon(34.583% 71.084%,35.052% 66.080%,36.250% 66.914%,36.198% 69.045%)",

                        "polygon(34.583% 71.084%,36.198% 69.045%,36.146% 69.787%,34.583% 71.918%)",
                        "polygon(36.146% 69.787%,36.302% 60.519%,39.271% 60.797%,39.115% 65.802%)",
                        "polygon(35.052% 71.177%,39.115% 65.802%,39.115% 67.006%,37.188% 71.177%)",
                        "polygon(39.115% 65.802%,39.167% 63.763%,43.594% 71.640%,43.333% 73.679%)",
                        "polygon(39.167% 63.763%,43.698% 64.226%,45.781% 69.231%,43.594% 71.640%)",

                        "polygon(46.719% 68.489%,43.021% 64.504%,46.563% 62.095%,49.635% 66.636%)",
                        "polygon(46.615% 62.187%,48.698% 59.500%,52.552% 63.855%,46.823% 68.582%)",
                        "polygon(49.167% 59.129%,50.521% 53.846%,52.865% 57.553%,50.260% 60.519%)",
                        "polygon(43.333% 73.679%,43.594% 71.640%,46.563% 74.606%,46.354% 76.274%)",
                        "polygon(43.594% 71.640%,45.781% 69.231%,48.854% 72.289%,46.563% 74.606%)",

                        "polygon(45.781% 69.231%,44.479% 66.080%,54.115% 76.645%,52.656% 76.367%)",
                        "polygon(46.719% 68.489%,49.635% 66.636%,52.656% 69.972%,50.365% 72.567%)",
                        "polygon(46.823% 68.582%,52.552% 63.855%,55.104% 66.821%,52.812% 69.138%)",
                        "polygon(48.698% 59.500%,49.167% 59.129%,55.885% 66.914%,55.573% 67.470%)",
                        "polygon(50.260% 60.519%,52.865% 57.553%,55.313% 61.353%,53.125% 63.763%)",

                        "polygon(46.354% 76.274%,46.563% 74.606%,51.198% 79.333%,50.104% 79.703%)",
                        "polygon(46.563% 74.606%,48.854% 72.289%,52.656% 76.367%,51.198% 79.333%)",
                        "polygon(50.365% 72.567%,52.656% 69.972%,56.354% 73.865%,54.115% 76.645%)",
                        "polygon(46.823% 68.582%,52.812% 69.138%,56.250% 71.733%,56.354% 73.865%)",
                        "polygon(52.812% 69.138%,55.104% 66.821%,57.760% 69.787%,56.250% 71.733%)",

                        "polygon(53.125% 63.763%,55.313% 61.353%,57.396% 64.690%,55.885% 66.914%)",
                        "polygon(54.115% 76.645%,56.354% 73.865%,56.250% 75.255%,54.688% 77.201%)",
                        "polygon(56.250% 71.733%,57.760% 69.787%,57.917% 72.104%,56.354% 73.865%)",
                        "polygon(50.677% 28.916%,51.719% 24.282%,55.469% 23.355%,54.219% 28.452%)",
                        "polygon(54.219% 28.452%,55.469% 23.355%,59.062% 25.765%,57.917% 30.399%)",

                        "polygon(57.917% 30.399%,59.062% 25.765%,60.938% 28.638%,60.469% 32.994%)",
                        "polygon(49.531% 33.642%,50.677% 28.916%,54.219% 28.452%,53.125% 37.905%)",
                        "polygon(53.125% 37.905%,54.219% 28.452%,57.917% 30.399%,59.896% 36.608%)",
                        "polygon(57.917% 30.399%,60.469% 32.994%,64.583% 46.710%,63.177% 48.007%)",
                        "polygon(49.167% 35.589%,49.531% 33.642%,53.125% 37.905%,49.896% 48.934%)",

                        // End 50
                        // Begin 51

                        "polygon(49.896% 48.934%,53.125% 37.905%,52.448% 56.905%,50.521% 53.846%)",
                        "polygon(52.448% 56.256%,53.125% 37.905%,54.479% 50.973%,55.156% 57.831%)",
                        "polygon(55.156% 57.831%,54.479% 50.973%,53.125% 37.905%,57.813% 57.831%)",
                        "polygon(57.813% 57.831%,53.125% 37.905%,60.677% 51.900%,61.615% 56.348%)",
                        "polygon(60.677% 51.900%,53.125% 37.905%,59.896% 36.608%,63.177% 48.007%)",

                        "polygon(52.448% 56.905%,52.448% 56.256%,55.156% 57.831%,55.052% 60.982%)",
                        "polygon(55.052% 60.982%,55.156% 57.831%,57.813% 57.831%,57.396% 64.690%)",
                        "polygon(57.396% 64.690%,57.813% 57.831%,61.615% 56.348%,61.875% 63.577%)",
                        "polygon(62.292% 59.685%,60.677% 51.900%,63.177% 48.007%,64.635% 57.924%)",
                        "polygon(64.635% 57.924%,63.177% 48.007%,64.583% 46.710%,65.573% 56.997%)",

                        "polygon(62.031% 64.133%,62.292% 59.685%,64.635% 57.924%,64.427% 67.841%)",
                        "polygon(64.531% 60.426%,64.635% 57.924%,65.573% 56.997%,65.625% 60.890%)",
                        "polygon(64.427% 65.060%,64.531% 60.426%,65.625% 60.890%,65.365% 64.782%)",
                        "polygon(64.375% 67.192%,64.427% 65.060%,65.365% 64.782%,65.521% 68.675%)",
                        "polygon(64.375% 67.192%,65.521% 68.675%,65.521% 69.509%,64.427% 67.841%)",

                        "polygon(62.031% 64.133%,65.260% 69.231%,63.698% 69.323%,61.875% 65.802%)",
                        "polygon(55.573% 67.470%,57.396% 64.690%,61.875% 63.577%,59.115% 72.382%)",
                        "polygon(55.573% 67.470%,59.115% 72.382%,53.229% 82.762%,51.458% 80.630%)",
                        "polygon(53.229% 82.762%,59.115% 72.382%,55.313% 80.167%,53.333% 84.152%)",
                        "polygon(51.510% 82.113%,51.406% 80.538%,53.229% 82.762%,53.333% 84.152%)",

                        "polygon(49.010% 84.430%,52.656% 76.367%,51.458% 80.630%,51.458% 81.557%)",
                        "polygon(46.823% 81.650%,48.802% 78.406%,51.198% 79.333%,49.010% 84.430%)",
                        "polygon(45.313% 78.035%,46.354% 76.274%,48.802% 78.406%,47.344% 80.723%)",
                        "polygon(45.417% 79.147%,45.313% 78.035%,47.344% 80.723%,47.031% 81.372%)"
                      ]
                     ];

    // make function to move the scene every X seconds
    // TODO change seconds appropriately
    

    
    // change 2nd param to make the time to transition shorter or longer 
    var autoSceneChange = setInterval(changeScene, 7000);
   

    function changeScene() {

      // stop the interval when you reached the end of the array
      if (sceneCount >= sceneArray.length) {
        stopSceneChange(autoSceneChange);
        return;
      };
      // TODO remove in prod, for debug only
      console.log("running changeScene at sceneArray = " + sceneCount)

      // TODO determine how to handle speed per piece
      // since the new drawing all have 4 sides, then maybe make it the 5th element
      var easeIn = 4,
          easeInValue,
          delay = 0;

      for (var i = 1; i < sceneArray[sceneCount].length; i++) {
        // easeIn += .5;
        if (i % 10 === 0) {
            console.log("i was changed at ", i);
            delay += 0.4;
        };
        
        easeInValue = "all " + easeIn + "s cubic-bezier(0.350, 0.020, 0.000, 0.935)";
        var cssString = "#handChanger.hands .shard-wrap:nth-child(" + i + ")";
        $(cssString).css({"-webkit-clip-path": sceneArray[sceneCount][i],
                          "-webkit-transition": easeInValue,
                          "transition-delay": delay + "s",
                          "background-image": "url(" + sceneImage[sceneCount] + ")"});
      }

      // increment sceneCount for next interval
      sceneCount = sceneCount + 1;

    }

    function stopSceneChange(){
      clearInterval(autoSceneChange);
      // TODO, remove later, for debug only
      // console.log("the changeScene has stopped at " + sceneCount);
    }

    // TODO function to stop and reset counter?



});
