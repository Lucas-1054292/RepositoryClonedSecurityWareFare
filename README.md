# Werkplaats 4 - Progressive Web Apps
Gemaakt door:
-Donovan Feller (1073598)
-Lucas Reedijk (1054292)
-Taha Ditta (1088007)

**beschrijving:**
Wij als groep Hyena's, hebben een PWA (Progessive Web Application) gebouwd waar studenten afstudeerprojecten kunnen zien.
In deze application kun je een lijst van afstudeerprojecten, de functie, de naam van het bedrijf, een details knop en een share knop.
Als de student op de details knop klikt, dan wordt hij verwezen naar een detail pagina met meer informatie over het afstudeerproject zoals: 
opnieuw de functie, een korte beschrijving, de start datum, de contact persoon, het e-mail adres, een knop om te solliciteren bij dit bedrijf
en een knop om dit project op jouw apparaat op te slaan. 
De studenten kunnen projecten op slaan en dan komt het project op een lijst genaamd "opgeslagen projecten" te staan. Als de student op "solliciteren" klikt,
dan wordt de student doorgewezen naar een mail programma (bijvoorbeeld outlook) en wordt er een e-mail met het ingevulde e-mail adres van het bedrijf klaargezet. 
Vervolgens kan de student zelf de tekst van de e-mail opzetten en de mail versturen. 

Dit alles is zo verwerkt dat het voor de gebruiker toegankelijk is en fijn in gebruik. Ook hebben we de WCAG-richtlijnen opgevolgd zodat het gebruiksvriendelijk is voor gebruikers.

-Team notes: 
Als eerst moeten deze commands geinstalleerd worden:
1. npm install
2. npm install react-router-dom

> [!NOTE]
> Bij inleveren moet hier het volgende staan:
> 
> Instructies voor installatie en opstarten
> Screenshots
> Andere dingen die je wilt melden of belangrijk zijn (bonus functionaliteiten bijvoorbeeld)
> Links naar relevante pull requests (voor elk groepslid)
> Link naar een filmpje
> APA bronnen


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
