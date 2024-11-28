---
title: Inställningar
---

<!-- Se till att styles.css på rotnivå matchar nedanstående -->

<script>

	function setStorage(key,value){
		document.body.setAttribute(key, value);
		localStorage.setItem(key, value);
		console.log(key,value)
	}
	function setDefault(key,value) {
		if (localStorage.getItem(key) == null) {
			setStorage(key,value)
		} else {
			setStorage(key, localStorage.getItem(key))
		}
	}
</script>

### Tema

<a onclick="setStorage('theme','light')">Ljust</a>  
<a onclick="setStorage('theme','dark')">Mörkt</a>  

### Font

<a onclick="setStorage('font','Helvetica')">Helvetica</a>  
<a onclick="setStorage('font','Courier New')">Courier New</a>  
<a onclick="setStorage('font','Times New Roman')">Times New Roman</a>  

### Fontstorlek

<a onclick="setStorage('fontsize','14')">14</a>  
<a onclick="setStorage('fontsize','16')">16</a>  
<a onclick="setStorage('fontsize','18')">18</a>  
<a onclick="setStorage('fontsize','20')">20</a>  
<a onclick="setStorage('fontsize','22')">22</a>  
<a onclick="setStorage('fontsize','24')">24</a>  
<a onclick="setStorage('fontsize','26')">26</a>  
<a onclick="setStorage('fontsize','28')">28</a>  
