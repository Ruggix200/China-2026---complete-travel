# Cina 2026 · Itinerario interattivo

Questo repository contiene un sito statico in HTML, CSS e JavaScript per visualizzare l'itinerario del viaggio in Cina.

## Come visualizzare il sito

### Metodo consigliato: server locale

1. Apri il terminale nella cartella del progetto.
2. Avvia un piccolo server locale:

```bash
python3 -m http.server 4174
```

3. Apri il browser e vai a questo indirizzo:

```text
http://127.0.0.1:4174/
```

4. Per fermare il server, torna nel terminale e premi `Ctrl + C`.

### Metodo rapido: aprire il file direttamente

Puoi anche aprire direttamente il file `index.html` nel browser, ma il server locale è più affidabile per vedere immagini e interazioni come in un sito vero.

## Cosa puoi fare nel sito

- Scorrere tutto l'itinerario giorno per giorno.
- Filtrare le giornate per città: Shanghai, Suzhou, Xi'an e Pechino.
- Cliccare una tappa per aprire una scheda dettaglio con foto, durata e descrizione.
- Consultare la rotta del viaggio e i consigli rapidi finali.

## Come vederlo su GitHub

Quando il repository viene pubblicato su GitHub, il sito può essere messo online con GitHub Pages.

1. Vai su **Settings** del repository GitHub.
2. Apri **Pages**.
3. In **Build and deployment**, scegli **GitHub Actions**.
4. Vai nella tab **Actions** e avvia o attendi il workflow **Deploy static site to GitHub Pages**.
5. Alla fine del workflow GitHub mostrerà l'URL pubblico del sito.

Il workflow è già incluso in `.github/workflows/deploy-pages.yml`.

## Come scaricare il file completo da GitHub

Per scaricare tutto il sito da GitHub:

1. Apri la pagina principale del repository.
2. Clicca il pulsante verde **Code**.
3. Seleziona **Download ZIP**.
4. Estrai lo ZIP sul computer.
5. Apri `index.html` oppure avvia il server locale con `python3 -m http.server 4174`.

Lo ZIP contiene i file del sito: `index.html`, `styles.css`, `script.js`, `README.md` e il workflow GitHub Pages. Le immagini vengono caricate da URL esterni, quindi non ci sono file binari da aggiornare nel ramo.

## Errore GitHub: "I file binari non sono supportati"

Se GitHub mostra ancora l'errore **"I file binari non sono supportati"**, probabilmente stai provando ad aggiornare una PR vecchia che nella sua cronologia contieneva immagini `.jpg`.

In questo caso non basta che i file binari siano stati cancellati in un commit successivo: alcuni strumenti di aggiornamento ramo leggono comunque la cronologia della PR e continuano a bloccarla.

Soluzione consigliata:

1. Chiudi la PR vecchia che mostra l'errore.
2. Usa una PR nuova creata dalla branch text-only più recente.
3. Verifica che nella lista dei file della PR compaiano solo file testuali:
   - `.github/workflows/deploy-pages.yml`
   - `README.md`
   - `index.html`
   - `script.js`
   - `styles.css`
4. Non devono comparire file `.jpg`, `.jpeg`, `.png`, `.gif` o `.webp`.

La branch text-only attuale non contiene file immagine binari: le immagini sono URL esterni dentro `script.js`.
