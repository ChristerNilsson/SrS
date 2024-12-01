table = (s) -> "<table>\n" + s + "</table>"
td = (s,attrs="") -> "<td #{attrs}>" + s + "</td>"
tr = (s,attrs="") -> "<tr #{attrs}>" + s + "</tr>\n"
th = (s,attrs="") -> "<th #{attrs}>" + s + "</th>"

turneringar = {
	14507: "Klass M",
	14508: "Klass 1",
	14509: "Klass 2",
	14510: "Klass 3",
	14512: "Klass 4",
}

process = (data_t, data_r, tid, pid) ->

	console.log data_t
	console.log data_r

	players = {}
	for p in data_t
		pi = p.playerInfo
		players[p.contenderId] = pi.elo.rating + ' ' + pi.lastName.toUpperCase() + ' ' + pi.firstName

	stable = ""
	stable += th "datum"
	stable += th "rond"
	stable += th "bord"
	stable += th "färg"
	stable += th "mot"
	stable += th "resultat"
	stable = tr stable
	good = 0
	n = 0
	center = 'style="text-align: center"'
	grå    = 'style="color:#444444"'
	now = new Date()
	nu = now.toLocaleDateString "sv-SE"

	for r in data_r
		g = r.games[0]
		if r.finalized 
			n += 1
			# if r.homeResult != 0 or r.awayResult != 0 then good += 1
			if g.result in [-1,0,1] then good += 1
		# console.log r.awayId,r.homeId
		if r.awayId == pid or r.homeId == pid
			färg = if r.homeId==pid then "vit" else "svart"
			s = ""
			s += td r.date
			s += td r.roundNr,center
			s += td r.board,center
			s += td färg,center
			opp = if färg=='vit' then r.awayId else r.homeId
			res = if färg=='vit' then r.homeResult else r.awayResult
			if opp < 1000
				s += td "w.o."
			else
				s += td players[opp.toString()]
			if g.result in [-3,-2,2] then res += " w.o."
			s += td res,center
			col = if r.date < nu or r.finalized then grå else ""
			stable += tr s,col

	turnering = document.getElementById 'turnering'
	spelare = document.getElementById 'spelare'
	app = document.getElementById 'app'
	statistik = document.getElementById 'statistik'

	turnering.innerHTML = "<a href='https://member.schack.se/ShowTournamentServlet?id=#{tid}'>#{turneringar[tid]}</a>"
	spelare.innerText = "Spelare: " + players[pid]
	app.innerHTML = table stable
	statistik.innerText = "#{good} of #{n} games played (#{(100*good/n).toFixed 1}%)"