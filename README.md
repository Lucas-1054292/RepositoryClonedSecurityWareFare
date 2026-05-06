# Werkplaats 4 - Progressive Web Apps

-Team notes: 
command die als eerst geinstalleerd moet worden: npm install react-router-dom

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
