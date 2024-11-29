---
title: "FairPair 3"
---

2024-11-27  

Tolv spelare deltog i tredje upplagan.  
Ställningen avgjordes av Performance Rating.  
Jouko Liistamo vann turneringen med fyra segrar.  

# Resultat

[Bildbanken 2](https://storage.googleapis.com/bildbank2/index.html?query=FairPair)

```
STANDINGS for FairPair 3 after Round 4

Pos  Id  Elo Name                          1     2     3     4      PR
  1  10 1570 LIISTAMO Jouko               9•1  12o1  11o1   4•1   4000.0
  2   5 1771 LEHVONEN Jouko               6o1   7•½   8o1   1•1   2161.3
  3   7 1753 RAZAVI Abbas                 8•1   5o½   6•1  11o1   2046.5
  4   3 1838 PERSSON Kjell                4•1   1o0   2•1   9o1   2030.1
  5   1 1970 WEDIN Svante                 2o1   3•1   4o1   5o0   2015.5
  6   2 1884 SILINS Peter                 1•0   4o0   3o0   6o1   1639.5
  7   4 1795 AIKIO Onni                   3o0   2•1   1•0  10o0   1595.9
  8   6 1756 ANDERSSON Lars-Owe           5•0   8o1   7o0   2•0   1587.1
  9   8 1725 WENNSTRÖM Bertil             7o0   6•0   5•0  12o1   1459.1
 10  12 1425 RADON Vida                  11o1  10•0   9•0   8•0   1391.4
 11  11 1476 ELDIN Peter                 12•0   9o1  10•0   7•0   1378.0
 12   9 1603 STEINER Bo                  10o0  11•0  12o1   3•0   1350.9
```

# Alternativt resultat

Om man använder Enhanced Performance Rating, EPR, istället, blir resultatet något annorlunda:

```
STANDINGS for FairPair 3 after Round 4

Pos  Id  Elo Name                          1     2     3     4     EPR      PP  ELOS
  1   5 1771 LEHVONEN Jouko               6o1   7•½   8o1   1•1   2039.4    3.5 1756 1753 1725 1970 1714
  2  10 1570 LIISTAMO Jouko               9•1  12o1  11o1   4•1   2027.2    4.0 1603 1425 1476 1795 1714
  3   3 1838 PERSSON Kjell                4•1   1o0   2•1   9o1   1959.0    3.0 1795 1970 1884 1603 1714
  4   1 1970 WEDIN Svante                 2o1   3•1   4o1   5o0   1951.4    3.0 1884 1838 1795 1771 1714
  5   7 1753 RAZAVI Abbas                 8•1   5o½   6•1  11o1   1947.8    3.5 1725 1771 1756 1476 1714
  6   2 1884 SILINS Peter                 1•0   4o0   3o0   6o1   1658.1    1.0 1970 1795 1838 1756 1714
  7   4 1795 AIKIO Onni                   3o0   2•1   1•0  10o0   1627.9    1.0 1838 1884 1970 1570 1714
  8   6 1756 ANDERSSON Lars-Owe           5•0   8o1   7o0   2•0   1617.7    1.0 1771 1725 1753 1884 1714
  9   8 1725 WENNSTRÖM Bertil             7o0   6•0   5•0  12o1   1523.3    1.0 1753 1756 1771 1425 1714
 10  12 1425 RADON Vida                  11o1  10•0   9•0   8•0   1460.7    1.0 1476 1570 1603 1725 1714
 11  11 1476 ELDIN Peter                 12•0   9o1  10•0   7•0   1451.6    1.0 1425 1603 1570 1753 1714
 12   9 1603 STEINER Bo                  10o0  11•0  12o1   3•0   1429.9    1.0 1570 1476 1425 1838 1714
```
Platserna 1-5 är här lite omstuvade.  
EPR innebär att man lägger till en fiktiv remi mot turneringens genomsnittliga spelare.  
Denna spelare har i denna turnering, ratingen 1714.  
De sista fem kolumnerna innehåller motståndarnas elotal.  
Om man använder kalkylatorn för PR och matar in 1756 1753 1725 1970 1714 följt av 3.5 + 0.5 = 4.0  
får man EPR = 2039.4.  

# Spelarmatrisen

Första till tredje ronden bildade tre perfekta berger-turneringar.
```
     1 2 3 4 5 6 7 8 9 0 1 2
  1  * 1 2 3 4 · · · · · · ·  1970
  2  1 * 3 2 · 4 · · · · · ·  1884
  3  2 3 * 1 · · · · 4 · · ·  1838
  4  3 2 1 * · · · · · 4 · ·  1795
  5  4 · · · * 1 2 3 · · · ·  1771
  6  · 4 · · 1 * 3 2 · · · ·  1756
  7  · · · · 2 3 * 1 · · 4 ·  1753
  8  · · · · 3 2 1 * · · · 4  1725
  9  · · 4 · · · · · * 1 2 3  1603
 10  · · · 4 · · · · 1 * 3 2  1570
 11  · · · · · · 4 · 2 3 * 1  1476
 12  · · · · · · · 4 3 2 1 *  1425
     1 2 3 4 5 6 7 8 9 0 1 2
```

# Nästa turnering

Denna kommer att arrangeras i skiftet januari/februari och den kommer att avgöras enligt EPR ovan.  
Den kommer att ha ett udda antal ronder, troligen fem. Detta för att jämna ut färgerna bättre.  
Som framgår ovan förekom 1+3, dvs en vit och tre svarta, vilket är obra.  
Det går att tvinga fram 2+2, men då tvingas algoritmen  
öka elo-avståndet mellan spelarna, vilket motverkar lottningssystemet idé.  

Jag skulle gärna även arrangera FairPairturneringar på tider när icke-pensionärer är lediga.  