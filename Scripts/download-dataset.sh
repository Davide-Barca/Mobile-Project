#!/bin/bash
kaggle datasets download -d devsubhash/flipkart-mobiles-dataset
sleep 10
unzip flipkart-mobiles-dataset.zip
aws s3 cp Flipkart_Mobiles.csv s3://finale-project/Flipkart_Mobiles.csv
rm Flip*
rm flip*