const STORAGE_KEY = "wayand-meister-teil3-4-progress";

const moduleMeta = {
  "Meister Teil 3": {
    description: "Betriebswirtschaftliche, kaufmännische und rechtliche Inhalte.",
    topics: [
      "Wettbewerbsfähigkeit beurteilen",
      "Gründung und Übernahme planen",
      "Unternehmensführung entwickeln"
    ]
  },
  "Meister Teil 4": {
    description: "Berufs- und arbeitspädagogische Inhalte nach AEVO-Struktur.",
    topics: [
      "Ausbildung planen",
      "Ausbildung vorbereiten",
      "Ausbildung durchführen",
      "Ausbildung abschließen"
    ]
  }
};

const topicMeta = {
  "Wettbewerbsfähigkeit beurteilen": {
    module: "Meister Teil 3",
    description: "Markt, Wettbewerb, Rechtsform und unternehmerische Risiken."
  },
  "Gründung und Übernahme planen": {
    module: "Meister Teil 3",
    description: "Gründung, Finanzierung, Übernahme und kaufmännische Vorbereitung."
  },
  "Unternehmensführung entwickeln": {
    module: "Meister Teil 3",
    description: "Kalkulation, Verträge, Liquidität und betriebliche Führung."
  },
  "Ausbildung planen": {
    module: "Meister Teil 4",
    description: "Ausbildungsvoraussetzungen prüfen und Ausbildung sinnvoll planen."
  },
  "Ausbildung vorbereiten": {
    module: "Meister Teil 4",
    description: "Ausbildung vorbereiten sowie Auswahl und Einstellung begleiten."
  },
  "Ausbildung durchführen": {
    module: "Meister Teil 4",
    description: "Unterweisen, motivieren, Rückmeldung geben und Lernfortschritt sichern."
  },
  "Ausbildung abschließen": {
    module: "Meister Teil 4",
    description: "Prüfungsphase, Nachweise, Reflexion und Ausbildungsende."
  }
};

const moduleOrder = Object.keys(moduleMeta);
const topicOrder = moduleOrder.flatMap((moduleName) => moduleMeta[moduleName].topics);

const questionBank = {
  "Wettbewerbsfähigkeit beurteilen": [
    {
      id: 1,
      module: "Meister Teil 3",
      topic: "Wettbewerbsfähigkeit beurteilen",
      difficulty: "Leicht",
      question:
        "Ein Malerbetrieb stellt fest, dass in einem Stadtteil immer mehr Angebote verloren gehen. Der Inhaber will nicht sofort den Preis senken, sondern zuerst die eigene Ausgangslage sauber beurteilen. Welche Maßnahme ist als erster Schritt am ehesten sinnvoll?",
      options: [
        "Leistungsangebot, Zielgruppen, Preise und Marktchancen systematisch auswerten.",
        "Ohne weitere Prüfung alle Stundenverrechnungssätze absenken.",
        "Laufende Stammkundenaufträge zugunsten neuer Anfragen ablehnen.",
        "Werbung vorläufig ganz einstellen, um Kosten zu sparen."
      ],
      correctIndex: 0,
      explanation:
        "Richtig ist Antwort A. Vor jeder Reaktion im Wettbewerb steht die Analyse der eigenen Position. Eine vorschnelle Preissenkung ist eine typische Prüfungsfalle."
    },
    {
      id: 2,
      module: "Meister Teil 3",
      topic: "Wettbewerbsfähigkeit beurteilen",
      difficulty: "Mittel",
      question:
        "Zwei Meister wollen gemeinsam einen Betrieb gründen. Sie möchten mit wenig Formalaufwand starten, persönlich mitentscheiden und akzeptieren zunächst auch eine persönliche Haftung. Ein kaufmännisch eingerichteter Geschäftsbetrieb liegt noch nicht vor. Welche Rechtsform passt am ehesten?",
      options: [
        "GbR, weil sie bei zwei Gründern ohne Stammkapital möglich ist.",
        "GmbH, weil dort ohne Mindestkapital und ohne notarielle Schritte gegründet werden kann.",
        "OHG, weil jede gemeinsame gewerbliche Tätigkeit automatisch eine OHG ist.",
        "UG, weil sie ohne Eintragung und ohne laufende Pflichten entsteht."
      ],
      correctIndex: 0,
      explanation:
        "Richtig ist Antwort A. Die GbR passt zu einer einfachen gemeinsamen Gründung. Die anderen Antworten überzeichnen oder verkennen die Voraussetzungen."
    },
    {
      id: 3,
      module: "Meister Teil 3",
      topic: "Wettbewerbsfähigkeit beurteilen",
      difficulty: "Mittel",
      question:
        "Ein Betrieb wirbt ausschließlich mit dem Satz 'immer der billigste Anbieter'. Über Zielgruppe, Qualität, Reklamationsquote und Ertrag liegen keine Auswertungen vor. Welche Bewertung trifft am ehesten zu?",
      options: [
        "Das ist ausreichend, weil im Wettbewerb allein der niedrigste Preis entscheidend ist.",
        "Das ist zu kurz gedacht, weil Wettbewerbsfähigkeit nicht nur über den Preis bestimmt wird.",
        "Das ist nur bei Industriebetrieben problematisch.",
        "Das ist richtig, solange genug Fahrzeuge vorhanden sind."
      ],
      correctIndex: 1,
      explanation:
        "Richtig ist Antwort B. Wettbewerbsfähigkeit umfasst auch Qualität, Zielgruppe, Organisation und Ertrag. Nur auf billig zu setzen ist typisch prüfungsnah falsch."
    },
    {
      id: 4,
      module: "Meister Teil 3",
      topic: "Wettbewerbsfähigkeit beurteilen",
      difficulty: "Schwer",
      question:
        "Ein Inhaber hält seinen Betrieb für ausreichend abgesichert, weil der Auftragsbestand für die nächsten vier Monate voll ist. Kennzahlen zu Ertrag, Forderungslaufzeiten oder Kundenstruktur wertet er nicht aus. Welche Aussage passt am ehesten?",
      options: [
        "Die gute Auslastung beweist bereits die nachhaltige Wettbewerbsfähigkeit des Betriebs.",
        "Das ist zu kurz gegriffen, weil Wettbewerbsfähigkeit auch von Wirtschaftlichkeit, Risiken und Organisation abhängt.",
        "Kennzahlen sind nur für Kapitalgesellschaften von Bedeutung.",
        "Die Auswertung betrieblicher Risiken ist erst ab 20 Beschäftigten erforderlich."
      ],
      correctIndex: 1,
      explanation:
        "Richtig ist Antwort B. Volle Auftragsbücher ersetzen keine betriebswirtschaftliche Beurteilung. Genau diese Verwechslung ist prüfungsnah."
    },
    {
      id: 5,
      module: "Meister Teil 3",
      topic: "Wettbewerbsfähigkeit beurteilen",
      difficulty: "Leicht",
      question:
        "Ein Malerbetrieb verliert mehrere Angebote an Wettbewerber und vergleicht daraufhin nur die Endpreise der Konkurrenz. Die eigene Kostenstruktur und das eigene Leistungsprofil werden nicht geprüft. Welche Bewertung ist am ehesten zutreffend?",
      options: [
        "Das reicht aus, weil im Wettbewerb allein die Endpreise anderer Betriebe entscheidend sind.",
        "Das greift zu kurz, weil ohne Kenntnis der eigenen Kosten und Leistungen keine tragfähige Beurteilung möglich ist.",
        "Das ist nur im ersten Jahr nach der Gründung problematisch.",
        "Das ist unkritisch, wenn der Betrieb regional bekannt ist."
      ],
      correctIndex: 1,
      explanation:
        "Richtig ist Antwort B. Der Fremdpreisvergleich allein ersetzt keine eigene Analyse. Das ist ein klassischer Teil-3-Gedanke."
    },
    {
      id: 6,
      module: "Meister Teil 3",
      topic: "Wettbewerbsfähigkeit beurteilen",
      difficulty: "Mittel",
      question:
        "Der Inhaber freut sich über steigende Umsätze, stellt aber zugleich fest, dass der Jahresüberschuss sinkt. Er hält eine weitere Auswertung für entbehrlich, weil mehr Umsatz immer ein gutes Zeichen sei. Welche Aussage ist am ehesten richtig?",
      options: [
        "Steigende Umsätze beweisen automatisch eine gesunde Wettbewerbsposition.",
        "Das ist nur dann problematisch, wenn gleichzeitig weniger Personal eingesetzt wird.",
        "Das ist zu einfach gedacht, weil auch Kostenentwicklung und Ertragslage beurteilt werden müssen.",
        "Das betrifft nur steuerliche, nicht aber betriebliche Fragen."
      ],
      correctIndex: 2,
      explanation:
        "Richtig ist Antwort C. Umsatz und Ertrag dürfen nicht gleichgesetzt werden. Diese Unterscheidung ist prüfungsrelevant."
    },
    {
      id: 7,
      module: "Meister Teil 3",
      topic: "Wettbewerbsfähigkeit beurteilen",
      difficulty: "Schwer",
      question:
        "Ein Betrieb erzielt rund 70 Prozent seines Umsatzes mit einem einzigen Großkunden. Der Inhaber wertet das ausschließlich als Beleg für eine starke Marktstellung. Welche Bewertung ist am ehesten zutreffend?",
      options: [
        "Die Abhängigkeit ist unkritisch, weil ein hoher Umsatzanteil immer für Sicherheit spricht.",
        "Das ist nur für die Buchhaltung relevant, nicht für die Wettbewerbsbeurteilung.",
        "Die Situation ist unproblematisch, solange zusätzlich Social Media genutzt wird.",
        "Es besteht ein Konzentrationsrisiko, weil der Ausfall eines Großkunden die Wettbewerbsfähigkeit erheblich beeinträchtigen kann."
      ],
      correctIndex: 3,
      explanation:
        "Richtig ist Antwort D. Eine einseitige Kundenstruktur kann wirtschaftlich gefährlich sein. Solche Abhängigkeiten werden in Fallfragen gern versteckt."
    }
  ],
  "Gründung und Übernahme planen": [
    {
      id: 8,
      module: "Meister Teil 3",
      topic: "Gründung und Übernahme planen",
      difficulty: "Leicht",
      question:
        "Ein Meister überlegt, statt neu zu gründen einen bestehenden kleinen Betrieb zu übernehmen. Vor einer Entscheidung will er sich zuerst einen belastbaren Überblick über Chancen und Risiken verschaffen. Welche Maßnahme ist am ehesten geeignet?",
      options: [
        "Wirtschaftliche Unterlagen, Kundenstruktur und laufende Verpflichtungen prüfen.",
        "Den Betrieb möglichst schnell übernehmen, um keine Zeit zu verlieren.",
        "Nur das Firmenfahrzeug bewerten, weil es meist den Hauptwert darstellt.",
        "Auf eine Prüfung verzichten, wenn der bisherige Inhaber glaubwürdig wirkt."
      ],
      correctIndex: 0,
      explanation:
        "Richtig ist Antwort A. Vor Übernahmen müssen wirtschaftliche und rechtliche Grundlagen geprüft werden. Vertrauen ersetzt keine saubere Prüfung."
    },
    {
      id: 9,
      module: "Meister Teil 3",
      topic: "Gründung und Übernahme planen",
      difficulty: "Mittel",
      question:
        "Eine Gründerin möchte mit möglichst geringem Startkapital eine haftungsbeschränkte Rechtsform wählen. Zugleich ist ihr bewusst, dass sie eine Kapitalgesellschaft mit bestimmten Gründungsformalitäten errichtet. Welche Aussage trifft am ehesten zu?",
      options: [
        "Eine UG kann mit geringem Kapital gegründet werden, bleibt aber eine Kapitalgesellschaft mit formalen Anforderungen.",
        "Eine GbR wäre passend, weil dort automatisch Haftungsbeschränkung eintritt.",
        "Eine OHG ist die typische haftungsbeschränkte Einstiegsform.",
        "Eine GmbH ist nur zulässig, wenn mindestens vier Personen gründen."
      ],
      correctIndex: 0,
      explanation:
        "Richtig ist Antwort A. Die UG verbindet geringes Stammkapital mit den Strukturen einer Kapitalgesellschaft. Die anderen Antworten enthalten typische Fallen."
    },
    {
      id: 10,
      module: "Meister Teil 3",
      topic: "Gründung und Übernahme planen",
      difficulty: "Mittel",
      question:
        "Ein Gründer plant seinen künftigen Betrieb, kümmert sich aber weder um Standort noch Zielkunden oder Personalbedarf. Er meint, das lasse sich nach der Eröffnung flexibel regeln. Welche Bewertung ist am ehesten zutreffend?",
      options: [
        "Das ist sinnvoll, weil Gründungsplanung im Wesentlichen aus dem Kauf von Werkzeugen besteht.",
        "Das ist problematisch, weil Standort-, Markt- und Ressourcenplanung zum Gründungsprozess gehören.",
        "Das ist nur bei einer GmbH relevant.",
        "Das wird erst nach der ersten Steuerprüfung bedeutsam."
      ],
      correctIndex: 1,
      explanation:
        "Richtig ist Antwort B. Eine Gründung braucht mehr als Investitionen. Markt- und Ressourcenplanung gehören dazu."
    },
    {
      id: 11,
      module: "Meister Teil 3",
      topic: "Gründung und Übernahme planen",
      difficulty: "Schwer",
      question:
        "Ein Malermeister plant die Betriebsgründung. In seinem Finanzierungsplan berücksichtigt er Transporter, Maschinen und Erstausstattung. Für die ersten Monate unterstellt er, dass eingehende Kundenrechnungen alle laufenden Kosten rechtzeitig decken. Löhne, Miete, Versicherungen, private Entnahmen und verzögerte Zahlungseingänge plant er nicht gesondert ein. Welche Bewertung trifft am ehesten zu?",
      options: [
        "Das ist sachgerecht, weil bei Neugründungen vor allem der Investitionsbedarf zu finanzieren ist.",
        "Das ist ausreichend, wenn bereits erste Angebote geschrieben wurden.",
        "Das ist riskant, weil neben dem Investitionsbedarf auch der laufende Liquiditätsbedarf berücksichtigt werden muss.",
        "Das ist nur dann problematisch, wenn ausschließlich mit Fremdkapital finanziert wird."
      ],
      correctIndex: 2,
      explanation:
        "Richtig ist Antwort C. Genau hier liegt die prüfungsnahe Falle: Investition und Liquidität sind nicht dasselbe."
    },
    {
      id: 12,
      module: "Meister Teil 3",
      topic: "Gründung und Übernahme planen",
      difficulty: "Leicht",
      question:
        "Ein angehender Betriebsinhaber plant seine Gründung sehr genau bei Fahrzeugen und Werkzeugen, berücksichtigt aber weder Miete noch Löhne noch Anlaufkosten der ersten Monate. Welche Bewertung ist am ehesten richtig?",
      options: [
        "Das ist ausreichend, weil bei der Gründung nur Sachinvestitionen finanziert werden müssen.",
        "Das ist problematisch, weil auch die Liquidität in der Startphase abgesichert werden muss.",
        "Das ist nur bei einer GmbH relevant.",
        "Das ist unkritisch, solange ein privates Fahrzeug vorhanden ist."
      ],
      correctIndex: 1,
      explanation:
        "Richtig ist Antwort B. Zur Gründungsplanung gehört nicht nur der Kauf von Betriebsmitteln. Die Anlaufphase muss mitgedacht werden."
    },
    {
      id: 13,
      module: "Meister Teil 3",
      topic: "Gründung und Übernahme planen",
      difficulty: "Mittel",
      question:
        "Ein Gründer bezahlt betriebliche Einkäufe regelmäßig vom Privatkonto und hebt Barbelege nicht auf. Er meint, in kleinen Betrieben lasse sich das später schon nachvollziehen. Welche Aussage passt am ehesten?",
      options: [
        "Das ist in der Anfangsphase unproblematisch, weil kleine Betriebe keine saubere Belegführung brauchen.",
        "Das ist sinnvoll, weil private und betriebliche Vorgänge möglichst vermischt werden sollten.",
        "Das ist kritisch, weil geordnete Belege und eine klare Trennung von privat und betrieblich wichtig sind.",
        "Das betrifft nur Kapitalgesellschaften, nicht aber andere Rechtsformen."
      ],
      correctIndex: 2,
      explanation:
        "Richtig ist Antwort C. Belegordnung und Trennung der Bereiche sind kaufmännische Grundlagen. Das wird oft unscheinbar abgefragt."
    },
    {
      id: 14,
      module: "Meister Teil 3",
      topic: "Gründung und Übernahme planen",
      difficulty: "Schwer",
      question:
        "Vor der Übernahme eines bestehenden Betriebs prüfen die Interessenten nur Umsatz, Fuhrpark und Werkzeuge. Offene Forderungen, laufende Verpflichtungen und mögliche Verbindlichkeiten bleiben unberücksichtigt. Welche Bewertung ist am ehesten richtig?",
      options: [
        "Das reicht aus, weil bei Übernahmen vor allem sichtbare Vermögensgegenstände wichtig sind.",
        "Das ist riskant, weil wirtschaftliche und rechtliche Verpflichtungen vor einer Übernahme mitgeprüft werden müssen.",
        "Das ist nur bei Industrieunternehmen relevant.",
        "Das ist unkritisch, wenn die Werkstatt gut ausgestattet erscheint."
      ],
      correctIndex: 1,
      explanation:
        "Richtig ist Antwort B. Eine Übernahmeprüfung darf sich nicht auf Umsatz und Inventar beschränken. Risiken und Verpflichtungen sind zentral."
    }
  ],
  "Unternehmensführung entwickeln": [
    {
      id: 15,
      module: "Meister Teil 3",
      topic: "Unternehmensführung entwickeln",
      difficulty: "Leicht",
      question:
        "Ein Betriebsinhaber erstellt Angebote, berücksichtigt dabei aber nur Materialkosten. Löhne, Gemeinkosten und Gewinnzuschlag lässt er regelmäßig unberücksichtigt. Welche Folge ist am ehesten zu erwarten?",
      options: [
        "Die Kalkulation kann zu wirtschaftlich nicht tragfähigen Preisen führen.",
        "Das ist unproblematisch, solange der Kunde den Preis akzeptiert.",
        "Gemeinkosten spielen nur bei Industriebetrieben eine Rolle.",
        "Gewinnzuschläge sind im Handwerk grundsätzlich unzulässig."
      ],
      correctIndex: 0,
      explanation:
        "Richtig ist Antwort A. Eine unvollständige Kalkulation gefährdet die Wirtschaftlichkeit. Gerade diese Auslassungen sind klassisch prüfungsnah."
    },
    {
      id: 16,
      module: "Meister Teil 3",
      topic: "Unternehmensführung entwickeln",
      difficulty: "Mittel",
      question:
        "Ein Kunde beauftragt zusätzliche Arbeiten telefonisch. Später behauptet er, ohne schriftlichen Vertrag sei nichts wirksam vereinbart worden. Welche Aussage passt am ehesten?",
      options: [
        "Ein Vertrag kann auch mündlich zustande kommen, wenn die Voraussetzungen einer Einigung vorliegen.",
        "Verträge im Handwerk sind nur mit Firmenstempel wirksam.",
        "Telefonische Zusatzaufträge sind rechtlich immer bedeutungslos.",
        "Ein Vertrag entsteht erst mit Rechnungserstellung."
      ],
      correctIndex: 0,
      explanation:
        "Richtig ist Antwort A. Viele Verträge können auch mündlich geschlossen werden. Genau hier wird gern auf die Schriftformfalle gesetzt."
    },
    {
      id: 17,
      module: "Meister Teil 3",
      topic: "Unternehmensführung entwickeln",
      difficulty: "Mittel",
      question:
        "Ein Unternehmer möchte Mitarbeiter führen, legt aber Zuständigkeiten, Abläufe und Verantwortungen bewusst nicht fest. So könne man flexibler bleiben. Welche Bewertung ist am ehesten richtig?",
      options: [
        "Das ist sinnvoll, weil gute Führung vor allem von Unklarheit lebt.",
        "Das ist problematisch, weil Führung klare Verantwortungen und nachvollziehbare Abläufe braucht.",
        "Das ist nur dann falsch, wenn der Betrieb mehr als 20 Personen hat.",
        "Das betrifft nur das Marketing, nicht die Führung."
      ],
      correctIndex: 1,
      explanation:
        "Richtig ist Antwort B. Unternehmensführung braucht klare Strukturen und Verantwortungen. Bewusste Unklarheit schafft Risiken."
    },
    {
      id: 18,
      module: "Meister Teil 3",
      topic: "Unternehmensführung entwickeln",
      difficulty: "Schwer",
      question:
        "Ein Unternehmer will organisatorische Probleme lösen, indem er Zuständigkeiten absichtlich unklar lässt. So könne er später flexibel Verantwortung einzelnen Mitarbeitern zuweisen. Welche Bewertung ist am ehesten zutreffend?",
      options: [
        "Das stärkt die Unternehmensführung, weil Unklarheit Anpassung erleichtert.",
        "Das ist problematisch, weil klare Zuständigkeiten und nachvollziehbare Organisation Führungsaufgaben unterstützen.",
        "Das ist nur in Großbetrieben unzulässig.",
        "Das betrifft allein den Datenschutz und keine Führungsfragen."
      ],
      correctIndex: 1,
      explanation:
        "Richtig ist Antwort B. Gute Unternehmensführung braucht klare Verantwortungen und Strukturen. Genau das wird hier geprüft."
    },
    {
      id: 19,
      module: "Meister Teil 3",
      topic: "Unternehmensführung entwickeln",
      difficulty: "Leicht",
      question:
        "Ein Betrieb gewährt in seinem Angebot 2 Prozent Skonto bei Zahlung innerhalb von zehn Tagen. Der Kunde überweist am achten Tag und zieht den vereinbarten Betrag ab. Wie ist das am ehesten zu bewerten?",
      options: [
        "Der Abzug ist im Grundsatz zulässig, wenn das Skonto so vereinbart wurde.",
        "Skonto ist im Handwerk grundsätzlich unzulässig.",
        "Der Kunde darf Skonto nur abziehen, wenn die Rechnung bar bezahlt wird.",
        "Der Skontoabzug wird erst nach einer schriftlichen Erinnerung wirksam."
      ],
      correctIndex: 0,
      explanation:
        "Richtig ist Antwort A. Wurde Skonto vereinbart und die Frist eingehalten, kann der Abzug wirksam sein."
    },
    {
      id: 20,
      module: "Meister Teil 3",
      topic: "Unternehmensführung entwickeln",
      difficulty: "Mittel",
      question:
        "Ein Malerbetrieb schreibt regelmäßig Rechnungen und arbeitet ausgebucht, hat aber trotzdem wiederholt Probleme, laufende Zahlungen pünktlich zu leisten. Welche Ursache ist am ehesten denkbar?",
      options: [
        "Das ist ausgeschlossen, weil viele Aufträge automatisch genug Liquidität bedeuten.",
        "Offene Forderungen und ungünstige Zahlungsflüsse können trotz guter Auftragslage zu Liquiditätsproblemen führen.",
        "Liquidität betrifft nur Kapitalgesellschaften.",
        "Das kann nur an zu wenig Werkzeug liegen."
      ],
      correctIndex: 1,
      explanation:
        "Richtig ist Antwort B. Zwischen Auftragslage, Gewinn und Liquidität besteht ein Unterschied. Diese Unterscheidung ist in Teil 3 wichtig."
    },
    {
      id: 21,
      module: "Meister Teil 3",
      topic: "Unternehmensführung entwickeln",
      difficulty: "Mittel",
      question:
        "Nach mehreren abgeschlossenen Baustellen zeigt die Nachkalkulation, dass vergleichbare Aufträge regelmäßig unter den eigenen Kosten abgerechnet wurden. Welche Reaktion ist unternehmerisch am sinnvollsten?",
      options: [
        "Die Ergebnisse ignorieren, weil abgeschlossene Aufträge nicht mehr relevant sind.",
        "Künftige Kalkulationen, Abläufe oder Preise auf Basis der Erkenntnisse anpassen.",
        "Künftig nur noch Barzahlung verlangen, damit die Kalkulation stimmt.",
        "Die Nachkalkulation ganz abschaffen, um Zeit zu sparen."
      ],
      correctIndex: 1,
      explanation:
        "Richtig ist Antwort B. Nachkalkulation dient gerade dazu, aus Abweichungen zu lernen und Folgekalkulationen zu verbessern."
    },
    {
      id: 22,
      module: "Meister Teil 3",
      topic: "Unternehmensführung entwickeln",
      difficulty: "Schwer",
      question:
        "Im Büro werden fällige Forderungen über Wochen nicht verfolgt, weil man Kunden nicht verärgern möchte. Gleichzeitig wird die Kontolage immer enger. Welche Bewertung ist am ehesten zutreffend?",
      options: [
        "Das ist unternehmerisch vertretbar, weil Mahnwesen nur für Großbetriebe wichtig ist.",
        "Das ist unproblematisch, solange neue Aufträge hereinkommen.",
        "Das ist kritisch, weil ein geordnetes Forderungsmanagement wichtig für die Liquidität des Betriebs ist.",
        "Das betrifft allein das Steuerrecht und nicht die Unternehmensführung."
      ],
      correctIndex: 2,
      explanation:
        "Richtig ist Antwort C. Offene Forderungen beeinflussen die Liquidität direkt. Mahnwesen und Zahlungsüberwachung gehören deshalb zur Unternehmensführung."
    }
  ],
  "Ausbildung planen": [
    {
      id: 23,
      module: "Meister Teil 4",
      topic: "Ausbildung planen",
      difficulty: "Leicht",
      question:
        "Ein Betrieb möchte erstmals ausbilden. Der Inhaber fragt, womit er vor dem Start sinnvoll beginnen sollte. Welche Maßnahme passt am ehesten?",
      options: [
        "Prüfen, ob Betrieb und verantwortliche Person für die Ausbildung geeignet sind.",
        "Zuerst einen Azubi einstellen und die Voraussetzungen später klären.",
        "Nur die Werkstattgröße messen, weil allein sie entscheidend ist.",
        "Auf Planung verzichten, wenn genug praktische Arbeit vorhanden ist."
      ],
      correctIndex: 0,
      explanation:
        "Richtig ist Antwort A. Vor Beginn der Ausbildung stehen Eignungs- und Planungsschritte. Diese Reihenfolge ist prüfungsrelevant."
    },
    {
      id: 24,
      module: "Meister Teil 4",
      topic: "Ausbildung planen",
      difficulty: "Mittel",
      question:
        "Ein Ausbilder bezeichnet den Ausbildungsrahmenplan als bloßen Wunschzettel ohne größere Bedeutung für die betriebliche Ausbildung. Welche Aussage trifft am ehesten zu?",
      options: [
        "Der Ausbildungsrahmenplan gibt eine wichtige Orientierung für Inhalte und zeitliche Gliederung der Ausbildung.",
        "Der Ausbildungsrahmenplan ist nur für Abschlussfeiern gedacht.",
        "Der Ausbildungsrahmenplan ersetzt jede Unterweisung im Betrieb.",
        "Der Ausbildungsrahmenplan gilt nur für die Berufsschule."
      ],
      correctIndex: 0,
      explanation:
        "Richtig ist Antwort A. Der Rahmenplan hilft bei Struktur und Planung der Ausbildung. Er ist gerade nicht nur eine unverbindliche Notiz."
    },
    {
      id: 25,
      module: "Meister Teil 4",
      topic: "Ausbildung planen",
      difficulty: "Mittel",
      question:
        "Ein Betrieb will ausbilden, hat aber weder geklärt, welche Inhalte er selbst vermitteln kann, noch wie fehlende Inhalte ausgeglichen werden sollen. Welche Bewertung ist am ehesten richtig?",
      options: [
        "Das ist unproblematisch, solange der Azubi motiviert ist.",
        "Das ist kritisch, weil die Ausbildung planbar und inhaltlich abgesichert sein muss.",
        "Das ist nur bei Volljährigen relevant.",
        "Das betrifft allein die Berufsschule."
      ],
      correctIndex: 1,
      explanation:
        "Richtig ist Antwort B. Ausbildung planen heißt auch, die tatsächliche Vermittlung der Inhalte abzusichern. Reiner guter Wille reicht nicht."
    },
    {
      id: 26,
      module: "Meister Teil 4",
      topic: "Ausbildung planen",
      difficulty: "Schwer",
      question:
        "Ein Ausbilder plant eine Unterweisung ausschließlich danach, welches Material gerade verfügbar ist. Lernziel, Ausbildungsstand und betrieblicher Ausbildungsplan spielen keine Rolle. Wo liegt der Hauptfehler?",
      options: [
        "Die Planung vernachlässigt Lernziel und Ausbildungsstand als zentrale didaktische Grundlage.",
        "Das ist richtig, weil Material immer wichtiger ist als Lernziele.",
        "Das ist nur dann problematisch, wenn der Azubi im dritten Lehrjahr ist.",
        "Ein betrieblicher Ausbildungsplan ist bei Unterweisungen grundsätzlich ohne Bedeutung."
      ],
      correctIndex: 0,
      explanation:
        "Richtig ist Antwort A. Eine Unterweisung muss sich an Lernziel und Ausbildungsstand orientieren. Reine Materiallogik reicht didaktisch nicht aus."
    }
  ],
  "Ausbildung vorbereiten": [
    {
      id: 27,
      module: "Meister Teil 4",
      topic: "Ausbildung vorbereiten",
      difficulty: "Leicht",
      question:
        "Ein Betrieb möchte neue Auszubildende einstellen. Der Inhaber meint, Schulnoten seien das einzige Auswahlkriterium, alles andere sei unnötig. Welche Bewertung ist am ehesten richtig?",
      options: [
        "Die Auswahl sollte breiter betrachtet werden, etwa mit Blick auf Eignung, Motivation und Ausbildungsbezug.",
        "Schulnoten allein reichen immer aus.",
        "Persönliche Eignung darf bei Azubis nicht berücksichtigt werden.",
        "Ein Auswahlgespräch ist rechtlich nie sinnvoll."
      ],
      correctIndex: 0,
      explanation:
        "Richtig ist Antwort A. Die Auswahl von Auszubildenden sollte mehrere geeignete Kriterien einbeziehen. Reine Notenfixierung greift oft zu kurz."
    },
    {
      id: 28,
      module: "Meister Teil 4",
      topic: "Ausbildung vorbereiten",
      difficulty: "Leicht",
      question:
        "Ein Betrieb möchte einen 16-jährigen Auszubildenden einstellen. Der Inhaber will den Jugendlichen sofort anfangen lassen und die ärztliche Untersuchung später nachreichen. Welche Aussage ist am ehesten richtig?",
      options: [
        "Das ist zulässig, wenn der Jugendliche schriftlich erklärt, gesund zu sein.",
        "Der Jugendliche darf grundsätzlich nur beschäftigt werden, wenn die vorgeschriebene Erstuntersuchung erfolgt ist und die Bescheinigung vorliegt.",
        "Die Erstuntersuchung ist nur bei gefährlichen Berufen notwendig.",
        "Eine ärztliche Bescheinigung wird erst nach dem ersten Ausbildungsjahr benötigt."
      ],
      correctIndex: 1,
      explanation:
        "Richtig ist Antwort B. Bei Jugendlichen ist die Erstuntersuchung vor der Beschäftigung grundsätzlich ein zentrales Thema."
    },
    {
      id: 29,
      module: "Meister Teil 4",
      topic: "Ausbildung vorbereiten",
      difficulty: "Mittel",
      question:
        "Ein Betriebsinhaber möchte einen sehr erfahrenen Facharbeiter sofort als alleinigen Ausbilder einsetzen. Der Mitarbeiter ist fachlich stark, hat aber keine nachgewiesene berufs- und arbeitspädagogische Eignung. Welche Aussage ist am ehesten richtig?",
      options: [
        "Fachliche Erfahrung allein genügt nicht automatisch für die Ausbilderrolle.",
        "Jeder langjährige Geselle ist ohne Weiteres automatisch Ausbilder.",
        "Pädagogische Eignung ist nur bei kaufmännischen Berufen notwendig.",
        "Die Eignung entscheidet allein der Azubi nach Arbeitsbeginn."
      ],
      correctIndex: 0,
      explanation:
        "Richtig ist Antwort A. Für die Ausbilderrolle zählen nicht nur Fachkenntnisse. Auch die berufs- und arbeitspädagogische Eignung ist wichtig."
    },
    {
      id: 30,
      module: "Meister Teil 4",
      topic: "Ausbildung vorbereiten",
      difficulty: "Schwer",
      question:
        "Ein minderjähriger Auszubildender hat die erste Nachuntersuchung nach einem Jahr nicht durchführen lassen und die Bescheinigung auch nach schriftlicher Aufforderung nicht vorgelegt. Der Betriebsinhaber möchte ihn trotzdem weiterbeschäftigen, weil auf der Baustelle Personal fehlt. Welche Bewertung ist am ehesten richtig?",
      options: [
        "Die Weiterbeschäftigung ist zulässig, solange der Jugendliche bisher keine Beschwerden gezeigt hat.",
        "Spätestens nach 14 Monaten seit Aufnahme der ersten Beschäftigung darf der Jugendliche ohne die Bescheinigung nicht weiterbeschäftigt werden.",
        "Die Bescheinigung ist nur für die Berufsschule wichtig, nicht für den Betrieb.",
        "Das Beschäftigungsverbot greift erst mit Vollendung des 18. Lebensjahres."
      ],
      correctIndex: 1,
      explanation:
        "Richtig ist Antwort B. Nach § 33 JArbSchG greift ohne vorgelegte Bescheinigung nach Ablauf von 14 Monaten ein Beschäftigungsverbot."
    },
    {
      id: 31,
      module: "Meister Teil 4",
      topic: "Ausbildung vorbereiten",
      difficulty: "Mittel",
      question:
        "Ein Betrieb möchte einen Ausbildungsvertrag möglichst knapp halten und auf wesentliche Absprachen lieber mündlich verweisen. Welche Bewertung passt am ehesten?",
      options: [
        "Das ist sinnvoll, weil Ausbildungsverhältnisse am besten ohne klare Vereinbarungen laufen.",
        "Das ist kritisch, weil wesentliche Ausbildungsgrundlagen sauber vorbereitet und geregelt sein sollten.",
        "Das ist nur bei Teilzeitkräften relevant.",
        "Das betrifft nur die Innung, nicht den Betrieb."
      ],
      correctIndex: 1,
      explanation:
        "Richtig ist Antwort B. Ausbildung vorbereiten bedeutet auch, die Grundlagen ordentlich festzulegen. Unklare Vereinbarungen erzeugen unnötige Risiken."
    },
    {
      id: 32,
      module: "Meister Teil 4",
      topic: "Ausbildung vorbereiten",
      difficulty: "Schwer",
      question:
        "Ein Betrieb stellt einen Azubi ein, ohne den späteren Ausbildungsablauf, Zuständigkeiten und Lernorte sauber vorzubereiten. Der Inhaber meint, das könne man alles spontan regeln. Welche Bewertung trifft am ehesten zu?",
      options: [
        "Das ist ausreichend, weil Ausbildung im Wesentlichen spontan funktioniert.",
        "Das ist problematisch, weil gute Ausbildung eine vorbereitete organisatorische und inhaltliche Struktur braucht.",
        "Das ist nur dann kritisch, wenn mehrere Auszubildende gleichzeitig eingestellt werden.",
        "Das betrifft ausschließlich den Datenschutz und nicht die Ausbildungsvorbereitung."
      ],
      correctIndex: 1,
      explanation:
        "Richtig ist Antwort B. Ausbildungsvorbereitung umfasst auch Organisation und Zuständigkeiten. Spontanes Vorgehen führt häufig zu Unsicherheiten."
    }
  ],
  "Ausbildung durchführen": [
    {
      id: 33,
      module: "Meister Teil 4",
      topic: "Ausbildung durchführen",
      difficulty: "Leicht",
      question:
        "Ein Azubi macht bei einer neuen Tätigkeit wiederholt kleine Fehler und wirkt dabei unsicher. Welche Reaktion des Ausbilders ist am ehesten lernförderlich?",
      options: [
        "Den Ablauf ruhig erklären, Fehler zeitnah besprechen und erneut üben lassen.",
        "Die Fehler erst am Monatsende gesammelt ansprechen.",
        "Den Azubi sofort von allen praktischen Arbeiten ausschließen.",
        "Öffentlich scharf kritisieren, damit mehr Druck entsteht."
      ],
      correctIndex: 0,
      explanation:
        "Richtig ist Antwort A. Zeitnahe, sachliche Rückmeldung und Übung fördern Lernen. Sammeln oder bloßer Druck helfen didaktisch wenig."
    },
    {
      id: 34,
      module: "Meister Teil 4",
      topic: "Ausbildung durchführen",
      difficulty: "Mittel",
      question:
        "Ein Azubi versteht eine Arbeitsanweisung nur teilweise. Der Ausbilder fragt nicht nach, ob alles angekommen ist, sondern setzt die Aufgabe einfach voraus. Welche Aussage trifft am ehesten zu?",
      options: [
        "Das ist riskant, weil Rückfragen und Verständnissicherung zum Ausbildungsprozess gehören.",
        "Das ist sinnvoll, weil Unsicherheit den Lerneffekt immer erhöht.",
        "Das ist nur bei gefährlichen Arbeiten problematisch.",
        "Das ist richtig, solange der Azubi pünktlich ist."
      ],
      correctIndex: 0,
      explanation:
        "Richtig ist Antwort A. Verständnissicherung ist Teil guter Ausbildung. Gerade bei Unterweisungen reicht bloßes Sagen nicht immer aus."
    },
    {
      id: 35,
      module: "Meister Teil 4",
      topic: "Ausbildung durchführen",
      difficulty: "Mittel",
      question:
        "Ein Ausbilder möchte Lernziele formulieren und sagt: 'Der Azubi soll irgendwann besser werden.' Welche Bewertung ist am ehesten richtig?",
      options: [
        "Das reicht aus, weil Lernziele nicht konkret sein müssen.",
        "Das ist zu ungenau, weil Lernziele möglichst beobachtbar und überprüfbar formuliert sein sollten.",
        "Das ist nur im ersten Lehrjahr problematisch.",
        "Das ist besser als ein konkretes Feinlernziel."
      ],
      correctIndex: 1,
      explanation:
        "Richtig ist Antwort B. Gute Lernziele sind möglichst konkret und beobachtbar. Unklare Formulierungen erschweren Unterweisung und Kontrolle."
    },
    {
      id: 36,
      module: "Meister Teil 4",
      topic: "Ausbildung durchführen",
      difficulty: "Schwer",
      question:
        "Ein Azubi erledigt einen Arbeitsablauf korrekt, kann aber nicht erklären, warum die Schritte genau in dieser Reihenfolge nötig sind. Welche Bewertung ist didaktisch am ehesten richtig?",
      options: [
        "Die Unterweisung ist vollständig abgeschlossen, weil das praktische Tun genügt.",
        "Die Handlung wurde ausgeführt, das fachliche Verständnis sollte aber noch vertieft werden.",
        "Begründungen sind in der Ausbildung grundsätzlich unwichtig.",
        "Der Azubi sollte die Tätigkeit bis zur Prüfung nicht mehr ausführen."
      ],
      correctIndex: 1,
      explanation:
        "Richtig ist Antwort B. Nachhaltiges Lernen zeigt sich nicht nur im Ausführen, sondern auch im Verstehen. Genau diese Differenz wird oft geprüft."
    }
  ],
  "Ausbildung abschließen": [
    {
      id: 37,
      module: "Meister Teil 4",
      topic: "Ausbildung abschließen",
      difficulty: "Leicht",
      question:
        "Ein Azubi fragt kurz vor der Abschlussphase, warum der Ausbildungsnachweis überhaupt regelmäßig geführt werden soll. Welche Antwort passt am ehesten?",
      options: [
        "Er dient der Dokumentation des Ausbildungsverlaufs und kann für den weiteren Prüfungsweg bedeutsam sein.",
        "Er ist nur eine private Erinnerungshilfe ohne Ausbildungsbezug.",
        "Er ersetzt automatisch jede praktische Unterweisung.",
        "Er wird ausschließlich von der Berufsschule geführt."
      ],
      correctIndex: 0,
      explanation:
        "Richtig ist Antwort A. Der Ausbildungsnachweis dokumentiert den Verlauf der Ausbildung. Er ist mehr als nur eine persönliche Notiz."
    },
    {
      id: 38,
      module: "Meister Teil 4",
      topic: "Ausbildung abschließen",
      difficulty: "Mittel",
      question:
        "Ein Ausbilder interessiert sich erst kurz vor Prüfungsende dafür, ob der Azubi noch fachliche Lücken hat. Eine systematische Vorbereitung oder Rückschau hat vorher kaum stattgefunden. Welche Bewertung ist am ehesten zutreffend?",
      options: [
        "Das ist problematisch, weil Ausbildungsabschluss auch eine geplante Begleitung und Auswertung braucht.",
        "Das ist ausreichend, weil am Ende nur das Prüfungsergebnis zählt.",
        "Das ist nur bei kaufmännischen Berufen kritisch.",
        "Das ist unproblematisch, wenn der Azubi zuverlässig ist."
      ],
      correctIndex: 0,
      explanation:
        "Richtig ist Antwort A. Ausbildung abschließen bedeutet auch, gezielt vorzubereiten und auszuwerten. Reines Hoffen auf die Prüfung reicht nicht."
    },
    {
      id: 39,
      module: "Meister Teil 4",
      topic: "Ausbildung abschließen",
      difficulty: "Mittel",
      question:
        "Ein Betrieb behandelt das Ende der Ausbildung rein verwaltungstechnisch. Ein Gespräch über Entwicklung, weitere Schritte oder Stärken findet nicht statt. Welche Bewertung ist am ehesten richtig?",
      options: [
        "Das ist ausreichend, weil Reflexion am Ende der Ausbildung keinen Nutzen mehr hat.",
        "Das ist zu kurz gedacht, weil ein Abschluss auch Orientierung und Auswertung beinhalten sollte.",
        "Das ist nur bei minderjährigen Azubis relevant.",
        "Das betrifft allein die Kammer."
      ],
      correctIndex: 1,
      explanation:
        "Richtig ist Antwort B. Ausbildung abschließen ist mehr als reine Formalität. Rückblick und Orientierung gehören sinnvoll dazu."
    },
    {
      id: 40,
      module: "Meister Teil 4",
      topic: "Ausbildung abschließen",
      difficulty: "Schwer",
      question:
        "Ein Betrieb behandelt das Ende der Ausbildung ausschließlich als formalen Austritt. Ein abschließendes Reflexionsgespräch über Entwicklung, Stärken und weiteren Weg findet nicht statt. Welche Bewertung passt am ehesten?",
      options: [
        "Das ist ausreichend, weil Reflexion am Ende keinen pädagogischen Wert mehr hat.",
        "Das ist zu kurz gedacht, weil ein geordneter Abschluss auch der Auswertung und Orientierung dient.",
        "Das ist nur bei minderjährigen Auszubildenden problematisch.",
        "Das ist nur dann relevant, wenn der Azubi im Betrieb bleibt."
      ],
      correctIndex: 1,
      explanation:
        "Richtig ist Antwort B. Ein guter Ausbildungsabschluss umfasst auch Auswertung und Orientierung. Gerade das gehört zum pädagogischen Gesamtprozess."
    }
  ]
};

const allQuestions = Object.values(questionBank).flat();
const questionLookup = new Map(allQuestions.map((question) => [question.id, question]));

const consentCheckbox = document.getElementById("consentCheckbox");
const shuffleCheckbox = document.getElementById("shuffleCheckbox");
const shuffleAnswersCheckbox = document.getElementById("shuffleAnswersCheckbox");
const questionCountSelect = document.getElementById("questionCountSelect");
const startButton = document.getElementById("startButton");
const restartSavedButton = document.getElementById("restartSavedButton");
const saveHint = document.getElementById("saveHint");
const selectionNote = document.getElementById("selectionNote");
const quizSection = document.getElementById("quizSection");
const scoreValue = document.getElementById("scoreValue");
const questionCounter = document.getElementById("questionCounter");
const moduleBadge = document.getElementById("moduleBadge");
const topicBadge = document.getElementById("topicBadge");
const difficultyBadge = document.getElementById("difficultyBadge");
const progressBar = document.getElementById("progressBar");
const questionText = document.getElementById("questionText");
const answerList = document.getElementById("answerList");
const feedbackBox = document.getElementById("feedbackBox");
const feedbackTitle = document.getElementById("feedbackTitle");
const feedbackText = document.getElementById("feedbackText");
const explanationText = document.getElementById("explanationText");
const nextButton = document.getElementById("nextButton");
const restartButton = document.getElementById("restartButton");
const totalQuestionsValue = document.getElementById("totalQuestionsValue");
const selectedModulesValue = document.getElementById("selectedModulesValue");
const selectedTopicsValue = document.getElementById("selectedTopicsValue");
const leichtCountValue = document.getElementById("leichtCountValue");
const mittelCountValue = document.getElementById("mittelCountValue");
const schwerCountValue = document.getElementById("schwerCountValue");
const moduleSelection = document.getElementById("moduleSelection");
const topicSelection = document.getElementById("topicSelection");
const selectAllModulesButton = document.getElementById("selectAllModulesButton");
const selectAllTopicsButton = document.getElementById("selectAllTopicsButton");
const clearTopicsButton = document.getElementById("clearTopicsButton");

const letters = ["A", "B", "C", "D"];
let selectedModules = new Set(moduleOrder);
let selectedTopics = new Set(topicOrder);
let state = buildInitialState([]);

function buildInitialState(order) {
  return {
    order,
    currentQuestionIndex: 0,
    score: 0,
    answers: {},
    finished: false
  };
}

function shuffleArray(values) {
  const copy = [...values];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }

  return copy;
}

function getAvailableTopics() {
  return moduleOrder.flatMap((moduleName) =>
    selectedModules.has(moduleName) ? moduleMeta[moduleName].topics : []
  );
}

function normalizeTopicSelection() {
  const availableTopics = new Set(getAvailableTopics());
  selectedTopics = new Set(
    [...selectedTopics].filter((topic) => availableTopics.has(topic))
  );

  if (selectedTopics.size === 0 && availableTopics.size > 0) {
    selectedTopics = new Set(availableTopics);
  }
}

function getActiveQuestions() {
  return topicOrder.flatMap((topic) =>
    selectedTopics.has(topic) ? questionBank[topic] : []
  );
}

function getQuestionLimit() {
  return questionCountSelect.value === "all"
    ? Number.POSITIVE_INFINITY
    : Number(questionCountSelect.value);
}

function buildQuestionSequence() {
  const difficulties = ["Leicht", "Mittel", "Schwer"];
  const sequence = [];

  difficulties.forEach((difficulty) => {
    const topicsForDifficulty = topicOrder.filter((topic) => selectedTopics.has(topic));
    const orderedTopics = shuffleCheckbox.checked
      ? shuffleArray(topicsForDifficulty)
      : topicsForDifficulty;

    orderedTopics.forEach((topic) => {
      const questionsForTopic = questionBank[topic].filter(
        (question) => question.difficulty === difficulty
      );
      const orderedQuestions = shuffleCheckbox.checked
        ? shuffleArray(questionsForTopic)
        : questionsForTopic;

      orderedQuestions.forEach((question) => sequence.push(question.id));
    });
  });

  return sequence.slice(0, getQuestionLimit());
}

function createOptionOrder(question) {
  const optionOrder = question.options.map((_, index) => index);
  return shuffleAnswersCheckbox.checked ? shuffleArray(optionOrder) : optionOrder;
}

function renderModuleSelection() {
  moduleSelection.innerHTML = "";

  moduleOrder.forEach((moduleName) => {
    const moduleQuestions = moduleMeta[moduleName].topics.flatMap(
      (topic) => questionBank[topic]
    );
    const button = document.createElement("button");
    button.type = "button";
    button.className = `choice-card card${selectedModules.has(moduleName) ? " selected" : ""}`;
    button.setAttribute("aria-pressed", selectedModules.has(moduleName) ? "true" : "false");
    button.innerHTML = `
      <div class="choice-card-top">
        <span class="section-label">Modul</span>
        <span class="choice-status">${selectedModules.has(moduleName) ? "Aktiv" : "Inaktiv"}</span>
      </div>
      <h3>${moduleName}</h3>
      <p>${moduleMeta[moduleName].description}</p>
      <span class="choice-count">${moduleQuestions.length} Fragen</span>
    `;
    button.addEventListener("click", () => toggleModule(moduleName));
    moduleSelection.appendChild(button);
  });
}

function renderTopicSelection() {
  topicSelection.innerHTML = "";

  getAvailableTopics().forEach((topic) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `choice-card card${selectedTopics.has(topic) ? " selected" : ""}`;
    button.setAttribute("aria-pressed", selectedTopics.has(topic) ? "true" : "false");
    button.innerHTML = `
      <div class="choice-card-top">
        <span class="section-label">${topicMeta[topic].module}</span>
        <span class="choice-status">${selectedTopics.has(topic) ? "Aktiv" : "Inaktiv"}</span>
      </div>
      <h3>${topic}</h3>
      <p>${topicMeta[topic].description}</p>
      <span class="choice-count">${questionBank[topic].length} Fragen</span>
    `;
    button.addEventListener("click", () => toggleTopic(topic));
    topicSelection.appendChild(button);
  });
}

function updateOverviewStats() {
  const activeQuestions = getActiveQuestions();
  const leicht = activeQuestions.filter((question) => question.difficulty === "Leicht").length;
  const mittel = activeQuestions.filter((question) => question.difficulty === "Mittel").length;
  const schwer = activeQuestions.filter((question) => question.difficulty === "Schwer").length;
  const plannedQuestions = Math.min(activeQuestions.length, getQuestionLimit());

  totalQuestionsValue.textContent = `${plannedQuestions} Fragen aktiv`;
  selectedModulesValue.textContent = `${selectedModules.size} Module aktiv`;
  selectedTopicsValue.textContent = `${selectedTopics.size} Felder aktiv`;
  leichtCountValue.textContent = `${leicht} Fragen`;
  mittelCountValue.textContent = `${mittel} Fragen`;
  schwerCountValue.textContent = `${schwer} Fragen`;

  if (selectedModules.size === 0) {
    selectionNote.textContent = "Bitte mindestens ein Modul auswählen.";
  } else if (selectedTopics.size === 0) {
    selectionNote.textContent = "Bitte mindestens ein Handlungsfeld auswählen.";
  } else {
    selectionNote.textContent = `${selectedModules.size} Module, ${selectedTopics.size} Felder, ${plannedQuestions} Fragen im Durchlauf.`;
  }
}

function updateStartState() {
  startButton.disabled =
    !consentCheckbox.checked || selectedModules.size === 0 || selectedTopics.size === 0;
}

function resetSavedRunNotice(message) {
  clearState();
  restartSavedButton.classList.add("hidden");
  saveHint.textContent = message;
}

function toggleModule(moduleName) {
  if (selectedModules.has(moduleName)) {
    selectedModules.delete(moduleName);
  } else {
    selectedModules.add(moduleName);
  }

  normalizeTopicSelection();
  renderModuleSelection();
  renderTopicSelection();
  updateOverviewStats();
  updateStartState();
  resetSavedRunNotice("Modulauswahl aktualisiert.");
}

function toggleTopic(topic) {
  if (selectedTopics.has(topic)) {
    selectedTopics.delete(topic);
  } else {
    selectedTopics.add(topic);
  }

  renderTopicSelection();
  updateOverviewStats();
  updateStartState();
  resetSavedRunNotice("Handlungsfelder aktualisiert.");
}

function selectAllModules() {
  selectedModules = new Set(moduleOrder);
  selectedTopics = new Set(topicOrder);
  renderModuleSelection();
  renderTopicSelection();
  updateOverviewStats();
  updateStartState();
  resetSavedRunNotice("Alle Module wurden aktiviert.");
}

function selectAllTopics() {
  selectedTopics = new Set(getAvailableTopics());
  renderTopicSelection();
  updateOverviewStats();
  updateStartState();
  resetSavedRunNotice("Alle Handlungsfelder wurden aktiviert.");
}

function clearAllTopics() {
  selectedTopics = new Set();
  renderTopicSelection();
  updateOverviewStats();
  updateStartState();
  resetSavedRunNotice("Alle Handlungsfelder wurden abgewählt.");
}

function saveState() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      state,
      consentAccepted: consentCheckbox.checked,
      shuffleEnabled: shuffleCheckbox.checked,
      shuffleAnswersEnabled: shuffleAnswersCheckbox.checked,
      questionCount: questionCountSelect.value,
      selectedModules: [...selectedModules],
      selectedTopics: [...selectedTopics]
    })
  );
}

function clearState() {
  localStorage.removeItem(STORAGE_KEY);
}

function renderCurrentQuestion() {
  const questionId = state.order[state.currentQuestionIndex];
  const question = questionLookup.get(questionId);
  const savedAnswer = state.answers[question.id];
  const progressPercent = (state.currentQuestionIndex / state.order.length) * 100;

  quizSection.classList.remove("hidden");
  scoreValue.textContent = String(state.score);
  questionCounter.textContent = `Frage ${state.currentQuestionIndex + 1} von ${state.order.length}`;
  moduleBadge.textContent = question.module;
  topicBadge.textContent = question.topic;
  difficultyBadge.textContent = question.difficulty;
  progressBar.style.width = `${progressPercent}%`;
  questionText.textContent = question.question;
  nextButton.disabled = !savedAnswer || state.finished;

  answerList.innerHTML = "";

  const optionOrder = savedAnswer?.optionOrder || createOptionOrder(question);

  optionOrder.forEach((optionIndex, renderIndex) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-button";
    button.disabled = Boolean(savedAnswer);
    button.dataset.optionIndex = String(optionIndex);
    button.innerHTML = `<span class="answer-letter">${letters[renderIndex]}</span><span>${question.options[optionIndex]}</span>`;
    button.addEventListener("click", () => handleAnswer(question, optionOrder, optionIndex));

    if (savedAnswer) {
      applyAnswerStyles(button, question, optionIndex, savedAnswer.selectedIndex);
    }

    answerList.appendChild(button);
  });

  if (savedAnswer) {
    showFeedback(savedAnswer.isCorrect, question.explanation, question.correctIndex, savedAnswer.optionOrder);
  } else {
    hideFeedback();
  }
}

function applyAnswerStyles(button, question, optionIndex, selectedIndex) {
  button.classList.add("revealed");

  if (optionIndex === question.correctIndex) {
    button.classList.add("correct");
  } else if (optionIndex === selectedIndex) {
    button.classList.add("incorrect");
  }
}

function handleAnswer(question, optionOrder, selectedIndex) {
  const isCorrect = selectedIndex === question.correctIndex;

  if (!state.answers[question.id]) {
    state.answers[question.id] = {
      selectedIndex,
      isCorrect,
      optionOrder
    };

    if (isCorrect) {
      state.score += 1;
    }

    saveState();
  }

  scoreValue.textContent = String(state.score);

  [...answerList.children].forEach((button) => {
    const optionIndex = Number(button.dataset.optionIndex);
    button.disabled = true;
    applyAnswerStyles(button, question, optionIndex, selectedIndex);
  });

  showFeedback(isCorrect, question.explanation, question.correctIndex, optionOrder);
  nextButton.disabled = false;
}

function showFeedback(isCorrect, explanation, correctIndex, optionOrder) {
  const correctLetterIndex = optionOrder.indexOf(correctIndex);

  feedbackBox.classList.remove("hidden", "success", "error");
  feedbackBox.classList.add(isCorrect ? "success" : "error");
  feedbackTitle.textContent = isCorrect ? "Richtig" : "Falsch";
  feedbackText.textContent = isCorrect
    ? "Ihre Auswahl war korrekt."
    : `Richtig ist Antwort ${letters[correctLetterIndex]}.`;
  explanationText.textContent = explanation;
}

function hideFeedback() {
  feedbackBox.classList.add("hidden");
  feedbackBox.classList.remove("success", "error");
}

function finishQuiz() {
  state.finished = true;
  clearState();
  progressBar.style.width = "100%";
  questionCounter.textContent = `Ergebnis: ${state.score} von ${state.order.length}`;
  moduleBadge.textContent = "Abschluss";
  topicBadge.textContent = "Fertig";
  difficultyBadge.textContent = "Ergebnis";
  questionText.textContent = "Trainingsrunde abgeschlossen";
  answerList.innerHTML = `
    <div class="card choice-card selected">
      <div class="choice-card-top">
        <span class="section-label">Ergebnis</span>
        <span class="choice-status">Fertig</span>
      </div>
      <h3>${state.score} von ${state.order.length} richtig</h3>
      <p>Sie können jetzt andere Module oder Handlungsfelder auswählen und direkt weitertrainieren.</p>
      <span class="choice-count">${selectedTopics.size} aktive Handlungsfelder</span>
    </div>
  `;
  feedbackBox.classList.remove("hidden", "success", "error");
  feedbackBox.classList.add(state.score >= Math.ceil(state.order.length * 0.7) ? "success" : "error");
  feedbackTitle.textContent = "Auswertung";
  feedbackText.textContent =
    state.score >= Math.ceil(state.order.length * 0.7)
      ? "Starker Durchlauf mit guter Prüfungssicherheit."
      : "Gute Basis. Ein weiterer Durchlauf lohnt sich.";
  explanationText.textContent =
    "Die nächste Runde kann mit denselben oder mit anderen Handlungsfeldern gestartet werden.";
  nextButton.disabled = true;
}

function goToNextQuestion() {
  if (state.currentQuestionIndex >= state.order.length - 1) {
    finishQuiz();
    return;
  }

  state.currentQuestionIndex += 1;
  saveState();
  renderCurrentQuestion();
}

function startQuizFromScratch() {
  const order = buildQuestionSequence();

  if (order.length === 0) {
    saveHint.textContent = "Bitte zuerst mindestens ein Modul und ein Handlungsfeld auswählen.";
    return;
  }

  state = buildInitialState(order);
  saveState();
  renderCurrentQuestion();
  quizSection.scrollIntoView({ behavior: "smooth", block: "start" });
  saveHint.textContent = "Der Fortschritt wird lokal im Browser gespeichert.";
  restartSavedButton.classList.add("hidden");
}

function restoreSavedProgress(savedPayload) {
  selectedModules = new Set(
    savedPayload.selectedModules?.length ? savedPayload.selectedModules : moduleOrder
  );
  selectedTopics = new Set(
    savedPayload.selectedTopics?.length ? savedPayload.selectedTopics : topicOrder
  );
  normalizeTopicSelection();
  state = savedPayload.state;
  consentCheckbox.checked = Boolean(savedPayload.consentAccepted);
  shuffleCheckbox.checked = Boolean(savedPayload.shuffleEnabled);
  shuffleAnswersCheckbox.checked = savedPayload.shuffleAnswersEnabled !== false;
  questionCountSelect.value = savedPayload.questionCount || "20";
  renderModuleSelection();
  renderTopicSelection();
  updateOverviewStats();
  updateStartState();
  renderCurrentQuestion();
  restartSavedButton.classList.remove("hidden");
  saveHint.textContent = "Ein früherer Stand wurde geladen.";
}

function loadSavedState() {
  const raw = localStorage.getItem(STORAGE_KEY);

  if (!raw) {
    return;
  }

  try {
    const parsed = JSON.parse(raw);

    if (!parsed?.state?.order?.length || parsed.state.finished) {
      clearState();
      return;
    }

    restoreSavedProgress(parsed);
  } catch (error) {
    clearState();
  }
}

consentCheckbox.addEventListener("change", updateStartState);
shuffleCheckbox.addEventListener("change", () => {
  updateOverviewStats();
  updateStartState();
  resetSavedRunNotice("Reihenfolge aktualisiert.");
});
shuffleAnswersCheckbox.addEventListener("change", () => {
  updateStartState();
  resetSavedRunNotice("Antwortmischung aktualisiert.");
});
questionCountSelect.addEventListener("change", () => {
  updateOverviewStats();
  updateStartState();
  resetSavedRunNotice("Fragenanzahl aktualisiert.");
});
startButton.addEventListener("click", startQuizFromScratch);
nextButton.addEventListener("click", goToNextQuestion);
restartButton.addEventListener("click", startQuizFromScratch);
restartSavedButton.addEventListener("click", () => {
  clearState();
  startQuizFromScratch();
});
selectAllModulesButton.addEventListener("click", selectAllModules);
selectAllTopicsButton.addEventListener("click", selectAllTopics);
clearTopicsButton.addEventListener("click", clearAllTopics);

renderModuleSelection();
renderTopicSelection();
updateOverviewStats();
updateStartState();
loadSavedState();
