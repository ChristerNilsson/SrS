---
title: D7
---

```
Pos #   1     2     3     4     5     6     7   Score   Elo Namn                 T 0½1
01 01 01•½½ 01•½½ 01•½½ 01•½½ 01•½½ 01•½½ 01•½½ 1234.5 1238 JOHANSSON Lennart B 01 ___
02 02 01•½½ 01•½½ 01•½½ 01•½½ 01•½½ 01•½½ 01•½½ 1234.5 1238 PETTERSSON Lars-Åke 02 ___
03 03 01•½½ 01•½½ 01•½½ 01•½½ 01•½½ 01•½½ 01•½½ 1234.5 1238 NILSSON Christer    02 ___
03 03 01•½½ 01•½½ 01•½½ 01•½½ 01•½½ 01•½½ 01•½½ 1234.5 1238 NILSSON Christer    01 ___
```

<script>
window.onbeforeprint = () => {
    if (!document.body.innerText.trim()) {
        alert("Inget innehåll att skriva ut.");
        event.preventDefault(); // Hindrar utskriften
    }
};
</script>
