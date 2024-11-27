[Try it!](https://christernilsson.github.io/SrS/)

# Flytt från Seniorschack till Hugo

Originalet utvecklat av mig.  
Påbörjade detta arbete 2024-11-22
Eftersom min filosofi går att implementera med Hugo ville jag testa skarpt.  

Hugokoden blev tämligen liten. 10-15 rader:

* layouts
	* _default
		section.html
	* partials
		breadcrumbs.html (3 rader)
	* index.html

Följande element användes:

* .Title
* range
* .CurrentSection.Sections
* .CurrentSection.Resources
* .RelPermalink
* .Content

### Status

* Arkiv          KLAR 2024-11-23
	* Document   KLAR 2024-11-22
	* Partier    KLAR 2024-11-26
	* PGN        KLAR 2024-11-22
	* Veckans kombinationer KLAR 2024-11-26
	* Övrigt     KLAR 2024-11-22
* Externa länkar KLAR 2024-11-22
* Inställningar  KLAR 2024-11-23
* Klubben        KLAR 2024-11-22
	* Blanketter KLAR 2024-11-22
	* Matrikel   NIX
	* Medlemmar  KLAR 2024-11-22
	* Webmaster  KLAR 2024-11-22
	* GDPR-info  KLAR 2024-11-22
	* Stadgar    KLAR 2024-11-22
	* Tjänster   KLAR 2024-11-22
* Kontakt        KLAR 2024-11-22
* Program        KLAR 2024-11-22
* Rating         KLAR 2024-11-22
* Resultat       KLAR 2024-11-22
* Webkarta       KLAR 2024-11-23
* Brödsmulor     KLAR 2024-11-22

### Att Göra

* Hämta markdown från github direkt, vid klick på rubrik

### Work around

* Införde en Front Matter-parameter auto
	* true: automatgenerera 
		* Förutsätter att katalog- och filnamn är presentabla.
	* false: använd _index.md för att skapa länkarna

### Arbetssätt

* Byt namn på index.md => _index.md
* Lägg in Front Matter
	* ---
	* title: "Arkiv"
	* auto: true (ibland)
	* ---
* Tag bort alla .html och .htm-filer i content
	* htm kan ligga i static/htm

### Vad finns i Christers variant, men inte i Hugo?

* Man kan inte klicka på rubriken och se aktuell markdown