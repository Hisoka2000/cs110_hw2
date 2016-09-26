<script>
const Space = function(spc){
if(spc === 0){
	return "";
}
return " " + Space(spc-1);
};

const Stars = function(str){
if(str === 0){
	return "";
}
return "*" + Stars(str-1); 
};

const Tool = function(n, str, spc) {
	if (n === 0) {
		return "";
	}
	else{console.log(Space(spc) + Stars(str));
	Tool((n-1), (str+2), (spc-1))};
};

const Final = function(n) {
Tool(n,1,n-1);
};
console.log(Final(10))
</script>