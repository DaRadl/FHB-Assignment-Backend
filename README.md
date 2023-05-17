# Dokumentation (High Level)

Umsetzung und Dokumentation (High Level) der Projektumsetzung (Inklusive Zugriff zum Source Code; entweder ein öffentliches Repo oder Einladung ins private Repo)

## Folgende Anforderungen müssen erfüllt werden..

### Anlage eines automatischen Builds der bei jedem Pull-Request in den Main läuft und auch bei jedem Push in den Main Branch selbst

Hierfür wurde auf Basis des [Build.yml](https://github.com/DaRadl/FHB-MCCE-2023-Todo-Frontend/blob/main/.github/workflows/ci.yml) aus der Projektübung [FHB-MCCE-2023-Todo-Frontend
](https://github.com/DaRadl/FHB-MCCE-2023-Todo-Frontend) der LV folgendes [ci.yml](./.github/workflows/ci.yml) erstellt.  
Gelöst wurde das durch die Angabe von den GitHub-Actions vodefinierten Funktionen `push` und `pull_request` für den Hauptbranch `main`.

<img alt="ci.yml" src="web/ressources/ci.png" width="400"/>

### Anlage von mindestens 3 Unit Tests

### Aufnahme der Unit Tests in den Build für jeden Pull-Request in den Main Branch sowie bei jedem Push in den Main Branch selbst

### Installation und Konfiguration (beliebige Konfiguration von jenen die bei der Installation vorgeschlagen werden) von ESLint für das Projekt

### Aufnahme von ESLint in den Build bei jedem Pull-Request in den Main Branch

### Konfiguration eines Automatismus zum Update von Fremdkomponenten, wennes eine neue Version gibt (z.B.: snyk, Dependabot, ...)

### Konfiguration von Statischer CodeAnalyse inklusive QualityGate(s).
Diese sollen auch bei jedem Pull-Request in den Main Branch ausgeführt werden.