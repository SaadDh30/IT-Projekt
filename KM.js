
let dimensions = [];

function fetchDimensions() {
  fetch('https://raw.githubusercontent.com/Mariamk03/IT-Projekt/main/assessment_input.json')
         
    .then(response => response.json())
    .then(data => {
      dimensions = data;
      //startAssessment(); // Starte das Assessment, sobald die Daten geladen sind
    })
    .catch(error => console.error('Fehler beim Laden der Dimensionsdaten:', error));
}


// Initialisiere das Assessment beim Laden der Seite
document.addEventListener('DOMContentLoaded', fetchDimensions);

let currentDimension = 0;
let currentQuestionIndex = 0;

function startAssessment() {
  document.getElementById('welcomeScreen').style.display = 'none';
  document.getElementById('assessment').style.display = 'block';
  document.getElementById('progressBarContainer').style.display = 'block';
  document.getElementById('homeIcon').style.display = 'block';
  // Initialisiere totalQuestions hier
  totalQuestions = dimensions.reduce((total, dimension) => total + dimension.questions.length, 0);

  loadDimension(currentDimension);
}


  
function loadDimension(dimensionIndex) {
  currentQuestionIndex = 0; // Setzen des Frage-Index auf 0, wenn eine neue Dimension geladen wird
  loadQuestion(dimensionIndex, currentQuestionIndex);
}


function loadQuestion(dimensionIndex, questionIndex) {
  const dimension = dimensions[dimensionIndex];
  const question = dimension.questions[questionIndex];
  const assessmentContainer = document.getElementById('assessment');

  // Verwende einen leeren String, um den Inhalt zusammenzustellen
  let htmlContent = `<h2>${dimension.name}</h2><h3>${question.text}</h3>`;

  // Erstelle den Fragen- und Antwortentext
  htmlContent += '<div class="question-text">'; // Start div für Frage und Antworten
  question.answers.forEach((answer, answerIndex) => {
      const isChecked = question.selectedAnswerIndex === answerIndex ? 'checked' : '';
      htmlContent += `
          <div class= "answer-option">
              <input type="radio" id="answer_${dimensionIndex}_${questionIndex}_${answerIndex}" 
                     name="question${dimensionIndex}_${questionIndex}" 
                     value="${answerIndex}" 
                     ${isChecked}>
              <label for="answer_${dimensionIndex}_${questionIndex}_${answerIndex}">${answer.text}</label>
          </div>
      `;
  });
  htmlContent += '</div>'; // Ende div für Frage und Antworten

  // Füge die Buttons hinzu
  htmlContent += '<div class="button-container clearfix">'; // Start div für Buttons
  if (dimensionIndex > 0 || questionIndex > 0) {
      htmlContent += `<button class="button" onclick="previousQuestion()">Zurück</button>`;
  }

  if (questionIndex < dimension.questions.length - 1) {
      htmlContent += `<button class="button" onclick="checkAnswerAndProceed(${dimensionIndex}, ${questionIndex})">Weiter</button>`;
  } else if (dimensionIndex < dimensions.length - 1) {
      htmlContent += `<button class="button" onclick="checkAnswerAndProceed(${dimensionIndex}, ${questionIndex}, true)">Nächste Dimension</button>`;
  } else {
      htmlContent += `<button class="button" onclick="submitAssessment()">Absenden</button>`;
  }
  htmlContent += '</div>'; // Ende div für Buttons

  // Setze den ganzen HTML-Inhalt auf einmal
  assessmentContainer.innerHTML = htmlContent;
}


function backToStart() {
  // Verstecke das Assessment und die Ergebnisseite
  document.getElementById('welcomeScreen').style.display = 'block';
  document.getElementById('assessment').style.display = 'none';
  document.getElementById('progressBarContainer').style.display = 'none';
  document.getElementById('homeIcon').style.display = 'none';
  document.getElementById('resultsScreen').style.display = 'none';  // Verstecke die Ergebnisseite
  document.querySelectorAll('.detail-screen').forEach(screen => screen.style.display = 'none');

  // Setze alle Antworten und Punktestände zurück
  dimensions.forEach(dimension => {
      dimension.questions.forEach(question => {
          question.selectedAnswerIndex = null; // Setze die ausgewählte Antwort zurück
      });
      dimension.totalScore = 0; // Setze den Gesamtpunktestand der Dimension zurück
  });

  // Setze den Fortschrittsbalken zurück
  document.getElementById('progressBar').style.width = '0%';

  // Setze die aktuellen Indizes auf den Anfangswert zurück
  currentDimension = 0;
  currentQuestionIndex = 0;
}


// Berechne die Gesamtanzahl der Fragen einmalig
let totalQuestions = dimensions.reduce((total, dimension) => total + dimension.questions.length, 0);



function updateProgressBar() {
  // Berechne den aktuellen Fortschritt basierend auf der Anzahl der beantworteten Fragen
  let answeredQuestions = dimensions.slice(0, currentDimension).reduce((total, dimension) => total + dimension.questions.length, 0) + currentQuestionIndex + 1;
  let progressPercentage = (answeredQuestions / totalQuestions) * 100;
  document.getElementById('progressBar').style.width = `${progressPercentage}%`;
}



function checkAnswerAndProceed(dimensionIndex, questionIndex, toNextDimension = false) {
  const selectedAnswerElement = document.querySelector(`input[name="question${dimensionIndex}_${questionIndex}"]:checked`);

  if (!selectedAnswerElement) {
      alert('Bitte wählen Sie eine Antwort aus.');
      return;
  }

  const selectedAnswerIndex = parseInt(selectedAnswerElement.value);
  let question = dimensions[dimensionIndex].questions[questionIndex];
  if (question.selectedAnswerIndex !== null) {
      // Punkte der vorherigen Antwort abziehen
      dimensions[dimensionIndex].totalScore -= question.answers[question.selectedAnswerIndex].score;
  }

  // Speichere die ausgewählte Antwort und aktualisiere die Punkte
  question.selectedAnswerIndex = selectedAnswerIndex;
  dimensions[dimensionIndex].totalScore += question.answers[selectedAnswerIndex].score;

  // Fortschrittsbalken aktualisieren und zur nächsten Frage gehen
  updateProgressBar();

  if (toNextDimension) {
      nextDimension();
  } else {
      nextQuestion();
  }
}



function previousQuestion() {
  // Überprüfen, ob es sich um die erste Frage der ersten Dimension handelt
  if (currentDimension === 0 && currentQuestionIndex === 0) {
      // Benutzer ist bei der ersten Frage der ersten Dimension, zeige Startseite
      backToStart();
  } else {
      // Punkte von der aktuellen Frage abziehen, wenn eine Antwort ausgewählt wurde
      let currentQuestion = dimensions[currentDimension].questions[currentQuestionIndex];
      if (currentQuestion.selectedAnswerIndex !== null) {
          let currentScore = currentQuestion.answers[currentQuestion.selectedAnswerIndex].score;
          dimensions[currentDimension].totalScore -= currentScore; // Punkte der aktuellen Frage abziehen
          currentQuestion.selectedAnswerIndex = null; // Ausgewählte Antwort zurücksetzen
      }

      // Zur vorherigen Frage navigieren
      if (currentQuestionIndex > 0) {
          currentQuestionIndex--;
      } else if (currentDimension > 0) {
          currentDimension--;
          currentQuestionIndex = dimensions[currentDimension].questions.length - 1;
      }

      loadQuestion(currentDimension, currentQuestionIndex);
      updateProgressBar(); // Aktualisiere den Fortschrittsbalken
  }
}


// Aktualisiere nextQuestion und nextDimension, um den Fortschrittsbalken zu aktualisieren
function nextQuestion() {
  if (currentQuestionIndex < dimensions[currentDimension].questions.length - 1) {
      currentQuestionIndex++;
      loadQuestion(currentDimension, currentQuestionIndex);
  } else if (currentDimension < dimensions.length - 1) {
      nextDimension();
  } else {
      // Assessment beenden oder Ergebnisse anzeigen
      console.log('Assessment abgeschlossen.');
  }
}



function nextDimension() {
  currentDimension++;
  currentQuestionIndex = -1; // Setze currentQuestionIndex auf -1, da nextQuestion() es sofort inkrementiert
  nextQuestion(); // Gehe direkt zur nächsten Frage
}


function submitAssessment() {
  const lastDimensionIndex = dimensions.length - 1;
  const lastQuestionIndex = dimensions[lastDimensionIndex].questions.length - 1;
  const lastQuestion = dimensions[lastDimensionIndex].questions[lastQuestionIndex];
  const selectedAnswerElement = document.querySelector(`input[name="question${lastDimensionIndex}_${lastQuestionIndex}"]:checked`);

  if (selectedAnswerElement && lastQuestion.selectedAnswerIndex === null) {
      const selectedAnswerIndex = parseInt(selectedAnswerElement.value);
      lastQuestion.selectedAnswerIndex = selectedAnswerIndex;
      dimensions[lastDimensionIndex].totalScore += lastQuestion.answers[selectedAnswerIndex].score;
  }

  document.getElementById('welcomeScreen').style.display = 'none';
  document.getElementById('assessment').style.display = 'none';
  document.getElementById('progressBarContainer').style.display = 'none';

  let resultsHTML = "<h1>Assessment-Ergebnisse</h1>";
  dimensions.forEach((dimension, index) => {
      const maxScore = dimension.questions.length * 5; // Each question can have a maximum of 5 points
      resultsHTML += `<div class="dimension-result">
          <h2>${dimension.name}: ${dimension.totalScore} / ${maxScore} Punkte</h2>
          <button class="button detail-button" id="button_${index + 1}" onclick="showDetailScreen(${index + 1})">Detailansicht</button>
      </div>`;
      dimension.totalScore = 0; // Reset total score
  });

  const resultsScreen = document.getElementById('resultsScreen');
  resultsScreen.innerHTML = resultsHTML;
  resultsScreen.style.display = 'block'; // Show results screen
}


function showResultsScreen() {
  // Hide all detail screens
  document.querySelectorAll('.detail-screen').forEach(screen => screen.style.display = 'none');

  // Show the results screen
  document.getElementById('resultsScreen').style.display = 'block';
}

function showDetailScreen(screenIndex) {
  // Verstecke den Ergebnisbildschirm und alle anderen Detailbildschirme
  document.getElementById('resultsScreen').style.display = 'none';
  const detailScreens = ["detailScreen1", "detailScreen2", "detailScreen3", "detailScreen4", "detailScreen5"];
  detailScreens.forEach(screen => {
      document.getElementById(screen).style.display = 'none';
  });

  // Hole die entsprechende Dimension und bereite die Detailansicht vor
  const dimension = dimensions[screenIndex - 1];
  const detailScreen = document.getElementById(`detailScreen${screenIndex}`);
  let htmlContent = `<h1>${dimension.name}</h1>`;

  // Erzeuge den Inhalt für jede Frage der Dimension
  dimension.questions.forEach((question, index) => {
      const answer = question.answers[question.selectedAnswerIndex];
      htmlContent += `
          <div class="question-detail">
              <h3>${question.criteria}</h3>
              <p>${answer ? answer.recommendation : 'Keine Antwort ausgewählt'}</p>
          </div>
      `;
  });

  // Füge den "Zurück zu Übersicht" Button hinzu
  htmlContent += `
      <button class="button back-to-overview" onclick="showResultsScreen()">Zurück zu Übersicht</button>
  `;

  // Setze den HTML-Inhalt und zeige den Detailbildschirm
  detailScreen.innerHTML = htmlContent;
  detailScreen.style.display = 'block';
}

