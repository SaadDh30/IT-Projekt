<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Wissensmanagement Self-Assessment</title>
    <link rel="stylesheet" href="https://mariamk03.github.io/IT-Projekt/KM.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
    <div id="welcomeScreen">
        <h1>Wissensmanagement Self-Assessment</h1>
        <p>Info über die 5 Dimensionen des Wissensmanagements...</p>
        <p>...........</p>
        <p>...........</p>
        <p>...........</p>  
        <p>...........</p>
        <p>...........</p>
        <p>...........</p>
        <p class="distance"></p>
        <!-- More introductory text can be added here -->
        <button class="button" onclick="startAssessment()">Test starten</button>
    </div>
    <div class="icon-bar">
        <a id="homeIcon" href="#" onclick="backToStart()"><i class="fa fa-home"></i></a>
    </div>

    
    
    <div id="assessment" style="display: none;">
        <!-- Dynamic question content is loaded here -->
    </div>

    <div id="progressBarContainer" style="display: none;">
        <div id="progressBar"></div>
    </div>

    <div id="resultsScreen" style="display: none;">
        <!-- Results will be displayed here -->
    </div>

    <!-- Detail screens for each dimension -->
    <div id="detailScreen1" class="detail-screen" style="display: none;"></div>
    <div id="detailScreen2" class="detail-screen" style="display: none;"></div>
    <div id="detailScreen3" class="detail-screen" style="display: none;"></div>
    <div id="detailScreen4" class="detail-screen" style="display: none;"></div>
    <div id="detailScreen5" class="detail-screen" style="display: none;"></div>

    <script src="https://mariamk03.github.io/IT-Projekt/KM.js"></script>
</body>
</html>
