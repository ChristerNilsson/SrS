// Generated by CoffeeScript 2.7.0
var calculate, expected_score, performance, performance_rating, summa;

summa = function(arr) {
  var i, item, len, res;
  res = 0;
  for (i = 0, len = arr.length; i < len; i++) {
    item = arr[i];
    res += item;
  }
  return res;
};

expected_score = function(ratings, own_rating) {
  var rating;
  return summa((function() {
    var i, len, results;
    results = [];
    for (i = 0, len = ratings.length; i < len; i++) {
      rating = ratings[i];
      results.push(1 / (1 + 10 ** ((rating - own_rating) / 400)));
    }
    return results;
  })());
};

performance_rating = function(pp, ratings) {
  var hi, lo, rating;
  lo = 0;
  hi = 4000;
  while (hi - lo > 0.000001) {
    rating = (lo + hi) / 2;
    if (pp > expected_score(ratings, rating)) {
      lo = rating;
    } else {
      hi = rating;
    }
  }
  return rating.toFixed(3);
};

performance = function(pp, elos) {
  return performance_rating(pp, elos);
};

calculate = function() {
  var data, elos, input, item, pp;
  input = document.getElementById("INPUT").value;
  data = input.trim().split(' ');
  if (data.length <= 1) {
    return;
  }
  pp = parseFloat(data.pop());
  elos = (function() {
    var i, len, results;
    results = [];
    for (i = 0, len = data.length; i < len; i++) {
      item = data[i];
      results.push(parseFloat(item));
    }
    return results;
  })();
  return document.getElementById("PR").innerText = performance(pp, elos);
};

calculate();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwiLCJzb3VyY2VzIjpbIlNyU1xcS2x1YmJlblxcTWVkbGVtbWFyXFxDaHJpc3Rlcl9OaWxzc29uXFxQZXJmb3JtYW5jZV9DYWxjdWxhdG9yXFxpbmRleC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUEsU0FBQSxFQUFBLGNBQUEsRUFBQSxXQUFBLEVBQUEsa0JBQUEsRUFBQTs7QUFBQSxLQUFBLEdBQVEsUUFBQSxDQUFDLEdBQUQsQ0FBQTtBQUNSLE1BQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxHQUFBLEVBQUE7RUFBQyxHQUFBLEdBQU07RUFDTixLQUFBLHFDQUFBOztJQUNDLEdBQUEsSUFBTztFQURSO1NBRUE7QUFKTzs7QUFNUixjQUFBLEdBQWlCLFFBQUEsQ0FBQyxPQUFELEVBQVUsVUFBVixDQUFBO0FBQXdCLE1BQUE7U0FBQyxLQUFBOztBQUFPO0lBQUEsS0FBQSx5Q0FBQTs7bUJBQUEsQ0FBQSxHQUFJLENBQUMsQ0FBQSxHQUFJLEVBQUEsSUFBSSxDQUFDLENBQUMsTUFBQSxHQUFTLFVBQVYsQ0FBQSxHQUF3QixHQUF6QixDQUFUO0lBQUosQ0FBQTs7TUFBUDtBQUF6Qjs7QUFFakIsa0JBQUEsR0FBcUIsUUFBQSxDQUFDLEVBQUQsRUFBSyxPQUFMLENBQUE7QUFDckIsTUFBQSxFQUFBLEVBQUEsRUFBQSxFQUFBO0VBQUMsRUFBQSxHQUFLO0VBQ0wsRUFBQSxHQUFLO0FBQ0wsU0FBTSxFQUFBLEdBQUssRUFBTCxHQUFVLFFBQWhCO0lBQ0MsTUFBQSxHQUFTLENBQUMsRUFBQSxHQUFLLEVBQU4sQ0FBQSxHQUFZO0lBQ3JCLElBQUcsRUFBQSxHQUFLLGNBQUEsQ0FBZSxPQUFmLEVBQXdCLE1BQXhCLENBQVI7TUFDQyxFQUFBLEdBQUssT0FETjtLQUFBLE1BQUE7TUFHQyxFQUFBLEdBQUssT0FITjs7RUFGRDtTQU1BLE1BQU0sQ0FBQyxPQUFQLENBQWUsQ0FBZjtBQVRvQjs7QUFXckIsV0FBQSxHQUFjLFFBQUEsQ0FBQyxFQUFELEVBQUksSUFBSixDQUFBO1NBQWEsa0JBQUEsQ0FBbUIsRUFBbkIsRUFBc0IsSUFBdEI7QUFBYjs7QUFFZCxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7QUFDWixNQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQTtFQUFDLEtBQUEsR0FBUSxRQUFRLENBQUMsY0FBVCxDQUF3QixPQUF4QixDQUFnQyxDQUFDO0VBQ3pDLElBQUEsR0FBTyxLQUFLLENBQUMsSUFBTixDQUFBLENBQVksQ0FBQyxLQUFiLENBQW1CLEdBQW5CO0VBQ1AsSUFBRyxJQUFJLENBQUMsTUFBTCxJQUFlLENBQWxCO0FBQXlCLFdBQXpCOztFQUNBLEVBQUEsR0FBSyxVQUFBLENBQVcsSUFBSSxDQUFDLEdBQUwsQ0FBQSxDQUFYO0VBQ0wsSUFBQTs7QUFBUTtJQUFBLEtBQUEsc0NBQUE7O21CQUFBLFVBQUEsQ0FBVyxJQUFYO0lBQUEsQ0FBQTs7O1NBQ1IsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsSUFBeEIsQ0FBNkIsQ0FBQyxTQUE5QixHQUEwQyxXQUFBLENBQVksRUFBWixFQUFnQixJQUFoQjtBQU4vQjs7QUFRWixTQUFBLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJzdW1tYSA9IChhcnIpIC0+XHJcblx0cmVzID0gMFxyXG5cdGZvciBpdGVtIGluIGFyclxyXG5cdFx0cmVzICs9IGl0ZW1cclxuXHRyZXNcclxuXHJcbmV4cGVjdGVkX3Njb3JlID0gKHJhdGluZ3MsIG93bl9yYXRpbmcpIC0+IHN1bW1hICgxIC8gKDEgKyAxMCoqKChyYXRpbmcgLSBvd25fcmF0aW5nKSAvIDQwMCkpIGZvciByYXRpbmcgaW4gcmF0aW5ncylcclxuXHJcbnBlcmZvcm1hbmNlX3JhdGluZyA9IChwcCwgcmF0aW5ncykgLT5cclxuXHRsbyA9IDBcclxuXHRoaSA9IDQwMDBcclxuXHR3aGlsZSBoaSAtIGxvID4gMC4wMDAwMDFcclxuXHRcdHJhdGluZyA9IChsbyArIGhpKSAvIDJcclxuXHRcdGlmIHBwID4gZXhwZWN0ZWRfc2NvcmUgcmF0aW5ncywgcmF0aW5nXHJcblx0XHRcdGxvID0gcmF0aW5nXHJcblx0XHRlbHNlXHJcblx0XHRcdGhpID0gcmF0aW5nXHJcblx0cmF0aW5nLnRvRml4ZWQgM1xyXG5cclxucGVyZm9ybWFuY2UgPSAocHAsZWxvcykgLT4gcGVyZm9ybWFuY2VfcmF0aW5nIHBwLGVsb3NcclxuXHJcbmNhbGN1bGF0ZSA9IC0+XHJcblx0aW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIklOUFVUXCIpLnZhbHVlXHJcblx0ZGF0YSA9IGlucHV0LnRyaW0oKS5zcGxpdCAnICdcclxuXHRpZiBkYXRhLmxlbmd0aCA8PSAxIHRoZW4gcmV0dXJuXHJcblx0cHAgPSBwYXJzZUZsb2F0IGRhdGEucG9wKClcclxuXHRlbG9zID0gKHBhcnNlRmxvYXQgaXRlbSBmb3IgaXRlbSBpbiBkYXRhKVxyXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiUFJcIikuaW5uZXJUZXh0ID0gcGVyZm9ybWFuY2UgcHAsIGVsb3NcclxuXHJcbmNhbGN1bGF0ZSgpXHJcbiJdfQ==
//# sourceURL=c:\github\Seniorschack\SrS\Klubben\Medlemmar\Christer_Nilsson\Performance_Calculator\index.coffee