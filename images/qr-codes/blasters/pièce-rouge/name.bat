@echo off
setlocal enabledelayedexpansion

rem Compteur pour incrémenter le numéro
set "numero=1"

rem Parcours tous les fichiers .png dans le dossier courant
for %%F in (*.png) do (
    rem Crée le nouveau nom avec le format qr-piece-rouge-XX.png
    set "nouveauNom=qr-piece-rouge-!numero!.png"

    rem Renomme le fichier
    ren "%%F" "!nouveauNom!"

    rem Incrémente le compteur
    set /a "numero+=1"
)

echo Tous les fichiers ont été renommés !
pause
