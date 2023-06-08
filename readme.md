# CAMPO MINATO

#### PROVEDIMENTO

- Recupero gli elementi dal dom
- Metto in ascolto il bottone play
    - Cancello i nodi per assicurarmi che al click del bottone play sia tutto vuoto
    - Stabilisco quante sono le celle da creare a seconda della scelta del player nella select
    - Creo un ciclo per creare le celle, scrivere i numeri e renderle cliccabili
        - Creo il nodo 
        - Aggiungo le classi al nodo appena creato
        - Stampo il nodo nel HTML
        - Utilizzo la i per scrivere i numeri dentro le celle, incrementendo di uno in modo che la prima cella parta da 1 e non da zero
        - Stampo nel dom, dentro la cella il numero
        - Metto in ascolto la cella 
            - Al click deve aggiungere la classe per colorarla diversamente
            - Loggo in console il numero della cella cliccata