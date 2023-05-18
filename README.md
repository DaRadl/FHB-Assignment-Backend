# Dokumentation (High Level)

Umsetzung und Dokumentation (High Level) der Projektumsetzung (Inklusive Zugriff zum Source Code; entweder ein öffentliches Repo oder Einladung ins private Repo)

## Folgende Anforderungen müssen erfüllt werden..

### Anlage eines automatischen Builds der bei jedem Pull-Request in den Main läuft und auch bei jedem Push in den Main Branch selbst

Hierfür wurde auf Basis des [Build.yml](https://github.com/DaRadl/FHB-MCCE-2023-Todo-Frontend/blob/main/.github/workflows/ci.yml) aus der Projektübung [FHB-MCCE-2023-Todo-Frontend
](https://github.com/DaRadl/FHB-MCCE-2023-Todo-Frontend) der LV folgendes [ci.yml](./.github/workflows/ci.yml) erstellt.  
Gelöst wurde das durch die Angabe von den GitHub-Actions vodefinierten Funktionen `push` und `pull_request` für den Hauptbranch `main`.

<img alt="ci.yml" src="web/ressources/ci.png" width="400"/>

### Anlage von mindestens 3 Unit Tests
Hierfür wurde auf Wissen der Projektübung [FHB-MCCE-2023-Todo-Frontend](https://github.com/DaRadl/FHB-MCCE-2023-Todo-Frontend) aufgebaut und für 
das bereitgestellt index.js ein index.test.js file für die unit Tests angelegt. Als Unit-Test Framework wurde [Mocha](https://mochajs.org/) eingesetzt. Folgende 3 Unit Tests wurden angelegt:
1. Unit-Test zur Betestung der Methode `generateId()` die direkt der gleichnamigen Konstante zugewiesen ist. 
Da es sich um den Zugriff auf eine **private Konstante** des unveränderten source code handelt, was per default mit Mocha nicht möglich ist, war es notwendig auf [rewire](https://www.npmjs.com/package/rewire) zurückzugreifen.
2. Unit-Test (Rest Api-Test für GET "/") zur Betestung der per express App implementierten Api Methoden. Verwendet wird dafür der Http-Client [request](https://www.npmjs.com/package/request). 
Geprüft wird auf erfolgreiche HTTP Response (200) und den angezeigten Content: Hello World.
3. Unit-Test (Rest Api-Test zur Validierung von GET "api/notes"). Hier haben wir uns dafür entschieden die Response für api notes gegen ein JSON Schema zu validieren was div Vorteile hat.
Das Schema wurde mittels [chai-json-schema](https://www.chaijs.com/plugins/chai-json-schema/) gegen das Schema [notes_schema_v1.json](test/resources/notes_schema_v1.json) validiert, dass mittels Schema Generator erstellt wurde.


### Aufnahme der Unit Tests in den Build für jeden Pull-Request in den Main Branch sowie bei jedem Push in den Main Branch selbst

Gelöst wurde das, indem in der [ci.yml](./.github/workflows/ci.yml) die Schritte für den checkout des aktuellen Source Code stand hinzugefügt. 
Danach erfolgt die Installation der verwendeten Abhängigkeiten mittels `npm ci` und der start der tests mittels test step aufruf `npm test`. 

Anschließend wurde das, indem im customisierte [package.json](./package.json) der build step `"test": "mocha --exit"` hinzugefügt, indem Mocha aufgerufen wird. 
`--exit` war notwendig damit in der pipeline am Ende des Test-Runs der context geschlossen wird und die Pipeline fortläuft.


### Installation und Konfiguration (beliebige Konfiguration von jenen die bei der Installation vorgeschlagen werden) von ESLint für das Projekt

Die Integration ist mittels Installation der Abhängigkeit eslint erfolgt und als build step in die [package.json](./package.json) mit source auf den source code in src `"lint": "eslint src/**/*.js"` erfolgt. 


### Aufnahme von ESLint in den Build bei jedem Pull-Request in den Main Branch

### Konfiguration eines Automatismus zum Update von Fremdkomponenten, wennes eine neue Version gibt (z.B.: snyk, Dependabot, ...)

### Konfiguration von Statischer CodeAnalyse inklusive QualityGate(s).Diese sollen auch bei jedem Pull-Request in den Main Branch ausgeführt werden.