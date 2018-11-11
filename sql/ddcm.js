var table = document.getElementsByTagName("table")[0];

var row1 = table.insertRow(6);
var cell1 = row1.insertCell(0);

var row2 = table.insertRow(11);
var cell2 = row2.insertCell(0);

cell1.innerHTML = '<div id="formatted" style="font-size:15px; border-left: 1px dotted grey"></div>';
cell2.innerHTML = '<img width="100%" src="http://ddcmstud.ugent.be:443/files/radio-schema.png"/>'

document.getElementsByClassName("gwt-TextArea")[0].oninput = function(){changeValue()};
document.getElementsByClassName("gwt-ListBox")[3].onclick = function(){changeValue()};

 function changeValue(){
    var value = document.getElementsByClassName("gwt-TextArea")[0].value;
    value = value.replace(/(\*|>|!|=|<|')/g, '<span style="color:#25b220; font-size: 17px"><b>$1</b></span>');
    value = value.replace(/select/ig, '<span style="color:blue"><b>SELECT</b></span>');
    value = value.replace(/from/ig, '<span style="color:blue"><b>FROM</b></span><br/>');
    value = value.replace(/([^lL])(and|or)([^dD])/ig, '$1<span style="color:orange"><b>$2</b></span>$3');
    value = value.replace(/([^lL])(where)([^dD])/ig, '$1<span style="color:orange"><b>$2</b></span>$3<br/>');
    value = value.replace(/ (is|like|ilike|between|exists) /ig, '<span style="color:#c409ef"><b> $1 </b></span>');
    
    value = value.replace(/\(/g, '<span style="color:#f4425c; font-size: 17px">(</span><br/>');
    value = value.replace(/\)/g, '<br/><span style="color:#f4425c; font-size: 17px">)</span>');
    //value = value.replace(/,/g, '<span style="color:#f4425c; font-size: 17px">,</span>');
    
    
    value = value.replace(/not/ig, '<span style="color:#ff0000"><b>NOT</b></span>');
    
    value = value.replace(/(--.*)$/g, '<span style="color:#bcbcbc">$1</span>');
    
    value = value.replace(/([^a-zA-Z])(in|as)([^a-zA-Z])/ig, '$1<span style="color:#eb42f4"><b>$2</b></span>$3');
    
    value = value.replace(/([^a-zA-Z])(album|track|artist|playlistitem|radiobroadcast|radioprogram_presenter|radioprogram|presenter)([^a-zA-Z]|$)/g, '$1<span style="text-decoration: underline">$2</span>$3');
    
    
    
    value = value.replace(/(case|when|else|then| end)/ig, '<span style="color:#ef09b1"><b>$1</b></span>');
    value = value.replace(/([^A-Za-z0-9-_])(concat|all|count|max|min|cast|to_char|substring|avg|lower|upper|substr|round|date_trunc|age|replace|\|\|)([^a-zA-Z0-9-_])/ig, '$1<span style="color:#7c0101"><b>$2</b></span>$3');
    value = value.replace(/(nulls|null)/ig, '<span style="color:blue; font-family: Times New Roman, Times, serif; font-size: 18px; text-transform: lowercase;">$1</span>');

    value = value.replace(/join/ig, '<span style="color:#41c1f4"><b>JOIN</b></span>');
    value = value.replace(/([^a-zA-Z])(full|outer|inner|left|right|natural)([^a-zA-Z])/ig, '$1<span style="color:#3b9bdb; text-transform: uppercase">$2</span>$3');
    value = value.replace(/( on |using)/ig, '<span style="color:#0613cc">$1</span>');
    
    value = value.replace(/%/g, '<span style="color:#ff7029"><b>%</b></span>');
    
    value = value.replace(/distinct/ig, '<span style="color:#09c1b1"><b>DISTINCT</b></span>');
    value = value.replace(/limit/ig, '<span style="color:#473616"><b>LIMIT</b></span>');
    value = value.replace(/order by/ig, '<span style="color:#06cc7c"><b>ORDER BY</b></span>');
    value = value.replace(/( asc| desc)/ig, '<span style="color:#06cc7c">$1</span>');
    
    var temp = value.split("<br/>");
    var mleft = 4;
    document.getElementById("formatted").innerHTML = "";
    
    for(var i=0; i<temp.length; i++){
        if(temp[i].slice(45,46) == ")"){
            mleft -= 40;
        }
        document.getElementById("formatted").innerHTML += '<p style="margin: 3px 0px 3px ' + mleft + 'px;">' + temp[i] + '</p>';
        if(temp[i].slice(-8,-7) == "("){
            mleft += 40;
        }
    }
}
