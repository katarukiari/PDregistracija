//FUNKCIJA PALAISTA PEDAGOĢISKĀ UZSKAITES LAPĀ [ATLASE.PHP]
var links = "localhost/";
 //var links = "http://stdb.rvt.lv/";
function pedagogiskas_uzskaites_lapa ()
{  
   $('#prieksmets').change(function() //FUNKCIJA SELEC TAGAM UZ ATLASI PĒC PRIEKŠMETA ID
   {
	$.blockUI({ message: '<div style = "padding:10px; font-style:Tahoma; font-weight:bold; font-size:12px;"><img src="ielade.gif"/> Lūdzu uzgaidiet, notiek pierasīto datu ielāde!</div>' }); //pieprasītu datu ielāde
		$('#grupa').val("0"); //tiek piešķirts select izvēlies grupa vērtību
		$('#skolotajs').val("0"); //tiek piešķirts select izvēlies skolotāju vērtību
		
        var prieksmets_v = $("#prieksmets").val(); 
		if(prieksmets_v == 115) //EKSĀMENIEM IR CITI PARAMETRI
			{//eksamena vērtiba
			//	$('#aprekinat_p').hide(); //pogas paslēpšanas 
				// $('#saglabat_p').hide(); //saglabasanas pogas paslēpšana
				$.post('eksameni.php', {},  function(data) {
					$('#saturs1').html(data);
				}); 
				$.unblockUI(); //kad viss ir ielādēts noņemt kļūdas paziņojum
			}
			else if(prieksmets_v == 2) //audzinasana IR CITI PARAMETRI
				{
					 $('#saglabat_p').hide(); //saglabasanas pogas paslēpšana
					 $('#aprekinat_p').hide(); //saglabasanas pogas paslēpšana
					 $('#izdruka').hide(); //saglabasanas pogas paslēpšana
						$.post('audzinasana.php', {},  function(data) {
						$('#saturs1').html(data);
					}); 
					$.unblockUI(); //kad viss ir ielādēts noņemt kļūdas paziņojum
				}
			
		else if(prieksmets_v != 115)
			{
				//$.blockUI({ message: '<div style = "padding:10px; font-style:Tahoma; font-weight:bold; font-size:12px;"><img src="ielade.gif"/> Lūdzu uzgaidiet, notiek pierasīto datu ielāde!</div>' }); //pieprasītu datu ielāde
				$.post('gr_sk_pr', {pr:prieksmets_v},  function(data) 
				{
					$('#saturs1').html(data);
					$('#aprekinat_p').html('<input type = "submit" name = "atlase" value = "Aprēķināt" id="aprekinat" class ="pogas" style="margin-left:10px;"/>');
					parbaudes();
					rekinat();
					vertibu_pieskirsana();
					prieksmetu_drukasana();
					$(".dzest").click(function()
					{//IERAKSTA DZĒSANA           
						$(this).parent('td').parent('tr').fadeOut();
						$(this).parent('td').parent('tr').html("<b>Ieraksts dzēsts! Lūdzu atlasiet grupu pa jaunam!</b>").fadeIn();
						var dzest_id = $(this).next().val(); //ID IEGŪŠANA, LAI VARĒTU DZĒST KONKRĒTU IERAKSTU
						$.post('dzest_atlasi.php', {dzest_atlasito_post: dzest_id},  function(data){}); 
					});//CLICK FUNKCIJAS BEIGAS
				$.unblockUI(); //kad viss ir ielādēts noņemt kļūdas paziņojumu
				}); //POST FUNKCIJAS BEIGAS
			$.unblockUI(); //kad viss ir ielādēts noņemt kļūdas paziņojum
			}
		
		else if(prieksmets_v != 2)
			{
				//$.blockUI({ message: '<div style = "padding:10px; font-style:Tahoma; font-weight:bold; font-size:12px;"><img src="ielade.gif"/> Lūdzu uzgaidiet, notiek pierasīto datu ielāde!</div>' }); //pieprasītu datu ielāde
				$.post('gr_sk_pr', {pr:prieksmets_v},  function(data) 
				{
					$('#saturs1').html(data);
					$('#aprekinat_p').html('<input type = "submit" name = "atlase" value = "Aprēķināt" id="aprekinat" class ="pogas" style="margin-left:10px;"/>');
					parbaudes();
					rekinat();
					vertibu_pieskirsana();
					prieksmetu_drukasana();
					$(".dzest").click(function()
					{//IERAKSTA DZĒSANA           
						$(this).parent('td').parent('tr').fadeOut();
						$(this).parent('td').parent('tr').html("<b>Ieraksts dzēsts! Lūdzu atlasiet grupu pa jaunam!</b>").fadeIn();
						var dzest_id = $(this).next().val(); //ID IEGŪŠANA, LAI VARĒTU DZĒST KONKRĒTU IERAKSTU
						$.post('dzest_atlasi.php', {dzest_atlasito_post: dzest_id},  function(data){}); 
					});//CLICK FUNKCIJAS BEIGAS
				$.unblockUI(); //kad viss ir ielādēts noņemt kļūdas paziņojumu
				}); //POST FUNKCIJAS BEIGAS
			$.unblockUI(); //kad viss ir ielādēts noņemt kļūdas paziņojum
			}
		
	});//CHANGE FUNCKIJAS BEIGAS
	
   $('#grupa').change(function() //FUNKCIJA SELECT TAGAM UZ ATLASI PĒC PRIEKŠMETA ID
   {
		$.blockUI({ message: '<div style = "padding:10px; font-style:Tahoma; font-weight:bold; font-size:12px;"><img src="ielade.gif"/> Lūdzu uzgaidiet, notiek pierasīto datu ielāde!</div>' }); //pieprasītu datu ielāde
		$('#prieksmets').val("0"); //tiek piešķirts select izvēlies prieksmets vērtību
		$('#skolotajs').val("0"); //tiek piešķirts select izvēlies skolotāju vērtību
		var grupas_v = $("#grupa").val();     
		$.post('gr_sk_pr', {gr: grupas_v},  function(data) 
		{
			$('#saturs1').html(data);
			$('#aprekinat_p').html('<input type = "submit" name = "atlase" value = "Aprēķināt" id="aprekinat" class ="pogas" style="margin-left:10px;"/>');
			parbaudes();
			rekinat();
			grupas_drukasana();
			vertibu_pieskirsana();
			$(".dzest").click(function()
			{//IERAKSTA DZĒSANA              
				$(this).parent('td').parent('tr').fadeOut();
				$(this).parent('td').parent('tr').html("<b>Ieraksts dzēsts! Lūdzu, atlasiet grupu pa jaunam!</b>").fadeIn();
				var dzest_id = $(this).next().val(); 
				$.post('dzest_atlasi', {dzest_atlasito_post: dzest_id},  function(data) {}); 
			});
			$(".labot").click(function()
			{//labošana
				var labot_id = $(this).next().val();
				$.post('labot_atlasi', {labot_atlasito_post: labot_id},  function(data) {}); 
			});
		});
		$.unblockUI(); //kad viss ir ielādēts noņemt kļūdas paziņojum
	});
   
   $('#skolotajs').change(function() //FUNKCIJA SELECT TAGAM UZ ATLASI PĒC PRIEKŠMETA ID
    { 
		$.blockUI({ message: '<div style = "padding:10px; font-style:Tahoma; font-weight:bold; font-size:12px;"><img src="ielade.gif"/> Lūdzu uzgaidiet, notiek pierasīto datu ielāde!</div>' }); //pieprasītu datu ielāde
		$('#grupa').val("0"); //tiek piešķirts select izvēlies grupa vērtību
		$('#prieksmets').val("0"); //tiek piešķirts select izvēlies skolotāju vērtību
		var skolotajs_v = $("#skolotajs").val();
		$.post('gr_sk_pr', {sk:skolotajs_v},  function(data) 
		{
			$('#saturs1').html(data);
			$('#aprekinat_p').html('<input type = "submit" name = "atlase" value = "Aprēķināt" id="aprekinat" class ="pogas" style="margin-left:10px;"/>');
			parbaudes();
			rekinat();
			skolotajas_drukasana();
			vertibu_pieskirsana();
			$("#stundas").text($("#audzgrst").val()); //stundu atspoguļošanas pie skolotāja atlases
			$("#stundas2").text($("#audzgrst2").val()); //stundu atspoguļošanas pie skolotāja atlases
			$(".dzest").click(function()
			{           
				$(this).parent('td').parent('tr').fadeOut();
				$(this).parent('td').parent('tr').html("<b>Ieraksts dzēsts! Lūdzu, atlasiet grupu pa jaunam!</b>").fadeIn();
				var dzest_id = $(this).next().val(); //id iegūšana, lai attiecīgo rindu varētu dzēst
            $.post('dzest_atlasi', {dzest_atlasito_post: dzest_id},  function(data) {}); 
			});
			$.unblockUI(); //kad viss ir ielādēts noņemt kļūdas paziņojum
		});
	});
    
	//FUNKCIJA TIEK PALAISTA, KAD IR IR ATLASĪTS KĀDS NO KRITĒRIJIEM
	function rekinat()
	{
		$("#aprekinat").click(function () 
		{
			var n=0;
			$("input[id*=c]").each(function(n)
			{
				//atrodam visus c, kur tiks izvadītts rezultāts un par katru c palielinam a,b,c
				semestris("#akl"+n,"#b"+n,"#c"+n, "#cc"+n);   //saskaita I semestri kopā
				semestris("#z"+n,"#m"+n,"#h"+n, "#ccc"+n);  //saskaita II semestri kopā
				teorija("#c"+n, "#h"+n, "#teorija"+n, "#pirma_grupa"+n, "#teorijas1"+n); // teorijas funkcija teorijas1
				otra_pusgrupa("#audz_sk"+n, "#pirma_grupa"+n, "#otra_grupa"+n, "#otra_grupas1"+n); //otras grupas funkcija otra_grupas1
				kopa("#c"+n, "#h"+n, "#otra_grupa"+n, "#k"+n, "#kk1"+n); //kopa 
				rakstu_darbi("#k"+n, "#audz_sk"+n, "#rakstu_darbi"+n, "#rakstu_darbs1"+n, "#prieksmets"+n);//rakstu darbu formula
				invidualie_darbi_gatavosanas_stundam("#k"+n, "#ind_darbs"+n, "#ind_darbi1"+n, "#audz_sk"+n, "#prieksmets"+n);
				invidualie_darbi_gatavosanas_stundam("#k"+n, "#gatav_st"+n, "#gatav_stu1"+n, "#audz_sk"+n, "#prieksmets"+n);
				pavisam_kopa("#k"+n, "#rakstu_darbi"+n, "#ind_darbs"+n, "#gatav_st"+n, "#p_k"+n, "#ps_k1"+n);
			});//each funkcijas beigas
			//KOPĀ PAR KOLONNĀM
			kopa_kolonnas("input[id*=rakstu_darbi]", "#rd_k", "#rd_k1");
			kopa_kolonnas_veselie("input[id*=ind_darbs]", "#id_k", "#id_ko1");
			kopa_kolonnas_veselie("input[id*=gatav_st]", "#g_s", "#g_ss1");
			
			kopa_kolonnas_veselie("input[id^=akl]", "#st1", "#st12");
			kopa_kolonnas_veselie("input[id^=z]", "#stz1", "#stz12");
			
			kopa_kolonnas_eksamens("input[id^=k]", "#ak_k", "#akkk_k1");
			pavisam_kopa_kolonnas("input[id^=p_k]", "#pp_k", "#ppp_k1");
			alert("Lūdzu saglabājiet aprēķina datus, spiežot uz pogas 'saglabāt'!");
		}); //click funkcijas beigas 
		
   } 

	function semestris(aa, bb, cc, ccc)
	{//funkcija kas visu saskaita
       var st = parseFloat($(aa).val()); //pārveidoam string par un pārbaudam vai tas ir skaitlis
       var ned = parseFloat($(bb).val()); //pārveidoam string par un pārbaudam vai tas ir skaitlis
       var kopa = st * ned; //piešķiram vērtību
       $(cc).val(kopa);  
       $(ccc).text(kopa); 
    }  //kopā funkcijas beigas
	
	function teorija (kop1, kop2, teor, gr, teorijas1) 
	{
		var kopa1 = parseFloat($(kop1).val());  
		var kopa2 = parseFloat($(kop2).val()); 
		var grupa = parseFloat($(gr).val());
		var t = (kopa1 + kopa2) - grupa;
		$(teor).val(t); 
		$(teorijas1).text(t);
	}
	
	function otra_pusgrupa(a_sk, gr, gr_divi, otra_grupas1)
	{
		var audz = parseFloat($(a_sk).val());
		var pirma_grupa = parseFloat($(gr).val());
		var otra_grupa = 0;
		if(audz > 25)
		{
			audz = 25; 
			otra_grupa = (((2*audz-25)/25)*pirma_grupa).toFixed(0);
			$(gr_divi).val(otra_grupa);  
			$(otra_grupas1).text(otra_grupa);
		}
		else 
		{
			otra_grupa = (((2*audz-25)/25)*pirma_grupa).toFixed(0);
			$(gr_divi).val(otra_grupa);  
			$(otra_grupas1).text(otra_grupa);
		}
    }
	
	function kopa(kop1, kop2, otr_grupa, k, k1)
	{
        var kopa1 =  parseFloat($(kop1).val());
        var kopa2 =  parseFloat($(kop2).val());
        var otr_grupa2 = parseFloat($(otr_grupa).val());
        var kk = kopa1 + kopa2 + otr_grupa2;
        $(k).val(kk);  
        $(k1).text(kk);
    }
	
	function rakstu_darbi(k, au_sk, r_d, r_d1, pr)
	{
		var k1 =  parseFloat($(k).val());
		var au_sk1 =  parseFloat($(au_sk).val());
		var prieksmeti = ($(pr).val());
        // masivs1 = [ "Literatūra",  "Angļu valoda",  "Krievu valoda", "Vācu valoda", "Matemātika",  "Latviešu valoda"];
        var masivs1 = [ "116",  "5",  "44", "104", "54",  "46"];
        //var masivs2 = [ "Fizika",  "Ķīmija",  "Ģeogrāfija", "Vēsture", "Ekonomika", "Saskarsme", "Latvijas un pasaules vēsture", "Lietišķā informātika", "Informātika", "Tiesību pamati", "Dabas zinības"];
        var masivs2 = [ "33",  "39", "86", "26", "87", "35", "48", "88", "118", "16", "197", "156"]; //pēdējā vēsture
        //var masivs3 = ["Kvalifikācijas prakse"];
        var masivs3 = ["153"];
		if($.inArray(prieksmeti,masivs1) > -1) 
		{
             rd1 = (k1 * 0.2857 * (au_sk1/30)).toFixed(2);
             $(r_d).val(rd1);  
             $(r_d1).text(rd1);
             
        }
        if($.inArray(prieksmeti,masivs2) > -1) 
		{
             rd1 = (k1 * 0.0476 * (au_sk1/30)).toFixed(2);
             $(r_d).val(rd1);  
             $(r_d1).text(rd1); 
        }
        //kvalifikacijas praskei jābūt 0 vērtībai
        if($.inArray(prieksmeti,masivs3) > -1) 
		{
             rd1 = 0;
             $(r_d).val(rd1);  
             $(r_d1).text(rd1); 
        }
   
    }
	
	function invidualie_darbi_gatavosanas_stundam(k, i_d, i_d1, a_sk, pr)
	{
		var k1 = parseInt($(k).val());
        var audz_sk = parseInt($(a_sk).val()); 
        var darbi_rez = 0;
        var prieksmets = $(pr).val();
        if(audz_sk >= 25) 
		{
			 darbi_rez = (k1 * 0.095).toFixed(0);
			 $(i_d).val(darbi_rez);
			 $(i_d1).text(darbi_rez);
        }
       if((audz_sk < 25) && (audz_sk >=17) ) 
	   {
			darbi_rez = (k1 * 0.095 * (audz_sk/25)).toFixed(0);
			$(i_d).val(darbi_rez);
			$(i_d1).text(darbi_rez);
       }
        if(audz_sk < 17) 
		{
			 darbi_rez = (k1 * 0.095 * (audz_sk/25)).toFixed(0);
			 $(i_d).val(darbi_rez);
			 $(i_d1).text(darbi_rez);
		}
  //KVALIFIKACIJAS RRAKSE ID 153 kvalifikācijas prakse datu bāzē
       if(prieksmets == 153)
	   {
			$(i_d).val("0");
			$(i_d1).text("0");
       }
     // alert(prieksmets);
    }
	
	function pavisam_kopa(k, r_d, i_d, g_s, p_k, p_k1)
	{
		var k1 =  parseFloat($(k).val()) ;
        var r_d1 = parseFloat($(r_d).val());
        var i_d1 = parseFloat($(i_d).val()) || 0;
        var g_s1 = parseFloat($(g_s).val()) || 0;
        var rez = (k1 + i_d1 + g_s1 + r_d1).toFixed(2);
        $(p_k).val(rez);
        $(p_k1).text(rez);
	}  
	
	function kopa_kolonnas(lauks, lauks2, lauks3)
	{
		var kopa = 0;   
		$(lauks).each( function()
		{
            kopa += parseFloat($(this).val()) || 0;      
		});
		$(lauks2).val((kopa.toFixed(2)));
		$(lauks3).text((kopa.toFixed(2)));
    }
	
	
	
	//kopa + eksāmens nepieciešmas pieskaitīt klāt eksāmenu
		function kopa_kolonnas_eksamens(lauks, lauks2, lauks3)
	{
		var rezultats = 0;
		var kopa = 0;  
		//var eksamens = 0;
		//var eksamens = parseFloat($("#eks").val());
		//pārbaude vai lauks eksāmens ir 		 
		$(lauks).each( function()
		{
            kopa += parseFloat($(this).val()) || 0;      
		});
		rezultats = kopa;
		//eksāmens pieskaite pie kopā atlase
		//alert(rezultats + "=" + kopa + "+" + eksamens);
		$(lauks2).val((rezultats.toFixed(2)));
		$(lauks3).text((rezultats.toFixed(2)));
    }
	
	//pavisam kopā 
    function pavisam_kopa_kolonnas(lauks, lauks2, lauks3)
	{
		var eksamens = 0;
		var eksamens = parseFloat($("#eks").val());
		var kopa = 0;   
		var pavisam_kopa = 0;
		if($.isNumeric($("#eks").val()) == false) 
		{
			var eksamens = 0;
		}
		$(lauks).each( function()
		{
			kopa += parseFloat($(this).val()) || 0;      
		});
		var lauks4 = ($("#audzgrst").val()) || 0;
		var lauks5 = ($("#audzgrst2").val()) || 0;
		pavisam_kopa = parseFloat(lauks4) + kopa + parseFloat(lauks5) + eksamens; //audzināšana tiek pieskaitīta
		$(lauks2).val((pavisam_kopa.toFixed(2))); 
		$(lauks3).text((pavisam_kopa.toFixed(2)));
    }
	
	function kopa_kolonnas_veselie(lauks, lauks2, lauks3)
	{
		var kopa = 0;   
		$(lauks).each( function()
		{
			kopa += parseInt($(this).val()) || 0;      
		});
    $(lauks2).val(kopa);
    $(lauks3).text((kopa));
    }
 
 
 //LAUKU PĀRBAUDES FUNKCIJAS
    function parbaudes()
	{
		$(":text").change(function()
		{ //parbaude vai tiek ievaditi skaitli
			if($.isNumeric($(this).val()) == false) 
			{
			   alert("Ievadīts nepareizs simbols. Lūdzu, ievadiet skaitli!");
			   $(this).val("0");
			}
			if(($.isNumeric($(this).val())) == true) 
			{//pārbaude vai ri ievadīti veseli skaitļi intervālā no 0-300
					if(($(this).val() > 300) || ($(this).val() < 0))
					{
						alert("Ievadīts skaitlis, kurš nav intervālā no 0 līdz 300. Lūdzu, ievadiet skaitli intervālā no 0 līdz 300!");
					}
			}        
		});
		$(":text").click(function()
		{//nodzēš vētību uz klikšķa input laukos
			$(this).val("");   
		});
		
		$(":text").focusout(function()
		{ //parbaude vai tiek ievaditi skaitli
			if($(this).val() == "") 
			{
			   alert("Ievadlauks atstāts tukšs. Lūdzu, ievadiet skaitli!");
			}
		});
    }
    
    function grupas_drukasana()
	{
		$('#izdruka').html('<input type = "submit" name = "izdruka" value = "izdruka" id="izdruka" class ="pogas" style="margin-left:10px;"/>');
        $('#izdruka').click(function() 
		{
			var grupas_v = $("#grupa").val();
            var sk_v = "";
			var pr_v = "";
			$('#saturs2').html("<a href = './izdrukas/izd_atlase?gr="+grupas_v+"&sk="+sk_v+"&pr="+pr_v+"' target='_blank'>Izdruka uz pdf</a>");  
        });
		
		///////////izdrukas linka paslēpšana///
		$('#grupa').change(function() 
	   {
			$('#saturs2').hide();
	   });
		$('#saturs2').click(function(){
			$('#saturs2').hide();
		});
		$('#izdruka').click(function(){
			$('#saturs2').show();
		});
    }
  
    function skolotajas_drukasana()
	{
        $('#izdruka').html('<input type = "submit" name = "izdruka" value = "izdruka" id="izdruka" class ="pogas" style="margin-left:10px;"/>');
        $('#izdruka').click(function() 
		{
            var grupas_v = "";
            var sk_v = $("#skolotajs").val();
            var pr_v = "";       
			$('#saturs2').html("<a href = './izdrukas/izd_atlase?gr="+grupas_v+"&sk="+sk_v+"&pr="+pr_v+"' target='_blank'>Izdruka uz pdf</a>");  
        });
    
		///////////izdrukas linka paslēpšana///
		$('#skolotajs').change(function() 
	   {
			$('#saturs2').hide();
	   });
		$('#saturs2').click(function(){
			$('#saturs2').hide();
		});
		$('#izdruka').click(function(){
			$('#saturs2').show();
		});
	
	}
	
   function prieksmetu_drukasana()
   {
        $('#izdruka').html('<input type = "submit" name = "izdruka" value = "izdruka" id="izdruka" class ="pogas" style="margin-left:10px;"/>');
        $('#izdruka').click(function() 
		{
            var grupas_v = "";
            var pr_v = $("#prieksmets").val();
			var sk_v = "";     
			$('#saturs2').html("<a href = './izdrukas/izd_atlase?gr="+grupas_v+"&sk="+sk_v+"&pr="+pr_v+"' target='_blank'>Izdruka uz pdf</a>");  
        });
    	///////////izdrukas linka paslēpšana///
		$('#prieksmets').change(function() 
	   {
			$('#saturs2').hide();
	   });
		$('#saturs2').click(function(){
			$('#saturs2').hide();
		});
		$('#izdruka').click(function(){
			$('#saturs2').show();
		});
	}
	
	function vertibu_pieskirsana ()
	{
		var n = 0;
		 $("input[id*=c]").each(function(n)
		 { 
			 var rakstu_darbi = $("#rakstu_darbi"+n).val();$("#rakstu_darbs1"+n).text(rakstu_darbi);
			 var ind_darbs = $("#ind_darbs"+n).val();$("#ind_darbi1"+n).text(ind_darbs);
			 var gatav_st = $("#gatav_st"+n).val();$("#gatav_stu1"+n).text(gatav_st);
			 var teorija = $("#teorija"+n).val();$("#teorijas1"+n).text(teorija);
			 var c = $("#c"+n).val();$("#cc"+n).text(c);
			 var h = $("#h"+n).val();$("#ccc"+n).text(h);
			 var otra_grupa = $("#otra_grupa"+n).val();$("#otra_grupas1"+n).text(otra_grupa);
			 var k = $("#k"+n).val();$("#kk1"+n).text(k);
			 var p_k = $("#p_k"+n).val();$("#ps_k1"+n).text(p_k);
		});
    }    
      
    $('#saglabat_p').html(' <input type = "submit" name = "sutit" value = "Saglabāt" id="saglabat" class ="pogas" style="margin-left:10px;"/>');
    $('#saglabat_p').click(function() 
	{
		var i=0; 
        var eksis = $("#eks").val();
		var eksameni = parseFloat(eksis);
		var lauks4 = $("#audzgrst").val();
		var lauks5 = $("#audzgrst2").val();
		var audzinasana = parseFloat(lauks4) * 8; //audzināšana tiek pieskaitīta
		var audzinasana2 = parseFloat(lauks5) * 8; //audzināšana tiek pieskaitīta
        $("input[id^=idenfitikatorss]").each(function(i)
			{ 
				var ids =  $("input[id=idenfitikatorss"+i+"]").val();
				var skolotajs = $("#skolotajs"+i).val(); 
				var prieksmeta_nosaukums = $("input[id=prieksmets"+i+"]").val();
				var audz_sk = $("input[id=audz_sk"+i+"]").val();
				var grupa = $("input[id=grupa"+i+"]").val();
				var a = $("input[id=akl"+i+"]").val();
				var b = $("input[id=b"+i+"]").val();
				var z = $("input[id=z"+i+"]").val();
				var m = $("input[id=m"+i+"]").val();
				var pirma_grupa = $("input[id=pirma_grupa"+i+"]").val();
				var rakstu_darbi = $("input[id=rakstu_darbi"+i+"]").val();
				var ind_darbs = $("input[id=ind_darbs"+i+"]").val();
				var gatav_st = $("input[id=gatav_st"+i+"]").val();
				var teorija = $("input[id=teorija"+i+"]").val();
				var kopa_i_sem = $("input[id=c"+i+"]").val();
				var kopa_ii_sem = $("input[id=h"+i+"]").val();
				var kopa = $("input[id=k"+i+"]").val();
				var pavisam_kopa = $("input[id=p_k"+i+"]").val();
				var otra_grupa = $("input[id=otra_grupa"+i+"]").val();
				var st_ned1 = $("input[id=b"+i+"]").val();
				var st_ned2 = $("input[id=m"+i+"]").val();
				var likme = pavisam_kopa / 840;
				$.post('atlase_saglabasana', {id_post:ids, skolotajs_post:skolotajs, prieksmeta_nosaukums_post:prieksmeta_nosaukums, audz_sk_post:audz_sk, a_post:a, b_post:b, z_post:z, m_post:m, pirma_grupa_post:pirma_grupa, rakstu_darbi_post:rakstu_darbi, ind_darbs_post:ind_darbs, gatav_st_post:gatav_st, teorija_post:teorija, kopa_i_sem_post:kopa_i_sem, kopa_ii_sem_post:kopa_ii_sem, kopa_post:kopa, pavisam_kopa_post:pavisam_kopa, otra_grupa_post:otra_grupa, grupa_post:grupa, audzinasana_post:audzinasana, audzinasana_post2:audzinasana2, eksameni_post:eksameni, likme_post:likme},  function(data) 
				{
					$('#saturs2').html(data);
				});
			}); 
	alert("Ievadītie dati saglabāti!");
    });     
}//lielās funkcijas beigas

//IEVADE.PHP skolotaju ievade
function datu_ievade ()
{
	//SAGLABA DATUS
  $('#saglabat').click(function()
    { 
		var skolotajs_v = $("#skolotajs").val();
		var priekemts_v = $("#prieksmets").val(); 
        var grupas_v = $("#grupa").val(); 
		$.post('iev_sk_pr_gr', {sk:skolotajs_v, pr:priekemts_v, gr:grupas_v},  function(data) 
		{
			$('#saturs1').html(data);
			$("img[id^=dzest]").click(function()
			{
				var id_ds = $("input[id^=tabid]").val();
				$.post('dzest_ievadi', {id_d:id_ds},  function(data) 
				{
					alert("Ieraksts veiksmīgi dzēsts!");
					window.location.replace(""+ links +"ievade"); 
				});
			});
		});//post funkcijas beigas
    });  
}

function grupas_redigesana()
{
	$('.dzests').click(function()
	{
		var mainigais = $(this).next().val();
		$.post('reg_grupas', {gr: mainigais},  function(data) 
		{
			alert("Gurpa dzēsta!");
			location.reload();
		}); 
	});
}


//PIEVIENO JAUNU GRUPU DATU BĀZĒ
function grupas_pievienosana()
{
	$("#saglabat").click(function()
	{
		var mainigais = $("#grupa").val();
		var mainigais2 = $("#audzsk").val();
		var mainigais3 = parseFloat(mainigais2) * 8; //tiek aprēķināts audzināšanas 
		if(mainigais == "")
		{
			alert("Lūdzu, ievadiet lauku vērtības!");
		}
		if (mainigais != "")
		{
			$.post('reg_grupas_piev_post', {gr: mainigais, audzsk:mainigais2, audzinasana_stundas:mainigais3},  function(data) 
			{
				alert("Grupa "+ mainigais +" pievienota!");
				window.location.replace(""+ links +"reg/reg_grupas");  
			}); 
		}
	});
}

//LABOT GRUPU DATU BĀZĒ
function labot_grupu()
{
	$("#saglabat").click(function()
	{
		var mainigais = $("#grupa").val();
		var mainigais2 = $("#audzsk").val();
		var mainigais3 = parseFloat(mainigais2) * 8;
		var ids = $("#ids").val();
		if((mainigais == "") || (mainigais2 == ""))
		{
			alert("Lūdzu, aizpildiet abu lauku vērtības!");
		}
		if ((mainigais != "") && (mainigais2 != ""))
		{
			$.post('reg_grupas_labot_post', {gr: mainigais, audzsk: mainigais2, id:ids, audz_st:mainigais3},  function(data) 
			{
				alert("Grupa nosaukums nomainīts uz "+ mainigais +"!");
				window.location.replace(""+ links +"reg/reg_grupas");     
			}); 
		}
	});
}

//PIEVIENO JAUNU PRIEKŠMETU DATU BĀZĒ
function prieksmeta_pievienosana()
{
	$("#saglabat").click(function()
	{
		var mainigais = $("#prieksmets").val();
		var mainigais2 = $("#iprieksmets").val();
		if((mainigais == "") || (mainigais2 == ""))
		{
			alert("Lūdzu, aizpildiet abu lauku vērtības!");
		}
		if ((mainigais != "") && (mainigais2 != ""))
		{
			$.post('reg_pr_piev_post', {pr: mainigais, pri: mainigais2},  function(data) 
			{
				alert("Priekšmets: "+ mainigais +" un priekšmeta īsais nosaukums "+ mainigais2 +" pievienoti datu bāzei!");
				window.location.replace(""+ links +"reg/reg_prieksmeti");  
			}); 
		}
	});
}

//LABOT prieksmetu DATU BĀZĒ
function labot_prieksmetu()
{
	$("#saglabat").click(function()
	{
		var mainigais1 = $("#prieksmets").val();
		var mainigais2 = $("#iprieksmets").val();
		var ids = $("#ids").val();
		if((mainigais1 == "") || (mainigais2 == ""))
		{
			alert("Lūdzu, aizpildiet abu lauku vērtības!");
		}
		if ((mainigais1 != "") && (mainigais2 != ""))
		{
			$.post('reg_pr_labot_post', {pr: mainigais1, pri: mainigais2, id:ids},  function(data) 
			{
				alert("Priekšmets: "+ mainigais1 +" un priekšmeta īsais nosaukums "+ mainigais2 +" laboti!");
				window.location.replace("" + links +"reg/reg_prieksmeti");     
			}); 
		}
	});
}

function prieksmetu_redigesna ()
{
	$('.dzests').click(function()
	{
		var mainigais = $(this).next().val();
		$.post('reg_prieksmeti', {pr: mainigais},  function(data) 
		{
			alert("Priekšmets izdzēsts!");
			location.reload();
		}); 
	});
}

function skolotaju_redigesna ()
{
	$('.dzests').click(function()
	{
		var mainigais = $(this).next().val();
		$.post('reg_skolotaju', {sk: mainigais},  function(data) 
		{
			alert("Skolotājs/a izdzēsts/a!");
			location.reload();
		}); 
	});
}

//PIEVIENO JAUNU SKOLOTAJA DATU BĀZĒ
//SKOLOTĀJU DATU PIEVIENOŠANA
function skolotaju_pievienosana()
{
	$("#saglabat").click(function()
	{
		var mainigais = $("#skolotajsv").val();
		var mainigais2 = $("#skolotajsu").val();
		var mainigais3 = $("#ds").val();
		var mainigais4 = $("#grupa").val();
		var mainigais42 = $("#grupa2").val();
		var mainigais5 = $("#pk").val();
		var mainigais6 = $("#sk").val();
		var mainigais7 = $("#st_v").val();
		var mainigais8 = $("#dir").val();
		var mainigais9 = $("#dir_v").val();
		var mainigais10 = $("#izg_m").val();
		var mainigais11 = $("#bibl").val();
		var mainigais12 = $("#sp_org").val();
		var mainigais13 = $("#al").val();
		if($('#sk').is(':checked') == true){mainigais6 = 1;}
		if($('#st_v').is(':checked') == true){mainigais7 = 1;}
		if($('#dir').is(':checked') == true){mainigais8 = 1;}
		if($('#dir_v').is(':checked') == true){mainigais9 = 1;}
		if($('#izg_m').is(':checked') == true){mainigais10 = 1;}
		if($('#bibl').is(':checked') == true){mainigais11 = 1;}
		if($('#sp_org').is(':checked') == true){mainigais12 = 1;}
		if((mainigais == "") || (mainigais2 == "") || (mainigais3 == "") || (mainigais4 == "") || (mainigais5 == ""))
		{
			alert("Lūdzu, aizpildiet lauku vērtības!")
		}
		if ((mainigais != "") && (mainigais2 != "") && (mainigais3 != "") && (mainigais4 != "")  && (mainigais5 != ""))
		{
			$.post('reg_sk_piev_post', {skv_post: mainigais, sku_post: mainigais2, ds_post: mainigais3, gr_post: mainigais4, pkp_post: mainigais5, sk_post: mainigais6, st_v_post: mainigais7, dir_post: mainigais8, dir_v_post: mainigais9, izg_m_post: mainigais10, bibl_post: mainigais11, sp_org_post: mainigais12, algas_likme_post:mainigais13, grupa42_post:mainigais42},  function(data) 
			{
				alert("Skolotāja/s: "+ mainigais + "  " + mainigais2 + "\n  pievienots datu bāzei!");
				window.location.replace("" +links+ "reg/reg_skolotaju");  
			}); 
		}
	});
}


//LABOT skolotaju DATU BĀZĒ
function labot_skolotaju()
{
	$("#saglabat").click(function()
	{
		var mainigais1 = $("#skv").val();
		var mainigais2 = $("#sku").val();
		var mainigais3 = $("#ds").val();
		var mainigais4 = $("#grupa").val();
		var mainigais42 = $("#grupa2").val();
		var ids = $("#ids").val();
		var mainigais5 = $("#pk").val();
		var mainigais6 = $("#sk").val();
		var mainigais7 = $("#st_v").val();
		var mainigais8 = $("#dir").val();
		var mainigais9 = $("#dir_v").val();
		var mainigais10 = $("#izg_m").val();
		var mainigais11 = $("#bibl").val();
		var mainigais12 = $("#sp_org").val();
		var mainigais13 = $("#al").val();
		if($('#sk').is(':checked') == true){mainigais6 = 1;}
		if($('#st_v').is(':checked') == true){mainigais7 = 1;}
		if($('#dir').is(':checked') == true){mainigais8 = 1;}
		if($('#dir_v').is(':checked') == true){mainigais9 = 1;}
		if($('#izg_m').is(':checked') == true){mainigais10 = 1;}
		if($('#bibl').is(':checked') == true){mainigais11 = 1;}
		if($('#sp_org').is(':checked') == true){mainigais12 = 1;}
		if((mainigais1 == "") || (mainigais2 == "")  || (mainigais3 == "")  || (mainigais4 == "") || (mainigais5 == ""))
		{
			alert("Lūdzu, aizpildiet lauku vērtības!");
		}
		if ((mainigais1 != "") && (mainigais2 != "") && (mainigais3 != "") && (mainigais4 != "") && (mainigais5 != ""))
		{
			$.post('reg_sk_labot_post', {id_post:ids, skv_post: mainigais1, sku_post: mainigais2, ds_post: mainigais3, gr_post: mainigais4, pkp_post: mainigais5, sk_post: mainigais6, st_v_post: mainigais7, dir_post: mainigais8, dir_v_post: mainigais9, izg_m_post: mainigais10, bibl_post: mainigais11, sp_org_post: mainigais12, algas_likme_post:mainigais13, gr_post2:mainigais42},  function(data) 
			{
				alert("Ievadītie dati laboti!");
				window.location.replace("" +links+ "reg/reg_skolotaju");     
			}); 
		}
	});
}


//TARIFIKĀIJCA
    //skolotajs
function tarifikacija()
{
   $('#skolotajs').change(function()
    { 
		var skolotajs_v = $("#skolotajs").val();
		$.post('sk_tarifikacija', {sk_post:skolotajs_v},  function(data) 
		{
			$('#saturs1').html(data);
			//tarifikacijas_rekinat();
		}); 
    });
}

//------------------------------------TARIFIKACIJA-----------//
/* function tarifikacijas_rekinat()
{
	var n=0;
	audzinasana_izdruka("input[id^=audzinasana]", "#audzinasana_izdr");
	$("input[id^=a_likme]").each(function(n)
	{
		 alga_par_stundam("#a_likme"+n, "#p_kopa"+n, "#alga_p_st"+n, "#alga_p_st_iz"+n, "#algas_likme_iz"+n, "#a_likme"+n, "#p_kopa_iz"+n);
		 stundu_skaits_likme_men("#p_kopa"+n, "#st_sk_lik"+n, "#st_sk_lik_izv"+n);
		 piem_i("#alga_p_st"+n, "#piemi"+n,  "#piemi_iz"+n);
		 darba_alga("#alga_p_st"+n, "#piemi"+n, "#da"+n, "#da_iz"+n);
		 kopa_kolonnast("input[id^=kopa]", "#suma");
		 kopa_kolonnast("input[id^=rakstu_darbi]", "#sumb");
		 kopa_kolonnast("input[id^=gatav_st]", "#sumc");
		 kopa_kolonnast("input[id^=ind_darbs]", "#sumd");
		 kopa_kolonnast("input[id^=audz_gr_st]", "#sume");
		 kopa_kolonnast("input[id^=p_kopa]", "#sumf");
		 kopa_kolonnast("input[id^=st_sk_lik]", "#sumg");
		 kopa_kolonnast("input[id^=alga_p_st]", "#sumh");
		 kopa_kolonnast("input[id^=piemi]", "#sump");
		 kopa_kolonnast("input[id^=da]", "#suml");
		 kopa_kolonnast("input[id^=audzinasana]", "#sume"); 
	});
	tarifikacijas_drukasana();
}

function audzinasana_izdruka (lauks1, lauks2)
{
	var vertiba = $(lauks1).val();
	$(lauks2).text(vertiba);
}

function alga_par_stundam(algalikme, pkopa, alga_p_st, alga_p_st_iz, algas_likme_iz, a_likme, p_k_izlase)
{
    var mainigais1 = $(algalikme).val();
    var mainigais2 = $(pkopa).val();
    var mainigais_rez = (mainigais1 * mainigais2) / 840;
    $(alga_p_st).val(mainigais_rez.toFixed(2));
    $(alga_p_st_iz).text(mainigais_rez.toFixed(2));
    //algas likme
	var a = $(a_likme).val();
    $(algas_likme_iz).text(a);
    //stundas_kopa
    $(p_k_izlase).text(mainigais2);
  
}

function stundu_skaits_likme_men(pkopa, rez, rez_izv)
{
    var mainigais1 = $(pkopa).val();
    var rezultats = mainigais1 / 840 //FORMULA 
    $(rez).val(rezultats.toFixed(2));
    $(rez_izv).text(rezultats.toFixed(2));
}


         

function piem_i(algapst, piemi, piemi_iz)
{
    var  mainigais1 = $(algapst).val();
    var rezultats = mainigais1 * 0.1;
    $(piemi).val(rezultats.toFixed(2));
    $(piemi_iz).text(rezultats.toFixed(2));
 }

function darba_alga (algap, piem, da, da_iz)
{
    var  mainigais1 = $(algap).val();
    var  mainigais2 = $(piem).val();
    var rezultats = parseFloat(mainigais2) + parseFloat(mainigais1);
    $(da).val(rezultats.toFixed(2));
    $(da_iz).text(rezultats.toFixed(2));
}

 function kopa_kolonnast(lauks, kopa_k)
 {
    var kopa = 0;   
    $(lauks).each( function()
	{
		kopa += parseFloat($(this).val()) || 0;      
    });
    $(kopa_k).text((kopa.toFixed(2)));
 }

function tarifikacijas_drukasana()
{
    $('#izdruka_tarifikacija').html('<input type = "submit" name = "izdruka" value = "izdruka" id="izdruka" class ="pogas" style="margin-left:10px;"/>');
    $('#izdruka_tarifikacija').click(function() 
	{
        var sk_v = $("#sk_iz_id").val();
        var gr_nr = $("#audz_gr_kurss").val() || 0;
        //ierakstu saglabāšana
        var n = 0;
        $("input[id^=tarifikacijas_id]").each(function(n)
		{
			saglabat_algas("#tarifikacijas_id"+n, "#st_sk_lik"+n, "#alga_p_st"+n, "#piemi"+n, "#da"+n);
		});
        $('#izdruka_tarifikacija').html("<a href = './izdrukas/tarifikacijas_atlase?gr="+gr_nr+"&sk="+sk_v+"' target='_blank'>Izdruka uz pdf</a><br/><a href = './izdrukas/tarifikacija_kopa_izdruka' target='_blank'>Pilnā izdruka</a><br/><a href = './izdrukas/viss' target='_blank'>Visa izdruka</a>");  
    });
        
    function saglabat_algas(lauks0, lauks1, lauks2, lauks3, lauks4)
	{
		var id = $(lauks0).val(); 
		var st_likm_men = $(lauks1).val();
		var a_p_st = $(lauks2).val();
		var piem = $(lauks3).val() 
		var d_alga =  $(lauks4).val();
		$.post('tarifikacija_post', {id_post: id, st_likm_men_post: st_likm_men, a_p_st_post:a_p_st, piem_post:piem, d_alga_post:d_alga},  function(data) 
		{
			$('#saturs2').html(data);
		});   
	}
}
*/