@echo off 
mkdir %date:~-4,4%-%date:~-7,2%-%date:~-10,2%
cd %date:~-4,4%-%date:~-7,2%-%date:~-10,2% 
mongodump --uri mongodb+srv://adolfo:adolfo2003@cluster0.2rm2780.mongodb.net/Proyecto
exit /b 0
