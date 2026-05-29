Verbeterpunt 1:

"Als student kan ik de applicatie offline gebruiken, maar bij het testen valt de opgehaalde API data weg na plugin toevoeging"

Werkt dit functioneel? 
De service worker zit erin via vite-plugin-pwa maar tijdens de demo kregen we offline de data niet meer te zien bij projects. 

Wanneer gebeurt dit? 
Dit gebeurd als we de app testen in dev-modus (npm run dev).

Wat verwachten wij? 
Dat de app ook offline werkt vanuit de cache en de api-data laat zien.

Testplan: 
1.	Open de app, open inspectermode > application > storage en klik op clear site data  om de oude cache te verwijderen. 
2.	Bouw en run de app via npm run build en npm run preview.
3.	Zet de netwerk-tab op offline en ververs de pagina of hij blijft draaien.

Is dit onderhoudbaar? 
De plugin is een prima basis, maar onze inrichting kan slimmer. Tijdens de demo zagen we dat de service worker wel actief was, maar de data voor projects niet wilde laden.

Is dit efficient?
De networkFirst is op zich goed voor onze data. De app zoekt eerst verbinding voor de nieuwste updates en pakt de cache als het netwerk plat ligt.

Optionele verbetering: Misschien kunnen wij de maximale leeftijd van de cache veranderen naar 5 dagen ipv 1 dag, zodat de gebruiker de data langer offline kan zien.


Verbeterpunt 2:

"Als gebruiker opent er bij het klikken op de "solliciteren" knop een mailvenster maar in het onderwerp staat niet de specifieke functie waarvoor ik wil solliciteren"

Werkt dit functioneel?
De mailknop werkt wel netjes het opent de mailprogramma, maar in de onderwerpregel komt nu de naam van het bedrijf te staan in plaats van de specifieke functie waarop de student klikt.

Wanneer gebeurt dit? 
Wanneer een student op aanmelden klikt. 

Wat verwachten wij?
Dat de specifieke titel van de listing automatisch in het onderwerp van de e-mail wordt gezet. 

Testplan: 
1.	Navigeer naar een project
2.	Klik op “solliciteer” knop
3.	Controller of het mailprogramma opent met de functienaam in het  onderwerp in plaats van alleen de bedrijfsnaam. 

Is dit onderhoudbaar?
De component is nu als één los bestand opgezet, wat op zich prima is voor de onderhoudbaarheid. We kunnen dit slimmer aanpakken door listingTitle mee te geven aan deze functie, zodat we de titel direct achter mailto: link kunnen plakken. 

Is dit efficient? 
Dit is goed ingericht. Alle benodigde data is via de component aanwezig, dus de mail-link wordt direct gemaakt zonder dat de gebruiker hoeft te wachten op de server. 

	
Verbeterpunt 3: 

“Als gebruiker kan ik projecten opzoeken via de searchbar, maar omdat deze alleen werkt met kleine hoeveelheden data kun je niet alle projecten vinden, Daarom willen wij de searchbar verwijderen”

Werkt dit functioneel of kan dit beter? 
Dit werkt functioneel wel, je kunt afstudeer projecten opzoeken, maar je kunt er vervolgens niet op klikken om de details van het project te zien. Dus het kan zeker beter, namelijk ervoor zorgen dat als je een afstudeer project opzoekt, dat je er dan ook op kunt klikken om op die manier naar de details pagina te gaan. 

Is dit onderhoudbaar of kan het beter?
Errors/loading toevoegen, hierdoor weet de gebruiker of de app het nog doet en niet is vastgelopen. Maar wij hebben ook besloten dat de searchbar een overbodige functie is en we gaan de searchbar verwijderen.

Is het efficient of kan dit beter?
Nu wordt bij iedere toetsaanslag gefilterd. We zouden het aan kunnen passen naar als de gebruiker op enter heeft geklikt. 


Verbeterpunt 4:

“Voor de gebruiker is de tekst van de projecten tabel moeilijk leesbaar vanwege de achtergrond hierdoor willen we de WCAG verbeteren”

Werkt dit functioneel of kan dit beter? 
Ja, het werkt functioneel wel gewoon, maar de contrast met het donkerpaars en de zwarte tekst maakt dat de tekst wat minder goed leesbaar kan zijn. Dus we gaan de tekst aanpassen naar een dikgedrukte tekst. 

Is dit onderhoudbaar of kan het beter?
Dit is onderhoudbaar omdat de stijlwijziging centraal is aangepast. Als de tekststijl in de toekomst moet worden verandert, hoeft dit maar op een plek te gebeuren, dit verkleint de kans op fouten.

Is het efficient of kant dit beter?
De aanpassing is efficient omdat de stijlwijziging op een centrale plek in de code wordt aangepast. Hierdoor hoeven wij niet in de toekomst meerdere bestanden aan te passen. Ook verhoogt het de leesbaarheid voor de gebruiker.


Verbeterpunt 5:

“Als developer wil ik mijn code beter begrijpen en hier vaker op terugblikken omdat ik merk dat bij het schrijven van complexe code dit minder lang blijft hangen.”

Werkt dit functioneel of kan het beter? 
De functionaliteiten zitten er allemaal in en we hebben dit begrepen bij het aanmaken van deze functionaliteiten, maar we merken dat we niet genoeg kennis hebben over andermans gebouwde features ondanks kritische Pull Request reviews, dus zijn we het erover eens dat we het begrip bij onze code kunnen verbeteren. Hierbij hebben we besloten om meer van elkaars code te begrijpen en testen door hierover vragen aan elkaar te stellen, onze verwachting is om alles binnen 2 weken volledig begrepen te hebben. 

Is dit onderhoudbaar of kan het beter? 
We hebben de meeste code zelf geschreven waarvan soms met behulp van een online voorbeeld, YouTube of een gebruikte plugin zoals bij het bouwen van een offline werkende applicatie. Dit is er nog niet maar wordt onderhoudbaar door een afspraak te maken om wekelijks bij elkaar te komen zodat we ons begrip kunnen verbeteren en elkaar direct te vragen waar bepaalde onderdelen van de applicatie voor dienen en onduidelijkheden bespreekbaar te maken. 

Is dit efficiënt/performant of kan dit beter? 
Nu reviewen we alleen elkaars Pull Requests en stellen we elkaar hierin vragen, het kan efficiënter door op een bepaalt moment iedere week bij elkaar te komen en te spreken over de aanpassingen met de ins en outs ervan. Zodat we direct kunnen bepalen of iets af is of moet worden verbeterd en dus beter begrip hebben van de code. 


Verbeterpunt 6: 

“Als student wil ik een card zien in plaats van een tabel omdat dit fijner leesbaar is en ook wil ik dat de bedrijfsnaam wordt toegevoegd in die Card details en niet alleen bij een specifieke listing in het cards overzicht”

Werkt dit functioneel of kan dit beter? 
Functioneel werkt de tabel en toont het de data per listing alleen ontbreekt de naam van het bedrijf hierin en is de tabel niet fijn leesbaar met verschillende listings. 

Is dit onderhoudbaar of kan het beter? 
Het kan beter omdat we de tabel moeten veranderen naar cards voor overzichtelijkheid en leesbaarheid omdat dit is gebleken uit ontvangen feedback van de docenten. Deze code hoeven we alleen aan te passen in projects.jsx en de styling in base.css voor de rest werkt het dan overal hetzelfde. 

Is dit efficiënt/performant of kan dit beter? 
Er zijn geen dingen waar we op moeten wachten voor de functionaliteit omdat we de API data al hebben opgehaald en deze alleen nog moeten implementeren bij de toekomstige cards. Qua performance is het in orde omdat de API fetch maar 1 keer wordt uitgevoerd en direct wordt opgeslagen in "listings".
