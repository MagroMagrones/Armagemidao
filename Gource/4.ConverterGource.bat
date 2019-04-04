@echo off

echo.A6PGP2019 convertendo Gource.ppm para .avi
echo.
echo.Por favor aguarde!

ffmpeg -y -r 60 -f image2pipe -vcodec ppm -i ".\gource.ppm" -vcodec libx264 -preset ultrafast -pix_fmt yuv420p -crf 1 -threads 0 -bf 0 ".\Gource BBWatch.avi"



del /F /Q gource.ppm

exit