ass = (a,b) ->
	if a != b 
		console.log 'assert failure'
		console.log a
		console.log b

summa = (arr) ->
	res = 0
	for item in arr
		res += item
	res

expected_score = (ratings, own_rating) -> summa (1 / (1 + 10**((rating - own_rating) / 400)) for rating in ratings)

performance_rating = (pp, ratings) ->
	lo = 0
	hi = 4000
	while Math.abs(hi - lo) > 0.001
		rating = (lo + hi) / 2
		if pp > expected_score ratings, rating
			lo = rating
		else
			hi = rating
	rating
 
# Använd två extremvärden då man har 0% eller 100%
extrapolate = (a0, b0, elos) ->
	a = performance_rating a0,elos
	b = performance_rating b0,elos
	b + b - a

performance = (pp,elos) -> 
	n = elos.length
	if n == 1
		if pp == 0 then return extrapolate 0.50,0.25,elos
		if pp == n then return extrapolate 0.50,0.75,elos
	else
		if pp == 0 then return extrapolate   1,  0.5,elos
		if pp == n then return extrapolate n-1,n-0.5,elos
	performance_rating pp,elos

calculate = ->
	input = document.getElementById("INPUT").value
	data = input.trim().split ' '
	if data.length <= 1 then return
	pp = parseFloat data.pop()
	elos = (parseFloat item for item in data)
	document.getElementById("PR").innerText = performance(pp, elos).toFixed 6

calculate()

ass "1118", performance(0.0,[1500]).toFixed 0
ass "1500", performance(0.5,[1500]).toFixed 0
ass "1882", performance(1.0,[1500]).toFixed 0

ass "1161", performance(0.0,[1500,1600]).toFixed 0
ass "1356", performance(0.5,[1500,1600]).toFixed 0
ass "1550", performance(1.0,[1500,1600]).toFixed 0
ass "1744", performance(1.5,[1500,1600]).toFixed 0
ass "1939", performance(2.0,[1500,1600]).toFixed 0
