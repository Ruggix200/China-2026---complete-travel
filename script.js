const days = [
  {day:1, city:'Shanghai', title:'Arrivo, Bund e sapori locali', image:'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?auto=format&fit=crop&w=1200&q=80', summary:'Check-in, primo incontro con lo skyline e cena in una food street autentica.', stops:[['Trasferimento aeroporto → hotel','45–60 min','Maglev, metro o taxi/Didi per arrivare in città e lasciare i bagagli.'],['Bund','1 h','Passeggiata sul lungofiume con vista su Pudong, ideale al tramonto.'],['Nanjing Road','1 h','Viale pedonale luminoso, negozi e atmosfera serale.'],['Yunnan Road','1 h','Cena informale con xiao long bao, noodles, ravioli e dolci di riso.']]},
  {day:2, city:'Shanghai', title:'Pudong, templi e notte sul fiume', image:'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80', summary:'Torri panoramiche, mercato, Jing’an Temple, Yu Garden, crociera Huangpu e rooftop.', stops:[['Shanghai Tower','1–1,5 h','Vista panoramica dall’alto e orientamento perfetto sulla città.'],['Pudong / Lujiazui','30 min','Passeggiata tra grattacieli e passerelle sopraelevate.'],['A.P. Plaza Yinyang Market','1–1,5 h','Shopping, souvenir e repliche: contrattare è parte dell’esperienza.'],['Jing’an Temple','30 min','Tempio dorato incastonato tra i grattacieli.'],['Yu Garden + City God Temple','2 h','Giardino classico, bazar, lanterne e ponti a zig-zag.'],['Crociera Huangpu','1 h','Bund e skyline illuminati da vedere dall’acqua.'],['Flair Rooftop','1,5 h','Drink panoramico con vista sul Bund e su Pudong.']]},
  {day:3, city:'Suzhou', title:'Giardini UNESCO e canali di Suzhou', image:'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=80', summary:'Treno veloce da Shanghai, giardini classici, strade sull’acqua e rientro serale.', stops:[['Shanghai → Suzhou','1–1,15 h','Treno veloce e breve trasferimento verso il centro storico.'],['Humble Administrator’s Garden','1,5–2 h','Uno dei giardini più importanti della Cina, con laghetti, ponti e padiglioni.'],['Pingjiang Road','1–1,5 h','Strada storica con canali, botteghe e case tradizionali.'],['Shantang Street','1,5–2 h','Canali, ponti e lanterne: molto scenografica nel tardo pomeriggio.'],['Suzhou → Shanghai','1,5 h','Rientro con margine e cena tradizionale shanghainese a Lao Zheng Xing.']]},
  {day:4, city:'Shanghai', title:'Panda, French Concession e acrobazie', image:'https://images.unsplash.com/photo-1508804052814-cd3ba865a116?auto=format&fit=crop&w=1200&q=80', summary:'Mattina allo zoo, pranzo leggero e pomeriggio tra ville, café e vie eleganti.', stops:[['Shanghai Zoo','2–3 h','Tappa per vedere i panda giganti senza uscire dalla città.'],['French Concession','4–4,5 h','Quartiere elegante con ville, boutique, strade alberate e café.'],['Xintiandi','45 min','Case shikumen restaurate e atmosfera raffinata.'],['Sinan Mansions','30 min','Ville storiche e scorci fotogenici.'],['Fuxing Park','30 min','Pausa verde nel cuore della French Concession.'],['Anfu Road e Wukang Road','1,5 h','Caffè, boutique e una delle vie più fotogeniche di Shanghai.'],['Tianzifang','1–1,15 h','Vicolo creativo con negozi, gallerie e piccoli souvenir.'],['Shanghai Circus World','1–1,5 h','Spettacolo acrobatico cinese, da prenotare.']]},
  {day:5, city:"Xi'an", title:'Arrivo a Xi’an e Esercito di Terracotta', image:'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&w=1200&q=80', summary:'Volo da Shanghai, trasferimento e visita al sito archeologico più iconico della città.', stops:[['Shanghai → Xi’an','Trasferimento','Volo interno e arrivo in una delle antiche capitali imperiali.'],['Hotel → Esercito di Terracotta','1 h','Taxi/Didi consigliato per arrivare al sito.'],['Esercito di Terracotta','2,5–3 h','Fossa 1, museo e reperti dell’esercito sepolto di Qin Shi Huang.'],['Torre della Campana e Torre del Tamburo','1 h','Simboli centrali della città, belli anche illuminati.'],['South Gate / mura','30 min','Ingresso scenografico sulle mura cittadine.'],['Muslim Quarter + Beiyuanmen','2 h','Cena street food tra roujiamo, noodles, spiedini e dolci al sesamo.']]},
  {day:6, city:"Xi'an", title:'Pagode, templi e treno per Pechino', image:'https://images.unsplash.com/photo-1606298855672-3efb63017be8?auto=format&fit=crop&w=1200&q=80', summary:'Mattina spirituale a Xi’an, pranzo semplice e treno veloce verso la capitale.', stops:[['Grande Pagoda dell’Oca Selvatica','1–1,5 h','Monumento buddhista simbolo della città, con giardini circostanti.'],['Tempio Da Ci’en','45 min','Complesso legato alla pagoda, cortili e padiglioni tradizionali.'],['Stazione ferroviaria','1 h','Trasferimento con margine per controlli e bagagli.'],['Xi’an → Pechino','4,5 h circa','Treno veloce attraverso il nord della Cina.'],['Arrivo a Pechino','1 h','Check-in e passeggiata semplice a Wangfujing o snack market.']]},
  {day:7, city:'Pechino', title:'Piazze imperiali e quartieri storici', image:'https://images.unsplash.com/photo-1508804052814-cd3ba865a116?auto=format&fit=crop&w=1200&q=80', summary:'Tiananmen, Città Proibita, Tempio del Cielo e cena con anatra alla pechinese.', stops:[['Piazza Tiananmen + Mausoleo di Mao','1,5 h','Grande piazza simbolica, accessi da verificare e controlli da considerare.'],['Città Proibita','3 h','Palazzo imperiale e cuore del potere cinese, prenotazione obbligatoria.'],['Tempio del Cielo','2 h','Complesso rituale tra i più armoniosi di Pechino.'],['Qianmen + Dashilan Street','1,5 h','Strade storiche, negozi tradizionali e atmosfera serale.'],['Da Dong','2 h','Cena importante con anatra alla pechinese.']]},
  {day:8, city:'Pechino', title:'Grande Muraglia a Mutianyu', image:'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=80', summary:'Giornata panoramica sulla Muraglia, meno caotica e molto scenografica.', stops:[['Trasferimento a Mutianyu','1,5–2 h','Driver, taxi o tour privato con partenza presto.'],['Grande Muraglia Mutianyu','3–4 h','Funivia, salita, camminata sulle torri e discesa in slittino se disponibile.'],['Pranzo semplice','1 h','Pausa pratica vicino a Mutianyu o lungo il rientro.'],['Rientro a Pechino','1,5–2 h','Serata libera e tranquilla per recuperare energie.']]},
  {day:9, city:'Pechino', title:'Templi tibetani, hutong e Palazzo d’Estate', image:'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80', summary:'Una giornata tra spiritualità, vicoli tradizionali e grande paesaggio imperiale.', stops:[['Lama Temple / Yonghe Temple','1–1,5 h','Tempio lamaista scenografico con incenso, cortili e padiglioni.'],['Tempio di Confucio','45 min','Visita breve e tranquilla vicino al Lama Temple.'],['Campana, Tamburo, Nanluoguxiang e Lago Qianhai','1,5–2 h','Torri, hutong, caffè e vista sul lago.'],['Palazzo d’Estate + Lago Kunming','3 h','Grande giardino imperiale con lago, colline, barca di marmo e corridoio decorato.'],['Beihai Park','1 h','Opzionale se resta energia: lago, stupa bianco e atmosfera rilassata.']]},
  {day:10, city:'Pechino', title:'Ultima mattina e partenza', image:'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=80', summary:'Colazione lenta, bagagli e trasferimento verso l’aeroporto con largo anticipo.', stops:[['Mattina libera','Variabile','Ultimi acquisti o passeggiata breve senza appesantire la giornata.'],['Hotel → aeroporto','50–90 min','Taxi/Didi con margine ampio, considerando traffico e controlli.']]}
];

const timeline = document.querySelector('#timeline');
const dialog = document.querySelector('#placeDialog');
const dialogImage = document.querySelector('#dialogImage');
const dialogCity = document.querySelector('#dialogCity');
const dialogTitle = document.querySelector('#dialogTitle');
const dialogText = document.querySelector('#dialogText');

function render(filter = 'all') {
  timeline.innerHTML = days.filter(d => filter === 'all' || d.city === filter).map(day => `
    <article class="day" data-city="${day.city}">
      <div class="day-head">
        <div class="day-image" style="background-image:url('${day.image}')"></div>
        <div class="day-title">
          <p class="eyebrow">Giorno ${day.day} · ${day.city}</p>
          <h3>${day.title}</h3>
          <p>${day.summary}</p>
          <div class="meta"><span>${day.stops.length} tappe</span><span>Durate indicative</span><span>No orari precisi</span></div>
        </div>
      </div>
      <div class="stops">
        ${day.stops.map(stop => `<article class="stop" data-city="${day.city}" data-title="${stop[0]}" data-duration="${stop[1]}" data-text="${stop[2]}" data-image="${day.image}"><small>${stop[1]}</small><h4>${stop[0]}</h4><p>${stop[2]}</p></article>`).join('')}
      </div>
    </article>`).join('');
}

render();

document.querySelectorAll('.chip').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.chip').forEach(chip => chip.classList.remove('active'));
  button.classList.add('active');
  render(button.dataset.filter);
}));

document.addEventListener('click', event => {
  const stop = event.target.closest('.stop');
  if (!stop) return;
  dialogImage.src = stop.dataset.image;
  dialogImage.alt = stop.dataset.title;
  dialogCity.textContent = `${stop.dataset.city} · ${stop.dataset.duration}`;
  dialogTitle.textContent = stop.dataset.title;
  dialogText.textContent = stop.dataset.text;
  dialog.showModal();
});

document.querySelector('.close').addEventListener('click', () => dialog.close());
document.querySelector('.menu-toggle').addEventListener('click', () => document.querySelector('.nav-links').classList.toggle('open'));
