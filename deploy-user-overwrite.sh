{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 #!/usr/bin/env sh\
\
# filepath: /Users/pelinho/Desktop/Website Portfolio/portfolio_website/deploy-user-overwrite.sh\
# abort on errors\
set -e\
\
echo "Building application..."\
# build\
npm run build\
\
echo "Preparing files for GitHub Pages..."\
# navigate into the build output directory\
cd dist\
\
# create a .nojekyll file to bypass GitHub Pages Jekyll processing\
touch .nojekyll\
\
# copy index.html to 404.html to handle SPA routing\
cp index.html 404.html\
\
# Initialize git in the dist folder\
git init\
git add -A\
git commit -m 'Deploy to pelinhx.github.io'\
\
# Force push to overwrite existing repository\
echo "Deploying to pelinhx.github.io..."\
git push -f git@github.com:pelinhx/pelinhx.github.io.git main:main\
\
cd -\
echo "Deployment complete!"}