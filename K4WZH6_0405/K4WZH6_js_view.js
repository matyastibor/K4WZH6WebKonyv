let konyv1 = {"szerzo": "Nyékiné Dr. Gaizler Judit","cim": "Java 2 I.-II. - Utikalauz programozóknak 5.0","kiadas_eve": "2009"}; 
let konyv2 = {"szerzo": "Reiter István","cim": "C# programozás lépésről lépésre", "kiadas_eve": "2018" };
document.write('<h1>JSON megvalósítása - JavaScript</h1>');
document.write('<p><b>Szerző:</b>' + konyv1.szerzo + '<br> <b>Cím</b>: ' + konyv1.cim + '<br><b>Év</b>' + konyv1.kiadas_eve + '</p>');
document.write('<p><b>Szerző: </b>' + konyv2.szerzo + '<br> <b>Cím</b>: ' + konyv2.cim + '<br><b>Év</b>' + konyv2.kiadas_eve + '</p>');