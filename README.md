# Werkplaats 4 - Progressive Web Apps
Gemaakt door:<br>
-Donovan Feller (1073598)<br>
-Lucas Reedijk (1054292)<br>
-Taha Ditta (1088007)<br>

**Beschrijving:**<br>
Wij als groep Hyena's, hebben een PWA (Progessive Web Application) gebouwd waar studenten afstudeerprojecten kunnen zien.
In deze application kun je een lijst van afstudeerprojecten, de functie, de naam van het bedrijf, een details knop en een share knop.
Als de student op de details knop klikt, dan wordt hij verwezen naar een detail pagina met meer informatie over het afstudeerproject zoals: 
opnieuw de functie, een korte beschrijving, de start datum, de contact persoon, het e-mail adres, een knop om te solliciteren bij dit bedrijf
en een knop om dit project op jouw apparaat op te slaan. 
De studenten kunnen projecten op slaan en dan komt het project op een lijst genaamd "opgeslagen projecten" te staan. Als de student op "solliciteren" klikt,
dan wordt de student doorgewezen naar een mail programma (bijvoorbeeld outlook) en wordt er een e-mail met het ingevulde e-mail adres van het bedrijf klaargezet. 
Vervolgens kan de student zelf de tekst van de e-mail opzetten en de mail versturen. 

Dit alles is zo verwerkt dat het voor de gebruiker toegankelijk is en fijn in gebruik. Ook hebben we de WCAG-richtlijnen opgevolgd zodat het gebruiksvriendelijk is voor gebruikers.

**Instructies voor installatie:**<br>
In stappen hieronder zal ik beschrijven hoe u onze bestanden kunt installeren:
1. Download onze zip file
2. Haal de folder uit die zipfile (het is de bedoeling dat je 1 folder hebt waarin alle bestanden en overige folders behorend bij het project staan, als u dit heeft dan is dat voldaan)
3. Open de folder met een door u gekozen IDE (bijvoorbeeld PyCharm of Visual Studio Code)
4. Installeer de benodigdheden het bestand genaamd "requirements.txt" (zie command hieronder)

**Instructies voor het opstarten:**<br>
Hier zal ik beschrijven hoe u onze web-applicatie opstart nadat u de bestanden in een IDE open hebt staan:

Voor het opstarten van dit project moet u eerst een open source platform genaamd Node downloaden, met Node kunnen developers webservers of web apps maken.<br>
Dit kunt u via de volgende link downloaden: <br>
https://nodejs.org/en/download <br>
Ook moet u de docker desktop app gedownload hebben. Deze kunt u via de volgende link downloaden: <br>
https://docs.docker.com/desktop/setup/install/windows-install/


-Team notes: 
Als eerst moeten deze commands geinstalleerd worden:
1. npm install
2. npm install react-router-dom

**Screenshots**<br>
- Homescreen: 
![Schermafbeelding Homescreen.png](docs/Screenshots/Schermafbeelding%20Homescreen.png)
- Lijst van projecten: 
![Schermafbeelding Projecten.png](docs/Screenshots/Schermafbeelding%20Projecten.png)
- Project details:
![Schermafbeelding ProjectDetails.png](docs/Screenshots/Schermafbeelding%20ProjectDetails.png)
- Opgeslagen projecten: 
![Schermafbeelding opgeslagenprojecten.png](docs/Screenshots/Schermafbeelding%20opgeslagenprojecten.png)<br>

**Video**<br>
https://github.com/user-attachments/assets/6c458c36-2465-4150-8450-11e8e062a6e0



**Andere dingen die je wilt melden of belangrijk zijn**
Dit is bij ons project niet van toepassing


**Links naar relevante pull requests:** <br>
- relevante Pull Requests Donovan Feller (Async programmeren):
https://github.com/Rac-Software-Development/wp4-2026-pwa-1c2-hyena/pull/10/changes

- relevante Pull Requests Taha Ditta: 
https://github.com/Rac-Software-Development/wp4-2026-pwa-1c2-hyena/pull/19

- relevante Pull Requests Lucas Reedijk:
https://github.com/Rac-Software-Development/wp4-2026-pwa-1c2-hyena/pull/24/changes 

**Apa Bronnen**<br>
- Bronnenlijst Donovan Feller:
[Bronvermelding_Donovan_Feller_1073598_WP4.pdf](docs/Bronnen/Bronvermelding_Donovan_Feller_1073598_WP4.pdf)
- Bronnenlijst Taha Ditta: 
[Bronnenlijst wp4 - Taha Ditta 1088007.docx](docs/Bronnen/Bronnenlijst%20wp4%20-%20Taha%20Ditta%201088007.docx)
- Bronnenlijst Lucas Reedijk: 
[Bronnenlijst Lucas Reedijk.docx](docs/Bronnen/Bronnenlijst%20Lucas%20Reedijk.docx)

## Casus

Zie de [CASUS.md](./CASUS.md) voor de casus van deze werkplaats.

## Projectstructuur

### `/api`: 
  
FastAPI-gebaseerde backend waar jullie je applicatie op baseren. Dient te draaien in Docker, zie [`docker-compose.yml`](./docker-compose.yml) hoe dit in zijn werk gaat.

### `/data`:

De map die gedeeld wordt met de API in Docker. Hier wordt de SQLite database in aangemaakt.

### `/docs`:

De map voor documentatie. De map `prompt-log` is bedoeld voor (automatische) verslaglegging bij gebruik van GenAI in de IDE.

## Installeren

Zorg dat je docker geinstalleerd hebt.

## Opstarten

Start de backend door `docker compose up --build` te draaien.

## Generative AI

In deze repository proberen we het gebruik van generatieve AI en de verslaglegging eromheen wat te stroomlijnen. In IDEs zoals VSCode worden deze bestanden automatisch uitgelezen en meegestuurd met vragen die je Copilot stelt. We vragen het Large Language Model (LLM) daarbij je te helpen met de problemen en oplossingen te begrijpen, maar ze niet voor je in te vullen. Daarnaast vragen we het LLM om de conversaties te loggen. Zoals hierboven beschreven is hier de map `prompt-log` voor aangemaakt.


Downloaden & Testen:

PWA Download via de browser (Brave) bij het "Meer (3 streepjes) menu" --> save and share --> Pagina installeren als app
                        Chrome bij het "Meer (3 puntjes) menu" casten, opslaan en delen --> Pagina installeren als app
