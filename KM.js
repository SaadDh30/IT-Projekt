/*const dimensions = [
  // Prozess, Strategie, Technologie, Organisation, People...
  // Die Dimensionen und Fragen hier in einem Array von Objekten
 
      {
        name: 'Prozess',
        questions: [
          {
            text: 'Werden Wissenslücken auf systematische Weise identifiziert und mithilfe klar definierter Prozesse geschlossen?',
            answers: [
              {text:'Es existiert keine formalen Prozesse, um Wissenslücke zu identifizieren und zu schließen. Das Unternehmen reagiert nur nach Bedarf und nicht systematisch.',score: 1},
              {text:'Unverzichtbare Kenntnisse für alltägliche Aufgaben werden dokumentiert. Allerdings gibt es noch keine klar definierten Prozesse, um Wissenslücken proaktiv zu schließen.',score: 2},
              {text:'Formelle Prozesse zur Identifikation von Wissenslücken werden etabliert.  Das Unternehmen nutzt Metriken, um die Produktivitätssteigerung zu messen.',score: 3},
              {text:'Es wird eine quantitative Messung der Wissensmanagementslücken durch Metriken durchgeführt, um diese quantitativ zu bewerten und systematisch zu schließen. ',score: 4},
              {text:'Der Prozess zur Erkennung der Wissensmanagementslücken wird kontinuierlich überprüft und verbessert. Der bestehende Prozess kann leicht an neue Anforderungen angepasst werden.',score: 5},
            ],
            selectedAnswerIndex: null, // Initialisiert als null, keine Antwort ausgewählt
          },
          {
            text: 'Bestimmt das Unternehmen seine Schlüssekompetenzen (strategisch wichtige Fähigkeiten, die einen Wettbewerbsvorteil bieten) und bringt sie mit seiner Mission und seinen strategischen Zielen in Einklang?',
            answers: [
              {text:'Es existiert keine formalen Prozesse zur Erfassung, Weitergabe und Wiederverwendung von Schlüsselkompetenzen. Das Bewusstsein für die Bedeutung von Schlüsselkompetenzen fehlt.',score: 1},
              {text:'Schlüsselkompetenzen für die Ausführung alltäglicher Aufgaben werden dokumentiert. Das Unternehmen ist sich bewusst und hat die Absicht, seine Schlüsselkompezenen zu verwalten, auch wenn es möglicherweise nicht genau weiß, wie diese umgesetzt werden sollen.',score: 2},
              {text:'Schlüsselkompetenzen werden implementiert, und es gibt einen formalisierten Prozess, um Schlüsselkompetenzen mit der Unternehmensmission und den strategischen Zielen zu verknüpfen. Das Unternehmen nutzt dabei Metriken, um sicherzustellen, dass diese Kompetenzen zur Erhöhung der Produktivität beitragen.', score: 3},
              {text:'Schlüsselkompetenzen sind gut etabliert und spiegeln sich innerhalb der Arbeitsabläufe des Unternehmens wider. Zudem erfogt eine quantitative Messung der Schlüsselkompetenzen durch den Einsatz von Metriken.',score: 4},
              {text:'Das Unternehmen optimiert kontinuierlich den Identifikationsprozess der Schlüsselkompetenzen und verbessert kontinuierlich die Übereinstimmung zu der Mission und den strategischen Zielen.',score: 5},
            ],
            selectedAnswerIndex: null, // Initialisiert als null, keine Antwort ausgewählt
          },
          {
            text: 'gestaltet das Unternehmen seine Arbeitssysteme und Schlüsselprozesse, um Wert für Kunden zu schaffen und Spitzenleistungen zu erreichen?',
            answers: [
              {text:'Es existiert keine formalen Prozesse zur Erfassung, Weitergabe und Wiederverwendung von Arbeitssystemen und Schlüsselprozessen.',score: 1},
              {text:'Schlüsselprozesse für die Ausführung alltäglicher Aufgaben werden dokumentiert. Es existiert ein Bewustsein, Arbeitssysteme und Schlüsselprozesse zu gestalten, um Wert für Kunden zu schaffen und Spiztenleistungen zu erreichen, auch wenn die Umsetzung unklar ist.',score: 2},
              {text:'Das Unternehmen hat klar formalisierte Prozessstrukturen zur Gestaltung von Arbeitssystemen und Schlüsselprozessen. Metriken werden verwendet, um sicherzustellen, dass diese Spitzenleistungen erreichen und einen Kundennutzen generieren.',score: 3},
              {text:'Die Gestaltung von Arbeitssystemen und Schlüsselprozessen wird regelmäßig und systematisch durchgeführt . Es erfolgt eine quantitative Messung durch den Einsatz von Mitriken, um sicherzustellen, dass diese effektiv auf die Schaffung von Kundennutzen und Spitzenleistungen ausgerichtet sind.',score: 4},
              {text:'Die kontiuerliche Verbesserung der Arbeitssysteme und Schlüsselprozesse ist integraler Bestandteil des Unternehmens. Dadurch wird ein Kundenwert geschaffen und Spitzenleistungen werden erreicht.',score: 5},
            ],
            selectedAnswerIndex: null, // Initialisiert als null, keine Antwort ausgewählt
          },
          {
            text: 'werden neue Technologie, Wissen, Flexibilität, Effizienz und Effektivität in die Gestaltung der Arbeitsabläufe des Unternehmens einbezogen?',
            answers: [
              {text:'Es existieren keine formalen Prozesse zur systematischen Erfassung und Verwendung von neuen Technologien, Wissen, Flexibiltät, Effizienz und Effektivität in die Gestasltung der WM-Prozesse Arbeitsabläufe des Unternehmens.',score: 1},
              {text:'Es gibt erste Ansätze neue Technologien, Wissen, Flexibiltät, Effizient und Effektivität in die Gestaltung des Wissensmanagements einzubeziehen. Sie sind dokumentiert, allerdings ist die Umsetzung nicht konkretisiert.',score: 2},
              {text:'Es existieren formale Prozesse, die zur systematischen Erfassung und Verwendung neuer Technologien, Wissen, Flexibilität, Effizienz und Effektivität beitragen, um die Produktivitätssteigerung sicherzustellen. Dies wird mithilfe von Metriken gemessen.',score: 3},
              {text:'neue Technologien sind fest in die Arbeitsabläufe integriert und Wissen, Flexibilität, Effizienz und Effektivität sind feste Bestandteile des Wissensmanagements. Die Quantitativität wird durch Metriken gemessen.',score: 4},
              {text:'Der Einbezug neue Technologien sowie die integrierung von Wissen, Flexibilität, Effizienz und Effektivität wird kontinuierlich überprüft und optimiert. Innovation ist integraler Bestandteil des Wissensmanagements.',score: 5},
            ],
            selectedAnswerIndex: null, // Initialisiert als null, keine Antwort ausgewählt
          },
          {
            text: 'verfügt das Unternehmen über eine systematischen Prozess für die Bewältigung von Krisensituationen oder unvorhergesehenen Ereignissen, das einen störungsfreien Betrieb und die Wiederherstellung sicherstellt?',
            answers: [
              {text:'Es gibt keine formalen Ansätze für die Bewältigung von Krisensituationen. Auf unvorhergesehene Ereignisse wird noch ohne klare Richtlinien reagiert.', score: 1},
              {text:'Ansätze zur Bewältigung von Krisensituationen existieren, sind jedoch inkonsistent; Präventionsmaßnahmen für Arbeitsablaufstörungen sind  dokumentiert.',score: 2},
              {text:'Es existiert ein formalisiertes System zur Bewältigung von Krisensituationen und unvorhergesehenen Ereignissen, wobei Metriken verwendet werden, um sicherzustellen, dass die Arbeitsabläufe störungsfrei sind.',score: 3},
              {text:'Ein gut etabliertes System zur Bewältigung von Krisensituationen oder unvorhergesehenen Ereignissen ist vorhanden. Zudem erfolgt eine quantitative Messung der Integration dieses Systems durch den Einsatz von Metriken.',score: 4},
              {text:'Ein gut etabliertes System zur Bewältigung von Krisensituationen oder unvorhergesehenen Ereignissen ist vorhanden und wird kontinuirlich überprüft und verbessert. Dies System kann leicht an neue Anforderungen angepasst werden, und die Pflege dieses Systems ist ein integraler Bestandteil des Unternehmens.',score: 5},
            ],
            selectedAnswerIndex: null, // Initialisiert als null, keine Antwort ausgewählt
          },
          
        ], totalScore: 0, // Initialisiere einen Gesamtpunktestand für jede Dimension
      }, 
      {
        name: 'Technologie',
        questions: [
          {

            text: 'Werden wissensmanagementfördernde Technologien in die Systemarchitektur der Organisation integriert?',
            answers: [
              {text:'Derzeit ist keine spezifische Wissensmanagement-Technologie oder -Infrastruktur in der Organisation implementiert.',score: 1},
              {text:'Pilotprojekte im Wissensmanagement wurden gestartet, meist von operativen Mitarbeitern und nicht direkt durch das Management.',score: 2},
              {text:'Es wurden Wissensmanament-Technologien in die Organisationsarchitektur integriert und auf Unternehmensebene bereits umgesetzt.',score: 3},
              {text:'WM-Technologien sind vollständig in die Organisationsstruktur integriert, werden angemessen genutzt und sind nahtlos mit der Content-Architektur verbunden.',score: 4},
              {text:'Die bestehende Infrastruktur wird stetig optimiert, um Technologien für Wissensmanagement effektiv einzubinden.',score: 5},
            ],
            selectedAnswerIndex: null, // Initialisiert als null, keine Antwort ausgewählt
          },
          {
            text: 'existiert eine technologische Infrastruktur für eine zentrale Sammlung von Informationen, die für alle leicht zugänglich ist?',
            answers: [
              {text:'Derzeit existiert keine Technologie oder Infrastruktur für eine zentrale Informationsansammlung.',score: 1},
              {text:'Keine vorhandenen Wissensmanagement-Technologien, jedoch Pilotprojekte für technologische Infrastrukturen begonnen.',score: 2},
              {text:'Einige unternehmensweite KM-Projekte laufen bereits und fördern eine zentral zugängliche Informationskollektion (z.B. durch Intranet-Plattformen und Wissensdatenbanken).',score: 3},
              {text:'Die technologische Infrastruktur ist so integriert, dass sie eine zentrale Informationsammlung über Wissensmanagement-Systeme auf angemessenem Niveau ermöglicht.',score: 4},
              {text:'Die bestehende technologische Infrastruktur wird fortlaufend verbessert, um sicherzustellen, dass eine leicht zugängliche zentrale Sammlung von Informationen auf höchstem Niveau erhalten bleibt.',score: 5},
            ],
            selectedAnswerIndex: null, // Initialisiert als null, keine Antwort ausgewählt
          },
         
        ], totalScore: 0, // Initialisiere einen Gesamtpunktestand für jede Dimension
      },
      { 
        name: 'Strategie',
        questions: [
          {

            text: 'Werden Best Practices im Wissensmanagement aktiv gesucht und implementiert?',
            answers: [
              {text: 'Die Organisation zeigt keine Initiativen, um Best Practices im Bereich Wissensmanagement zu identifizieren oder anzuwenden.',score: 1},
              {text:'Die Bedeutung von von Best practices wurde erkannt, aber es fehlen klare Wege zu ihrer Suche und Implementierung.',score: 2},
              {text:'Es gibt eine grundlegende Strategie und definierte Rollen, um Best Practices im Wissensmanagement aktiv zu suchen und einzuführen',score: 3},
              {text:'Aktive Umsetzung und kontinuierliche Verbesserung von Best Practices im Wissensmanagement sind in den organisatorischen Abläufen verankert.',score: 4},
              {text:'Best Practices im Wissensmanagement werden kontinuierlich gesucht, bewertet und automatisch in die Arbeitsabläufe integriert.',score: 5},
            ],
            selectedAnswerIndex: null, // Initialisiert als null, keine Antwort ausgewählt
          },
          {
            text: 'Reagiert die Organisation auf sich ändernde Anforderungen und Trends im Wissensmanagement?',
            answers: [
              {text:'Die Organisation reagiert nicht aktiv auf sich ändernde Anforderungen und Trends im Wissensmanagement.',score: 1},
              {text:'Die Bedeutung von neuen Trends im Wissensmanagement wurde erkannt, doch es mangelt an klaren Strategien zur Umsetzung.',score: 2},
              {text:'Es gibt eine grundlegende Strategie und definierte Rollen, um Best Practices im Wissensmanagement aktiv zu suchen und einzuführen.',score: 3},
              {text:'Strategien für den Umgang mit neuen Trends im Wissensmanagement sind fest verankert und sie wird aktiv umgesetzt mit etablierten Initiativen.',score: 4},
              {text:'Die Organisation reagiert aktiv auf sich ändernde Anforderungen und Trends im Wissensmanagement durch tief integrierte und kontinuierlich verbesserte Strategien.',score: 5},
            ],
            selectedAnswerIndex: null, // Initialisiert als null, keine Antwort ausgewählt
          },
          
        ], totalScore: 0, // Initialisiere einen Gesamtpunktestand für jede Dimension
      },
      { 
        name: 'Organization',
        questions: [
          {

            text: 'Hat die Organisation Richtlinien zum Schutz von Wissen (Urheberrechte, Patente...)?',
            answers: [
              {text: 'Es gibt keine strukturierten Ansätze oder Richtlinien zum Schutz von Wissen, da die Bedeutung dessen noch nicht erkannt wurde.',score: 1},
              {text:'Die Organisation ist sich der Notwendigkeit des Wissensmanagements bewusst. Es liegen jedoch keine spezifischen Richtlinien zum Schutz von Wissen vor.',score: 2},
              {text:'Die Organisation fördert aktiv das Wissensmanagement, bietet grundlegende Schulungen an und hat eine einfache Strategie sowie definierte Rollen zum Schutz von Wissen etabliert',score: 3},
              {text:'Es gibt fortgeschrittene Schulungen und organisatorische Standards zum Wissensschutz, die von allen Mitarbeitern befolgt werden.',score: 4},
              {text:'Richtlinien zum Schutz von Wissen sind tief in der Organisationskultur verankert und werden als selbstverständlicher Teil des täglichen Geschäfts angesehen.',score: 5},
            ],
            selectedAnswerIndex: null, // Initialisiert als null, keine Antwort ausgewählt
          },
        ], totalScore: 0, // Initialisiere einen Gesamtpunktestand für jede Dimension
      }, 
      { 
        name: 'People',
        questions: [
          {

            text: 'Durchdringt ein Klima der Offenheit und des Vertrauens die Organisation?',
            answers: [
              {text: 'Es gibt kein Klima der Offenheit und des Vertrauens, da Mitarbeiter und Führungskräfte sich der Bedeutung des Wissensaustauschs nicht bewusst sind.',score: 1},
              {text:'Mitarbeiter erkennen den Bedarf an Wissensmanagement, es fehlt jedoch an Initiative oder Werkzeugen.',score: 2},
              {text:'Ein Klima der Offenheit und des Vertrauens beginnt sich zu entwickeln. Mitarbeiter verstehen ihre Rolle im Wissensmanagement und werden durch Schulungen und definierte Rollen unterstützt.',score: 3},
              {text:'Offenheit und Vertrauen sind in der Organisation merklich vorhanden und werden durch gemeinsame Strategien und standardisierte Wissensmanagement-Praktiken weiter gefestigt.',score: 4},
              {text:'Ein Klima der Offenheit und des Vertrauens ist tief in der Organisation verwurzelt, was sich in der proaktiven Wissensteilung und in unterstützenden Systemen und Prozessen widerspiegelt.',score: 5},
            ],
            selectedAnswerIndex: null, // Initialisiert als null, keine Antwort ausgewählt
          },

        ], totalScore: 0, // Initialisiere einen Gesamtpunktestand für jede Dimension
      },
    
];
*/
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
  document.getElementById('homepageButton').style.display = 'block';
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
  document.getElementById('homepageButton').style.display = 'none';  // Verstecke den Zur Start-Button
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
  let htmlContent = `<h1>Details for ${dimension.name}</h1>`;

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

