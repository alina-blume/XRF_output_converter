
function getMetadataForFileList(fileList) {
  for (const file of fileList) {
    // Not supported in Safari for iOS.
    const name = file.name ? file.name : 'NOT SUPPORTED';
    // Not supported in Firefox for Android or Opera for Android.
    const type = file.type ? file.type : 'NOT SUPPORTED';
    // Unknown cross-browser support.
    const size = file.size ? file.size : 'NOT SUPPORTED';
    console.log({file, name, type, size});
  }
}

	//mach was
		const inputElement = document.getElementById("input");
        inputElement.addEventListener("change", handleFiles, false); 
	

	function handleFiles() {
            const fileList1 = this.files; 
			console.log(fileList1);
            var reader = new FileReader();
			reader.readAsText(fileList1[0], 'utf-8')
			reader.onload = function(evt) {
                console.log(evt.target.result);
				coolstuff(evt.target.result);
            }

        } 

//------------------------------------------------------------------ 

	// Header Strings
	var header = "Element	Beschreibung	Methode	Auswertung	Na	Na_error	Mg	Mg_error	Al	Al_error	Si	Si_error	P	P_error	S	S_error	Cl	Cl_error	K	K_error	Ca	Ca_error	Ti	Ti_error	V	V_error	Cr	Cr_error	Mn	Mn_error	Fe	Fe_error	Co	Co_error	Ni	Ni_error	Cu	Cu_error	Zn	Zn_error	Ga	Ga_error	Ge	Ge_error	As	As_error	Se	Se_error	Br	Br_error	Rb	Rb_error	Sr	Sr_error	Y	Y_error	Zr	Zr_error	Nb	Nb_error	Mo	Mo_error	Ag	Ag_error	Cd	Cd_error	Sn	Sn_error	Sb	Sb_error	Te	Te_error	I	I_error	Cs	Cs_error	Ba	Ba_error	La	La_error	Ce	Ce_error	Pr	Pr_error	Nd	Nd_error	Er	Er_error	Yb	Yb_error	Hf	Hf_error	Ta	Ta_error	W	W_error	Hg	Hg_error	Tl	Tl_error	Pb	Pb_error	Bi	Bi_error	Th	Th_error	U	U_error	Summenkonzentration	";
	var einheiten = "Einheit				mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	mg/kg	Abs. Fehler ( mg/kg)	%";	

	
function coolstuff (uploadedData){
	processData(uploadedData);	
	

	// Funktion die Header und File zusammenfügt & in TSV umwandelt
	function processData(data) {
		
		var datum = data.substr(0, 10);
		var data = data.slice(1788);
		var merge = header + "\n" + data;
		var daten= d3.tsvParse(merge);
		
	// Header array & Dims
	var headerNames = d3.keys(daten[0]);
	var numberOfHeaders = headerNames.length;
	var lengthDaten = daten.length;
		
	// interieren und () und < löschen - all den Scheiß in function und loop
	var datenArray = [];
	
	for (var i=0; i<lengthDaten; i++){
		datenArray[i] = d3.values(daten[i]);
	}
	
	for (var i=0; i<lengthDaten; i++){
		datenArray[i].forEach(changeString)
	}

	for (var i = 0; i <lengthDaten; i++) { 
		for (var j = 4; j < numberOfHeaders; j++) { 
			if (datenArray[i][j] !== "Not available"){
				datenArray[i][j] = parseFloat(datenArray[i][j])
			}
		} 
	}  
	
	// --------------------------------------------------------------------
	//samplenumbers
	var samples = [];
	
	for (i=0; i <lengthDaten;i++) { 
		samples[i] = datenArray[i][0];
	}
	var sampleNumbers = _.uniq(samples);
	
	
	// array in TSV
	var umwandler= "";
	for (var i = 0; i <lengthDaten; i++) { 
	 umwandler += datenArray[i].join("	") + "\n";
	}  
	var doof = header + "\n" + umwandler;
	var sehrDoof= d3.tsvParse(doof);
	
	
	var tz=[];
	var versuch = [];
	var bla3 =[];

	
	// hier schleife anfangen	
	for (var n=0; n<sampleNumbers.length; n++){	
	 tz=_.filter(sehrDoof, { 'Element': sampleNumbers[n] });
		
		// wieder in 2 dim array
		for (var o=0; o<tz.length; o++){
		versuch[o] = d3.values(tz[o]);
		}
		for (var i = 0; i <versuch.length; i++) { 
			for (var j = 4; j < numberOfHeaders; j++) { 
				if (versuch[i][j] !== "Not available"){
					versuch[i][j] = parseFloat(versuch[i][j])
				}
			} 
		}  
		
		
		var Anzahl;
		var Zahl;
			
		for (var z = 4; z < numberOfHeaders; z++) {
			Anzahl = 1;	
			Zahl = 0;
			if (typeof(versuch[0][z]) === "number"){	
				Zahl = versuch[0][z]; 
			}
 
				for (y=1; y < versuch.length; y++) {
	
					if (versuch[0][0] !== versuch[y][0]){
						break;
						
					} else if (versuch[0][0] === versuch[y][0] && typeof(versuch[0][z]) === "number" && typeof(versuch[y][z]) === "number") {
						Anzahl++;
						Zahl += versuch[y][z];
							
					} else if (versuch[0][0] === versuch[y][0] && typeof(versuch[0][z]) !== "number" && typeof(versuch[y][z]) === "number"){
						Zahl += versuch[y][z];
							
					} else if (versuch[0][0] === versuch[y][0] && typeof(versuch[0][z]) === "number" && typeof(versuch[y][z]) !== "number"){
						break;
						
					} else if (versuch[0][0] === versuch[y][0] && typeof(versuch[0][z]) !== "number" && typeof(versuch[y][z]) !== "number"){
					
						break;
					}
				
				}
			
			if (Zahl !== 0){	
				versuch[0][z] = Zahl/Anzahl; 

			} else if (Zahl === 0) {
				versuch[0][z] = "Not available";
			}

		
		}
		
		// anhängen irgendwo
		bla3.push(versuch[0]);	
		
	}

	//console.log(bla3);

	// ---- hier schleife enden
	
	
	// back to string & . -> ,
  	for (var i = 0; i <bla3.length; i++) { 
		for (var j = 4; j < numberOfHeaders; j++) { 
			if (typeof(bla3[i][j]) === "number"){
			bla3[i][j] = bla3[i][j].toFixed(4);
			}
			if (bla3[i][j].includes(".") === true){
			bla3[i][j] = bla3[i][j].replace(".", ",");
			}
		} 
	}   
	
	// delete empty column
	for (var i = 0; i <bla3.length; i++) { 
		bla3[i] = bla3[i].slice(0,109);
	}
	console.log(bla3);

	//array to string & +header
	var bla= "";
	for (var i = 0; i <bla3.length; i++) { 
	 bla += (bla3[i].join("	") + "\n");
	}  
	
	//console.log(bla);
	var mergeIt = datum + "\n" + header+ "\n" + einheiten + "\n" + bla; 
	
	// save as local txt
	var file = new File([mergeIt], datum+"_RFA.txt", {type: "text/plain;charset=utf-8"});
	saveAs(file); 
	} 
 // meta in html

 
 
	
	// change strings
   	function changeString(item, index, arr) {
		if (item.includes("<")=== true){
			arr[index]="Not available";
		}
		if (item.includes("(") === true) {
			arr[index]="Not available";
		}
		if (item.includes(",") === true){
			arr[index]= arr[index].replace(/,/, '.');
		}
		if (item === "") {
			arr[index]="Not available";
		}
	}      
   	
}	
	
