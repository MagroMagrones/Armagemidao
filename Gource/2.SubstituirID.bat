@echo off
REM -- Prepare the Command Processor --
SETLOCAL ENABLEEXTENSIONS
SETLOCAL DISABLEDELAYEDEXPANSION

::BatchSubstitude - parses a File line by line and replaces a substring"
::syntax: BatchSubstitude.bat OldStr NewStr File
::          OldStr [in] - string to be replaced
::          NewStr [in] - string to replace with
::          File   [in] - file to be parsed

:$changed 20100115
:$source http://www.dostips.com

SET OLDUserOne=sp1372424
SET NEWUserOne=AndreAngelo

SET OLDUserTwo=sp1371452
SET NEWUserTwo=BrunoFonseca

SET OLDUserThree=sp147474x
SET NEWUserThree=FernandaSantos

SET OLDUserFour=sp166574x
SET NEWUserFour=JulioCesar

SET OLDUserFive=SP1472275
SET NEWUserFive=PaolaOliveira

SET OLDUserSix=sp166655x
SET NEWUserSix=WilliamEiti

SET FILE=bbwatch.log
SET NFILE=%TEMP%\bbwatch_temp.log

del %NFILE% /q

echo.A6PGP2019 substituindo USERIDs pelos NOMES dos membros da equipe.
echo.
echo.Por favor arguarde!

for /f "tokens=1,* delims=]" %%A in ('"type %FILE%|find /n /v """') do (
    set "line=%%B"
    if defined line (
        call set "line=%%line:%OLDUserOne%=%NEWUserOne%%%" 
		call set "line=%%line:%OLDUserTwo%=%NEWUserTwo%%%" 
		call set "line=%%line:%OLDUserThree%=%NEWUserThree%%%" 
		call set "line=%%line:%OLDUserFour%=%NEWUserFour%%%" 
		call set "line=%%line:%OLDUserFive%=%NEWUserFive%%%"
		call set "line=echo.%%line:%OLDUserSix%=%NEWUserSix%%%"
        for /f "delims=" %%X in ('"echo."%%line%%""') do %%~X >> "%NFILE%"
    )
)

:: copia novo para lugar do original
copy "%NFILE%" "%FILE%" 