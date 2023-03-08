import json
import boto3
import csv
import io
from collections import Counter

s3 = boto3.client('s3')


def lambda_handler(event, context):
    obj = s3.get_object(Bucket='finale-project', Key='Flipkart_Mobiles.csv')

    #csvfile = s3.get_object(Bucket=bucket, Key=file_key)
    #.split(b',')
    csvcontent = obj['Body'].read().decode('utf-8')
    #print(csvcontent)
    buf = io.StringIO(csvcontent)
    reader = csv.DictReader(buf, delimiter=",")
    rows=list(reader)
    print(len(rows))
    
    prezzoalto = 0
    prezzobasso = 5000000
    nomealto = ""
    nomebasso = ""
    
    
    #telefono più costoso
    for row in rows:
        if int(row['Original Price']) > prezzoalto:
            prezzoalto = int(row['Original Price'])
            nomealto = row['Brand'] + row['Model'] + row['Color']
    
    print(f'Prezzo più alto {prezzoalto} Posizione più alta {nomealto}')
    
    #telefono meno costoso
    for row in rows:
        if int(row['Original Price']) < prezzobasso:
            prezzobasso = int(row['Original Price'])
            nomebasso = row['Brand'] + row['Model'] + row['Color']
            
    print(f'Prezzo più basso {prezzobasso} Posizione più alta {nomebasso}')
    
    #numero modelli per marca
    listamarche = []
    for row in rows:
        listamarche.append(row['Brand'])
    res = Counter(listamarche)
    print(res)
    
    obj = s3.get_object(Bucket='finale-project', Key='phoneSold.csv')
    
    csvcontent = obj['Body'].read().decode('utf-8')
    buf = io.StringIO(csvcontent)
    reader = csv.DictReader(buf, delimiter=",")
    rows=list(reader)
    print(len(rows))
    
    unit = 0
    nome = ""
    marca = ""
    #telefono più venduto
    for row in rows:
        if int(row['units']) > int(unit):
            unit = row['units']
            nome = row['name']
            marca = row['marca']
    
    print(f'il cell più venduto è {nome} della marca {marca} con un numero di pezzi pari a {unit} milioni')
    
    output = open("/tmp/output.txt", "w+")
    output.write(nome+"\n"+nomealto+"\n"+nomebasso+"\n"+marca+"\n"+unit+"\n"+str(res))
    output.close()
    output = open("/tmp/output.txt", "r+")
    print(output.read())
    
    s3.upload_file('/tmp/output.txt', 'finale-project', 'output.txt')