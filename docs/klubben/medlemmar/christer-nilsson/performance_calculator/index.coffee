summa = (arr) ->
	res = 0
	for item in arr
		res += item
	res

expected_score = (ratings, own_rating) -> summa (1 / (1 + 10**((rating - own_rating) / 400)) for rating in ratings)

performance_rating = (pp, ratings) ->
	lo = 0
	hi = 4000
	while hi - lo > 0.000001
		rating = (lo + hi) / 2
		if pp > expected_score ratings, rating
			lo = rating
		else
			hi = rating
	rating.toFixed 3

performance = (pp,elos) -> performance_rating pp,elos

calculate = ->
	input = document.getElementById("INPUT").value
	data = input.trim().split ' '
	if data.length <= 1 then return
	pp = parseFloat data.pop()
	elos = (parseFloat item for item in data)
	document.getElementById("PR").innerText = performance pp, elos

calculate()
