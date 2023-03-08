# Descrizione Script

Gli script in esecuzione sulla macchina ec2 vengono avviati ogni minuto tramite il tusk scheduler cron configurato con i seguenti comandi:
- \* * * * * /home/ec2-user/MOBILE_PROJECT/move-files.sh >> /outputcrontab/outputcrontab.log 2>&1
- \* * * * * /home/ec2-user/MOBILE_PROJECT/download_dataset.sh >> /outputcrontab/download_dataset.log 2>&1

## download-dataset.sh
Script che viene eseguito sulla macchina ec2 per scaricare il file csv tramite api (utilizzato per effettuare le analisi e mostrare sul sitoweb le caratteristiche del dispositivo selezionato) e poi caricato su bucket s3.

## analize-data.py
Lo script in questione viene eseguito su servizio lambda in aws. 
Apre i file da analizzare e calcola:
- Telefono più costoso
- Telefono più economico
- Telefono più venduto
- Telefoni tot. venduti
- Marca Telefono più venduto

Una volta effettuati tutti i calcoli genera un file .txt caricato su bucket s3 che verrà poi utilizzato dal sitoweb.

## move-files.sh
Script che viene eseguito sulla macchina ec2 per copiare i file dal bucket s3 alla cartella /data condivisa tra macchina ec2 e container docker.

