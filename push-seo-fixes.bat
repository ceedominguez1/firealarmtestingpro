@echo off
REM One-click commit + push of today's SEO fixes
cd /d "%~dp0"

echo === FireAlarmTestingPro: pushing SEO fixes ===
echo.

echo Staging changes...
git add robots.txt sitemap.xml index.html services.html annual-testing.html maintenance.html lighting.html compliance.html areas.html seo-reports/ style.css
if errorlevel 1 goto error

echo.
echo Committing...
git commit -m "SEO: add LocalBusiness/Service/FAQ schema, sitemap, robots.txt, canonicals, OG/Twitter cards, pinned Lucide, meta descriptions for all pages"
if errorlevel 1 goto error

echo.
echo Pushing to GitHub...
git push
if errorlevel 1 goto error

echo.
echo === DONE — changes live on firealarmtestingpro.com in ~1 minute ===
echo.
echo Next: 1) drop favicon.png in images/   2) submit sitemap at https://search.google.com/search-console
pause
exit /b 0

:error
echo.
echo === Something went wrong. Common fixes:
echo   - Make sure git is installed (https://git-scm.com/)
echo   - Make sure you're logged in to GitHub (GitHub Desktop will store creds, or run: git config --global user.email you@example.com)
echo   - If push asks for password, use a Personal Access Token instead (https://github.com/settings/tokens)
pause
exit /b 1
