$(document).ready(function(){
    $("#menu2").click(function(){
        $("#panel1").slideToggle("slow");
    });
});
$(document).ready(function(){
    $("#git").click(function(){
        $("#gitPanel").slideToggle("slow");
    });
});
$(document).ready(function(){
    $("#agile").click(function(){
        $("#PanelAgile").slideToggle("slow", function(){
            $("#PanelScrum").slideUp("fast",function(){
                $("#PanelKanban").slideUp("fast")
            });
        });
    });
});
$(document).ready(function(){
    $("#scrum").click(function(){
        $("#PanelScrum").slideToggle("slow",function(){
            $("#PanelKanban").slideUp("fast",function(){
                $("#PanelAgile").slideUp("fast")
            });
        });
    });
}); 
$(document).ready(function(){
    $("#kanban").click(function(){
        $("#PanelKanban").slideToggle("slow",function(){
            $("#PanelScrum").slideUp("fast",function(){
                $("#PanelAgile").slideUp("fast", function(){
                    $("#MVCPanel").slideUp("fast");
                });
            });
        });
    });
});
$(document).ready(function(){
    $("#krecayjne").click(function(){
        $("#PanelKreacyjne").slideToggle("slow", function(){
            $("#PanelStruk").slideUp("fast",function(){
                $("#PanelBeh").slideUp("fast", function(){
                    $("#MVCPanel").slideUp("fast");
                });
            });
        });
    });
});
$(document).ready(function(){
    $("#strukturalne").click(function(){
        $("#PanelStruk").slideToggle("slow", function(){
            $("#PanelBeh").slideUp("fast",function(){
                $("#PanelKreacyjne").slideUp("fast", function(){
                    $("#MVCPanel").slideUp("fast");
                });
            });
        });
    });
});
$(document).ready(function(){
    $("#behawioralne").click(function(){
        $("#PanelBeh").slideToggle("slow", function(){
            $("#PanelStruk").slideUp("fast",function(){
                $("#PanelKreacyjne").slideUp("fast", function(){
                    $("#MVCPanel").slideUp("fast");
                });
            });
        });
    });
});
$(document).ready(function(){
    $("#MVC").click(function(){
        $("#MVCPanel").slideToggle("slow", function(){
            $("#PanelBeh").slideUp("fast", function(){
                $("#PanelStruk").slideUp("fast",function(){
                    $("#PanelKreacyjne").slideUp("fast")
                });
            });
        });
    });
});
function mainfest()
{
    var okno = window.open("","","width=800,height=500");
    okno.document.write("<p>12 zasad manifestu:<br>1.Najwyższy priorytet ma dla nas zadowolenie klienta dzięki wczesnemu i ciągłemu wdrażaniu wartościowego oprogramowania.<br>2. Bądźcie gotowi na zmiany wymagań nawet na późnym etapie jego rozwoju. Procesy zwinne wykorzystują zmiany dla zapewnienia klientowi konkurencyjności.<br>3.Dostarczajcie funkcjonujące oprogramowanie często, w kilkutygodniowych lub kilkumiesięcznych odstępach. Im częściej, tym lepiej.<br>4.Zespoły biznesowe i deweloperskie muszą ściśle ze sobą współpracować w codziennej pracy przez cały czas trwania projektu.<br>5.Twórzcie projekty wokół zmotywowanych ludzi. Zapewnijcie im potrzebne środowisko oraz wsparcie i zaufajcie, że wykonają powierzone zadanie.<br>6.Najbardziej efektywnym i wydajnym sposobem przekazywania informacji zespołowi deweloperskiemu i wewnątrz niego jest rozmowa twarzą w twarz.<br>7.Działające oprogramowanie jest podstawową miarą postępu.<br>8.Procesy zwinne umożliwiają zrównoważony rozwój. Sponsorzy, deweloperzy oraz użytkownicy powinni być w stanie utrzymywać równe tempo pracy.<br>9.Ciągłe skupienie na technicznej doskonałości i dobrym projektowaniu zwiększa zwinność.<br>10.Prostota – sztuka minimalizowania ilości koniecznej pracy – jest kluczowa.<br>11.Najlepsze rozwiązania architektoniczne, wymagania i projekty pochodzą od samoorganizujących się zespołów.<br>12.W regularnych odstępach czasu zespół analizuje możliwości poprawy swojej wydajności, a następnie dostraja i dostosowuje swoje działania do wyciągniętych wniosków. </p>")
}