
let dimensions = [];

function fetchDimensions() {
  fetch('https://raw.githubusercontent.com/Mariamk03/IT-Projekt/main/assessment_content.json')
         
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
//let currentQuestionIndex = 0;

function startAssessment() {
  document.getElementById('welcomeScreen').style.display = 'none';
  document.getElementById('assessment').style.display = 'block';
  document.getElementById('progressBarContainer').style.display = 'block';
  document.getElementById('homeIcon').style.display = 'block';
  // Initialisiere totalQuestions hier
  //totalQuestions = dimensions.reduce((total, dimension) => total + dimension.questions.length, 0);

  loadDimension(currentDimension);
}


  
function loadDimension(dimensionIndex) {
    const dimension = dimensions[dimensionIndex];
    const assessmentContainer = document.getElementById('assessment');
    let htmlContent = `<h2>${dimension.name}</h2>`;

    dimension.questions.forEach((question, questionIndex) => {
        htmlContent += `<h3>${question.text}</h3><div class="question-text">`;
        question.answers.forEach((answer, answerIndex) => {
            const isChecked = question.selectedAnswerIndex === answerIndex ? 'checked' : '';
            htmlContent += `
                <div class="answer-option">
                    <input type="radio" id="answer_${dimensionIndex}_${questionIndex}_${answerIndex}" 
                           name="question${dimensionIndex}_${questionIndex}" 
                           value="${answerIndex}" 
                           ${isChecked}
                           onclick="saveAnswer(${dimensionIndex}, ${questionIndex}, ${answerIndex})">
                    <label for="answer_${dimensionIndex}_${questionIndex}_${answerIndex}">${answer.text}</label>
                </div>
            `;
        });
        htmlContent += '</div>';
    });

    htmlContent += `<div class="button-container">`;
    if (dimensionIndex > 0) {
        htmlContent += `<button class="button" onclick="previousDimension()">Zurück</button>`;
    }
    if (dimensionIndex < dimensions.length - 1) {
        htmlContent += `<button class="button" onclick="checkAnswersAndProceed(${dimensionIndex}, false)">Nächste Dimension</button>`;
    } else {
        htmlContent += `<button class="button" onclick="checkAnswersAndProceed(${dimensionIndex}, true)">Assessment absenden</button>`;
    }
    htmlContent += `</div>`;

    assessmentContainer.innerHTML = htmlContent;
    updateProgressBar();
}
  
  function saveAnswer(dimensionIndex, questionIndex, answerIndex) {
    let dimension = dimensions[dimensionIndex];
    let question = dimension.questions[questionIndex];
    if (question.selectedAnswerIndex !== null) {
      dimension.totalScore -= question.answers[question.selectedAnswerIndex].score;
    }
    question.selectedAnswerIndex = answerIndex;
    dimension.totalScore += question.answers[answerIndex].score;
    updateProgressBar();
  }

  function checkAnswersAndProceed(dimensionIndex, isFinal) {
    if (areAllQuestionsAnswered(dimensionIndex)) {
        if (isFinal) {
            submitAssessment();
        } else {
            nextDimension();
        }
    } else {
        alert("Bitte beantworten Sie alle Fragen, bevor Sie fortfahren.");
    }
}

function areAllQuestionsAnswered(dimensionIndex) {
    return dimensions[dimensionIndex].questions.every(question => question.selectedAnswerIndex !== null);
}


function backToStart() {
    // Verstecken der Assessment und Results Bildschirme
    document.getElementById('assessment').style.display = 'none';
    document.getElementById('resultsScreen').style.display = 'none';

    // Verstecken aller Detailansichten
    document.querySelectorAll('.detail-screen').forEach(screen => {
        screen.style.display = 'none';
    });

    // Zeigen der Startseite
    document.getElementById('welcomeScreen').style.display = 'block';

    // Zurücksetzen des Fortschrittsbalkens auf 0%
    document.getElementById('progressBar').style.width = '0%';

    // Setzen Sie hier weitere Zurücksetzungen nach Bedarf
}

function updateProgressBar() {
    let totalQuestions = dimensions.reduce((sum, dim) => sum + dim.questions.length, 0);
    let answeredQuestions = dimensions.reduce((sum, dim) => sum + dim.questions.filter(q => q.selectedAnswerIndex !== null).length, 0);
    let progressPercentage = (answeredQuestions / totalQuestions) * 100;
    document.getElementById('progressBar').style.width = `${progressPercentage}%`;
  }




function checkDimensionCompletion(dimensionIndex) {
    let allAnswered = dimensions[dimensionIndex].questions.every(q => q.selectedAnswerIndex !== null);
    if (!allAnswered) {
      alert('Bitte beantworten Sie alle Fragen dieser Dimension, bevor Sie fortfahren.');
      return;
    }
    nextDimension();
  }

  function nextDimension() {
    if (currentDimension < dimensions.length - 1) {
      currentDimension++;
      loadDimension(currentDimension);
    } else {
      submitAssessment();
    }
  }
  
  function previousDimension() {
    if (currentDimension > 0) {
      currentDimension--;
      loadDimension(currentDimension);
    }
  }

  function submitAssessment() {
    document.getElementById('assessment').style.display = 'none';
    document.getElementById('progressBarContainer').style.display = 'none';
    document.getElementById('homeIcon').style.display = 'block';
    showResultsScreen();
  }

  function showResultsScreen() {
    const resultsScreen = document.getElementById('resultsScreen');
    resultsScreen.innerHTML = `<h1>Assessment-Ergebnisse</h1>`;
    dimensions.forEach((dimension, index) => {
        const maxScore = dimension.questions.reduce((sum, question) => sum + Math.max(...question.answers.map(a => a.score)), 0);
        resultsScreen.innerHTML += `<div class="dimension-result">
            <h2>${dimension.name}: ${dimension.totalScore} / ${maxScore}</h2>
            <button class="button" onclick="showDetailScreen(${index})">Detailansicht</button>
        </div>`;
    });
    resultsScreen.style.display = 'block';
    
    // Verstecke alle Detailansichten
    document.querySelectorAll('.detail-screen').forEach(screen => {
        screen.style.display = 'none';
    });
}

function showDetailScreen(index) {
    // Verstecke die Ergebnisansicht und alle anderen Detailansichten
    document.getElementById('resultsScreen').style.display = 'none';
    document.querySelectorAll('.detail-screen').forEach(screen => screen.style.display = 'none');

    // Hole das spezifische Detailansicht-Element für die gewählte Dimension
    const detailScreen = document.getElementById(`detailScreen${index + 1}`);
    const dimension = dimensions[index];
    let htmlContent = `<h1>${dimension.name}</h1>`;

    // Erzeuge HTML-Inhalt für jede Frage
    dimension.questions.forEach(question => {
        const selectedAnswer = question.answers[question.selectedAnswerIndex];
        htmlContent += `
        <div class="question-detail">
            <h2><strong>${question.criteria}</strong></h2> <!-- Kriterium fett gedruckt -->
            <div class="recommendation-box">
                <p>${selectedAnswer ? selectedAnswer.recommendation : 'Keine Empfehlung verfügbar'}</p>
            </div>
        </div>
        `;
    });

    // Button zum Zurückkehren
    htmlContent += `<button class="button" onclick="showResultsScreen()">Zurück zu Ergebnissen</button>`;

    // Setze den HTML-Inhalt und zeige die Detailansicht an
    detailScreen.innerHTML = htmlContent;
    detailScreen.style.display = 'block';
}

