# Flytt från Seniorschack till Hugo

Originalet utvecklat av mig.  
Påbörjade detta arbete 2024-11-22
Eftersom min filosofi går att implementera med Hugo ville jag testa skarpt.  

Hugokoden blev tämligen liten. 10-15 rader:

* layouts
	* _default
		section.html
	* index.html

Följande element användes:

* .Title
* range
* .CurrentSection.Sections
* .CurrentSection.Resources
* .RelPermalink
* .Content

### Status

* Arkiv
	* Document KLAR 2024-11-22
	* Partier
	* PGN KLAR 2024-11-22
	* Veckans kombinationer
	* Övrigt  KLAR 2024-11-22
* Externa länkar KLAR 2024-11-22
* Inställningar 
* Klubben KLAR 2024-11-22
	* Blanketter KLAR 2024-11-22
	* Matrikel NIX
	* Medlemmar KLAR 2024-11-22
	* Webmaster KLAR 2024-11-22
	* GDPR-info KLAR 2024-11-22
	* Stadgar KLAR 2024-11-22
	* Tjänster KLAR 2024-11-22
* Kontakt  KLAR 2024-11-22
* Program  KLAR 2024-11-22
* Rating KLAR 2024-11-22
* Resultat KLAR 2024-11-22

### Att Göra

* CSS (cascading?)
* Inställningar (till localStorage)
* Kjell Persons html-schack
* Brödsmulor KLAR 2024-11-22
* Kalender-hantering
	* Troligen via normal bloghantering.
* Byt ut kvarvarande HTM

### Work around

* Verkar inte som att Goldmark hanterar html i markdown.
	* Länka till dessa sidor utanför Hugo.
	* T ex Performance Calculator.
* Införde en Front Matter-parameter auto
	* true: automatgenerera 
		* Förutsätter att katalog- och filnamn är presentabla.
	* false: skapa _index.md manuellt
	* Vore trevligt om denna gick att automatisera.
		* Om text saknas under --- Så sätt auto = true

### Arbetssätt

* Prefixa index.md => _index.md
* Lägg in Front Matter
	* ---
	* title: "Arkiv"
	* auto: true (ibland)
	* ---
* Tag bort alla .html-filer i content