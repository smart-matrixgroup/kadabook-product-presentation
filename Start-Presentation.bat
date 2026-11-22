@echo off
REM KadaBook presentation launcher: starts the local server and opens the browser in FULL SCREEN.
cd /d "%~dp0"
if not exist node_modules (echo Installing packages, first time only... & call npm install)
start "KadaBook server" /min cmd /c "npm run dev"
echo Starting KadaBook presentation...
timeout /t 5 /nobreak >nul
set URL=http://localhost:5180/
where chrome >nul 2>nul && (start "" chrome --new-window --start-fullscreen %URL% & goto :eof)
if exist "%ProgramFiles%\Google\Chrome\Application\chrome.exe" (start "" "%ProgramFiles%\Google\Chrome\Application\chrome.exe" --new-window --start-fullscreen %URL% & goto :eof)
if exist "%LocalAppData%\Google\Chrome\Application\chrome.exe" (start "" "%LocalAppData%\Google\Chrome\Application\chrome.exe" --new-window --start-fullscreen %URL% & goto :eof)
start "" msedge --new-window --start-fullscreen %URL%
