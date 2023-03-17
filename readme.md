# Mobile Project
## Scripting & DevOps - AWS
Repository Mobile Project made by:
- Davide Barca
- Davide Biancato
- Davide Bianchi
- Riccardo Mammarella
- Andrea Caprioni

## Schema Infrastruttura
<img src="/Documenti/infrastruttura.jpeg">

## Servizi Utilizzati
### Scripting & DevOps
- Python
- HTML
- CSS
- Javascript
- PHP
- MySQL
- Git
- GitHub

### Aws
- VPC(Subnet, Elastic IP, Internet Gateway)
- LoadBalancer
- EC2
- S3
- RDS
- AWS Backup
- StepFunction
- Lambda
- SNS Topic
- Route 53
- Docker

## Descrizione progetto

Realizzazione di un infrastruttura su Aws per ospitare un sito web che offre statistiche e dettagli sugli smartphone presenti sul mercato.
Servizi offerti all'interno del sito web:
- Confronto di due smartphone
- Specifiche tecniche di uno smartphone
- Statistiche sugli smartphone in circolazione

L'infrastruttura realizzata su Aws è stata progetta in modo da essere ridondata e prevista di business continuity. Nel caso in cui le due macchine che rispondono alle richieste del Load Balancer dovessero avere problemi, l'infrastruttura viene ricreata tramite step function partendo dagli ultimi backup delle macchine e del database.

