---
title: Turnering
---

<div id="turnering"></div>

<div id="spelare"></div>

<div id="app"></div>

<div id="statistik"></div>

<script src="sketch.js"></script>

<script>

const urlParams = new URLSearchParams(window.location.search)
const tid = parseInt(urlParams.get("tid"))
const pid = parseInt(urlParams.get("pid").toString())

const api_t = 'https://member.schack.se/public/api/v1/tournamentresults/table/id/'
const api_r = 'https://member.schack.se/public/api/v1/tournamentresults/roundresults/id/'

Promise.all([
  fetch(api_t + tid).then(response => response.json()),
  fetch(api_r + tid).then(response => response.json())
])
  .then(([data_t, data_r]) => {
    process(data_t,data_r,tid,pid)
  })
  .catch(error => console.error('Fel vid hämtning av filer:', error));

</script>
