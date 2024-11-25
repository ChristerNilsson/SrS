---
title: "Migration"
---

Här tar jag upp problem i samband med migration av filer från gamla servern till den nya.  

### Arkiv/bilder
Denna katalog innehåller 17MB (67 bilder)  
Det är möjligt att det finns bilder här som inte används.  

Allt under **bilder** har flyttats till katalogen **Arkiv/bilder**  

### Arkiv/htm
Denna katalog innehåller 108MB. (1507 filer)  
80% av dessa filer används troligen inte.  
* Dokument: 12*15 = 180 filer
* Övrigt: 16+6+50+2 = 75 filer
* Veckans kombination: ca 65 filer

Allt under **htmfiler** har flyttats till katalogen **Arkiv/htm**  

Det finns brutna länkar i det gamla materialet.  
T ex **htm/lagmatch_gbg_2010.htm** refererar **bilder/gummesson.jpg** som inte existerar.  
Detta lämnar jag över åt någon annan.  

### Arkiv/Veckans kombination

Allt under **palview** har flyttats till **Arkiv/palview**. (Innehåller schackpjäser till Veckans kombination)

### Klubben/Matrikel

De tre filerna under **Matrikel** har ej gjorts tillgängliga då de är GDPR-känsliga.  

---

Egentligen skulle jag vilja att alla dokument som har med 2024 att göra ligger katalogen 2024.  
Men, pga att filerna heter t ex **Protokoll_SrS_nr1_2024.pdf**, med årtal i slutet istället för början, är detta ett stort arbete som jag överlåter åt någon annan.  
Det handlar om 1507 filer som ligger huller om buller.  

Det blir lätt så när man inte vet vad en katalog är för något.  
Eller håller på med mediabiblioteket i Wordpress, där allt också ligger huller om buller.  

Att skapa kaos ur ordning går snabbt, det omvända tar något längre tid.  

Tips: Namnge tidskänsliga filer med **YYYY-MM-DD-** först i filnamnet eller använd kataloger.  

### Strul

Hade lite problem med att ange kataloger så att de fungerar på github.  
Tvingades använda relativa pather.  
Observera att **docs** syns inte och ska inte användas.  

Exempel: Seniorschack/Arkiv ska det heta.  

Bytte htm till HTM och tillbaks. Detta accepteras ej.  

Gör så här istället:

1. Byt htm -> temp
2. Committa
3. byt temp -> HTM
4. Committa

Dessutom visar github bara 1000 filer per katalog. Dock kan man lagra obegränsat.  

Märkte också en fördröjning innan filerna blev tillgängliga, på någon minut.  

Kanske bättre att lagra dessa 1507 filer någon annanstans, eller plocka ut de 20% som används.  
