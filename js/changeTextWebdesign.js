let content = document.getElementById("webdesign-content");
let vorbereitung = document.getElementById("vorbereitungButtonID");
let design = document.getElementById("designButtonID");
let umsetzung = document.getElementById("umsetzungButtonID");
let vorbereitungH2 = document.getElementById("vorbereitungH2");
let designH2 = document.getElementById("designH2");
let umsetzungH2 = document.getElementById("umsetzungH2");
let bodyResize = document.getElementById("body");
let zeit;
let hilsVar = 1;
let webdesignUberschrift = document.getElementById("webdesignUberschrift");
let webdesignZwischenUS1 = document.getElementById("webdesignZwischenUS1");
let webdesignZwischenUS2 = document.getElementById("webdesignZwischenUS2");
let webdesignZwischenUS3 = document.getElementById("webdesignZwischenUS3");
let webdesignAbsatz1 = document.getElementById("webdesignAbsatz1");
let webdesignAbsatz2 = document.getElementById("webdesignAbsatz2");
let webdesignAbsatz3 = document.getElementById("webdesignAbsatz3");
let webdesignImage = document.getElementById("webdesignImage");
let h2Webdesign = document.getElementById("h2Webdesign");

bodyResize.addEventListener("resize", getScreenWidth);

document.addEventListener("click", switchContainer);
document.addEventListener("resize", getScreenWidth);


function switchContainer(event){

    if(screenWidth > 800){
        zeit = screenWidth/((screenWidth*4.3)/screenWidth);
    }else{
        zeit = screenWidth/((screenWidth*2.2)/screenWidth);
    }

    console.log(zeit);

let buttonId = event.target.id;

    switch (buttonId) {
        case vorbereitung.id:
        case vorbereitungH2.id:
            hilsVar = 1;
            changeToVorbereitung(zeit);
            break;
        case design.id:
        case designH2.id:
            hilsVar = 2;
            changeToVorbereitung(zeit);
            break;
        case umsetzung.id:
        case umsetzungH2.id:
            hilsVar = 3;
            changeToVorbereitung(zeit);
            break;
        default:
            console.log(buttonId);
    }

    //console.log(buttonId);
}


function switchText(){
    switch (hilsVar) {
        case 1:
            webdesignUberschrift.textContent  = "Vorbereitung";

            webdesignZwischenUS1.textContent  = "Analyse";
            webdesignZwischenUS2.textContent  = "Briefing";
            webdesignZwischenUS3.textContent  = "Konzept";

            webdesignAbsatz1.textContent  = "Nicht immer ist die Analyse notwendig, doch wenn es sich um das Redesign einer bestehenden Website handelt oder es um das Beurteilen der Websites der Konkurrenz geht, ist diese sehr praktisch. blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla";
            webdesignAbsatz2.textContent  = "Das Briefing bildet den Ausgangspunkt von allem. Hier lernt man das Projekt kennen, Ziele und Zielpublikum werden definiert. Je genauer man es macht desto mehr Ärger und Fragen erspart man sich später im Prozess. blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla";
            webdesignAbsatz3.textContent  = "Nach einem ausführlichen Briefing mit klarer Zieldefinition kann man sich an die Konzeption der Seite machen. Hier werden der Aufbau der Website mittels einer Sitemap, die Navigationsstruktur, Seitenelemente und Contentarten definiert. Das ganze wird mittels Mockups schematisch skizziert.";
            break;
        case 2:


            //waaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaassssss

            document.getElementById("webdesignImage").src = "/images/design.png";
            webdesignUberschrift.textContent  = "Design";

            webdesignZwischenUS1.textContent  = "Contenterstellung";
            webdesignZwischenUS2.textContent  = "Grafische Gestaltung";
            webdesignZwischenUS3.textContent  = "Technische Gestaltung";

            webdesignAbsatz1.textContent  = "Auch ohne das fertige Design kann und sollte mit der Erstellung des Inhalts angefangen werden. Der Inhalt ist das Wichtigste einer Website, denn wegen diesem wird sie besucht. Der Content sollte qualitativ hochwertig, sinnvoll, auf den Punkt gebracht und für Suchmaschinen optimal sein. Mit Content sind nicht nur Texte gemeint, auch Fotos, Grafiken, Videos, Audiofiles, etc..";
            webdesignAbsatz2.textContent  = "Anstatt gleich das Aussehen der fertige Website zu designen arbeite ich oft noch vor einem konkreten Entwurf Moodboards oder Style Tiles aus. Auf Basis dieser erstelle ich das Design der Website anhand von zwei bis drei Beispielseiten noch in Photoshop oder Fireworks. Wenn das Design freigegeben wurde wird das Grunddesign in HTML und CSS umgesetzt. Die weiteren Schritte des Designs erfolgen dann im Browser.";
            webdesignAbsatz3.textContent  = "Schon vor der Fertigstellung des grafischen Designs kann das Content Management System (CMS) aufgesetzt werden um früh die Eingabe der Inhalte zu ermöglichen. Auf Basis des Konzepts lassen sich auch die wesentlichen Funktionen der Website programmieren. Ziel ist es bald einen klickbaren Prototyp zu haben. Das Design und die Inhalte müssen hier noch nicht vollständig vorhanden oder intergriert sein.";
            break;
        case 3:
            webdesignUberschrift.textContent  = "Umsetzung";

            webdesignZwischenUS1.textContent  = "Zusammenführen";
            webdesignZwischenUS2.textContent  = "Testphase";
            webdesignZwischenUS3.textContent  = "Launch";

            webdesignAbsatz1.textContent  = "Spätestens jetzt sollten Inhalte in das CMS eingegeben und das Design optmiert werden. Fehlende Inhalte, Templates und Designelemente werden erstellt und umgesetzt. Die Website kann dabei mit dem echten Content beurteilt werden.";
            webdesignAbsatz2.textContent  = "Qualitätssicherung von Content, Code und Design. Hier werden technische Fehler (Bugs) behoben und der Text lektoriert. Im Idealfall wird die Seite von Testpersonen mit bestimmten Aufgabenstellungen durchgeklickt (Usability Testing). So wird alles so lange optimiert, bis man zufrieden ist.";
            webdesignAbsatz3.textContent  = "Die Website ist bereit veröffentlicht zu werden. Vorher sollte alles noch ein letzte Mal durchgecheckt werden. Falls möglich startet man nicht vor großer Öffentlichkeit, sondern eher im Hintergrund, denn Fehler können auch hier noch passieren. Sobald die Seite online ist sollte man nach ein paar Wochen mit gesammelten Erfahrungen und Feedback schauen, was man noch verbessern sollte. Dieser Schritt ist fortlaufend. Außerdem kommen oft neue Inhalte dazu, die vielleicht wieder Anpassungen benötigen. Das Spiel spielt man so lange, bis die Website den gegeben Anforderungen nicht mehr entspricht oder schlicht visuell bzw. technisch angepasst werden muss. Dann sehen uns wieder bei Schritt 1.";
            break;
        default:
            console.log(hilsVar);
    }
}

function changeToVorbereitung(zeit){
    h2Webdesign.style.cssText = "transform: translate(-150%,0);";
    content.style.cssText = "transform: translate(-150%,0);";
    setTimeout(function () {
        content.style.cssText = "transition:0s; transform: translate(150%,0);";
        h2Webdesign.style.cssText = "transition:0s; transform: translate(150%,0);";

    }, zeit);
    setTimeout(function () {
        content.style.cssText = "transition:0.3s; transform: translate(0,0);";
        h2Webdesign.style.cssText = "transition:0.7s; transform: translate(0,0);";
        switchText();
    }, zeit+100);
}