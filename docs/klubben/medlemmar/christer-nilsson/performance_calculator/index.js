// Generated by CoffeeScript 2.7.0
var calculate, expected_score, extrapolate, performance, performance_rating, summa;

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
  while (Math.abs(hi - lo) > 0.001) {
    rating = (lo + hi) / 2;
    if (pp > expected_score(ratings, rating)) {
      lo = rating;
    } else {
      hi = rating;
    }
  }
  return rating; //.toFixed 6
};


// Använd två extremvärden då man har 0% eller 100%
extrapolate = function(a0, b0, elos) {
  var a, b;
  a = performance_rating(a0, elos);
  b = performance_rating(b0, elos);
  return b + b - a;
};

performance = function(pp, elos) {
  var n;
  n = elos.length;
  if (n === 1) {
    if (pp === 0) {
      return extrapolate(0.50, 0.25, elos);
    }
    if (pp === n) {
      return extrapolate(0.50, 0.75, elos);
    }
  } else {
    if (pp === 0) {
      return extrapolate(1, 0.5, elos);
    }
    if (pp === n) {
      return extrapolate(n - 1, n - 0.5, elos);
    }
  }
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
  return document.getElementById("PR").innerText = performance(pp, elos).toFixed(6);
};

calculate();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwiLCJzb3VyY2VzIjpbImNvbnRlbnRcXGtsdWJiZW5cXG1lZGxlbW1hclxcY2hyaXN0ZXItbmlsc3NvblxcUGVyZm9ybWFuY2VfQ2FsY3VsYXRvclxcaW5kZXguY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFBLFNBQUEsRUFBQSxjQUFBLEVBQUEsV0FBQSxFQUFBLFdBQUEsRUFBQSxrQkFBQSxFQUFBOztBQUFBLEtBQUEsR0FBUSxRQUFBLENBQUMsR0FBRCxDQUFBO0FBQ1IsTUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQTtFQUFDLEdBQUEsR0FBTTtFQUNOLEtBQUEscUNBQUE7O0lBQ0MsR0FBQSxJQUFPO0VBRFI7U0FFQTtBQUpPOztBQU1SLGNBQUEsR0FBaUIsUUFBQSxDQUFDLE9BQUQsRUFBVSxVQUFWLENBQUE7QUFBd0IsTUFBQTtTQUFDLEtBQUE7O0FBQU87SUFBQSxLQUFBLHlDQUFBOzttQkFBQSxDQUFBLEdBQUksQ0FBQyxDQUFBLEdBQUksRUFBQSxJQUFJLENBQUMsQ0FBQyxNQUFBLEdBQVMsVUFBVixDQUFBLEdBQXdCLEdBQXpCLENBQVQ7SUFBSixDQUFBOztNQUFQO0FBQXpCOztBQUVqQixrQkFBQSxHQUFxQixRQUFBLENBQUMsRUFBRCxFQUFLLE9BQUwsQ0FBQTtBQUNyQixNQUFBLEVBQUEsRUFBQSxFQUFBLEVBQUE7RUFBQyxFQUFBLEdBQUs7RUFDTCxFQUFBLEdBQUs7QUFDTCxTQUFNLElBQUksQ0FBQyxHQUFMLENBQVMsRUFBQSxHQUFLLEVBQWQsQ0FBQSxHQUFvQixLQUExQjtJQUNDLE1BQUEsR0FBUyxDQUFDLEVBQUEsR0FBSyxFQUFOLENBQUEsR0FBWTtJQUNyQixJQUFHLEVBQUEsR0FBSyxjQUFBLENBQWUsT0FBZixFQUF3QixNQUF4QixDQUFSO01BQ0MsRUFBQSxHQUFLLE9BRE47S0FBQSxNQUFBO01BR0MsRUFBQSxHQUFLLE9BSE47O0VBRkQ7U0FNQSxPQVRvQjtBQUFBLEVBUnJCOzs7O0FBb0JBLFdBQUEsR0FBYyxRQUFBLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxJQUFULENBQUE7QUFDZCxNQUFBLENBQUEsRUFBQTtFQUFDLENBQUEsR0FBSSxrQkFBQSxDQUFtQixFQUFuQixFQUFzQixJQUF0QjtFQUNKLENBQUEsR0FBSSxrQkFBQSxDQUFtQixFQUFuQixFQUFzQixJQUF0QjtTQUNKLENBQUEsR0FBSSxDQUFKLEdBQVE7QUFISzs7QUFLZCxXQUFBLEdBQWMsUUFBQSxDQUFDLEVBQUQsRUFBSSxJQUFKLENBQUE7QUFDZCxNQUFBO0VBQUMsQ0FBQSxHQUFJLElBQUksQ0FBQztFQUNULElBQUcsQ0FBQSxLQUFLLENBQVI7SUFDQyxJQUFHLEVBQUEsS0FBTSxDQUFUO0FBQWdCLGFBQU8sV0FBQSxDQUFZLElBQVosRUFBaUIsSUFBakIsRUFBc0IsSUFBdEIsRUFBdkI7O0lBQ0EsSUFBRyxFQUFBLEtBQU0sQ0FBVDtBQUFnQixhQUFPLFdBQUEsQ0FBWSxJQUFaLEVBQWlCLElBQWpCLEVBQXNCLElBQXRCLEVBQXZCO0tBRkQ7R0FBQSxNQUFBO0lBSUMsSUFBRyxFQUFBLEtBQU0sQ0FBVDtBQUFnQixhQUFPLFdBQUEsQ0FBYyxDQUFkLEVBQWtCLEdBQWxCLEVBQXNCLElBQXRCLEVBQXZCOztJQUNBLElBQUcsRUFBQSxLQUFNLENBQVQ7QUFBZ0IsYUFBTyxXQUFBLENBQVksQ0FBQSxHQUFFLENBQWQsRUFBZ0IsQ0FBQSxHQUFFLEdBQWxCLEVBQXNCLElBQXRCLEVBQXZCO0tBTEQ7O1NBTUEsa0JBQUEsQ0FBbUIsRUFBbkIsRUFBc0IsSUFBdEI7QUFSYTs7QUFVZCxTQUFBLEdBQVksUUFBQSxDQUFBLENBQUE7QUFDWixNQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQTtFQUFDLEtBQUEsR0FBUSxRQUFRLENBQUMsY0FBVCxDQUF3QixPQUF4QixDQUFnQyxDQUFDO0VBQ3pDLElBQUEsR0FBTyxLQUFLLENBQUMsSUFBTixDQUFBLENBQVksQ0FBQyxLQUFiLENBQW1CLEdBQW5CO0VBQ1AsSUFBRyxJQUFJLENBQUMsTUFBTCxJQUFlLENBQWxCO0FBQXlCLFdBQXpCOztFQUNBLEVBQUEsR0FBSyxVQUFBLENBQVcsSUFBSSxDQUFDLEdBQUwsQ0FBQSxDQUFYO0VBQ0wsSUFBQTs7QUFBUTtJQUFBLEtBQUEsc0NBQUE7O21CQUFBLFVBQUEsQ0FBVyxJQUFYO0lBQUEsQ0FBQTs7O1NBQ1IsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsSUFBeEIsQ0FBNkIsQ0FBQyxTQUE5QixHQUEwQyxXQUFBLENBQVksRUFBWixFQUFnQixJQUFoQixDQUFxQixDQUFDLE9BQXRCLENBQThCLENBQTlCO0FBTi9COztBQVFaLFNBQUEsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbInN1bW1hID0gKGFycikgLT5cclxuXHRyZXMgPSAwXHJcblx0Zm9yIGl0ZW0gaW4gYXJyXHJcblx0XHRyZXMgKz0gaXRlbVxyXG5cdHJlc1xyXG5cclxuZXhwZWN0ZWRfc2NvcmUgPSAocmF0aW5ncywgb3duX3JhdGluZykgLT4gc3VtbWEgKDEgLyAoMSArIDEwKiooKHJhdGluZyAtIG93bl9yYXRpbmcpIC8gNDAwKSkgZm9yIHJhdGluZyBpbiByYXRpbmdzKVxyXG5cclxucGVyZm9ybWFuY2VfcmF0aW5nID0gKHBwLCByYXRpbmdzKSAtPlxyXG5cdGxvID0gMFxyXG5cdGhpID0gNDAwMFxyXG5cdHdoaWxlIE1hdGguYWJzKGhpIC0gbG8pID4gMC4wMDFcclxuXHRcdHJhdGluZyA9IChsbyArIGhpKSAvIDJcclxuXHRcdGlmIHBwID4gZXhwZWN0ZWRfc2NvcmUgcmF0aW5ncywgcmF0aW5nXHJcblx0XHRcdGxvID0gcmF0aW5nXHJcblx0XHRlbHNlXHJcblx0XHRcdGhpID0gcmF0aW5nXHJcblx0cmF0aW5nICMudG9GaXhlZCA2XHJcbiBcclxuIyBBbnbDpG5kIHR2w6UgZXh0cmVtdsOkcmRlbiBkw6UgbWFuIGhhciAwJSBlbGxlciAxMDAlXHJcbmV4dHJhcG9sYXRlID0gKGEwLCBiMCwgZWxvcykgLT5cclxuXHRhID0gcGVyZm9ybWFuY2VfcmF0aW5nIGEwLGVsb3NcclxuXHRiID0gcGVyZm9ybWFuY2VfcmF0aW5nIGIwLGVsb3NcclxuXHRiICsgYiAtIGFcclxuXHJcbnBlcmZvcm1hbmNlID0gKHBwLGVsb3MpIC0+IFxyXG5cdG4gPSBlbG9zLmxlbmd0aFxyXG5cdGlmIG4gPT0gMVxyXG5cdFx0aWYgcHAgPT0gMCB0aGVuIHJldHVybiBleHRyYXBvbGF0ZSAwLjUwLDAuMjUsZWxvc1xyXG5cdFx0aWYgcHAgPT0gbiB0aGVuIHJldHVybiBleHRyYXBvbGF0ZSAwLjUwLDAuNzUsZWxvc1xyXG5cdGVsc2VcclxuXHRcdGlmIHBwID09IDAgdGhlbiByZXR1cm4gZXh0cmFwb2xhdGUgICAxLCAgMC41LGVsb3NcclxuXHRcdGlmIHBwID09IG4gdGhlbiByZXR1cm4gZXh0cmFwb2xhdGUgbi0xLG4tMC41LGVsb3NcclxuXHRwZXJmb3JtYW5jZV9yYXRpbmcgcHAsZWxvc1xyXG5cclxuY2FsY3VsYXRlID0gLT5cclxuXHRpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiSU5QVVRcIikudmFsdWVcclxuXHRkYXRhID0gaW5wdXQudHJpbSgpLnNwbGl0ICcgJ1xyXG5cdGlmIGRhdGEubGVuZ3RoIDw9IDEgdGhlbiByZXR1cm5cclxuXHRwcCA9IHBhcnNlRmxvYXQgZGF0YS5wb3AoKVxyXG5cdGVsb3MgPSAocGFyc2VGbG9hdCBpdGVtIGZvciBpdGVtIGluIGRhdGEpXHJcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJQUlwiKS5pbm5lclRleHQgPSBwZXJmb3JtYW5jZShwcCwgZWxvcykudG9GaXhlZCA2XHJcblxyXG5jYWxjdWxhdGUoKVxyXG4iXX0=
//# sourceURL=c:\github\SrS\content\klubben\medlemmar\christer-nilsson\Performance_Calculator\index.coffee