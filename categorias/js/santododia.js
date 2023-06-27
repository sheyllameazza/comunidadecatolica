document.addEventListener('DOMContentLoaded', function() {
    var currentDay = new Date().getDate();
    var currentMonth = new Date().getMonth();
    var currentYear = new Date().getFullYear();

    var calendarBody = document.querySelector('#calendar tbody');
    var descricaoElement = document.getElementById('descricao');
    var descricaoDia = {
      // Coloque aqui as descrições correspondentes a cada dia
      1: 'São Justino - Mártir: Foi um filósofo e apologista cristão do século II. Ele nasceu por volta de 100 dC em Flávia Neápolis, na Samaria, e se converteu ao cristianismo após um encontro com um idoso sábio. Justino continuou-se a defender a fé cristã perante as autoridades romanas e refutar as críticas e entusiasmo contra os cristãos. Ele escreveu várias obras apologéticas, como "Diálogo com Trifão" e "Apologia", nas quais explicava a fé cristã e defendia sua confissão. Justino foi martirizado por volta de 165 dC em Roma, sendo considerado um dos primeiros grandes pensadores cristãos e um mártir da fé. Sua contribuição para a defesa e firmeza do estresse foi significativa.',
      2: 'Santos Marcelino e Pedro - Mártires: Foram dois mártires cristãos do século IV. Eles eram amigos e foram presos durante a perseguição do imperador Diocleciano. Apesar das torturas e das tentativas de fazê-los renunciar à sua fé, eles permaneceram fiéis a Jesus Cristo. Marcelino e Pedro foram executados por decapitação, testemunhando sua fé até o fim. São considerados como exemplos de coragem e fidelidade à causa cristã.',
      3: 'São Carlos Lwanga e seus companheiros - Mártires: Foram um grupo de jovens cristãos que foram martirizados no século XIX, durante o reinado do rei Mwanga II, no Reino de Buganda (atual Uganda). Eles eram páginas e servos da corte real e se recusaram a participar de práticas sexuais imorais e contrárias à sua fé cristã. Por causa disso, foram perseguidos e torturados. Apesar das ameaças e do sofrimento, eles permaneceram firmes em sua fé, preferindo a morte a renunciar a Jesus Cristo. Foram queimados vivos e enforcados em diferentes ocasiões entre 1885 e 1887. São considerados mártires e heróis da fé, sendo venerados como santos pela Igreja Católica. Seu exemplo de coragem e fidelidade continua a inspirar muitos cristãos em todo o mundo.',
      5: 'São Bonifácio - Bispo e Mártir: Foi um bispo e missionário cristão do século VIII. Ele nasceu na Inglaterra e se dedicou à propagação do cristianismo na Europa. Bonifácio viajou para a Germânia, onde converteu muitas pessoas ao cristianismo e estabeleceu diversas igrejas e mosteiros. Ele também desafiou práticas pagãs, como a adoração de ídolos, e trabalhou para fortalecer a disciplina e a organização da Igreja. Bonifácio foi martirizado em 754, durante uma missão na Frísia, atualmente parte da Holanda. Sua vida e morte são lembradas como exemplos de coragem e dedicação à fé cristã. Ele é venerado como santo pela Igreja Católica e considerado um dos grandes missionários da história cristã.',
      6: 'São Norberto - Bispo: Foi um bispo e fundador da Ordem Premonstratense no século XII. Ele nasceu na Alemanha e inicialmente levou uma vida mundana e distante da fé. No entanto, após uma experiência de conversão profunda, Norberto dedicou-se a uma vida de serviço a Deus e ao próximo. Ele fundou a Ordem dos Cônegos Regulares de Prémontré, também conhecida como Ordem Premonstratense, que se dedicava à vida comunitária, à pregação e ao apostolado. Norberto enfatizou a importância da reforma da Igreja e da vivência dos ensinamentos de Jesus Cristo. Ele foi nomeado bispo de Magdeburgo e trabalhou para promover a paz e a unidade entre as pessoas. São Norberto faleceu em 1134 e é lembrado como um modelo de santidade e zelo apostólico. Ele é venerado como santo pela Igreja Católica.',
      8: 'Santo Efrém - Diácono e doutor da Igreja: Foi um diácono e doutor da Igreja do século IV. Ele nasceu em Nísibis, atualmente na Turquia, e se destacou como poeta, teólogo e pregador. Efrém foi conhecido por sua eloquência e habilidade em compor hinos e escritos teológicos. Ele dedicou sua vida ao serviço de Deus e ao ensino da fé cristã. Sua contribuição para a Igreja inclui a defesa da doutrina da Trindade e a promoção da vida ascética e contemplativa. Santo Efrém faleceu em 373 e foi reconhecido como doutor da Igreja, uma honra concedida a poucos santos por sua sabedoria e ensinamentos teológicos. Ele é venerado como santo pela Igreja Católica e por outras tradições cristãs orientais.',
      9: 'São José de Anchieta - Presbítero: Foi um presbítero jesuíta do século XVI. Ele nasceu na Espanha e se tornou um missionário no Brasil colonial. Anchieta desempenhou um papel fundamental na evangelização dos povos indígenas, aprendendo suas línguas e costumes para transmitir a mensagem cristã. Além de seu trabalho missionário, ele também se dedicou à educação, fundando escolas e escrevendo gramáticas e dicionários das línguas nativas. Anchieta é considerado um dos principais fundadores da cidade de São Paulo e um defensor dos direitos dos indígenas. Ele faleceu em 1597 e é venerado como santo pela Igreja Católica. São José de Anchieta é lembrado por seu exemplo de dedicação missionária e amor aos mais necessitados.',
      11: 'São Barnabé - Apóstolo: Foi um dos primeiros apóstolos cristãos do século I. Ele era um judeu de Chipre e se tornou um dos companheiros mais próximos de São Paulo. Barnabé era conhecido por sua generosidade e encorajamento aos novos convertidos. Ele desempenhou um papel importante na expansão do cristianismo, viajando e pregando o Evangelho em várias regiões. Barnabé também foi um dos primeiros a aceitar e apoiar a conversão de Paulo ao cristianismo, abrindo caminho para sua atuação como um dos principais apóstolos. Embora os detalhes sobre sua morte sejam incertos, São Barnabé é lembrado como um exemplo de coragem, amor ao próximo e dedicação à fé cristã. Ele é venerado como santo pela Igreja Católica e por outras tradições cristãs.',
      13: 'Santo Antônio de Pádua (ou de Lisboa) - Presbítero e Doutor da Igreja: Foi um presbítero franciscano e doutor da Igreja do século XIII. Ele nasceu em Lisboa, Portugal, e inicialmente formou-se nos estudos e à vida acadêmica. No entanto, depois de testemunhar os corpos dos primeiros mártires franciscanos, ele foi inspirado a se juntar à Ordem Franciscana e dedicar sua vida à pregação e ao serviço aos pobres. Santo Antônio é amplamente conhecido por sua habilidade como pregador e por sua devoção a ajudar as pessoas em suas necessidades físicas e espirituais. Ele foi um defensor da justiça social e do cristão cristão. Santo Antônio faleceu em Pádua, Itália, em 1231. Ele é venerado como santo pela Igreja Católica e reconhecido como um doutor da Igreja, devido à sua sabedoria teológica e contribuições para a vida espiritual dos fiéis.',
      21: '',
      22: '',
      24: '',
      27: '',
      28: '',
      29: '',
      30: '',
    };

    var daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    var firstDay = new Date(currentYear, currentMonth, 1).getDay();

    var html = '';
    var dayCounter = 1;

    for (var i = 0; i < 6; i++) {
      html += '<tr>';

      for (var j = 0; j < 7; j++) {
        if ((i === 0 && j < firstDay) || dayCounter > daysInMonth) {
          html += '<td></td>';
        } else {
          var classList = '';

          if (dayCounter === currentDay) {
            classList += 'current-day ';
          }

          html += '<td class="' + classList + '">' + dayCounter + '</td>';
          dayCounter++;
        }
      }

      html += '</tr>';
    }

    calendarBody.innerHTML = html;

    var calendarCells = calendarBody.getElementsByTagName('td');

    for (var k = 0; k < calendarCells.length; k++) {
      calendarCells[k].addEventListener('click', function() {
        var clickedDay = parseInt(this.innerText);
        descricaoElement.textContent = descricaoDia[clickedDay] || 'Sem descrição disponível';

        // Remover a classe 'selected-day' de todas as células do calendário
        for (var m = 0; m < calendarCells.length; m++) {
          calendarCells[m].classList.remove('selected-day');
        }

        // Adicionar a classe 'selected-day' à célula do dia clicado
        this.classList.add('selected-day');
      });
    }

    // Exibir a descrição do dia atual
    descricaoElement.textContent = descricaoDia[currentDay] || 'Sem descrição disponível';
  });