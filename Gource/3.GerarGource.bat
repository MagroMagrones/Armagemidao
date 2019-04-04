@echo off
echo.A6PGP2019 gerando o Gource do BBWatch
echo. 
echo. Por favor aguarde!

call gource ".\bbwatch.log" --user-image-dir ".\Avatares" --key --stop-at-end -f --seconds-per-day 1 -b 000500 --disable-progress  --title "Gource do bbwatch" --hide filenames -o ".\gource.ppm" --caption-file ".\caption.txt" --caption-offset -1 --caption-colour FF8C00 --caption-size 28 --caption-duration 6

exit